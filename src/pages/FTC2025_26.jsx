import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import Container from "../components/layout/Container";
import FtcSection, {
  FtcHeading,
  FtcText,
  FTC_SIDE_PX,
} from "../components/ftc/FtcSection";
// Assets
import ftc1 from "../assets/FTC.png";
import ftc2 from "../assets/ftc2.png";
import ftc3 from "../assets/ftc3.png";
import logo from "../assets/brand.png";
import heroImg from "../assets/2024-25/hero.png";

// Team images
import sahadev from "../assets/2024-25/sahadevKomaragiri.png";
import prasad from "../assets/2024-25/PrasadKomaragiri.png";
import ramya from "../assets/2024-25/Ramya.png";
import jeshwanth from "../assets/2024-25/jeshwanth.png";
import kushal from "../assets/2024-25/kushalManiKanta.png";
import jahnavi from "../assets/2024-25/Jahnavi.png";
import chandana from "../assets/2024-25/Chandana.png";
import manohar from "../assets/2024-25/Manohar.png";

/* -------------------- DATA -------------------- */

const BOT_IMAGES = [
  { src: ftc1, alt: "FTC Bot - Practice" },
  { src: ftc2, alt: "FTC Bot - Build" },
  { src: ftc3, alt: "FTC Bot - Testing" },
  { src: ftc1, alt: "FTC Bot - Competition" },
];

const TEAM = [
  { name: "Sahadev Komaragiri", role: "Founder and Director", image: sahadev },
  { name: "Prasad Komaragiri", role: "Mentor", image: prasad },
  { name: "Ramya", role: "Communication Coach", image: ramya },
  { name: "Jeshwanth", role: "Coach", image: jeshwanth },
  { name: "Kushal Manikanta", role: "Mentor", image: kushal },
  { name: "Jahnavi", role: "Junior Mentor", image: jahnavi },
  { name: "Chandana", role: "Facilitator", image: chandana },
  { name: "Manohar", role: "Programmer", image: manohar },
];

const SPONSORS = [{ src: logo, alt: "Soham Academy" }];

/* -------------------- MODAL -------------------- */

function Modal({ images, index, setIndex, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
      if (e.key === "ArrowRight")
        setIndex((i) => Math.min(i + 1, images.length - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose, setIndex]);

  if (index < 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 bg-white p-2 rounded-full"
      >
        <X className="w-5 h-5" />
      </button>

      {index > 0 && (
        <button
          onClick={() => setIndex(index - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full"
        >
          <ChevronLeft />
        </button>
      )}

      {index < images.length - 1 && (
        <button
          onClick={() => setIndex(index + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full"
        >
          <ChevronRight />
        </button>
      )}

      <img
        src={images[index].src}
        alt={images[index].alt}
        className="max-h-[90vh] max-w-6xl object-contain rounded-lg"
      />
    </div>
  );
}

/* -------------------- PAGE -------------------- */

export default function FTC2025_26() {
  const [modalIndex, setModalIndex] = useState(-1);

  return (
    <main className="bg-white min-h-screen">
      {/* HERO */}
      <section className="pt-10 pb-12 md:pt-12 md:pb-16">
        <Container className={FTC_SIDE_PX}>
          <FtcHeading as="h1">First Tech Challenge (FTC) 2025-26</FtcHeading>

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <FtcText>
                Building on the historic success of Soham Champs, the 2025-26
                FTC season marks a renewed commitment to empowering government
                school students through robotics, teamwork, and real-world
                problem solving.
              </FtcText>

              <FtcText>
                The success of Soham Champs has become a powerful
                motivator—instilling belief among students, parents, and schools
                that government school children can compete at the highest
                levels. This year’s participation reflects our continued
                commitment to expanding access, deepening technical learning,
                and creating a sustainable pathway for government school
                students to grow in robotics, leadership, and real-world problem
                solving.
              </FtcText>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={heroImg}
                alt="FTC Team 2025-26"
                className="w-full  max-w-lg rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* BOT */}
      <FtcSection eyebrow="THE MACHINE" title="Our FTC Bot and Practice">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {BOT_IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => setModalIndex(i)}
              className="overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform"
              />
            </button>
          ))}
        </div>
      </FtcSection>

      {/* TEAM */}
      <FtcSection
        eyebrow="PARTICIPATING TEAM AND MENTORS"
        title="Our Super Team"
        className="bg-slate-50"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {TEAM.map((person) => (
            <div key={person.name} className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden shadow-md bg-gray-200">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="mt-2 text-sm sm:text-base font-semibold text-slate-900">
                {person.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">{person.role}</p>
            </div>
          ))}
        </div>
      </FtcSection>

      {/* SPONSORS */}
      <FtcSection eyebrow="GENEROUS HEARTS" title="Our Sponsors">
        <div className="flex justify-center gap-10 flex-wrap">
          {SPONSORS.map((s, i) => (
            <img
              key={i}
              src={s.src}
              alt={s.alt}
              className="max-h-16 object-contain"
            />
          ))}
        </div>
      </FtcSection>

      <Modal
        images={BOT_IMAGES}
        index={modalIndex}
        setIndex={setModalIndex}
        onClose={() => setModalIndex(-1)}
      />
    </main>
  );
}
