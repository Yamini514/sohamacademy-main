// src/pages/FTC/FTC2024_25.jsx
import React, { useEffect, useState } from "react";
import { Download, Share2, X, ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Sample images (reuse your existing assets for now)
import ftc1 from "../assets/FTC.png";
import ftc2 from "../assets/ftc2.png";
import ftc3 from "../assets/ftc3.png";
import logo from "../assets/brand.png";

import heroImg from "../assets/2024-25/hero.png";

//bot images
import bot1 from "../assets/2024-25/bot1.png";
import bot2 from "../assets/2024-25/bot2.png";
import bot3 from "../assets/2024-25/bot3.png";
import bot4 from "../assets/2024-25/bot4.png";


// Team member images - you'll need to import these
import sahadevImg from "../assets/2024-25/SahadevKomaragiri.png";
import prasadImg from "../assets/2024-25/PrasadKomaragiri.png";
import ramyaImg from "../assets/2024-25/Ramya.png";
import jeshwanthImg from "../assets/2024-25/Jeshwanth.png";
import kushalImg from "../assets/2024-25/KushalManikanta.png";
import jahnaviImg from "../assets/2024-25/Jahnavi.png";
import chandanaImg from "../assets/2024-25/Chandana.png";
import manoharImg from "../assets/2024-25/Manohar.png";
import shikhaImg from "../assets/2024-25/Shikha.png";
import maithriImg from "../assets/2024-25/Maithri.png";
import teenaImg from "../assets/2024-25/Teena.png";
import harshaImg from "../assets/2024-25/HarshaVardhan.png";
import akhilImg from "../assets/2024-25/AkhilPrajwal.png";
import shivaImg from "../assets/2024-25/Shiva.png";
import sakshithImg from "../assets/2024-25/Sakshith.png";

// etc...

import gbhs1 from "../assets/2024-25/gbhs1.png";
import gbhs2 from "../assets/2024-25/gbhs2.png";
import gbhs3 from "../assets/2024-25/gbhs3.png";
import gbhs4 from "../assets/2024-25/gbhs4.png";
import zphs1 from "../assets/2024-25/zphs1.png";
import zphs2 from "../assets/2024-25/zphs2.png";
import ntt1 from "../assets/2024-25/ntt1.png";
import ntt2 from "../assets/2024-25/ntt2.png";
import ntt3 from "../assets/2024-25/ntt3.png";
import ou from "../assets/2024-25/ou.png";
import alpha from  "../assets/2024-25/alpha.png";
import other1 from "../assets/2024-25/other1.png";
import other2 from "../assets/2024-25/other2.png";
import other3 from "../assets/2024-25/other3.png";
import other4 from "../assets/2024-25/other4.png";

import texoham from "../assets/CSR/texoham1.png";


const HERO_IMAGES = [
  { src: ftc1, alt: "FTC 2024-25 - Team at event" },
  { src: ftc2, alt: "FTC 2024-25 - Students with robot" },
  { src: ftc3, alt: "FTC 2024-25 - Competition moment" },
];

const BOT_IMAGES = [
  { src: bot1, alt: "Our FTC Bot - Practice" },
  { src: bot2, alt: "Our FTC Bot - Build & Testing" },
  { src: bot3, alt: "Our FTC Bot - Team with Robot" },
  { src: bot4, alt: "Our FTC Bot - Practice" },
];

const OUTREACH_DATA = [
  {
    title: "At GBHS, CPL Amberpet",
    images: [
      { src: gbhs1, alt: "GBHS, CPL_1" },
      { src: gbhs2, alt: "GBHS, CPL_2" },
      { src: gbhs3, alt: "GBHS, CPL_3" },
      { src: gbhs4, alt: "GBHS, CPL_4" },
    ],
  },
  {
    title: "At ZPHS, Ramanthapur",
    images: [
      { src: zphs1, alt: "ZPHS, Ramanthapur" },
      { src: zphs2, alt: "ZPHS, Ramanthapur_2" },
    ],
  },
  {
    title: "At NTT DATA Office",
    images: [
      { src: ntt1, alt: "NTT DATA_2" },
      { src: ntt2, alt: "NTT DATA_3" },
      { src: ntt3, alt: "NTT DATA_1" },
    ],
  },
  {
    title: "At Mechanical Branch, OU",
    images: [{ src: ou, alt: "Mechanical Branch, OU" }],
  },
  {
    title: "With Team Alpha",
    images: [{ src: alpha, alt: "Team Alpha" }],
  },
  {
    title: "At Other Schools",
    images: [
      { src: other1, alt: "Schools_1" },
      { src: other2, alt: "Schools_2" },
      { src: other3, alt: "Schools_3" },
      { src: other4, alt: "Schools_4" },
    ],
  },
];

const HIGHLIGHT_IMAGES = [
  { src: ftc3, alt: "Competition Highlights - Match" },
  { src: ftc2, alt: "Competition Highlights - Pit Area" },
  { src: ftc1, alt: "Competition Highlights - Award Moment" },
  { src: ftc3, alt: "Competition Highlights - Match" },
];

const SPONSOR_LOGOS = [
  { src: logo, alt: "Soham Academy Logo", name: "Soham Academy" },
  { src: texoham, alt: "Texoham Logo", name: "Texoham Designs" },
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
    image: ramyaImg
  },
  {
    name: "Jeshwanth",
    role: "Coach",
    image: jeshwanthImg
  },
  {
    name: "Kushal Manikanta",
    role: "Mentor",
    image: kushalImg
  },
  {
    name: "Jahnavi",
    role: "Junior Mentor",
    image: jahnaviImg
  },
  {
    name: "Chandana",
    role: "Facilitator",
    image: chandanaImg
  },
  {
    name: "Manohar",
    role: "Captain, Programmer",
    image: manoharImg
  },
  {
    name: "Shikha",
    role: "Driver",
    image: shikhaImg
  },
  {
    name: "Maithri",
    role: "Programming",
    image: maithriImg
  },
  {
    name: "Teena",
    role: "Designing",
    image: teenaImg
  },
  {
    name: "Harsha Vardhan",
    role: "Human Player and Build Team",
    image: harshaImg
  },
  {
    name: "Akhil Prajwal",
    role: "Build Team",
    image: akhilImg
  },
  {
    name: "Shiva",
    role: "Driver",
    image: shivaImg
  },
  {
    name: "Sakshith",
    role: "Designing",
    image: sakshithImg
  },
];

