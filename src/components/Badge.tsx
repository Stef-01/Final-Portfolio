import React from "react";
import { User } from "lucide-react";

interface Props {
    showIcon?: boolean;
    label?: string;
    className?: string;
}

export const Badge = ({
    showIcon = true,
    label = "Bring multiple screens from Figma",
    className = "",
}: Props): JSX.Element => {
    return (
        <div
            className={`inline-flex h-8 items-center justify-center gap-1.5 px-2 py-1 relative bg-white rounded-xl border border-solid border-black/10 ${className}`}
        >
            {showIcon && <User className="w-[18px] h-[18px] text-black" aria-hidden="true" />}
            <p className="font-normal text-black text-xs tracking-normal leading-normal whitespace-nowrap">
                {label}
            </p>
        </div>
    );
};
