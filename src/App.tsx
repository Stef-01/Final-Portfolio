import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { AppErrorBoundary } from "./components/AppErrorBoundary";

// Lazy load pages to improve initial load performance
const ScalehubStartupLp = lazy(() => import("./screens/ScalehubStartupLp").then(module => ({ default: module.ScalehubStartupLp })));
const ProjectDetail = lazy(() => import("./screens/ProjectDetail").then(module => ({ default: module.ProjectDetail })));
const Resume = lazy(() => import("./pages/Resume").then(module => ({ default: module.Resume })));
const Presentations = lazy(() => import("./pages/Presentations").then(module => ({ default: module.Presentations })));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
      <div className="h-4 w-32 bg-gray-200 rounded"></div>
    </div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ScalehubStartupLp />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/bio" element={<Resume />} />
        <Route path="/presentations" element={<Presentations />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = (): JSX.Element => {
  return (
    <Router>
      <AppErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <AnimatedRoutes />
        </Suspense>
      </AppErrorBoundary>
    </Router>
  );
};

export default App;
