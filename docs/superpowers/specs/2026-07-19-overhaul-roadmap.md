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

### Stage 4 — Broken and fragile assets (SHIPPED)
1. **Presentations files** *(done)* — viewer buttons HEAD-probe the file
   first (the SPA rewrite 200s every path, so the probe rejects `text/html`);
   missing files open an honest "Available on request" state with a mailto.
   When real files land in `public/files/`, the viewer opens them with no
   code change.
2. **Unsplash hotlinks** *(done — zero remain)* — GenieRX hero + gallery
   replaced with generated typographic cards in the project accent
   (`src/assets/pgx/`); SWAAD hero now uses its local product screenshot.
3. **`og:image` + `apple-touch-icon`** *(done in stage 8a)*.
4. **Per-route meta descriptions** *(done in stage 8a — `usePageMeta`)*.

Remaining follow-up: add the real talk PDFs/videos to `public/files/` when
available — the request-state fallback covers them until then.

### Stage 5 — Text diet, part two (SHIPPED — role summaries; talk titles kept verbatim as quoted academic titles)
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

### Stage 6 — Visual identity consolidation (SHIPPED — Playfair self-hosted, lane accent tokens, publications restyle, orbit de-emoji; Clash Grotesk stays on Fontshare per license)
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

### Stage 7 — Performance (SHIPPED — 9.9MB→2.3MB image diet, phone/data-saver Spline gate, LCP priority image)
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

### Stage 8 — SEO & AI discoverability program

Goal: when a person — or an AI assistant — asks "who works on pharmacogenomics
CDS / Indigenous health implementation / health-tech ventures", this site is
findable, quotable, and correctly attributed. Positioning principle: authority
is asserted through verifiable markers (QUAD Fellow, Stanford M.S., 2nd US at
Harvard HSIL, 10 publications, named institutions), never through adjectives —
both search rankers and LLMs discount self-description and reward evidence.

**8a — On-site technical SEO (implemented in this PR)**
- `usePageMeta`: per-route title, meta description, canonical, `og:*`, and
  twitter tags. Canonical pins the primary origin — the repo deploys to two
  Vercel projects and canonicals stop the mirrors competing as duplicates.
- `og-image.png` (1200×630 typographic card) + `apple-touch-icon.png`;
  `twitter:card = summary_large_image`.
- `robots.txt` (all crawlers allowed; explicit sections welcoming GPTBot,
  OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, et al.).
- `sitemap.xml` — now generated at build time from the static-shells route
  manifest (2026-08-08), so it can never drift from the shipped routes.
- `llms.txt` — machine-readable site summary for AI assistants; critical
  because the app is client-rendered and most AI crawlers do not execute JS.
- Structured data: enriched static `Person` (+affiliations, alumniOf, awards,
  knowsAbout) and `WebSite` in index.html (readable without JS); per-project
  `CreativeWork` + `BreadcrumbList`; per-publication `ScholarlyArticle` list
  on /research.
- Soft-404 mitigation: NotFound sets `robots: noindex` (the SPA rewrite
  answers every path with a 200).
- `<noscript>` bio block with links; accordion titles are real `<h3>`s so the
  document outline survives progressive disclosure.

**8b — Rendering strategy (SHIPPED as static shells; full prerender remains optional)**
The single biggest AI-discoverability constraint is client-side rendering:
GPTBot/ClaudeBot/PerplexityBot index the empty shell + static head only.
Implemented: `scripts/generate-static-shells.mjs` runs after `vite build`
(node-only — the Vercel build image has no browser) and writes
`dist/<route>/index.html` for all 14 non-home routes with per-route title,
description, og tags, canonical (replaced in place — no duplicates), and a
route-specific `<noscript>` summary. Vercel serves the static file before the
SPA rewrite, so non-JS crawlers get real per-URL metadata + text; browsers
hydrate the same app. Note: `vite preview` doesn't emulate directory-index
resolution — verify shells with `http-server dist`.
Content gap closed without a prerender (2026-08-08):
`scripts/generate-ai-content.mjs` bundles the real data modules with esbuild
(asset imports stubbed) and writes `dist/llms-full.txt` — every case-study
narrative, role, and publication as markdown, linked from llms.txt — plus
static JSON-LD in the shells (CreativeWork + BreadcrumbList per project,
the ScholarlyArticle ItemList on /research), mirroring what useJsonLd
injects at runtime. Non-JS crawlers now get the full content and the full
structured data. A DOM-level prerender or SSG migration remains possible
later but no longer guards any unreachable content.

**8c — Off-site authority (user actions; the site can only support these)**
- Google Search Console + Bing Webmaster: verify, submit sitemap.
- Keep Google Scholar profile current (it already feeds AI training/retrieval).
- ORCID record linking the publications; add ORCID URL to `sameAs`.
- Ensure LinkedIn headline matches the site's positioning language.
- University/lab pages (Stanford NOURISH, Han Lab) linking here — institutional
  backlinks are the strongest E-E-A-T signal available.
- Conference organizers (CPIC, Lowitja, AMSA) listing talks with links.

**8d — Accessibility + measurement (SHIPPED, incl. Lighthouse-per-PR)**
- Heading-order audit; landmark roles; skip link; contrast pass on gray-400.
- Vercel Analytics custom events: process-flow steps, accordion opens,
  contact clicks, file-viewer opens.
- Lighthouse-per-PR: `.github/workflows/lighthouse.yml` builds the site,
  serves `dist` with directory-index resolution (matching how Vercel serves
  the static shells), and runs `lhci autorun` on /, /research/,
  /project/casa/, /presentations/ with category assertions from
  `lighthouserc.json` — accessibility and SEO error below 0.98,
  best-practices below 0.9, performance warns below 0.6 (shared runners are
  too CPU-noisy for a hard perf gate).
- Audit pass (2026-08-08, mobile emulation): accessibility 100 and SEO 100
  on every audited route after fixing the roles-timeline list nesting
  (`ol > div > li`), the stat rows' `<dl>` misuse on four pages, and
  residual gray-400 text on white. `llms.txt` restructured into the
  llmstxt.org link-list format (Lighthouse 13 agentic-browsing 67/33 → 100
  across routes). Fontshare CSS now loads async via the print-media swap so
  a slow or unreachable font CDN can never block first paint; hashed
  `/assets/*` pinned `immutable` in vercel.json. Best-practices reads 96
  only off-Vercel (the analytics script 404s outside Vercel); performance
  64–76 under sandboxed mobile throttling, hence warn-only in CI.

---

## Working agreement
- One stage per PR-sized change set; verify with typecheck/lint/build +
  Chromium sweep (desktop + iPhone emulation + reduced motion) before push.
- Copy edits preserve every fact, number, institution, and honest caveat.
- New motion honors the tokens file and reduced-motion parity; nothing above
  300ms for interactive response.
