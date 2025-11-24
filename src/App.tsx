import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScalehubStartupLp } from "./screens/ScalehubStartupLp";
import { ProjectDetail } from "./screens/ProjectDetail";
import { Resume } from "./pages/Resume";
import { Presentations } from "./pages/Presentations";

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScalehubStartupLp />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/bio" element={<Resume />} />
        <Route path="/presentations" element={<Presentations />} />
      </Routes>
    </Router>
  );
};

export default App;