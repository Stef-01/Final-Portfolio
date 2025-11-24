import React from "react";
import { useReducer } from "react";

interface Props {
    stateProp?: "off" | "on";
    className?: string;
    onClick?: () => void;
}

export const Toggle = ({ stateProp, className = "", onClick }: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, {
        state: stateProp || "off",
    });

    return (
        <div
            className={`w-[42px] flex items-center p-[2.82px] rounded-full relative cursor-pointer transition-colors duration-200 ${state.state === "on" ? "justify-end bg-black" : "bg-gray-200"
                } ${className}`}
            onClick={() => {
                dispatch("click");
                onClick?.();
            }}
        >
            <div className="w-[18.35px] h-[18.35px] rounded-full bg-white relative shadow-sm" />
        </div>
    );
};

function reducer(state: any, action: any) {
    if (state.state === "off") {
        switch (action) {
            case "click":
                return {
                    state: "on",
                };
        }
    }

    if (state.state === "on") {
        switch (action) {
            case "click":
                return {
                    state: "off",
                };
        }
    }

    return state;
}
