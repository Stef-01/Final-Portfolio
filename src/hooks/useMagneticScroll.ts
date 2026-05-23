import { useEffect } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Magnetic scroll-snap with a programmable feather threshold and a custom
 * easing curve.
 *
 * Compared with the previous version (which used the browser's built-in
 * `window.scrollTo({ behavior: "smooth" })`) this one drives the scroll
 * position itself through a requestAnimationFrame loop. The browser's
 * native smooth-scroll uses a short quartic curve that lands abruptly —
 * this version uses easeOutExpo over 850 ms, which starts fast (the magnet
 * grabs you) and decelerates very softly into the target (the magnet
 * settles you in). Net effect is a softer, more magnetic catch.
 *
 * The feather threshold logic is unchanged:
 *   - 16% of viewport drift past the previous snap → auto-advance
 *   - below that → bounce back
 *   - free-scroll zones (gap between snap pairs > 1.2 viewports) →
 *     no intervention at all
 *
 * User input cancels the magnetic animation immediately: if you wheel
 * or touch during the catch, the animator releases and lets you take
 * over. After your input stops, the threshold logic re-evaluates.
 *
 * Bypassed when prefers-reduced-motion is set.
 */
export function useMagneticScroll(enabled: boolean = true) {
    const reduceMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (!enabled) return;
        if (typeof window === "undefined") return;
        if (reduceMotion) return;

        document.documentElement.classList.add("snap-page");

        const FEATHER = 0.16;
        const FREE_SCROLL_GAP = 1.35;
        const ANIMATION_MS = 850;
        const SCROLL_END_DEBOUNCE_MS = 110;

        let rafId = 0;
        let scrollEndTimer = 0;
        let isAnimating = false;
        let userInterrupted = false;
        let lastResolvedTarget = -1;

        type Target = { el: HTMLElement; top: number };

        const collectTargets = (): Target[] =>
            Array.from(document.querySelectorAll<HTMLElement>(".snap-start"))
                .map((el) => ({ el, top: el.getBoundingClientRect().top + window.scrollY }))
                .sort((a, b) => a.top - b.top);

        // easeOutExpo — fast initial pull, very soft landing. The hallmark
        // shape of a magnetic catch: the position approaches the target
        // asymptotically rather than wedging into it.
        const easeOutExpo = (t: number): number =>
            t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

        const animateTo = (targetY: number) => {
            cancelAnimationFrame(rafId);
            const startY = window.scrollY;
            const distance = targetY - startY;
            if (Math.abs(distance) < 1) return;

            const startTime = performance.now();
            isAnimating = true;
            userInterrupted = false;

            const step = (now: number) => {
                if (userInterrupted) {
                    isAnimating = false;
                    return;
                }
                const elapsed = now - startTime;
                const t = Math.min(elapsed / ANIMATION_MS, 1);
                const eased = easeOutExpo(t);
                // `behavior: "instant"` is critical here — without it the
                // browser's own `scroll-behavior: smooth` (set globally on
                // <html>) layers a second quartic ease on top of our expo,
                // turning the curve into a slow-then-fast monstrosity.
                window.scrollTo({ top: startY + distance * eased, behavior: "instant" });
                if (t < 1) {
                    rafId = requestAnimationFrame(step);
                } else {
                    isAnimating = false;
                }
            };

            rafId = requestAnimationFrame(step);
        };

        const resolve = () => {
            if (isAnimating) return;
            const y = window.scrollY;
            const vh = window.innerHeight;
            const targets = collectTargets();
            if (targets.length < 2) return;

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
            if (gap <= 0) return;
            if (gap > vh * FREE_SCROLL_GAP) return;

            const progress = (y - prev.top) / gap;
            const target = progress > FEATHER ? next.top : prev.top;

            if (Math.abs(y - target) < 4) return;
            if (target === lastResolvedTarget) return;
            lastResolvedTarget = target;
            window.setTimeout(() => {
                lastResolvedTarget = -1;
            }, ANIMATION_MS + 100);

            animateTo(target);
        };

        const onScroll = () => {
            window.clearTimeout(scrollEndTimer);
            scrollEndTimer = window.setTimeout(resolve, SCROLL_END_DEBOUNCE_MS);
        };

        // User input cancels the magnetic catch — they take back control.
        const onUserInput = () => {
            if (isAnimating) {
                userInterrupted = true;
                cancelAnimationFrame(rafId);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("wheel", onUserInput, { passive: true });
        window.addEventListener("touchstart", onUserInput, { passive: true });
        window.addEventListener("keydown", onUserInput);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("wheel", onUserInput);
            window.removeEventListener("touchstart", onUserInput);
            window.removeEventListener("keydown", onUserInput);
            cancelAnimationFrame(rafId);
            window.clearTimeout(scrollEndTimer);
            document.documentElement.classList.remove("snap-page");
        };
    }, [enabled, reduceMotion]);
}
