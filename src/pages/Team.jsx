import React from "react";
import i1 from "../assets/Team/i1.png";
import Jeshwanth from "../assets/Team/Jeshwanth.png";
import Ganitha from "../assets/Team/Ganitha.png";
import Anusha from "../assets/Team/Anusha.png";
import Spandhana from "../assets/Team/Spandhana.png";
import Rahul from "../assets/Team/Rahul.png";
import { useState, useMemo } from "react";

const TEAM = [
  {
    id: 1,
    name: "Komaragiri Sahadev",
    role: "Founder & Director, Soham Academy of Human Excellence",
    img: i1,
  },
  { id: 2, name: "B Jeshwanth", role: "Program Coordinator", img: Jeshwanth },
  // { id: 3, name: "Ganitha", role: "Program Coordinator", img: Ganitha },
  // { id: 4, name: "Y Anusha", role: "Core Team Member", img: Anusha },
  { id: 5, name: "Spandhana", role: "Core Team Member", img: Spandhana },
  // { id: 6, name: "Rahul Goud", role: "Core Team Member", img: Rahul },
];

const CORE_TEAM_BY_YEAR = {"AY 2025-26":[{
    id: 1,
    name: "Komaragiri Sahadev",
    role: "Founder & Director, Soham Academy of Human Excellence",
    img: i1,
  },
  { id: 2, name: "B Jeshwanth", role: "Program Coordinator", img: Jeshwanth },
  { id: 3, name: "Ganitha", role: "Program Coordinator", img: Ganitha },
  { id: 4, name: "Y Anusha", role: "Core Team Member", img: Anusha },
  { id: 5, name: "Spandhana", role: "Core Team Member", img: Spandhana },
  { id: 6, name: "Rahul Goud", role: "Core Team Member", img: Rahul },],
  
  "AY 2021-25":[

  {
    id: 1,
    name: "Komaragiri Sahadev",
    role: "Founder & Director, Soham Academy of Human Excellence",
    img: i1,
  },
  { id: 2, name: "B Jeshwanth", role: "Program Coordinator", img: Jeshwanth },
  { id: 3, name: "Ganitha", role: "Program Coordinator", img: Ganitha },
  { id: 4, name: "Y Anusha", role: "Core Team Member", img: Anusha },
  { id: 5, name: "Spandhana", role: "Core Team Member", img: Spandhana },
  { id: 6, name: "Rahul Goud", role: "Core Team Member", img: Rahul },
]};


export default function Team() {
    const years = useMemo(() => Object.keys(CORE_TEAM_BY_YEAR), []);
  const [activeYear, setActiveYear] = useState(years[0]);
  const coreTeam = CORE_TEAM_BY_YEAR[activeYear] || [];
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section heading */}
        <header className="text-center mb-10">
          <p className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            OUR LEADERSHIP
          </p>
          <h1 className="text-2xl py-5 text-sky-500 font-bold tracking-wide">
            Awesome People Behind Us
          </h1>
        </header>

        {/* Grid */}
        <section
          aria-label="Team members"
          className="grid grid-cols-2 sm:grid-cols- md:grid-cols-3 gap-8 justify-center"
        >
          {TEAM.map((member) => (
            <article key={member.id} className="relative group">
              {/* Image wrapper */}
              <div
                className="relative overflow-hidden rounded-lg bg-gray-50 border border-gray-100 shadow-sm
                           transform transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
              >
                {/* Image */}
                <img
                  src={member.img}
                  alt={`${member.name} — ${member.role}`}
                  className="w-full h-56 object-cover md:h-64 lg:h-56 block"
                  loading="lazy"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 flex items-end p-4 text-left 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                >
                  {/* Gradient background */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                    aria-hidden="true"
                  />
                  {/* Text content */}
                  <div className="relative z-10 text-white">
                    <p className="text-sm opacity-90">{member.role}</p>
                    <p className="text-lg font-semibold">{member.name}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
        {/* ✅ Core Team (Year wise) */}
        <section className="mt-16" aria-label="Core team year wise">
          <div className="text-center mb-8">
            <p className="text-3xl sm:text-4xl font-bold text-slate-900">
              CORE TEAM
            </p>
            <p className="text-lg text-sky-500 font-semibold mt-2">
              Year-wise Team Members
            </p>
          </div>

          {/* Tabs (AY...) */}
          <div className="flex flex-wrap gap-3 justify-start mb-8">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setActiveYear(y)}
                className={`px-6 py-3 rounded-md border text-sm font-semibold transition
                  ${
                    activeYear === y
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-800 border-slate-200 hover:border-slate-400"
                  }
                `}
              >
                {y}
              </button>
            ))}
          </div>

          {/* 4 images layout (like screenshot) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {coreTeam.slice(0, 4).map((m) => (
              <div key={m.id} className="flex flex-col items-center">
                <div className="w-48 h-48 bg-white shadow-sm border border-slate-200 overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 font-semibold text-slate-900 text-center">
                  {m.name}
                </p>
                <p className="text-sm text-slate-500 text-center">{m.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
