import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth-scroll + CSS scroll-snap orchestrator.
 *
 * - Enables `scroll-snap-type: y mandatory` on <html> via the `snap-page`
 *   class (see globals.css), so the browser's native magnetic snap kicks in
 *   for every `[data-snap]` section on the page.
 * - Initialises Lenis to interpolate wheel/touch events into a smooth scroll
 *   curve. The combination is what gives the "subtle magnetic" feel: Lenis
 *   handles the buttery glide, the browser handles the magnetic pull at the
 *   end of each glide.
 * - Skips both when `prefers-reduced-motion: reduce` is set.
 *
 * Call once on the route that should snap (e.g. the landing page). The hook
 * cleans up the class and the Lenis loop on unmount, so other routes keep
 * normal scrolling.
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
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            // Touch defaults to native (no smooth) — better for mobile snap.
            wheelMultiplier: 1,
            touchMultiplier: 1.4,
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
