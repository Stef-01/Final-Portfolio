import React from "react";

interface FeatureCardProps {
    title: string;
    description: string;
    image: string;
    className?: string;
    delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    image,
    className = "",
    delay = 0,
}) => {
    return (
        <div
            className={`relative bg-white rounded-3xl p-8 overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
            </div>
            <div className="relative w-full h-48 rounded-2xl overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
            </div>
        </div>
    );
};
