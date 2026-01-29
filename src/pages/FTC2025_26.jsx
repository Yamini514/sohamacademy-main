// src/pages/FTC/FTC2024_25.jsx
import React, { useEffect, useState } from "react";
import { Download, Share2, X, ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Sample images (reuse your existing assets for now)
import ftc1 from "../assets/FTC.png";
import ftc2 from "../assets/ftc2.png";
import ftc3 from "../assets/ftc3.png";
import logo from "../assets/brand.png";


// Team member images - you'll need to import these
// import sahadevImg from "../assets/team/sahadev.jpg";
// import prasadImg from "../assets/team/prasad.png";
// etc...

const HERO_IMAGES = [
  { src: ftc1, alt: "FTC 2024-25 - Team at event" },
  { src: ftc2, alt: "FTC 2024-25 - Students with robot" },
  { src: ftc3, alt: "FTC 2024-25 - Competition moment" },
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

const HIGHLIGHT_IMAGES = [
  { src: ftc3, alt: "Competition Highlights - Match" },
  { src: ftc2, alt: "Competition Highlights - Pit Area" },
  { src: ftc1, alt: "Competition Highlights - Award Moment" },
  { src: ftc3, alt: "Competition Highlights - Match" },
];

const SPONSOR_LOGOS = [
  { src: logo, alt: "Soham Academy Logo", name: "Soham Academy" },
  { src: ftc1, alt: "Texoham Logo", name: "Texoham Designs" },
];

const TEAM = [
  {
    name: "Sahadev Komaragiri",
    role: "Founder and Director, Soham Academy",
    // image: sahadevImg
  },
  {
    name: "Prasad Komaragiri",
    role: "Mentor",
    // image: prasadImg
  },
  {
    name: "Ramya",
    role: "Communication Coach",
    // image: ramyaImg
  },
  {
    name: "Jeshwanth",
    role: "Coach",
    // image: jeshwanthImg
  },
  {
    name: "Kushal Manikanta",
    role: "Mentor",
    // image: kushalImg
  },
  {
    name: "Jahnavi",
    role: "Junior Mentor",
    // image: jahnaviImg
  },
  {
    name: "Chandana",
    role: "Facilitator",
    // image: chandanaImg
  },
  {
    name: "Manohar",
    role: "Captain, Programmer",
    // image: manoharImg
  },
  {
    name: "Shikha",
    role: "Driver",
    // image: shikhaImg
  },
  {
    name: "Maithri",
    role: "Programming",
    // image: maithriImg
  },
  {
    name: "Teena",
    role: "Designing",
    // image: teenaImg
  },
  {
    name: "Harsha Vardhan",
    role: "Human Player and Build Team",
    // image: harshaImg
  },
  {
    name: "Akhil Prajwal",
    role: "Build Team",
    // image: akhilImg
  },
  {
    name: "Shiva",
    role: "Driver",
    // image: shivaImg
  },
  {
    name: "Sakshith",
    role: "Designing",
    // image: sakshithImg
  },
];

function Section({ eyebrow, title, children }) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {eyebrow && (
          <div className="text-xs justify-center items-center font-bold text-gray-500 uppercase mb-3">
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
  return (
    <div className="mb-12">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => onOpen(startIndex + i)}
            className="relative overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow"
            type="button"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
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
      <div className="max-w-7xl mx-auto  sm:px-10 lg:px-16 py-10 lg:py-00">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-0">
          {/* Hero Content */}
          <div className="text-amber-400 px-2 text-2xl font-bold uppercase">
            First Tech Challenge (FTC) 2025-26
          </div>
          <div className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* RIGHT TEXT */}
              <div className="prose max-w-none">
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
              {/* LEFT IMAGE */}
              <div className="flex justify-center">
                <img
                  src={HERO_IMAGES[0].src}
                  alt="Soham Champs 24067"
                  className="w-full max-w-lg rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-7xl mx-auto px-6">
          {/* Eyebrow */}
          <div className="text-center text-sky-400 text-2xl font-bold  uppercase">
            MACHINE TAKING PART IN THE COMPETITION
          </div>

          {/* Title */}
          <h2 className="mt-2 text-center text-2xl md:text-3xl font-bold text-amber-400">
            Our FTC Bot & Practice Hours
          </h2>

          {/* Image Grid */}
          <div className="mt-8 flex justify-center">
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
      <Section className="py-12 md:py-16">
        {/* Shared container */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Eyebrow */}
          <div className="text-center text-sky-400 text-2xl font-bold uppercase">
            PARTICIPATING TEAM AND MENTORS
          </div>

          {/* Title */}
          <h2 className="mt-3 text-center text-2xl md:text-3xl font-extrabold text-amber-400 mb-8">
            Our Super Team
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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

      <Section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Eyebrow */}
          <div className="text-center text-sky-400 text-2xl font-bold uppercase">
            SHARING KNOWLEDGE AND EXTENDING TECH EDUCATION TO MASSES
          </div>

          {/* Title */}
          <h2 className="mt-3 text-center text-2xl md:text-3xl font-extrabold text-amber-400 mb-12">
            Outreach
          </h2>

          {/* Outreach Sections */}
          <div className="space-y-7">
            {OUTREACH_DATA.map((section, idx) => {
              const startIndex = OUTREACH_DATA.slice(0, idx).reduce(
                (acc, s) => acc + s.images.length,
                0,
              );

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

      <Section className="py-12 md:py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Eyebrow */}
          <div className="text-center text-sky-400 text-2xl font-bold uppercase">
            VOLUNTEER TEAM
          </div>

          {/* Title */}
          <h2 className="mt-3 text-center text-2xl md:text-3xl font-extrabold text-amber-400 ">
            Meet with RTX Team
          </h2>

          {/* Volunteer Sections */}
          <div className="space-y-14">
            {OUTREACH_DATA.map((section, idx) => {
              const startIndex = OUTREACH_DATA.slice(0, idx).reduce(
                (acc, s) => acc + s.images.length,
                0,
              );

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

      {/* SPONSORS */}
    <section className="py-6 md:py-6">
        {/* Eyebrow */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center text-sky-400 text-3xl md:text-2xl font-bold uppercase ">
            GENEROUS HEARTS WHO MADE IT POSSIBLE
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-2 text-center text-2xl md:text-3xl font-extrabold text-amber-400">
          Our Sponsors
        </h2>

        {/* Sponsors Grid */}
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 place-items-center">
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
