import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Activity, Dna, Microscope, Stethoscope, Brain, Leaf, Bot } from "lucide-react";
import { usePhoneLayout } from "../hooks/usePhoneLayout";

const PILL_COUNT = 8;

export function AboutSection() {
    const isPhoneLayout = usePhoneLayout();
    // Stable per-mount initial rotations; lazy useState keeps Math.random out of the render path
    const [initialRotations] = useState(() =>
        Array.from({ length: PILL_COUNT }, () => Math.random() * 20 - 10),
    );
    const pills = isPhoneLayout ? [
        { text: "pharmacogenomics", color: "bg-[#818CF8]", rotate: -10, x: -68, y: -78, delay: 0.1, icon: Dna },
        { text: "AI healthcare", color: "bg-[#4ADE80]", rotate: 6, x: 64, y: -78, delay: 0.2, icon: Brain },
        { text: "digital health", color: "bg-[#22D3EE]", rotate: 4, x: 74, y: -4, delay: 0.3, icon: Stethoscope },
        { text: "indigenous health", color: "bg-[#E879F9]", rotate: -8, x: -70, y: 52, delay: 0.4, icon: Sparkles },
        { text: "health systems", color: "bg-[#FBBF24]", rotate: -4, x: 0, y: 22, delay: 0.5, icon: Activity },
        { text: "precision medicine", color: "bg-[#FB7185]", rotate: 8, x: 66, y: 84, delay: 0.6, icon: Microscope },
        { text: "nutrition", color: "bg-[#A3E635]", rotate: 10, x: -58, y: 90, delay: 0.7, icon: Leaf },
        { text: "LLM CDS", color: "bg-[#C084FC]", rotate: -6, x: -14, y: -18, delay: 0.8, icon: Bot },
    ] : [
        { text: "pharmacogenomics", color: "bg-[#818CF8]", rotate: -15, x: -120, y: -80, delay: 0.1, icon: Dna },
        { text: "AI healthcare", color: "bg-[#4ADE80]", rotate: 5, x: 100, y: -90, delay: 0.2, icon: Brain },
        { text: "digital health", color: "bg-[#22D3EE]", rotate: 8, x: 140, y: -10, delay: 0.3, icon: Stethoscope },
        { text: "indigenous health", color: "bg-[#E879F9]", rotate: -12, x: -130, y: 60, delay: 0.4, icon: Sparkles },
        { text: "health systems", color: "bg-[#FBBF24]", rotate: -5, x: 0, y: 20, delay: 0.5, icon: Activity },
        { text: "precision medicine", color: "bg-[#FB7185]", rotate: 10, x: 110, y: 90, delay: 0.6, icon: Microscope },
        { text: "nutrition", color: "bg-[#A3E635]", rotate: 15, x: 130, y: 50, delay: 0.7, icon: Leaf },
        { text: "LLM CDS", color: "bg-[#C084FC]", rotate: -8, x: -90, y: -40, delay: 0.8, icon: Bot },
    ];

    return (
        <section className="relative min-h-[100svh] bg-white flex flex-col items-center justify-center py-10 md:py-8 px-4 md:px-8 overflow-hidden">

            <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

                {/* Left Column: Browser Window Animation */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Browser Window Container - Updated Design */}
                    <div className="bg-white rounded-3xl border-[3px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] aspect-[4/3] relative overflow-hidden z-10">
                        {/* Window Header - Minimal */}
                        <div className="h-14 border-b-[3px] border-black flex items-center px-6 gap-3 bg-white z-20 relative">
                            <div className="w-4 h-4 rounded-full bg-[#FF5F57] border-2 border-black"></div>
                            <div className="w-4 h-4 rounded-full bg-[#FEBC2E] border-2 border-black"></div>
                            <div className="w-4 h-4 rounded-full bg-[#28C840] border-2 border-black"></div>
                        </div>

                        {/* Window Content Area */}
                        <div className="absolute inset-0 top-14 bg-[#FAFAFA] flex items-center justify-center">
                            {/* Pills Container */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* The Bow - Multi-stage animation */}
                                <motion.div
                                    className="absolute z-50 pointer-events-none origin-center"
                                    initial={{ opacity: 1, scale: 1, rotate: 0 }}
                                    whileInView={{
                                        opacity: [1, 1, 0], // Stay visible during shake/stretch, then vanish
                                        scale: [1, 1.2, 1.5], // Stretch up
                                        rotate: [0, -10, 10, -10, 10, 0], // Shake
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.5, // Slower sequence
                                        times: [0, 0.8, 1], // Timing for keyframes
                                        ease: "easeInOut"
                                    }}
                                >
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Left bow loop */}
                                        <ellipse cx="30" cy="45" rx="18" ry="22" fill="#FF6B9D" stroke="black" strokeWidth="3" />
                                        <ellipse cx="30" cy="45" rx="12" ry="16" fill="#FFB3D9" stroke="black" strokeWidth="2" />

                                        {/* Right bow loop */}
                                        <ellipse cx="70" cy="45" rx="18" ry="22" fill="#FF6B9D" stroke="black" strokeWidth="3" />
                                        <ellipse cx="70" cy="45" rx="12" ry="16" fill="#FFB3D9" stroke="black" strokeWidth="2" />

                                        {/* Center knot - purple band */}
                                        <ellipse cx="50" cy="48" rx="16" ry="12" fill="#9C27B0" stroke="black" strokeWidth="3" />

                                        {/* Center knot - pink circle */}
                                        <circle cx="50" cy="45" r="10" fill="#FF1744" stroke="black" strokeWidth="3" />

                                        {/* Left ribbon tail */}
                                        <path d="M 35 60 Q 30 75, 25 85 L 20 95 Q 18 98, 22 98 L 30 85 Q 35 75, 38 65 Z"
                                            fill="#FF6B9D" stroke="black" strokeWidth="3" />

                                        {/* Right ribbon tail */}
                                        <path d="M 65 60 Q 70 75, 75 85 L 80 95 Q 82 98, 78 98 L 70 85 Q 65 75, 62 65 Z"
                                            fill="#FF6B9D" stroke="black" strokeWidth="3" />

                                        {/* Yellow accent dots */}
                                        <circle cx="22" cy="42" r="4" fill="#FFD700" stroke="black" strokeWidth="2" />
                                        <circle cx="78" cy="42" r="4" fill="#FFD700" stroke="black" strokeWidth="2" />
                                    </svg>
                                </motion.div>

                                {pills.map((pill, index) => (
                                    <motion.div
                                        key={pill.text}
                                        className={`absolute px-3 md:px-6 py-2 md:py-3 rounded-full border-[3px] border-black text-white font-['Clash_Grotesk',_sans-serif] font-medium text-[11px] md:text-base whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${pill.color} flex items-center gap-1.5 md:gap-2`}
                                        initial={{
                                            x: 0,
                                            y: 0,
                                            rotate: initialRotations[index],
                                            scale: 0.5,
                                            opacity: 1,
                                            zIndex: 10
                                        }}
                                        whileInView={{
                                            x: pill.x,
                                            y: pill.y,
                                            rotate: pill.rotate,
                                            scale: 1,
                                            opacity: 1,
                                            zIndex: 1,
                                            transition: {
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 12,
                                                delay: 1.2 + pill.delay, // Wait for bow
                                                duration: 0.8
                                            }
                                        }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        whileHover={{
                                            scale: 1.1,
                                            zIndex: 50,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <pill.icon className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={2.5} />
                                        {pill.text}
                                    </motion.div>
                                ))}

                                {/* Center decorative dot */}
                                <div className="w-3 h-3 bg-gray-300 rounded-full absolute border-2 border-black"></div>
                            </div>
                        </div>
                    </div>

                    {/* Cord Element - Improved */}
                    <div className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-8 z-0 scale-75 md:scale-100">
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Cord cable with gradient */}
                            <defs>
                                <linearGradient id="cordGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#333" />
                                    <stop offset="100%" stopColor="#666" />
                                </linearGradient>
                            </defs>
                            <path d="M20 20 Q 50 15, 70 40 T 100 100" stroke="url(#cordGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
                            {/* Plug */}
                            <g transform="translate(95, 95)">
                                <rect x="-8" y="-12" width="16" height="24" rx="3" fill="#222" stroke="black" strokeWidth="2" />
                                <rect x="-6" y="-8" width="4" height="3" fill="#FFD700" />
                                <rect x="2" y="-8" width="4" height="3" fill="#FFD700" />
                                <rect x="-6" y="5" width="12" height="2" fill="#444" />
                            </g>
                        </svg>
                    </div>

                    {/* Decorative Elements behind window */}
                    <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-[#F0FDF4] rounded-3xl blur-3xl opacity-50"></div>
                </motion.div>

                {/* Right Column: Text Content */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="font-['Clash_Grotesk',_sans-serif] text-[18px] md:text-[24px] text-gray-700 leading-relaxed">
                            I work across three worlds that rarely talk to each other: Stanford labs, Australian government, and the clinics and communities that actually see patients.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="font-['Clash_Grotesk',_sans-serif] font-medium text-[18px] md:text-[24px] text-gray-900 leading-relaxed">
                            My focus: getting good health technology to the people current systems leave out — remote Indigenous clinics, low-resource hospitals, and patients on medications no one has reconciled.
                        </p>
                    </motion.div>

                    {/* Signature Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="w-fit"
                    >
                        <div className="bg-[#FEF08A] px-6 py-3 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
                            <span className="font-['Playfair_Display',_serif] italic text-2xl font-bold">Stefan T.</span>
                        </div>
                        {/* Arrow pointing to signature */}
                        <svg className="absolute hidden md:block -left-16 top-1/2 w-12 h-12 text-black transform -translate-y-1/2" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M10,50 Q50,20 90,50" markerEnd="url(#arrowhead)" />
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                                </marker>
                            </defs>
                        </svg>
                    </motion.div>

                    {/* Bottom Line */}
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-8"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    />
                </div>
            </div>
        </section>
    );
}
