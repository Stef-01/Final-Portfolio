import React, { useState } from "react";
import { motion } from "motion/react";
import { Dna, ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const categories = [
    {
        id: "precision-oncology",
        label: "Precision Oncology",
        shortLabel: "Oncology",
        blurb: "EGFR tumour-burden work with Summer Han, focused on translating signal-rich oncology insight into more usable precision-care reasoning.",
        accent: "from-rose-500 to-orange-400",
    },
    {
        id: "nourish-meal-explorer",
        label: "Precision Nutrition",
        shortLabel: "Nutrition",
        blurb: "NOURISH explores how behavior-change design and recommendation systems can make preventive nutrition feel intelligent, adaptive, and humane.",
        accent: "from-emerald-500 to-lime-400",
    },
    {
        id: "pgx-llm-copilot",
        label: "Pharmacogenomics",
        shortLabel: "PGx",
        blurb: "An AI-assisted prescribing concept that translates pharmacogenomic evidence into a safer, more legible workflow for everyday clinical use.",
        accent: "from-sky-500 to-violet-500",
    },
];

export const PrecisionMedicineSection = () => {
    const [activeId, setActiveId] = useState(categories[0].id);
    const navigate = useNavigate();
    const prefersReducedMotion = usePrefersReducedMotion();
    const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0];

    return (
        <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.14),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.12),_transparent_34%)]" />
            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gray-400">Precision Medicine</p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tighter text-black md:text-6xl">
                            A DNA-led map into the most translational precision-care work
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-xl">
                            Hover the DNA structure to surface the broader frame, then move through the categories that matter most: oncology, nutrition, and pharmacogenomics.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    type="button"
                                    onMouseEnter={() => setActiveId(category.id)}
                                    onFocus={() => setActiveId(category.id)}
                                    onClick={() => navigate(`/project/${category.id}`)}
                                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 ${activeId === category.id
                                        ? "bg-black text-white"
                                        : "border border-black/10 bg-white text-gray-600 hover:border-black/25 hover:text-black"
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <motion.div
                            className="relative overflow-hidden rounded-[34px] border border-black/8 bg-[#0b0f17] p-6 text-white shadow-[0_30px_70px_-45px_rgba(0,0,0,0.55)] md:p-8"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.65 }}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.28),_transparent_32%)]" />
                            <div className="relative z-10 grid gap-8 md:grid-cols-[0.78fr_1.22fr] md:items-center">
                                <motion.button
                                    type="button"
                                    onHoverStart={() => setActiveId(activeCategory.id)}
                                    onClick={() => navigate(`/project/${activeCategory.id}`)}
                                    className="group relative mx-auto flex h-[260px] w-[260px] items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f17] md:h-[300px] md:w-[300px]"
                                    animate={prefersReducedMotion ? undefined : { rotate: [0, 2, -2, 0] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    aria-label={`Open ${activeCategory.label}`}
                                >
                                    <motion.div
                                        className={`absolute inset-7 rounded-full bg-gradient-to-br ${activeCategory.accent} opacity-20 blur-2xl`}
                                        animate={prefersReducedMotion ? undefined : { scale: [1, 1.06, 1] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <motion.div
                                        className="relative flex h-full w-full items-center justify-center"
                                        whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                                    >
                                        <Dna className="h-32 w-32 md:h-36 md:w-36 text-white" strokeWidth={1.75} />
                                        <div className="absolute inset-x-0 bottom-7 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-white/88">
                                            <Sparkles className="h-4 w-4" />
                                            {activeCategory.shortLabel}
                                        </div>
                                    </motion.div>
                                </motion.button>

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">Precision medicine navigator</p>
                                    <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                                        Hover to expand the frame. Click to enter the work.
                                    </h3>
                                    <motion.p
                                        key={activeCategory.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-4 text-base leading-relaxed text-white/74 md:text-lg"
                                    >
                                        Precision medicine
                                    </motion.p>
                                    <motion.div
                                        key={`${activeCategory.id}-detail`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.35, delay: 0.05 }}
                                        className="mt-5 rounded-[24px] border border-white/10 bg-white/6 p-5"
                                    >
                                        <p className="text-xl font-semibold tracking-tight text-white">{activeCategory.label}</p>
                                        <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                                            {activeCategory.blurb}
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => navigate(`/project/${activeCategory.id}`)}
                                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-transform hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f17]"
                                        >
                                            Open case study
                                            <ArrowUpRight className="h-4 w-4" />
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
