import { Fragment } from "react";
import { motion } from "motion/react";
import { EASE_OUT } from "../lib/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type Segment = { text: string; className?: string };

interface RevealTextProps {
    /** Plain text, or segments when some words need their own styling. */
    text: string | Segment[];
    /** Play on mount (page titles) rather than when scrolled into view. */
    onMount?: boolean;
    delay?: number;
}

/**
 * Headline reveal: each word rises out of its own clipped line box, staggered
 * 40ms, matching the hero name. Reduced motion renders the text as-is.
 */
export function RevealText({ text, onMount = false, delay = 0 }: RevealTextProps) {
    const prefersReducedMotion = usePrefersReducedMotion();
    const segments = typeof text === "string" ? [{ text }] : text;
    const words = segments.flatMap((segment) =>
        segment.text
            .split(/\s+/)
            .filter(Boolean)
            .map((word) => ({ word, className: segment.className })),
    );

    if (prefersReducedMotion) {
        return (
            <>
                {words.map(({ word, className }, i) => (
                    <Fragment key={i}>
                        <span className={className}>{word}</span>
                        {i < words.length - 1 && " "}
                    </Fragment>
                ))}
            </>
        );
    }

    const trigger = onMount
        ? { animate: "shown" }
        : { whileInView: "shown", viewport: { once: true, margin: "-80px" } };

    return (
        <motion.span
            initial="hidden"
            {...trigger}
            transition={{ staggerChildren: 0.04, delayChildren: delay }}
        >
            {words.map(({ word, className }, i) => (
                <Fragment key={i}>
                    {/* Padding keeps italic overhangs and descenders from being
                        clipped; the matching negative margin keeps spacing. */}
                    <span className="-mx-[0.05em] -mb-[0.14em] inline-block overflow-hidden px-[0.05em] pb-[0.14em] align-bottom">
                        <motion.span
                            className={`inline-block ${className ?? ""}`}
                            variants={{
                                hidden: { y: "105%" },
                                shown: { y: 0, transition: { duration: 0.9, ease: EASE_OUT } },
                            }}
                        >
                            {word}
                        </motion.span>
                    </span>
                    {i < words.length - 1 && " "}
                </Fragment>
            ))}
        </motion.span>
    );
}
