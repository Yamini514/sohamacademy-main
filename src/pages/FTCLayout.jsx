// src/pages/FTCLayout.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Container from "../components/layout/Container";
import { FTC_SIDE_PX } from "../components/ftc/FtcSection";

const YEARS = [
  // { path: "about", label: "About FTC" },
  { path: "2025-26", label: "FTC 2025-26" },
  { path: "2024-25", label: "FTC 2024-25" },
  { path: "2023-24", label: "FTC 2023-24" },
];

export default function FTCLayout() {
  return (
    <main className="bg-white min-h-screen">
      {/* Tabs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <Container className={`${FTC_SIDE_PX} py-4 flex justify-center`}>
          <div className="inline-flex rounded-xl bg-white p-1 shadow-sm border border-slate-200">
            {YEARS.map((t) => (
              <NavLink
                key={t.path}
                to={`/ftc/${t.path}`}
                className={({ isActive }) =>
                  [
                    "px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300",
                    isActive
                      ? "bg-[#00B7FF] text-white shadow"
                      : "text-slate-700 hover:bg-slate-100",
                  ].join(" ")
                }
              >
                {t.label.replace("FTC ", "")}
              </NavLink>
            ))}
          </div>
        </Container>
      </div>

      {/* Page content */}
      <Outlet />
    </main>
  );
}
