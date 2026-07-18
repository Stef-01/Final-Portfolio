import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface MagneticProps {
    children: React.ReactNode;
    /** Fraction of the cursor offset the element follows. */
    strength?: number;
    /** Maximum travel from rest, in px. */
    maxTravel?: number;
    className?: string;
}

const followSpring = { stiffness: 260, damping: 18, mass: 0.5 };

/**
 * Magnetic hover wrapper: the child drifts a fraction of the cursor offset
 * while hovered and springs back to rest on leave. Editorial dose — travel is
 * clamped to ~10px. Inert on touch devices (no mouse events fire) and under
 * reduced motion.
 */
export function Magnetic({
    children,
    strength = 0.25,
    maxTravel = 10,
    className,
}: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, followSpring);
    const springY = useSpring(y, followSpring);

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    const handleMouseMove = (event: React.MouseEvent) => {
        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) return;
        const clamp = (v: number) => Math.max(-maxTravel, Math.min(maxTravel, v));
        x.set(clamp((event.clientX - (bounds.left + bounds.width / 2)) * strength));
        y.set(clamp((event.clientY - (bounds.top + bounds.height / 2)) * strength));
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
