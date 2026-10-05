import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { EASE_OUT } from "../lib/motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { ImageWithFallback } from "./ImageWithFallback";

interface WorkCardProps {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    imageFit?: "cover" | "contain";
    imageAspect?: "16/9" | "8/5";
    className?: string;
}

export const WorkCard: React.FC<WorkCardProps> = ({
    id,
    title,
    subtitle,
    description,
    image,
    imageFit = "cover",
    imageAspect = "16/9",
    className = "",
}) => {
    const navigate = useNavigate();
    const prefersReducedMotion = usePrefersReducedMotion();

    const handleClick = () => {
        navigate(`/project/${id}`);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`group relative grid w-full cursor-pointer overflow-hidden rounded-[28px] bg-white p-3 text-left transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 active:scale-[0.99] md:min-h-[min(78svh,720px)] md:grid-cols-[0.85fr_1.15fr] md:gap-3 ${className}`}
        >
            {/* Content */}
            <div className="order-2 flex flex-col justify-between p-4 md:order-1 md:p-7">
                <div>
                    <h3 className="text-[clamp(1.75rem,1.1rem+1.8vw,2.75rem)] font-bold leading-[0.98] tracking-[-0.04em] text-gray-900">
                        {title}
                    </h3>
                    {subtitle && (
                        <p className="mt-4 max-w-md text-base leading-snug text-gray-900 md:text-lg">
                            {subtitle}
                        </p>
                    )}
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 md:text-[15px]">
                        {description}
                    </p>
                </div>
                <span className="mt-8 grid h-11 w-11 place-items-center rounded-full bg-gray-900 text-white transition-transform duration-500 group-hover:-rotate-45">
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
            </div>

            {/* Image — opens from a slight inset, echoing the hero panel */}
            <motion.div
                initial={prefersReducedMotion ? false : { clipPath: "inset(7% 7% 7% 7% round 20px)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0% round 20px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease: EASE_OUT }}
                className={`relative order-1 w-full overflow-hidden rounded-[20px] md:order-2 ${
                    imageFit === "contain"
                        ? `${imageAspect === "8/5" ? "aspect-[8/5]" : "aspect-video"} self-center bg-paper`
                        : "h-[220px] md:h-full md:min-h-[420px]"
                }`}
            >
                <ImageWithFallback
                    src={image}
                    alt={title}
                    fallbackInitial={title.charAt(0)}
                    wrapperClassName="w-full h-full"
                    className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] ${imageFit === "contain" ? "object-contain" : "object-cover"}`}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 92vw, 900px"
                />
            </motion.div>
        </button>
    );
};
