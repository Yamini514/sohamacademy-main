import React from "react";
import i1 from "../assets/Team/i1.png";
import Jeshwanth from "../assets/Team/Jeshwanth.png";
import Ganitha from "../assets/Team/Ganitha.png";
import Anusha from "../assets/Team/Anusha.png";
import Spandhana from "../assets/Team/Spandhana.png";
import Rahul from "../assets/Team/Rahul.png";

const TEAM = [
  { id: 1, name: "Komaragiri Sahadev", role: "Founder & Director, Soham Academy of Human Excellence", img: i1 },
  { id: 2, name: "B Jeshwanth", role: "Program Coordinator", img: Jeshwanth },
  { id: 3, name: "Ganitha", role: "Program Coordinator", img: Ganitha },
  { id: 4, name: "Y Anusha", role: "Core Team Member", img: Anusha },
  { id: 5, name: "Spandhana", role: "Core Team Member", img: Spandhana },
  { id: 6, name: "Rahul Goud", role: "Core Team Member", img: Rahul },
];

export default function Team() {
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section heading */}
        <header className="text-center mb-10">
          <p className="text-sm text-sky-500 font-bold tracking-wide">OUR LEADERSHIP</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
            Awesome People Behind Us
          </h1>
        </header>

        {/* Grid */}
        <section
          aria-label="Team members"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
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
      </div>
    </main>
  );
}
