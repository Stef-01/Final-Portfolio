import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HeroBento } from "../components/HeroBento";
import { IntroSection } from "../components/IntroSection";
import { AboutSection } from "../components/AboutSection";
import { ThreeLanesTeaser } from "../components/ThreeLanesTeaser";
import { PressSection } from "../components/PressSection";
import { LatestWorkSection } from "../components/LatestWorkSection";
import { ContactModal } from "../components/ContactModal";
import { FloatingSocials } from "../components/FloatingSocials";
import { useMagneticScroll } from "../hooks/useMagneticScroll";
import { useWindowWidth } from "../hooks/useWindowWidth";

// Lazy load heavy components
const TimelineSection = lazy(() =>
  import("../components/TimelineSection").then((module) => ({
    default: module.TimelineSection,
  })),
);

export const ScalehubStartupLp = (): JSX.Element => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  // The floating social icons would sit on top of the hero's bento cards, so
  // they only appear once the hero has mostly scrolled away.
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroInView, setHeroInView] = useState(true);
  // Below lg the bento stacks taller than the viewport; as a snap target the
  // magnet would yank readers past the cards, so it only snaps side-by-side.
  const heroSnaps = useWindowWidth() >= 1024;
  useMagneticScroll();

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white flex flex-col w-full overflow-x-hidden">
      <main>
      {/* Hero Section */}
      <div
        ref={heroRef}
        className={`relative w-full ${heroSnaps ? "snap-start snap-always" : ""}`}
      >
        <HeroBento onContact={() => setIsContactModalOpen(true)} />
      </div>

      {/* Intro Section (Header) */}
      <div className="relative z-10 bg-white snap-start snap-always">
        <IntroSection />
      </div>

      {/* Three Lanes Teaser — single entry point into Research / Policy / Industry */}
      <div id="three-lanes" className="relative z-10 bg-white snap-start snap-always">
        <ThreeLanesTeaser />
      </div>

      {/* Timeline Section — explicitly NOT a snap target (taller than viewport) */}
      <Suspense fallback={<div className="h-screen w-full bg-white" aria-hidden="true" />}>
        <div className="relative z-10 bg-white">
          <TimelineSection />
        </div>
      </Suspense>

      {/* Flagship projects — each card snaps individually (header is
          free-scroll between Timeline and the first card snap). */}
      <div className="relative z-10 bg-white">
        <LatestWorkSection />
      </div>

      {/* About Section */}
      <div className="relative z-10 bg-white">
        <AboutSection />
      </div>

      <div className="relative z-10 bg-white">
        <PressSection />
      </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Stefan Thottunkal</h3>
            <p className="text-gray-400">
              Researcher, policy analyst, and builder
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
            <Link
              to="/research"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Research
            </Link>
            <Link
              to="/policy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Policy
            </Link>
            <Link
              to="/industry"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Industry
            </Link>
            <Link
              to="/education"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Education
            </Link>
            <Link
              to="/bio"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Bio
            </Link>
            <Link
              to="/presentations"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Presentations
            </Link>
            <a
              href="#press"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Press
            </a>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* LinkedIn + Google Scholar floating icons (replace footer clutter) */}
      {!heroInView && <FloatingSocials />}
    </div>
  );
};
