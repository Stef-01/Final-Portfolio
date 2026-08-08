import React from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useGoBack } from "../hooks/useGoBack";
import { SPRING_HOVER } from "../motion/tokens";

export const FloatingBackButton: React.FC = () => {
    const goBack = useGoBack();

    return (
        <motion.button
            type="button"
            onClick={goBack}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={SPRING_HOVER}
            className="flex fixed bottom-8 right-8 z-40 p-4 bg-black text-white text-sm md:text-base rounded-full shadow-2xl hover:bg-gray-800 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
            aria-label="Back"
        >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform motion-reduce:transition-none" />
        </motion.button>
    );
};
