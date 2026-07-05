import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { projects } from "../types/project";
import { Button } from "../components/Button";
import { ContactSection } from "../components/ContactSection";
import { NotFound } from "../components/NotFound";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { ProjectPopout } from "../components/ProjectPopout";
import { useGoBack } from "../hooks/useGoBack";

// Inner component is keyed by `id` from the wrapper below, so its state
// resets cleanly on URL change without a setState-in-effect anti-pattern.
const ProjectDetailInner = ({ id }: { id: string | undefined }): JSX.Element => {
    const project = projects.find((p) => p.id === id);
    const goBack = useGoBack();
    const [activeModuleIndex, setActiveModuleIndex] = useState(0);

    const activeModule = useMemo(() => {
        if (!project) {
            return null;
        }

        return project.interactiveModules[activeModuleIndex] ?? project.interactiveModules[0];
    }, [activeModuleIndex, project]);

    if (!project) {
        return <NotFound />;
    }

    return (
        <div className="bg-white min-h-[100svh]">
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 pt-[env(safe-area-inset-top)] md:px-8">
                    <Link to="/" className="text-sm sm:text-xl font-bold tracking-tight text-black">
                        Stefan Thottunkal
                    </Link>
                    <Button type="secondary" label="Back" className="w-auto min-w-[140px]" onClick={goBack} />
                </div>
            </nav>

            <main className="mx-auto max-w-7xl px-4 pb-20 pt-28 md:px-8 md:pt-32">
                <div className="rounded-2xl bg-[#fafafa] p-6 md:p-10">
                    <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                        <div>
                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm font-medium text-gray-500"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="max-w-4xl t-h1 font-bold leading-[1.02] tracking-tight text-black">
                                {project.title}
                            </h1>
                            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-2xl">
                                {project.subtitle}
                            </p>
                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
                                {project.description}
                            </p>
                        </div>

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

                <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
                    {project.stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-lg font-semibold text-black">{stat.value}</p>
                            <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {project.caseStudy && (
                    <section className="mt-10 grid gap-6 rounded-2xl bg-[#fafafa] p-6 md:grid-cols-[0.34fr_0.66fr] md:p-8">
                        <p className="text-sm font-medium text-gray-500">Design question</p>
                        <div>
                            <h2 className="t-h2 font-bold leading-tight tracking-tight text-black">
                                {project.caseStudy.question}
                            </h2>
                            <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
                                {project.caseStudy.framing}
                            </p>
                        </div>
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
                        <p className="text-sm font-medium text-gray-500">Strategic priorities</p>
                        <div className="mt-6 grid gap-6">
                            {project.highlights.map((highlight) => (
                                <div key={highlight.title}>
                                    <h3 className="text-xl font-bold tracking-tight text-black md:text-2xl">{highlight.title}</h3>
                                    <p className="mt-3 text-base leading-relaxed text-gray-600">{highlight.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl bg-[#fafafa] p-6 md:p-8">
                        <p className="text-sm font-medium text-gray-500">Methods and tools</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.tools.map((tool) => (
                                <span key={tool} className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-medium text-gray-700">
                                    {tool}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 space-y-8">
                            {project.sections.map((section) => (
                                <div key={section.title}>
                                    <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl">{section.title}</h2>
                                    <div className="mt-4 space-y-4">
                                        {section.body.map((paragraph) => (
                                            <p key={paragraph} className="text-base leading-relaxed text-gray-600 md:text-lg">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                    {section.media && (
                                        <figure className="mt-6 overflow-hidden rounded-2xl bg-[#f5f3ef]">
                                            <div className={`${section.media.aspect === "16/9" ? "aspect-video" : section.media.aspect === "8/5" ? "aspect-[8/5]" : section.media.aspect === "9/16" ? "aspect-[9/16]" : "aspect-[4/3]"} overflow-hidden`}>
                                                <ImageWithFallback
                                                    src={section.media.src}
                                                    alt={section.media.alt}
                                                    fallbackInitial={project.title.charAt(0)}
                                                    accent={project.accent}
                                                    wrapperClassName="h-full w-full"
                                                    className={`h-full w-full ${section.media.fit === "contain" ? "object-contain" : "object-cover"}`}
                                                    loading="lazy"
                                                    decoding="async"
                                                    sizes="(max-width: 1024px) 92vw, 54vw"
                                                />
                                            </div>
                                            <figcaption className="border-t border-black/5 bg-white px-5 py-4 text-sm leading-relaxed text-gray-600">
                                                {section.media.caption}
                                            </figcaption>
                                        </figure>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {project.caseStudy && (
                    <section className="mt-16 rounded-2xl bg-[#fafafa] p-6 md:p-8">
                        <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
                            <div className="self-start lg:sticky lg:top-28">
                                <p className="text-sm font-medium text-gray-500">
                                    {project.caseStudy.processEyebrow}
                                </p>
                                <h2 className="mt-3 t-h2 font-bold tracking-tight text-black">
                                    {project.caseStudy.processHeading}
                                </h2>
                                <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
                                    {project.caseStudy.processSummary}
                                </p>
                            </div>

                            <ol className="grid gap-10">
                                {project.caseStudy.steps.map((step, index) => (
                                    <li key={`${step.phase}-${step.title}`} className="grid gap-5 md:grid-cols-[72px_1fr]">
                                        <div>
                                            <span className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: project.accent }}>
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">
                                                {step.phase}
                                            </p>
                                            <h3 className="mt-2 text-xl font-bold tracking-tight text-black md:text-2xl">{step.title}</h3>
                                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-500">Design rationale</p>
                                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">{step.rationale}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-500">Execution evidence</p>
                                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">{step.execution}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ol>
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
                            {project.mediaHeading ?? "Design evidence"}
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

                {project.interactiveModules && project.interactiveModules.length > 0 && (
                <section className="mt-16 overflow-hidden rounded-2xl bg-[#0f1115] p-6 text-white md:p-8">
                    <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
                        <div>
                            {project.interactiveEyebrow && (
                                <p className="text-sm font-medium text-white/60">
                                    {project.interactiveEyebrow}
                                </p>
                            )}
                            <h2 className="mt-3 t-h2 font-bold tracking-tight">
                                {project.interactiveHeading ?? "Product architecture"}
                            </h2>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {project.interactiveModules.map((module, index) => (
                                    <button
                                        key={module.title}
                                        type="button"
                                        onClick={() => setActiveModuleIndex(index)}
                                        aria-pressed={index === activeModuleIndex}
                                        className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${index === activeModuleIndex
                                            ? "bg-white text-black"
                                            : "bg-white/8 text-white/70 hover:bg-white/14 hover:text-white"
                                            }`}
                                    >
                                        {module.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {activeModule && (
                            <div>
                                <p className="text-sm font-medium text-white/60">
                                    {project.interactiveActiveLabel ?? "Active concept"}
                                </p>
                                <h3 className="mt-4 text-xl font-bold tracking-tight text-white md:text-2xl">
                                    {activeModule.title}
                                </h3>
                                <p className="mt-4 text-base leading-relaxed text-white/75">
                                    {activeModule.summary}
                                </p>

                                <div className="mt-8 grid gap-6 md:grid-cols-2">
                                    <div>
                                        <p className="text-sm font-medium text-white/60">
                                            {project.interactivePrimaryLabel ?? "Interaction"}
                                        </p>
                                        <p className="mt-3 text-base leading-relaxed text-white/80">{activeModule.interaction}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white/60">
                                            {project.interactiveSecondaryLabel ?? "Motion and effects"}
                                        </p>
                                        <p className="mt-3 text-base leading-relaxed text-white/80">{activeModule.effect}</p>
                                    </div>
                                </div>
                            </div>
                        )}
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
