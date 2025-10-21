
import React, { useEffect, useMemo, useState } from "react";
import SectionHeader from "../components/SectionHeader"; 

const REPORTS = [
  {
    id: "annual-2024",
    category: "Annual Report",
    title: "Soham Activities Report 2024-25",
    date: "March 2025",
    thumb: "/reports/annual-2024-thumb.jpg",
    pdf: "/reports/annual-2024.pdf",
  },
  
];

const TABS = [
  "Monthly Editions",
  "Exhibition Special Editions",
  "Annual Activities Edition",
];

function IconView() {
  return (
    <svg className="w-5 h-5 text-sky-500" viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconDownload() {
  return (
    <svg className="w-5 h-5 text-sky-500" viewBox="0 0 24 24" fill="none">
      <path d="M12 3v13M5 14l7 7 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ReportsPage() {
  
  const [activeTab, setActiveTab] = useState(TABS[2]);
  const [query, setQuery] = useState("");
  const [openPdf, setOpenPdf] = useState(null);


  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenPdf(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return REPORTS.filter((r) => r.category === activeTab && (!q || r.title.toLowerCase().includes(q) || r.date.toLowerCase().includes(q)));
  }, [activeTab, query]);

  return (
    <main className="bg-white min-h-screen ">

      <SectionHeader
        title="Reports & Publications"
        subtitle="Explore our comprehensive collection of reports, publications, and documentation showcasing our journey, achievements, and impact in robotics education across various schools and institutions."
      />

      <div className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center">
          <div className="inline-flex gap-3 bg-transparent flex-wrap justify-center">
            {TABS.map((tab) => {
              const active = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 bt-3 text-sm rounded-md transition ${active
                      ? "bg-[#00B7FF] text-white shadow"
                      : "bg-white text-gray-700 border border-transparent hover:border-slate-200"
                    }`}
                  aria-pressed={active}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-6 py-2 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{activeTab}</h2>
        <p className="text-gray-500 mb-8">Comprehensive yearly reports covering all our activities and achievements</p>


        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 justify-start items-start">
          {filtered.length ? (
            filtered.map((r) => (
              <article key={r.id} className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm max-w-md">

                <div className="relative h-52 overflow-hidden bg-slate-50">
                  <img
                    src={r.thumb}
                    alt={r.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Hover overlay (View / Download) */}
                  <div className="absolute inset-0 flex items-start justify-between p-3 pointer-events-none">
                    <div className="pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      {/* optional small icon placeholder */}
                      <div className="bg-white/80 p-2 rounded-md shadow">
                        <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none"><path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                    </div>

                    <div className="flex gap-3 pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => setOpenPdf(r.pdf)}
                        aria-label={`View ${r.title}`}
                        className="bg-white/95 p-2 rounded-full shadow hover:bg-white transition"
                      >
                        <IconView />
                      </button>
                      <a
                        href={r.pdf}
                        download
                        aria-label={`Download ${r.title}`}
                        className="bg-white/95 p-2 rounded-full shadow hover:bg-white transition flex items-center justify-center"
                      >
                        <IconDownload />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="text-xs text-sky-500 font-medium mb-2">{r.category}</div>
                  <h3 className="text-lg font-semibold text-sky-600 hover:text-sky-700">{r.title}</h3>
                  <div className="mt-3 text-sm text-gray-400">{r.date}</div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-10">No reports found in this category.</div>
          )}
        </div>
      </section>

      {/* PDF Modal (iframe) */}
      {openPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="dialog" aria-modal="true">
          <div className="absolute inset-0" onClick={() => setOpenPdf(null)} />
          <div className="relative w-full max-w-5xl mx-4 bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-3 border-b border-gray-100">
              <div className="text-sm text-gray-700">Preview</div>
              <div className="flex items-center gap-3">
                <a href={openPdf} download className="text-sm text-sky-500 px-3 py-1 rounded-md hover:bg-slate-50">Download</a>
                <button onClick={() => setOpenPdf(null)} aria-label="Close preview" className="p-2 rounded-md hover:bg-slate-50">
                  <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>

            <div className="aspect-[4/3]">
              <iframe src={openPdf} title="Report Preview" className="w-full h-full" frameBorder="0" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
