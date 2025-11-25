import React from "react";
import { useReducer } from "react";
import { InputIcons } from "./InputIcons";

interface Props {
    showIcon?: boolean;
    label?: string;
    type?: "primary" | "secondary";
    stateProp?: "hover" | "default";
    size?: "big";
    className?: string;
    inputIconsPropertyArrowUp?: string;
    divClassName?: string;
    onClick?: () => void;
}

export const Button = ({
    showIcon = true,
    label = "Button",
    type,
    stateProp,
    size,
    className = "",
    inputIconsPropertyArrowUp = "https://c.animaapp.com/micbs5ufL1AjdE/img/input-icons.svg",
    divClassName = "",
    onClick,
}: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, {
        type: type || "secondary",
        state: stateProp || "default",
        size: size || "big",
    });

    return (
        <div
            className={`w-[134px] flex items-center gap-2 px-6 py-2.5 h-11 rounded-xl justify-center relative cursor-pointer transition-colors duration-200 ${state.type === "secondary" ? "border border-solid" : ""
                } ${state.state === "default" && state.type === "secondary"
                    ? "border-black/20 bg-white hover:border-black/50"
                    : state.type === "secondary" && state.state === "hover"
                        ? "border-black/50 bg-white"
                        : ""
                } ${state.type === "primary"
                    ? "bg-black text-white hover:bg-gray-800"
                    : "text-black"
                } ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
            onClick={onClick}
        >
            {showIcon && (
                <InputIcons
                    className="!relative !left-[unset] !top-[unset]"
                    property1="arrow-up-right"
                    propertyArrowUp={inputIconsPropertyArrowUp}
                    size="big"
                />
            )}

            <div
                className={`font-bold text-sm tracking-normal leading-normal whitespace-nowrap relative ${divClassName || (
                    state.type === "secondary" && state.state === "hover"
                        ? "text-black"
                        : state.type === "primary"
                            ? "text-white"
                            : "text-gray-700"
                )}`}
            >
                {label}
            </div>
        </div>
    );
};

function reducer(state: any, action: any) {
    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                state: "hover",
            };

        case "mouse_leave":
            return {
                ...state,
                state: "default",
            };
    }

    return state;
}
