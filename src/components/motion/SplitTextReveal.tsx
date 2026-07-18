import React, { useMemo } from "react";
import { motion, type Variants } from "motion/react";
import { EASE_OUT, VIEWPORT_MARGIN } from "../../motion/tokens";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface SplitTextRevealProps {
    text: string;
    /** Element rendered as the accessible container. */
    as?: "h1" | "h2" | "h3" | "p" | "span";
    className?: string;
    /** Delay before the first word starts, in seconds. */
    delay?: number;
    /** Gap between word starts, in seconds. */
    stagger?: number;
    /** Per-word rise duration, in seconds. */
    duration?: number;
}

/**
 * Masked word-stagger reveal: each word rises out of its own overflow-clipped
 * span. The whileInView observer lives on the (always visible) container, not
 * the translated words — a word offset 115% inside a clipping parent has an
 * empty intersection with the viewport and would never trigger. Words receive
 * "visible" through variant propagation with a stagger.
 *
 * The container keeps the full sentence as its accessible name and the word
 * spans are aria-hidden, so screen readers hear one uninterrupted sentence.
 * Renders plain static text under reduced motion.
 */
export function SplitTextReveal({
    text,
    as = "h2",
    className,
    delay = 0,
    stagger = 0.045,
    duration = 0.7,
}: SplitTextRevealProps) {
    const prefersReducedMotion = usePrefersReducedMotion();
    const words = useMemo(() => text.split(" "), [text]);
    const Tag = as;

    const wordVariants: Variants = useMemo(
        () => ({
            hidden: { y: "115%" },
            visible: {
                y: 0,
                transition: { duration, ease: EASE_OUT },
            },
        }),
        [duration],
    );

    if (prefersReducedMotion) {
        return <Tag className={className}>{text}</Tag>;
    }

    return (
        <Tag className={className} aria-label={text}>
            <motion.span
                aria-hidden="true"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: VIEWPORT_MARGIN }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: stagger,
                            delayChildren: delay,
                        },
                    },
                }}
            >
                {words.map((word, index) => (
                    <React.Fragment key={`${word}-${index}`}>
                        <span className="inline-block overflow-clip pb-[0.12em] -mb-[0.12em] align-baseline">
                            <motion.span
                                className="inline-block will-change-transform"
                                variants={wordVariants}
                            >
                                {word}
                            </motion.span>
                        </span>
                        {index < words.length - 1 ? " " : ""}
                    </React.Fragment>
                ))}
            </motion.span>
        </Tag>
    );
}
