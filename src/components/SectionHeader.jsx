import React from "react";
export default function SectionHeader({ title, subtitle, className = "" }) {
  return (
    <div className={`mb-8 ${className}`}>
      {/* Title row: accent bar + heading */}
      <div className="flex items-start py-2 px-10 gap-3">
        {/* Vertical accent bar */}
        <span
          aria-hidden="true"
          className="w-1.5 md:w-1.5 h-10 md:h-12 rounded"
          style={{ backgroundColor: "var(--color-link, #00B7FF)" }}
        />

        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
          style={{ color: "var(--color-highlight)" }}
        >
          {title}
        </h1>
      </div>

      {subtitle && (
       <p
  className="mt-4 md:mt-6 ml-0 md:ml-14 text-base sm:text-lg md:text-xl leading-relaxed text-[var(--color-text-secondary)]"
  style={{ color: "var(--color-text-secondary)" }}
>
  {subtitle}
</p>

      )}
    </div>
  );
}
