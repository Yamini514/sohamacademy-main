// src/pages/FTC/FTC2025_26.jsx
import React, { useEffect, useState } from "react";
import { Download, Share2, X, ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Reuse assets (Replace placeholders with actual 2025-26 assets as they become available)
import ftc1 from "../assets/FTC.png";
import ftc2 from "../assets/ftc2.png";
import ftc3 from "../assets/ftc3.png";
import logo from "../assets/brand.png";

// Team member images - (Assuming similar structure to 2024-25 imports)
import sahadevImg from "../assets/2024-25/SahadevKomaragiri.png";
import prasadImg from "../assets/2024-25/PrasadKomaragiri.png";


import heroImg from "../assets/2024-25/hero.png";

const VOLUNTEER_IMAGES = [
  { src: ftc1, alt: "FTC 2025-26 - Team at event" },
  { src: ftc2, alt: "FTC 2025-26 - Students with robot" },
  { src: ftc3, alt: "FTC 2025-26 - Competition moment" },
];

const BOT_IMAGES = [
  { src: ftc2, alt: "Our FTC Bot - Practice" },
  { src: ftc3, alt: "Our FTC Bot - Build & Testing" },
  { src: ftc1, alt: "Our FTC Bot - Team with Robot" },
  { src: ftc2, alt: "Our FTC Bot - Practice" },
];

const OUTREACH_DATA = [
  {
    title: "At GBHS, CPL Amberpet",
    images: [
      { src: ftc1, alt: "GBHS, CPL_1" },
      { src: ftc2, alt: "GBHS, CPL_2" },
      { src: ftc3, alt: "GBHS, CPL_3" },
      { src: ftc1, alt: "GBHS, CPL_4" },
    ],
  },
  {
    title: "At ZPHS, Ramanthapur",
    images: [
      { src: ftc2, alt: "ZPHS, Ramanthapur" },
      { src: ftc3, alt: "ZPHS, Ramanthapur_2" },
    ],
  },
  {
    title: "At NTT DATA Office",
    images: [
      { src: ftc1, alt: "NTT DATA_2" },
      { src: ftc2, alt: "NTT DATA_3" },
      { src: ftc3, alt: "NTT DATA_1" },
    ],
  },
  {
    title: "At Mechanical Branch, OU",
    images: [{ src: ftc1, alt: "Mechanical Branch, OU" }],
  },
  {
    title: "With Team Alpha",
    images: [{ src: ftc2, alt: "Team Alpha" }],
  },
  {
    title: "At Other Schools",
    images: [
      { src: ftc3, alt: "Schools_3" },
      { src: ftc1, alt: "Schools_2" },
      { src: ftc2, alt: "Schools_1" },
      { src: ftc3, alt: "Schools_4" },
    ],
  },
];

const SPONSOR_LOGOS = [
  { src: logo, alt: "Soham Academy Logo", name: "Soham Academy" },
  { src: ftc1, alt: "Texoham Logo", name: "Texoham Designs" },
];

const TEAM = [
  {
    name: "Sahadev Komaragiri",
    role: "Founder and Director, Soham Academy",
    image: sahadevImg
  },
  {
    name: "Prasad Komaragiri",
    role: "Mentor",
    image: prasadImg
  },
  {
    name: "Ramya",
    role: "Communication Coach",
    //image: ramyaImg
  },
  {
    name: "Jeshwanth",
    role: "Coach",
    //image: jeshwanthImg
  },
  {
    name: "Kushal Manikanta",
    role: "Mentor",
    //image: kushalImg
  },
  {
    name: "Jahnavi",
    role: "Junior Mentor",
    //image: jahnaviImg
  },
  {
    name: "Chandana",
    role: "Facilitator",
    //image: chandanaImg
  },
  {
    name: "Navaneeth",
    role: "CAD Mentor",
    //image: navaneethImg
  },
  {
    name: "Manohar",
    role: "Programmer",
    //image: manoharImg
  },
  {
    name: "Akhil Prajwal",
    role: "Design & CAD",
    //image: akhilImg
  },
  {
    name: "Kiran",
    role: "Wiring & Assembly",
    //image: kiranImg
  },
  {
    name: "Shiva",
    role: "Driver",
    //image: shivaImg
  },
  {
    name: "Gayathri",
    role: "Wiring & Cable Management",
    //image: akhilImg
  },
  {
    name: "Shiva",
    role: "Driver",
    //image: shivaImg
  },
  {
    name: "Sakshith",
    role: "Designing",
    //image: sakshithImg
  },
];

// Reusable Section Component
function Section({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`py-6 md:py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {eyebrow && (
          <div className="text-center text-sky-500 font-semibold text-lg uppercase tracking-wide mb-3">
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-amber-400 mb-6">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

// Reusable Outreach Card with Auto-sliding (Matches 2024-25 logic)
function OutreachSection({ title, images, onOpen, startIndex }) {
  const [current, setCurrent] = useState(0);
  const count = images.length;

  useEffect(() => {
    if (count <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % count);
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="rounded-xl p-4 shadow-lg bg-white border border-gray-100">
      <div className="relative overflow-hidden rounded-lg h-56">
        <button className="w-full h-full" onClick={() => onOpen(startIndex + current)}>
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="w-full h-full object-cover transition-all duration-500"
            loading="lazy"
          />
        </button>
        {count > 1 && (
          <>
            <button onClick={() => setCurrent((current - 1 + count) % count)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full">‹</button>
            <button onClick={() => setCurrent((current + 1) % count)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full">›</button>
          </>
        )}
      </div>
      {count > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, i) => (
            <span key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full cursor-pointer transition ${i === current ? "bg-sky-500" : "bg-gray-300"}`} />
          ))}
        </div>
      )}
      <h3 className="mt-4 text-center text-sky-400 font-semibold text-lg">{title}</h3>
    </div>
  );
}

