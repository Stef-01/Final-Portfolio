import { motion } from "motion/react";

export function IntroSection() {
    // Animation variants for staggered text reveal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="relative bg-white flex flex-col items-center justify-center py-32 px-4 overflow-hidden">

            {/* Background Wave Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_rgba(232,121,249,0.15)_0%,_rgba(56,189,248,0.15)_25%,_rgba(255,255,255,0)_60%)] blur-3xl opacity-80 animate-pulse-slow"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.8)_100%)]"></div>
            </div>

            <div className="relative z-10 max-w-[1200px] mx-auto text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className="flex flex-col gap-8 items-center"
                >
                    {/* Main Heading */}
                    <motion.h2
                        variants={itemVariants}
                        className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[42px] md:text-[64px] text-gray-900 leading-[1.1] tracking-tight"
                    >
                        Research, product, and systems design for the future of health
                    </motion.h2>

                    {/* Sub-content Container */}
                    <motion.div
                        variants={itemVariants}
                        className="max-w-[1000px] mx-auto space-y-4 font-['Clash_Grotesk:Regular',_sans-serif] text-[24px] md:text-[32px] text-gray-600 leading-[1.5]"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <span className="font-['Clash_Grotesk:Semibold',_sans-serif] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Stanford-linked research
                            </span>
                            <span>,</span>
                            <span className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 text-white text-[18px] md:text-[20px] font-medium shadow-lg transform rotate-2 inline-block">
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
                            <span className="px-4 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-white text-[18px] md:text-[20px] font-medium shadow-lg transform -rotate-2 inline-block">
                                evidence
                            </span>
                            <span>into digital experiences, decision-support tools, and strategic product concepts</span>
                        </div>

                        <div className="block text-gray-500 text-[20px] md:text-[24px] mt-2">
                            with rigor, aesthetic clarity, and a strong bias toward real-world implementation.
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
