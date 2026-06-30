import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Microscope, Landmark, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

type Lane = {
  id: string;
  to: string;
  title: string;
  summary: string;
  icon: typeof Microscope;
};

const lanes: Lane[] = [
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
  {
    id: "education",
    to: "/education",
    title: "Education",
    summary: "Teaching research, entrepreneurship, and design-led venture building.",
    icon: GraduationCap,
  },
];

export function ThreeLanesTeaser() {
  return (
    <section className="flex min-h-[100svh] w-full items-center bg-white px-6 py-12 md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4 md:gap-0 md:divide-x md:divide-black/10">
          {lanes.map((lane, index) => {
            const Icon = lane.icon;
            const content = (
              <>
                <Icon
                  className="h-8 w-8 text-black transition-opacity duration-300 group-hover:opacity-60 md:h-10 md:w-10"
                  strokeWidth={1.5}
                />

                <h3 className="mt-5 text-4xl font-bold leading-[0.95] tracking-tight text-black transition-opacity duration-300 group-hover:opacity-80 md:mt-12 md:text-[3.45rem]">
                  {lane.title}
                </h3>

                <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-gray-500 md:mt-7 md:text-lg">
                  {lane.summary}
                </p>
              </>
            );

            return (
              <motion.div
                key={lane.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="md:px-8"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.035 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.6 }}
                >
                  <Link
                    to={lane.to}
                    className="group flex flex-col items-center rounded-sm text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-8"
                  >
                    {content}
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
