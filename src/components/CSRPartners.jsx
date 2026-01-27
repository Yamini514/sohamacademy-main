import React from "react";


export default function CSRPartners({ partners = null, className = "" }) {
  const defaultPartners = [
  { id: 1, name: "AMD", logo: "/Sponsor Logos & Ria logo/AMD.png" },
  { id: 2, name: "Coforge", logo: "/Sponsor Logos & Ria logo/Coforge.png" },
  { id: 3, name: "Colosseum", logo: "/Sponsor Logos & Ria logo/Colosseum.png" },
  { id: 4, name: "Gainsight", logo: "/Sponsor Logos & Ria logo/Gainsight.png" },
  { id: 5, name: "Kriti", logo: "/Sponsor Logos & Ria logo/Kriti.png" },
  { id: 6, name: "L&T", logo: "/Sponsor Logos & Ria logo/L&T.png" },
  { id: 7, name: "NCC", logo: "/Sponsor Logos & Ria logo/NCC.png" },
  { id: 8, name: "Nimble", logo: "/Sponsor Logos & Ria logo/Nimble.png" },
  { id: 9, name: "NTT", logo: "/Sponsor Logos & Ria logo/NTT DATA.png" },
  { id: 10, name: "Primavera", logo: "/Sponsor Logos & Ria logo/Primavera.png" },
  { id: 11, name: "Rimini", logo: "/Sponsor Logos & Ria logo/Rimini Street.png" },
  { id: 12, name: "Schrodinger", logo: "/Sponsor Logos & Ria logo/Schrodinger.png" },
  { id: 13, name: "SNP", logo: "/Sponsor Logos & Ria logo/Snp.png" },
  { id: 14, name: "Synchrony", logo: "/Sponsor Logos & Ria logo/Synchrony.png" },
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
