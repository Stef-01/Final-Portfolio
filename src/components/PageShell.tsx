import React from "react";
import { motion } from "motion/react";
import { ContactSection } from "./ContactSection";
import { SiteHeader } from "./SiteHeader";
import { RevealText } from "./RevealText";
import { EASE_OUT } from "../lib/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface PageShellProps {
    children: React.ReactNode;
}

/** Paper background, shared header, and footer around an inner page. */
export function PageShell({ children }: PageShellProps) {
    return (
        <div className="min-h-[100svh] bg-paper text-gray-900">
            <div className="px-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:px-5 md:pt-4">
                <SiteHeader mobileNav />
            </div>
            {children}
            <ContactSection />
        </div>
    );
}

interface PageIntroProps {
    title: React.ReactNode;
    description?: React.ReactNode;
    stats?: Array<{ value: React.ReactNode; label: string }>;
    children?: React.ReactNode;
}

/** Title, one-line description, and an optional row of figures. The title
 *  rises word by word; the rest follows in a short stagger. */
export function PageIntro({ title, description, stats, children }: PageIntroProps) {
    const prefersReducedMotion = usePrefersReducedMotion();
    const rise = (delay: number) => ({
        initial: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay, ease: EASE_OUT },
    });

    return (
        <div className="px-4 pt-14 md:px-8 md:pt-24">
            <div className="mx-auto max-w-6xl">
                <h1 className="max-w-4xl text-balance t-h1 font-bold leading-[1] tracking-[-0.035em] text-gray-900">
                    {typeof title === "string" ? <RevealText text={title} onMount delay={0.05} /> : title}
                </h1>
                {description && (
                    <motion.p
                        {...rise(0.3)}
                        className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg"
                    >
                        {description}
                    </motion.p>
                )}
                {stats && stats.length > 0 && (
                    <motion.dl {...rise(0.38)} className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex items-baseline gap-2">
                                <dt className="sr-only">{stat.label}</dt>
                                <dd className="text-lg font-semibold text-gray-900">{stat.value}</dd>
                                <span aria-hidden="true" className="text-sm text-gray-500">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.dl>
                )}
                {children && <motion.div {...rise(0.44)}>{children}</motion.div>}
            </div>
        </div>
    );
}
