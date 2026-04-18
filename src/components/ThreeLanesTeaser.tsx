import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Microscope, Landmark, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const lanes = [
  {
    id: "research",
    to: "/research",
    eyebrow: "Research",
    title: "Clinical, precision, and population health research",
    summary:
      "Precision oncology, pharmacogenomics, oculomics, Indigenous implementation, and global-health surveillance — five concurrent research roles across Stanford, ANU, and WHO.",
    icon: Microscope,
    tag: "5 research roles",
  },
  {
    id: "policy",
    to: "/policy",
    eyebrow: "Policy",
    title: "Government, implementation, and national capability",
    summary:
      "Policy analysis and implementation work across the Australian Parliament, Department of Social Services, NDIS reform, and AI-era biosecurity.",
    icon: Landmark,
    tag: "4 initiatives",
  },
  {
    id: "industry",
    to: "/industry",
    eyebrow: "Industry",
    title: "Founding, advising, and building health-tech ventures",
    summary:
      "NOURISH, Sous, GenieRX (Harvard HSIL 7th/3,500), Adcem Pharma dialysis JV, Microsoft Healthcare from the Eye, Stanford XR Hackathon — the building work.",
    icon: Rocket,
    tag: "9 ventures",
  },
];

export function ThreeLanesTeaser() {
  return (
    <section className="w-full bg-white px-4 pt-20 pb-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">
            Three lanes, one portfolio
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
            Research. Policy. Industry.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base md:text-xl leading-relaxed text-gray-600">
            Each lane runs on its own timeline with its own work. Every role,
            paper, and project lives on its dedicated page — pick a lane to
            explore.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {lanes.map((lane, index) => {
            const Icon = lane.icon;

            return (
              <motion.div
                key={lane.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={lane.to}
                  className="group block h-full overflow-hidden rounded-[28px] border border-black/10 bg-[#fafafa] p-8 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-4"
                >
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white text-black">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">
                    {lane.eyebrow}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black leading-tight">
                    {lane.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-gray-700">
                    {lane.summary}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {lane.tag}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
