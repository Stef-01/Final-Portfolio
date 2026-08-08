import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface CountUpProps {
    /** Final value to count to. */
    to: number;
    /** Animation duration in seconds. */
    duration?: number;
    className?: string;
}

/**
 * Counts from 0 up to `to` once the element scrolls into view. Honors
 * prefers-reduced-motion (renders the final value immediately). Used to make
 * credibility stats (publications, roles, institutions) the focal moment.
 */
export function CountUp({ to, duration = 1.4, className }: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        if (prefersReducedMotion) {
            node.textContent = String(to);
            return;
        }
        if (!inView) return;
        const controls = animate(0, to, {
            duration,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (value) => {
                node.textContent = String(Math.round(value));
            },
        });
        return () => controls.stop();
    }, [inView, to, duration, prefersReducedMotion]);

    return (
        <span ref={ref} className={className}>
            {prefersReducedMotion ? to : 0}
        </span>
    );
}

interface StatValueProps {
    /** Raw stat value; counts up when it is a plain integer ("12"), renders
     *  as-is otherwise ("7th of 3,500", "1st", "ANU"). */
    value: string | number;
    className?: string;
}

/**
 * Drop-in stat renderer for the lane-page metric rows: numeric values get the
 * count-up treatment, non-numeric ones stay static text. `tabular-nums` keeps
 * the layout from shifting while digits roll.
 */
export function StatValue({ value, className }: StatValueProps) {
    const numeric =
        typeof value === "number"
            ? value
            : /^\d+$/.test(value.trim())
              ? Number(value.trim())
              : null;

    if (numeric === null) {
        return <span className={className}>{value}</span>;
    }
    return <CountUp to={numeric} className={`tabular-nums ${className ?? ""}`} />;
}
