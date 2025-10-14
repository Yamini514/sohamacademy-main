import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = {
  light: {
    primary: "#FFFFFF",  // background white
    secondary: "#F5F7FA", // subtle gray sections
    accent: "#00B7FF",    // sky blue buttons / icons
    highlight: "#F4B83A", // golden text accents
    heading: "#1E293B",   // dark slate text (titles)
    text: "#475569",      // paragraph text
    border: "#E2E8F0",    // light gray border
    link: "#0284C7",      // link blue
  },
};

function hexToRgbSpace(hex) {
  if (!hex) return "0 0 0";
  const h = hex.replace("#", "");
  const bigint = parseInt(h.length === 3 ? h.split("").map(c => c + c).join("") : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r} ${g} ${b}`;
}

export const ThemeProvider = ({ children }) => {
  const [themeKey] = useState("light");
  const current = themes[themeKey];

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(current).forEach(([k, v]) => {
      root.style.setProperty(`--color-${k}`, v);
      root.style.setProperty(`--color-${k}-rgb`, hexToRgbSpace(v));
    });
  }, [current]);

  return (
    <ThemeContext.Provider value={{ themeKey, current }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
