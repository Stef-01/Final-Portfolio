import { motion } from "motion/react";
import { ArrowLeft, Shield, Landmark, Radar, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FloatingBackButton } from "../components/FloatingBackButton";
import { ContactSection } from "../components/ContactSection";
import { policyInitiatives } from "../types/policy";

const icons = [Shield, HeartPulse, Landmark, Radar];

export function Policy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-[100svh] bg-white text-gray-900 py-16 md:py-20 px-4 md:px-8">
            <FloatingBackButton />
            <div className="max-w-[1200px] mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-12 group">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-['Clash_Grotesk:Medium',_sans-serif] text-[18px]">Back to Home</span>
                </Link>

                <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <div className="relative overflow-hidden rounded-[36px] border border-black/8 bg-[#0d1118] px-6 py-8 text-white md:px-10 md:py-12">
                        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.18),_transparent_32%)]" />
                        <div className="relative z-10 max-w-4xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">Policy & Systems</p>
                            <h1 className="mt-4 text-[42px] leading-[0.95] font-bold tracking-tight md:text-[76px]">
                                Government, implementation, and national-capability work
                            </h1>
                            <p className="mt-6 max-w-3xl text-base md:text-[22px] leading-relaxed text-white/75">
                                A focused view of work relevant to public-sector, advisory, and national mission environments, spanning implementation, surveillance, evidence translation, and biosecurity-oriented systems thinking.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                        {[
                            "Evidence translated into action",
                            "Health systems and implementation",
                            "AI, surveillance, and national resilience",
                        ].map((item) => (
                            <div key={item} className="rounded-[28px] border border-black/8 bg-[#fafafa] px-5 py-5 text-sm md:text-base font-medium text-gray-700 shadow-[0_18px_45px_-38px_rgba(0,0,0,0.5)]">
                                {item}
                            </div>
                        ))}
                    </div>

                    <section className="mt-14">
                        <div className="mb-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-400">Selected Initiatives</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black md:text-4xl">
                                Work shaped for complex public systems, not just presentation
                            </h2>
                        </div>

                        <div className="grid gap-6">
                            {policyInitiatives.map((initiative, index) => {
                                const Icon = icons[index % icons.length];

                                return (
                                    <motion.div
                                        key={initiative.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-80px" }}
                                        transition={{ duration: 0.55, delay: Math.min(index * 0.08, 0.24) }}
                                        className="rounded-[32px] border border-black/8 bg-white p-6 md:p-8 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.45)]"
                                    >
                                        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                                            <div className="max-w-3xl">
                                                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
                                                    <Icon className="h-4 w-4" />
                                                    {initiative.scope}
                                                </div>
                                                <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-black">{initiative.title}</h3>
                                                <p className="mt-3 text-lg md:text-xl leading-relaxed text-gray-700">{initiative.subtitle}</p>
                                                <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">{initiative.description}</p>
                                            </div>

                                            <div className="min-w-[220px] rounded-[24px] border border-black/8 bg-[#fafafa] p-5">
                                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">Role</p>
                                                <p className="mt-2 text-sm font-medium leading-relaxed text-black">{initiative.role}</p>
                                                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">Period</p>
                                                <p className="mt-2 text-sm font-medium leading-relaxed text-black">{initiative.period}</p>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {initiative.themes.map((theme) => (
                                                <span key={theme} className="rounded-full border border-black/10 bg-[#f6f6f6] px-3 py-2 text-sm font-medium text-gray-700">
                                                    {theme}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </section>
                </motion.div>
            </div>

            <ContactSection />
        </div>
    );
}