function Section({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`py-8 md:py-10 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {eyebrow && (
          <div className="text-xs tracking-widest font-bold text-gray-500 uppercase mb-3">
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}


function OutreachSection({ title, images, onOpen, startIndex }) {
  const [current, setCurrent] = useState(0);
  const count = images.length;

  // Auto-slide
  useEffect(() => {
    if (count <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % count);
    }, 3000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="rounded-xl p-4 shadow-lg bg-white">
      {/* IMAGE AREA */}
      <div className="relative overflow-hidden rounded-lg h-56">
        <button
          className="w-full h-full"
          onClick={() => onOpen(startIndex + current)}
        >
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="w-full h-full object-cover transition-all duration-500"
            loading="lazy"
          />
        </button>

        {/* Arrows (only if multiple images) */}
        {count > 1 && (
          <>
            <button
              onClick={() =>
                setCurrent((current - 1 + count) % count)
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full"
            >
              ‹
            </button>

            <button
              onClick={() =>
                setCurrent((current + 1) % count)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* DOTS */}
      {count > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full cursor-pointer transition ${
                i === current
                  ? "bg-sky-500"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}

      {/* TITLE */}
      <h3 className="mt-4 text-center text-sky-400 font-semibold text-lg">
        {title}
      </h3>
    </div>
  );
}







function Modal({ images, index, setIndex, onClose, downloadNamePrefix }) {
  useEffect(() => {
    const onKey = (e) => {
      if (index < 0) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
      if (e.key === "ArrowRight")
        setIndex((i) => Math.min(i + 1, images.length - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, setIndex]);

  if (index < 0) return null;

  const downloadImage = (src) => {
    const a = document.createElement("a");
    a.href = src;
    a.download = `${downloadNamePrefix || "FTC-2024-25"}-${index + 1}.jpg`;
    a.click();
  };

  const shareImage = async (src) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "FTC 2024-25",
          text: "Check out this FTC Robotics image!",
          url: src,
        });
      } else {
        await navigator.clipboard.writeText(src);
        alert("📋 Image URL copied to clipboard!");
      }
    } catch {
      await navigator.clipboard.writeText(src);
      alert("Couldn't share, link copied!");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
        aria-label="Close"
      >
        <X className="w-5 h-5 text-black" />
      </button>

      <button
        onClick={() => downloadImage(images[index].src)}
        className="absolute top-6 right-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
        aria-label="Download"
      >
        <Download className="w-5 h-5 text-black" />
      </button>

      <button
        onClick={() => shareImage(images[index].src)}
        className="absolute top-6 right-32 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
        aria-label="Share"
      >
        <Share2 className="w-5 h-5 text-black" />
      </button>

      {index > 0 && (
        <button
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
      )}

      {index < images.length - 1 && (
        <button
          onClick={() => setIndex((i) => Math.min(i + 1, images.length - 1))}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      )}

      <div className="max-w-6xl max-h-[90vh] rounded-lg overflow-hidden">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="object-contain w-full h-full"
        />
      </div>

      <div className="absolute bottom-6 text-white text-sm text-center w-full px-4 bg-black/50 py-2">
        {images[index].alt}
      </div>
    </div>
  );
}

export default function FTC2024_25() {
  // modal state
  const [modalImages, setModalImages] = useState([]);
  const [index, setIndex] = useState(-1);

  const openModal = (images, i) => {
    setModalImages(images);
    setIndex(i);
  };
  const closeModal = () => setIndex(-1);

  // Flatten outreach images for modal
  const allOutreachImages = OUTREACH_DATA.flatMap((section) => section.images);

  return (
    <main className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 sm:px-5 lg:px-6">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-6">
          {/* Hero Content */}
          <div className="mt-1 text-2xl md:text-3xl font-bold text-amber-400 px-8">
            First Tech Challenge (FTC) 2024-25
          </div>
          <div className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* LEFT IMAGE */}
              <div className="flex justify-center">
                <img
                  src={heroImg}
                  alt="Soham Champs 24067"
                  className="w-full max-w-lg rounded-lg shadow-lg mt-4"
                />
              </div>

              {/* RIGHT TEXT */}
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4 mt-3 px-3">
                  At Soham Academy of Human Excellence, we take pride in
                  nurturing young talent through meaningful, hands-on technology
                  education.{" "}
                  <strong>
                    Soham Champs 24067, our FIRST Tech Challenge (FTC) robotics
                    team founded in 2023
                  </strong>
                  , represents our commitment to making high-quality STEM
                  learning accessible to students from government schools.
                </p>

                <p className="text-gray-700 leading-relaxed mt-3 px-3">
                  During the 2024–2025 FTC season, we enabled and mentored the
                  participation of eight students (five boys and three girls)
                  exclusively from government schools of Telangana, supported by
                  one mentor and one facilitator from Soham Academy, at the FTC
                  Indian Championship held in Pune, Maharashtra. Competing
                  against elite private institutions and international teams
                  from countries such as Kazakhstan and Sri Lanka, Soham Champs
                  emerged as the only government school student team at the
                  championship and secured the prestigious{" "}
                  <strong>Judges' Choice First Runner-Up Award</strong>,{" "}
                  <strong>
                    becoming the only award-winning team from Telangana at the
                    event.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-4 pb-2 md:pt-4 md:pb-2">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-2">
          {/* Eyebrow */}
          <div className="text-center text-sky-500 font-semibold text-lg uppercase tracking-wide">
            MACHINE THAT BROUGHT THE GLORY
          </div>

          {/* Title */}
          <h2 className="text-center mt-3 text-2xl md:text-3xl font-extrabold text-amber-400">
            Our FTC Bot &amp; Practice Hours
          </h2>

          {/* Paragraph */}
          <p className="mt-3 text-slate-600 text-lg leading-8">
            This achievement reinforces our belief that government school
            students, when provided with the right mentorship, exposure, and
            learning environment, can compete and excel on global platforms. At
            Soham Academy, our work goes beyond building robots; we focus on
            building confidence, capability, and character—shaping the next
            generation of engineers, innovators, and changemakers from
            Telangana.
          </p>

          {/* Image Grid */}
          <div className="mt-5 flex justify-center">
            <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {BOT_IMAGES.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => openModal(BOT_IMAGES, i)}
                  className="group w-[45vw] max-w-[260px] overflow-hidden rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-28 md:h-36 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTICIPATING TEAM AND MENTORS */}
      <Section className="pt-3 md:pt-4 mt-5">
  {/* ONE shared container */}
  <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
    {/* Eyebrow */}
    <div className="text-center text-sky-500 font-semibold text-lg uppercase tracking-wide">
      PARTICIPATING TEAM AND MENTORS
    </div>

    {/* Title */}
    <h2 className="text-center mt-3 text-2xl md:text-3xl font-extrabold text-amber-400">
      Our Super Team
    </h2>

    {/* Description */}
    <p className="mt-3 text-slate-600 text-lg leading-8">
      Students from GBHS, CPL; ZPHS, Nagole; GBHS, CPL Police Lines and
      Vedic Vidyalayam actively participated in every phase of the FTC
      journey—robot design, programming, testing, documentation, outreach,
      and competition preparation—gaining practical exposure to real-world
      engineering and STEM practices with the help of experienced mentors
      and coaches.
    </p>

    {/* Team Grid */}
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {TEAM.map((person) => (
        <div key={person.name} className="text-center">
          <div className="mb-3 overflow-hidden rounded-lg shadow-md bg-gray-100 aspect-square">
            {person.image ? (
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                <span className="text-4xl font-bold text-gray-400">
                  {person.name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          <h4 className="font-bold text-gray-900 text-sm mb-1">
            {person.name}
          </h4>
          <p className="text-xs text-gray-600">{person.role}</p>
        </div>
      ))}
    </div>
  </div>
      </Section>


      {/* OUTREACH */}
      <Section className="">
  <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

    {/* Eyebrow */}
    <div className="text-center text-sky-500 font-semibold text-lg uppercase tracking-wide">
      SHARING KNOWLEDGE AND EXTENDING TECH EDUCATION TO MASSES
    </div>

    {/* Title */}
    <h2 className="text-center mt-3 text-2xl md:text-3xl font-extrabold text-amber-400">
      Outreach
    </h2>

    {/* GRID */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {OUTREACH_DATA.map((section, idx) => {
        const startIndex = OUTREACH_DATA
          .slice(0, idx)
          .reduce((acc, s) => acc + s.images.length, 0);

        return (
          <OutreachSection
            key={idx}
            title={section.title}
            images={section.images}
            onOpen={(i) => openModal(allOutreachImages, i)}
            startIndex={startIndex}
          />
        );
      })}
    </div>

  </div>
</Section>



      {/* HIGHLIGHTS */}
      {/* FTC 2024-25 Competition Highlights */}
      <section className="pt-3 pb-6 md:pt-4 md:pb-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 ">
          {/* Eyebrow */}
          <div className="text-center text-sky-500 font-semibold text-lg uppercase tracking-wide">
            ABOUT THE BIG DAY
          </div>

          {/* Title */}
          <h2 className="text-center mt-3 text-2xl md:text-3xl font-extrabold text-amber-400">
            FTC 2024-25 Competition Highlights
          </h2>

          {/* Image Grid */}
          <div className="mt-5 flex justify-center">
            <div className="inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 md:gap-9">
              {HIGHLIGHT_IMAGES.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => openModal(HIGHLIGHT_IMAGES, i)}
                  className="group overflow-hidden rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-[170px] sm:w-[220px] md:w-[200px] h-28 md:h-36 object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="pt-3 pb-6 md:pt-4 md:pb-8">
        {/* Eyebrow */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center text-sky-500 font-semibold text-lg uppercase tracking-wide">
            GENEROUS HEARTS WHO MADE IT POSSIBLE
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center mt-3 text-2xl md:text-3xl font-extrabold text-amber-400">
          Our Sponsors
        </h2>

        {/* Sponsors Grid */}
        <div className="mt-5 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 place-items-center">
          {SPONSOR_LOGOS.map((sponsor, i) => (
            <img
              key={i}
              src={sponsor.src}
              alt={sponsor.alt}
              className="max-h-20 max-w-[220px] object-contain"
            />
          ))}
        </div>
      </section>

      <Modal
        images={modalImages}
        index={index}
        setIndex={setIndex}
        onClose={closeModal}
        downloadNamePrefix="FTC-2024-25"
      />
    </main>
  );
}
