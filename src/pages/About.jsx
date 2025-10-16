// src/pages/AboutPage.jsx
import React from "react";
import HeroAbout from "../sections/HeroAbout";
import HistorySection from "../sections/HistorySection";
import MissionVision from "./MissionVision";
import Team from "./Team";


export default function About() {
  return (
    <main className="bg-white min-h-screen">
      <HeroAbout />
      <HistorySection />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Team */}
      <Team />
    </main>
  );
}
