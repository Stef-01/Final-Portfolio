import React from "react";
import { motion } from "motion/react";
import { ContactSection } from "./ContactSection";
import { SiteHeader } from "./SiteHeader";
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

/** Title, one-line description, and an optional row of figures. */
export function PageIntro({ title, description, stats, children }: PageIntroProps) {
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <div className="px-4 pt-14 md:px-8 md:pt-24">
            <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-6xl"
            >
                <h1 className="max-w-4xl text-balance t-h1 font-bold leading-[1] tracking-[-0.035em] text-gray-900">
                    {title}
                </h1>
                {description && (
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                        {description}
                    </p>
                )}
                {stats && stats.length > 0 && (
                    <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex items-baseline gap-2">
                                <dt className="sr-only">{stat.label}</dt>
                                <dd className="text-lg font-semibold text-gray-900">{stat.value}</dd>
                                <span aria-hidden="true" className="text-sm text-gray-500">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </dl>
                )}
                {children}
            </motion.div>
        </div>
    );
}
