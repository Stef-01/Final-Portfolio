import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { ContactModal } from "./ContactModal";

const links = [
    { to: "/research", label: "Research" },
    { to: "/policy", label: "Policy" },
    { to: "/industry", label: "Industry" },
    { to: "/education", label: "Education" },
    { to: "/presentations", label: "Presentations" },
    { to: "/bio", label: "Bio" },
];

export const ContactSection: React.FC = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <>
            <div className="bg-black text-white py-16 px-4 md:px-8 mt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="t-h2 font-bold mb-8">Get in touch</h2>
                    <div className="flex justify-center">
                        <Button
                            type="secondary"
                            label="Contact"
                            className="!bg-white !border-white !text-black hover:!bg-gray-100"
                            showIcon={true}
                            onClick={() => setIsContactModalOpen(true)}
                        />
                    </div>

                    <nav
                        aria-label="Site sections"
                        className="mt-12 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm"
                    >
                        {[{ to: "/", label: "Home" }, ...links].map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="group relative rounded-sm text-gray-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                            >
                                {link.label}
                                <span
                                    aria-hidden="true"
                                    className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-white transition-transform duration-200 ease-out group-hover:origin-left group-hover:scale-x-100 motion-reduce:transition-none"
                                />
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
};
