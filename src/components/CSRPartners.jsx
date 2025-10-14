import React from "react";

/**
 * CSRPartners
 * - grid of partner cards (logo + name)
 * - hover/focus highlight (border + shadow)
 * - responsive columns
 *
 * Provide a `partners` prop to customize logos and labels (logo can be local path or imported).
 */
export default function CSRPartners({ partners = null, className = "" }) {
  const defaultPartners = [
    { id: 1, name: "Accenture", logo: "/partners/accenture.png" },
    { id: 2, name: "Synchrony", logo: "/partners/synchrony.png" },
    { id: 3, name: "NCG Limited", logo: "/partners/ncg.png" },
    { id: 4, name: "SAP Technologies", logo: "/partners/sap.png" },
    { id: 5, name: "NTT Data", logo: "/partners/ntt.png" },
    { id: 6, name: "Coforge", logo: "/partners/coforge.png" },
    { id: 7, name: "KRM", logo: "/partners/krm.png" },
    { id: 8, name: "LET Technology Services", logo: "/partners/let.png" },
    { id: 9, name: "AMD", logo: "/partners/amd.png" },
    { id: 10, name: "Bimini Street", logo: "/partners/bimini.png" },
    { id: 11, name: "Gainsight", logo: "/partners/gainsight.png" },
    { id: 12, name: "StudiRanger", logo: "/partners/studiranger.png" },
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
