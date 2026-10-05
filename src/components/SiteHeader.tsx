import { useEffect, useId, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ContactModal } from "./ContactModal";
import { EASE_OUT, SPRING } from "../lib/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

// The header is on every page; its entrance plays once per visit, not on
// every route change.
let headerHasEntered = false;

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

/** Section links with a highlight that slides to the hovered link and rests
 *  on the current page. */
function NavPill({ className, label }: { className: string; label: string }) {
    const { pathname } = useLocation();
    const indicatorId = useId();
    const [hovered, setHovered] = useState<string | null>(null);
    const activeTo = navItems.find((item) => pathname.startsWith(item.to))?.to ?? null;
    const highlighted = hovered ?? activeTo;

    return (
        <nav aria-label={label} className={className} onMouseLeave={() => setHovered(null)}>
            {navItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    onMouseEnter={() => setHovered(item.to)}
                    onFocus={() => setHovered(item.to)}
                    onBlur={() => setHovered(null)}
                    className="relative isolate shrink-0 rounded-full px-4 py-2 text-sm font-medium text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25"
                >
                    {highlighted === item.to && (
                        <motion.span
                            layoutId={indicatorId}
                            transition={SPRING}
                            className={`absolute inset-0 -z-10 rounded-full ${
                                item.to === activeTo ? "bg-white" : "bg-white/60"
                            }`}
                        />
                    )}
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
}

/** Logo, section pill, and Contact button shared by every page. */
export function SiteHeader({ onContact, mobileNav = false }: SiteHeaderProps) {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [playEntrance] = useState(() => !headerHasEntered);
    const openContact = onContact ?? (() => setIsContactOpen(true));

    useEffect(() => {
        headerHasEntered = true;
    }, []);

    const rise = (delay: number) =>
        playEntrance
            ? {
                  initial: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, delay, ease: EASE_OUT },
              }
            : {};

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

                <motion.div {...rise(0.08)} className="hidden md:block">
                    <NavPill label="Primary" className="flex items-center gap-0.5 rounded-full bg-sand p-1.5" />
                </motion.div>

                <motion.div {...rise(0.16)}>
                    <button
                        type="button"
                        onClick={openContact}
                        className="group inline-flex h-11 items-center gap-1.5 rounded-full bg-gray-900 pl-5 pr-4 text-sm font-semibold text-white transition-[color,background-color,transform] active:scale-[0.97] duration-150 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
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
                <motion.div {...rise(0.12)} className="mt-2 md:hidden">
                    <NavPill
                        label="Sections"
                        className="flex gap-0.5 overflow-x-auto rounded-full bg-sand p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    />
                </motion.div>
            )}

            {!onContact && (
                <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            )}
        </>
    );
}
