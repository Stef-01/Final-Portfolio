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

const IDLE = 0.00252; // idle spin — 80% quicker than the previous 0.0014
const HOVER = IDLE * 0.5; // hovering SLOWS the spin by 50% (opposite of before)
const DANCE = IDLE * 4.5; // fast "dance" burst on load
const INTRO_MS = 2600; // how long the load dance runs before settling to idle

/**
 * Renders the DNA strand GLB with a minimal three.js scene. The helix is laid
 * horizontal (long axis -> X) and spun continuously around that axis (matching
 * the original 2D helix motion). The mesh is split into `segments` colour bands
 * by position along the long axis: idle shows uniform blue, hovering a segment
 * lights that band in its accent colour, dims the rest, and slows the spin.
 * On load it briefly "dances" (fast spin + wobble) before settling to idle.
 * Lazy-loaded by the parent; three.js + GLB only download on reach.
 */
export function DnaModel({ hovered, segments, reducedMotion, className }: DnaModelProps) {
    const mountRef = useRef<HTMLDivElement>(null);
    const reduced = usePrefersReducedMotion() || !!reducedMotion;

    // Bridges React state into the imperative three.js loop without re-creating it.
    const hoveredRef = useRef<number | null>(hovered);
    const applyRef = useRef<(seg: number | null) => void>(() => {});
    const targetSpeedRef = useRef(IDLE);

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

            let speed = DANCE;
            // Intro timer starts when the model is actually added to the scene
            // (below), so the dance plays when the molecule first appears.
            let introStart = performance.now();
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
                // Start the loop now that the model is in the scene, so the
                // intro dance plays in full regardless of GLB download time.
                introStart = performance.now();
                if (!reduced) raf = requestAnimationFrame(animate);
            }, undefined, (err) => {
                console.error("[DnaModel] GLB load failed", err);
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
                const t = performance.now() - introStart;
                let target: number;
                if (t < INTRO_MS) {
                    // Load "dance": fast spin + a decaying wobble that eases into idle.
                    const k = t / INTRO_MS;
                    const ease = k * k * (3 - 2 * k); // smoothstep 0..1
                    target = DANCE * (1 - ease) + IDLE * ease;
                    const amp = 1 - ease;
                    spin.rotation.y = Math.sin(t * 0.011) * 0.28 * amp;
                    spin.rotation.z = Math.cos(t * 0.008) * 0.2 * amp;
                } else {
                    // Settled: hover slows it down, otherwise idle. Wobble eases out.
                    target = targetSpeedRef.current;
                    spin.rotation.y += (0 - spin.rotation.y) * 0.06;
                    spin.rotation.z += (0 - spin.rotation.z) * 0.06;
                }
                speed += (target - speed) * 0.07;
                spin.rotation.x += speed;
                render();
                raf = requestAnimationFrame(animate);
            };
            // The animation loop is started inside the GLTF callback above once
            // the model is present (reduced-motion renders a single static frame
            // there instead). Nothing to start here.

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

    // React to hover: recolour the active segment and SLOW the spin down.
    useEffect(() => {
        hoveredRef.current = hovered;
        targetSpeedRef.current = reduced ? 0 : hovered !== null ? HOVER : IDLE;
        applyRef.current(hovered);
    }, [hovered, reduced]);

    return <div ref={mountRef} className={className} />;
}
