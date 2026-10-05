/**
 * Shared motion tokens. EASE_OUT is a strong ease-out (fast start, soft
 * landing) used for entrances and reveals; the same curve backs Tailwind's
 * `ease-out` utility via --ease-out in globals.css. Spatial movement that can
 * be interrupted (the nav indicator) uses SPRING instead.
 */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const SPRING = { type: "spring", duration: 0.45, bounce: 0.15 } as const;
