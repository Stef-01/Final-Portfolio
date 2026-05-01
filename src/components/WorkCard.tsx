import React from "react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "./ImageWithFallback";

interface WorkCardProps {
    id: string;
    icon: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    tags?: string[];
    className?: string;
}

export const WorkCard: React.FC<WorkCardProps> = ({
    id,
    icon,
    title,
    subtitle,
    description,
    image,
    tags = [],
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
            className={`group relative w-full text-left bg-[#f5f5f5] rounded-3xl p-4 md:p-6 overflow-hidden cursor-pointer transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 active:scale-[0.99] ${className}`}
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
            <div className="relative z-10 mb-6">
                <div className="flex items-center gap-3 mb-4 md:mb-5 pr-10 md:pr-0">
                    <div className="w-10 h-10 md:w-11 md:h-11 bg-black rounded-xl flex items-center justify-center text-white text-lg md:text-xl font-bold transition-transform duration-500 group-hover:rotate-6">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-xl md:text-3xl font-bold text-black">{title}</h3>
                        {subtitle && (
                            <p className="mt-0.5 max-w-xl text-xs md:text-sm text-gray-500">{subtitle}</p>
                        )}
                    </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 max-w-xl leading-relaxed">
                    {description}
                </p>
                {tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="rounded-full border border-black/10 bg-white/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Image */}
            <div className="relative w-full h-[180px] md:h-[300px] rounded-2xl overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105">
                <ImageWithFallback
                    src={image}
                    alt={title}
                    fallbackInitial={icon}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover"
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
