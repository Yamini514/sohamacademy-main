import React from "react";
import FadeUp from "../sections/FadeUp";
import { Rocket } from "lucide-react";

const PROGRAMS = [
  "English Proficiency",
  "Athletics & Sports",
  "Robotics in Academics",
  "Soham Fine Arts Program",
  "Learning Arithmetic",
  "Human Excellence",
  "Soham Leadership Program",
  "Learning through Story",
  "Emerging Technologies",
  "Soham Career Guidance",
];

function chunkArray(arr, n) {
  const out = Array.from({ length: n }, () => []);
  arr.forEach((item, i) => out[i % n].push(item));
  return out;
}

export default function MissionVision() {
  const columns = chunkArray(PROGRAMS, 3);

  return (
    <section id="mission" className="bg-white py-4">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section heading */}
        <header className="text-center mb-6">
         
        </header>

        <FadeUp>
          <article
            className="max-w-5xl mx-auto bg-white border border-gray-200 shadow-lg rounded-2xl p-6 md:p-12"
            aria-labelledby="mission-title"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent,#00B7FF)] flex items-center justify-center shadow-md">
                <Rocket className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
            </div>

            {/* Title */}
            <h2
              id="mission-title"
              className="text-2xl md:text-3xl font-bold text-[var(--color-accent,#00B7FF)] text-center mb-3"
            >
              Our Mission
            </h2>

            {/* Description */}
            <p className="text-[var(--color-text,#6b7280)] text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center mb-8">
              It is our mission to complement the efforts of the schools in doing
              what they are unable to do and in teaching what they are not
              equipped to teach.
            </p>

            {/* Program list (3 responsive columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {columns.map((col, idx) => (
                <ul key={idx} className="space-y-3 text-sm md:text-base">
                  {col.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1 text-[var(--color-accent,#00B7FF)]"
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            {/* Closing line */}
            <p className="text-[var(--color-text,#9ca3af)] text-sm leading-relaxed mt-8 max-w-3xl mx-auto text-center">
              Across all programs being rolled out, children are at the center and
              the driving force. We unlock the potential of thousands of children
              by giving them access to high-impact educational experiences.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap justify-center gap-4 mt-6" aria-hidden="false">
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
          </article>
        </FadeUp>
      </div>
    </section>
  );
}
