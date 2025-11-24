import React from "react";
import { useNavigate } from "react-router-dom";

interface WorkCardProps {
    id: string;
    icon: string;
    title: string;
    description: string;
    image: string;
    className?: string;
    delay?: number;
}

export const WorkCard: React.FC<WorkCardProps> = ({
    id,
    icon,
    title,
    description,
    image,
    className = "",
    delay = 0,
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/project/${id}`);
    };

    return (
        <div
            onClick={handleClick}
            className={`group relative bg-[#f5f5f5] rounded-3xl p-8 overflow-hidden cursor-pointer transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-2xl ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Arrow Icon */}
            <div className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2">
                <svg
                    width="32"
                    height="32"
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
            <div className="relative z-10 mb-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white text-2xl font-bold transition-transform duration-500 group-hover:rotate-6">
                        {icon}
                    </div>
                    <h3 className="text-4xl font-bold text-black">{title}</h3>
                </div>
                <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Image */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-700 pointer-events-none" />
        </div>
    );
};
