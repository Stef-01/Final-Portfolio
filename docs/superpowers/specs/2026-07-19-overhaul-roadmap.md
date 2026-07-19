# Site overhaul roadmap — multistage plan

**Date:** 2026-07-19
**Status:** Stages 1–3 shipped on `claude/site-design-animations-hnxtr2` (PR #9).
Stages 4–8 are the forward plan, ordered by user-visible impact over effort.
Companion spec: `2026-07-18-motion-refinement-plan.md` (stage 1–2 detail).

**North star:** a restrained, curated, calm, expressive portfolio — Swiss
editorial typography, physical motion, few words, high signal. Every stage is
judged against that bar, not against feature count.

---

## Shipped

### Stage 1 — Motion foundation (done)
Motion tokens (expo-out, duration scale, springs) · Reveal/RevealGroup ·
SplitTextReveal (masked word/char reveals) · Magnetic · ScrollProgressBar ·
real route transitions with scroll-reset on exit · WorkCard as real links ·
ContactModal enter/exit physics · image load fades · reduced-motion parity.

### Stage 2 — Engagement details (done)
Lane slide-swap + sibling-dim spotlight · hero per-character masked rise ·
hide-on-scroll case-study nav with docking compact title · per-route document
titles + tab-away wink · arrow slide-swaps · smooth mobile timeline accordion ·
count-up stats · sticky big-type footer with live clock · console calling-card.

### Stage 3 — Text diet + flow boxes (done)
Copy pass over all eight case studies (−~30% prose, zero facts lost, all
meta-commentary deleted) · ProcessFlow tabs (five labeled step blocks → one
animated panel) · SectionAccordion (stacked narrative sections → single-open
index) · tryhard labels removed ("Design rationale", "Execution evidence",
"Strategic priorities", "Venture evidence"). Case-study pages: ~7,000px →
~4,500px.

---

## Forward plan

### Stage 4 — Broken and fragile assets (highest priority — functionality)
Real defects, not polish:
1. **Presentations files 404.** Every talk references `/files/*.pdf|mp4`; the
   `public/files/` directory does not exist. Either add the files, or point
   buttons at hosted URLs, or disable the viewer buttons with an honest
   "available on request" state. Decide per talk — never ship a dead viewer.
2. **Unsplash hotlinks (5 remaining)** on GenieRX and SWAAD heroes/galleries.
   They gray-out under ad-blockers/proxies and add third-party weight. Replace
   with owned assets (product screenshots or typographic covers in the accent
   color; the NeurAgility title-card pattern works well).
3. **`og:image` + `apple-touch-icon`** — still TODO in index.html. Produce a
   1200×630 typographic card (name + "Digital Health Portfolio", black on
   white) and a 180×180 monogram; re-add the meta tags.
4. **Per-route meta descriptions** — extend `usePageTitle` into a
   `usePageMeta` that also swaps `<meta name="description">`.

Acceptance: no dead buttons, no third-party image hosts, rich link previews.

### Stage 5 — Text diet, part two (lane + secondary pages)
Same editorial rules as stage 3, applied to the remaining prose:
1. `types/roles.ts` — role summaries and deliverables across
   Research/Policy/Industry/Education (deliverable bullets ≤ 8 words,
   summaries 1 sentence).
2. Education cards — clamp deliverables to three with the accordion pattern if
   any card exceeds five bullets.
3. Presentations — topic strings read as paper abstracts; tighten to titles.
4. Captions sweep — gallery captions to one clause where they still run long.
5. Timeline mobile descriptions — already short; verify only.

Acceptance: no paragraph over two sentences anywhere outside case-study
narrative sections; lane pages scannable in one pass.

### Stage 6 — Visual identity consolidation
1. **Type system**: commit to Clash Grotesk everywhere (Playfair appears only
   in the About signature — either make the serif a deliberate accent used
   3+ times, or drop it). Self-host both fonts with `font-display: swap` and
   preload the display weight — kills the Fontshare FOUT.
2. **Accent discipline**: per-project accents exist (good); lane pages use
   ad-hoc blue/emerald/amber. Define one accent token per lane in
   `globals.css` and use it for spine, links, and focus states consistently.
3. **PublicationsSection** speaks a different dialect (navy buttons, serif
   titles) — restyle to the site's black-on-white grammar.
4. **VentureOrbit emoji** → monochrome lucide glyphs or typographic initials;
   emoji breaks the Swiss register.
5. Favicon: current SVG is fine; add dark-scheme variant.

Acceptance: one typographic voice, one accent system, no emoji in chrome.

### Stage 7 — Performance
1. **Spline cost**: `react-spline` + `three` + `physics` ≈ 5MB of lazy JS.
   Add a static hero poster (JPEG of the scene) shown immediately; boot
   Spline only on pointer-fine desktop with `saveData`/`deviceMemory` guards;
   never boot it on phones (currently only delayed).
2. `build.rollupOptions.manualChunks` to silence the 500kB warning and split
   vendor sanely; verify route-level chunks stay small.
3. Preload the LCP hero font subset; `fetchpriority="high"` on the first
   project image.
4. Convert remaining PNG decks (casa/, hfte/, adcem/, ent/ ≈ multi-MB) to
   WebP/AVIF at display resolution.
5. Budget: landing JS < 200kB gz before Spline; LCP < 2.0s on Fast 3G+.

### Stage 8 — Accessibility, SEO, measurement
1. Heading-order audit (several pages jump h1→h3); landmark roles; skip link.
2. Contrast pass on gray-400 text on white (fails AA at small sizes — bump to
   gray-500 where it carries meaning).
3. `sitemap.xml` + `robots.txt`; JSON-LD `CreativeWork` per project page.
4. Vercel Analytics custom events: process-flow step changes, accordion opens,
   contact clicks, file-viewer opens — measures whether the interactive
   modalities actually get used.
5. Lighthouse CI (or equivalent) run recorded per PR.

---

## Working agreement
- One stage per PR-sized change set; verify with typecheck/lint/build +
  Chromium sweep (desktop + iPhone emulation + reduced motion) before push.
- Copy edits preserve every fact, number, institution, and honest caveat.
- New motion honors the tokens file and reduced-motion parity; nothing above
  300ms for interactive response.