// Volunteer Outreach Section (NO scroll, side-by-side images)
function VolunteerOutreachSection({ title, images, onOpen, startIndex }) {
  return (
    <div className="rounded-xl p-4 shadow-lg bg-white border border-gray-100">
      
      {/* Images shown side by side */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => onOpen(startIndex + i)}
            className="overflow-hidden rounded-lg group"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-center text-sky-400 font-semibold text-lg">
        {title}
      </h3>
    </div>
  );
}


// Modal Component
function Modal({ images, index, setIndex, onClose, downloadNamePrefix }) {
  useEffect(() => {
    const onKey = (e) => {
      if (index < 0) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
      if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, images.length - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, setIndex]);

  if (index < 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button onClick={onClose} className="absolute top-6 right-6 bg-white/90 p-2 rounded-full transition"><X className="w-5 h-5 text-black" /></button>
      {index > 0 && <button onClick={() => setIndex((i) => Math.max(i - 1, 0))} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full"><ChevronLeft className="w-6 h-6 text-black" /></button>}
      {index < images.length - 1 && <button onClick={() => setIndex((i) => Math.min(i + 1, images.length - 1))} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full"><ChevronRight className="w-6 h-6 text-black" /></button>}
      <div className="max-w-6xl max-h-[90vh] rounded-lg overflow-hidden">
        <img src={images[index].src} alt={images[index].alt} className="object-contain w-full h-full" />
      </div>
    </div>
  );
}

export default function FTC2025_26() {
  const [modalImages, setModalImages] = useState([]);
  const [index, setIndex] = useState(-1);

  const openModal = (images, i) => { setModalImages(images); setIndex(i); };
  const closeModal = () => setIndex(-1);
  const allOutreachImages = OUTREACH_DATA.flatMap((section) => section.images);

  return (
    <main className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-8 px-2 uppercase">
          First Tech Challenge (FTC) 2025-26
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="prose max-w-none text-gray-700 leading-relaxed text-lg">
            <p className="text-gray-700 leading-relaxed mb-2">
                  Building on the inspiration and confidence gained from our
                  historic victory in the previous FTC season,{" "}
                  <strong>
                    Soham Academy is once again participating in the FIRST Tech
                    Challenge this year with a renewed team of government school
                    students from
                  </strong>
                  GBHS, CPL Amberpet; ZPHS, Nagole; CPL Police Lines Boys High
                  School; and GIOE College. Drawing lessons from last year’s
                  journey, our current cohort includes new students alongside
                  continuing learners, who are being trained through a
                  structured, hands-on approach in robot design, programming,
                  testing, documentation, and outreach.
                </p>
 
                <p className="text-gray-700 leading-relaxed">
                  The success of Soham Champs has become a powerful
                  motivator—instilling belief among students, parents, and
                  schools that government school children can compete at the
                  highest levels. This year’s participation reflects our
                  continued commitment to expanding access, deepening technical
                  learning, and creating a sustainable pathway for government
                  school students to grow in robotics, leadership, and
                  real-world problem solving.
                </p>
          </div>
          <div className="flex justify-center">
            <img src={heroImg} alt="Soham Champs 24067" className="w-full max-w-lg rounded-lg shadow-xl" />
          </div>
        </div>
      </div>

      {/* BOT SECTION */}
      <Section eyebrow="MACHINE TAKING PART IN THE COMPETITION" title="Our FTC Bot & Practice Hours">
        <div className="mt-5 flex justify-center">
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-4">
            {BOT_IMAGES.map((img, i) => (
              <button key={i} onClick={() => openModal(BOT_IMAGES, i)} className="group overflow-hidden rounded-md border border-gray-200">
                <img src={img.src} alt={img.alt} className="w-full h-28 md:h-36 object-cover group-hover:scale-105 transition duration-300" />
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* TEAM SECTION */}
      <Section eyebrow="PARTICIPATING TEAM AND MENTORS" title="Our Super Team" className="bg-slate-50">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
          {TEAM.map((person) => (
            <div key={person.name} className="text-center">
              <div className="mb-3 overflow-hidden rounded-lg shadow-md bg-gray-200 aspect-square flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-400">{person.name.charAt(0)}</span>
              </div>
              <h4 className="font-bold text-gray-900 text-sm">{person.name}</h4>
              <p className="text-xs text-gray-600">{person.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* OUTREACH SECTION */}
      <Section eyebrow="SHARING KNOWLEDGE AND EXTENDING TECH EDUCATION" title="Outreach">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {OUTREACH_DATA.map((section, idx) => (
            <OutreachSection 
              key={idx} 
              title={section.title} 
              images={section.images} 
              onOpen={(i) => openModal(allOutreachImages, i)}
              startIndex={OUTREACH_DATA.slice(0, idx).reduce((acc, s) => acc + s.images.length, 0)}
            />
          ))}
        </div>
      </Section>

      {/* VOLUNTEER TEAM SECTION */}
<Section
  eyebrow="VOLUNTEER TEAM"
  title="Meet with RTX Team"
>
  {/* Collage grid */}
  <div className="mt-8 space-y-5">
    
    {/* Top row (4 images) */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {VOLUNTEER_IMAGES.slice(0, 4).map((img, i) => (
        <button
          key={i}
          onClick={() => openModal(VOLUNTEER_IMAGES, i)}
          className="overflow-hidden rounded-md bg-white border border-gray-200 group"
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="w-full h-36 md:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </button>
      ))}
    </div>

    {/* Bottom row (remaining images, centered) */}
    {VOLUNTEER_IMAGES.length > 4 && (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:max-w-5xl mx-auto">
        {VOLUNTEER_IMAGES.slice(4).map((img, i) => {
          const realIndex = i + 4;
          return (
            <button
              key={realIndex}
              onClick={() => openModal(VOLUNTEER_IMAGES, realIndex)}
              className="overflow-hidden rounded-md bg-white border border-gray-200 group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-36 md:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          );
        })}
      </div>
    )}
  </div>
</Section>


      {/* SPONSORS SECTION */}
      <Section eyebrow="GENEROUS HEARTS WHO MADE IT POSSIBLE" title="Our Sponsors">
        <div className="flex flex-wrap justify-center gap-12 mt-8">
          {SPONSOR_LOGOS.map((sponsor, i) => (
            <img key={i} src={sponsor.src} alt={sponsor.alt} className="max-h-16 object-contain grayscale hover:grayscale-0 transition" />
          ))}
        </div>
      </Section>

      <Modal images={modalImages} index={index} setIndex={setIndex} onClose={closeModal} downloadNamePrefix="FTC-2025-26" />
    </main>
  );
}