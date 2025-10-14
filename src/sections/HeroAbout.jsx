import React, { useEffect, useState } from "react";
import bgAbout from "../assets/bg-about.png";
export default function HeroAbout() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 160);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full min-h-[85vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgAbout})` }}
      aria-label="About hero"
    >
      <div className="absolute inset-0 bg-black/60" />

      <div
        className={`relative z-10 max-w-5xl px-6 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          We believe that{" "}
          <span className="text-[var(--color-highlight,#F4B83A)]">Robotics</span>{" "}
          is one of those skills which must be taught to children at the school level.
        </h1>

        <h3 className="text-2xl font-semibold text-white mt-10">That's Why</h3>

        <p className="mt-4 text-white text-lg max-w-2xl mx-auto leading-relaxed">
          We have put in every effort to make it easy to follow and execute Robotics projects in schools.
        </p>
      </div>
    </section>
  );
}
