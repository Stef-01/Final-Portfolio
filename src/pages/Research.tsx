import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, BookOpen, ChevronDown } from "lucide-react";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { useGoBack } from "../hooks/useGoBack";
import { ContactSection } from "../components/ContactSection";
import { PublicationsSection } from "../components/PublicationsSection";
import { PrecisionMedicineSection } from "../components/PrecisionMedicineSection";
import { SystemsMapSection } from "../components/SystemsMapSection";
import { RolesTimeline } from "../components/RolesTimeline";
import { researchRoles } from "../types/roles";
import { googleScholarUrl, scholarMetrics } from "../types/publications";

export function Research() {
  const goBack = useGoBack();
  const [showPublications, setShowPublications] = useState(false);

  return (
    <div className="min-h-[100svh] bg-white text-gray-900">
      <FloatingBackButton />

      <div className="relative overflow-hidden px-4 pt-16 md:pt-20 md:px-8">
        {/* Blue accent wash ties this page to the home hero's premium look */}
        <div className="pointer-events-none absolute inset-x-0 -top-24 z-0 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[18px] font-medium">Back</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Research
              </p>
            </div>
            <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-black leading-[0.95]">
              Clinical, precision, and population health research
            </h1>
            <p className="mt-6 max-w-3xl text-base md:text-xl leading-relaxed text-gray-600">
              Research spanning pharmacogenomics, precision oncology, AI-enabled
              diagnostics, Indigenous health implementation, outbreak response,
              cancer survivorship, and global disease burden—translated into
              peer-reviewed evidence, implementation models, and policy analysis.
            </p>

            <div className="mt-8 max-w-4xl overflow-x-auto rounded-full border border-white/70 bg-white/75 px-4 py-3 shadow-[0_24px_60px_-48px_rgba(59,130,246,0.55)] ring-1 ring-blue-500/10 backdrop-blur-md">
              <div className="flex min-w-max items-center gap-3 text-sm text-gray-500 md:text-base">
                {[
                  { k: scholarMetrics.publications, v: "publications" },
                  { k: scholarMetrics.citations, v: "citations" },
                  { k: scholarMetrics.hIndex, v: "h-index" },
                  { k: scholarMetrics.i10Index, v: "i10-index" },
                ].map((stat, index) => (
                  <div key={stat.v} className="flex items-center gap-3">
                    <span className="inline-flex items-baseline gap-1.5 whitespace-nowrap">
                      <span className="bg-gradient-to-br from-blue-600 to-indigo-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent md:text-3xl">
                        {stat.k}
                      </span>
                      <span className="font-medium text-gray-600">{stat.v}</span>
                    </span>
                    {index < 3 && <span className="h-1 w-1 rounded-full bg-blue-500/35" />}
                  </div>
                ))}

                <span className="h-5 w-px bg-black/10" />
                <a
                  href={googleScholarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-blue-800 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  Google Scholar · verified {scholarMetrics.verified}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <PrecisionMedicineSection />

      <RolesTimeline
        roles={researchRoles}
        eyebrow="Research Timeline"
        title="Every role, start to finish"
      />

      <SystemsMapSection />

      <section className="bg-white px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="rounded-[34px] border border-black/8 bg-[#f7f8fb] p-6 shadow-[0_30px_80px_-60px_rgba(22,38,58,0.55)] md:p-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-blue-500" />
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                    Publications
                  </p>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-black md:text-5xl">
                  Selected publications and citation record
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                  Open the full publications view for paper cards, filters,
                  full-text links, documents, and citation signals.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  aria-expanded={showPublications}
                  aria-controls="publications-panel"
                  onClick={() => setShowPublications((visible) => !visible)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  {showPublications ? "Hide Publications" : "See Publications"}
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
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-blue-600/15 bg-white px-5 py-2.5 text-sm font-semibold text-blue-800 shadow-sm transition-colors hover:border-blue-600/30 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  Google Scholar
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
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
                className="mt-8 overflow-hidden rounded-[34px]"
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
