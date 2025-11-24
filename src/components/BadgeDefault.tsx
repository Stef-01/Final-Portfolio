import React from "react";

interface Props {
    showIcon?: boolean;
    className?: string;
    labelClassName?: string;
    text?: string;
}

export const BadgeDefault = ({
    showIcon = true,
    className = "",
    labelClassName = "",
    text = "Bring multiple screens from Figma",
}: Props): JSX.Element => {
    return (
        <div
            className={`inline-flex h-8 items-center justify-center gap-2 px-3 py-1.5 relative bg-white rounded-3xl border border-solid border-black/10 backdrop-blur-[2.5px] backdrop-brightness-[100%] ${className}`}
        >
            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                <p
                    className={`relative w-fit mt-[-1.00px] font-sans font-normal text-black text-[13px] tracking-[0] leading-[normal] ${labelClassName}`}
                >
                    {text}
                </p>
            </div>
        </div>
    );
};
