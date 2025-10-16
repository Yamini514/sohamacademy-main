import React from "react";
import FadeUp from "../sections/FadeUp";
import SectionHeader from "../components/SectionHeader";
import { Rocket } from "lucide-react"; // use any Lucide icon

export default function MissionVision() {
  return (
    <section
      id="mission"
      className="py-20 bg-[var(--color-secondary,#F5F7FA)] "
    >
      <div className="max-w-6xl mx-auto px-6 mt-3">
         <div className="text-center mb-8"> {/* reduced from mb-16 to mb-8 */}
      <h3 className="text-3xl font-medium text-[var(--color-accent,#00B7FF)] mb-2 tracking-wider">
        ABOUT SOHAM ACADEMY
      </h3>
    </div>

        <FadeUp>
          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-md p-10 text-center mt-10">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-[var(--color-accent,#00B7FF)] flex items-center justify-center shadow-md">
                <Rocket className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Mission Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-accent,#00B7FF)] mb-4">
              Our Mission
            </h2>

            {/* Mission Description */}
            <p className="text-[var(--color-text,#6b7280)] text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              It is our mission to complement the efforts of the schools in
              doing what they are unable to do and in teaching what they are not
              equipped to teach.
            </p>

            {/* Program List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left justify-items-center mt-8">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent,#00B7FF)] text-lg">•</span>
                  <span>English Proficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent,#00B7FF)] text-lg">•</span>
                  <span>Athletics & Sports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent,#00B7FF)] text-lg">•</span>
                  <span>Robotics in Academics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent,#00B7FF)] text-lg">•</span>
                  <span>Soham Fine Arts Program</span>
                </li>
              </ul>

              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent,#00B7FF)] text-lg">•</span>
                  <span>Learning Arithmetic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent,#00B7FF)] text-lg">•</span>
                  <span>Human Excellence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent,#00B7FF)] text-lg">•</span>
                  <span>Soham Leadership Program</span>
                </li>
              </ul>

              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent,#00B7FF)] text-lg">•</span>
                  <span>Learning through Story</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent,#00B7FF)] text-lg">•</span>
                  <span>Emerging Technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent,#00B7FF)] text-lg">•</span>
                  <span>Soham Career Guidance</span>
                </li>
              </ul>
            </div>

            {/* Closing line */}
            <p className="text-[var(--color-text,#9ca3af)] text-sm leading-relaxed mt-10 max-w-4xl mx-auto">
              Across all programs being rolled out, children are at the center
              and the driving force. We unlock the potential of thousands of
              children by giving them access to high-impact educational
              experiences.
            </p>

            {/* Certifications Row */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="px-4 py-2 text-sm font-medium bg-green-100 text-green-700 rounded-full flex items-center gap-2">
                ✅ 12A & 80G Approved
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-yellow-100 text-yellow-700 rounded-full flex items-center gap-2">
                💼 CSR Certified
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-700 rounded-full flex items-center gap-2">
                🏢 CSO Registered
              </span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
