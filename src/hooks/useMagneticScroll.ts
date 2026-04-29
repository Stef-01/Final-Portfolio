import { useEffect } from "react";

/**
 * Magnetic scroll-snap with a programmable feather threshold.
 *
 * What this does that native CSS scroll-snap cannot
 * --------------------------------------------------
 * Native `scroll-snap-type: y mandatory` only catches the *nearest* snap
 * point when the user stops scrolling — that's roughly a 50% threshold,
 * meaning you have to drift more than half-way to the next section before
 * the magnet pulls you forward. The user wants stronger pull: if you drift
 * past a small "feather" (currently 16% of viewport) into the next
 * section, the page should auto-advance there instead of springing back.
 *
 * How it works
 * ------------
 * 1. CSS is set to `scroll-snap-type: y proximity` (gentle native fallback)
 *    so the browser still handles keyboard/anchor scrolls cleanly.
 * 2. This hook listens to scroll events on a 90 ms debounce. When the
 *    debounce fires (= scroll has paused), we evaluate:
 *      - find the nearest snap target above and below the current y
 *      - if those two targets are <= 1.2 viewports apart we are inside
 *        a "snap pair" (Hero↔Mission, Mission↔ThreeLanes, card↔card).
 *        Otherwise we're in a free-scroll zone (Timeline, the LatestWork
 *        header, Tinker, About) and we DON'T intervene.
 *      - inside a snap pair, compute progress = (y - prev) / (next - prev).
 *        If progress > FEATHER (16%) we smooth-scroll to `next.top`.
 *        Otherwise we smooth-scroll back to `prev.top`.
 * 3. While the smooth scroll is animating we ignore further scroll events
 *    so we don't fight the browser's animation.
 *
 * Net effect: any nudge past the feather threshold auto-pulls to the next
 * section. Below the threshold, the page springs back to the current one.
 * Free-scroll zones are completely untouched.
 *
 * No JS smooth-scroll library, no overshoot — only `window.scrollTo({
 * behavior: "smooth" })` which the browser tunes itself.
 *
 * Bypassed when prefers-reduced-motion is set.
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

        const FEATHER = 0.16; // 16% of viewport — well below native ~50%
        const PAIR_GAP_TOLERANCE = 1.2; // a "snap pair" is two targets ≤ 1.2vh apart
        const ANIMATION_LOCK_MS = 700;

        let scrollEndTimer = 0;
        let isAnimating = false;
        let lastResolvedTarget = -1;

        type Target = { el: HTMLElement; top: number };

        const collectTargets = (): Target[] =>
            Array.from(document.querySelectorAll<HTMLElement>(".snap-start"))
                .map((el) => ({ el, top: el.getBoundingClientRect().top + window.scrollY }))
                .sort((a, b) => a.top - b.top);

        const resolve = () => {
            const y = window.scrollY;
            const vh = window.innerHeight;
            const targets = collectTargets();
            if (targets.length < 2) return;

            // Find the snap-pair the user is currently inside.
            let prev: Target | null = null;
            let next: Target | null = null;
            for (let i = 0; i < targets.length - 1; i++) {
                if (y >= targets[i].top - 4 && y < targets[i + 1].top - 4) {
                    prev = targets[i];
                    next = targets[i + 1];
                    break;
                }
            }
            if (!prev || !next) return;

            const gap = next.top - prev.top;
            // Free-scroll zone: don't intervene.
            if (gap > vh * PAIR_GAP_TOLERANCE) return;

            const progress = (y - prev.top) / gap;
            const target = progress > FEATHER ? next.top : prev.top;

            // Don't re-scroll to a target the user already settled on.
            if (Math.abs(y - target) < 4) return;
            if (target === lastResolvedTarget) return;
            lastResolvedTarget = target;

            isAnimating = true;
            window.scrollTo({ top: target, behavior: "smooth" });
            window.setTimeout(() => {
                isAnimating = false;
                lastResolvedTarget = -1;
            }, ANIMATION_LOCK_MS);
        };

        const onScroll = () => {
            if (isAnimating) return;
            window.clearTimeout(scrollEndTimer);
            scrollEndTimer = window.setTimeout(resolve, 90);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.clearTimeout(scrollEndTimer);
            document.documentElement.classList.remove("snap-page");
        };
    }, [enabled]);
}
