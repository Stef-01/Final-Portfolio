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
                    className="flex flex-col items-center gap-10 md:gap-12"
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.32em] text-gray-400"
                    >
                        Mission
                    </motion.p>

                    <motion.h2
                        variants={itemVariants}
                        className="font-bold tracking-tight leading-[0.98] text-black text-[44px] md:text-[80px]"
                    >
                        Turning complex evidence into things people can actually use.
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl text-lg md:text-2xl leading-relaxed text-gray-500"
                    >
                        Research, clinical AI, and health-system innovation — translated into products, decisions, and strategy with a bias toward real-world implementation.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
