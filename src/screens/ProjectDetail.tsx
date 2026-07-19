import React, { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
    AnimatePresence,
    motion,
    useInView,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import { ExternalLink } from "lucide-react";
import { projects } from "../types/project";
import { Button } from "../components/Button";
import { ContactSection } from "../components/ContactSection";
import { NotFound } from "../components/NotFound";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { ProjectPopout } from "../components/ProjectPopout";
import { ProcessFlow } from "../components/ProcessFlow";
import { SectionAccordion } from "../components/SectionAccordion";
import { ScrollProgressBar } from "../components/motion/ScrollProgressBar";
import { RevealGroup, RevealItem } from "../components/motion/Reveal";
import { DURATION, EASE_OUT } from "../motion/tokens";
import { useGoBack } from "../hooks/useGoBack";
import { usePageTitle } from "../hooks/usePageTitle";

/**
 * Case-study top bar that steps out of the way while reading: hides on
 * scroll-down past the header zone, returns on any scroll-up. The transform
 * is disabled under reduced motion via MotionConfig, leaving the nav pinned.
 */
const HideOnScrollNav = ({ children }: { children: React.ReactNode }) => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 220) {
            setHidden(true);
        } else if (latest < previous) {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            animate={{ y: hidden ? "-100%" : "0%" }}
            transition={{ duration: 0.32, ease: EASE_OUT }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white"
        >
            {children}
        </motion.nav>
    );
};

