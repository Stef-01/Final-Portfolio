import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const pressItems = [
  {
    outlet: "Healio",
    date: "May 7, 2026",
    title: "AI copilot in development guides healthy cooking step-by-step",
    url: "https://www.healio.com/news/primary-care/20260507/ai-copilot-in-development-guides-healthy-cooking-stepbystep",
  },
];

export function PressSection(): JSX.Element {
  return (
    <section id="press" className="px-3 py-16 md:px-5 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 px-1 t-h2 font-bold tracking-[-0.03em] text-gray-900"
        >
          In the press
        </motion.h2>

        <div className="grid gap-3 md:gap-4">
          {pressItems.map((item, index) => (
            <motion.a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.58, delay: index * 0.08 }}
              className="group flex items-center justify-between gap-6 rounded-[28px] bg-white p-6 transition-colors duration-300 hover:bg-sand focus-visible:bg-sand focus-visible:outline-none md:p-8"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                  {item.outlet} · {item.date}
                </p>
                <h3 className="mt-3 max-w-4xl text-balance text-xl font-bold leading-tight tracking-[-0.03em] text-gray-900 md:text-3xl">
                  {item.title}
                </h3>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gray-900 text-white">
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
