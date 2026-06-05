# Research page showpiece animations — design spec

**Date:** 2026-06-05
**Scope:** Two GPU-light "bold" showpiece interactions on the Research page, under the
"Signal → Synthesis" motion concept. Research-only. No three.js, no bundle blowup.
Reduced-motion + mobile fallbacks required.

## 1. Living scroll spine — `RolesTimeline`

Turn the hover-driven vertical timeline into a scroll-driven cinematic one.

- **Self-drawing spine:** the static hairline spine gains a foreground blue gradient
  fill whose height tracks the section's scroll progress (Motion `useScroll` on the
  `<ol>` ref, mapped to a fill height via `useTransform`).
- **Playhead comet:** a glowing blue dot fixed at ~42% of the viewport height, sitting
  on the spine, with soft blur + short trailing gradient.
- **Auto-ignite active role:** a rAF-throttled scroll handler measures each row's
  `getBoundingClientRect().top` against the playhead Y and sets the closest as active.
  The active node fills blue, pulses once (ripple), and its row auto-expands.
- **Interaction model:** scroll is primary (works on touch — permanently retires the
  prior hover-only mobile bug). Desktop hover and tap still set active as overrides.
- **Fallbacks:** `prefers-reduced-motion` → static full-height spine, no comet, active
  set by scroll without animated pulse. Mobile → same scroll behavior (the goal).
- **Isolation:** `RolesTimeline.tsx` + new `hooks/useActiveOnScroll.ts`. No data/route
  changes. The existing `hoveredId` state becomes the single "active id" source.

## 2. Living DNA helix — `PrecisionMedicineSection`

Replace the static lucide `Dna` icon in the 300px circle with a real animated helix.

- **New `components/DnaHelix.tsx` (Canvas2D):** two phase-offset sine strands + rungs,
  continuously rotating via a `requestAnimationFrame` phase advance. Depth via
  per-point alpha/radius (front vs back of rotation).
- **Category mapping:** the 3 categories map to 3 vertical rung-segments. The active
  category's base-pairs glow blue (`shadowBlur`); others dim. The helix eases its
  rotation so the active segment faces front (twist-toward-selection via a target
  phase the loop lerps toward).
- **Cursor parallax:** pointer-X within the circle offsets amplitude/phase for a
  pseudo-3D tilt.
- **Wiring:** driven by the existing `activeId`. Keeps the category pills, detail card,
  and "Open case study" CTA (already accented blue).
- **Fallbacks:** `prefers-reduced-motion` → static helix (no rAF), selection still
  highlights the segment. rAF cancelled on unmount. Canvas sized to device pixel ratio.
- **Isolation:** `DnaHelix.tsx` (self-contained) + minimal wiring in
  `PrecisionMedicineSection.tsx`.

## Tech constraints
- Canvas2D + scroll math only. No new WebGL/three.js dependency.
- Honor `usePrefersReducedMotion` (existing hook).
- Clean up all rAF / scroll listeners on unmount.
- Accent: Research blue (`#2563eb` / blue-600).

## Success criteria
- Timeline advances on scroll on both desktop and mobile (active role changes without
  hover); spine fills and comet tracks scroll; reduced-motion shows static spine.
- Helix renders, rotates, and twists toward the selected category; reduced-motion shows
  a static helix; no rAF leaks (cancelled on unmount).
- `tsc` clean, `vite build` green, no console errors, no mobile horizontal overflow.
