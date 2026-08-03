import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { AppErrorBoundary } from "./components/AppErrorBoundary";
import { NotFound } from "./components/NotFound";

// Lazy load pages to improve initial load performance
const ScalehubStartupLp = lazy(() =>
  import("./screens/ScalehubStartupLp").then((module) => ({
    default: module.ScalehubStartupLp,
  })),
);
const ProjectDetail = lazy(() =>
  import("./screens/ProjectDetail").then((module) => ({
    default: module.ProjectDetail,
  })),
);
const Resume = lazy(() =>
  import("./pages/Resume").then((module) => ({ default: module.Resume })),
);
const Presentations = lazy(() =>
  import("./pages/Presentations").then((module) => ({
    default: module.Presentations,
  })),
);
const Policy = lazy(() =>
  import("./pages/Policy").then((module) => ({ default: module.Policy })),
);
const Research = lazy(() =>
  import("./pages/Research").then((module) => ({ default: module.Research })),
);
const Industry = lazy(() =>
  import("./pages/Industry").then((module) => ({ default: module.Industry })),
);
const Education = lazy(() =>
  import("./pages/Education").then((module) => ({ default: module.Education })),
);

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-4">
      <span className="animate-pulse text-2xl font-bold tracking-tight text-black">
        ST
      </span>
      <span className="h-px w-12 overflow-hidden bg-black/10" aria-hidden="true" />
    </div>
  </div>
);

const resetScroll = () =>
  window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

const AnimatedRoutes = () => {
  const location = useLocation();

  // Initial mount / full reload: land at the top, matching prior behavior.
  useEffect(() => {
    resetScroll();
  }, []);

  return (
    // Fade-through page handoff. Opacity-only on purpose: a transform here
    // would turn the wrapper into a containing block for position:fixed
    // children (case-study nav, floating buttons) for the duration of the
    // entrance. Scroll resets in onExitComplete so the outgoing page never
    // visibly jumps to the top mid-fade.
    <AnimatePresence mode="wait" onExitComplete={resetScroll}>
      <motion.div
        key={location.pathname}
        id="route-content"
        tabIndex={-1}
        className="outline-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<ScalehubStartupLp />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/bio" element={<Resume />} />
          <Route path="/presentations" element={<Presentations />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/research" element={<Research />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const RoutedApp = () => {
  const location = useLocation();

  return (
    <AppErrorBoundary key={location.pathname}>
      {/* Keyboard skip link — visually hidden until focused. */}
      <a
        href="#route-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-black focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Suspense fallback={<LoadingFallback />}>
        <AnimatedRoutes />
      </Suspense>
    </AppErrorBoundary>
  );
};

const App = (): JSX.Element => {
  return (
    // reducedMotion="user" makes every motion component honor the OS
    // "reduce motion" setting globally — transform/scroll animations are
    // disabled so content lands without large slides, no per-component wiring.
    <MotionConfig reducedMotion="user">
      <Router>
        <RoutedApp />
      </Router>
    </MotionConfig>
  );
};

export default App;
