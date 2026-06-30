import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { usePhoneLayout } from "../hooks/usePhoneLayout";
import svgPaths from "./timeline/imports/svg-a9d042udyz";

import imgHopkinsPavaCenter from "../assets/timeline-upgraded/0ab6195dd58e68fba2b601597ac6a3d1c5449c8a.webp";
import imgHopkinsUniversityLogo from "../assets/timeline-upgraded/6d51fda445708898195c8f6705d9db08b82e8e01.webp";
import imgHarvardHsil from "../assets/timeline-upgraded/c424d2a70339b3c6e290118404ad877891b9dc29.webp";
import imgHarvardUniversityLogo from "../assets/timeline-upgraded/f70deb69cfd730589dc5541e5370747c548d6b36.webp";
import imgStanfordBiodesign from "../assets/timeline-upgraded/6e58278c27d2c792ae3c6b2e1b3f3ad2db623558.webp";
import imgStanfordGsbSeed from "../assets/timeline-upgraded/bb87ecb6f87fccb4c80834639eeac42bb0a44b0c.webp";
import imgStanfordUniversityLogo from "../assets/timeline-upgraded/7d22c5d9d743209fb003efffa0626fbc9d36609d.webp";
import imgMacquarieUniversity from "../assets/timeline-upgraded/411b1a99a326f193cf4b7d0fa45bcf19453522d4.webp";
import img180DegreesConsulting from "../assets/timeline-upgraded/e2bbbcd40f3401f8765c0558110ec847a0fd5a02.webp";
import imgNationalInternships from "../assets/timeline-upgraded/121f17a019571944facd44111913fd78c8260911.webp";
import imgAustralianNationalUniversity from "../assets/timeline-upgraded/e715f2d2de7d97eda7b4f77cf9e9c7b55072d228.webp";

