import React from "react";
import { ArrowUpRight, Newspaper, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const pressItems = [
  {
    outlet: "Healio",
    date: "May 7, 2026",
    title: "AI copilot in development guides healthy cooking step-by-step",
    summary:
      "Featured coverage of the AI cooking copilot work: a step-by-step healthy cooking assistant designed to make nutrition guidance more usable inside everyday home cooking.",
    url: "https://www.healio.com/news/primary-care/20260507/ai-copilot-in-development-guides-healthy-cooking-stepbystep",
  },
];

export function PressSection(): JSX.Element {
  return (
    <section id="press" className="relative overflow-hidden bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.08),_transparent_62%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 shadow-[0_18px_45px_-35px_rgba(0,0,0,0.35)]">
              <Newspaper className="h-4 w-4" aria-hidden="true" />
              Press
            </div>
            <h2 className="max-w-3xl text-4xl font-bold leading-[0.95] tracking-tighter text-black md:text-6xl">
              In the press
            </h2>
          </motion.div>

          <div className="grid gap-4">
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
                className="group grid gap-6 rounded-[32px] border border-black/8 bg-[#fafafa] p-6 text-left shadow-[0_24px_70px_-52px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_80px_-50px_rgba(0,0,0,0.65)] md:grid-cols-[0.24fr_0.76fr] md:p-8"
              >
                <div className="flex items-start justify-between gap-4 md:block">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                    <Sparkles className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="text-right md:mt-6 md:text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">{item.outlet}</p>
                    <p className="mt-2 text-sm font-medium text-gray-500">{item.date}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-black md:text-4xl">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-black/55 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" aria-hidden="true" />
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">{item.summary}</p>
                  <span className="mt-6 inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black transition-colors group-hover:bg-black group-hover:text-white">
                    Read the Healio article
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
