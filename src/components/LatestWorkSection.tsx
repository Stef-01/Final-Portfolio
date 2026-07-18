import React from "react";
import { motion } from "motion/react";
import { WorkCard } from "./WorkCard";
import { projects } from "../types/project";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
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
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex min-h-[100svh] snap-start snap-always flex-col items-center justify-center py-16 text-center md:py-20">
                        <Reveal as="h2" delay={0.08} className="t-h2 font-bold tracking-tight mb-5">
                            Flagship projects across health, AI, and systems design
                        </Reveal>

                        <RevealGroup
                            stagger={0.07}
                            delay={0.25}
                            className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3"
                        >
                            {capabilityLanes.map((lane) => (
                                <RevealItem
                                    key={lane.title}
                                    y={prefersReducedMotion ? 10 : 20}
                                    duration={0.48}
                                    className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-center"
                                >
                                    <p className="text-sm font-medium text-gray-500">{lane.title}</p>
                                </RevealItem>
                            ))}
                        </RevealGroup>
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
                                    transition={{
                                        duration: 0.6,
                                        delay: Math.min(index * 0.06, 0.28),
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
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
