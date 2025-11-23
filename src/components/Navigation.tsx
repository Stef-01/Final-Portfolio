import { motion } from "motion/react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { name: "Home", id: "home" },
  { name: "Resume", id: "resume" },
  { name: "Publications", id: "publications" },
  { name: "Conferences", id: "conferences" }
];

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="flex gap-8">
      {navItems.map((item, index) => (
        <motion.button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`font-['Clash_Grotesk:Medium',_sans-serif] text-[18px] relative transition-colors ${
            currentPage === item.id ? "text-[#EBFF57]" : "text-white hover:text-[#EBFF57]"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -2 }}
        >
          {item.name}
          {currentPage === item.id && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#EBFF57]"
              layoutId="underline"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </nav>
  );
}
