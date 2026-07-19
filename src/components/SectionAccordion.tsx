import React, { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { ProjectSection } from "../types/project";
import { ImageWithFallback } from "./ImageWithFallback";
import { EASE_OUT } from "../motion/tokens";

interface SectionAccordionProps {
    sections: ProjectSection[];
    /** Used for image fallback initials. */
    fallbackInitial: string;
    accent?: string;
}

/**
 * Case-study narrative as an editorial index: section titles read as a
 * scannable list of hairline rows, and one section's content (text + figure)
 * is open at a time. Replaces a long vertical run of stacked sections —
 * the reader chooses depth instead of scrolling through everything.
 */
export function SectionAccordion({ sections, fallbackInitial }: SectionAccordionProps) {
    const [openIndex, setOpenIndex] = useState(0);
    const baseId = useId();

    return (
        <div>
            {sections.map((section, index) => {
                const open = index === openIndex;
                return (
                    <div key={section.title} className="border-t border-black/8 first:border-t-0">
                        {/* Real heading wraps the disclosure button so the
                            document outline survives for crawlers and AT. */}
                        <h3 className="m-0">
                            <button
                                type="button"
                                aria-expanded={open}
                                aria-controls={`${baseId}-panel-${index}`}
                                onClick={() => setOpenIndex(open ? -1 : index)}
                                className="group flex w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 rounded-sm"
                            >
                                <span
                                    className={`text-lg font-bold tracking-tight transition-colors duration-200 md:text-xl ${
                                        open ? "text-black" : "text-gray-400 group-hover:text-black"
                                    }`}
                                >
                                    {section.title}
                                </span>
                                <ChevronDown
                                    aria-hidden="true"
                                    className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-300 motion-reduce:transition-none ${
                                        open ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                        </h3>

                        <AnimatePresence initial={false}>
                            {open && (
                                <motion.div
                                    id={`${baseId}-panel-${index}`}
                                    key="panel"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.34, ease: EASE_OUT }}
                                    className="overflow-hidden"
                                >
                                    <div className="space-y-4 pb-6">
                                        {section.body.map((paragraph) => (
                                            <p key={paragraph} className="text-base leading-relaxed text-gray-600">
                                                {paragraph}
                                            </p>
                                        ))}
                                        {section.media && (
                                            <figure className="overflow-hidden rounded-2xl bg-[#f5f3ef]">
                                                <div
                                                    className={`${
                                                        section.media.aspect === "16/9"
                                                            ? "aspect-video"
                                                            : section.media.aspect === "8/5"
                                                              ? "aspect-[8/5]"
                                                              : section.media.aspect === "9/16"
                                                                ? "aspect-[9/16]"
                                                                : "aspect-[4/3]"
                                                    } overflow-hidden`}
                                                >
                                                    <ImageWithFallback
                                                        src={section.media.src}
                                                        alt={section.media.alt}
                                                        fallbackInitial={fallbackInitial}
                                                        wrapperClassName="h-full w-full"
                                                        className={`h-full w-full ${
                                                            section.media.fit === "contain" ? "object-contain" : "object-cover"
                                                        }`}
                                                        loading="lazy"
                                                        decoding="async"
                                                        sizes="(max-width: 1024px) 92vw, 54vw"
                                                    />
                                                </div>
                                                <figcaption className="border-t border-black/5 bg-white px-5 py-3 text-sm leading-relaxed text-gray-500">
                                                    {section.media.caption}
                                                </figcaption>
                                            </figure>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
