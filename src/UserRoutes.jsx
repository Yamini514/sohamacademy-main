import React from "react";
import { Routes, Route } from "react-router-dom";

// Import all pages you want to use
import Home from "./pages/Home";
import About from "./pages/About";

import FTC from "./pages/FTC";
import Contact from "./pages/Contact";
// import DashboardPage from "./pages/DashboardPage"; // if you have this
import NotFound from "./pages/NotFound"; // fallback for wrong URLs
import ReportsPage from "./pages/ReportsPage";

const UserRoutes = () => {
  return (
    <Routes>
<Route path="*" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/reports" element={<ReportsPage/>}/>
      <Route path="/ftc" element={<FTC />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route
        path="/dashboard"
        element={<DashboardPage srcUrl="https://example.com" />}
      /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UserRoutes;
