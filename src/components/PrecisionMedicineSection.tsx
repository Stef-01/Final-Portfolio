import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { DnaHelix } from "./DnaHelix";

const categories = [
  {
    id: "precision-oncology",
    label: "Precision Oncology",
    shortLabel: "Oncology",
    blurb:
      "EGFR tumour-burden work with Summer Han, focused on translating signal-rich oncology insight into more usable precision-care reasoning.",
  },
  {
    id: "nourish-meal-explorer",
    label: "Precision Nutrition",
    shortLabel: "Nutrition",
    blurb:
      "NOURISH explores how behavior-change design and recommendation systems can make preventive nutrition feel intelligent, adaptive, and humane.",
  },
  {
    id: "pgx-llm-copilot",
    label: "Pharmacogenomics",
    shortLabel: "PGx",
    blurb:
      "An AI-assisted prescribing concept that translates pharmacogenomic evidence into a safer, more legible workflow for everyday clinical use.",
  },
];

export const PrecisionMedicineSection = () => {
  const [activeId, setActiveId] = useState(categories[0].id);
  const navigate = useNavigate();
  const prefersReducedMotion = usePrefersReducedMotion();
  const activeCategory =
    categories.find((category) => category.id === activeId) ?? categories[0];
  const activeIndex = Math.max(
    0,
    categories.findIndex((category) => category.id === activeId),
  );

  return (
    <section className="w-full bg-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Precision Medicine
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
              A DNA-led map into the most translational precision-care work
            </h2>
            <p className="mt-4 max-w-2xl text-base md:text-xl leading-relaxed text-gray-600">
              Hover the DNA structure to surface the broader frame, then move
              through the categories that matter most: oncology, nutrition, and
              pharmacogenomics.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onMouseEnter={() => setActiveId(category.id)}
                  onFocus={() => setActiveId(category.id)}
                  onClick={() => navigate(`/project/${category.id}`)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 ${
                    activeId === category.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg shadow-blue-500/30"
                      : "border border-black/10 bg-white text-gray-600 hover:border-blue-500/40 hover:text-blue-700"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <motion.div
              className="relative overflow-hidden rounded-[28px] border border-black/10 bg-[#fafafa] p-6 md:p-8 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
            >
              <div className="relative z-10 grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-center">
                <motion.button
                  type="button"
                  onHoverStart={() => setActiveId(activeCategory.id)}
                  onClick={() => navigate(`/project/${activeCategory.id}`)}
                  className="group relative mx-auto flex h-[260px] w-[260px] items-center justify-center rounded-full border-2 border-blue-600 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 md:h-[300px] md:w-[300px]"
                  animate={
                    prefersReducedMotion ? undefined : { rotate: [0, 2, -2, 0] }
                  }
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  aria-label={`Open ${activeCategory.label}`}
                >
                  <motion.div
                    className="relative flex h-full w-full items-center justify-center"
                    whileHover={
                      prefersReducedMotion ? undefined : { scale: 1.03 }
                    }
                  >
                    <DnaHelix
                      className="absolute inset-0 h-full w-full"
                      activeIndex={activeIndex}
                      segments={categories.length}
                      accent="#2563eb"
                    />
                    <div className="absolute inset-x-0 bottom-7 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                      <Sparkles className="h-4 w-4" />
                      {activeCategory.shortLabel}
                    </div>
                  </motion.div>
                </motion.button>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">
                    Precision medicine navigator
                  </p>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-black">
                    Hover to expand the frame. Click to enter the work.
                  </h3>
                  <motion.div
                    key={`${activeCategory.id}-detail`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                    className="mt-5 rounded-[20px] border border-black/10 bg-white p-5"
                  >
                    <p className="text-xl font-bold tracking-tight text-black">
                      {activeCategory.label}
                    </p>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-700">
                      {activeCategory.blurb}
                    </p>
                    <button
                      type="button"
                      onClick={() => navigate(`/project/${activeCategory.id}`)}
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
                    >
                      Open case study
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
