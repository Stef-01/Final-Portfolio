import React from "react";
import { motion } from "motion/react";
import { WorkCard } from "./WorkCard";
import { projects } from "../types/project";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const headingChips = ["Precision medicine", "Implementation", "Public systems"];
const capabilityLanes = [
    {
        title: "Products",
        description: "Interfaces, tools, and concepts designed to improve decision quality in health contexts.",
    },
    {
        title: "Systems",
        description: "Work that translates complex research and operational realities into usable service and platform thinking.",
    },
    {
        title: "Advisory",
        description: "Evidence framing and strategic work for institutional, public-sector, and implementation environments.",
    },
];

export const LatestWorkSection = () => {
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <section className="relative overflow-hidden py-20 px-4 md:px-8 bg-white" id="work">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_62%)]" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55 }}
                            className="mb-6 flex flex-wrap items-center justify-center gap-3"
                        >
                            {headingChips.map((chip, index) => (
                                <motion.span
                                    key={chip}
                                    className="rounded-full border border-black/10 bg-white/90 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 shadow-[0_18px_45px_-35px_rgba(0,0,0,0.4)]"
                                    animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
                                    transition={{ duration: 3.5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    {chip}
                                </motion.span>
                            ))}
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55, delay: 0.08 }}
                            className="mb-4 text-xs md:text-sm font-semibold uppercase tracking-[0.32em] text-gray-400"
                        >
                            Selected Work
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.72, delay: 0.14 }}
                            className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter mb-5 leading-[0.95]"
                        >
                            Flagship projects at the intersection of health, AI, and systems design
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.62, delay: 0.2 }}
                            className="mx-auto max-w-3xl text-base md:text-xl leading-relaxed text-gray-600"
                        >
                            Case studies across product, systems, and advisory work, selected to show how research, implementation, and interface judgment come together under real-world constraint.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: 0.26 }}
                            className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3"
                        >
                            {capabilityLanes.map((lane, index) => (
                                <motion.div
                                    key={lane.title}
                                    className="rounded-[24px] border border-black/8 bg-white px-5 py-5 text-left shadow-[0_20px_45px_-36px_rgba(0,0,0,0.45)]"
                                    initial={{ opacity: 0, y: prefersReducedMotion ? 10 : 22 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.48, delay: 0.3 + index * 0.05 }}
                                >
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">{lane.title}</p>
                                    <p className="mt-3 text-base font-medium leading-relaxed text-gray-700">{lane.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 gap-10">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: prefersReducedMotion ? 12 : 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.28) }}
                                className="snap-start scroll-mt-8"
                            >
                                <WorkCard
                                    id={project.id}
                                    icon={project.title.charAt(0)}
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    description={project.description}
                                    image={project.image}
                                    tags={project.tags}
                                    className="bg-gray-50"
                                />
                            </motion.div>
                        ))}
                    </div>
            </div>
        </section>
    );
};
