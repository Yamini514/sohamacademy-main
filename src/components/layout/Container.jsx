// src/components/layout/Container.jsx
import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-7xl",
        "px-4 sm:px-6 lg:px-8 xl:px-10", // ✅ consistent side spacing on all screens
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
