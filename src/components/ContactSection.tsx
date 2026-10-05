import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ContactModal } from "./ContactModal";
import { RevealText } from "./RevealText";
import { EASE_OUT } from "../lib/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const links = [
    { to: "/", label: "Home" },
    { to: "/research", label: "Research" },
    { to: "/policy", label: "Policy" },
    { to: "/industry", label: "Industry" },
    { to: "/education", label: "Education" },
    { to: "/presentations", label: "Presentations" },
    { to: "/bio", label: "Bio" },
];

/** Site footer: an inset ink card with the contact call and section links. */
export const ContactSection: React.FC = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <>
            <footer className="px-3 pb-3 pt-16 md:px-5 md:pb-5 md:pt-24">
                <motion.div
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, ease: EASE_OUT }}
                    className="flex flex-col gap-12 rounded-[28px] bg-gray-900 px-6 py-10 text-white md:flex-row md:items-end md:justify-between md:px-10 md:py-12"
                >
                    <div>
                        <h2 className="text-[clamp(2.25rem,1.6rem+2.6vw,3.75rem)] font-bold leading-[0.95] tracking-[-0.04em]">
                            <RevealText
                                text={[
                                    { text: "Get in" },
                                    {
                                        text: "touch.",
                                        className: "font-['Playfair_Display',_serif] font-semibold italic text-sand",
                                    },
                                ]}
                            />
                        </h2>
                        <button
                            type="button"
                            onClick={() => setIsContactModalOpen(true)}
                            className="group mt-7 inline-flex h-11 items-center gap-1.5 rounded-full bg-sand pl-5 pr-4 text-sm font-semibold text-gray-900 transition-[color,background-color,transform] active:scale-[0.97] duration-150 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                        >
                            Contact
                            <ArrowUpRight
                                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                aria-hidden="true"
                            />
                        </button>
                    </div>

                    <nav
                        aria-label="Site sections"
                        className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:justify-end"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="text-white/55 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </motion.div>
            </footer>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
};
