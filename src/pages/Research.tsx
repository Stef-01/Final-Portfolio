import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { PageIntro, PageShell } from "../components/PageShell";
import { PublicationsSection } from "../components/PublicationsSection";
import { PrecisionMedicineSection } from "../components/PrecisionMedicineSection";
import { SystemsMapSection } from "../components/SystemsMapSection";
import { RolesTimeline } from "../components/RolesTimeline";
import { researchRoles } from "../types/roles";
import { googleScholarUrl, scholarMetrics } from "../types/publications";

export function Research() {
  const [showPublications, setShowPublications] = useState(false);

  return (
    <PageShell>
      <PageIntro
        title="Clinical, precision, and population health research"
        description="Pharmacogenomics, precision oncology, AI-enabled diagnostics, and Indigenous health implementation."
        stats={[
          { value: scholarMetrics.publications, label: "publications" },
          { value: scholarMetrics.citations, label: "citations" },
          { value: scholarMetrics.hIndex, label: "h-index" },
          { value: scholarMetrics.i10Index, label: "i10-index" },
        ]}
      >
        <a
          href={googleScholarUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 underline decoration-gray-900/20 underline-offset-4 transition-colors hover:decoration-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
        >
          Google Scholar
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </PageIntro>

      <PrecisionMedicineSection />

      <RolesTimeline roles={researchRoles} title="Research roles" />

      <SystemsMapSection />

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-3xl">
              <h2 className="t-h2 font-bold tracking-[-0.03em] text-gray-900">
                Peer-reviewed publications
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Ten publications across pharmacogenomics, global health,
                implementation, and clinical outcomes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                aria-expanded={showPublications}
                aria-controls="publications-panel"
                onClick={() => setShowPublications((visible) => !visible)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
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
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
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
                className="mt-8 overflow-hidden rounded-[28px]"
              >
                <PublicationsSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

    </PageShell>
  );
}
