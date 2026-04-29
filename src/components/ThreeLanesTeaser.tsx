import React from "react";
import { motion } from "motion/react";
import { Microscope, Landmark, Rocket, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const lanes = [
  {
    id: "research",
    to: "/research",
    title: "Research",
    summary: "Clinical, precision, and population health research.",
    icon: Microscope,
  },
  {
    id: "policy",
    to: "/policy",
    title: "Policy",
    summary: "Government implementation and national capability.",
    icon: Landmark,
  },
  {
    id: "industry",
    to: "/industry",
    title: "Industry",
    summary: "Founding and advising health-tech ventures.",
    icon: Rocket,
  },
];

export function ThreeLanesTeaser() {
  return (
    <section className="w-full bg-white px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-3 md:gap-0 md:divide-x md:divide-black/10">
          {lanes.map((lane, index) => {
            const Icon = lane.icon;
            return (
              <motion.div
                key={lane.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="md:px-10"
              >
                <Link
                  to={lane.to}
                  className="group flex h-full flex-col items-center text-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-8"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-black/12 transition-colors duration-300 group-hover:border-black/30 group-hover:bg-black/[0.03]">
                    <Icon className="h-5 w-5 text-black" strokeWidth={1.5} />
                  </span>

                  <h3 className="mt-8 text-5xl md:text-[3.25rem] font-bold tracking-tight leading-[0.95] text-black">
                    {lane.title}
                  </h3>

                  <p className="mt-5 max-w-[26ch] text-[15px] md:text-base leading-relaxed text-gray-500">
                    {lane.summary}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400 transition-colors duration-300 group-hover:text-black">
                    Explore
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
