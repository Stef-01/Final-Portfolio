import { motion, useScroll, useSpring } from "motion/react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

/**
 * Reading-progress hairline pinned to the top of the viewport. Driven by page
 * scroll through a spring so the bar glides instead of ticking. Rendered on
 * long case-study pages only; hidden under reduced motion.
 */
export function ScrollProgressBar({ color = "#111111" }: { color?: string }) {
    const prefersReducedMotion = usePrefersReducedMotion();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    if (prefersReducedMotion) return null;

    return (
        <motion.div
            aria-hidden="true"
            className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left"
            style={{ scaleX, backgroundColor: color }}
        />
    );
}
