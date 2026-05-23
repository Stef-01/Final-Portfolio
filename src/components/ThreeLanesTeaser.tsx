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
    <section className="flex min-h-[100svh] w-full items-center bg-white px-6 py-12 md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-black/10">
          {lanes.map((lane, index) => {
            const Icon = lane.icon;
            return (
              <motion.div
                key={lane.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="md:px-12"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.035 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.6 }}
                >
                  <Link
                    to={lane.to}
                    className="group flex flex-col items-center text-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-8"
                  >
                    <Icon
                      className="h-8 w-8 md:h-10 md:w-10 text-black transition-opacity duration-300 group-hover:opacity-60"
                      strokeWidth={1.5}
                    />

                    <h3 className="mt-5 md:mt-12 text-4xl md:text-[4rem] font-bold tracking-tight leading-[0.95] text-black transition-opacity duration-300 group-hover:opacity-80">
                      {lane.title}
                    </h3>

                    <p className="mt-3 md:mt-7 max-w-[28ch] text-sm md:text-xl leading-relaxed text-gray-500">
                      {lane.summary}
                    </p>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