export const TimelineSection = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    const [visibility, setVisibility] = useState({
        anu: false,
        internships: false,
        consulting: false,
        md: false,
        ms: false,
        biodesign: false,
        seed: false,
        harvard: false,
        hsil: false,
        hopkins: false,
        pava: false,
    });
    const windowWidth = useWindowWidth();
    const isPhoneLayout = usePhoneLayout();
    const timelineContainerRef = useRef(null);
    const mobileTimelineItems = [
        {
            id: "bhlth",
            title: "BHLTH",
            period: "2019-2023",
            image: imgAustralianNationalUniversity,
            description: "Bachelor of Health Science at ANU, grounding me in population health and equity.",
        },
        {
            id: "internships",
            title: "National Internships",
            period: "2022",
            image: imgNationalInternships,
            description: "Parliamentary policy internship translating complex evidence into post COVID recovery recommendations.",
        },
        {
            id: "consulting",
            title: "180 Degrees Consulting",
            period: "2022",
            image: img180DegreesConsulting,
            description: "Financial strategy advisory for a large education nonprofit, strengthening my analytical and client skills.",
        },
        {
            id: "md",
            title: "MD (II)",
            period: "2023-2027",
            image: imgMacquarieUniversity,
            description: "Macquarie University MD training, building my clinical foundations for work with underserved communities.",
        },
        {
            id: "ms",
            title: "M.S",
            period: "2025-2026",
            image: imgStanfordUniversityLogo,
            description: "Community Health and Prevention Research at Stanford, focusing on precision medicine and health equity.",
        },
        {
            id: "biodesign",
            title: "Stanford Biodesign",
            period: "2025",
            image: imgStanfordBiodesign,
            description: "Completed the application-only Stanford Biodesign for Digital Health program, applying its needs-driven method with ENT surgeons, hospital teams, children, and parents to develop PainGone PainGuin.",
        },
        {
            id: "seed",
            title: "Stanford Seed",
            period: "2025",
            image: imgStanfordGsbSeed,
            description: "Stanford Seed internship in Nigeria, advising go to market strategy and product management for a dialysis medical device.",
        },
        {
            id: "harvard",
            title: "Harvard Venture Building",
            period: "2025",
            image: imgHarvardUniversityLogo,
            description: "Harvard Venture Building Program, a four week course taught by VCs and Harvard Business School and Harvard T H Chan faculty.",
        },
        {
            id: "hsil",
            title: "Harvard HSIL",
            period: "2025",
            image: imgHarvardHsil,
            description: "Ten week HSIL competition where our team placed 7th of 3,500 after four national and international rounds, leading to invitation into the Venture Building Program.",
        },
        {
            id: "hopkins",
            title: "Johns Hopkins",
            period: "2025",
            image: imgHopkinsUniversityLogo,
            description: "Programming with Johns Hopkins University across its venture and entrepreneurship initiatives.",
        },
        {
            id: "pava",
            title: "Hopkins Pava Center",
            period: "2025",
            image: imgHopkinsPavaCenter,
            description: "Entrepreneurship training at the Pava Center, refining venture design for impactful health startups.",
        },
    ];

    // Calculate scale to fit the content (approx 1400px wide) into the window
    // This zooms in significantly compared to fitting the entire 3826px canvas
    const baseWidth = 3826;
    const baseHeight = 2485;
    const contentCenter = 2353; // The x-coordinate of the vertical timeline line

    // Scale based on a target content width of ~2000px (or window width if smaller)
    // This ensures the text is readable but zoomed out enough to see more context
    const targetContentWidth = 2000;
    const scale = Math.min(1.2, windowWidth / targetContentWidth); // Cap at 1.2x zoom for very large screens

    // Calculate offset to center the timeline spine
    const xOffset = (windowWidth / 2) - (contentCenter * scale);

    // Scroll-based line animation
    const { scrollYProgress } = useScroll({
        target: timelineContainerRef,
        offset: ["start center", "end center"]
    });

    // Map scroll progress to line height (0 to 2021px)
    const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    // Apply progress thresholds. Used on mount (to sync with current scroll
    // position — useScroll's initial value does NOT fire useMotionValueEvent)
    // and on every subsequent scroll change.
    const applyProgress = React.useCallback((latest: number) => {
        setVisibility(prev => {
            const next = {
                anu: latest > 0.02,
                internships: latest > 0.08,
                consulting: latest > 0.08,
                md: latest > 0.23,
                ms: latest > 0.42,
                biodesign: latest > 0.58,
                seed: latest > 0.59,
                harvard: latest > 0.70,
                hsil: latest > 0.82,
                hopkins: latest > 0.88,
                pava: latest > 0.89,
            };
            const changed = (Object.keys(next) as Array<keyof typeof next>).some(k => prev[k] !== next[k]);
            return changed ? next : prev;
        });
    }, []);

    useMotionValueEvent(scrollYProgress, "change", applyProgress);

    // Sync after mount: if the user lands on the page already past the
    // section (browser scroll restoration, deep link, back-nav from project
    // detail), useMotionValueEvent never fires for the initial value.
    useEffect(() => {
        // Re-check after layout settles (scrollYProgress is computed from
        // target measurements which may not be ready in the first frame).
        const firstId = window.setTimeout(() => applyProgress(scrollYProgress.get()), 0);
        const settledId = window.setTimeout(() => applyProgress(scrollYProgress.get()), 200);
        return () => {
            window.clearTimeout(firstId);
            window.clearTimeout(settledId);
        };
    }, [applyProgress, scrollYProgress]);

    const handleTimelineItemKeyDown = React.useCallback(
        (itemId: string, event: React.KeyboardEvent<HTMLElement>) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setHoveredItem(itemId);
            } else if (event.key === "Escape") {
                setHoveredItem(null);
            }
        },
        [],
    );

    if (isPhoneLayout) {
        return (
            <section className="w-full bg-white px-4 pt-16 pb-[max(2rem,env(safe-area-inset-bottom))]">
                <div className="max-w-md mx-auto">
                    <div className="mb-8 text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">Education & Formation</p>
                        <h2 className="text-4xl font-bold tracking-tighter text-black">How the path was built</h2>
                        <p className="mt-3 text-base leading-relaxed text-gray-600">
                            The institutions, training environments, and venture programs that shaped how I think across health, systems, and product.
                        </p>
                    </div>

                    <div className="relative pl-6">
                        <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gray-200" />
                        <div className="space-y-5">
                            {mobileTimelineItems.map((item, index) => {
                                const isExpanded = expandedItem === item.id;

                                return (
                                    <motion.button
                                        key={item.id}
                                        type="button"
                                        className="relative block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-4 rounded-[28px]"
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-60px" }}
                                        transition={{ duration: 0.45, delay: index * 0.05 }}
                                        onClick={() => setExpandedItem(isExpanded ? null : item.id)}
                                        aria-expanded={isExpanded}
                                        aria-label={`${isExpanded ? "Collapse" : "Expand"} timeline item ${item.title}`}
                                    >
                                        <span className="absolute left-[-20px] top-5 h-3 w-3 rounded-full bg-black ring-4 ring-white" />
                                        <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[#fafafa] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]">
                                            <div className="aspect-[4/3] overflow-hidden bg-white">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="h-full w-full object-contain p-6"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </div>
                                            <div className="p-5">
                                                <div className="mb-2 flex items-start justify-between gap-4">
                                                    <div>
                                                        <h3 className="text-2xl font-bold tracking-tight text-black">{item.title}</h3>
                                                        <p className="text-sm text-gray-500">{item.period}</p>
                                                    </div>
                                                    <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                                                        {isExpanded ? "Close" : "Tap"}
                                                    </span>
                                                </div>
                                                <p className={`overflow-hidden text-base leading-relaxed text-gray-700 transition-all duration-300 ${isExpanded ? "max-h-40 opacity-100" : "max-h-12 opacity-80"}`}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <div className="w-full overflow-hidden bg-white pt-20 pb-32" ref={timelineContainerRef}>
            <div className="mx-auto mb-12 max-w-5xl px-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">Education & Formation</p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">The environments that shaped the work</h2>
                <p className="mt-4 mx-auto max-w-3xl text-base md:text-xl leading-relaxed text-gray-600">
                    A timeline of medical training, research institutions, and innovation programs that developed my approach to health systems, product strategy, and implementation.
                </p>
            </div>
            <div
                style={{
                    width: "100%",
                    height: baseHeight * scale,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <div
                    style={{
                        transform: `translate(${xOffset}px, 0) scale(${scale})`,
                        transformOrigin: 'top left',
                        width: baseWidth,
                        height: baseHeight,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                    className="bg-white relative"
                    data-name="MacBook Pro 14' - 1"
                >
                    {/* Timeline vertical line - ANIMATED */}
                    <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[2353px] top-[221px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "2221", "--transform-inner-height": "25" } as React.CSSProperties}>
                        <div className="flex-none rotate-[270deg]">
                            <motion.div
                                className="bg-[#d9d9d9] h-[25px] w-[2221px] origin-right"
                                style={{ scaleX: lineScaleY }}
                            />
                        </div>
                    </div>

                    {/* Arrow at top */}
                    <div className="absolute h-[182px] left-[2290px] top-[138px] w-[144px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 182">
                            <path d={svgPaths.p2d9e2e80} fill="var(--fill-0, white)" id="Vector 2" />
                        </svg>
                    </div>

                    {/* White box covering timeline behind arrow */}
                    <div className="absolute bg-white h-[147px] left-[2283px] top-[199px] w-[168px]" />

                    {/* BHLTH Timeline Item */}
                    <motion.div
                        className="absolute cursor-pointer transition-opacity hover:opacity-95 will-change-transform"
                        style={{ left: 1505, top: 35, width: 1429, height: 476 }}
                        tabIndex={0}
                        role="button"
                        onMouseEnter={() => setHoveredItem('bhlth')}
                        onMouseLeave={() => setHoveredItem(null)}
                        onFocus={() => setHoveredItem('bhlth')}
                        onBlur={() => setHoveredItem(null)}
                        onKeyDown={(event) => handleTimelineItemKeyDown('bhlth', event)}
                        initial={{ opacity: 0, y: 100 }}
                        animate={visibility.anu ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Australian National University - main logo */}
                        <motion.div
                            className="absolute"
                            style={{ width: 291, height: 453, left: 2221 - 1505, top: 35 - 35 }}
                            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                            animate={visibility.anu ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -15 }}
                            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 60, damping: 12 }}
                        >
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <img alt="Australian National University" className="absolute h-full left-0 max-w-none top-0 w-[233.46%]" src={imgAustralianNationalUniversity} />
                            </div>
                        </motion.div>

                        {/* National Internships - POPS OUT FROM ANU */}
                        <motion.div
                            className="absolute cursor-pointer"
                            style={{ width: 650, height: 81, left: 1615 - 1505, top: 387 - 35 }}
                            tabIndex={0}
                            role="button"
                            initial={{ scale: 0, x: (2221 - 1615) - 325, y: (221 - 387) + 40.5 }}
                            animate={visibility.internships ? { scale: 1, x: 0, y: 0 } : { scale: 0, x: (2221 - 1615) - 325, y: (221 - 387) + 40.5 }}
                            transition={{ duration: 1.2, delay: 0.1, type: "spring", stiffness: 60, damping: 10 }}
                            onMouseEnter={() => setHoveredItem('internships')}
                            onMouseLeave={() => setHoveredItem(null)}
                            onFocus={() => setHoveredItem('internships')}
                            onBlur={() => setHoveredItem(null)}
                            onKeyDown={(event) => handleTimelineItemKeyDown('internships', event)}
                        >
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <img alt="National Internships" className="absolute w-full h-full object-contain" src={imgNationalInternships} />
                            </div>
                        </motion.div>

                        {/* 180 Degrees Consulting - POPS OUT FROM ANU - RIGHT SIDE */}
                        <motion.div
                            className="absolute cursor-pointer"
                            style={{ width: 443, height: 140, left: 2441 - 1505, top: 387 - 35 }}
                            tabIndex={0}
                            role="button"
                            initial={{ scale: 0, x: -(2441 - 2221 - 145.5) + 221.5, y: -(387 - 35 - 226.5) + 70 }}
                            animate={visibility.consulting ? { scale: 1, x: 0, y: 0 } : { scale: 0, x: -(2441 - 2221 - 145.5) + 221.5, y: -(387 - 35 - 226.5) + 70 }}
                            transition={{ duration: 1.2, delay: 0.1, type: "spring", stiffness: 60, damping: 10 }}
                            onMouseEnter={() => setHoveredItem('consulting')}
                            onMouseLeave={() => setHoveredItem(null)}
                            onFocus={() => setHoveredItem('consulting')}
                            onBlur={() => setHoveredItem(null)}
                            onKeyDown={(event) => handleTimelineItemKeyDown('consulting', event)}
                        >
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <img alt="180 Degrees Consulting" className="absolute h-[166.23%] left-0 max-w-none top-[-29.82%] w-full" src={img180DegreesConsulting} />
                            </div>
                        </motion.div>

                        {/* BHLTH Title */}
                        <motion.div
                            className="absolute font-['Jaldi:Regular',sans-serif] not-italic"
                            style={{ width: 493, height: 225, left: 2481 - 1505, top: 162 - 35, color: 'black', fontSize: 100, fontWeight: 400 }}
                            initial={{ opacity: 0, x: 50 }}
                            animate={visibility.anu ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                        >
                            BHLTH
                        </motion.div>
                    </motion.div>

                    {/* MD Timeline Item */}
                    <motion.div
                        className="absolute cursor-pointer transition-opacity hover:opacity-95 will-change-transform"
                        style={{ left: 2160, top: 676, width: 814, height: 248 }}
                        tabIndex={0}
                        role="button"
                        onMouseEnter={() => setHoveredItem('md')}
                        onMouseLeave={() => setHoveredItem(null)}
                        onFocus={() => setHoveredItem('md')}
                        onBlur={() => setHoveredItem(null)}
                        onKeyDown={(event) => handleTimelineItemKeyDown('md', event)}
                        initial={{ opacity: 0, x: -100 }}
                        animate={visibility.md ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Macquarie University logo */}
                        <motion.div
                            className="absolute"
                            style={{ width: 448, height: 248, left: 2160 - 2160, top: 676 - 676 }}
                            initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
                            animate={visibility.md ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: 15 }}
                            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 60, damping: 12 }}
                        >
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <img alt="Macquarie University" className="absolute h-[165.8%] left-0 max-w-none top-0 w-[91.95%]" src={imgMacquarieUniversity} />
                            </div>
                        </motion.div>

                        {/* MD (II) Title */}
                        <motion.div
                            className="absolute font-['Jaldi:Regular',sans-serif] not-italic"
                            style={{ width: 366, height: 248, left: 2481 - 2160, top: 34, color: 'black', fontSize: 100, fontWeight: 400 }}
                            initial={{ opacity: 0, x: -50 }}
                            animate={visibility.md ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                        >
                            MD (II)
                        </motion.div>
                    </motion.div>

                    {/* M.S Timeline Item */}
                    <motion.div
                        className="absolute cursor-pointer transition-opacity hover:opacity-95 will-change-transform"
                        style={{ left: 1800, top: 1067, width: 1174, height: 532 }}
                        tabIndex={0}
                        role="button"
                        onMouseEnter={() => setHoveredItem('ms')}
                        onMouseLeave={() => setHoveredItem(null)}
                        onFocus={() => setHoveredItem('ms')}
                        onBlur={() => setHoveredItem(null)}
                        onKeyDown={(event) => handleTimelineItemKeyDown('ms', event)}
                        initial={{ opacity: 0, y: 100 }}
                        animate={visibility.ms ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Stanford University logo */}
                        <motion.div
                            className="absolute"
                            style={{ width: 329, height: 329, left: 2201 - 1800, top: 1067 - 1067 }}
                            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                            animate={visibility.ms ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -15 }}
                            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 60, damping: 12 }}
                        >
                            <img alt="Stanford University" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgStanfordUniversityLogo} />
                        </motion.div>

                        {/* Stanford Biodesign - POPS OUT FROM Stanford logo */}
                        <motion.div
                            className="absolute cursor-pointer"
                            style={{ width: 432, height: 203, left: 1800 - 1800, top: 1396 - 1067 }}
                            initial={{ scale: 0, x: (2201 - 1800) + 164.5 - 216, y: (1067 - 1067) + 164.5 - 101.5 }}
                            animate={visibility.biodesign ? { scale: 1, x: 0, y: 0 } : { scale: 0, x: (2201 - 1800) + 164.5 - 216, y: (1067 - 1067) + 164.5 - 101.5 }}
                            transition={{ duration: 1.2, delay: 0.1, type: "spring", stiffness: 60, damping: 10 }}
                            tabIndex={0}
                            role="button"
                            onMouseEnter={() => setHoveredItem('biodesign')}
                            onMouseLeave={() => setHoveredItem(null)}
                            onFocus={() => setHoveredItem('biodesign')}
                            onBlur={() => setHoveredItem(null)}
                            onKeyDown={(event) => handleTimelineItemKeyDown('biodesign', event)}
                        >
                            <img alt="Stanford Biodesign" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgStanfordBiodesign} />
                        </motion.div>

                        {/* Stanford GSB Seed - POPS OUT FROM Stanford logo */}
                        <motion.div
                            className="absolute cursor-pointer"
                            style={{ width: 482, height: 176, left: 2499 - 1800, top: 1409 - 1067 }}
                            initial={{ scale: 0, x: -(2499 - 2201 - 164.5) + 241, y: -(1409 - 1067 - 164.5) + 88 }}
                            animate={visibility.seed ? { scale: 1, x: 0, y: 0 } : { scale: 0, x: -(2499 - 2201 - 164.5) + 241, y: -(1409 - 1067 - 164.5) + 88 }}
                            transition={{ duration: 1.2, delay: 0.1, type: "spring", stiffness: 60, damping: 10 }}
                            tabIndex={0}
                            role="button"
                            onMouseEnter={() => setHoveredItem('seed')}
                            onMouseLeave={() => setHoveredItem(null)}
                            onFocus={() => setHoveredItem('seed')}
                            onBlur={() => setHoveredItem(null)}
                            onKeyDown={(event) => handleTimelineItemKeyDown('seed', event)}
                        >
                            <img alt="Stanford GSB Seed" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgStanfordGsbSeed} />
                        </motion.div>

                        {/* M.S Title */}
                        <motion.div
                            className="absolute font-['Jaldi:Regular',sans-serif] not-italic"
                            style={{ width: 493, height: 225, left: 2481 - 1800, top: 1153 - 1067, color: 'black', fontSize: 100, fontWeight: 400 }}
                            initial={{ opacity: 0, x: 50 }}
                            animate={visibility.ms ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.9, delay: 0.5 }}
                        >
                            M.S
                        </motion.div>
                    </motion.div>

                    {/* Harvard University Logo */}
                    <motion.div
                        className="absolute cursor-pointer transition-opacity hover:opacity-95 will-change-transform"
                        style={{ width: 238, height: 232, left: 2247, top: 1645 }}
                        tabIndex={0}
                        role="button"
                        onMouseEnter={() => setHoveredItem('harvard')}
                        onMouseLeave={() => setHoveredItem(null)}
                        onFocus={() => setHoveredItem('harvard')}
                        onBlur={() => setHoveredItem(null)}
                        onKeyDown={(event) => handleTimelineItemKeyDown('harvard', event)}
                        initial={{ opacity: 0, scale: 0.5, y: 80 }}
                        animate={visibility.harvard ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 80 }}
                        transition={{ duration: 1, type: "spring", stiffness: 60, damping: 12 }}
                    >
                        <img alt="Harvard University" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHarvardUniversityLogo} />
                    </motion.div>

                    {/* Harvard HSIL - POPS OUT FROM Harvard logo */}
                    <motion.div
                        className="absolute cursor-pointer transition-opacity hover:opacity-95 will-change-transform"
                        style={{ width: 285, height: 285, left: 1875, top: 1877 }}
                        tabIndex={0}
                        role="button"
                        initial={{ scale: 0, x: (2247 - 1875) + 119 - 142.5, y: (1645 - 1877) + 116 - 142.5 }}
                        animate={visibility.hsil ? { scale: 1, x: 0, y: 0 } : { scale: 0, x: (2247 - 1875) + 119 - 142.5, y: (1645 - 1877) + 116 - 142.5 }}
                        transition={{ duration: 1.2, delay: 0.1, type: "spring", stiffness: 60, damping: 10 }}
                        onMouseEnter={() => setHoveredItem('hsil')}
                        onMouseLeave={() => setHoveredItem(null)}
                        onFocus={() => setHoveredItem('hsil')}
                        onBlur={() => setHoveredItem(null)}
                        onKeyDown={(event) => handleTimelineItemKeyDown('hsil', event)}
                    >
                        <img alt="Harvard HSIL" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHarvardHsil} />
                    </motion.div>

                    {/* Hopkins University Logo */}
                    <motion.div
                        className="absolute cursor-pointer transition-opacity hover:opacity-95 will-change-transform"
                        style={{ width: 246, height: 232, left: 2245, top: 2126 }}
                        tabIndex={0}
                        role="button"
                        onMouseEnter={() => setHoveredItem('hopkins')}
                        onMouseLeave={() => setHoveredItem(null)}
                        onFocus={() => setHoveredItem('hopkins')}
                        onBlur={() => setHoveredItem(null)}
                        onKeyDown={(event) => handleTimelineItemKeyDown('hopkins', event)}
                        initial={{ opacity: 0, x: -100, scale: 0.7 }}
                        animate={visibility.hopkins ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.7 }}
                        transition={{ duration: 1.5, type: "spring", stiffness: 40, damping: 15 }}
                    >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="Johns Hopkins University" className="absolute h-[218.1%] left-[-92.61%] max-w-none top-[-15.98%] w-[286.09%]" src={imgHopkinsUniversityLogo} />
                        </div>
                    </motion.div>

                    {/* Hopkins Pava Center - POPS OUT FROM Hopkins logo */}
                    <motion.div
                        className="absolute cursor-pointer transition-opacity hover:opacity-95 will-change-transform"
                        style={{ width: 185, height: 185, left: 2608, top: 2265 }}
                        tabIndex={0}
                        role="button"
                        initial={{ scale: 0, x: (2245 - 2608) + 123 - 92.5, y: (2126 - 2265) + 116 - 92.5 }}
                        animate={visibility.pava ? { scale: 1, x: 0, y: 0 } : { scale: 0, x: (2245 - 2608) + 123 - 92.5, y: (2126 - 2265) + 116 - 92.5 }}
                        transition={{ duration: 1.8, delay: 0.1, type: "spring", stiffness: 40, damping: 12 }}
                        onMouseEnter={() => setHoveredItem('pava')}
                        onMouseLeave={() => setHoveredItem(null)}
                        onFocus={() => setHoveredItem('pava')}
                        onBlur={() => setHoveredItem(null)}
                        onKeyDown={(event) => handleTimelineItemKeyDown('pava', event)}
                    >
                        <img alt="Hopkins Pava Center" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHopkinsPavaCenter} />
                    </motion.div>

                    {/* ALL HOVER DESCRIPTIONS - At the end to ensure they're always on top */}

                    {/* Hover Description - BHLTH */}
                    <div
                        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'bhlth' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                        style={{ left: 2468, top: 325, maxWidth: 600, zIndex: 9999 }}
                    >
                        <p className="text-[20px]">Bachelor of Health Science at ANU, grounding me in population health and equity.</p>
                    </div>

                    {/* Hover Description - National Internships */}
                    <div
                        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'internships' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                        style={{ left: 1505, top: 555, maxWidth: 700, zIndex: 9999 }}
                    >
                        <p className="text-[20px]">Parliamentary policy internship translating complex evidence into post COVID recovery recommendations.</p>
                    </div>

                    {/* Hover Description - 180 Degrees Consulting */}
                    <div
                        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'consulting' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                        style={{ left: 2341 - 100, top: 555, maxWidth: 650, zIndex: 9999 }}
                    >
                        <p className="text-[20px]">Financial strategy advisory for a large education nonprofit, strengthening my analytical and client skills.</p>
                    </div>

                    {/* Hover Description - MD */}
                    <div
                        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'md' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                        style={{ left: 2481, top: 496, maxWidth: 600, zIndex: 9999 }}
                    >
                        <p className="text-[20px]">Macquarie University MD training, building my clinical foundations for work with underserved communities.</p>
                    </div>

                    {/* Hover Description - M.S */}
                    <div
                        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'ms' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                        style={{ left: 2481, top: 1287, maxWidth: 650, zIndex: 9999 }}
                    >
                        <p className="text-[20px]">Community Health and Prevention Research at Stanford, focusing on precision medicine and health equity.</p>
                    </div>

                    {/* Hover Description - Stanford Biodesign */}
                    <div
                        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'biodesign' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                        style={{ left: 1800, top: 1607, maxWidth: 750, zIndex: 9999 }}
                    >
                        <p className="text-[20px]">Completed the application-only Stanford Biodesign for Digital Health program, applying its needs-driven method with ENT surgeons, hospital teams, children, and parents to develop PainGone PainGuin.</p>
                    </div>

                    {/* Hover Description - Stanford Seed */}
                    <div
                        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'seed' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                        style={{ left: 2499 - 150, top: 1607, maxWidth: 750, zIndex: 9999 }}
                    >
                        <p className="text-[20px]">Stanford Seed internship in Nigeria, advising go to market strategy and product management for a dialysis medical device.</p>
                    </div>

                    {/* Hover Description - Harvard */}
                    <div
                        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'harvard' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                        style={{ left: 1947, top: 1545, maxWidth: 700, zIndex: 9999 }}
                    >
                        <p className="text-[20px]">Harvard Venture Building Program, a four week course taught by VCs and Harvard Business School and Harvard T H Chan faculty.</p>
                    </div>

                    {/* Hover Description - HSIL */}
                    <div
                        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'hsil' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                        style={{ left: 1825, top: 1727, maxWidth: 800, zIndex: 9999 }}
                    >
                        <p className="text-[20px]">Ten week HSIL competition where our team placed 7th of 3,500 after four national and international rounds, leading to invitation into the Venture Building Program.</p>
                    </div>

                    {/* Hover Description - Hopkins */}
                    <div
                        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'hopkins' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                        style={{ left: 1945, top: 2026, maxWidth: 650, zIndex: 9999 }}
                    >
                        <p className="text-[20px]">Programming with Johns Hopkins University across its venture and entrepreneurship initiatives.</p>
                    </div>

                    {/* Hover Description - Pava Center */}
                    <div
                        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'pava' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                        style={{ left: 2108, top: 2165, maxWidth: 650, zIndex: 9999 }}
                    >
                        <p className="text-[20px]">Entrepreneurship training at the Pava Center, refining venture design for impactful health startups.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
