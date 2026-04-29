import React from "react";
import { motion } from "motion/react";
import { Microscope, Landmark, Rocket } from "lucide-react";
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
        <div className="grid gap-20 md:grid-cols-3 md:gap-0 md:divide-x md:divide-black/10">
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
                  className="group flex flex-col items-center text-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-8"
                >
                  <Icon
                    className="h-7 w-7 text-black transition-opacity duration-300 group-hover:opacity-60"
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-10 text-5xl md:text-[3.25rem] font-bold tracking-tight leading-[0.95] text-black transition-opacity duration-300 group-hover:opacity-70">
                    {lane.title}
                  </h3>

                  <p className="mt-6 max-w-[26ch] text-[15px] md:text-base leading-relaxed text-gray-500">
                    {lane.summary}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
