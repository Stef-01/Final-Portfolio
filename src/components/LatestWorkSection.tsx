import React from "react";
import { motion } from "motion/react";
import { WorkCard } from "./WorkCard";
import { projects } from "../types/project";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export const LatestWorkSection = () => {
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <section className="relative overflow-hidden px-3 md:px-5" id="work">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex min-h-[100svh] snap-start snap-always flex-col items-center justify-center py-16 text-center md:py-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.72, delay: 0.08 }}
                            className="t-h1 font-bold leading-none tracking-[-0.04em] text-gray-900"
                        >
                            Selected{" "}
                            <span className="font-['Playfair_Display',_serif] font-semibold italic text-oxblood">
                                projects
                            </span>
                        </motion.h2>
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
                                    />
                                </motion.div>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    );
};
