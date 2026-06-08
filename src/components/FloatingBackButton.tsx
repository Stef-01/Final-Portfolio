import React from "react";
import { ArrowLeft } from "lucide-react";
import { useGoBack } from "../hooks/useGoBack";

export const FloatingBackButton: React.FC = () => {
    const goBack = useGoBack();

    return (
        <button
            type="button"
            onClick={goBack}
            className="flex fixed bottom-8 right-8 z-40 p-4 bg-black text-white text-sm md:text-base rounded-full shadow-2xl hover:bg-gray-800 transition-all hover:scale-110 group"
            aria-label="Back"
        >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
    );
};
