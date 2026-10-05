import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ContactModal } from "./ContactModal";

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

    return (
        <>
            <footer className="px-3 pb-3 pt-16 md:px-5 md:pb-5 md:pt-24">
                <div className="flex flex-col gap-12 rounded-[28px] bg-gray-900 px-6 py-10 text-white md:flex-row md:items-end md:justify-between md:px-10 md:py-12">
                    <div>
                        <h2 className="text-[clamp(2.25rem,1.6rem+2.6vw,3.75rem)] font-bold leading-[0.95] tracking-[-0.04em]">
                            Get in{" "}
                            <span className="font-['Playfair_Display',_serif] font-semibold italic text-sand">
                                touch.
                            </span>
                        </h2>
                        <button
                            type="button"
                            onClick={() => setIsContactModalOpen(true)}
                            className="group mt-7 inline-flex h-11 items-center gap-1.5 rounded-full bg-sand pl-5 pr-4 text-sm font-semibold text-gray-900 transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
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
                </div>
            </footer>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
};
