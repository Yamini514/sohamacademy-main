import React, { useState } from "react";
import videoImage from "../assets/video.png";  

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="video-section"
      className="py-4 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* --- Left Content --- */}
        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold text-gray-900  leading-tight">
            Robotics is <span className="text-black">Fun,</span>
          </h2>
          <h3 className="text-2xl font-bold text-sky-500">
            Exciting & Engaging!
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
            Robotics In Academics is a unique hands-on robotics training program
            initiated by Soham Academy of Human Excellence. It aims to bring the
            latest and greatest technologies to the doorstep of children, preparing them for a
            technologically advanced world that they will inherit. Our well-structured
            training program assists children in developing a sustained scientific temperament.
          </p>
        </div>

        {/* --- Right Video Card --- */}
        <div className="relative w-full flex justify-center md:justify-end">
          <div
            onClick={() => setIsPlaying(true)}
            className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg group transform transition-transform duration-300 hover:scale-[1.03] w-full max-w-xl"
          >
            {/* Video thumbnail image */}
            <img
              src={videoImage}
              alt="Soham Academy Robotics Program"
              className="w-full h-[290px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/30 group-hover:bg-black/30 transition-colors" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 bg-sky-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-white ml-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Video Modal */}
          {isPlaying && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
              {/* Close button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-6 right-8 text-white hover:text-gray-300 text-3xl font-light"
              >
                ×
              </button>

              <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/BMjo7qHE58k?autoplay=1&rel=0"
                  title="Robotics Program Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
