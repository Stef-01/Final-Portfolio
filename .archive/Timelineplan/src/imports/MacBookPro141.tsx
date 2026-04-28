import svgPaths from "./svg-jqs78d27p7";
import imgImage1 from "figma:asset/6d51fda445708898195c8f6705d9db08b82e8e01.png";
import imgImage2 from "figma:asset/f70deb69cfd730589dc5541e5370747c548d6b36.png";
import imgImage3 from "figma:asset/7d22c5d9d743209fb003efffa0626fbc9d36609d.png";
import imgImage5 from "figma:asset/411b1a99a326f193cf4b7d0fa45bcf19453522d4.png";
import imgImage7 from "figma:asset/c424d2a70339b3c6e290118404ad877891b9dc29.png";
import imgImage8 from "figma:asset/0ab6195dd58e68fba2b601597ac6a3d1c5449c8a.png";
import imgImage9 from "figma:asset/6e58278c27d2c792ae3c6b2e1b3f3ad2db623558.png";
import imgImage10 from "figma:asset/bb87ecb6f87fccb4c80834639eeac42bb0a44b0c.png";
import imgImage11 from "figma:asset/121f17a019571944facd44111913fd78c8260911.png";
import imgImage12 from "figma:asset/e2bbbcd40f3401f8765c0558110ec847a0fd5a02.png";
import imgImage6 from "figma:asset/e715f2d2de7d97eda7b4f77cf9e9c7b55072d228.png";
import { useState } from "react";

export default function MacBookPro() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 14' - 1">
      {/* Timeline vertical line */}
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[2353px] top-[221px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{"--transform-inner-width": "2021", "--transform-inner-height": "25"} as React.CSSProperties}>
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

      {/* image 6 */}
      <div className="absolute h-[453px] left-[2221px] top-[35px] w-[291px]" data-name="image 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[233.46%]" src={imgImage6} />
        </div>
      </div>

      {/* image 11 */}
      <div className="absolute h-[124px] left-[1505px] top-[387px] w-[785px]" data-name="image 11">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-47.2%] max-w-none top-0 w-[178.09%]" src={imgImage11} />
        </div>
      </div>

      {/* image 12 */}
      <div className="absolute h-[140px] left-[2441px] top-[387px] w-[443px]" data-name="image 12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[166.23%] left-0 max-w-none top-[-29.82%] w-full" src={imgImage12} />
        </div>
      </div>

      {/* BHLTH */}
      <p 
        className="absolute font-['Jaldi:Regular',sans-serif] h-[225px] leading-[normal] left-[2468px] not-italic text-[100px] text-black top-[162px] w-[493px] cursor-pointer"
        onMouseEnter={() => setHoveredItem('bhlth')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        BHLTH
      </p>

      {hoveredItem === 'bhlth' && (
        <div className="absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl z-50 left-[2468px] top-[300px]">
          <p className="text-[28px] whitespace-nowrap">Australian National Internships Program</p>
          <p className="text-[20px] mt-2 opacity-90">Interned in the Parliamentary Library's Social Policy Division</p>
        </div>
      )}

      {/* image 5 */}
      <div className="absolute h-[248px] left-[2160px] top-[596px] w-[448px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[165.8%] left-0 max-w-none top-0 w-[91.95%]" src={imgImage5} />
        </div>
      </div>

      {/* MD (II) */}
      <p 
        className="absolute font-['Jaldi:Regular',sans-serif] h-[225px] leading-[normal] left-[2481px] not-italic text-[100px] text-black top-[619px] w-[493px] cursor-pointer"
        onMouseEnter={() => setHoveredItem('md')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        MD (II)
      </p>

      {hoveredItem === 'md' && (
        <div className="absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl z-50 left-[2481px] top-[490px]">
          <p className="text-[28px] whitespace-nowrap">Johns Hopkins Pava Centre Program</p>
          <p className="text-[20px] mt-2 opacity-90">Learned health entrepreneurship</p>
        </div>
      )}

      {/* image 3 */}
      <div className="absolute left-[2201px] size-[329px] top-[1067px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>

      {/* image 9 */}
      <div className="absolute h-[203px] left-[1800px] top-[1396px] w-[432px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage9} />
      </div>

      {/* M.S */}
      <p 
        className="absolute font-['Jaldi:Regular',sans-serif] h-[225px] leading-[normal] left-[2481px] not-italic text-[100px] text-black top-[1153px] w-[493px] cursor-pointer"
        onMouseEnter={() => setHoveredItem('ms')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        M.S
      </p>

      {hoveredItem === 'ms' && (
        <div className="absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl z-50 left-[2481px] top-[1070px]">
          <p className="text-[28px] whitespace-nowrap">Stanford GSB Seed Internship</p>
          <p className="text-[20px] mt-2 opacity-90">Doing healthtech in Nigeria</p>
        </div>
      )}

      {/* image 10 */}
      <div 
        className="absolute h-[176px] left-[2499px] top-[1409px] w-[482px] cursor-pointer" 
        data-name="image 10"
        onMouseEnter={() => setHoveredItem('consulting')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
      </div>

      {hoveredItem === 'consulting' && (
        <div className="absolute bg-black/90 text-white px-8 py-4 rounded-xl shadow-2xl z-50 left-[2290px] top-[1320px]">
          <p className="text-[24px] whitespace-nowrap">180 Degrees Consulting</p>
          <p className="text-[18px] mt-2 opacity-90">Devised alternative revenue models for a large education non-profit</p>
        </div>
      )}

      {/* image 1 */}
      <div className="absolute h-[232px] left-[2245px] top-[2126px] w-[246px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[218.1%] left-[-92.61%] max-w-none top-[-15.98%] w-[286.09%]" src={imgImage1} />
        </div>
      </div>

      {/* image 2 */}
      <div className="absolute h-[232px] left-[2247px] top-[1645px] w-[238px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>

      {/* image 7 */}
      <div className="absolute left-[1875px] size-[285px] top-[1877px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>

      {/* image 8 */}
      <div className="absolute left-[2608px] size-[185px] top-[2265px]" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
    </div>
  );
}
