import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Network } from "lucide-react";
import { Link } from "react-router-dom";
import type { Role } from "../types/roles";
import { RoleNetworkModal } from "./RoleNetworkModal";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface RolesTimelineProps {
    roles: Role[];
    eyebrow: string;
    title: string;
    intro: string;
}

interface TimelineRowProps {
    role: Role;
    expanded: boolean;
    pulse: boolean;
    onEnter: () => void;
    onNetworkClick: (role: Role) => void;
}

const TimelineRow = ({ role, expanded, pulse, onEnter, onNetworkClick }: TimelineRowProps) => {
    const isExternal = !!role.link && /^https?:\/\//.test(role.link);

    return (
        <li
            onMouseEnter={onEnter}
            onFocus={onEnter}
            onClick={onEnter}
            className="relative cursor-pointer pl-14 md:cursor-default md:pl-20"
        >
            {/* Node — accent blue when expanded, hairline ring when not */}
            {pulse && (
                <span
                    aria-hidden="true"
                    className="absolute left-[14px] md:left-[18px] top-2.5 z-10 h-3 w-3 rounded-full bg-blue-500/50 animate-ping"
                />
            )}
            <span
                aria-hidden="true"
                className={`absolute left-[14px] md:left-[18px] top-2.5 z-10 h-3 w-3 rounded-full transition-colors duration-300 ${
                    expanded
                        ? "bg-blue-600"
                        : "bg-white border border-black/30 group-hover:bg-blue-600"
                }`}
                style={{ boxShadow: "0 0 0 4px white" }}
            />

            {/* Date eyebrow */}
            <p
                className={`text-[11px] font-semibold uppercase tracking-[0.28em] transition-opacity duration-300 ${
                    expanded ? "text-gray-500" : "text-gray-400"
                }`}
            >
                {role.period}
            </p>

            {/* Title — dims when not expanded */}
            <h3
                className={`mt-1.5 text-2xl md:text-[32px] font-bold tracking-tight leading-[1.1] transition-opacity duration-300 ${
                    expanded ? "text-black opacity-100" : "text-black opacity-55"
                }`}
            >
                {role.title}
            </h3>

            {/* Organization line, always visible but dimmed when collapsed */}
            <p
                className={`mt-1.5 text-sm md:text-[15px] transition-opacity duration-300 ${
                    expanded ? "text-gray-500" : "text-gray-400"
                }`}
            >
                {role.organization}
                {role.location ? ` · ${role.location}` : ""}
            </p>

            {/* Expanded body — summary, tags, actions */}
            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        key="body"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4">
                            <p className="max-w-2xl text-base leading-relaxed text-gray-700">
                                {role.summary}
                            </p>

                            {role.tags?.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {role.tags.slice(0, 4).map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-black/12 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Action menu — appears with the body. Each role can
                                expose any subset of actions (case study link, role
                                network). Hover lifts each chip, click triggers the
                                relevant flow. */}
                            <div className="mt-6 flex flex-wrap gap-2.5">
                                {role.link &&
                                    (isExternal ? (
                                        <a
                                            href={role.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/action inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
                                        >
                                            Open case study
                                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5" />
                                        </a>
                                    ) : (
                                        <Link
                                            to={role.link}
                                            className="group/action inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
                                        >
                                            Open case study
                                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5" />
                                        </Link>
                                    ))}

                                {role.network && (
                                    <button
                                        type="button"
                                        onClick={() => onNetworkClick(role)}
                                        aria-label="View role network"
                                        className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2"
                                    >
                                        <Network className="h-3.5 w-3.5" strokeWidth={1.5} />
                                        View network
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    );
};

export const RolesTimeline = ({ roles, eyebrow, title, intro }: RolesTimelineProps) => {
    const [activeRole, setActiveRole] = useState<Role | null>(null);
    // The "expanded" row defaults to the most recent (first) role, then the
    // scroll playhead drives it (with hover/tap as desktop overrides).
    const [hoveredId, setHoveredId] = useState<string | null>(roles[0]?.id ?? null);
    const prefersReducedMotion = usePrefersReducedMotion();

    // Scroll progress through the list drives the spine fill + comet.
    const containerRef = useRef<HTMLDivElement>(null);
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
    const recompute = useRef<() => void>(() => {});
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 55%", "end 45%"],
    });
    const spineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    useEffect(() => {
        if (!activeRole) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveRole(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [activeRole]);

    // Active role = the last row whose top has crossed a ~42% viewport playhead.
    // Monotonic with scroll, so it never jitters as rows expand. Touch-friendly:
    // this replaces the old hover-only model on mobile.
    useEffect(() => {
        if (prefersReducedMotion) return;
        let raf = 0;
        const compute = () => {
            raf = 0;
            const playY = window.innerHeight * 0.42;
            let best = 0;
            rowRefs.current.forEach((el, index) => {
                if (el && el.getBoundingClientRect().top - 8 <= playY) best = index;
            });
            setHoveredId(roles[best]?.id ?? null);
        };
        recompute.current = compute;
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(compute);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        compute();
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [roles, prefersReducedMotion]);

    return (
        <section className="w-full bg-white px-4 pt-20 pb-24 md:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="mb-16 max-w-3xl">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-8 bg-blue-500" />
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                            {eyebrow}
                        </p>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
                        {title}
                    </h2>
                    <p className="mt-4 text-base md:text-xl leading-relaxed text-gray-600">
                        {intro}
                    </p>
                </div>

                <div className="relative" ref={containerRef}>
                    {/* Vertical spine — hairline track that runs the full list */}
                    <div
                        aria-hidden="true"
                        className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-black/12"
                    />

                    {/* Self-drawing accent fill + scroll comet */}
                    {prefersReducedMotion ? (
                        <div
                            aria-hidden="true"
                            className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-indigo-500"
                        />
                    ) : (
                        <>
                            <motion.div
                                aria-hidden="true"
                                className="absolute left-[19px] md:left-[23px] top-0 w-px bg-gradient-to-b from-blue-500 to-indigo-500"
                                style={{ height: spineHeight }}
                            />
                            <motion.div
                                aria-hidden="true"
                                className="absolute left-[14px] md:left-[18px] z-20 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-blue-500"
                                style={{
                                    top: spineHeight,
                                    boxShadow: "0 0 12px 4px rgba(37,99,235,0.55)",
                                }}
                            />
                        </>
                    )}

                    <ol
                        className="relative flex flex-col gap-12 md:gap-16"
                        // Re-anchor to the scroll playhead once the cursor leaves.
                        onMouseLeave={() => recompute.current()}
                    >
                        {roles.map((role, index) => (
                            <div
                                key={role.id}
                                ref={(el) => {
                                    rowRefs.current[index] = el;
                                }}
                                className="group"
                            >
                                <TimelineRow
                                    role={role}
                                    expanded={hoveredId === role.id}
                                    pulse={hoveredId === role.id && !prefersReducedMotion}
                                    onEnter={() => setHoveredId(role.id)}
                                    onNetworkClick={setActiveRole}
                                />
                            </div>
                        ))}
                    </ol>
                </div>
            </div>

            <RoleNetworkModal role={activeRole} onClose={() => setActiveRole(null)} accent="#2563eb" />
        </section>
    );
};
