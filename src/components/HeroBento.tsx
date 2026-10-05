import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import headshot from "../assets/stefan-headshot.webp";
import pgxClinicImage from "../assets/publications/pharmacogenomics-clinicians.webp";
import { scholarMetrics } from "../types/publications";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { SiteHeader } from "./SiteHeader";

const CARD = "#FFFFFF";
const EASE = [0.22, 1, 0.36, 1] as const;
const CORNER_RADIUS = 28;
const PORTRAIT_BACKDROP = "linear-gradient(180deg, #E1E1D9 0%, #D9DBD6 45%, #CFD5D3 100%)";

const stats = [
    { value: "2nd", label: "in the US at Harvard HSIL" },
    {
        value: String(scholarMetrics.citations),
        label: `citations across ${scholarMetrics.publications} papers`,
    },
];

const features = [
    {
        kicker: "Healio · Press",
        title: "AI copilot in development guides healthy cooking",
        highlight: "step-by-step.",
        href: "https://www.healio.com/news/primary-care/20260507/ai-copilot-in-development-guides-healthy-cooking-stepbystep",
    },
    {
        kicker: "First author · 2025",
        title: "Clinician experiences at the frontier of pharmacogenomics and",
        highlight: "future directions.",
        href: "https://doi.org/10.3390/jpm15070294",
    },
];

/** Auto-advances an index; pauses on hover/focus and when motion is reduced.
 *  Picking an item manually restarts the interval. */
function useRotation(length: number, intervalMs: number, enabled: boolean) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (!enabled || paused || length < 2) return;
        const id = window.setTimeout(() => setIndex((i) => (i + 1) % length), intervalMs);
        return () => window.clearTimeout(id);
    }, [enabled, paused, length, intervalMs, index]);

    const pauseHandlers = {
        onMouseEnter: () => setPaused(true),
        onMouseLeave: () => setPaused(false),
        onFocus: () => setPaused(true),
        onBlur: () => setPaused(false),
    };

    return { index, setIndex, pauseHandlers };
}

function Dots({
    count,
    active,
    onSelect,
    label,
    tone,
}: {
    count: number;
    active: number;
    onSelect: (index: number) => void;
    label: string;
    tone: "dark" | "light";
}) {
    const on = tone === "dark" ? "bg-gray-900" : "bg-white";
    const off = tone === "dark" ? "bg-gray-900/30" : "bg-white/40";

    return (
        <div className="flex items-center gap-1" role="group" aria-label={label}>
            {Array.from({ length: count }, (_, i) => (
                <button
                    key={i}
                    type="button"
                    onClick={() => onSelect(i)}
                    aria-label={`Show ${i + 1} of ${count}`}
                    aria-current={i === active}
                    className="group/dot grid h-6 place-items-center px-0.5 focus-visible:outline-none"
                >
                    <span
                        className={`block h-1.5 rounded-full transition-all duration-500 group-focus-visible/dot:ring-2 group-focus-visible/dot:ring-current ${
                            i === active ? `w-5 ${on}` : `w-1.5 ${off}`
                        }`}
                    />
                </button>
            ))}
        </div>
    );
}

/** Concave corner that rounds the main panel into the headline card. */
const InverseCorner = ({ className }: { className: string }) => (
    <span
        aria-hidden="true"
        className={`pointer-events-none absolute ${className}`}
        style={{
            width: CORNER_RADIUS,
            height: CORNER_RADIUS,
            background: `radial-gradient(circle at 100% 0, transparent ${CORNER_RADIUS - 0.5}px, ${CARD} ${CORNER_RADIUS}px)`,
        }}
    />
);

interface HeroBentoProps {
    onContact: () => void;
}

