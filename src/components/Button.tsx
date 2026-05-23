import React from "react";
import { ArrowUpRight } from "lucide-react";

interface Props {
    showIcon?: boolean;
    label?: string;
    type?: "primary" | "secondary";
    className?: string;
    onClick?: () => void;
}

export const Button = ({
    showIcon = true,
    label = "Button",
    type = "secondary",
    className = "",
    onClick,
}: Props): JSX.Element => {
    const isPrimary = type === "primary";
    return (
        <button
            type="button"
            onClick={onClick}
            className={`w-[134px] flex items-center gap-2 px-6 py-2.5 h-11 rounded-xl justify-center relative cursor-pointer transition-colors duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 ${
                isPrimary
                    ? "bg-black text-white hover:bg-gray-800"
                    : "border border-solid border-black/20 bg-white text-gray-700 hover:border-black/50 hover:text-black"
            } ${className}`}
        >
            {showIcon && <ArrowUpRight className="w-6 h-6" aria-hidden="true" />}
            <span className="font-bold text-sm tracking-normal leading-normal whitespace-nowrap">
                {label}
            </span>
        </button>
    );
};
