import { motion } from "motion/react";

export function AboutSection() {
    // Animation variants for staggered text reveal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const pillVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
            },
        },
        hover: {
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white flex items-center justify-center py-32 px-8 overflow-hidden">
            {/* Animated decorative elements - subtle light colors with parallax */}
            <motion.div
                className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-pink-100/40 to-blue-100/40 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, -40, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, 180, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col gap-6"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[42px] md:text-[56px] text-gray-900 leading-[1.2] mb-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Health Systems Designer & Medical Student
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        className="max-w-[1200px] mx-auto space-y-2"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-4 font-['Clash_Grotesk:Regular',_sans-serif] text-[28px] md:text-[36px] text-gray-700 leading-[1.4]">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                and
                            </motion.span>
                            <motion.span
                                className="font-['Clash_Grotesk:Semibold',_sans-serif] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                                whileHover={{
                                    scale: 1.05,
                                    textShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                                }}
                            >
                                30+ completed projects
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                ,
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                specializing in
                            </motion.span>
                            <motion.div
                                variants={pillVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true }}
                                className="inline-block bg-white h-[66px] overflow-hidden relative rounded-[57px] w-[125px] shadow-lg cursor-pointer"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-80"
                                    whileHover={{ opacity: 1 }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-white font-['Clash_Grotesk:Semibold',_sans-serif] text-[18px]">
                                    UI/UX
                                </div>
                            </motion.div>
                        </div>

                        <motion.p
                            variants={itemVariants}
                            className="font-['Clash_Grotesk:Regular',_sans-serif] text-[28px] md:text-[36px] text-gray-700 leading-[1.4]"
                            whileHover={{ letterSpacing: "0.02em" }}
                            transition={{ duration: 0.3 }}
                        >
                            user-centric, problem-solving designs
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-8 max-w-[1100px] mx-auto"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-3 font-['Clash_Grotesk:Regular',_sans-serif] text-[22px] md:text-[28px] text-gray-600 leading-[1.5]">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                            >
                                Skilled in
                            </motion.span>
                            <motion.div
                                variants={pillVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true }}
                                className="inline-block bg-white h-[66px] overflow-hidden relative rounded-[57px] w-[125px] shadow-lg cursor-pointer"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-400 opacity-80"
                                    whileHover={{ opacity: 1 }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-white font-['Clash_Grotesk:Semibold',_sans-serif] text-[16px]">
                                    Research
                                </div>
                            </motion.div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                            >
                                ,
                            </motion.span>
                            <motion.span
                                className="text-gray-800 font-['Clash_Grotesk:Medium',_sans-serif]"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.85 }}
                                whileHover={{ scale: 1.05, color: "#1f2937" }}
                            >
                                wireframing
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9 }}
                            >
                                ,
                            </motion.span>
                            <motion.span
                                className="text-gray-800 font-['Clash_Grotesk:Medium',_sans-serif]"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.95 }}
                                whileHover={{ scale: 1.05, color: "#1f2937" }}
                            >
                                prototyping
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.0 }}
                            >
                                ,
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.05 }}
                            >
                                and
                            </motion.span>
                            <motion.span
                                className="text-gray-800 font-['Clash_Grotesk:Medium',_sans-serif]"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.1 }}
                                whileHover={{ scale: 1.05, color: "#1f2937" }}
                            >
                                visual design
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.15, type: "spring" }}
                            >
                                to craft intuitive and engaging user experiences.
                            </motion.span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative accent elements with enhanced animations */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-400/60"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4],
                    x: [0, 10, 0],
                    y: [0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-purple-400/60"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4],
                    x: [0, -15, 0],
                    y: [0, 15, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <motion.div
                className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-pink-400/60"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4],
                    rotate: [0, 360],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Additional floating particles */}
            <motion.div
                className="absolute top-1/3 right-1/2 w-1 h-1 rounded-full bg-blue-300/40"
                animate={{
                    y: [0, -30, 0],
                    opacity: [0, 0.6, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-purple-300/40"
                animate={{
                    y: [0, 30, 0],
                    opacity: [0, 0.6, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
        </div>
    );
}
