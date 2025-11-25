import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function ModernHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 pt-32 pb-20">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gray-100/80 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-['Clash_Grotesk:Medium',_sans-serif] text-[15px] text-gray-700">
              Stefan Thottunkal
            </span>
          </motion.div>

          <motion.h1
            className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[72px] md:text-[96px] leading-[1.1] text-gray-900 max-w-[1000px] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Crafting Digital
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Experiences
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="font-['Clash_Grotesk:Regular',_sans-serif] text-[20px] text-gray-600 max-w-[650px] mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I partner up with dynamic founders reinventing tomorrow, from YC startups to enterprises and bootstrapped guys.
          </motion.p>

          <motion.div
            className="flex gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-['Clash_Grotesk:Medium',_sans-serif] text-[17px] flex items-center gap-3 shadow-lg shadow-gray-900/10"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-['Clash_Grotesk:Medium',_sans-serif] text-[17px] hover:border-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 grid grid-cols-3 gap-8 max-w-[900px] mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {[
            { icon: "✨", label: "branding", color: "from-yellow-200 to-amber-200" },
            { icon: "🎨", label: "design", color: "from-pink-200 to-purple-200" },
            { icon: "⚡", label: "development", color: "from-green-200 to-emerald-200" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className={`bg-gradient-to-br ${item.color} rounded-[24px] p-8 aspect-square flex flex-col items-center justify-center gap-3 transition-transform group-hover:scale-105`}>
                <div className="text-[48px]">{item.icon}</div>
                <div className="font-['Clash_Grotesk:Medium',_sans-serif] text-[18px] text-gray-900">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-pink-200/40 to-yellow-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
    </div>
  );
}
