import React from "react";

interface QuoteCardProps {
    quote: string;
    author: string;
    role: string;
    image: string;
    className?: string;
    delay?: number;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({
    quote,
    author,
    role,
    image,
    className = "",
    delay = 0,
}) => {
    return (
        <div
            className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="mb-6">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="text-gray-200"
                >
                    <path
                        d="M10 20H0V0H20V20H10V40H0V20H10ZM30 20H20V0H40V20H30V40H20V20H30Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            <p className="text-lg font-medium text-gray-800 mb-8 leading-relaxed">
                "{quote}"
            </p>

            <div className="flex items-center gap-4">
                <img
                    src={image}
                    alt={author}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h4 className="font-bold text-gray-900">{author}</h4>
                    <p className="text-sm text-gray-500">{role}</p>
                </div>
            </div>
        </div>
    );
};
