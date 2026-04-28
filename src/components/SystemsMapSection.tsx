import React, { useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import {
  ArrowUpRight,
  Network,
  Shield,
  HeartPulse,
  Sparkles,
  Salad,
  Cpu,
  Leaf,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePhoneLayout } from "../hooks/usePhoneLayout";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type MapNode = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  route: string;
  x: string;
  y: string;
  icon: React.ComponentType<{ className?: string }>;
};

const nodes: MapNode[] = [
  {
    id: "precision-medicine",
    title: "Precision Medicine",
    subtitle: "Clinical signal translation",
    description:
      "Where biomarker insight, prescribing intelligence, and precision-care reasoning get translated into usable product and workflow decisions.",
    route: "/project/pgx-llm-copilot",
    x: "50%",
    y: "14%",
    icon: Sparkles,
  },
  {
    id: "clinical-ai",
    title: "Clinical AI",
    subtitle: "Decision support and screening",
    description:
      "Product and systems work focused on making AI in care environments legible, trusted, and useful under real-world constraints.",
    route: "/project/healthcare-from-the-eye",
    x: "80%",
    y: "32%",
    icon: Cpu,
  },
  {
    id: "public-systems",
    title: "Public Systems",
    subtitle: "Implementation and advisory work",
    description:
      "Implementation, policy, and public-health work shaped for government, equity, and system-level execution rather than abstract strategy alone.",
    route: "/policy",
    x: "74%",
    y: "68%",
    icon: Network,
  },
  {
    id: "biosecurity",
    title: "Biosecurity",
    subtitle: "AI-enabled risk and resilience",
    description:
      "A distinct strand of work concerned with surveillance, dynamic biothreat modelling, and national-capability questions in health and security.",
    route: "/policy",
    x: "26%",
    y: "70%",
    icon: Shield,
  },
  {
    id: "nourish",
    title: "NOURISH",
    subtitle: "Precision nutrition + teaching kitchen",
    description:
      "Stefan's community-embedded precision nutrition program at Stanford — teaching kitchen intervention, behavior-change research, and AI-assisted meal planning. Lead coordinator role.",
    route: "/project/nourish-meal-explorer",
    x: "18%",
    y: "34%",
    icon: Leaf,
  },
  {
    id: "implementation",
    title: "Implementation",
    subtitle: "What actually works in practice",
    description:
      "The connective tissue across the portfolio: thinking through trust, operational constraints, public systems, and what it takes to move from insight to adoption.",
    route: "/industry",
    x: "50%",
    y: "50%",
    icon: HeartPulse,
  },
  {
    id: "consumer-nutrition",
    title: "Consumer Nutrition",
    subtitle: "Cooking, cravings, culture",
    description:
      "Consumer-facing product work on cooking fluency and craving-driven recommendation — Sous, and the behavior-change design patterns that carry over from NOURISH.",
    route: "/project/swaad",
    x: "40%",
    y: "84%",
    icon: Salad,
  },
];

const edges = [
  ["precision-medicine", "clinical-ai"],
  ["precision-medicine", "implementation"],
  ["nourish", "implementation"],
  ["nourish", "consumer-nutrition"],
  ["consumer-nutrition", "implementation"],
  ["public-systems", "implementation"],
  ["biosecurity", "public-systems"],
  ["clinical-ai", "public-systems"],
  ["biosecurity", "implementation"],
  ["nourish", "precision-medicine"],
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
      <section className="w-full bg-white px-4 py-20">
        <div className="mx-auto max-w-md">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">
            Systems Map
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tighter text-black">
            How the work connects
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            A map of the major problem spaces across the portfolio, from
            precision medicine and clinical AI to public systems and
            biosecurity.
          </p>

          <div className="mt-8 grid gap-4">
            {nodes.map((node, index) => {
              const Icon = node.icon;
              const isActive = activeId === node.id;

              return (
                <motion.div
                  key={node.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveId(node.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveId(node.id);
                    }
                  }}
                  className={`rounded-[26px] border p-5 text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 ${isActive ? "border-black bg-black text-white" : "border-black/10 bg-white text-black"}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${isActive ? "bg-white/12 text-white/70" : "bg-black/5 text-gray-500"}`}
                      >
                        <Icon className="h-4 w-4" />
                        {node.subtitle}
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                        {node.title}
                      </h3>
                      <p
                        className={`mt-3 text-sm leading-relaxed ${isActive ? "text-white/75" : "text-gray-600"}`}
                      >
                        {node.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpen(node.route);
                      }}
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${isActive ? "bg-white text-black focus-visible:ring-white" : "bg-black text-white focus-visible:ring-black/40"}`}
                      aria-label={`Open ${node.title}`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">
              Systems Map
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
              A live view of the problem spaces the portfolio is actually about
            </h2>
            <p className="mt-4 max-w-2xl text-base md:text-xl leading-relaxed text-gray-600">
              Hover through the network to see how precision medicine, clinical
              AI, NOURISH, implementation, public systems, and biosecurity
              connect. This is the strategic shape behind the case studies.
            </p>

            <LayoutGroup id="systems-map-copy">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mt-8 rounded-[28px] border border-black/10 bg-[#fafafa] p-6 md:p-8 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  <activeNode.icon className="h-4 w-4" />
                  {activeNode.subtitle}
                </div>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-black">
                  {activeNode.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  {activeNode.description}
                </p>
                <button
                  type="button"
                  onClick={() => handleOpen(activeNode.route)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-transform hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
                >
                  Open this area
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </motion.div>
            </LayoutGroup>
          </div>

          <motion.div
            className="relative h-[620px] overflow-hidden rounded-[28px] border border-black/10 bg-[#fafafa] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            <div className="absolute inset-0 bg-white" />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/8 bg-white/45 backdrop-blur-md"
              animate={
                prefersReducedMotion
                  ? undefined
                  : { scale: [1, 1.06, 1], opacity: [0.5, 0.72, 0.5] }
              }
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/10"
              animate={prefersReducedMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            />

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
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
                    stroke={
                      activeId === fromId || activeId === toId
                        ? "rgba(15,23,42,0.32)"
                        : "rgba(15,23,42,0.12)"
                    }
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
                        className="absolute inset-[-10px] rounded-[26px] border-2 border-black"
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 28,
                        }}
                      />
                    )}
                    <motion.div
                      className={`relative min-w-[170px] rounded-[20px] border px-4 py-4 text-left shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] transition-colors ${isActive ? "border-black bg-black text-white" : "border-black/10 bg-white text-black"}`}
                      layout
                    >
                      <div
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${isActive ? "bg-white text-black" : "bg-black/5 text-gray-500"}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {node.subtitle}
                      </div>
                      <p className="mt-3 text-lg font-semibold tracking-tight">
                        {node.title}
                      </p>
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
