// components/SectionHeader.jsx
import React from "react";

export default function SectionHeader({ title, subtitle, className = "" }) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-center gap-3 mt-4  px-11 sm:px-11 md:px-11">
        <span
          aria-hidden="true"
          className="w-1.5 h-12 rounded inline-block"
          style={{ backgroundColor: "var(--color-logo, #01C1F2)" }}
        />

        {/* Title */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight"
          style={{ color: "var(--color-highlight, #111111)" }}
        >
          {title}
        </h1>
      </div>

      {subtitle && (
        <p
          className="mt-1 md:mt-3 px-12 sm:px-12 md:px-14 text-sm sm:text-base md:text-lg leading-relaxed text-[var(--color-text-secondary,#6b7280)]"
          style={{ color: "var(--color-text-secondary,#6b7280)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
