import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Magnetic scroll-snap.
 *
 * Stack
 * -----
 *   1. Native CSS `scroll-snap-type: y mandatory` + `scroll-snap-stop: always`
 *      on every snap target → the browser always rests at a snap point and
 *      won't let a fast flick skip past one.
 *   2. Lenis interpolates wheel/touch input into a smooth scroll curve. The
 *      curve is short (0.4s, quart-out) so it reads as a magnetic *pull*
 *      toward the next snap point rather than the laggy 1.1s glide that an
 *      earlier iteration used. With Lenis driving the scroll position and
 *      mandatory CSS snap pulling the final position to the nearest target,
 *      the user feels a strong rubber-band pull on every flick — what the
 *      user calls a "twice-as-strong magnetic radius."
 *
 * Scoped to one route at a time. Skips when prefers-reduced-motion is set.
 */
export function useMagneticScroll(enabled: boolean = true) {
    useEffect(() => {
        if (!enabled) return;
        if (typeof window === "undefined") return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        if (reduceMotion) return;

        document.documentElement.classList.add("snap-page");

        const lenis = new Lenis({
            // Short duration → snappy, not laggy. Each wheel tick lands
            // visibly within ~250-300ms, then the browser's native snap
            // catches the rest.
            duration: 0.4,
            easing: (t) => 1 - Math.pow(1 - t, 4),
            smoothWheel: true,
            wheelMultiplier: 1.4,
            touchMultiplier: 1.6,
        });

        let frameId = 0;
        const raf = (time: number) => {
            lenis.raf(time);
            frameId = requestAnimationFrame(raf);
        };
        frameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(frameId);
            lenis.destroy();
            document.documentElement.classList.remove("snap-page");
        };
    }, [enabled]);
}
