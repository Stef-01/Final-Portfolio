import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const FloatingBackButton: React.FC = () => {
    return (
        <Link
            to="/"
            className="hidden md:flex fixed bottom-8 right-8 z-40 p-4 bg-black text-white rounded-full shadow-2xl hover:bg-gray-800 transition-all hover:scale-110 group"
            aria-label="Back to Home"
        >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </Link>
    );
};
