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
    <div className="box-border content-stretch flex flex-col gap-[60px] items-center justify-start p-0 relative shrink-0 max-w-[1720px] w-full px-8">
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
      <div className="flex flex-col gap-10 w-full items-center">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative max-w-[900px] w-full cursor-pointer"
            initial={{ opacity: 0, y: 80, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              type: "spring",
              stiffness: 80
            }}
            onHoverStart={() => setHoveredId(project.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <motion.div
              className="bg-[#f5f5f5] rounded-[40px] overflow-hidden shadow-2xl"
              style={{ backgroundColor: project.backgroundColor }}
              animate={{
                y: hoveredId === project.id ? -10 : 0,
                scale: hoveredId === project.id ? 1.02 : 1,
              }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
            >
              {/* Header Section */}
              <div className="p-10 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-[24px]">
                      {project.icon}
                    </div>
                    <h3 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[42px] text-black">
                      {project.title}
                    </h3>
                  </div>
                  <motion.div
                    className="w-14 h-14 rounded-full bg-black flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: -45 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <p className="font-['Clash_Grotesk:Regular',_sans-serif] text-[18px] text-gray-600 leading-relaxed max-w-[700px]">
                  {project.description}
                </p>
              </div>

              {/* Images Section */}
              <div className="px-10 pb-10">
                <motion.div 
                  className="flex gap-4 overflow-hidden"
                  animate={{
                    x: hoveredId === project.id ? -10 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Image 1 - Larger */}
                  <motion.div
                    className="relative rounded-2xl overflow-hidden flex-shrink-0 shadow-xl"
                    style={{
                      width: index % 2 === 0 ? "420px" : "320px",
                      height: "280px"
                    }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white"
                    >
                      <div className="text-center p-8">
                        <div className="text-[48px] mb-2">{project.icon}</div>
                        <div className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[32px]">
                          {project.title}
                        </div>
                        <div className="font-['Clash_Grotesk:Regular',_sans-serif] text-[14px] text-gray-400 mt-2">
                          View Project
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Image 2 - Smaller or Larger based on index */}
                  <motion.div
                    className="relative rounded-2xl overflow-hidden flex-shrink-0 shadow-xl"
                    style={{
                      width: index % 2 === 0 ? "320px" : "480px",
                      height: "280px"
                    }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        background: index === 0 
                          ? "linear-gradient(135deg, #1a5f3f 0%, #2d8659 100%)"
                          : index === 1
                          ? "linear-gradient(135deg, #4338ca 0%, #7c3aed 100%)"
                          : index === 2
                          ? "linear-gradient(135deg, #1e293b 0%, #475569 100%)"
                          : "linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)"
                      }}
                    >
                      <div className="text-white/80 text-[64px]">
                        {index === 1 ? "⚡" : index === 2 ? "◎" : index === 3 ? "🎁" : "💼"}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-[40px] pointer-events-none"
                style={{
                  border: "2px solid transparent",
                }}
                animate={{
                  borderColor: hoveredId === project.id 
                    ? "rgba(235, 255, 87, 0.5)" 
                    : "rgba(0, 0, 0, 0.05)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Card stack effect - shadow cards behind */}
            <motion.div
              className="absolute inset-0 bg-white/50 rounded-[40px] -z-10"
              style={{
                top: "12px",
                left: "12px",
                right: "-12px",
                bottom: "-12px",
              }}
              animate={{
                y: hoveredId === project.id ? 8 : 6,
                opacity: hoveredId === project.id ? 0.8 : 0.5
              }}
            />
            <motion.div
              className="absolute inset-0 bg-white/30 rounded-[40px] -z-20"
              style={{
                top: "24px",
                left: "24px",
                right: "-24px",
                bottom: "-24px",
              }}
              animate={{
                y: hoveredId === project.id ? 16 : 12,
                opacity: hoveredId === project.id ? 0.6 : 0.3
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
