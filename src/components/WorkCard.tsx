import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { SPRING_HOVER } from "../motion/tokens";

interface WorkCardProps {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    imageFit?: "cover" | "contain";
    imageAspect?: "16/9" | "8/5";
    className?: string;
    /** First card in the grid — its image is the likely LCP candidate. */
    priority?: boolean;
}

const MotionLink = motion(Link);

export const WorkCard: React.FC<WorkCardProps> = ({
    id,
    title,
    subtitle,
    description,
    image,
    imageFit = "cover",
    imageAspect = "16/9",
    className = "",
    priority = false,
}) => {
    const prefersReducedMotion = usePrefersReducedMotion();

    // Media-only parallax: the cover image drifts a few percent inside its
    // clipped frame as the card crosses the viewport. Text stays put.
    const frameRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: frameRef,
        offset: ["start end", "end start"],
    });
    const parallaxY = useTransform(scrollYProgress, [0, 1], ["-4.5%", "4.5%"]);
    const useParallax = imageFit === "cover" && !prefersReducedMotion;

    return (
        <MotionLink
            to={`/project/${id}`}
            whileHover={{ scale: 1.008 }}
            whileTap={{ scale: 0.995 }}
            transition={SPRING_HOVER}
            className={`group relative grid w-full cursor-pointer overflow-hidden rounded-2xl border border-black/10 bg-[#f5f5f5] p-5 text-center transition-colors duration-300 hover:border-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 md:min-h-[min(78svh,720px)] md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12 md:p-10 ${className}`}
        >
            {/* Arrow Icon */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 w-9 h-9 flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5 motion-reduce:transition-none">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto mb-7 max-w-md px-5 md:mb-0 md:px-0">
                <h3 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                    {title}
                </h3>
                {subtitle && (
                    <p className="mt-3 text-sm font-medium leading-relaxed text-gray-700">
                        {subtitle}
                    </p>
                )}
                <div className="mx-auto my-5 h-px w-10 bg-black/15" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-gray-600">
                    {description}
                </p>
            </div>

            {/* Image */}
            <div
                ref={frameRef}
                className={`relative w-full overflow-hidden rounded-2xl ${
                    imageFit === "contain"
                        ? `${imageAspect === "8/5" ? "aspect-[8/5]" : "aspect-video"} self-center bg-white`
                        : "h-[180px] md:h-full md:min-h-[420px]"
                }`}
            >
                {/* Parallax (Motion, outer) and hover zoom (CSS, inner) live on
                    separate layers so the CSS transition never intercepts
                    Motion's per-frame transform writes. */}
                <motion.div
                    style={useParallax ? { y: parallaxY } : undefined}
                    className={`h-full w-full ${useParallax ? "scale-110" : ""}`}
                >
                    <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none">
                        <ImageWithFallback
                            src={image}
                            alt={title}
                            fallbackInitial={title.charAt(0)}
                            wrapperClassName="w-full h-full"
                            className={`h-full w-full ${imageFit === "contain" ? "object-contain" : "object-cover"}`}
                            loading={priority ? "eager" : "lazy"}
                            fetchPriority={priority ? "high" : undefined}
                            decoding="async"
                            sizes="(max-width: 768px) 92vw, 900px"
                        />
                    </div>
                </motion.div>
            </div>

        </MotionLink>
    );
};
