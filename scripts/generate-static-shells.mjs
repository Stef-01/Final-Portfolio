import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

/**
 * Post-build static shells: writes dist/<route>/index.html per route with
 * route-specific <title>, meta description, canonical, og:url/og:title, and
 * a route-specific <noscript> summary.
 *
 * Why: the app is client-rendered, and most AI crawlers (GPTBot, ClaudeBot,
 * PerplexityBot) do not execute JS — without shells, every URL looks like the
 * homepage head plus an empty div. Vercel serves an existing static file
 * before applying the SPA rewrite, so these shells are what non-JS crawlers
 * receive, while browsers hydrate the same app as before.
 *
 * Node-only on purpose: no headless browser exists in the Vercel build image.
 * Route metadata below mirrors usePageMeta — update both when adding a route
 * (see docs/superpowers/specs/2026-07-19-overhaul-roadmap.md, stage 8b).
 */

const ORIGIN = "https://stefan-portfolio-sable.vercel.app";

const routes = [
  {
    path: "/research",
    title: "Research — Stefan Thottunkal",
    description:
      "Clinical, precision, and population health research: pharmacogenomics, AI-enabled diagnostics, Indigenous health implementation. 10 peer-reviewed publications, 91 citations. Stanford Prevention Research Center.",
  },
  {
    path: "/policy",
    title: "Policy — Stefan Thottunkal",
    description:
      "Australian public policy and government: three Department of Social Services teams (NDIS, National Redress Scheme), a Parliamentary Library internship, and Indigenous primary-care implementation research.",
  },
  {
    path: "/industry",
    title: "Industry — Stefan Thottunkal",
    description:
      "Health-tech ventures and advisory: Casa, GenieRX (2nd in the US at Harvard HSIL), the Adcem–Fidson dialysis joint venture in Nigeria, and Microsoft × Stanford Medicine HFTE.",
  },
  {
    path: "/education",
    title: "Education — Stefan Thottunkal",
    description:
      "Teaching and curriculum: research methods at ANU, Stanford Medicine NOURISH clinical-nutrition curriculum, and the TLIA entrepreneurship bootcamp as Program Lead.",
  },
  {
    path: "/bio",
    title: "Bio — Stefan Thottunkal",
    description:
      "Stefan Thottunkal — Stanford M.S. in Community Health and Prevention Research, MD candidate at Macquarie University, IIE QUAD Fellow. Precision medicine, health policy, and digital-health ventures.",
  },
  {
    path: "/presentations",
    title: "Presentations — Stefan Thottunkal",
    description:
      "Conference presentations, posters, and invited talks: Stanford Grand Rounds, CPIC, Lowitja, AMSA Global Health, TETHICON, and the QUAD Fellowship Summit.",
  },
  {
    path: "/project/casa",
    title: "Casa — Stefan Thottunkal",
    description:
      "A culinary-medicine platform that turns personalised guidance into health-optimised meal kits from restaurants people already know.",
  },
  {
    path: "/project/swaad",
    title: "SWAAD — Stefan Thottunkal",
    description:
      "A culturally grounded precision nutrition platform for Indian vegetarian communities.",
  },
  {
    path: "/project/nourish-meal-explorer",
    title: "NOURISH Meal Pairer AI — Stefan Thottunkal",
    description:
      "Turning familiar meals into balanced, culturally relevant plates through a health-literacy-aware pairing experience. Stanford Medicine NOURISH.",
  },
  {
    path: "/project/pgx-llm-copilot",
    title: "Pharmacogenomics LLM Copilot — Stefan Thottunkal",
    description:
      "GenieRX — an LLM tool for gene-guided prescribing. 2nd in the US and 7th of 3,500 teams globally at Harvard HSIL.",
  },
  {
    path: "/project/neuragility-xr-prehab",
    title: "NeurAgility XR Prehab — Stefan Thottunkal",
    description:
      "XR Hack the Bay Social Good winner: a wearable-signal and immersive-training prototype for precision prehabilitation.",
  },
  {
    path: "/project/healthcare-from-the-eye",
    title: "Healthcare from the Eye — Stefan Thottunkal",
    description:
      "An implementation model for AI-enabled diabetic-retinopathy screening across primary care, ophthalmology, payers, and technology partners. Microsoft × Stanford MED 232.",
  },
  {
    path: "/project/ent-readmission-platform",
    title: "PainGone PainGuin — Stefan Thottunkal",
    description:
      "A two-sided home-recovery concept for children after tonsillectomy and adenoidectomy. Stanford Biodesign for Digital Health.",
  },
  {
    path: "/project/dialysis-device-gtm",
    title: "Adcem × Fidson Dialysis Access — Stefan Thottunkal",
    description:
      "Building a local manufacturing and home peritoneal-dialysis pathway for Nigeria through Stanford GSB SEED.",
  },
];

