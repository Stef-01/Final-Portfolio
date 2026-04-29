import { useEffect } from "react";

/**
 * Magnetic scroll-snap on the landing page.
 *
 * Pure native CSS:
 *   - `scroll-snap-type: y mandatory` (forces a snap point as the resting
 *     scroll position)
 *   - `scroll-snap-stop: always` on every snap target (browser must catch
 *     each snap point — fast flicks cannot skip past one)
 *   - `scroll-behavior: smooth` (browser animates the catch in ~150-200ms)
 *
 * No JS smooth-scroll library. An earlier iteration used Lenis on top of
 * mandatory CSS snap and produced visible overshoot: Lenis was setting the
 * scroll position past a snap target, the browser's snap engine immediately
 * yanked it back, and the visible result was content "flying past then
 * snapping back" — not magnetism. Native snap alone is reliable, instant,
 * and the strongest option that doesn't introduce that fight.
 *
 * Scoped to one route at a time via the `snap-page` class on <html>. Skips
 * when prefers-reduced-motion is set.
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
