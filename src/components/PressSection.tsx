import React from "react";
import { ArrowUpRight, Newspaper, Sparkles } from "lucide-react";
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
    <section id="press" className="relative overflow-hidden bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.08),_transparent_62%)]" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 shadow-[0_18px_45px_-35px_rgba(0,0,0,0.35)]">
              <Newspaper className="h-4 w-4" aria-hidden="true" />
              Press
            </div>
            <h2 className="max-w-3xl text-4xl font-bold leading-[0.95] tracking-tighter text-black md:text-6xl">
              In the press
            </h2>
          </motion.div>

          <div className="grid w-full gap-4">
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
                className="group flex flex-col items-center gap-6 rounded-[32px] border border-black/8 bg-[#fafafa] p-6 text-center shadow-[0_24px_70px_-52px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_80px_-50px_rgba(0,0,0,0.65)] md:p-8"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                    <Sparkles className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">{item.outlet}</p>
                    <p className="mt-2 text-sm font-medium text-gray-500">{item.date}</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h3 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-black md:text-4xl">
                    {item.title}
                  </h3>
                  <span className="mt-6 inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black transition-colors group-hover:bg-black group-hover:text-white">
                    Read the Healio article
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
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
