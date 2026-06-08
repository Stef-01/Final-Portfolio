import React, { Suspense, lazy, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { IntroSection } from "../components/IntroSection";
import { AboutSection } from "../components/AboutSection";
import { ThreeLanesTeaser } from "../components/ThreeLanesTeaser";
import { LatestWorkSection } from "../components/LatestWorkSection";
import { DraggableCardsSection } from "../components/DraggableCardsSection";
import { DnaHelixOverlay } from "../components/DnaHelixOverlay";
import { ContactModal } from "../components/ContactModal";
import { FloatingSocials } from "../components/FloatingSocials";
import { usePhoneLayout } from "../hooks/usePhoneLayout";
import { useMagneticScroll } from "../hooks/useMagneticScroll";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

// Lazy load heavy components
const SplineBackground = lazy(() =>
  import("../components/SplineBackground").then((module) => ({
    default: module.SplineBackground,
  })),
);
const TimelineSection = lazy(() =>
  import("../components/TimelineSection").then((module) => ({
    default: module.TimelineSection,
  })),
);

export const ScalehubStartupLp = (): JSX.Element => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const isPhoneLayout = usePhoneLayout();
  const prefersReducedMotion = usePrefersReducedMotion();
  useMagneticScroll();

  const handleViewWork = () => {
    document
      .getElementById("three-lanes")
      ?.scrollIntoView({
        behavior: prefersReducedMotion ? "instant" : "smooth",
        block: "start",
      });
  };

  return (
    <div className="bg-white flex flex-col w-full overflow-x-hidden">
      <main>
      {/* Hero Section */}
      <div className="relative w-full min-h-[100svh] md:min-h-screen flex flex-col overflow-clip snap-start snap-always">
        <Suspense
          fallback={
            <div
              className={`${
                isPhoneLayout ? "absolute" : "fixed"
              } inset-0 z-0 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100`}
            />
          }
        >
          <SplineBackground
            className={isPhoneLayout ? "z-0 absolute" : "z-0 fixed"}
          />
        </Suspense>

        {/* Subtle DNA double-helix motif layered over the Spline scene */}
        <DnaHelixOverlay className="z-[1]" />

        <div className="relative z-10 flex flex-col items-center px-4 pt-[max(5.5rem,calc(env(safe-area-inset-top)+4rem))] pb-[max(2rem,env(safe-area-inset-bottom))] mb-12 md:mb-20">
          <Badge className="mb-8" label="Stefan Thottunkal" showIcon={true} />

          <h1 className="text-center text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter mb-6 max-w-4xl leading-[0.95]">
            Health tech, from research to reality
          </h1>

          <p className="text-center text-base md:text-xl leading-relaxed text-gray-600 max-w-2xl mb-8">
            Researcher, policy analyst, and builder working across precision
            medicine, clinical AI, and global health.
          </p>

          <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-3 sm:gap-4 max-w-sm sm:max-w-none">
            <Button
              type="primary"
              label="See the work"
              onClick={handleViewWork}
              className="w-full sm:w-[134px]"
            />
            <Button
              type="secondary"
              label="Contact Me"
              onClick={() => setIsContactModalOpen(true)}
              className="w-full sm:w-[134px]"
            />
          </div>
        </div>
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
      <Suspense
        fallback={
          <div className="h-screen w-full bg-white flex items-center justify-center">
            Loading Timeline...
          </div>
        }
      >
        <div className="relative z-10 bg-white">
          <TimelineSection />
        </div>
      </Suspense>

      {/* Flagship projects — each card snaps individually (header is
          free-scroll between Timeline and the first card snap). */}
      <div className="relative z-10 bg-white">
        <LatestWorkSection />
      </div>

      {/* Tinker projects — free scroll, not a snap target */}
      <div className="relative z-10 bg-white py-20">
        <DraggableCardsSection />
      </div>

      {/* About Section — free scroll, the bow→pills choreography needs it */}
      <div className="relative z-10 bg-white">
        <AboutSection />
      </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Stefan Thottunkal</h3>
            <p className="text-gray-400">
              Researcher & Health Systems Designer
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
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* LinkedIn + Google Scholar floating icons (replace footer clutter) */}
      <FloatingSocials />
    </div>
  );
};
