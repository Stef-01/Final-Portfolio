import React from "react";
import { Check } from "./Check";
import { Button } from "./Button";

interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
    className?: string;
    delay?: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({
    title,
    price,
    features,
    isPopular = false,
    className = "",
    delay = 0,
}) => {
    return (
        <div
            className={`relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${isPopular ? "border-2 border-black" : "border border-gray-100"
                } ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {isPopular && (
                <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                    POPULAR
                </div>
            )}

            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{price}</span>
                <span className="text-gray-500">/project</span>
            </div>

            <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <div className="relative w-5 h-5 mt-0.5">
                            <Check className="!static !w-5 !h-5" />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                ))}
            </div>

            <div className="w-full">
                <Button
                    type={isPopular ? "primary" : "secondary"}
                    label="Get Started"
                    className="!w-full"
                    showIcon={false}
                />
            </div>
        </div>
    );
};
