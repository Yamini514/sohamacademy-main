import React, { useEffect, useMemo, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import maImg from "../assets/ma.png"; // fallback only
import { api } from "../store/api";

const TABS = [
  "Monthly Editions",
  "Exhibition Special Editions",
  "Annual Activities Edition",
];

// Convert backend types → frontend tab names
function convertType(type) {
  switch (type) {
    case "Monthly":
      return "Monthly Editions";
    case "Exhibition":
      return "Exhibition Special Editions";
    case "Annual":
      return "Annual Activities Edition";
    default:
      return "Others";
  }
}

function IconView() {
  return (
    <svg className="w-5 h-5 text-sky-500" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg className="w-5 h-5 text-sky-500" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3v13M5 14l7 7 7-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [query, setQuery] = useState("");
  const [openPdf, setOpenPdf] = useState(null);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  // ============================
  // FETCH REPORTS FROM PUBLIC API
  // ============================
  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        const res = await api.get("reports", { auth: false });

        if (res?.data) {
          const formatted = res.data.map((r) => ({
            id: r.id,
            category: convertType(r.report_type),
            title: r.report_name,
            date: `${r.month || ""}-${r.year || ""}`.replace(/^-|-$/g, "") || "N/A",
            thumb: r.thumb_url, // Use thumbnail from backend
            pdf: r.file_url,
          }));

          setReports(formatted);
        }
      } catch (e) {
        console.error("Failed to fetch reports", e);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  // Close PDF modal with ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenPdf(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Handle image error
  const handleImageError = (reportId) => {
    setImageErrors((prev) => ({
      ...prev,
      [reportId]: true,
    }));
  };

  // ============================
  // FILTER BASED ON TAB + SEARCH
  // ============================
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return reports.filter(
      (r) =>
        r.category === activeTab &&
        (!q ||
          r.title.toLowerCase().includes(q) ||
          r.date.toLowerCase().includes(q))
    );
  }, [activeTab, query, reports]);

  // ============================
  // RENDER UI
  // ============================
  return (
    <main className="bg-white min-h-screen">
      <SectionHeader
        title="Reports & Publications"
        subtitle="Explore our comprehensive collection of reports, publications, documenting our journey & achievements."
      />

      {/* TABS */}
      <div className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center">
          <div className="inline-flex gap-3 flex-wrap justify-center">
            {TABS.map((tab) => {
              const active = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 text-sm rounded-md transition ${
                    active
                      ? "bg-[#00B7FF] text-white shadow"
                      : "bg-white text-gray-700 hover:border-slate-200"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* BODY */}
      <section className="max-w-7xl mx-auto px-6 py-1.5 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          {activeTab}
        </h2>
        <p className="text-gray-500 mb-6">Browse through the latest reports</p>

        {/* SEARCH */}
        <div className="mb-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search reports by title or date..."
            className="max-w-md w-full mx-auto px-4 py-2 border rounded-md"
          />
        </div>

        {/* LIST */}
        {loading ? (
          <div className="text-center text-gray-500 py-10">
            Loading reports...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.length ? (
              filtered.map((r) => (
                <article
                  key={r.id}
                  className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
                >
                  {/* Thumbnail */}
                  <div className="relative h-52 overflow-hidden bg-slate-50">
                    <img
                      src={imageErrors[r.id] || !r.thumb ? maImg : r.thumb}
                      alt={r.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      onError={() => handleImageError(r.id)}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex justify-between p-3 opacity-0 group-hover:opacity-100 pointer-events-none transition">
                      <div className="pointer-events-auto">
                        <div className="bg-white/80 p-2 rounded-md shadow">
                          <svg
                            className="w-5 h-5 text-gray-700"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M3 7h18M3 12h18M3 17h18"
                              stroke="currentColor"
                              strokeWidth="1.4"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="flex gap-3 pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => setOpenPdf(r.pdf)}
                          aria-label={`View ${r.title}`}
                          className="bg-white/95 p-2 rounded-full shadow hover:bg-white transition"
                          title={`Preview ${r.title}`}
                        >
                          <IconView />
                        </button>
                        <a
                          href={r.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          aria-label={`Download ${r.title}`}
                          className="bg-white/95 p-2 rounded-full shadow hover:bg-white transition flex items-center justify-center"
                          title={`Download ${r.title}`}
                        >
                          <IconDownload />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* CARD BODY */}
                  <div className="p-5 text-left">
                    <div className="text-xs text-sky-500 mb-2">
                      {r.category}
                    </div>
                    <h3 className="text-lg font-semibold text-sky-600">
                      {r.title}
                    </h3>
                    <div className="mt-3 text-sm text-gray-400">{r.date}</div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full text-gray-500 py-10">
                No reports found in this category.
              </div>
            )}
          </div>
        )}
      </section>

      {/* PDF Preview Modal */}
      {openPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div
            className="absolute inset-0"
            onClick={() => setOpenPdf(null)}
          />
          <div className="relative bg-white rounded-lg w-[95vw] max-h-[95vh] shadow-lg overflow-hidden">
            <div className="flex justify-between p-3 border-b">
              <span className="text-sm text-gray-700">Preview</span>

              <div className="flex gap-3">
                <a
                  href={openPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="text-sm text-sky-500 px-3 py-1 hover:bg-slate-50 rounded-md"
                >
                  Download
                </a>
                <button
                  onClick={() => setOpenPdf(null)}
                  className="p-2 hover:bg-slate-50 rounded-md"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="w-full h-[84vh]">
              <iframe src={openPdf} className="w-full h-full" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}