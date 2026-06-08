import React, { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface DnaModelProps {
    /** Hovered segment index (0..segments-1) or null when not hovering. */
    hovered: number | null;
    /** Number of segments the helix is split into along its long axis. */
    segments: number;
    reducedMotion?: boolean;
    className?: string;
}

// Default colour + per-segment "filter" colours (blue family) + dim grey.
const BASE = 0x2563eb;
const SEG_COLORS = [0x2563eb, 0x0ea5e9, 0x6366f1]; // blue / sky / indigo
const DIM = 0xcbd5e1;

const SLOW = 0.0014; // gentle idle spin (50% slower than before)
const FAST = SLOW * 1.33; // ~30% faster than idle while hovering

/**
 * Renders the DNA strand GLB with a minimal three.js scene. The helix is laid
 * horizontal (long axis -> X) and spun continuously around that axis (matching
 * the original 2D helix motion). The mesh is split into `segments` colour bands
 * by position along the long axis: idle shows uniform blue, hovering a segment
 * lights that band in its accent colour, dims the rest, and speeds up the spin.
 * Lazy-loaded by the parent; three.js + GLB only download on reach.
 */
export function DnaModel({ hovered, segments, reducedMotion, className }: DnaModelProps) {
    const mountRef = useRef<HTMLDivElement>(null);
    const reduced = usePrefersReducedMotion() || !!reducedMotion;

    // Bridges React state into the imperative three.js loop without re-creating it.
    const hoveredRef = useRef<number | null>(hovered);
    const applyRef = useRef<(seg: number | null) => void>(() => {});
    const targetSpeedRef = useRef(SLOW);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        let raf = 0;
        let cancelled = false;
        let cleanup = () => {};

        (async () => {
            const THREE = await import("three");
            const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");
            const { DRACOLoader } = await import("three/examples/jsm/loaders/DRACOLoader.js");
            if (cancelled || !mountRef.current) return;

            const width = mount.clientWidth || 1;
            const height = mount.clientHeight || 1;

            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            renderer.setSize(width, height);
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            mount.appendChild(renderer.domElement);

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
            camera.position.set(0, 0, 6);

            scene.add(new THREE.AmbientLight(0xffffff, 0.95));
            const key = new THREE.DirectionalLight(0xffffff, 1.4);
            key.position.set(3, 4, 5);
            scene.add(key);
            const rim = new THREE.DirectionalLight(0x93c5fd, 0.7);
            rim.position.set(-4, -2, -3);
            scene.add(rim);

            const spin = new THREE.Group();
            scene.add(spin);

            let speed = SLOW;
            const render = () => renderer.render(scene, camera);

            const loader = new GLTFLoader();
            const draco = new DRACOLoader();
            draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
            loader.setDRACOLoader(draco);
            loader.load("/models/dna-v2.glb", (gltf) => {
                if (cancelled) return;
                const model = gltf.scene;

                let mesh: { geometry: import("three").BufferGeometry } | null = null;
                model.traverse((o) => {
                    const m = o as unknown as { isMesh?: boolean; geometry: import("three").BufferGeometry; material: unknown };
                    if (m.isMesh) {
                        m.material = new THREE.MeshStandardMaterial({
                            vertexColors: true,
                            metalness: 0.3,
                            roughness: 0.35,
                        });
                        if (!mesh) mesh = m;
                    }
                });

                // Centre on the geometry's bounding box.
                const box = new THREE.Box3().setFromObject(model);
                const size = new THREE.Vector3();
                const center = new THREE.Vector3();
                box.getSize(size);
                box.getCenter(center);
                model.position.sub(center);

                // Long axis = the largest dimension; lay it along world X.
                const dims = [size.x, size.y, size.z];
                const longAxis = dims.indexOf(Math.max(...dims));
                if (longAxis === 1) model.rotateZ(Math.PI / 2);
                else if (longAxis === 2) model.rotateY(Math.PI / 2);

                const holder = new THREE.Group();
                holder.add(model);
                holder.scale.setScalar(6.5 / Math.max(...dims));
                spin.add(holder);

                // Per-vertex segment index along the long axis + colour buffer.
                if (mesh) {
                    const geom = (mesh as { geometry: import("three").BufferGeometry }).geometry;
                    const pos = geom.attributes.position;
                    const count = pos.count;
                    geom.computeBoundingBox();
                    const gbox = geom.boundingBox ?? new THREE.Box3();
                    const lo = longAxis === 0 ? gbox.min.x : longAxis === 1 ? gbox.min.y : gbox.min.z;
                    const span = (longAxis === 0 ? gbox.max.x : longAxis === 1 ? gbox.max.y : gbox.max.z) - lo || 1;
                    const getComp = (i: number) =>
                        longAxis === 0 ? pos.getX(i) : longAxis === 1 ? pos.getY(i) : pos.getZ(i);

                    const seg = new Uint8Array(count);
                    for (let i = 0; i < count; i++) {
                        const f = (getComp(i) - lo) / span;
                        seg[i] = Math.min(segments - 1, Math.max(0, Math.floor(f * segments)));
                    }

                    const colorAttr = new THREE.Float32BufferAttribute(new Float32Array(count * 3), 3);
                    geom.setAttribute("color", colorAttr);
                    const tmp = new THREE.Color();

                    const applyFilter = (active: number | null) => {
                        for (let i = 0; i < count; i++) {
                            const s = seg[i];
                            const hex = active === null ? BASE : s === active ? SEG_COLORS[s % SEG_COLORS.length] : DIM;
                            tmp.set(hex);
                            colorAttr.setXYZ(i, tmp.r, tmp.g, tmp.b);
                        }
                        colorAttr.needsUpdate = true;
                        render();
                    };
                    applyRef.current = applyFilter;
                    applyFilter(hoveredRef.current);
                }

                render();
            });

            const onResize = () => {
                const w = mount.clientWidth || 1;
                const h = mount.clientHeight || 1;
                renderer.setSize(w, h);
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
                render();
            };
            const observer = new ResizeObserver(onResize);
            observer.observe(mount);

            const animate = () => {
                speed += (targetSpeedRef.current - speed) * 0.07;
                spin.rotation.x += speed;
                render();
                raf = requestAnimationFrame(animate);
            };
            if (reduced) {
                render();
            } else {
                raf = requestAnimationFrame(animate);
            }

            cleanup = () => {
                cancelAnimationFrame(raf);
                observer.disconnect();
                draco.dispose();
                renderer.dispose();
                renderer.domElement.remove();
            };
        })();

        return () => {
            cancelled = true;
            cancelAnimationFrame(raf);
            cleanup();
        };
    }, [reduced, segments]);

    // React to hover: recolour the active segment and speed up the spin.
    useEffect(() => {
        hoveredRef.current = hovered;
        targetSpeedRef.current = reduced ? 0 : hovered !== null ? FAST : SLOW;
        applyRef.current(hovered);
    }, [hovered, reduced]);

    return <div ref={mountRef} className={className} />;
}