export function HeroBento({ onContact }: HeroBentoProps) {
    const prefersReducedMotion = usePrefersReducedMotion();
    const stat = useRotation(stats.length, 4200, !prefersReducedMotion);
    const feature = useRotation(features.length, 7000, !prefersReducedMotion);
    const activeStat = stats[stat.index];
    const activeFeature = features[feature.index];

    const rise = (delay: number) => ({
        initial: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay, ease: EASE },
    });

    const swap = {
        initial: { opacity: 0, y: prefersReducedMotion ? 0 : 10, filter: "blur(6px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: { opacity: 0, y: prefersReducedMotion ? 0 : -10, filter: "blur(6px)" },
        transition: { duration: 0.45, ease: EASE },
    };

    const scrollToWork = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        document.getElementById("work")?.scrollIntoView({
            behavior: prefersReducedMotion ? "instant" : "smooth",
            block: "start",
        });
    };

    return (
        <section
            className="relative flex w-full flex-col gap-3 bg-paper px-3 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:gap-4 md:px-5 md:pb-5 md:pt-4 lg:h-[100svh] lg:min-h-[640px]"
        >
            <SiteHeader onContact={onContact} />

            {/* Bento */}
            <div className="flex min-h-0 flex-1 flex-col gap-3 md:gap-4 lg:flex-row">
                {/* Main panel */}
                <div className="relative h-[74svh] min-h-[540px] lg:h-auto lg:min-h-0 lg:flex-1">
                    <motion.div
                        initial={{
                            opacity: 0,
                            clipPath: prefersReducedMotion
                                ? `inset(0% 0% 0% 0% round ${CORNER_RADIUS}px)`
                                : `inset(4% 3% 4% 3% round ${CORNER_RADIUS}px)`,
                        }}
                        animate={{ opacity: 1, clipPath: `inset(0% 0% 0% 0% round ${CORNER_RADIUS}px)` }}
                        transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
                        className="absolute inset-0 overflow-hidden"
                        style={{ borderRadius: CORNER_RADIUS }}
                    >
                        {/* Backdrop sampled from the portrait's studio wall so the
                            photo melts into the panel instead of sitting in a box. */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0"
                            style={{ background: PORTRAIT_BACKDROP }}
                        />
                        <img
                            src={headshot}
                            alt="Portrait of Stefan Thottunkal"
                            loading="eager"
                            decoding="async"
                            className="absolute inset-0 h-full w-full select-none object-cover object-[50%_18%] lg:left-auto lg:w-auto lg:max-w-none lg:object-contain lg:[mask-image:linear-gradient(to_right,transparent,black_12%)]"
                            draggable={false}
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-black/5"
                        />
                    </motion.div>

                    {/* Headline cut-out */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="absolute bottom-0 left-0 z-10 max-w-[90%] p-6 md:max-w-[34rem] md:p-8"
                        style={{
                            backgroundColor: CARD,
                            borderTopRightRadius: CORNER_RADIUS,
                            borderBottomLeftRadius: CORNER_RADIUS,
                        }}
                    >
                        <InverseCorner className="bottom-full left-0" />
                        <InverseCorner className="bottom-0 left-full" />

                        <h1 className="font-bold leading-[0.9] tracking-[-0.04em] text-gray-900 text-[clamp(2.75rem,1.5rem+3.8vw,5rem)]">
                            {["Stefan", "Thottunkal"].map((line, i) => (
                                <span key={line} className="block overflow-hidden pb-[0.06em]">
                                    <motion.span
                                        className="block"
                                        initial={{ y: prefersReducedMotion ? 0 : "105%", opacity: prefersReducedMotion ? 0 : 1 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.5 + i * 0.09, ease: EASE }}
                                    >
                                        {line}
                                    </motion.span>
                                </span>
                            ))}
                        </h1>

                        <motion.p
                            {...rise(0.7)}
                            className="mt-3 max-w-[22rem] text-balance text-base leading-snug text-gray-600 md:text-lg"
                        >
                            Precision medicine, clinical AI, and global health.
                        </motion.p>

                    </motion.div>
                </div>

                {/* Side column */}
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:flex lg:w-[clamp(220px,31svh,300px)] lg:shrink-0 lg:flex-col">
                    {/* Stat disc */}
                    <motion.div
                        {...rise(0.3)}
                        {...stat.pauseHandlers}
                        className="@container relative isolate flex aspect-square w-full shrink-0 flex-col items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-tan to-tan-deep p-[10%] text-center text-gray-900"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div key={stat.index} {...swap} className="flex flex-col items-center">
                                <span className="font-bold leading-none tracking-[-0.04em] tabular-nums text-[23cqw]">
                                    {activeStat.value}
                                </span>
                                <span className="mt-[4cqw] block min-h-[2.5em] max-w-[78cqw] font-medium leading-tight text-gray-800 text-[max(11px,6cqw)]">
                                    {activeStat.label}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                        <div className="mt-[3cqw]">
                            <Dots
                                count={stats.length}
                                active={stat.index}
                                onSelect={stat.setIndex}
                                label="Highlights"
                                tone="dark"
                            />
                        </div>
                    </motion.div>

                    {/* Image card */}
                    <motion.a
                        {...rise(0.4)}
                        href="#work"
                        onClick={scrollToWork}
                        className="group relative isolate block aspect-square w-full overflow-hidden rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 lg:aspect-auto lg:min-h-[140px] lg:flex-[1.15]"
                    >
                        <img
                            src={pgxClinicImage}
                            alt=""
                            loading="eager"
                            decoding="async"
                            className="absolute inset-0 -z-10 h-full w-full object-cover object-[68%_30%] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 to-transparent"
                        />
                        <div className="flex h-full flex-col justify-between p-4 md:p-5">
                            <div>
                                <h2 className="text-lg font-bold leading-tight tracking-tight text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.35)] md:text-xl">
                                    Selected work
                                </h2>
                            </div>
                            <span className="grid h-10 w-10 place-items-center self-end rounded-full bg-gray-900 text-white transition-[transform,background-color] duration-500 group-hover:-rotate-45 group-hover:bg-gray-800">
                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </span>
                        </div>
                    </motion.a>

                    {/* Feature card */}
                    <motion.div
                        {...rise(0.5)}
                        {...feature.pauseHandlers}
                        className="relative col-span-2 flex min-h-[210px] flex-col justify-between overflow-hidden rounded-[28px] p-5 bg-gradient-to-b from-oxblood to-oxblood-deep text-white md:col-span-1 md:aspect-square md:min-h-0 lg:aspect-auto lg:min-h-[180px] lg:flex-1"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.a
                                key={feature.index}
                                {...swap}
                                href={activeFeature.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-oxblood-deep"
                            >
                                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">
                                    {activeFeature.kicker}
                                </p>
                                <h2 className="mt-2 text-lg font-bold leading-[1.2] tracking-tight md:text-[1.15rem]">
                                    {activeFeature.title}{" "}
                                    <span className="font-['Playfair_Display',_serif] text-[1.12em] font-semibold italic whitespace-nowrap text-sand">
                                        {activeFeature.highlight}
                                    </span>
                                </h2>
                            </motion.a>
                        </AnimatePresence>

                        <div className="mt-4 flex items-center justify-between">
                            <Dots
                                count={features.length}
                                active={feature.index}
                                onSelect={feature.setIndex}
                                label="Featured"
                                tone="light"
                            />
                            <a
                                href={activeFeature.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open: ${activeFeature.title} ${activeFeature.highlight}`}
                                className="group grid h-10 w-10 place-items-center rounded-full bg-sand text-gray-900 transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-oxblood-deep"
                            >
                                <ArrowUpRight
                                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
