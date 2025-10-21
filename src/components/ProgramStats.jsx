// src/components/ProgramStats.jsx
import React, { useEffect, useRef, useState } from "react";
import { Users, Home, MapPin, Map, Award, Lightbulb, Calendar } from "lucide-react";

/**
 * ProgramStats
 * - animated counters that start when section enters viewport
 * - lucide-react icons
 * - hover/focus highlight clearly shows which card is active
 * - console.log on hover/focus for quick verification
 */

function formatNumber(n) {
  return new Intl.NumberFormat("en-US").format(Math.round(n));
}

function parseValue(value) {
  if (typeof value === "number") return { num: value, suffix: "" };
  if (typeof value === "string") {
    const match = value.match(/^([\d,\.]+)(\+)?$/);
    if (match) {
      const num = Number(match[1].replace(/,/g, ""));
      const suffix = match[2] || "";
      return { num: Number.isFinite(num) ? num : 0, suffix };
    }
    const num = parseFloat(value) || 0;
    return { num, suffix: value.replace(/[\d,\.]/g, "") };
  }
  return { num: 0, suffix: "" };
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

const DEFAULT_ITEMS = [
  { id: "students", label: "Students Trained", value: 83211, duration: 1700, icon: <Users className="w-6 h-6" /> },
  { id: "schools", label: "Schools Assisted", value: 438, duration: 1400, icon: <Home className="w-6 h-6" /> },
  { id: "states", label: "States Reached", value: 4, duration: 900, icon: <MapPin className="w-6 h-6" /> },
  { id: "districts", label: "Districts Benefited", value: 27, duration: 1100, icon: <Map className="w-6 h-6" /> },
  { id: "projects", label: "Creative Projects", value: 6141, duration: 1500, icon: <Lightbulb className="w-6 h-6" /> },
  { id: "years", label: "Years of Excellence", value: "5+", duration: 700, icon: <Calendar className="w-6 h-6" /> },
];

export default function ProgramStats({ items = DEFAULT_ITEMS, className = "" }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(() =>
    items.map((itm) => (parseValue(itm.value).num ? 0 : itm.value))
  );
  const [hoveredId, setHoveredId] = useState(null);
  const [focusedId, setFocusedId] = useState(null);

  
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Animate counters when visible
  useEffect(() => {
    if (!visible) return;

    const rafIds = [];
    const startTimes = [];

    items.forEach((itm, idx) => {
      const { num } = parseValue(itm.value);
      const duration = itm.duration ?? 1500;
      startTimes[idx] = null;

      function step(ts) {
        if (!startTimes[idx]) startTimes[idx] = ts;
        const progress = Math.min((ts - startTimes[idx]) / duration, 1);
        const eased = easeOutCubic(progress);
        const current = Math.round(num * eased);
        setCounts((prev) => {
          const next = [...prev];
          next[idx] = current;
          return next;
        });
        if (progress < 1) {
          rafIds[idx] = requestAnimationFrame(step);
        } else {
          setCounts((prev) => {
            const next = [...prev];
            next[idx] = num;
            return next;
          });
        }
      }

      rafIds[idx] = requestAnimationFrame(step);
    });

    return () => {
      rafIds.forEach((id) => id && cancelAnimationFrame(id));
    };
    
  }, [visible]);

  
  const handleEnter = (id, label) => {
    setHoveredId(id);
    console.log("Hovered:", id, label);
  };
  const handleLeave = () => {
    setHoveredId(null);
  };
  const handleFocus = (id, label) => {
    setFocusedId(id);
    console.log("Focused:", id, label);
  };
  const handleBlur = () => {
    setFocusedId(null);
  };

  return (
    <section
      ref={containerRef}
      className={` py-10 bg-white ${className}`}
      aria-label="Program statistics"
    >
      <div className="max-w-7xl mx-auto mt-2px-6">
        <div className="text-center mb-10">
          {/* <p className="text-sky-500 font-semibold tracking-wide">ROBOTICS IN ACADEMICS</p> */}
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 px-8">
            Our track history of Robotics in Academics Competition Program records
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch px-12">
          {items.map((itm, idx) => {
            const { num, suffix } = parseValue(itm.value);
            const displayValue =
              typeof itm.value === "string" && !num
                ? itm.value
                : formatNumber(counts[idx] ?? 0) + (suffix || (typeof itm.value === "string" && itm.value.endsWith("+") ? "+" : ""));

            const isActive = hoveredId === itm.id || focusedId === itm.id;

            return (
              <div
                key={itm.id ?? idx}
                role="button"
                tabIndex={0}
                onMouseEnter={() => handleEnter(itm.id, itm.label)}
                onMouseLeave={handleLeave}
                onFocus={() => handleFocus(itm.id, itm.label)}
                onBlur={handleBlur}
                className={`flex flex-col items-center justify-center text-center bg-white border rounded-xl p-6 transition-all duration-300 cursor-default
                  ${isActive ? "border-sky-400 shadow-[0_12px_30px_rgba(0,183,255,0.12)] scale-[1.02]" : "border-gray-100 hover:border-sky-300 hover:shadow-md"}
                `}
                aria-label={`${itm.label} ${displayValue}`}
              >
                <div
                  className={`mb-3 inline-flex items-center justify-center w-10 h-10 rounded-full ${isActive ? "bg-white ring-2 ring-sky-200" : "bg-sky-50"}`}
                  aria-hidden
                >
                  <span className={`${isActive ? "text-sky-500" : "text-sky-500"}`}>
                    {itm.icon}
                  </span>
                </div>

                <div className={`text-2xl md:text-3xl font-extrabold leading-none ${isActive ? "text-gray-900" : "text-gray-900"}`}>
                  {displayValue}
                </div>
                <div className={`mt-2 text-sm ${isActive ? "text-sky-600" : "text-gray-600"}`}>{itm.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
