import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { EASE_OUT, SPRING_SOFT } from "../motion/tokens";
import { usePageMeta } from "../hooks/usePageMeta";

export const NotFound = (): JSX.Element => {
    // noindex: the SPA rewrite answers every path with a 200, so unknown URLs
    // would otherwise be crawled as soft-404 duplicates of the app shell.
    usePageMeta({ title: "Page not found", noindex: true });

    return (
        <main className="min-h-[100svh] bg-white px-4 py-10">
            <div className="mx-auto flex min-h-[80svh] max-w-xl flex-col items-center justify-center rounded-2xl bg-[#fafafa] p-8 text-center">
                <motion.p
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1, transition: SPRING_SOFT }}
                    className="select-none text-7xl font-bold tracking-tight text-black/10 md:text-8xl"
                    aria-hidden="true"
                >
                    404
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.1, ease: EASE_OUT }}
                    className="mt-4 text-3xl font-bold tracking-tight text-black md:text-5xl"
                >
                    This page doesn't exist.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
                    className="mt-4 text-base leading-relaxed text-gray-600"
                >
                    The link may be out of date, or the URL may have a typo.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT }}
                >
                    <Link
                        to="/"
                        className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
                    >
                        Return home
                    </Link>
                </motion.div>
            </div>
        </main>
    );
};
