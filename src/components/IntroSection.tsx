import { motion } from "motion/react";
import { Activity, Microscope, Sparkles } from "lucide-react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const featureChips = [
    { label: "Precision Medicine", icon: Microscope, tone: "from-blue-500/90 to-cyan-400/90", float: [0, -8, 0] },
    { label: "Clinical AI", icon: Sparkles, tone: "from-fuchsia-500/90 to-violet-500/90", float: [0, -12, 0] },
    { label: "Systems Strategy", icon: Activity, tone: "from-emerald-500/90 to-teal-400/90", float: [0, -10, 0] },
];

export function IntroSection() {
    const prefersReducedMotion = usePrefersReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: prefersReducedMotion ? 0.06 : 0.12,
                delayChildren: 0.12,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: prefersReducedMotion ? 10 : 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: prefersReducedMotion ? 0.35 : 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative bg-white flex flex-col items-center justify-center py-24 md:py-32 px-4 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute left-1/2 top-[16%] h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.24)_0%,_rgba(139,92,246,0.14)_38%,_rgba(255,255,255,0)_72%)] blur-3xl"
                    animate={prefersReducedMotion ? undefined : { scale: [1, 1.06, 1], opacity: [0.75, 1, 0.8] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute right-[-8%] top-[26%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.18)_0%,_rgba(255,255,255,0)_72%)] blur-3xl"
                    animate={prefersReducedMotion ? undefined : { x: [0, -24, 0], y: [0, 18, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.72)_55%,rgba(255,255,255,1)_100%)]" />
            </div>

            <div className="relative z-10 max-w-[1200px] mx-auto text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="flex flex-col gap-8 items-center"
                >
                    <motion.p
                        variants={itemVariants}
                        className="max-w-3xl text-sm md:text-base font-semibold uppercase tracking-[0.28em] text-gray-400"
                    >
                        Translational health systems, product, and implementation work
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3">
                        {featureChips.map((chip, index) => (
                            <motion.div
                                key={chip.label}
                                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${chip.tone} px-4 py-2 text-sm md:text-base font-semibold text-white shadow-[0_20px_45px_-28px_rgba(0,0,0,0.45)]`}
                                animate={prefersReducedMotion ? undefined : { y: chip.float }}
                                transition={{ duration: 3.6 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <chip.icon className="h-4 w-4" />
                                {chip.label}
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[42px] md:text-[64px] text-gray-900 leading-[1.05] tracking-tight max-w-5xl"
                    >
                        Turning complex evidence into products, decisions, and systems people can actually use
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        className="max-w-[1000px] mx-auto space-y-5 font-['Clash_Grotesk:Regular',_sans-serif] text-[22px] md:text-[32px] text-gray-600 leading-[1.45]"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <span className="font-['Clash_Grotesk:Semibold',_sans-serif] bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                                Stanford-linked research
                            </span>
                            <span>,</span>
                            <span className="rounded-full border border-black/10 bg-white px-4 py-1 text-[17px] md:text-[20px] font-medium text-gray-900 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.35)]">
                                clinical AI
                            </span>
                            <span>, and</span>
                            <span className="font-['Clash_Grotesk:Semibold',_sans-serif] bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                                health-system innovation
                            </span>
                        </div>

                        <div className="block text-gray-800 font-medium">
                            spanning precision medicine, preventive care, community health, and venture building
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <span>Translating</span>
                            <span className="rounded-full bg-black px-4 py-1 text-[17px] md:text-[20px] font-medium text-white shadow-[0_18px_40px_-28px_rgba(0,0,0,0.5)]">
                                evidence
                            </span>
                            <span>into digital experiences, decision-support tools, and strategic product concepts</span>
                        </div>

                        <div className="block text-gray-500 text-[19px] md:text-[24px] mt-2">
                            with rigor, aesthetic clarity, and a strong bias toward real-world implementation.
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative mt-2 flex items-center justify-center">
                        <div className="h-px w-28 bg-gradient-to-r from-transparent via-black/60 to-transparent" />
                        <motion.div
                            className="mx-4 h-2.5 w-2.5 rounded-full bg-black"
                            animate={prefersReducedMotion ? undefined : { scale: [1, 1.45, 1], opacity: [0.45, 1, 0.55] }}
                            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="h-px w-28 bg-gradient-to-r from-transparent via-black/60 to-transparent" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
