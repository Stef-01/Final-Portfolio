import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ContactModal } from "./ContactModal";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const EASE = [0.22, 1, 0.36, 1] as const;

const navItems = [
    { label: "Research", to: "/research" },
    { label: "Policy", to: "/policy" },
    { label: "Industry", to: "/industry" },
    { label: "Education", to: "/education" },
    { label: "Bio", to: "/bio" },
];

interface SiteHeaderProps {
    /** Open a contact modal owned by the parent. Without it the header keeps its own. */
    onContact?: () => void;
    /** Show the section links as a scrollable row on small screens. */
    mobileNav?: boolean;
}

/** Logo, section pill, and Contact button shared by every page. */
export function SiteHeader({ onContact, mobileNav = false }: SiteHeaderProps) {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [isContactOpen, setIsContactOpen] = useState(false);
    const openContact = onContact ?? (() => setIsContactOpen(true));

    const rise = (delay: number) => ({
        initial: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay, ease: EASE },
    });

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `shrink-0 rounded-full px-4 py-2 text-sm font-medium text-gray-800 transition-colors duration-300 focus-visible:outline-none focus-visible:bg-white/50 ${
            isActive ? "bg-white" : "hover:bg-white/50"
        }`;

    return (
        <>
            <header className="flex h-14 shrink-0 items-center justify-between gap-4">
                <motion.div {...rise(0)}>
                    <Link
                        to="/"
                        className="group flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-4"
                    >
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-black text-[13px] font-bold tracking-tight text-white transition-transform duration-500 group-hover:rotate-[-8deg]">
                            ST
                        </span>
                        <span className="flex flex-col leading-none">
                            <span className="text-[15px] font-bold tracking-tight text-gray-900">
                                Stefan Thottunkal
                            </span>
                            <span className="mt-1 text-[11px] tracking-wide text-gray-600">
                                Stanford · Australia
                            </span>
                        </span>
                    </Link>
                </motion.div>

                <motion.nav
                    {...rise(0.08)}
                    aria-label="Primary"
                    className="hidden items-center gap-0.5 rounded-full bg-sand p-1.5 md:flex"
                >
                    {navItems.map((item) => (
                        <NavLink key={item.to} to={item.to} className={navLinkClass}>
                            {item.label}
                        </NavLink>
                    ))}
                </motion.nav>

                <motion.div {...rise(0.16)}>
                    <button
                        type="button"
                        onClick={openContact}
                        className="group inline-flex h-11 items-center gap-1.5 rounded-full bg-gray-900 pl-5 pr-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
                    >
                        Contact
                        <ArrowUpRight
                            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                        />
                    </button>
                </motion.div>
            </header>

            {mobileNav && (
                <motion.nav
                    {...rise(0.12)}
                    aria-label="Sections"
                    className="mt-2 flex gap-0.5 overflow-x-auto rounded-full bg-sand p-1.5 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden"
                >
                    {navItems.map((item) => (
                        <NavLink key={item.to} to={item.to} className={navLinkClass}>
                            {item.label}
                        </NavLink>
                    ))}
                </motion.nav>
            )}

            {!onContact && (
                <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            )}
        </>
    );
}
