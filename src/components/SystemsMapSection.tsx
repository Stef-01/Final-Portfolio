import React, { useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import { ArrowUpRight, Network, Shield, HeartPulse, Sparkles, Salad, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePhoneLayout } from "../hooks/usePhoneLayout";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type MapNode = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    route: string;
    accent: string;
    x: string;
    y: string;
    icon: React.ComponentType<{ className?: string }>;
};

const nodes: MapNode[] = [
    {
        id: "precision-medicine",
        title: "Precision Medicine",
        subtitle: "Clinical signal translation",
        description: "Where biomarker insight, prescribing intelligence, and precision-care reasoning get translated into usable product and workflow decisions.",
        route: "/project/pgx-llm-copilot",
        accent: "from-sky-500 to-violet-500",
        x: "50%",
        y: "18%",
        icon: Sparkles,
    },
    {
        id: "clinical-ai",
        title: "Clinical AI",
        subtitle: "Decision support and screening",
        description: "Product and systems work focused on making AI in care environments legible, trusted, and useful under real-world constraints.",
        route: "/project/healthcare-from-the-eye",
        accent: "from-cyan-500 to-blue-500",
        x: "77%",
        y: "36%",
        icon: Cpu,
    },
    {
        id: "public-systems",
        title: "Public Systems",
        subtitle: "Implementation and advisory work",
        description: "Implementation, policy, and public-health work shaped for government, equity, and system-level execution rather than abstract strategy alone.",
        route: "/policy",
        accent: "from-slate-700 to-slate-500",
        x: "71%",
        y: "72%",
        icon: Network,
    },
    {
        id: "biosecurity",
        title: "Biosecurity",
        subtitle: "AI-enabled risk and resilience",
        description: "A distinct strand of work concerned with surveillance, dynamic biothreat modelling, and national-capability questions in health and security.",
        route: "/policy",
        accent: "from-rose-500 to-orange-500",
        x: "29%",
        y: "74%",
        icon: Shield,
    },
    {
        id: "nutrition",
        title: "Nutrition",
        subtitle: "Preventive care and behavior",
        description: "Consumer-facing and community-grounded product concepts focused on prevention, decision quality, and culturally relevant behavior change.",
        route: "/project/nourish-meal-explorer",
        accent: "from-emerald-500 to-lime-500",
        x: "23%",
        y: "38%",
        icon: Salad,
    },
    {
        id: "implementation",
        title: "Implementation",
        subtitle: "What actually works in practice",
        description: "The connective tissue across the portfolio: thinking through trust, operational constraints, public systems, and what it takes to move from insight to adoption.",
        route: "/policy",
        accent: "from-fuchsia-500 to-purple-500",
        x: "50%",
        y: "50%",
        icon: HeartPulse,
    },
];

const edges = [
    ["precision-medicine", "clinical-ai"],
    ["precision-medicine", "implementation"],
    ["nutrition", "implementation"],
    ["public-systems", "implementation"],
    ["biosecurity", "public-systems"],
    ["clinical-ai", "public-systems"],
    ["biosecurity", "implementation"],
];

