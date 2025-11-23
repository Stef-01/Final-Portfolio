import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";

interface ScrapbookItem {
  id: number;
  title: string;
  description: string;
  image: string;
  rotation: number;
  position: { x: number; y: number };
  backgroundColor: string;
  content: string;
  size: { width: number; height: number };
  zIndex: number;
}

const scrapbookItems: ScrapbookItem[] = [
  {
    id: 1,
    title: "Swiss Knife",
    description: "Language learning",
    image: "",
    rotation: -12,
    position: { x: 80, y: 120 },
    backgroundColor: "#fff4e6",
    content: "A comprehensive language learning platform that adapts to your learning style. Features include interactive lessons, real-time pronunciation feedback, and cultural insights.",
    size: { width: 180, height: 220 },
    zIndex: 1
  },
  {
    id: 2,
    title: "Customer Journey",
    description: "CRM Platform",
    image: "",
    rotation: 15,
    position: { x: 1350, y: 80 },
    backgroundColor: "#e8f5e9",
    content: "Revolutionizing customer relationship management with intuitive journey mapping, automated workflows, and predictive analytics for better customer engagement.",
    size: { width: 240, height: 200 },
    zIndex: 1
  },
  {
    id: 3,
    title: "Icon Set",
    description: "Playful shapes",
    image: "",
    rotation: -18,
    position: { x: 120, y: 480 },
    backgroundColor: "#f3e5f5",
    content: "A collection of modern, minimalist icons designed for web and mobile applications. Each icon is crafted with attention to detail and optimized for various screen sizes.",
    size: { width: 200, height: 180 },
    zIndex: 1
  },
  {
    id: 4,
    title: "Badges",
    description: "Gamification",
    image: "",
    rotation: 8,
    position: { x: 100, y: 720 },
    backgroundColor: "#fff9c4",
    content: "Gamification badges and rewards system for increasing user engagement. Includes achievement tracking, progress indicators, and social sharing features.",
    size: { width: 160, height: 240 },
    zIndex: 1
  },
  {
    id: 5,
    title: "Build Web",
    description: "No-code builder",
    image: "",
    rotation: -6,
    position: { x: 700, y: 680 },
    backgroundColor: "#e3f2fd",
    content: "A no-code website builder that empowers users to create stunning websites without writing a single line of code. Drag, drop, and publish.",
    size: { width: 220, height: 190 },
    zIndex: 1
  },
  {
    id: 6,
    title: "Deep Dive",
    description: "Tech stack explorer",
    image: "",
    rotation: 12,
    position: { x: 1280, y: 600 },
    backgroundColor: "#e0f2f1",
    content: "Comprehensive technical documentation and learning platform. Explore any technology stack with in-depth tutorials, code examples, and best practices.",
    size: { width: 210, height: 210 },
    zIndex: 1
  },
  {
    id: 7,
    title: "Finance App",
    description: "Budget tracking",
    image: "",
    rotation: -8,
    position: { x: 1250, y: 320 },
    backgroundColor: "#fce4ec",
    content: "Track your finances on the go with our intuitive mobile app. Features budget planning, expense tracking, and investment monitoring all in one place.",
    size: { width: 190, height: 250 },
    zIndex: 1
  },
  {
    id: 8,
    title: "Dashboard",
    description: "Analytics UI",
    image: "",
    rotation: 10,
    position: { x: 1320, y: 820 },
    backgroundColor: "#fff3e0",
    content: "Clean and modern dashboard interface for data visualization. Real-time analytics, customizable widgets, and responsive design for all devices.",
    size: { width: 230, height: 170 },
    zIndex: 1
  },
  {
    id: 9,
    title: "Brand Kit",
    description: "Design system",
    image: "",
    rotation: -15,
    position: { x: 420, y: 150 },
    backgroundColor: "#ffeaa7",
    content: "Complete brand identity system with logos, color palettes, typography, and design guidelines for consistent brand expression.",
    size: { width: 175, height: 195 },
    zIndex: 1
  },
  {
    id: 10,
    title: "Social Hub",
    description: "Community platform",
    image: "",
    rotation: 5,
    position: { x: 480, y: 420 },
    backgroundColor: "#dfe6e9",
    content: "Connect with like-minded individuals, share content, and build communities around shared interests. Modern social networking redefined.",
    size: { width: 195, height: 215 },
    zIndex: 1
  }
];

