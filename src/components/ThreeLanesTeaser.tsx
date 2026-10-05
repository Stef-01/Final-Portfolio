import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { EASE_OUT } from "../lib/motion";

type Lane = {
  id: string;
  to: string;
  title: string;
};

const lanes: Lane[] = [
  { id: "research", to: "/research", title: "Research" },
  { id: "policy", to: "/policy", title: "Policy" },
  { id: "industry", to: "/industry", title: "Industry" },
  { id: "education", to: "/education", title: "Education" },
];

export function ThreeLanesTeaser() {
  return (
    <section className="flex min-h-[100svh] w-full items-center px-3 py-16 md:px-5">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
        {lanes.map((lane, index) => (
          <motion.div
            key={lane.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: EASE_OUT }}
          >
            <Link
              to={lane.to}
              className="group flex aspect-[4/5] flex-col justify-between rounded-[28px] bg-white p-5 transition-colors duration-300 hover:bg-sand focus-visible:bg-sand focus-visible:outline-none md:aspect-[3/4] md:p-6"
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                  0{index + 1}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-paper text-gray-900 transition-colors duration-300 group-hover:bg-gray-900 group-hover:text-white group-focus-visible:bg-gray-900 group-focus-visible:text-white">
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <h3 className="text-[clamp(1.6rem,0.9rem+2.6vw,3.25rem)] font-bold leading-none tracking-[-0.04em] text-gray-900">
                {lane.title}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
