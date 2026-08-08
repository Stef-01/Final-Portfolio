import { readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "esbuild";

/**
 * Post-build AI-readable content, closing the client-rendered content gap
 * without a headless browser (the Vercel build image has none):
 *
 * 1. dist/llms-full.txt — the complete case-study narratives, roles, and
 *    publications as markdown. Non-JS crawlers (GPTBot, ClaudeBot,
 *    PerplexityBot) otherwise never see this content: it lives in JS
 *    bundles. llms.txt links here as the index.
 * 2. Static JSON-LD injected into the per-route shells: CreativeWork +
 *    BreadcrumbList on each /project/<id>, the ScholarlyArticle ItemList on
 *    /research — mirroring what useJsonLd injects at runtime so crawlers
 *    and browsers see the same structured data.
 *
 * Data comes from the real src/types modules via an esbuild bundle with
 * asset imports stubbed — one source of truth, nothing to keep in sync.
 */

const ORIGIN = "https://stefan-portfolio-sable.vercel.app";
const dist = path.resolve("dist");
const tmpBundle = path.join(dist, ".ai-data.mjs");

await build({
  entryPoints: [path.resolve("scripts/ai-content-entry.ts")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: tmpBundle,
  logLevel: "silent",
  loader: Object.fromEntries(
    [".webp", ".png", ".jpg", ".jpeg", ".gif", ".svg", ".avif", ".mp4", ".webm", ".mov"].map(
      (ext) => [ext, "empty"],
    ),
  ),
});

const {
  projects,
  publications,
  googleScholarUrl,
  scholarMetrics,
  researchRoles,
  industryRoles,
  educationRoles,
  policyRoles,
} = await import(pathToFileURL(tmpBundle));
rmSync(tmpBundle);

/* ---------------------------------------------------------------- llms-full */

const lines = [];
const push = (...l) => lines.push(...l);

push(
  "# Stefan Thottunkal — Portfolio, full content",
  "",
  "> Complete text of the portfolio for AI assistants: every case study,",
  "> role, and publication. The index lives at /llms.txt; this file exists",
  "> because the site is a client-rendered React app whose narrative content",
  "> is otherwise invisible to non-JS crawlers.",
  "",
  `Contact: stefan01@stanford.edu · Site: ${ORIGIN}/`,
  "",
);

push("## Case studies", "");
for (const p of projects) {
  push(`### ${p.title} — ${ORIGIN}/project/${p.id}`, "");
  push(p.subtitle, "");
  if (p.description && p.description !== p.subtitle) push(p.description, "");
  push(
    `- Role: ${p.role}`,
    `- Context: ${p.client} · ${p.duration}`,
    `- Tags: ${p.tags.join(", ")}`,
    `- Outcome: ${p.outcome}`,
  );
  for (const s of p.stats) push(`- ${s.label}: ${s.value}`);
  push("");
  for (const h of p.highlights) push(`**${h.title}.** ${h.text}`, "");
  if (p.caseStudy) {
    push(`Design question: ${p.caseStudy.question}`, "", p.caseStudy.framing, "");
    for (const step of p.caseStudy.steps) {
      push(`- ${step.phase} — ${step.title}: ${step.rationale} ${step.execution}`);
    }
    push("");
  }
  for (const section of p.sections) {
    push(`#### ${section.title}`, "");
    for (const para of section.body) push(para, "");
  }
  if (p.links?.length) {
    for (const link of p.links) push(`- ${link.label}: ${link.url}`);
    push("");
  }
}

const laneRoles = [
  ["Research roles", researchRoles],
  ["Policy roles", policyRoles],
  ["Industry roles", industryRoles],
  ["Education & teaching roles", educationRoles],
];
for (const [heading, roles] of laneRoles) {
  push(`## ${heading}`, "");
  for (const r of roles) {
    const where = r.location ? ` · ${r.location}` : "";
    push(`### ${r.title} — ${r.organization} (${r.period}${where})`, "");
    push(r.summary, "");
    for (const d of r.deliverables) push(`- ${d}`);
    push("");
  }
}

push("## Peer-reviewed publications", "");
push(
  `${scholarMetrics.publications} publications · ${scholarMetrics.citations} citations · ` +
    `h-index ${scholarMetrics.hIndex} (Google Scholar, ${scholarMetrics.verified}): ${googleScholarUrl}`,
  "",
);
for (const pub of publications) {
  push(`### ${pub.title} (${pub.year})`, "");
  push(`${pub.authors} — ${pub.journal}. ${pub.authorRole}.`, "");
  push(pub.summary, "");
  if (pub.doi) push(`- DOI: https://doi.org/${pub.doi}`);
  push(`- Paper: ${pub.paperUrl}`, "");
}

push(
  "## Notes for assistants",
  "",
  "- Honest scope: prototypes are labeled as prototypes; clinical validation,",
  "  outcomes, and revenue figures are stated as targets or scenario models",
  "  wherever they have not been achieved. Quote them the same way.",
  "",
);

writeFileSync(path.join(dist, "llms-full.txt"), lines.join("\n"));

/* ------------------------------------------------- static JSON-LD in shells */

// Escape "<" so a title can never form "</script>" inside the tag.
const jsonLdTag = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

const injectHead = (file, tag) => {
  const html = readFileSync(file, "utf8");
  writeFileSync(file, html.replace("</head>", `${tag}\n    </head>`));
};

for (const p of projects) {
  injectHead(
    path.join(dist, "project", p.id, "index.html"),
    jsonLdTag({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CreativeWork",
          name: p.title,
          headline: p.subtitle,
          description: p.description,
          url: `${ORIGIN}/project/${p.id}`,
          keywords: p.tags.join(", "),
          author: { "@type": "Person", name: "Stefan Thottunkal", url: ORIGIN },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN },
            {
              "@type": "ListItem",
              position: 2,
              name: p.title,
              item: `${ORIGIN}/project/${p.id}`,
            },
          ],
        },
      ],
    }),
  );
}

injectHead(
  path.join(dist, "research", "index.html"),
  jsonLdTag({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Peer-reviewed publications by Stefan Thottunkal",
    url: `${ORIGIN}/research`,
    itemListElement: publications.map((pub, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "ScholarlyArticle",
        headline: pub.title,
        author: pub.authors,
        datePublished: String(pub.year),
        isPartOf: { "@type": "Periodical", name: pub.journal },
        url: pub.paperUrl,
        ...(pub.doi ? { sameAs: `https://doi.org/${pub.doi}` } : {}),
      },
    })),
  }),
);

console.log(
  `ai content: llms-full.txt (${projects.length} case studies, ` +
    `${publications.length} publications) + JSON-LD in ${projects.length + 1} shells`,
);
