import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { unsplash_tool } from "../tools";

interface Project {
  id: number;
  title: string;
  icon: string;
  description: string;
  images: string[];
  backgroundColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ruby",
    icon: "💎",
    description: "Reimagining website for B2B banking solution with a mature look and feel to meet modern e-commerce needs.",
    images: [],
    backgroundColor: "#f5f5f5"
  },
  {
    id: 2,
    title: "Stimulate",
    icon: "⚡",
    description: "New vibrant brand for a full-cycle marketing agency enhancing retention revenue for online retailers.",
    images: [],
    backgroundColor: "#f0f4f8"
  },
  {
    id: 3,
    title: "Quanta",
    icon: "◎",
    description: "Creating a credible digital presence with a new website for a modern tech company.",
    images: [],
    backgroundColor: "#fafafa"
  },
  {
    id: 4,
    title: "Reward Point",
    icon: "👤",
    description: "Brand sprint showcasing a logo and dynamic illustrations for a B2B/B2C solution revolutionizing the cash-back process.",
    images: [],
    backgroundColor: "#f8f9fa"
  }
];

export function LatestWork() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="box-border content-stretch flex flex-col gap-[80px] items-center justify-start p-0 relative shrink-0 max-w-[1440px] w-full px-8 py-20">
      {/* Header */}
      <motion.div
        className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 max-w-[750px] w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
          <div className="relative shrink-0 size-[17px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 17 17"
            >
              <path
                d="M8.5 0L10.2451 6.75486L17 8.5L10.2451 10.2451L8.5 17L6.75486 10.2451L0 8.5L6.75486 6.75486L8.5 0Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="font-['Clash_Grotesk:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[24px] text-center text-nowrap">
            <p className="block leading-[1.116] whitespace-pre">My Latest Work</p>
          </div>
        </div>
        <div
          className="font-['Clash_Grotesk:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[62px] text-center"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[1.116]">
            Unveiling Thoughtful and Impactful Innovations
          </p>
        </div>
      </motion.div>

      {/* Project Cards */}
      <div className="flex flex-col gap-16 w-full items-center">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative max-w-[1100px] w-full group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            onHoverStart={() => setHoveredId(project.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <motion.div
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-[32px] overflow-visible cursor-pointer"
              animate={{
                y: hoveredId === project.id ? -8 : 0,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                boxShadow: hoveredId === project.id
                  ? "0 20px 60px -10px rgba(0, 0, 0, 0.15), 0 8px 20px -6px rgba(0, 0, 0, 0.1)"
                  : "0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.05)"
              }}
            >
              {/* Content Container */}
              <div className="p-12 pb-8">
                {/* Header Section */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-5">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center text-[28px] shadow-lg"
                      animate={{
                        rotate: hoveredId === project.id ? [0, -5, 5, 0] : 0
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[48px] text-gray-900 leading-none mb-2">
                        {project.title}
                      </h3>
                      <p className="font-['Clash_Grotesk:Regular',_sans-serif] text-[17px] text-gray-600 leading-relaxed max-w-[650px]">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center cursor-pointer flex-shrink-0"
                    animate={{
                      scale: hoveredId === project.id ? 1.1 : 1,
                      rotate: hoveredId === project.id ? -45 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Images Section */}
                <div className="mt-8">
                  <div className="flex gap-5">
                    {/* Image 1 */}
                    <motion.div
                      className="relative rounded-[20px] overflow-hidden shadow-lg"
                      style={{
                        width: "55%",
                        aspectRatio: "16/10"
                      }}
                      animate={{
                        scale: hoveredId === project.id ? 1.02 : 1
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <div
                        className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
                      >
                        <div className="text-center">
                          <div className="text-[56px] mb-3 opacity-90">{project.icon}</div>
                          <div className="font-['Clash_Grotesk:Semibold',_sans-serif] text-white text-[28px] opacity-90">
                            {project.title}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Image 2 */}
                    <motion.div
                      className="relative rounded-[20px] overflow-hidden shadow-lg"
                      style={{
                        width: "45%",
                        aspectRatio: "4/3"
                      }}
                      animate={{
                        scale: hoveredId === project.id ? 1.02 : 1
                      }}
                      transition={{ duration: 0.4, delay: 0.05 }}
                    >
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{
                          background: index === 0
                            ? "linear-gradient(135deg, #047857 0%, #10b981 100%)"
                            : index === 1
                            ? "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)"
                            : index === 2
                            ? "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)"
                            : "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)"
                        }}
                      >
                        <div className="text-white/90 text-[72px]">
                          {index === 1 ? "⚡" : index === 2 ? "◎" : index === 3 ? "🎁" : "💼"}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Subtle top accent line */}
              <motion.div
                className="absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-transparent via-gray-900 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: hoveredId === project.id ? 1 : 0,
                  opacity: hoveredId === project.id ? 0.1 : 0
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
