import React, { useMemo } from "react";
import { motion, type Variants } from "motion/react";
import { EASE_OUT, VIEWPORT_MARGIN } from "../../motion/tokens";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface SplitTextRevealProps {
    text: string;
    /** Element rendered as the accessible container. */
    as?: "h1" | "h2" | "h3" | "p" | "span";
    className?: string;
    /** Delay before the first unit starts, in seconds. */
    delay?: number;
    /** Gap between unit starts, in seconds. */
    stagger?: number;
    /** Per-unit rise duration, in seconds. */
    duration?: number;
    /** Reveal per word (default) or per character (hero display type). */
    splitBy?: "word" | "char";
    /** Animate on mount instead of when scrolled into view. */
    onMount?: boolean;
}

const maskClasses =
    "inline-block overflow-clip pb-[0.12em] -mb-[0.12em] align-baseline";

/**
 * Masked text reveal: words (or characters) rise out of their own
 * overflow-clipped spans. The whileInView observer lives on the (always
 * visible) container, not the translated units — a unit offset 115% inside a
 * clipping parent has an empty intersection with the viewport and would never
 * trigger. Units receive "visible" through variant propagation with a stagger.
 *
 * Char mode wraps each word in a nowrap span so line-breaking stays at word
 * boundaries. The container keeps the full text as its accessible name and
 * the visual spans are aria-hidden, so screen readers hear one uninterrupted
 * sentence. Renders plain static text under reduced motion.
 */
export function SplitTextReveal({
    text,
    as = "h2",
    className,
    delay = 0,
    stagger = 0.045,
    duration = 0.7,
    splitBy = "word",
    onMount = false,
}: SplitTextRevealProps) {
    const prefersReducedMotion = usePrefersReducedMotion();
    const words = useMemo(() => text.split(" "), [text]);
    const Tag = as;

    const unitVariants: Variants = useMemo(
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

    const renderWord = (word: string) =>
        splitBy === "char" ? (
            <span className="inline-block whitespace-nowrap">
                {Array.from(word).map((char, charIndex) => (
                    <span key={charIndex} className={maskClasses}>
                        <motion.span
                            className="inline-block will-change-transform"
                            variants={unitVariants}
                        >
                            {char}
                        </motion.span>
                    </span>
                ))}
            </span>
        ) : (
            <span className={maskClasses}>
                <motion.span
                    className="inline-block will-change-transform"
                    variants={unitVariants}
                >
                    {word}
                </motion.span>
            </span>
        );

    return (
        <Tag className={className} aria-label={text}>
            <motion.span
                aria-hidden="true"
                initial="hidden"
                {...(onMount
                    ? { animate: "visible" }
                    : {
                          whileInView: "visible",
                          viewport: { once: true, margin: VIEWPORT_MARGIN },
                      })}
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
                        {renderWord(word)}
                        {index < words.length - 1 ? " " : ""}
                    </React.Fragment>
                ))}
            </motion.span>
        </Tag>
    );
}
