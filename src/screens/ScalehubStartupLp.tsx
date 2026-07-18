import React, { Suspense, lazy, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Button } from "../components/Button";
import { IntroSection } from "../components/IntroSection";
import { AboutSection } from "../components/AboutSection";
import { ThreeLanesTeaser } from "../components/ThreeLanesTeaser";
import { PressSection } from "../components/PressSection";
import { LatestWorkSection } from "../components/LatestWorkSection";
import { ContactModal } from "../components/ContactModal";
import { FloatingSocials } from "../components/FloatingSocials";
import { Magnetic } from "../components/motion/Magnetic";
import { usePhoneLayout } from "../hooks/usePhoneLayout";
import { useMagneticScroll } from "../hooks/useMagneticScroll";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { DURATION, EASE_OUT } from "../motion/tokens";

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

const footerLinks = [
  { to: "/research", label: "Research" },
  { to: "/policy", label: "Policy" },
  { to: "/industry", label: "Industry" },
  { to: "/education", label: "Education" },
  { to: "/bio", label: "Bio" },
  { to: "/presentations", label: "Presentations" },
];

/** Editorial underline — grows from the left on hover, exits to the right. */
const footerLinkClasses =
  "group relative rounded-sm text-gray-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const FooterUnderline = () => (
  <span
    aria-hidden="true"
    className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-white transition-transform duration-200 ease-out group-hover:origin-left group-hover:scale-x-100 motion-reduce:transition-none"
  />
);

/** Fold affordance — a hairline with a falling dot, gone after first scroll. */
const ScrollCue = ({ reduced }: { reduced: boolean }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 140], [1, 0]);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className="pointer-events-none absolute bottom-[max(1.75rem,env(safe-area-inset-bottom))] left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2.5"
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
        Scroll
      </span>
      <span className="relative block h-10 w-px overflow-hidden bg-black/15">
        <motion.span
          className="absolute left-0 top-0 h-3 w-px bg-black/70"
          animate={{ y: [-12, 40], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
    </motion.div>
  );
};

const heroItem = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION.slow, delay, ease: EASE_OUT },
});

export const ScalehubStartupLp = (): JSX.Element => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const isPhoneLayout = usePhoneLayout();
  const prefersReducedMotion = usePrefersReducedMotion();
  useMagneticScroll();

  // The footer is pinned behind the page (sticky uncover), but the desktop
  // hero keeps a fixed full-viewport Spline layer at the same z plane — the
  // pinned footer would bleed through the transparent hero at page top. Gate
  // footer opacity on approach: it fades in while still fully covered by the
  // opaque Press section, so the uncover itself looks untouched. This is
  // visibility plumbing, not decoration — it runs under reduced motion too.
  const pressRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: pressApproach } = useScroll({
    target: pressRef,
    offset: ["start end", "start 75%"],
  });
  const footerOpacity = useTransform(pressApproach, [0, 1], [0, 1]);

  // Pointer parallax: the hero copy drifts a few px opposite the cursor,
  // springs back to rest. Mouse-only by nature (mousemove), capped at ±7px.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const parallaxX = useSpring(pointerX, { stiffness: 120, damping: 20 });
  const parallaxY = useSpring(pointerY, { stiffness: 120, damping: 20 });

  const handleHeroPointer = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || isPhoneLayout) return;
    const { innerWidth, innerHeight } = window;
    pointerX.set((event.clientX / innerWidth - 0.5) * -14);
    pointerY.set((event.clientY / innerHeight - 0.5) * -10);
  };

  const handleViewWork = () => {
    document
      .getElementById("three-lanes")
      ?.scrollIntoView({
        behavior: prefersReducedMotion ? "instant" : "smooth",
        block: "start",
      });
  };

  return (
    <div className="bg-white flex flex-col w-full overflow-x-clip">
      <main>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[100svh] md:min-h-screen flex flex-col overflow-clip snap-start snap-always"
        onMouseMove={handleHeroPointer}
        onMouseLeave={() => {
          pointerX.set(0);
          pointerY.set(0);
        }}
      >
        <Suspense
          fallback={
            <div
              className={`${
                isPhoneLayout ? "absolute" : "fixed"
              } inset-0 z-0 bg-gray-50`}
            />
          }
        >
          <SplineBackground
            className={isPhoneLayout ? "z-0 absolute" : "z-0 fixed"}
          />
        </Suspense>

        <motion.div
          style={prefersReducedMotion ? undefined : { x: parallaxX, y: parallaxY }}
          className="relative z-10 flex flex-col items-center px-4 pt-[max(5.5rem,calc(env(safe-area-inset-top)+4rem))] pb-[max(2rem,env(safe-area-inset-bottom))] mb-12 md:mb-20"
        >
          <motion.h1
            {...heroItem(0.1)}
            className="text-center t-display font-bold tracking-tight mb-6 max-w-4xl leading-[0.98]"
          >
            Stefan Thottunkal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(7px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: DURATION.slow, delay: 0.32, ease: EASE_OUT }}
            className="text-center text-base md:text-xl leading-relaxed text-gray-600 max-w-2xl mb-8"
          >
            Researcher, policy analyst, and builder working across precision
            medicine, clinical AI, and global health.
          </motion.p>

          <motion.div
            {...heroItem(0.5)}
            className="flex w-full sm:w-auto flex-col sm:flex-row gap-3 sm:gap-4 max-w-sm sm:max-w-none"
          >
            <Magnetic className="w-full sm:w-auto">
              <Button
                type="primary"
                label="View work"
                onClick={handleViewWork}
                className="w-full sm:w-[134px]"
              />
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <Button
                type="secondary"
                label="Contact"
                onClick={() => setIsContactModalOpen(true)}
                className="w-full sm:w-[134px]"
              />
            </Magnetic>
          </motion.div>
        </motion.div>

        <ScrollCue reduced={prefersReducedMotion} />
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

      <div ref={pressRef} className="relative z-10 bg-white">
        <PressSection />
      </div>
      </main>

      {/* Footer — pinned behind the page and uncovered as the last section
          scrolls away (sticky big-type reveal). Needs overflow-x-clip (not
          hidden) on the page wrapper, or sticky would silently die. */}
      <motion.footer
        style={{ opacity: footerOpacity }}
        className="sticky bottom-0 z-0 bg-black text-white"
      >
        <div className="mx-auto flex min-h-[56svh] max-w-7xl flex-col justify-between gap-12 px-4 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-16 md:px-8 md:pt-20">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <p className="max-w-md text-base leading-relaxed text-gray-400">
              Researcher & Health Systems Designer — precision medicine,
              clinical AI, and global health.
            </p>
            <nav
              aria-label="Site sections"
              className="flex flex-wrap gap-x-8 gap-y-3 text-sm md:justify-end"
            >
              {footerLinks.map((link) => (
                <Link key={link.to} to={link.to} className={footerLinkClasses}>
                  {link.label}
                  <FooterUnderline />
                </Link>
              ))}
              <a href="#press" className={footerLinkClasses}>
                Press
                <FooterUnderline />
              </a>
            </nav>
          </div>

          <div>
            <p className="select-none whitespace-nowrap text-center font-bold leading-none tracking-tight text-white [font-size:clamp(1.9rem,9.4vw,8.25rem)]">
              Stefan Thottunkal
            </p>
            <p className="mt-6 text-center text-xs text-gray-500">
              © {new Date().getFullYear()} Stefan Thottunkal
            </p>
          </div>
        </div>
      </motion.footer>

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
