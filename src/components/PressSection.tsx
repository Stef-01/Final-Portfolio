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
    <section id="press" className="relative overflow-hidden bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="max-w-3xl t-h2 font-bold tracking-tight text-black">
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
                className="group flex flex-col items-center gap-6 rounded-2xl border border-black/10 bg-white p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-black/30 md:p-8"
              >
                <div>
                  <p className="text-sm font-medium text-gray-500">{item.outlet}</p>
                  <p className="mt-1 text-sm font-medium text-gray-500">{item.date}</p>
                </div>

                <div className="flex flex-col items-center">
                  <h3 className="max-w-3xl text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
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
