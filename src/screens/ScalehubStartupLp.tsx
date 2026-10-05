import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { HeroBento } from "../components/HeroBento";
import { IntroSection } from "../components/IntroSection";
import { AboutSection } from "../components/AboutSection";
import { ThreeLanesTeaser } from "../components/ThreeLanesTeaser";
import { PressSection } from "../components/PressSection";
import { LatestWorkSection } from "../components/LatestWorkSection";
import { ContactModal } from "../components/ContactModal";
import { ContactSection } from "../components/ContactSection";
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
  // The floating social icons would sit on top of the hero's bento cards and
  // the footer's links, so they only show between the two.
  const heroRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const [heroInView, setHeroInView] = useState(true);
  const [footerInView, setFooterInView] = useState(false);
  // Below lg the bento stacks taller than the viewport; as a snap target the
  // magnet would yank readers past the cards, so it only snaps side-by-side.
  const heroSnaps = useWindowWidth() >= 1024;
  useMagneticScroll();

  useEffect(() => {
    const hero = heroRef.current;
    const footer = footerRef.current;
    if (!hero || !footer) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === hero) setHeroInView(entry.isIntersecting);
          else setFooterInView(entry.isIntersecting);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(hero);
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex w-full flex-col overflow-x-hidden bg-paper">
      <main>
      {/* Hero Section */}
      <div
        ref={heroRef}
        className={`relative w-full ${heroSnaps ? "snap-start snap-always" : ""}`}
      >
        <HeroBento onContact={() => setIsContactModalOpen(true)} />
      </div>

      {/* Intro Section (Header) */}
      <div className="relative z-10 snap-start snap-always">
        <IntroSection />
      </div>

      {/* Three Lanes Teaser — single entry point into Research / Policy / Industry */}
      <div id="three-lanes" className="relative z-10 snap-start snap-always">
        <ThreeLanesTeaser />
      </div>

      {/* Timeline Section — explicitly NOT a snap target (taller than viewport) */}
      <Suspense fallback={<div className="h-screen w-full" aria-hidden="true" />}>
        <div className="relative z-10">
          <TimelineSection />
        </div>
      </Suspense>

      {/* Flagship projects — each card snaps individually (header is
          free-scroll between Timeline and the first card snap). */}
      <div className="relative z-10">
        <LatestWorkSection />
      </div>

      {/* About Section */}
      <div className="relative z-10">
        <AboutSection />
      </div>

      <div className="relative z-10">
        <PressSection />
      </div>
      </main>

      <div ref={footerRef}>
        <ContactSection />
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* LinkedIn + Google Scholar floating icons (replace footer clutter) */}
      {!heroInView && !footerInView && <FloatingSocials />}
    </div>
  );
};
