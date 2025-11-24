import React from "react";

interface Props {
    brand: "github" | "x-twitter" | "linked-in" | "instagram";
    color: "monochrome";
    size: "medium";
    className?: string;
}

export const SocialMediaIcons = ({
    brand,
    color,
    size,
    className = "",
}: Props): JSX.Element => {
    return (
        <img
            className={`w-[18px] left-0 top-0 h-[18px] absolute ${className}`}
            alt={`Brand ${brand}`}
            src={
                brand === "x-twitter"
                    ? "https://c.animaapp.com/micbs5ufL1AjdE/img/brand-x--twitter---color-monochrome--size-medium.svg"
                    : brand === "instagram"
                        ? "https://c.animaapp.com/micbs5ufL1AjdE/img/brand-instagram--color-monochrome--size-medium.svg"
                        : brand === "github"
                            ? "https://c.animaapp.com/micbs5ufL1AjdE/img/brand-github--color-monochrome--size-medium.svg"
                            : "https://c.animaapp.com/micbs5ufL1AjdE/img/brand-linkedin--color-monochrome--size-medium.svg"
            }
        />
    );
};
