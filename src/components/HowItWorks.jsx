import React from "react";

/**
 * HowItWorks.jsx
 *
 * Shows numbered steps in a responsive grid. Each card highlights on hover/focus only.
 *
 * Usage:
 * import HowItWorks from "@/components/HowItWorks";
 * <HowItWorks />
 */

const STEPS = [
  {
    id: 1,
    title: "We Assess School Readiness",
    desc: "Initial assessment of school infrastructure and student readiness",
  },
  {
    id: 2,
    title: "School Assigns Program Coordinator",
    desc: "Dedicated coordinator ensures smooth program implementation",
  },
  {
    id: 3,
    title: "We Assign Course Mentors",
    desc: "Expert mentors guide students through the robotics curriculum",
  },
  {
    id: 4,
    title: "School Identifies Participants",
    desc: "Selection of enthusiastic students for the program",
  },
  {
    id: 5,
    title: "We Implement Curriculum at the School",
    desc: "Hands-on robotics training begins at the school premises",
  },
  {
    id: 6,
    title: "We Establish and Nurture Robotics Club",
    desc: "Creating sustainable robotics communities within schools",
  },
  {
    id: 7,
    title: "School Organizes Robotics Exhibition",
    desc: "Showcase student projects and achievements to the community",
  },
  {
    id: 8,
    title: "School Participates in Innovation Challenges",
    desc: "Students compete in regional and national competitions",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-sky-500 font-semibold tracking-wide mb-3">
          OUR PROGRAM PLANNER
        </p>

        <h2
          id="how-it-works-title"
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10"
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.id}
              role="article"
              tabIndex={0}
              aria-labelledby={`step-title-${step.id}`}
              className="group bg-white border border-gray-100 rounded-xl p-6 text-left transition-transform duration-250 ease-out cursor-default
                         hover:scale-[1.02] hover:border-sky-400 hover:shadow-[0_12px_30px_rgba(0,183,255,0.08)]
                         focus:outline-none focus:ring-4 focus:ring-sky-100 focus:border-sky-400"
            >
              <div className="flex items-start gap-4">
                {/* Number circle */}
                <div
                  className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-sky-400 text-white font-semibold"
                  aria-hidden
                >
                  {step.id}
                </div>

                <div className="flex-1">
                  <h3
                    id={`step-title-${step.id}`}
                    className="text-md md:text-lg font-semibold text-gray-900"
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
