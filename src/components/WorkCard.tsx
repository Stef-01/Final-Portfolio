import React from "react";
import { useNavigate } from "react-router-dom";
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

    const handleClick = () => {
        navigate(`/project/${id}`);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`group relative grid w-full cursor-pointer overflow-hidden rounded-[32px] border border-black/5 bg-[#f5f5f5] p-5 text-center transition-all duration-700 ease-out hover:scale-[1.01] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 active:scale-[0.99] md:min-h-[min(78svh,720px)] md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12 md:p-10 ${className}`}
        >
            {/* Arrow Icon */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 w-9 h-9 flex items-center justify-center transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
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
                    <p className="mt-3 text-xs font-medium leading-relaxed text-gray-700">
                        {subtitle}
                    </p>
                )}
                <div className="mx-auto my-4 h-px w-10 bg-black/15" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-gray-600">
                    {description}
                </p>
            </div>

            {/* Image */}
            <div
                className={`relative w-full overflow-hidden rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.025] ${
                    imageFit === "contain"
                        ? `${imageAspect === "8/5" ? "aspect-[8/5]" : "aspect-video"} self-center bg-white`
                        : "h-[180px] md:h-full md:min-h-[420px]"
                }`}
            >
                <ImageWithFallback
                    src={image}
                    alt={title}
                    fallbackInitial={title.charAt(0)}
                    wrapperClassName="w-full h-full"
                    className={`h-full w-full ${imageFit === "contain" ? "object-contain" : "object-cover"}`}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 92vw, 900px"
                />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-700 pointer-events-none" />
        </button>
    );
};
