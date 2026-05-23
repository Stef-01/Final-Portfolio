import svgPaths from "./svg-a9d042udyz";
import imgHopkinsPavaCenter from "figma:asset/0ab6195dd58e68fba2b601597ac6a3d1c5449c8a.png";
import imgHopkinsUniversityLogo from "figma:asset/6d51fda445708898195c8f6705d9db08b82e8e01.png";
import imgHarvardHsil from "figma:asset/c424d2a70339b3c6e290118404ad877891b9dc29.png";
import imgHarvardUniversityLogo from "figma:asset/f70deb69cfd730589dc5541e5370747c548d6b36.png";
import imgStanfordBiodesign from "figma:asset/6e58278c27d2c792ae3c6b2e1b3f3ad2db623558.png";
import imgStanfordGsbSeed from "figma:asset/bb87ecb6f87fccb4c80834639eeac42bb0a44b0c.png";
import imgStanfordUniversityLogo from "figma:asset/7d22c5d9d743209fb003efffa0626fbc9d36609d.png";
import imgMacquarieUniversity from "figma:asset/411b1a99a326f193cf4b7d0fa45bcf19453522d4.png";
import img180DegreesConsulting from "figma:asset/e2bbbcd40f3401f8765c0558110ec847a0fd5a02.png";
import imgNationalInternships from "figma:asset/121f17a019571944facd44111913fd78c8260911.png";
import imgAustralianNationalUniversity from "figma:asset/e715f2d2de7d97eda7b4f77cf9e9c7b55072d228.png";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function MacBookPro() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  // Refs for scroll-triggered animations
  const bhlthRef = useRef(null);
  const mdRef = useRef(null);
  const msRef = useRef(null);
  const harvardRef = useRef(null);
  const hopkinsRef = useRef(null);
  
  // Track visibility of each section
  const bhlthInView = useInView(bhlthRef, { once: true, amount: 0.5 });
  const mdInView = useInView(mdRef, { once: true, amount: 0.5 });
  const msInView = useInView(msRef, { once: true, amount: 0.5 });
  const harvardInView = useInView(harvardRef, { once: true, amount: 0.6 });
  const hopkinsInView = useInView(hopkinsRef, { once: true, amount: 0.6 });

  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 14' - 1" style={{width: 3826, height: 2485, overflow: 'hidden'}}>
      {/* Timeline vertical line */}
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[2353px] top-[221px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "2021", "--transform-inner-height": "25" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#d9d9d9] h-[25px] w-[2021px]" />
        </div>
      </div>
      
      {/* Arrow at top */}
      <div className="absolute h-[182px] left-[2290px] top-[138px] w-[144px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 182">
          <path d={svgPaths.p2d9e2e80} fill="var(--fill-0, white)" id="Vector 2" />
        </svg>
      </div>

      {/* White box covering timeline behind arrow */}
      <div className="absolute bg-white h-[147px] left-[2283px] top-[199px] w-[168px]" />

      {/* BHLTH Timeline Item */}
      <motion.div 
        className="absolute cursor-pointer transition-opacity hover:opacity-95"
        style={{left: 1505, top: 35, width: 1429, height: 476}}
        onMouseEnter={() => setHoveredItem('bhlth')}
        onMouseLeave={() => setHoveredItem(null)}
        ref={bhlthRef}
        initial={{ opacity: 0, y: 100 }}
        animate={bhlthInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Australian National University - main logo */}
        <motion.div 
          className="absolute" 
          style={{width: 291, height: 453, left: 2221 - 1505, top: 35 - 35}}
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={bhlthInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -15 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 60, damping: 12 }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Australian National University" className="absolute h-full left-0 max-w-none top-0 w-[233.46%]" src={imgAustralianNationalUniversity} />
          </div>
        </motion.div>
        
        {/* National Internships - POPS OUT FROM ANU */}
        <motion.div 
          className="absolute cursor-pointer" 
          style={{width: 785, height: 124, left: 1505 - 1505, top: 387 - 35}}
          initial={{ scale: 0, x: (2221 - 1505) + 145.5 - 392.5, y: (35 - 35) + 226.5 - 62, rotate: 0 }}
          animate={bhlthInView ? { scale: 1, x: 0, y: 0, rotate: 0 } : { scale: 0, x: (2221 - 1505) + 145.5 - 392.5, y: (35 - 35) + 226.5 - 62, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 60, damping: 10 }}
          onMouseEnter={() => setHoveredItem('internships')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="National Internships" className="absolute h-full left-[-47.2%] max-w-none top-0 w-[178.09%]" src={imgNationalInternships} />
          </div>
        </motion.div>
        
        {/* 180 Degrees Consulting - POPS OUT FROM ANU */}
        <motion.div 
          className="absolute cursor-pointer" 
          style={{width: 443, height: 140, left: 2441 - 1505, top: 387 - 35}}
          initial={{ scale: 0, x: -(2441 - 2221 - 145.5) + 221.5, y: -(387 - 35 - 226.5) + 70, rotate: 0 }}
          animate={bhlthInView ? { scale: 1, x: 0, y: 0, rotate: 0 } : { scale: 0, x: -(2441 - 2221 - 145.5) + 221.5, y: -(387 - 35 - 226.5) + 70, rotate: 0 }}
          transition={{ duration: 1.2, delay: 1.1, type: "spring", stiffness: 60, damping: 10 }}
          onMouseEnter={() => setHoveredItem('consulting')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="180 Degrees Consulting" className="absolute h-[166.23%] left-0 max-w-none top-[-29.82%] w-full" src={img180DegreesConsulting} />
          </div>
        </motion.div>
        
        {/* BHLTH Title */}
        <motion.div 
          className="absolute font-['Jaldi:Regular',sans-serif] not-italic" 
          style={{width: 493, height: 225, left: 2468 - 1505, top: 162 - 35, color: 'black', fontSize: 100, fontWeight: 400}}
          initial={{ opacity: 0, x: 50 }}
          animate={bhlthInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          BHLTH
        </motion.div>
      </motion.div>

      {/* MD Timeline Item */}
      <motion.div 
        className="absolute cursor-pointer transition-opacity hover:opacity-95"
        style={{left: 2160, top: 596, width: 814, height: 248}}
        onMouseEnter={() => setHoveredItem('md')}
        onMouseLeave={() => setHoveredItem(null)}
        ref={mdRef}
        initial={{ opacity: 0, x: -100 }}
        animate={mdInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Macquarie University logo */}
        <motion.div 
          className="absolute" 
          style={{width: 448, height: 248, left: 2160 - 2160, top: 596 - 596}}
          initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
          animate={mdInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: 15 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 60, damping: 12 }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Macquarie University" className="absolute h-[165.8%] left-0 max-w-none top-0 w-[91.95%]" src={imgMacquarieUniversity} />
          </div>
        </motion.div>
        
        {/* MD (II) Title */}
        <motion.div 
          className="absolute font-['Jaldi:Regular',sans-serif] not-italic" 
          style={{width: 493, height: 225, left: 2481 - 2160, top: 619 - 596, color: 'black', fontSize: 100, fontWeight: 400}}
          initial={{ opacity: 0, x: -50 }}
          animate={mdInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          MD (II)
        </motion.div>
      </motion.div>

      {/* M.S Timeline Item */}
      <motion.div 
        className="absolute cursor-pointer transition-opacity hover:opacity-95"
        style={{left: 1800, top: 1067, width: 1174, height: 532}}
        onMouseEnter={() => setHoveredItem('ms')}
        onMouseLeave={() => setHoveredItem(null)}
        ref={msRef}
        initial={{ opacity: 0, y: 100 }}
        animate={msInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Stanford University logo */}
        <motion.div 
          className="absolute" 
          style={{width: 329, height: 329, left: 2201 - 1800, top: 1067 - 1067}}
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={msInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -15 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 60, damping: 12 }}
        >
          <img alt="Stanford University" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgStanfordUniversityLogo} />
        </motion.div>
        
        {/* Stanford Biodesign - POPS OUT FROM Stanford logo */}
        <motion.div 
          className="absolute cursor-pointer" 
          style={{width: 432, height: 203, left: 1800 - 1800, top: 1396 - 1067}}
          initial={{ scale: 0, x: (2201 - 1800) + 164.5 - 216, y: (1067 - 1067) + 164.5 - 101.5 }}
          animate={msInView ? { scale: 1, x: 0, y: 0 } : { scale: 0, x: (2201 - 1800) + 164.5 - 216, y: (1067 - 1067) + 164.5 - 101.5 }}
          transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 60, damping: 10 }}
          onMouseEnter={() => setHoveredItem('biodesign')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <img alt="Stanford Biodesign" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgStanfordBiodesign} />
        </motion.div>
        
        {/* Stanford GSB Seed - POPS OUT FROM Stanford logo */}
        <motion.div 
          className="absolute cursor-pointer" 
          style={{width: 482, height: 176, left: 2499 - 1800, top: 1409 - 1067}}
          initial={{ scale: 0, x: -(2499 - 2201 - 164.5) + 241, y: -(1409 - 1067 - 164.5) + 88 }}
          animate={msInView ? { scale: 1, x: 0, y: 0 } : { scale: 0, x: -(2499 - 2201 - 164.5) + 241, y: -(1409 - 1067 - 164.5) + 88 }}
          transition={{ duration: 1.2, delay: 1.1, type: "spring", stiffness: 60, damping: 10 }}
          onMouseEnter={() => setHoveredItem('seed')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <img alt="Stanford GSB Seed" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgStanfordGsbSeed} />
        </motion.div>
        
        {/* M.S Title */}
        <motion.div 
          className="absolute font-['Jaldi:Regular',sans-serif] not-italic" 
          style={{width: 493, height: 225, left: 2481 - 1800, top: 1153 - 1067, color: 'black', fontSize: 100, fontWeight: 400}}
          initial={{ opacity: 0, x: 50 }}
          animate={msInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          M.S
        </motion.div>
      </motion.div>

      {/* Harvard University Logo */}
      <motion.div 
        className="absolute cursor-pointer transition-opacity hover:opacity-95" 
        style={{width: 238, height: 232, left: 2247, top: 1645}}
        onMouseEnter={() => setHoveredItem('harvard')}
        onMouseLeave={() => setHoveredItem(null)}
        ref={harvardRef}
        initial={{ opacity: 0, scale: 0.5, y: 80 }}
        animate={harvardInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 80 }}
        transition={{ duration: 1, type: "spring", stiffness: 60, damping: 12 }}
      >
        <img alt="Harvard University" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHarvardUniversityLogo} />
      </motion.div>
      
      {/* Harvard HSIL - POPS OUT FROM Harvard logo */}
      <motion.div 
        className="absolute cursor-pointer transition-opacity hover:opacity-95" 
        style={{width: 285, height: 285, left: 1875, top: 1877}}
        initial={{ scale: 0, x: (2247 - 1875) + 119 - 142.5, y: (1645 - 1877) + 116 - 142.5 }}
        animate={harvardInView ? { scale: 1, x: 0, y: 0 } : { scale: 0, x: (2247 - 1875) + 119 - 142.5, y: (1645 - 1877) + 116 - 142.5 }}
        transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 60, damping: 10 }}
        onMouseEnter={() => setHoveredItem('hsil')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <img alt="Harvard HSIL" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHarvardHsil} />
      </motion.div>
      
      {/* Hopkins University Logo */}
      <motion.div 
        className="absolute cursor-pointer transition-opacity hover:opacity-95" 
        style={{width: 246, height: 232, left: 2245, top: 2126}}
        onMouseEnter={() => setHoveredItem('hopkins')}
        onMouseLeave={() => setHoveredItem(null)}
        ref={hopkinsRef}
        initial={{ opacity: 0, x: -100, scale: 0.7 }}
        animate={hopkinsInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.7 }}
        transition={{ duration: 1, type: "spring", stiffness: 60, damping: 12 }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Johns Hopkins University" className="absolute h-[218.1%] left-[-92.61%] max-w-none top-[-15.98%] w-[286.09%]" src={imgHopkinsUniversityLogo} />
        </div>
      </motion.div>
      
      {/* Hopkins Pava Center - POPS OUT FROM Hopkins logo */}
      <motion.div 
        className="absolute cursor-pointer transition-opacity hover:opacity-95" 
        style={{width: 185, height: 185, left: 2608, top: 2265}}
        initial={{ scale: 0, x: (2245 - 2608) + 123 - 92.5, y: (2126 - 2265) + 116 - 92.5 }}
        animate={hopkinsInView ? { scale: 1, x: 0, y: 0 } : { scale: 0, x: (2245 - 2608) + 123 - 92.5, y: (2126 - 2265) + 116 - 92.5 }}
        transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 60, damping: 10 }}
        onMouseEnter={() => setHoveredItem('pava')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <img alt="Hopkins Pava Center" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHopkinsPavaCenter} />
      </motion.div>

      {/* ALL HOVER DESCRIPTIONS - At the end to ensure they're always on top */}
      
      {/* Hover Description - BHLTH */}
      <div 
        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'bhlth' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{left: 2468, top: 325, maxWidth: 600, zIndex: 9999}}
      >
        <p className="text-[20px]">Bachelor of Health Science at ANU, grounding me in population health and equity.</p>
      </div>
      
      {/* Hover Description - National Internships */}
      <div 
        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'internships' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{left: 1505, top: 555, maxWidth: 700, zIndex: 9999}}
      >
        <p className="text-[20px]">Parliamentary policy internship translating complex evidence into post COVID recovery recommendations.</p>
      </div>
      
      {/* Hover Description - 180 Degrees Consulting */}
      <div 
        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'consulting' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{left: 2341 - 100, top: 555, maxWidth: 650, zIndex: 9999}}
      >
        <p className="text-[20px]">Financial strategy advisory for a large education nonprofit, strengthening my analytical and client skills.</p>
      </div>

      {/* Hover Description - MD */}
      <div 
        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'md' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{left: 2481, top: 496, maxWidth: 600, zIndex: 9999}}
      >
        <p className="text-[20px]">Macquarie University MD training, building my clinical foundations for work with underserved communities.</p>
      </div>

      {/* Hover Description - M.S */}
      <div 
        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'ms' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{left: 2481, top: 1287, maxWidth: 650, zIndex: 9999}}
      >
        <p className="text-[20px]">Community Health and Prevention Research at Stanford, focusing on precision medicine and health equity.</p>
      </div>
      
      {/* Hover Description - Stanford Biodesign */}
      <div 
        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'biodesign' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{left: 1800, top: 1607, maxWidth: 750, zIndex: 9999}}
      >
        <p className="text-[20px]">Immersive human centered health technology training, where we developed a novel ENT care platform to help prevent paediatric readmissions.</p>
      </div>
      
      {/* Hover Description - Stanford Seed */}
      <div 
        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'seed' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{left: 2499 - 150, top: 1607, maxWidth: 750, zIndex: 9999}}
      >
        <p className="text-[20px]">Stanford Seed internship in Nigeria, advising go to market strategy and product management for a dialysis medical device.</p>
      </div>

      {/* Hover Description - Harvard */}
      <div 
        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'harvard' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{left: 1947, top: 1545, maxWidth: 700, zIndex: 9999}}
      >
        <p className="text-[20px]">Harvard Venture Building Program, a four week course taught by VCs and Harvard Business School and Harvard T H Chan faculty.</p>
      </div>

      {/* Hover Description - HSIL */}
      <div 
        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'hsil' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{left: 1825, top: 1727, maxWidth: 800, zIndex: 9999}}
      >
        <p className="text-[20px]">Ten week HSIL competition where our team placed 7th of 2,500 after four national and international rounds, leading to invitation into the Venture Building Program.</p>
      </div>

      {/* Hover Description - Hopkins */}
      <div 
        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'hopkins' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{left: 1945, top: 2026, maxWidth: 650, zIndex: 9999}}
      >
        <p className="text-[20px]">Entrepreneurship training at Hopkins Pava Center, refining venture design for impactful health startups.</p>
      </div>

      {/* Hover Description - Pava Center */}
      <div 
        className={`absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 ${hoveredItem === 'pava' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{left: 2108, top: 2165, maxWidth: 650, zIndex: 9999}}
      >
        <p className="text-[20px]">Entrepreneurship training at Hopkins Pava Center, refining venture design for impactful health startups.</p>
      </div>
    </div>
  );
}