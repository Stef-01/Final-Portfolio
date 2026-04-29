import { useEffect } from "react";

/**
 * Toggles `html.snap-page`, which enables native CSS
 * `scroll-snap-type: y mandatory` (see globals.css). The browser handles
 * the snap natively — instant scroll response, ~200ms native snap-catch
 * when scrolling stops near a snap target. No JS-driven smooth-scroll
 * library: those interpolate wheel events over hundreds of milliseconds
 * which reads as input lag, not magnetism.
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
        return () => {
            document.documentElement.classList.remove("snap-page");
        };
    }, [enabled]);
}
