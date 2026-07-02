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
    targetId: "role-han-lab",
    ctaLabel: "View research experience",
    blurb:
      "Tumour-burden annotation with the Han Lab at Stanford Medicine — turning lung-cancer imaging into reasoning a clinician can act on.",
  },
  {
    id: "nourish-meal-explorer",
    label: "Precision Nutrition",
    shortLabel: "Nutrition",
    route: "/project/nourish-meal-explorer",
    ctaLabel: "Open case study",
    blurb:
      "NOURISH uses behaviour-change design and recommendation systems to make preventive nutrition stick, not just inform.",
  },
  {
    id: "pgx-llm-copilot",
    label: "Pharmacogenomics",
    shortLabel: "Pharmacogenomics",
    route: "/project/pgx-llm-copilot",
    ctaLabel: "Open case study",
    blurb:
      "GenieRX turns pharmacogenomic evidence and CPIC guidelines into safer, more legible prescribing at the point of care.",
  },
];

export const PrecisionMedicineSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const prefersReducedMotion = usePrefersReducedMotion();

  const activeIndex = hovered ?? selected;
  const active = categories[activeIndex];
  const open = (index: number) => {
    const category = categories[index];
    setSelected(index);

    if ("route" in category && category.route) {
      navigate(category.route);
      return;
    }

    if ("targetId" in category && category.targetId) {
      document.getElementById(category.targetId)?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

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
    <section className="w-full bg-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500" />
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Precision Medicine
          </p>
        </div>
        <h2 className="max-w-3xl text-4xl font-bold tracking-tighter text-black md:text-6xl">
          Precision-care portfolio
        </h2>
      </div>

      {/* 3D helix stage */}
      <div className="mx-auto mt-10 max-w-6xl">
        <div className="relative">
          <div className="relative aspect-[5/2] w-full">
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
              {active.ctaLabel}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
