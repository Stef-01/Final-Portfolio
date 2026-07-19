import React, { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ProjectCaseStudyStep } from "../types/project";
import { EASE_OUT } from "../motion/tokens";

interface ProcessFlowProps {
    steps: ProjectCaseStudyStep[];
    accent: string;
}

/**
 * The case-study process as a flow box instead of a stacked list: phase tabs
 * up top, one step's content in an animated panel below. Replaces five
 * "Design rationale / Execution evidence" blocks running down the page with
 * a single calm surface the reader steps through.
 */
export function ProcessFlow({ steps, accent }: ProcessFlowProps) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const baseId = useId();
    const step = steps[index];

    const go = (next: number) => {
        const clamped = Math.max(0, Math.min(steps.length - 1, next));
        if (clamped === index) return;
        setDirection(clamped > index ? 1 : -1);
        setIndex(clamped);
    };

    const onKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "ArrowRight") {
            event.preventDefault();
            go(index + 1);
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            go(index - 1);
        }
    };

    if (!step) return null;

    return (
        <div onKeyDown={onKeyDown}>
            {/* Phase tabs */}
            <div
                role="tablist"
                aria-label="Process phases"
                className="flex flex-wrap gap-2"
            >
                {steps.map((s, i) => {
                    const active = i === index;
                    return (
                        <button
                            key={`${s.phase}-${s.title}`}
                            type="button"
                            role="tab"
                            id={`${baseId}-tab-${i}`}
                            aria-selected={active}
                            aria-controls={`${baseId}-panel`}
                            tabIndex={active ? 0 : -1}
                            onClick={() => go(i)}
                            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 ${
                                active ? "text-white" : "text-gray-500 hover:text-black"
                            }`}
                        >
                            {active && (
                                <motion.span
                                    layoutId={`${baseId}-pill`}
                                    className="absolute inset-0 rounded-full"
                                    style={{ backgroundColor: accent }}
                                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                />
                            )}
                            <span className="relative z-10 tabular-nums">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="relative z-10 ml-2">{s.phase}</span>
                        </button>
                    );
                })}
            </div>

            {/* Step panel */}
            <div
                id={`${baseId}-panel`}
                role="tabpanel"
                aria-labelledby={`${baseId}-tab-${index}`}
                className="relative mt-6 min-h-[190px] overflow-hidden rounded-2xl bg-white p-6 md:min-h-[170px] md:p-8"
            >
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                    <motion.div
                        key={index}
                        custom={direction}
                        initial={{ opacity: 0, x: 28 * direction }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -22 * direction }}
                        transition={{ duration: 0.28, ease: EASE_OUT }}
                    >
                        <h3 className="text-xl font-bold tracking-tight text-black md:text-2xl">
                            {step.title}
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-gray-700">
                            {step.rationale}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-gray-500">
                            {step.execution}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Stepper controls */}
            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm tabular-nums text-gray-400">
                    {String(index + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                </p>
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => go(index - 1)}
                        disabled={index === 0}
                        aria-label="Previous step"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition-colors hover:border-black/40 disabled:opacity-30 disabled:hover:border-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                    >
                        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        onClick={() => go(index + 1)}
                        disabled={index === steps.length - 1}
                        aria-label="Next step"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition-colors hover:border-black/40 disabled:opacity-30 disabled:hover:border-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                    >
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </div>
    );
}
