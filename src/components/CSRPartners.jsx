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

  return (
    <section className={`py-12 bg-white ${className}`} aria-label="CSR Partners">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">CSR Partners</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {list.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center justify-center gap-3 rounded-xl border border-gray-100 bg-white p-6 text-center transition-shadow duration-200 hover:shadow-md hover:border-sky-200 focus-within:shadow-md"
              tabIndex={0}
              role="button"
              aria-label={p.name}
            >
              <div className="w-20 h-20 flex items-center justify-center">
                {/* logo: use <img> if available else fallback icon */}
                {p.logo ? (
                  <img src={p.logo} alt={p.name} className="max-h-12 object-contain" loading="lazy" />
                ) : (
                  <div className="w-12 h-12 rounded-md bg-sky-50" />
                )}
              </div>
              <div className="text-sm font-medium text-gray-800">{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
