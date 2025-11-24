import React from "react";
import { InputIcons } from "./InputIcons";

interface Props {
    showIcon?: boolean;
    label?: string;
    state?: "default";
    className?: string;
}

export const Badge = ({
    showIcon = true,
    label = "Bring multiple screens from Figma",
    state,
    className = "",
}: Props): JSX.Element => {
    return (
        <div
            className={`inline-flex h-8 items-center justify-center gap-1 pt-1 pr-1 pb-1 pl-1 relative bg-white/80 rounded-xl border border-solid border-black/10 backdrop-blur-[2.5px] backdrop-brightness-[100%] ${className}`}
        >
            {showIcon && (
                <InputIcons
                    className="!mt-[-5.00px] !mb-[-5.00px] !relative !left-[unset] !top-[unset]"
                    property1="user"
                    propertyUserSize="https://c.animaapp.com/micbs5ufL1AjdE/img/input-icons-4.svg"
                    size="medium"
                />
            )}

            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] mt-[-4.00px] mb-[-4.00px]">
                <p className="relative w-fit mt-[-1.00px] font-normal text-black text-xs tracking-normal leading-normal whitespace-nowrap">
                    {label}
                </p>
            </div>
        </div>
    );
};
