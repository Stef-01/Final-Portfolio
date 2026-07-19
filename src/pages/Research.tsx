import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { useGoBack } from "../hooks/useGoBack";
import { usePageMeta, SITE_ORIGIN } from "../hooks/usePageMeta";
import { useJsonLd } from "../hooks/useJsonLd";
import { ContactSection } from "../components/ContactSection";
import { PublicationsSection } from "../components/PublicationsSection";
import { PrecisionMedicineSection } from "../components/PrecisionMedicineSection";
import { SystemsMapSection } from "../components/SystemsMapSection";
import { RolesTimeline } from "../components/RolesTimeline";
import { StatValue } from "../components/CountUp";
import { researchRoles } from "../types/roles";
import { googleScholarUrl, publications, scholarMetrics } from "../types/publications";

export function Research() {
  const goBack = useGoBack();
  usePageMeta({
    title: "Research",
    path: "/research",
    description:
      "Clinical, precision, and population health research: pharmacogenomics, AI-enabled diagnostics, Indigenous health implementation. 10 peer-reviewed publications, 91 citations. Stanford Prevention Research Center.",
  });
  // Publications as machine-readable scholarship — search engines and AI
  // assistants ingest ScholarlyArticle records directly.
  useJsonLd({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Peer-reviewed publications by Stefan Thottunkal",
    url: `${SITE_ORIGIN}/research`,
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
  });
  const [showPublications, setShowPublications] = useState(false);

  return (
    <div className="min-h-[100svh] bg-white text-gray-900">
      <FloatingBackButton />

      <div className="px-4 pt-16 md:pt-20 md:px-8">
        <div className="max-w-6xl mx-auto">
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg font-medium">Back</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="t-h1 font-bold tracking-tight text-black leading-[1.02]">
              Clinical, precision, and population health research
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-gray-600">
              Pharmacogenomics, precision oncology, AI-enabled diagnostics,
              Indigenous health implementation, outbreak response, cancer
              survivorship, and global disease burden.
            </p>

            <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-3">
              {[
                { k: scholarMetrics.publications, v: "publications" },
                { k: scholarMetrics.citations, v: "citations" },
                { k: scholarMetrics.hIndex, v: "h-index" },
                { k: scholarMetrics.i10Index, v: "i10-index" },
              ].map((stat) => (
                <span key={stat.v} className="flex items-baseline gap-2">
                  <StatValue value={stat.k} className="text-lg font-semibold text-black" />
                  <span className="text-sm text-gray-500">{stat.v}</span>
                </span>
              ))}
              <a
                href={googleScholarUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Google Scholar
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <PrecisionMedicineSection />

      <RolesTimeline roles={researchRoles} title="Research roles and collaborations" />

      <SystemsMapSection />

      <section className="bg-white px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-3xl">
              <h2 className="t-h2 font-bold tracking-tight text-black">
                Peer-reviewed publications
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Ten publications spanning pharmacogenomics, global health,
                implementation research, and clinical outcomes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                aria-expanded={showPublications}
                aria-controls="publications-panel"
                onClick={() => setShowPublications((visible) => !visible)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                {showPublications ? "Hide publications" : "View publications"}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    showPublications ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <a
                href={googleScholarUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-black/40 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Google Scholar
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <AnimatePresence initial={false}>
            {showPublications && (
              <motion.div
                id="publications-panel"
                key="publications"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 overflow-hidden rounded-2xl"
              >
                <PublicationsSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