export function ScrapbookSection() {
  const [selectedItem, setSelectedItem] = useState<ScrapbookItem | null>(null);
  const [items, setItems] = useState(scrapbookItems);
  const [draggedId, setDraggedId] = useState<number | null>(null);

  const handleDragStart = (id: number) => {
    setDraggedId(id);
    // Bring to front
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, zIndex: Math.max(...prevItems.map(i => i.zIndex)) + 1 }
          : item
      )
    );
  };

  const handleDragEnd = (id: number, event: any, info: any) => {
    setDraggedId(null);
    // Update position
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              position: {
                x: item.position.x + info.offset.x,
                y: item.position.y + info.offset.y
              }
            }
          : item
      )
    );
  };

  return (
    <div className="bg-[#0a0a0c] relative w-full min-h-screen py-20 overflow-hidden">
      {/* Central Text */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] text-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[80px] leading-[1.1] text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          On a quest to craft
          <br />
          something awesome
        </motion.h2>
        <motion.p 
          className="font-['Clash_Grotesk:Regular',_sans-serif] text-[28px] text-gray-400 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          to hone my skills or just for fun
        </motion.p>
      </motion.div>

      {/* Scrapbook Items */}
      <div className="relative w-full h-[1100px]">
        {items.map((item, index) => {
          const isDragged = draggedId === item.id;
          
          return (
            <motion.div
              key={item.id}
              className="absolute cursor-grab active:cursor-grabbing select-none"
              style={{
                left: item.position.x,
                top: item.position.y,
                zIndex: item.zIndex,
                width: item.size.width,
                height: item.size.height,
              }}
              initial={{ 
                opacity: 0, 
                scale: 0.3,
                rotate: item.rotation
              }}
              animate={{ 
                opacity: 1, 
                scale: isDragged ? 1.05 : 1,
                rotate: isDragged ? item.rotation * 0.5 : item.rotation,
              }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                rotate: item.rotation
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                type: "spring",
                stiffness: 150,
                damping: 15
              }}
              drag
              dragElastic={0.1}
              dragTransition={{ 
                bounceStiffness: 300, 
                bounceDamping: 20,
                power: 0.2
              }}
              onDragStart={() => handleDragStart(item.id)}
              onDragEnd={(event, info) => handleDragEnd(item.id, event, info)}
              whileHover={{
                scale: 1.08,
                rotate: item.rotation + (item.rotation > 0 ? 3 : -3),
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              whileTap={{
                scale: 1.12,
                cursor: "grabbing"
              }}
            >
              <motion.div 
                className="w-full h-full rounded-2xl shadow-2xl overflow-hidden relative"
                style={{ 
                  backgroundColor: item.backgroundColor,
                  borderWidth: isDragged ? '12px' : '10px',
                  borderColor: 'white',
                  borderStyle: 'solid'
                }}
                animate={{
                  boxShadow: isDragged 
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" 
                    : "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
                }}
              >
                {/* Decorative corner tape */}
                <div 
                  className="absolute top-0 right-8 w-16 h-8 bg-white/40 -translate-y-2 rotate-12 shadow-md"
                  style={{ backdropFilter: 'blur(4px)' }}
                />
                
                <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
                  {/* Click to expand button */}
                  <motion.button
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/60 hover:bg-white/80 flex items-center justify-center text-[10px] shadow-md z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItem(item);
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    +
                  </motion.button>

                  <div className="text-center">
                    <h3 className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[20px] text-gray-800 mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-['Clash_Grotesk:Regular',_sans-serif] text-[13px] text-gray-600 leading-snug">
                      {item.description}
                    </p>
                  </div>

                  {/* Fun visual elements */}
                  <div className="absolute bottom-3 left-3">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-gray-800/20"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Drag indicator - only show when hovering */}
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs whitespace-nowrap pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                Drag me!
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Playful hint text */}
      <motion.div
        className="text-center mt-8 text-gray-500 font-['Clash_Grotesk:Regular',_sans-serif] text-[18px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        ✨ Drag the cards around and click + to explore ✨
      </motion.div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl"
              initial={{ scale: 0.5, rotate: selectedItem.rotation, opacity: 0, y: 100 }}
              animate={{ scale: 1, rotate: 0, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, rotate: selectedItem.rotation, opacity: 0, y: 100 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: selectedItem.backgroundColor }}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg z-10"
                onClick={() => setSelectedItem(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 text-gray-800" />
              </motion.button>

              {/* Content */}
              <div className="space-y-6">
                <motion.h2 
                  className="font-['Clash_Grotesk:Semibold',_sans-serif] text-[42px] text-gray-900 pr-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {selectedItem.title}
                </motion.h2>
                
                <motion.p 
                  className="font-['Clash_Grotesk:Medium',_sans-serif] text-[20px] text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedItem.description}
                </motion.p>

                <motion.div 
                  className="h-px bg-gray-300"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3 }}
                />

                <motion.p 
                  className="font-['Clash_Grotesk:Regular',_sans-serif] text-[18px] text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {selectedItem.content}
                </motion.p>

                <motion.div
                  className="flex gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    className="bg-[#ebff57] px-6 py-3 rounded-full font-['Clash_Grotesk:Medium',_sans-serif] text-[#0a0a0c] text-[16px]"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(235, 255, 87, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.button>
                  <motion.button
                    className="bg-gray-800 px-6 py-3 rounded-full font-['Clash_Grotesk:Medium',_sans-serif] text-white text-[16px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
