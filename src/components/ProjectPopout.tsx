import React, { useState } from "react";
import { ExternalLink, MousePointerClick, X } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

interface ProjectPopoutProps {
    title: string;
    eyebrow: string;
    heading: string;
    description: string;
    ctaLabel: string;
    collapsedLabel: string;
    accessibleLabel: string;
    url: string;
    image: string;
    accent: string;
}

export const ProjectPopout = ({
    title,
    eyebrow,
    heading,
    description,
    ctaLabel,
    collapsedLabel,
    accessibleLabel,
    url,
    image,
    accent,
}: ProjectPopoutProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) {
        return (
            <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[60] md:bottom-6 md:right-6">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    aria-expanded="false"
                    aria-label={`Open ${accessibleLabel}`}
                    className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black shadow-xl transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                    <span
                        className="flex h-8 w-8 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: accent }}
                    >
                        <MousePointerClick className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {collapsedLabel}
                    <ExternalLink
                        className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                        aria-hidden="true"
                    />
                </button>
            </div>
        );
    }

    return (
        <aside
            aria-label={accessibleLabel}
            data-testid="project-popout"
            className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 right-4 z-[60] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl sm:left-auto sm:w-[390px] md:bottom-6 md:right-6"
        >
            <div className="sm:grid sm:grid-cols-[108px_1fr]">
                <div className="relative hidden min-h-[174px] overflow-hidden bg-[#f3f3f3] sm:block">
                    <ImageWithFallback
                        src={image}
                        alt=""
                        fallbackInitial={title.charAt(0)}
                        wrapperClassName="h-full w-full"
                        className="h-full w-full object-cover"
                        loading="eager"
                        decoding="async"
                        sizes="108px"
                    />
                </div>

                <div className="relative p-5 pr-12">
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label={`Dismiss ${accessibleLabel}`}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-black/5 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 motion-reduce:transition-none"
                    >
                        <X className="h-4 w-4" aria-hidden="true" />
                    </button>

                    <p className="text-sm font-medium text-gray-500">
                        {eyebrow}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-black">
                        {heading}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {description}
                    </p>
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 motion-reduce:transition-none"
                        style={{ backgroundColor: accent }}
                    >
                        {ctaLabel}
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </aside>
    );
};
