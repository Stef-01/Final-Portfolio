import { motion, type Variants } from "motion/react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function IntroSection() {
    const prefersReducedMotion = usePrefersReducedMotion();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: prefersReducedMotion ? 0.04 : 0.10,
                delayChildren: 0.10,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: prefersReducedMotion ? 8 : 22 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: prefersReducedMotion ? 0.35 : 0.7,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            },
        },
    };

    return (
        <section className="relative bg-white flex min-h-[100svh] flex-col items-center justify-center px-6 md:px-10">
            <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="flex flex-col items-center"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="font-bold tracking-tight leading-[1.05] text-black t-h1"
                    >
                        I work where health ideas either translate or stall: between the lab, the policy room, the clinic, and the market.
                    </motion.h2>
                </motion.div>
            </div>
        </section>
    );
}
