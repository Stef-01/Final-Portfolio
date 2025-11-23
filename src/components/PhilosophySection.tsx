import { motion } from "motion/react";
import { Sparkles, Activity, Dna, Microscope, Stethoscope, Brain } from "lucide-react";

const wordBoxes = [
  { 
    text: "pharmacogenomics", 
    color: "from-blue-400 to-purple-400",
    icon: Dna,
    delay: 0.2,
    x: -140,
    y: -90,
    rotate: -15,
    scale: 1.1
  },
  { 
    text: "AI healthcare", 
    color: "from-green-400 to-emerald-400",
    icon: Brain,
    delay: 0.4,
    x: 40,
    y: -110,
    rotate: 12,
    scale: 0.9
  },
  { 
    text: "health systems", 
    color: "from-yellow-400 to-amber-400",
    icon: Activity,
    delay: 0.6,
    x: -30,
    y: 30,
    rotate: -8,
    scale: 1.2
  },
  { 
    text: "indigenous health", 
    color: "from-purple-400 to-pink-400",
    icon: Sparkles,
    delay: 0.3,
    x: -180,
    y: 50,
    rotate: -18,
    scale: 1
  },
  { 
    text: "precision medicine", 
    color: "from-orange-400 to-red-400",
    icon: Microscope,
    delay: 0.5,
    x: 100,
    y: 70,
    rotate: 15,
    scale: 1.15
  },
  { 
    text: "digital health", 
    color: "from-teal-400 to-cyan-400",
    icon: Stethoscope,
    delay: 0.35,
    x: 70,
    y: -50,
    rotate: 8,
    scale: 0.95
  }
];

export function PhilosophySection() {
  return (
    <div className="w-full max-w-[1400px] px-8 py-20">
      <div className="flex flex-row items-center justify-between gap-20">
        {/* Left side - Animated Browser Window */}
        <motion.div 
          className="relative w-[550px] h-[450px] flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Browser Window */}
          <motion.div 
            className="relative w-[340px] h-[240px] mx-auto"
            initial={{ scale: 0.8, rotate: -3 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
          >
            {/* Window Frame with glow */}
            <motion.div 
              className="absolute inset-0 bg-white rounded-lg border-4 border-black shadow-2xl overflow-hidden"
              whileInView={{ 
                boxShadow: [
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  "0 25px 50px -12px rgba(235, 255, 87, 0.4)",
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                ]
              }}
              viewport={{ once: true }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              {/* Browser Top Bar */}
              <div className="h-8 bg-gray-100 border-b-2 border-black flex items-center px-3 gap-2">
                <div className="flex gap-1.5">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-red-500 border border-black"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-yellow-500 border border-black"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-500 border border-black"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
              </div>
              {/* Window Content with gradient */}
              <div className="h-[calc(100%-32px)] bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
            </motion.div>

            {/* Animated Word Boxes */}
            {wordBoxes.map((box, index) => {
              const Icon = box.icon;
              return (
                <motion.div
                  key={box.text}
                  className={`absolute top-1/2 left-1/2 px-5 py-2.5 rounded-full bg-gradient-to-r ${box.color} shadow-lg border-2 border-black cursor-pointer`}
                  initial={{ 
                    x: -170,
                    y: -120,
                    scale: 0,
                    rotate: 0,
                    opacity: 0
                  }}
                  whileInView={{ 
                    x: box.x,
                    y: box.y,
                    scale: box.scale,
                    rotate: box.rotate,
                    opacity: 1
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: box.delay,
                    type: "spring",
                    stiffness: 80,
                    damping: 10
                  }}
                  whileHover={{
                    scale: box.scale * 1.15,
                    rotate: box.rotate + 8,
                    y: box.y - 10,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 }
                  }}
                  animate={{
                    y: [box.y, box.y - 8, box.y],
                    rotate: [box.rotate, box.rotate + 3, box.rotate]
                  }}
                  // @ts-ignore
                  transition={{
                    duration: 3 + index * 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </motion.div>
                    <span className="font-['Clash_Grotesk:Semibold',_sans-serif] text-white text-[15px] whitespace-nowrap">
                      {box.text}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Stefan Thottunkal Signature with bounce */}
            <motion.div
              className="absolute bottom-[-30px] right-[-20px] px-4 py-2 bg-[#EBFF57] rounded-full border-2 border-black shadow-lg"
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7, type: "spring", bounce: 0.6 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 0,
                transition: { duration: 0.2 }
              }}
              animate={{
                y: [0, -5, 0],
                rotate: [-8, -5, -8]
              }}
              // @ts-ignore
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <span className="font-['Caveat',_cursive] text-black text-[20px]">
                Stefan T.
              </span>
            </motion.div>

            {/* Decorative Arrow with more life */}
            <motion.div
              className="absolute bottom-[-40px] right-[60px]"
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 1, pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              animate={{
                x: [0, 3, 0],
                y: [0, -2, 0]
              }}
              // @ts-ignore
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                <motion.path
                  d="M 5 5 Q 25 15, 45 8"
                  stroke="black"
                  strokeWidth="2.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                />
                <motion.path
                  d="M 45 8 L 40 3 M 45 8 L 42 13"
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                />
              </svg>
            </motion.div>

            {/* Sparkle effects */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-2 h-2 bg-[#EBFF57] rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 20}%`
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  repeatType: "loop"
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Philosophy Text */}
        <motion.div 
          className="flex-1 max-w-[550px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.p 
              className="font-['Clash_Grotesk:Regular',_sans-serif] text-gray-300 text-[20px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I partner with healthcare innovators, researchers, and communities to reimagine health systems — from AI-powered precision medicine tools to equitable implementation strategies for Indigenous health.
            </motion.p>
            
            <motion.p 
              className="font-['Clash_Grotesk:Medium',_sans-serif] text-white text-[22px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              My mission: to design frictionless, human-centered digital health experiences that bridge cutting-edge technology with compassionate care, advancing health equity and transforming patient outcomes through evidence-based innovation.
            </motion.p>

            {/* Decorative Yellow Accent */}
            <motion.div
              className="w-20 h-1 bg-[#EBFF57] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
