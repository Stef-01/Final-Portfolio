import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { EASE_OUT } from "./lib/motion";
import { AppErrorBoundary } from "./components/AppErrorBoundary";
import { NotFound } from "./components/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

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
  <div className="min-h-screen flex items-center justify-center bg-paper">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-12 w-12 bg-black/5 rounded-full mb-4"></div>
      <div className="h-4 w-32 bg-black/5 rounded-full"></div>
    </div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: EASE_OUT }}
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
      <ScrollToTop />
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