// Inner component is keyed by `id` from the wrapper below, so its state
// resets cleanly on URL change without a setState-in-effect anti-pattern.
const ProjectDetailInner = ({ id }: { id: string | undefined }): JSX.Element => {
    const project = projects.find((p) => p.id === id);
    const goBack = useGoBack();
    usePageTitle(project?.title);

    // The compact title docks into the nav once the header card scrolls out.
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { margin: "-96px 0px 0px 0px" });

    if (!project) {
        return <NotFound />;
    }

    return (
        <div className="bg-white min-h-[100svh]">
            <ScrollProgressBar color={project.accent} />
            <HideOnScrollNav>
                <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 pt-[env(safe-area-inset-top)] md:px-8">
                    <Link to="/" className="text-sm sm:text-xl font-bold tracking-tight text-black">
                        Stefan Thottunkal
                    </Link>
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[38%] -translate-x-1/2 items-center justify-center overflow-hidden md:flex"
                    >
                        <AnimatePresence>
                            {!headerInView && (
                                <motion.span
                                    initial={{ y: 18, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -18, opacity: 0 }}
                                    transition={{ duration: 0.28, ease: EASE_OUT }}
                                    className="truncate text-sm font-semibold text-gray-600"
                                >
                                    {project.title}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>
                    <Button type="secondary" label="Back" className="w-auto min-w-[140px]" onClick={goBack} />
                </div>
            </HideOnScrollNav>

            <main className="mx-auto max-w-7xl px-4 pb-20 pt-28 md:px-8 md:pt-32">
                <div ref={headerRef} className="rounded-2xl bg-[#fafafa] p-6 md:p-10">
                    <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                        <RevealGroup onMount stagger={0.09}>
                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <RevealItem
                                        key={tag}
                                        as="span"
                                        y={12}
                                        duration={DURATION.fast}
                                        className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm font-medium text-gray-500"
                                    >
                                        {tag}
                                    </RevealItem>
                                ))}
                            </div>
                            <RevealItem as="h1" y={26} className="max-w-4xl t-h1 font-bold leading-[1.02] tracking-tight text-black">
                                {project.title}
                            </RevealItem>
                            <RevealItem as="p" y={20} className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-2xl">
                                {project.subtitle}
                            </RevealItem>
                            <RevealItem as="p" y={16} className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
                                {project.description}
                            </RevealItem>
                        </RevealGroup>

                        <div className="grid gap-4">
                            <p className="text-sm font-medium text-gray-500">
                                Scope
                            </p>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Role</p>
                                    <p className="mt-2 text-sm font-medium leading-relaxed text-black">{project.role}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Duration</p>
                                    <p className="mt-2 text-sm font-medium leading-relaxed text-black">{project.duration}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Context</p>
                                    <p className="mt-2 text-sm font-medium leading-relaxed text-black">{project.client}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Outcome</p>
                                    <p className="mt-2 text-sm font-medium leading-relaxed text-black">{project.outcome}</p>
                                </div>
                            </div>
                            {project.links && project.links.length > 0 && (
                                <div className="flex flex-wrap gap-2 border-t border-black/10 pt-4">
                                    {project.links.map((link) => (
                                        <a
                                            key={link.url}
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                                        >
                                            {link.label}
                                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <RevealGroup stagger={0.07} className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
                    {project.stats.map((stat) => (
                        <RevealItem key={stat.label} y={14} duration={DURATION.fast}>
                            <p className="text-lg font-semibold text-black">{stat.value}</p>
                            <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                        </RevealItem>
                    ))}
                </RevealGroup>

                {project.caseStudy && (
                    <section className="mt-10 rounded-2xl bg-[#fafafa] p-6 md:p-10">
                        <h2 className="max-w-4xl t-h2 font-bold leading-tight tracking-tight text-black">
                            {project.caseStudy.question}
                        </h2>
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
                            {project.caseStudy.framing}
                        </p>
                    </section>
                )}

                <div className="mt-14 overflow-hidden rounded-2xl bg-black">
                    <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        fallbackInitial={project.title.charAt(0)}
                        accent={project.accent}
                        wrapperClassName={project.heroAspect === "16/9" ? "aspect-video w-full" : project.heroAspect === "8/5" ? "aspect-[8/5] w-full" : "h-[280px] w-full md:h-[620px]"}
                        className={`${project.heroAspect === "16/9" ? "aspect-video" : project.heroAspect === "8/5" ? "aspect-[8/5]" : "h-[280px] md:h-[620px]"} w-full ${project.heroFit === "contain" ? "object-contain opacity-100" : "object-cover opacity-90"}`}
                        loading="eager"
                        decoding="async"
                        sizes="100vw"
                    />
                </div>

                {project.video && (
                    <section className="mt-16 overflow-hidden rounded-2xl bg-[#0f1115]">
                        <div className="grid gap-0 xl:grid-cols-[0.28fr_0.72fr]">
                            <div className="flex flex-col justify-between p-6 text-white md:p-8">
                                <div>
                                    <p className="text-sm font-medium text-white/60">
                                        Full demo
                                    </p>
                                    <h2 className="mt-3 t-h2 font-bold tracking-tight">
                                        {project.video.title}
                                    </h2>
                                    <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                                        {project.video.caption}
                                    </p>
                                </div>
                                <a
                                    href={project.video.src}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1115]"
                                >
                                    Open video file
                                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                </a>
                            </div>
                            <div className="bg-black">
                                <video
                                    className="aspect-video h-full w-full bg-black object-contain"
                                    controls
                                    playsInline
                                    preload="metadata"
                                    poster={project.video.poster}
                                    aria-label={project.video.title}
                                >
                                    <source src={project.video.src} type="video/mp4" />
                                    Your browser does not support embedded video. Use the open-video link to view the demo.
                                </video>
                            </div>
                        </div>
                    </section>
                )}

                <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="self-start rounded-2xl bg-[#fafafa] p-6 md:p-8 lg:sticky lg:top-28">
                        <div className="grid gap-6">
                            {project.highlights.map((highlight) => (
                                <div key={highlight.title}>
                                    <h3 className="text-xl font-bold tracking-tight text-black md:text-2xl">{highlight.title}</h3>
                                    <p className="mt-3 text-base leading-relaxed text-gray-600">{highlight.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2 border-t border-black/5 pt-6">
                            {project.tools.map((tool) => (
                                <span key={tool} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-gray-600">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl bg-[#fafafa] p-6 md:p-8">
                        <SectionAccordion
                            sections={project.sections}
                            fallbackInitial={project.title.charAt(0)}
                        />
                    </div>
                </section>

                {project.caseStudy && (
                    <section className="mt-16 rounded-2xl bg-[#fafafa] p-6 md:p-8">
                        <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
                            <div className="self-start lg:sticky lg:top-28">
                                <h2 className="t-h2 font-bold tracking-tight text-black">
                                    {project.caseStudy.processHeading}
                                </h2>
                                <p className="mt-5 text-base leading-relaxed text-gray-600">
                                    {project.caseStudy.processSummary}
                                </p>
                            </div>

                            <ProcessFlow steps={project.caseStudy.steps} accent={project.accent} />
                        </div>
                    </section>
                )}

                {project.media.length > 0 && (
                <section className="mt-16">
                    <div className="mb-8">
                        {project.mediaEyebrow && (
                            <p className="text-sm font-medium text-gray-500">
                                {project.mediaEyebrow}
                            </p>
                        )}
                        <h2 className="mt-3 t-h2 font-bold tracking-tight text-black">
                            {project.mediaHeading ?? "Gallery"}
                        </h2>
                    </div>

                    <div className={`grid gap-6 md:grid-cols-2 ${project.mediaLayout === "editorial" ? "" : "xl:grid-cols-3"}`}>
                        {project.media.map((item) => (
                            <figure key={item.caption} className="overflow-hidden rounded-2xl bg-[#fafafa]">
                                <div className={`${item.aspect === "16/9" ? "aspect-video" : item.aspect === "8/5" ? "aspect-[8/5]" : item.aspect === "9/16" ? "aspect-[9/16]" : "aspect-[4/3]"} overflow-hidden bg-[#f5f5f5]`}>
                                    <ImageWithFallback
                                        src={item.src}
                                        alt={item.alt}
                                        fallbackInitial={project.title.charAt(0)}
                                        accent={project.accent}
                                        wrapperClassName="h-full w-full"
                                        className={`h-full w-full transition-transform duration-700 ${item.fit === "contain" ? "object-contain" : "object-cover hover:scale-105"}`}
                                        loading="lazy"
                                        decoding="async"
                                        sizes="(max-width: 768px) 92vw, (max-width: 1280px) 46vw, 30vw"
                                    />
                                </div>
                                <figcaption className="p-5">
                                    <p className="text-base leading-relaxed text-gray-600">{item.caption}</p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </section>
                )}

            </main>

            {project.popout && (
                <ProjectPopout
                    title={project.title}
                    eyebrow={project.popout.eyebrow}
                    heading={project.popout.heading}
                    description={project.popout.description}
                    ctaLabel={project.popout.ctaLabel}
                    collapsedLabel={project.popout.collapsedLabel}
                    accessibleLabel={project.popout.accessibleLabel}
                    url={project.popout.url}
                    image={project.media[1]?.src ?? project.image}
                    accent={project.accent}
                />
            )}

            <ContactSection />
        </div>
    );
};

export const ProjectDetail = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    // Keying by `id` remounts the inner component on URL change so its
    // internal state (active module, scroll offset) resets cleanly.
    return <ProjectDetailInner key={id ?? "_"} id={id} />;
};
