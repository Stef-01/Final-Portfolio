import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import { projects } from "../types/project";
import { Button } from "../components/Button";
import { ContactSection } from "../components/ContactSection";
import { NotFound } from "../components/NotFound";
import { ImageWithFallback } from "../components/ImageWithFallback";

// Inner component is keyed by `id` from the wrapper below, so its state
// resets cleanly on URL change without a setState-in-effect anti-pattern.
const ProjectDetailInner = ({ id }: { id: string | undefined }): JSX.Element => {
    const project = projects.find((p) => p.id === id);
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
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 pt-[env(safe-area-inset-top)] md:px-8">
                    <Link to="/" className="text-sm sm:text-xl font-bold tracking-tight text-black">
                        Stefan Thottunkal
                    </Link>
                    <Link to="/">
                        <Button type="secondary" label="Back to Home" className="w-auto min-w-[140px]" />
                    </Link>
                </div>
            </nav>

            <main className="mx-auto max-w-7xl px-4 pb-20 pt-28 md:px-8 md:pt-32">
                <div className="relative overflow-hidden rounded-[36px] border border-black/5 bg-[#fafafa] p-6 md:p-10">
                    <div
                        className="pointer-events-none absolute inset-0 opacity-20"
                        style={{
                            background: `radial-gradient(circle at 12% 18%, ${project.accent}44 0%, transparent 28%), radial-gradient(circle at 88% 18%, ${project.accent}22 0%, transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.95) 100%)`,
                        }}
                    />
                    <div className="relative z-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                        <div>
                            <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-gray-400 transition-colors hover:text-black">
                                <ArrowLeft className="h-4 w-4" />
                                Back
                            </Link>
                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="max-w-4xl text-4xl font-bold leading-[0.95] tracking-tight text-black md:text-7xl">
                                {project.title}
                            </h1>
                            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-2xl">
                                {project.subtitle}
                            </p>
                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
                                {project.description}
                            </p>
                        </div>

                        <div className="grid gap-4 rounded-[28px] border border-black/8 bg-white/85 p-5 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.45)]">
                            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gray-400">
                                Project Profile
                            </p>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Role</p>
                                    <p className="mt-2 text-sm font-medium leading-relaxed text-black">{project.role}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Duration</p>
                                    <p className="mt-2 text-sm font-medium leading-relaxed text-black">{project.duration}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Context</p>
                                    <p className="mt-2 text-sm font-medium leading-relaxed text-black">{project.client}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Outcome</p>
                                    <p className="mt-2 text-sm font-medium leading-relaxed text-black">{project.outcome}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {project.stats.map((stat) => (
                        <div key={stat.label} className="rounded-[28px] border border-black/8 bg-white p-5 shadow-[0_18px_45px_-38px_rgba(0,0,0,0.5)]">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">{stat.label}</p>
                            <p className="mt-3 text-lg font-semibold leading-snug text-black">{stat.value}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-14 overflow-hidden rounded-[34px] border border-black/8 bg-black shadow-2xl">
                    <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        fallbackInitial={project.title.charAt(0)}
                        accent={project.accent}
                        wrapperClassName="h-[280px] w-full md:h-[620px]"
                        className="h-[280px] w-full object-cover opacity-90 md:h-[620px]"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        sizes="100vw"
                    />
                </div>

                <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-[32px] border border-black/8 bg-[#fafafa] p-6 md:p-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-400">Core Themes</p>
                        <div className="mt-6 grid gap-5">
                            {project.highlights.map((highlight) => (
                                <div key={highlight.title} className="rounded-[24px] bg-white p-5 shadow-[0_18px_45px_-38px_rgba(0,0,0,0.5)]">
                                    <h3 className="text-xl font-semibold tracking-tight text-black">{highlight.title}</h3>
                                    <p className="mt-3 text-base leading-relaxed text-gray-600">{highlight.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[32px] border border-black/8 bg-white p-6 md:p-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-400">Tooling and Practice</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.tools.map((tool) => (
                                <span key={tool} className="rounded-full border border-black/10 bg-[#f6f6f6] px-3 py-2 text-sm font-medium text-gray-700">
                                    {tool}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 space-y-8">
                            {project.sections.map((section) => (
                                <div key={section.title}>
                                    <h2 className="text-2xl font-semibold tracking-tight text-black md:text-3xl">{section.title}</h2>
                                    <div className="mt-4 space-y-4">
                                        {section.body.map((paragraph) => (
                                            <p key={paragraph} className="text-base leading-relaxed text-gray-600 md:text-lg">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mt-16">
                    <div className="mb-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-400">Media Direction</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black md:text-4xl">
                            Visual material the panel can carry with confidence
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {project.media.map((item) => (
                            <figure key={item.caption} className="overflow-hidden rounded-[30px] border border-black/8 bg-white shadow-[0_24px_60px_-40px_rgba(0,0,0,0.45)]">
                                <div className="aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
                                    <ImageWithFallback
                                        src={item.src}
                                        alt={item.alt}
                                        fallbackInitial={project.title.charAt(0)}
                                        accent={project.accent}
                                        wrapperClassName="h-full w-full"
                                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
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

                {project.interactiveModules && project.interactiveModules.length > 0 && (
                <section className="mt-16 overflow-hidden rounded-[36px] border border-black/8 bg-[#0f1115] p-6 text-white md:p-8">
                    <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">Interactive Concept Lab</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                                Creative interaction systems that fit this case study
                            </h2>
                            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                                These modules are not yet built as final project panels, but they define the kind of digital behavior, aesthetic motion, and narrative interaction that would make the case study feel premium inside the current portfolio system.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {project.interactiveModules.map((module, index) => (
                                    <button
                                        key={module.title}
                                        type="button"
                                        onClick={() => setActiveModuleIndex(index)}
                                        className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${index === activeModuleIndex
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
                            <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/45">
                                    <Sparkles className="h-4 w-4" />
                                    Active concept
                                </div>
                                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                                    {activeModule.title}
                                </h3>
                                <p className="mt-4 text-base leading-relaxed text-white/75">
                                    {activeModule.summary}
                                </p>

                                <div className="mt-8 grid gap-4 md:grid-cols-2">
                                    <div className="rounded-[24px] bg-white/6 p-5">
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Interaction</p>
                                        <p className="mt-3 text-base leading-relaxed text-white/80">{activeModule.interaction}</p>
                                    </div>
                                    <div className="rounded-[24px] bg-white/6 p-5">
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Motion and effects</p>
                                        <p className="mt-3 text-base leading-relaxed text-white/80">{activeModule.effect}</p>
                                    </div>
                                </div>

                                <div className="mt-8 rounded-[26px] border border-white/8 bg-gradient-to-br from-white/8 to-white/4 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Why this matters</p>
                                    <p className="mt-3 text-base leading-relaxed text-white/75">
                                        The strongest panels in this portfolio should not just describe work. They should demonstrate how the underlying system thinks, moves, and reveals complexity. This interaction concept is designed to do exactly that.
                                    </p>
                                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                                        Explore this concept direction
                                        <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                )}
            </main>

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
