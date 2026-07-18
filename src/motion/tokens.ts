import type { Transition } from "motion/react";

/**
 * Shared motion vocabulary. Reveals use expo-out easing over a small duration
 * scale; interactive feedback (hover/tap) uses springs so response speed is
 * proportional to gesture speed. Import these instead of re-declaring inline
 * ease arrays and one-off durations.
 */

/** Expo-out — fast start, asymptotic settle. The site's reveal curve. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DURATION = {
    /** Micro-moves: icon nudges, fades under 100px of travel. */
    fast: 0.3,
    /** Standard section/heading reveal. */
    base: 0.6,
    /** Large blocks entering (hero, full cards). */
    slow: 0.85,
} as const;

/** Standard whileInView viewport margin — start slightly before on-screen. */
export const VIEWPORT_MARGIN = "-80px";

/** Press feedback — stiff and immediate. */
export const SPRING_TAP: Transition = {
    type: "spring",
    stiffness: 500,
    damping: 30,
    mass: 0.5,
};

/** Hover lift/scale — quick with a soft settle, no visible oscillation. */
export const SPRING_HOVER: Transition = {
    type: "spring",
    stiffness: 320,
    damping: 24,
    mass: 0.6,
};

/** Larger structural moves (cards, modal pop) — a touch more mass. */
export const SPRING_SOFT: Transition = {
    type: "spring",
    stiffness: 210,
    damping: 26,
    mass: 0.9,
};

/** Standard reveal transition (fade + rise). */
export const revealTransition = (
    duration: number = DURATION.base,
    delay = 0,
): Transition => ({
    duration,
    delay,
    ease: EASE_OUT,
});

/** Variants for children of a staggering parent (see RevealGroup). */
export const revealItemVariants = (y = 24, duration: number = DURATION.base) => ({
    hidden: { opacity: 0, y },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: EASE_OUT },
    },
});
