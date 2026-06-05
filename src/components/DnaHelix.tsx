import React, { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface DnaHelixProps {
    /** Index of the segment that should glow (maps to the active category). */
    activeIndex: number;
    /** Number of vertical segments the helix is divided into (one per category). */
    segments: number;
    /** Accent colour for the active segment. */
    accent?: string;
    className?: string;
}

/**
 * Procedurally drawn, continuously rotating DNA double-helix on a Canvas2D
 * surface. The rungs are split into `segments` bands; the band matching
 * `activeIndex` glows in the accent colour while the rest stay neutral, so the
 * helix doubles as the precision-medicine category navigator. Pointer X within
 * the canvas adds a pseudo-3D tilt. Honors prefers-reduced-motion (static frame,
 * no rAF) and cleans up its animation frame + observer on unmount.
 */
export function DnaHelix({ activeIndex, segments, accent = "#2563eb", className }: DnaHelixProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // Mutable refs so the rAF loop reads the latest values without restarting.
    const activeRef = useRef(activeIndex);
    const pointerRef = useRef(0);
    const prefersReducedMotion = usePrefersReducedMotion();

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

        const TURNS = 2.4;
        const RUNGS = 26;

        const pointAt = (t: number, offset: number, amp: number, cx: number, top: number, span: number) => {
            const a = phase + t * TURNS * Math.PI * 2 + offset;
            const tilt = pointerRef.current;
            return {
                x: cx + Math.sin(a) * amp * (1 + tilt * 0.18),
                y: top + t * span,
                depth: Math.cos(a),
            };
        };

        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            const cx = W / 2;
            const amp = W * 0.26;
            const padding = H * 0.1;
            const top = padding;
            const span = H - padding * 2;

            // Strands (drawn first, behind the rungs).
            for (const offset of [0, Math.PI]) {
                let prev = pointAt(0, offset, amp, cx, top, span);
                for (let i = 1; i <= 60; i++) {
                    const p = pointAt(i / 60, offset, amp, cx, top, span);
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
                const a = pointAt(t, 0, amp, cx, top, span);
                const b = pointAt(t, Math.PI, amp, cx, top, span);
                const seg = Math.min(segments - 1, Math.floor(t * segments));
                const isActive = seg === activeRef.current;
                const depthAlpha = (a.depth + 1) / 2;

                if (isActive) {
                    ctx.strokeStyle = accent;
                    ctx.globalAlpha = 0.55 + depthAlpha * 0.45;
                    ctx.shadowColor = accent;
                    ctx.shadowBlur = 14;
                    ctx.lineWidth = 2.4;
                } else {
                    ctx.strokeStyle = `rgba(15,23,42,${0.16 + depthAlpha * 0.24})`;
                    ctx.globalAlpha = 1;
                    ctx.shadowBlur = 0;
                    ctx.lineWidth = 1.4;
                }
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();

                // Base-pair nodes.
                ctx.shadowBlur = isActive ? 10 : 0;
                ctx.fillStyle = isActive ? accent : `rgba(15,23,42,${0.26 + depthAlpha * 0.2})`;
                for (const pt of [a, b]) {
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, isActive ? 3.2 : 2.2, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.globalAlpha = 1;
                ctx.shadowBlur = 0;
            }
        }

        if (prefersReducedMotion) {
            draw();
            return () => observer.disconnect();
        }

        const loop = () => {
            phase += 0.012;
            draw();
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            observer.disconnect();
        };
    }, [accent, segments, prefersReducedMotion]);

    const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        pointerRef.current = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    };
    const handlePointerLeave = () => {
        pointerRef.current = 0;
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
