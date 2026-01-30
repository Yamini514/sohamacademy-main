import React, { useState, useEffect } from "react";
import { Download, Share2, X, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../components/layout/Container";
import { FtcHeading, FtcText, FTC_SIDE_PX } from "../components/ftc/FtcSection";

// import your images from assets folder
import ftc1 from "../assets/FTC.png";
import ftc2 from "../assets/ftc2.png";
import ftc3 from "../assets/ftc3.png";
// import ftc4 from "@/assets/ftc4.jpg";

const IMAGES = [
  { src: ftc1, alt: "FTC Competition - Team Presentation" },
  { src: ftc2, alt: "FTC Competition - Students with Robot" },
  { src: ftc3, alt: "FTC Arena Performance" },
  // { src: ftc4, alt: "FTC Robotics Demonstration" },
];

export default function FTC() {
  const [index, setIndex] = useState(-1);

  const open = (i) => setIndex(i);
  const close = () => setIndex(-1);

  useEffect(() => {
    const handleKey = (e) => {
      if (index < 0) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
      if (e.key === "ArrowRight")
        setIndex((i) => Math.min(i + 1, IMAGES.length - 1));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index]);

  const downloadImage = (src) => {
    const a = document.createElement("a");
    a.href = src;
    a.download = "FTC-Competition.jpg";
    a.click();
  };

  const shareImage = async (src) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "FTC Competition",
          text: "Check out this FTC Robotics image!",
          url: src,
        });
      } else {
        await navigator.clipboard.writeText(src);
        alert("Image URL copied to clipboard!");
      }
    } catch {
      await navigator.clipboard.writeText(src);
      alert("Couldn't share, link copied!");
    }
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="pt-10 pb-6">
        <Container className={FTC_SIDE_PX}>
          <FtcHeading as="h1">First Tech Challenge (FTC)</FtcHeading>
          <FtcText>
            We, Soham Academy (#24067), made our debut in the First Tech
            Challenge (FTC), joining a vibrant community of innovators from
            India, Kazakhstan, and Sri Lanka. Students from ZPHS, Boduppal and
            GHS Police Boys actively participated, showcasing our meticulously
            crafted robots and inspiring creativity at a global level.
          </FtcText>
        </Container>
      </section>

      {/* FTC Gallery */}
      <section className="pt-8 pb-12">
        <Container className={FTC_SIDE_PX}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {IMAGES.map((img, i) => (
              <div
                key={i}
                onClick={() => open(i)}
                className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white font-semibold">Click to View</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fullscreen Modal */}
      {index >= 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          {/* Buttons */}
          <button
            onClick={close}
            className="absolute top-6 right-6 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-black" />
          </button>

          <button
            onClick={() => downloadImage(IMAGES[index].src)}
            className="absolute top-6 right-20 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
            aria-label="Download"
          >
            <Download className="w-5 h-5 text-black" />
          </button>

          <button
            onClick={() => shareImage(IMAGES[index].src)}
            className="absolute top-6 right-32 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
            aria-label="Share"
          >
            <Share2 className="w-5 h-5 text-black" />
          </button>

          {index > 0 && (
            <button
              onClick={() => setIndex((i) => Math.max(i - 1, 0))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
          )}

          {index < IMAGES.length - 1 && (
            <button
              onClick={() => setIndex((i) => Math.min(i + 1, IMAGES.length - 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          )}

          {/* Image */}
          <div className="max-w-5xl max-h-[85vh] rounded-lg overflow-hidden">
            <img
              src={IMAGES[index].src}
              alt={IMAGES[index].alt}
              className="object-contain w-full h-full transition-transform duration-500"
            />
          </div>

          {/* Caption */}
          <p className="absolute text-white text-sm text-center w-full px-4">
            {IMAGES[index].alt}
          </p>
        </div>
      )}
    </main>
  );
}
