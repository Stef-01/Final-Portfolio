import React from "react";

interface Props {
    brand: "bolt" | "open-AI" | "anthropic" | "anima-logo" | "replit";
    className?: string;
    vectorClassName?: string;
    vector?: string;
}

export const BrandsLogos = ({
    brand,
    className = "",
    vectorClassName = "",
    vector = "https://c.animaapp.com/micbs5ufL1AjdE/img/vector-4.svg",
}: Props): JSX.Element => {
    return (
        <div
            className={`relative bg-no-repeat bg-contain ${brand === "replit"
                    ? "w-[101px] bg-[url(https://c.animaapp.com/micbs5ufL1AjdE/img/vector-1.svg)]"
                    : brand === "open-AI"
                        ? "w-[98px] bg-[url(https://c.animaapp.com/micbs5ufL1AjdE/img/vector-2.svg)]"
                        : brand === "anthropic"
                            ? "w-[141px] h-4 bg-[url(https://c.animaapp.com/micbs5ufL1AjdE/img/vector-3.svg)]"
                            : brand === "anima-logo"
                                ? "w-[82px]"
                                : "w-14 bg-[url(https://c.animaapp.com/micbs5ufL1AjdE/img/vector.svg)]"
                } ${brand !== "anthropic" ? "h-6" : ""} ${className}`}
        >
            {brand === "anima-logo" && (
                <img
                    className={`absolute w-[81px] h-6 top-0 left-0 ${vectorClassName}`}
                    alt="Vector"
                    src={vector}
                />
            )}
        </div>
    );
};
