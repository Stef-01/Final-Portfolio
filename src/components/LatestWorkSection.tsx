import React from "react";
import { WorkCard } from "./WorkCard";
import { projects } from "../types/project";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const LatestWorkSection = () => {
    const { elementRef, isIntersecting } = useIntersectionObserver({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section className="py-20 px-4 md:px-8 bg-white" id="work">
            <div className="max-w-7xl mx-auto">
                <div
                    ref={elementRef}
                    className={`transition-all duration-1000 transform ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="text-center mb-24">
                        <h2 className="text-7xl md:text-8xl font-bold tracking-tighter mb-4">
                            My latest work
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {projects.map((project, index) => (
                            <WorkCard
                                key={project.id}
                                id={project.id}
                                icon={project.title.charAt(0)}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                className="bg-gray-50"
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
