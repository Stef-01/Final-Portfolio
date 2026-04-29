import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const lanes = [
  {
    id: "research",
    to: "/research",
    title: "Research",
    summary: "Leading clinical, precision, and population health research.",
  },
  {
    id: "policy",
    to: "/policy",
    title: "Policy",
    summary: "Advancing government implementation and national capability.",
  },
  {
    id: "industry",
    to: "/industry",
    title: "Industry",
    summary: "Founding and advising innovative health-tech ventures.",
  },
];

export function ThreeLanesTeaser() {
  return (
    <section className="w-full bg-white px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 text-center md:grid-cols-3 md:gap-10 md:text-left">
        {lanes.map((lane, index) => (
          <motion.div
            key={lane.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Link
              to={lane.to}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-4 rounded-sm"
            >
              <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-black transition-opacity group-hover:opacity-70">
                {lane.title}
              </h3>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
                {lane.summary}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
