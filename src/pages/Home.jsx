import React from "react";
import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";
import ProgramHighlights from "../components/ProgramHighlights";
import ProgramStats from "../components/ProgramStats";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CSRPartners from "../components/CSRPartners";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white  text-gray-800">
      <HeroSection />
      <VideoSection  />
      <ProgramHighlights />
      <ProgramStats/>
      <HowItWorks />
      <Testimonials/>
      <CSRPartners/>
      <ContactSection />
    </main>
  );
}
