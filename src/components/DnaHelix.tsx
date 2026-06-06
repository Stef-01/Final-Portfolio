import React, { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface DnaHelixProps {
    /** Index of the segment that should glow (maps to the active category). */
    activeIndex: number;
    /** Number of segments the helix is divided into (one per category). */
    segments: number;
    /** Accent colour for the active segment. */
    accent?: string;
    /** Helix axis. Horizontal runs left→right; vertical runs top→bottom. */
    orientation?: "vertical" | "horizontal";
    /** Fired with the segment index under the pointer (or null on leave). */
    onHoverSegment?: (index: number | null) => void;
    className?: string;
}

/**
 * Procedurally drawn, continuously rotating DNA double-helix on a Canvas2D
 * surface. The rungs are split into `segments` bands; the band matching
 * `activeIndex` glows in the accent colour while the rest stay neutral, so the
 * helix doubles as the precision-medicine navigator. Pointer position adds a
 * pseudo-3D tilt and reports the hovered segment. Honors prefers-reduced-motion
 * (static frame, no rAF) and cleans up its frame + observer on unmount.
 */
export function DnaHelix({
    activeIndex,
    segments,
    accent = "#2563eb",
    orientation = "vertical",
    onHoverSegment,
    className,
}: DnaHelixProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // Mutable refs so the rAF loop reads the latest values without restarting.
    const activeRef = useRef(activeIndex);
    const pointerRef = useRef(0);
    const lastSegRef = useRef<number | null>(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    const horizontal = orientation === "horizontal";

    useEffect(() => {
        activeRef.current = activeIndex;
    }, [activeIndex]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        let W = 0;
        let H = 0;
        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            W = rect.width;
            H = rect.height;
            canvas.width = Math.round(W * dpr);
            canvas.height = Math.round(H * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resize();
        const observer = new ResizeObserver(() => {
            resize();
            if (prefersReducedMotion) draw();
        });
        observer.observe(canvas);

        let raf = 0;
        let phase = prefersReducedMotion ? 0.6 : 0;

        const TURNS = horizontal ? 5 : 2.4;
        const RUNGS = horizontal ? 46 : 26;

        // Point on a strand at progress t (0..1) along the primary axis.
        const pointAt = (t: number, offset: number) => {
            const a = phase + t * TURNS * Math.PI * 2 + offset;
            const tilt = pointerRef.current;
            const primaryLen = horizontal ? W : H;
            const crossCenter = horizontal ? H / 2 : W / 2;
            const amp = (horizontal ? H : W) * (horizontal ? 0.34 : 0.26);
            const pad = primaryLen * 0.08;
            const along = pad + t * (primaryLen - pad * 2);
            const across = crossCenter + Math.sin(a) * amp * (1 + tilt * 0.18);
            return horizontal
                ? { x: along, y: across, depth: Math.cos(a) }
                : { x: across, y: along, depth: Math.cos(a) };
        };

        const draw = () => {
            ctx.clearRect(0, 0, W, H);

            // Strands (behind the rungs).
            for (const offset of [0, Math.PI]) {
                let prev = pointAt(0, offset);
                for (let i = 1; i <= 80; i++) {
                    const p = pointAt(i / 80, offset);
                    const alpha = 0.3 + ((p.depth + 1) / 2) * 0.55;
                    ctx.strokeStyle = `rgba(37,99,235,${alpha})`;
                    ctx.lineWidth = 2.2;
                    ctx.beginPath();
                    ctx.moveTo(prev.x, prev.y);
                    ctx.lineTo(p.x, p.y);
                    ctx.stroke();
                    prev = p;
                }
            }

            // Rungs (base pairs), coloured by segment.
            for (let r = 0; r < RUNGS; r++) {
                const t = r / (RUNGS - 1);
                const a = pointAt(t, 0);
                const b = pointAt(t, Math.PI);
                const seg = Math.min(segments - 1, Math.floor(t * segments));
                const isActive = seg === activeRef.current;
                const depthAlpha = (a.depth + 1) / 2;

                if (isActive) {
                    ctx.strokeStyle = accent;
                    ctx.globalAlpha = 0.55 + depthAlpha * 0.45;
                    ctx.shadowColor = accent;
                    ctx.shadowBlur = 16;
                    ctx.lineWidth = 2.4;
                } else {
                    ctx.strokeStyle = `rgba(15,23,42,${0.14 + depthAlpha * 0.22})`;
                    ctx.globalAlpha = 1;
                    ctx.shadowBlur = 0;
                    ctx.lineWidth = 1.3;
                }
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();

                ctx.shadowBlur = isActive ? 12 : 0;
                ctx.fillStyle = isActive ? accent : `rgba(15,23,42,${0.24 + depthAlpha * 0.18})`;
                for (const pt of [a, b]) {
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, isActive ? 3.4 : 2.1, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.globalAlpha = 1;
                ctx.shadowBlur = 0;
            }
        };

        if (prefersReducedMotion) {
            draw();
            return () => observer.disconnect();
        }

        const loop = () => {
            phase += 0.01;
            draw();
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            observer.disconnect();
        };
    }, [accent, segments, horizontal, prefersReducedMotion]);

    const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width;
        const ny = (e.clientY - rect.top) / rect.height;
        pointerRef.current = (horizontal ? ny : nx) * 2 - 1;
        if (onHoverSegment) {
            const seg = Math.min(segments - 1, Math.max(0, Math.floor((horizontal ? nx : ny) * segments)));
            if (seg !== lastSegRef.current) {
                lastSegRef.current = seg;
                onHoverSegment(seg);
            }
        }
    };
    const handlePointerLeave = () => {
        pointerRef.current = 0;
        if (onHoverSegment && lastSegRef.current !== null) {
            lastSegRef.current = null;
            onHoverSegment(null);
        }
    };

    return (
        <canvas
            ref={canvasRef}
            className={className}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            aria-hidden="true"
        />
    );
}