const dist = path.resolve("dist");
const template = readFileSync(path.join(dist, "index.html"), "utf8");
const esc = (s) => s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

let written = 0;
for (const route of routes) {
  const url = `${ORIGIN}${route.path}`;
  let html = template;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);
  html = html.replace(
    /(<meta name="description" content=")[^"]*(")/,
    `$1${esc(route.description)}$2`,
  );
  html = html.replace(
    /(<meta property="og:title" content=")[^"]*(")/,
    `$1${esc(route.title)}$2`,
  );
  html = html.replace(
    /(<meta property="og:description" content=")[^"]*(")/,
    `$1${esc(route.description)}$2`,
  );
  html = html.replace(
    /(<meta property="og:url" content=")[^"]*(")/,
    `$1${url}$2`,
  );
  html = html.replace(
    /(<meta name="twitter:title" content=")[^"]*(")/,
    `$1${esc(route.title)}$2`,
  );
  html = html.replace(
    /(<meta name="twitter:description" content=")[^"]*(")/,
    `$1${esc(route.description)}$2`,
  );
  // Per-route canonical — replace the template's homepage canonical in
  // place (a second tag would leave crawlers to pick between duplicates,
  // and the runtime hook updates the first tag it finds).
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${url}$2`,
  );
  // Route-specific noscript summary for non-JS crawlers. Anchored to the
  // <main> body block — the head has a second <noscript> (font fallback)
  // that must survive untouched.
  html = html.replace(
    /<noscript>\s*<main[\s\S]*?<\/noscript>/,
    `<noscript>
        <main style="max-width: 42rem; margin: 4rem auto; padding: 0 1.5rem; font-family: system-ui, sans-serif; line-height: 1.6;">
          <h1>${esc(route.title.replace(" — Stefan Thottunkal", ""))}</h1>
          <p>${esc(route.description)}</p>
          <p>
            Part of Stefan Thottunkal's digital health portfolio.
            Summary for assistants: <a href="/llms.txt">/llms.txt</a> ·
            <a href="/">Home</a> ·
            <a href="mailto:stefan01@stanford.edu">stefan01@stanford.edu</a>
          </p>
        </main>
      </noscript>`,
  );

  const outDir = path.join(dist, route.path.slice(1));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(path.join(outDir, "index.html"), html);
  written += 1;
}

// sitemap.xml from the same manifest — one source of truth, so adding a
// route here is the only step (no hand-maintained copy in public/ to drift).
const lastmod = new Date().toISOString().slice(0, 10);
const priorityFor = (p) =>
  ["/research", "/policy", "/industry"].includes(p)
    ? "0.9"
    : ["/education", "/bio"].includes(p)
      ? "0.8"
      : "0.7";
const sitemapEntries = [
  { path: "/", priority: "1.0" },
  ...routes.map((r) => ({ path: r.path, priority: priorityFor(r.path) })),
];
writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    sitemapEntries
      .map(
        (e) =>
          `  <url><loc>${ORIGIN}${e.path === "/" ? "/" : e.path}</loc>` +
          `<lastmod>${lastmod}</lastmod><priority>${e.priority}</priority></url>`,
      )
      .join("\n") +
    `\n</urlset>\n`,
);

console.log(`static shells: wrote ${written} routes + sitemap.xml (${sitemapEntries.length} URLs)`);
