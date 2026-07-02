import React from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  GraduationCap,
  Landmark,
  Microscope,
  Rocket,
} from "lucide-react";
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
    <section className="flex w-full items-center bg-white px-5 py-10 md:px-8 md:py-14">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-3 md:grid-cols-4 md:gap-0 md:divide-x md:divide-black/10">
          {lanes.map((lane, index) => {
            const Icon = lane.icon;

            return (
              <motion.div
                key={lane.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-0 md:px-3 hover:z-20 focus-within:z-20 lg:px-5"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.6 }}
                >
                  <Link
                    to={lane.to}
                    aria-label={`${lane.title}: ${lane.summary}`}
                    className="group relative flex min-h-[112px] flex-row items-center justify-between rounded-2xl px-4 py-5 text-left transition-colors duration-300 hover:bg-[#f7f7f5] focus-visible:bg-[#f7f7f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 md:min-h-[190px] md:flex-col md:justify-center md:rounded-sm md:px-2 md:py-8 md:text-center md:hover:bg-transparent md:focus-visible:bg-transparent md:focus-visible:ring-offset-4"
                  >
                    <div className="flex items-center gap-4 md:flex-col md:gap-7">
                      <Icon
                        className="h-8 w-8 shrink-0 text-black transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1 md:h-9 md:w-9"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />

                      <h3 className="text-3xl font-bold leading-[0.95] tracking-tight text-black md:text-[clamp(2rem,4vw,3.4rem)]">
                        {lane.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-black/45 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:text-black md:absolute md:right-3 md:top-3 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-[calc(50%+4.25rem)] z-30 hidden w-[min(15rem,calc(100vw-2rem))] -translate-x-1/2 translate-y-2 rounded-2xl border border-black/10 bg-black px-4 py-3 text-center text-sm leading-relaxed text-white opacity-0 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.65)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 md:block"
                    >
                      {lane.summary}
                    </div>
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
