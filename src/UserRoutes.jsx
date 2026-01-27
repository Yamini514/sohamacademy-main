import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ReportsPage from "./pages/ReportsPage";

// ✅ FTC tab layout + pages
import FTCLayout from "./pages/FTCLayout";
// import FTCAbout from "./pages/FTCAbout";
import FTC2024_25 from "./pages/FTC2024_25";
import FTC2025_26 from "./pages/FTC2025_26";
import FTC2023_24 from "./pages/FTC2023_24";

import FTC from "./pages/FTC";

const UserRoutes = () => {
  return (
    <Routes>
      {/* ✅ Home should be "/" not "*" */}
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/contact" element={<Contact />} />

      {/* ✅ FTC nested routes (tab view) */}
      <Route path="/ftc" element={<FTCLayout />}>
        <Route index element={<Navigate to="about" replace />} />
        {/* <Route path="about" element={<FTCAbout />} /> */}
        <Route path="2025-26" element={<FTC2025_26 />} />
        <Route path="2024-25" element={<FTC2024_25 />} />
        <Route path="2023-24" element={<FTC />} />
      </Route>

      {/* ✅ only one fallback at end */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UserRoutes;