export const SystemsMapSection = () => {
    const [activeId, setActiveId] = useState("implementation");
    const navigate = useNavigate();
    const isPhoneLayout = usePhoneLayout();
    const prefersReducedMotion = usePrefersReducedMotion();
    const activeNode = nodes.find((node) => node.id === activeId) ?? nodes[0];

    const handleOpen = (route: string) => {
        navigate(route);
    };

    if (isPhoneLayout) {
        return (
            <section className="relative overflow-hidden bg-white px-4 py-24">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_32%)]" />
                <div className="relative z-10 mx-auto max-w-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gray-400">Systems Map</p>
                    <h2 className="mt-4 text-4xl font-bold tracking-tighter text-black">How the work connects</h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">
                        A map of the major problem spaces across the portfolio, from precision medicine and clinical AI to public systems and biosecurity.
                    </p>

                    <div className="mt-8 grid gap-4">
                        {nodes.map((node, index) => {
                            const Icon = node.icon;
                            const isActive = activeId === node.id;

                            return (
                                <motion.button
                                    key={node.id}
                                    type="button"
                                    onClick={() => setActiveId(node.id)}
                                    className={`rounded-[26px] border p-5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 ${isActive ? "border-black bg-black text-white" : "border-black/10 bg-white text-black"}`}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.45, delay: index * 0.05 }}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${isActive ? "bg-white/12 text-white/70" : "bg-black/5 text-gray-500"}`}>
                                                <Icon className="h-4 w-4" />
                                                {node.subtitle}
                                            </div>
                                            <h3 className="mt-4 text-2xl font-semibold tracking-tight">{node.title}</h3>
                                            <p className={`mt-3 text-sm leading-relaxed ${isActive ? "text-white/75" : "text-gray-600"}`}>{node.description}</p>
                                        </div>
                                        <span
                                            role="button"
                                            tabIndex={0}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleOpen(node.route);
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter" || e.key === " ") {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    handleOpen(node.route);
                                                }
                                            }}
                                            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-105 ${isActive ? "bg-white text-black" : "bg-black text-white"}`}
                                            aria-label={`Open ${node.title}`}
                                        >
                                            <ArrowUpRight className="h-5 w-5" />
                                        </span>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative overflow-hidden bg-white px-4 py-24 md:px-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.14),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_34%)]" />
            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gray-400">Systems Map</p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tighter text-black md:text-6xl">
                            A live view of the problem spaces the portfolio is actually about
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-xl">
                            Hover through the network to see how precision medicine, clinical AI, nutrition, implementation, public systems, and biosecurity connect. This is the strategic shape behind the case studies.
                        </p>

                        <LayoutGroup id="systems-map-copy">
                            <motion.div
                                key={activeNode.id}
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35 }}
                                className="mt-8 rounded-[30px] border border-black/8 bg-[#0f1115] p-6 text-white shadow-[0_30px_70px_-45px_rgba(0,0,0,0.55)]"
                            >
                                <div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                                    <activeNode.icon className="h-4 w-4" />
                                    {activeNode.subtitle}
                                </div>
                                <h3 className="mt-4 text-3xl font-semibold tracking-tight">{activeNode.title}</h3>
                                <p className="mt-4 text-base leading-relaxed text-white/72">{activeNode.description}</p>
                                <button
                                    type="button"
                                    onClick={() => handleOpen(activeNode.route)}
                                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1115]"
                                >
                                    Open this area
                                    <ArrowUpRight className="h-4 w-4" />
                                </button>
                            </motion.div>
                        </LayoutGroup>
                    </div>

                    <motion.div
                        className="relative h-[620px] overflow-hidden rounded-[34px] border border-black/8 bg-[#fafafa] shadow-[0_30px_70px_-45px_rgba(0,0,0,0.45)]"
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.65 }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.9),_rgba(245,245,245,0.96))]" />
                        <motion.div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/8 bg-white/45 backdrop-blur-md"
                            animate={prefersReducedMotion ? undefined : { scale: [1, 1.06, 1], opacity: [0.5, 0.72, 0.5] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/10"
                            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                        />

                        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            {edges.map(([fromId, toId]) => {
                                const from = nodes.find((node) => node.id === fromId);
                                const to = nodes.find((node) => node.id === toId);

                                if (!from || !to) {
                                    return null;
                                }

                                return (
                                    <motion.line
                                        key={`${fromId}-${toId}`}
                                        x1={from.x}
                                        y1={from.y}
                                        x2={to.x}
                                        y2={to.y}
                                        stroke={activeId === fromId || activeId === toId ? "rgba(15,23,42,0.32)" : "rgba(15,23,42,0.12)"}
                                        strokeWidth="0.35"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true, margin: "-80px" }}
                                        transition={{ duration: 0.8, delay: 0.08 }}
                                    />
                                );
                            })}
                        </svg>

                        {nodes.map((node, index) => {
                            const Icon = node.icon;
                            const isActive = activeId === node.id;

                            return (
                                <motion.button
                                    key={node.id}
                                    type="button"
                                    onMouseEnter={() => setActiveId(node.id)}
                                    onFocus={() => setActiveId(node.id)}
                                    onClick={() => handleOpen(node.route)}
                                    className="group absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
                                    style={{ left: node.x, top: node.y }}
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5, delay: index * 0.06 }}
                                    whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                                >
                                    <LayoutGroup id={`map-node-${node.id}`}>
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-node-shell"
                                                className={`absolute inset-[-12px] rounded-[28px] bg-gradient-to-br ${node.accent} opacity-18 blur-xl`}
                                                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                                            />
                                        )}
                                        <motion.div
                                            className={`relative min-w-[170px] rounded-[24px] border px-4 py-4 text-left shadow-[0_20px_45px_-32px_rgba(0,0,0,0.35)] transition-colors ${isActive ? "border-black bg-black text-white" : "border-black/10 bg-white text-black"}`}
                                            layout
                                        >
                                            <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${isActive ? "bg-white/12 text-white/70" : "bg-black/5 text-gray-500"}`}>
                                                <Icon className="h-3.5 w-3.5" />
                                                {node.subtitle}
                                            </div>
                                            <p className="mt-3 text-lg font-semibold tracking-tight">{node.title}</p>
                                        </motion.div>
                                    </LayoutGroup>
                                </motion.button>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
