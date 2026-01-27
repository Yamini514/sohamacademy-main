// src/pages/FTCLayout.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const YEARS = [
  { path: "about", label: "About FTC" },
  { path: "2025-26", label: "FTC 2025-26" },
  { path: "2024-25", label: "FTC 2024-25" },
  { path: "2023-24", label: "FTC 2023-24" },
];

export default function FTCLayout() {
  return (
    <main className="bg-white min-h-screen">
      {/* Tabs */}
      <div className="bg-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="inline-flex gap-3 flex-wrap justify-center">
            {YEARS.map((t) => (
              <NavLink
                key={t.path}
                to={`/ftc/${t.path}`}
                className={({ isActive }) =>
                  `px-3 py-1 text-sm rounded-md transition ${
                    isActive
                      ? "bg-[#00B7FF] text-white shadow"
                      : "bg-white text-gray-700 hover:border-slate-200"
                  }`
                }
              >
                {t.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Page content */}
      <Outlet />
    </main>
  );
}
