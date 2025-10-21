import React from "react";
import amd from "../assets/CSR/amd.png";
import coforge from "../assets/CSR/coforge.png";
import colosseum from "../assets/CSR/colosseum.png";
import gainsight from "../assets/CSR/gainsight.png";
import kriti from "../assets/CSR/kriti.png";
import lt from "../assets/CSR/l&t.png";
import ncc from "../assets/CSR/ncc.png";
import nimble from "../assets/CSR/nimble.png";
import ntt from "../assets/CSR/ntt.png";
import primavera from "../assets/CSR/primavera.png";
import rimini from "../assets/CSR/rimini.png";
import schrodinger from "../assets/CSR/schrodinger.png";
import snp from "../assets/CSR/snp.png";
import synchrony from "../assets/CSR/synchrony.png";

export default function CSRPartners({ partners = null, className = "" }) {
  const defaultPartners = [
    { id: 1, name: "AMD", logo: amd },
    { id: 2, name: "Coforge", logo: coforge },
    { id: 3, name: "Colosseum", logo: colosseum },
    { id: 4, name: "Gainsight", logo: gainsight },
    { id: 5, name: "Kriti", logo: kriti },
    { id: 6, name: "L&T", logo: lt },
    { id: 7, name: "NCC", logo: ncc },
    { id: 8, name: "Nimble", logo: nimble },
    { id: 9, name: "NTT", logo: ntt },
    { id: 10, name: "Primavera", logo: primavera },
    { id: 11, name: "Rimini", logo: rimini },
    { id: 12, name: "Schrodinger", logo: schrodinger },
    { id: 13, name: "SNP", logo: snp },
    { id: 14, name: "Synchrony", logo: synchrony },
  ];

  const list = partners ?? defaultPartners;
  const extendedList = [...list, ...list]; // duplicate for infinite scroll

  return (
    <section
      className={`relative ${className} overflow-hidden`}
      aria-label="CSR Partners"
      style={{
        backgroundImage:
          "url(https://ria.sohamacademy.org/wp-content/uploads/2025/01/Snapinst.app_469069816_1389351408615023_4733626418636343444_n_1080-1024x576.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/80 z-0"></div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 40s linear infinite;
          }
          .pause-on-hover:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col items-center z-10">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
          CSR Partners
        </h3>

        {/* Carousel */}
        <div className="overflow-hidden w-full">
          <div className="animate-scroll pause-on-hover flex items-center gap-12">
            {extendedList.map((p, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[140px]"
              >
                <div className="h-20 w-36 md:h-24 md:w-40 flex items-center justify-center">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-16 md:max-h-20 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 text-sm md:text-base font-medium text-gray-800">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
