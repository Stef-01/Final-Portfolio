# Site-wide motion & micro-refinement plan — 2026 pass

**Date:** 2026-07-18
**Scope:** Critical appraisal of functionality, micro-interactions, and animations
across the site, followed by a prioritized enhancement pass grounded in 2026 motion
conventions (Framer-ecosystem patterns, Motion/`motion/react` best practice).
Respects the June 2026 Research-page showpiece spec — Research keeps its scroll
spine + DNA helix; this pass focuses on the landing page, shared primitives,
project detail, and cross-cutting polish.

---

## Part 1 — Critical appraisal

### Functionality defects

| # | Finding | Where |
|---|---------|-------|
| F1 | `AnimatePresence mode="wait"` wraps `<Routes>` but no route defines exit animations — route transitions are inert; the wrapper is dead weight. | `App.tsx` |
| F2 | Project cards are `<button>` + `navigate()` — no real hyperlink: no cmd/middle-click, no status-bar URL, weaker crawlability. | `WorkCard.tsx` |
| F3 | `CountUp` exists but is unused — lane-page stats render static text. | `CountUp.tsx`, `Research/Policy/Industry/Education` |
| F4 | `DnaHelixOverlay` is dead code (no importers). | `components/` |
| F5 | CSS `transition-all` on Motion elements smears entrance reveals (CSS transition intercepts Motion's per-frame transform writes). | `PressSection.tsx`, `RolesGrid.tsx` |
| F6 | ContactModal: no exit animation (snaps closed), `animate-in` from tailwindcss-animate while the rest of the site uses Motion, backdrop without blur. | `ContactModal.tsx` |
| F7 | Footer links lack `focus-visible` rings; `#press` anchor jumps without smooth scroll. | `ScalehubStartupLp.tsx` |
| F8 | Scrollbar styling is WebKit-only (no `scrollbar-color`); `::selection` unstyled. | `globals.css` |
| F9 | `og:image` still a TODO. | `index.html` |
| F10 | Images pop in on load — no fade-in when the file arrives. | `ImageWithFallback.tsx` |

### Motion-quality gaps (vs. 2026 Framer-grade sites)

| # | Gap | Where |
|---|-----|-------|
| M1 | Hero has zero entrance choreography — name, subtitle, and buttons render statically; no scroll cue on a 100svh hero. | `ScalehubStartupLp.tsx` |
| M2 | No shared motion vocabulary: durations 0.45–0.8s, ad-hoc ease arrays, inconsistent viewport margins repeated inline ~20×. | site-wide |
| M3 | Headings reveal as whole blocks (fade + y). No masked line/word reveals anywhere — the intro statement is the obvious candidate. | `IntroSection.tsx` |
| M4 | Buttons have no tactile response: CSS-only hover, `active:scale` without spring, static icon. | `Button.tsx` |
| M5 | WorkCard hover uses a 700ms ease scale — sluggish; arrow micro-move is the only affordance. | `WorkCard.tsx` |
| M6 | Long case-study pages have no reading-progress affordance. | `ProjectDetail.tsx` |
| M7 | Route changes hard-cut (see F1) — modern sites use a short fade/slide handoff. | `App.tsx` |
| M8 | Generic gray-pulse `LoadingFallback` — unbranded. | `App.tsx` |

---

## Part 2 — 2026 motion direction (research synthesis)

Synthesized from 2026 trend reports (Figma, Envato, NN/g-adjacent UX guidance),
the Framer awards/marketplace ecosystem (Mask Text Reveal, magnetic buttons,
project hover reveal, sticky footer reveal — Olivier Larose tutorials, Framer
University), and motion.dev docs/performance guidance. Filtered for a minimal,
editorial, black-on-white portfolio. Taste bar: **subtle, fast, physical**.

Converged timing rules: micro-interactions <300ms; hovers 150–250ms; reveals
once (`viewport once`), ≤24px travel, expo-out `[0.22,1,0.36,1]`; springs for
anything pointer-driven (they inherit gesture velocity); `visualDuration`
spring API available in installed motion@11.18.
Anti-patterns 2026 dropped: scroll-jacking (native scroll + sticky mapping
replaced it), parallax on text, 700ms+ hovers, preloader gates, custom cursors
that replace the native one, animating layout/paint properties, "AOS fatigue"
(everything fades in), ignoring reduced motion (now treated as a WCAG defect).

Selected patterns (implemented in Part 3):

1. **Masked word/line reveal** — text rises from an `overflow-hidden` wrapper,
   staggered 40–80ms, expo-out. The 2026 headline default (Framer "Mask Text
   Reveal"). Compositor-only (translateY in a mask).
2. **Blur-up reveal** — `opacity 0 + blur(6–8px) + y` settling sharp, for
   subheads/intro copy. Radius ≤8px, never full-viewport.
3. **Springs for interactive response** — hover/press via `type: "spring"`
   (`visualDuration` ~0.2, bounce ≤0.2, or stiffness 300–500 / damping 20–30);
   reveals keep expo-out easings.
4. **Micro press-feedback** — `whileTap scale 0.97` with a stiff spring on every
   interactive element.
5. **Magnetic pull** — primary CTAs track the cursor a max of ~8–12px and spring
   back on leave. Desktop pointer-fine only; 1–2 elements per view.
6. **Route-level fade-through** — 200–300ms opacity + 8–12px y handoff between
   pages. View Transitions API is Baseline mid-2026, but Motion fade keeps one
   code path; no curtains for an editorial site.
7. **Scroll progress hairline** — 1–2px top bar, `useScroll` +
   `useSpring(…, { stiffness: 100, damping: 30, restDelta: 0.001 })`,
   case-study pages only.
8. **Pointer parallax on the hero** — headline drifts ≤8px / ≤2° opposite the
   cursor over the Spline scene; springs, desktop-only.
9. **Sticky big-type footer reveal** — footer pinned `sticky bottom-0` behind
   the page (`-z-10`), uncovered as the last section scrolls away; giant
   wordmark + editorial links. Requires `overflow-x-clip` (not `hidden`) on the
   page wrapper so sticky survives.
10. **Editorial underline** — `scaleX` 0→1 with `transform-origin` flip
    (grows left, exits right), 200ms, pure CSS. Nav/footer/inline links.
11. **Icon micro-choreography** — arrows nudge diagonally on hover
    (translate pair, 150–250ms).
12. **Image load fade** — opacity 0→1 on `onLoad` (~300ms) so media never pops.
13. **Scroll cue** — small animated line at the hero fold, fades after first
    scroll.
14. **Grid/list stagger via variants** — parent `staggerChildren` instead of
    per-item computed delays.
15. **Count-up stats** — `animate()` + `useInView` with `tabular-nums`
    (component already exists — wire it in).
16. **`::selection` + `scrollbar-color`** as brand micro-signatures.
17. **Reduced-motion parity** — every new effect collapses to opacity-only or
    static under `prefers-reduced-motion` (globally wired via
    `MotionConfig reducedMotion="user"`; JS-driven effects behind
    `usePrefersReducedMotion`).

Considered and rejected for this site: text scramble/decode (too flashy for
Swiss editorial), hover image-follower on a text index (work section already
shows full media cards), horizontal pinned strip (would fight the existing
magnetic snap pager), marquee ticker (timeline already covers affiliations),
`content-visibility: auto` (risks breaking snap-target measurement).

## Part 3 — Implementation plan

### A. Foundation (shared motion system)
- **`src/motion/tokens.ts`** — exported motion tokens:
  `EASE_OUT = [0.22, 1, 0.36, 1]`, duration scale (fast 0.3 / base 0.6 / slow 0.9),
  spring presets (`SPRING_TAP`, `SPRING_HOVER`, `SPRING_SOFT`), shared viewport
  margins.
- **`src/components/motion/Reveal.tsx`** — `Reveal` (fade+rise whileInView) and
  `RevealGroup`/stagger variants; replaces repeated inline boilerplate where touched.
- **`src/components/motion/SplitTextReveal.tsx`** — accessible masked per-word
  reveal (words wrapped in overflow-clipped spans, aria-label preserves the
  sentence; reduced-motion renders plain text).

### B. Landing page
- Hero entrance: staggered mount-time rise for h1 → subtitle (blur-up) → CTA
  row; pointer parallax (≤8px) on the headline block; a fold scroll-cue that
  fades after first scroll.
- `IntroSection`: masked word-stagger reveal for the statement (M3).
- `ThreeLanesTeaser`: variants-driven stagger; springy icon nudge on hover.
- `LatestWorkSection`: heading + capability pills via `Reveal` tokens.
- Footer: sticky big-type reveal (wordmark + links uncovered behind the page),
  editorial underline hovers, focus-visible rings, smooth-scroll `#press`
  anchor; page wrapper switches `overflow-x-hidden` → `overflow-x-clip`.

### C. Interactive primitives
- `Button`: Motion-ified — `whileTap` spring, hover arrow micro-slide, optional
  magnetic wrapper for hero CTAs (pointer-fine only).
- `WorkCard`: convert to real `<Link>`; hover scale via spring (≤300ms feel);
  image zoom springs; arrow nudge; keep layout identical.
- `FloatingSocials` / `FloatingBackButton`: spring hover/tap.
- `ImageWithFallback`: fade-in on load (F10).

### D. Route & page level
- `PageTransition` wrapper: fade-through on route change (F1/M7), honoring
  reduced motion; `LoadingFallback` rebranded (monogram + soft pulse).
- `ProjectDetail`: top scroll-progress hairline (M6); tag row/stat row stagger.
- `ContactModal`: AnimatePresence spring pop + blurred backdrop + animated exit (F6).

### E. Cross-cutting fixes
- F5: scope `transition-all` to colors on Motion elements (Press/RolesGrid).
- F3: wire `CountUp` into lane-page stat rows.
- F4: delete `DnaHelixOverlay`.
- F8: `::selection`, `scrollbar-color`.
- F9: leave og:image TODO (asset creation out of scope) — noted.

### Non-goals
- No changes to Research showpieces (spine/helix), TimelineSection's Figma canvas,
  VentureOrbit internals, or the magnetic scroll pager (already bespoke + tuned).
- No new heavy dependencies; everything ships through the existing `motion` package.

### Verification
- `npm run typecheck && npm run build && npm run lint`
- Headless Chromium screenshot sweep (desktop + 390px mobile) of `/`, `/research`,
  `/policy`, `/industry`, `/education`, `/project/casa`, `/bio`.
- Reduced-motion smoke check via CDP emulation.
