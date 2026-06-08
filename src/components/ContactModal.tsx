import React, { useEffect, useRef, useState } from "react";
import { X, Mail, Linkedin, Check } from "lucide-react";
import { usePhoneLayout } from "../hooks/usePhoneLayout";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [emailCopied, setEmailCopied] = useState(false);
    const isPhoneLayout = usePhoneLayout();
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const onCloseRef = useRef(onClose);
    const copyTimerRef = useRef<ReturnType<typeof setTimeout>>();

    // Keep the ref in sync without triggering effects
    useEffect(() => {
        onCloseRef.current = onClose;
    });

    // Clean up timers on unmount
    useEffect(() => {
        return () => {
            if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
        };
    }, []);

    const email = "stefan01@stanford.edu";
    const linkedinUrl = "https://www.linkedin.com/in/stefan-thottunkal-a391a2199?utm_source=share_via&utm_content=profile&utm_medium=member_ios";

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        const previouslyFocused = document.activeElement as HTMLElement | null;
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onCloseRef.current();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);
        closeButtonRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
            previouslyFocused?.focus?.();
        };
    }, [isOpen]);

    const fallbackCopy = () => {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    };

    const handleEmailClick = async () => {
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(email);
            } else {
                fallbackCopy();
            }
            setEmailCopied(true);
            if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
            copyTimerRef.current = setTimeout(() => {
                setEmailCopied(false);
            }, 2000);
        } catch (err) {
            try {
                fallbackCopy();
                setEmailCopied(true);
                if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
                copyTimerRef.current = setTimeout(() => {
                    setEmailCopied(false);
                }, 2000);
            } catch (fallbackError) {
                if (import.meta.env.DEV) {
                    console.error("Failed to copy email:", err, fallbackError);
                }
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] bg-black/20"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-modal-title"
                className={`relative w-full bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300 ${isPhoneLayout ? "max-w-sm p-5" : "max-w-3xl p-8"}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    ref={closeButtonRef}
                    onClick={onClose}
                    className={`absolute w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all flex items-center justify-center z-10 ${isPhoneLayout ? "top-3 right-3" : "-top-4 -right-4"}`}
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Contact options */}
                <div className={`mb-6 ${isPhoneLayout ? "flex flex-col items-center gap-4" : "flex items-center gap-8"}`}>
                    {/* Email button */}
                    <button
                        onClick={handleEmailClick}
                        className="flex flex-col items-center gap-3 group"
                    >
                        <div className={`${isPhoneLayout ? "w-28 h-28" : "w-32 h-32"} bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center`}>
                            {emailCopied ? (
                                <>
                                    <Check className="w-12 h-12 text-white mb-1" />
                                    <span className="text-white font-semibold text-sm">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Mail className="w-12 h-12 text-white mb-1" />
                                    <span className="text-white font-semibold text-sm">Email</span>
                                </>
                            )}
                        </div>
                    </button>

                    {/* Center text */}
                    <div className="text-center px-4">
                        <p id="contact-modal-title" className="text-2xl font-bold text-gray-800 whitespace-nowrap">Get in<br />touch</p>
                    </div>

                    {/* LinkedIn link */}
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-3 group"
                    >
                        <div className={`${isPhoneLayout ? "w-28 h-28" : "w-32 h-32"} bg-gradient-to-br from-blue-600 to-blue-700 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center`}>
                            <Linkedin className="w-12 h-12 text-white mb-1" />
                            <span className="text-white font-semibold text-sm">LinkedIn</span>
                        </div>
                    </a>
                </div>

                {/* Email display */}
                <div className="bg-gray-100 rounded-2xl px-6 py-4 text-center">
                    <p className="text-base font-medium text-gray-900">{email}</p>
                </div>
            </div>
        </div>
    );
};
