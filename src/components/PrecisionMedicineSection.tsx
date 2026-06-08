import React, { Suspense, lazy, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { DnaHelix } from "./DnaHelix";

// The 3D model + renderer (~3.4 MB GLB) only loads once the section is reached.
const DnaModel = lazy(() => import("./DnaModel").then((m) => ({ default: m.DnaModel })));

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
    shortLabel: "Pharmacogenomics",
    blurb:
      "An AI-assisted prescribing concept that translates pharmacogenomic evidence into a safer, more legible workflow for everyday clinical use.",
  },
];

export const PrecisionMedicineSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const prefersReducedMotion = usePrefersReducedMotion();

  const activeIndex = hovered ?? selected;
  const active = categories[activeIndex];
  const open = (index: number) => navigate(`/project/${categories[index].id}`);

  const fallbackHelix = (
    <DnaHelix
      className="absolute inset-0 block h-full w-full"
      orientation="horizontal"
      activeIndex={activeIndex}
      segments={categories.length}
      accent="#2563eb"
    />
  );

  return (
    <section className="w-full bg-white px-4 py-24 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-blue-500" />
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Precision Medicine
          </p>
          <span className="h-px w-8 bg-blue-500" />
        </div>
        <h2 className="mx-auto max-w-3xl text-4xl md:text-6xl font-bold tracking-tighter text-black">
          A DNA-led map into the most translational precision-care work
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base md:text-xl leading-relaxed text-gray-500">
          Hover across the helix to move between oncology, nutrition, and
          pharmacogenomics.
        </p>
      </div>

      {/* 3D helix stage */}
      <div className="mx-auto mt-14 max-w-5xl">
        <div className="relative pt-16">
          {/* Pop-out leader line + label pointing at the hovered third */}
          <AnimatePresence>
            {hovered !== null && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute top-0 z-20 flex -translate-x-1/2 flex-col items-center"
                style={{ left: `${((hovered + 0.5) / categories.length) * 100}%` }}
              >
                <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-blue-700">
                  {categories[hovered].label}
                </span>
                <span className="mt-2 h-10 w-px bg-gradient-to-b from-blue-500/70 to-blue-500/0" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative h-[230px] w-full md:h-[360px]">
            {prefersReducedMotion ? (
              fallbackHelix
            ) : (
              <Suspense fallback={fallbackHelix}>
                <DnaModel
                  className="absolute inset-0 h-full w-full"
                  hovered={hovered}
                  segments={categories.length}
                  reducedMotion={false}
                />
              </Suspense>
            )}

            {/* Transparent hover zones drive category selection over the model */}
            <div
              className="absolute inset-0 z-10 grid grid-cols-3"
              onMouseLeave={() => setHovered(null)}
            >
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  type="button"
                  aria-label={`Open ${category.label}`}
                  onMouseEnter={() => setHovered(index)}
                  onFocus={() => {
                    setHovered(index);
                    setSelected(index);
                  }}
                  onBlur={() => setHovered(null)}
                  onClick={() => open(index)}
                  className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-inset"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Minimal segment ticks — keyboard-accessible, align under each band */}
        <div className="mt-5 grid grid-cols-3">
          {categories.map((category, index) => (
            <button
              key={category.id}
              type="button"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => {
                setHovered(index);
                setSelected(index);
              }}
              onBlur={() => setHovered(null)}
              onClick={() => open(index)}
              className={`px-1 text-center text-[11px] md:text-sm font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:text-blue-600 ${
                activeIndex === index ? "text-blue-600" : "text-gray-400 hover:text-blue-600"
              }`}
            >
              {category.shortLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Minimal active readout — text only, no card */}
      <div className="mx-auto mt-12 max-w-2xl text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              {active.blurb}
            </p>
            <button
              type="button"
              onClick={() => open(activeIndex)}
              className="group mt-5 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
            >
              Open case study
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
