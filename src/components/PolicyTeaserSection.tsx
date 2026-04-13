import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Landmark, Radar, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { policyInitiatives } from "../types/policy";
import { usePhoneLayout } from "../hooks/usePhoneLayout";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const capabilities = [
    {
        title: "Government Advisory",
        description: "Evidence translated into concise strategic framing for public decision-makers.",
        icon: Landmark,
    },
    {
        title: "Public Systems",
        description: "Implementation thinking grounded in real health-system constraints, trust, and uptake.",
        icon: Radar,
    },
    {
        title: "Biosecurity",
        description: "AI-era resilience, surveillance, and national-capability questions in health and risk.",
        icon: Shield,
    },
];

export const PolicyTeaserSection = () => {
    const isPhoneLayout = usePhoneLayout();
    const prefersReducedMotion = usePrefersReducedMotion();
    const featured = policyInitiatives.slice(0, 2);

    return (
        <section className="relative overflow-hidden bg-[#0b0f16] px-4 py-24 text-white md:px-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(244,63,94,0.16),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0))]" />
            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/45">Policy & Systems</p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tighter md:text-6xl">
                            Work shaped for institutions, implementation, and national-scale questions
                        </h2>
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/72 md:text-xl">
                            A dedicated stream of work across government advisory, public-health implementation, surveillance, and biosecurity. It sits alongside the product work because the same portfolio is about decision quality under real-world constraint.
                        </p>

                        <div className="mt-8 grid gap-3">
                            {capabilities.map((capability, index) => {
                                const Icon = capability.icon;

                                return (
                                    <motion.div
                                        key={capability.title}
                                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -18 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-80px" }}
                                        transition={{ duration: 0.45, delay: index * 0.06 }}
                                        className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/8 text-white">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold tracking-tight">{capability.title}</h3>
                                                <p className="mt-1 text-sm leading-relaxed text-white/62 md:text-base">{capability.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <Link
                            to="/policy"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f16]"
                        >
                            Open policy work
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {featured.map((initiative, index) => (
                            <motion.div
                                key={initiative.id}
                                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: 0.08 + index * 0.08 }}
                                className={`relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_30px_70px_-42px_rgba(0,0,0,0.8)] ${isPhoneLayout ? "" : "min-h-[360px]"}`}
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_40%)]" />
                                <div className="relative z-10">
                                    <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/62">
                                        {initiative.scope}
                                    </div>
                                    <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">{initiative.title}</h3>
                                    <p className="mt-3 text-base leading-relaxed text-white/72 md:text-lg">{initiative.subtitle}</p>
                                    <p className="mt-5 text-sm leading-relaxed text-white/58 md:text-base">{initiative.description}</p>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {initiative.themes.map((theme) => (
                                            <span key={theme} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-medium text-white/70">
                                                {theme}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
