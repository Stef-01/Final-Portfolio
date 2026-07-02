import React from "react";
import { motion } from "motion/react";
import { WorkCard } from "./WorkCard";
import { projects } from "../types/project";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const capabilityLanes = [
    {
        title: "Products",
    },
    {
        title: "Systems",
    },
    {
        title: "Advisory",
    },
];

export const LatestWorkSection = () => {
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <section className="relative overflow-hidden px-4 md:px-8 bg-white" id="work">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_62%)]" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex min-h-[100svh] snap-start snap-always flex-col items-center justify-center py-16 text-center md:py-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.72, delay: 0.08 }}
                            className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter mb-5 leading-[0.95]"
                        >
                            Flagship projects across health, AI, and systems design
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3"
                        >
                            {capabilityLanes.map((lane, index) => (
                                <motion.div
                                    key={lane.title}
                                    className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-center shadow-[0_18px_38px_-32px_rgba(0,0,0,0.4)]"
                                    initial={{ opacity: 0, y: prefersReducedMotion ? 10 : 22 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.48, delay: 0.3 + index * 0.05 }}
                                >
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">{lane.title}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="box-border flex h-[100svh] items-center snap-start snap-always py-4 md:py-6"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: prefersReducedMotion ? 12 : 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.28) }}
                                    className="w-full"
                                >
                                    <WorkCard
                                        id={project.id}
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        description={project.description}
                                        image={project.image}
                                        imageFit={project.heroFit}
                                        imageAspect={project.heroAspect}
                                        className="bg-gray-50"
                                    />
                                </motion.div>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    );
};
