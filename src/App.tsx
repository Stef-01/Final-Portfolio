import { useState } from "react";
import { LatestWork } from "./components/LatestWork";
import { Navigation } from "./components/Navigation";
import { Resume } from "./pages/Resume";
import { Publications } from "./pages/Publications";
import { Conferences } from "./pages/Conferences";

function Hero() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-8 py-32">
      <div className="space-y-6">
        <h1 className="text-[64px] font-semibold text-black leading-[1.1]">
          Stefan Thottunkal
        </h1>
        <p className="text-[24px] text-gray-600 leading-relaxed max-w-[700px]">
          UI/UX Designer specializing in healthcare innovation, digital health experiences, and evidence-based design solutions.
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href="#work"
            className="px-6 py-3 bg-black text-white rounded-full text-[15px] font-medium hover:bg-gray-800 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-black text-black rounded-full text-[15px] font-medium hover:bg-gray-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="w-full bg-gray-50 py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h2 className="text-[40px] font-semibold text-black mb-6">About Me</h2>
            <p className="text-[16px] text-gray-600 leading-relaxed mb-4">
              I partner with healthcare innovators, researchers, and communities to reimagine health systems — from AI-powered precision medicine tools to equitable implementation strategies for Indigenous health.
            </p>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              My mission: to design frictionless, human-centered digital health experiences that bridge cutting-edge technology with compassionate care, advancing health equity and transforming patient outcomes through evidence-based innovation.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-[20px] font-semibold text-black mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["UI/UX Design", "Research", "Wireframing", "Prototyping", "Visual Design", "User Testing", "Design Systems", "Healthcare UX"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white rounded-full text-[14px] text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[20px] font-semibold text-black mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Sketch", "Adobe XD", "InVision", "Miro", "HTML/CSS"].map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-white rounded-full text-[14px] text-gray-700">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-black py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-[24px] font-semibold text-white mb-4">Let's Connect</h3>
            <p className="text-[16px] text-gray-400">
              Available for freelance projects and collaborations.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[15px] text-gray-400 hover:text-white transition-colors">
              Email
            </a>
            <a href="#" className="text-[15px] text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-[15px] text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-[14px] text-gray-500">
            © 2024 Stefan Thottunkal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Header({ currentPage, onNavigate }: { currentPage: string; onNavigate: (page: string) => void }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-8 py-6 flex justify-between items-center">
        <button
          onClick={() => onNavigate("home")}
          className="text-[20px] font-semibold text-black"
        >
          ST
        </button>
        <Navigation currentPage={currentPage} onNavigate={onNavigate} />
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <div className="w-full bg-white">
      <Hero />
      <div id="work">
        <LatestWork />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "resume":
        return (
          <div className="relative min-h-screen bg-white">
            <Header currentPage={currentPage} onNavigate={handleNavigate} />
            <div className="pt-8">
              <Resume />
            </div>
          </div>
        );
      case "publications":
        return (
          <div className="relative min-h-screen bg-white">
            <Header currentPage={currentPage} onNavigate={handleNavigate} />
            <div className="pt-8">
              <Publications />
            </div>
          </div>
        );
      case "conferences":
        return (
          <div className="relative min-h-screen bg-white">
            <Header currentPage={currentPage} onNavigate={handleNavigate} />
            <div className="pt-8">
              <Conferences />
            </div>
          </div>
        );
      default:
        return (
          <>
            <Header currentPage={currentPage} onNavigate={handleNavigate} />
            <HomePage />
          </>
        );
    }
  };

  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      {renderPage()}
    </div>
  );
}
