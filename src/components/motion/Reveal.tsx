import React from "react";
import { motion, type Variants } from "motion/react";
import {
    DURATION,
    EASE_OUT,
    VIEWPORT_MARGIN,
    revealItemVariants,
} from "../../motion/tokens";

interface RevealProps {
    children: React.ReactNode;
    /** Extra delay before the reveal starts, in seconds. */
    delay?: number;
    /** Vertical travel in px. */
    y?: number;
    duration?: number;
    className?: string;
    /** Render element. Defaults to div. */
    as?: "div" | "section" | "span" | "h2" | "h3" | "p";
    /** Animate on mount instead of when scrolled into view. */
    onMount?: boolean;
}

/**
 * Standard fade-and-rise reveal. Replaces the inline
 * `initial/whileInView/viewport/transition` boilerplate repeated across
 * sections so every reveal shares the same curve and margins.
 */
export function Reveal({
    children,
    delay = 0,
    y = 24,
    duration = DURATION.base,
    className,
    as = "div",
    onMount = false,
}: RevealProps) {
    const Tag = motion[as];
    const visible = {
        opacity: 1,
        y: 0,
        transition: { duration, delay, ease: EASE_OUT },
    };
    return (
        <Tag
            initial={{ opacity: 0, y }}
            {...(onMount
                ? { animate: visible }
                : {
                      whileInView: visible,
                      viewport: { once: true, margin: VIEWPORT_MARGIN },
                  })}
            className={className}
        >
            {children}
        </Tag>
    );
}

interface RevealGroupProps {
    children: React.ReactNode;
    /** Gap between each child's start, in seconds. */
    stagger?: number;
    delay?: number;
    className?: string;
    onMount?: boolean;
}

const groupVariants = (stagger: number, delay: number): Variants => ({
    hidden: {},
    visible: {
        transition: { staggerChildren: stagger, delayChildren: delay },
    },
});

/**
 * Parent-driven stagger: children opt in with `<RevealItem>` (or any motion
 * element using `revealItemVariants`). Prefer this over per-item computed
 * delays — the stagger stays consistent when items are added or removed.
 */
export function RevealGroup({
    children,
    stagger = 0.08,
    delay = 0,
    className,
    onMount = false,
}: RevealGroupProps) {
    return (
        <motion.div
            variants={groupVariants(stagger, delay)}
            initial="hidden"
            {...(onMount
                ? { animate: "visible" }
                : {
                      whileInView: "visible",
                      viewport: { once: true, margin: VIEWPORT_MARGIN },
                  })}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface RevealItemProps {
    children: React.ReactNode;
    y?: number;
    duration?: number;
    className?: string;
    as?: "div" | "span" | "h1" | "h2" | "h3" | "p" | "li";
}

export function RevealItem({
    children,
    y = 24,
    duration = DURATION.base,
    className,
    as = "div",
}: RevealItemProps) {
    const Tag = motion[as];
    return (
        <Tag variants={revealItemVariants(y, duration)} className={className}>
            {children}
        </Tag>
    );
}
