import React from "react";
import { motion } from "motion/react";
import { Linkedin, GraduationCap } from "lucide-react";

const socials = [
    {
        href: "https://www.linkedin.com/in/stefan-thottunkal-a391a2199?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        label: "LinkedIn",
        icon: Linkedin,
    },
    {
        href: "https://scholar.google.com/citations?user=9Nxhv58AAAAJ&hl=en",
        label: "Google Scholar",
        icon: GraduationCap,
    },
];

interface FloatingSocialsProps {
    /** Tailwind classes appended to the wrapper — useful for repositioning
     *  on routes that also display a FloatingBackButton. */
    className?: string;
}

/**
 * Tiny stack of round social icons floating in the bottom-right of the
 * viewport. Replaces the long row of footer links so there's less clutter
 * around the page edges.
 */
export const FloatingSocials: React.FC<FloatingSocialsProps> = ({ className = "" }) => (
    <motion.nav
        aria-label="Social links"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed bottom-6 right-6 z-40 flex flex-col gap-2 ${className}`}
    >
        {socials.map(({ href, label, icon: Icon }) => (
            <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-gray-500 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
            >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
            </a>
        ))}
    </motion.nav>
);
