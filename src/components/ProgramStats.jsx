// src/components/ProgramStats.jsx
import React, { useEffect, useRef, useState } from "react";
import { Users, Home, MapPin, Map, Lightbulb, Calendar } from "lucide-react";
import {api} from "../store/api"
 
function formatNumber(n) {
  return new Intl.NumberFormat("en-US").format(Math.round(n));
}
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}
 
// Helper to parse incoming value (number or strings like "5+" or "83,211")
function parseIncoming(value) {
  if (value == null) return { num: 0, raw: 0, suffix: "" };
  if (typeof value === "number") return { num: value, raw: value, suffix: "" };
  if (typeof value === "string") {
    // capture trailing '+' or non-digit suffix
    const plus = value.trim().endsWith("+");
    const digits = value.replace(/[^\d.]/g, "");
    const num = digits ? Number(digits) : NaN;
    return {
      num: Number.isFinite(num) ? num : 0,
      raw: value,
      suffix: plus ? "+" : value.replace(/[\d,.\s+]/g, "") || ""
    };
  }
  return { num: 0, raw: value, suffix: "" };
}
 
export default function ProgramStats({ className = "" }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [statsData, setStatsData] = useState(null);
  const [counts, setCounts] = useState([]);
  const [labels, setLabels] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [focusedId, setFocusedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [statsLoaded, setStatsLoaded] = useState(false);
  const fetchStats = async () => {
    try {
      setLoading(true);
const result = await api.get("dashboard_stats", { auth: false });
      console.log("[ProgramStats] dashboard_stats response:", result);
      setStatsData(result || {});
      setStatsLoaded(true);
    } catch (err) {
      console.error("[ProgramStats] fetch error:", err);
      setStatsData({});
      setStatsLoaded(true);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    fetchStats();
  }, []);
 
  // ----- IntersectionObserver trigger for when component is visible -----
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
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
 
  // ----- Build items dynamically. Uses fallback mapping if keys are different -----
  // Note: adjust the mapping below if your API uses different key names.
  const resolved = statsData || {};
  const items = [
    {
      id: "students",
      label: "Students Trained",
      // try multiple possible keys your backend might return
      value: resolved.Students ?? resolved.students ?? resolved.TotalStudents ?? 0,
      duration: 1700,
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: "schools",
      label: "Schools Assisted",
      value: resolved.Schools ?? resolved.schools ?? 0,
      duration: 1400,
      icon: <Home className="w-6 h-6" />,
    },
    {
      id: "states",
      label: "States Reached",
      value: resolved.States ?? resolved.states ?? 0,
      duration: 900,
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      id: "districts",
      label: "Districts Benefited",
      value: resolved.Districts ?? resolved.districts ?? 0,
      duration: 1100,
      icon: <Map className="w-6 h-6" />,
    },
    // {
    //   id: "projects",
    //   label: "Creative Projects",
    //   value: resolved.Projects ?? resolved.projects ?? resolved.CreativeProjects ?? 0,
    //   duration: 1500,
    //   icon: <Lightbulb className="w-6 h-6" />,
    // },
      { id: "projects", label: "Creative Projects", value: 6141, duration: 1500, icon: <Lightbulb className="w-6 h-6" /> },

    {
      id: "years",
      label: "Years of Excellence",
      // if backend gives string like "5+" keep it
      value: resolved.Years ?? resolved.years ?? "5+",
      duration: 700,
      icon: <Calendar className="w-6 h-6" />,
    },
  ];
 
  // ----- initialize counts (zero or immediate for non-numeric values) when statsData arrives -----
  useEffect(() => {
    if (!statsLoaded) return;
    const initialCounts = items.map((itm) => {
      const parsed = parseIncoming(itm.value);
      // for values that are non-numeric (like "5+"), store 0 for animation but preserve raw label
      return parsed.num || 0;
    });
    const initialLabels = items.map((itm) => {
      const parsed = parseIncoming(itm.value);
      return parsed.raw ?? "";
    });
    setCounts(initialCounts.map(() => 0)); // start from 0 for animation
    setLabels(initialLabels);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statsLoaded, /*items intentionally not in deps to avoid frequent reset*/]);
 
  // ----- animate counters when component visible AND after stats loaded -----
  useEffect(() => {
    if (!visible || !statsLoaded) return;
 
    const rafIds = [];
    const startTimes = [];
 
    items.forEach((itm, idx) => {
      const parsed = parseIncoming(itm.value);
      const target = parsed.num || 0;
      const duration = itm.duration ?? 1500;
      startTimes[idx] = null;
 
      function step(ts) {
        if (!startTimes[idx]) startTimes[idx] = ts;
        const progress = Math.min((ts - startTimes[idx]) / duration, 1);
        const eased = easeOutCubic(progress);
        const current = Math.round(target * eased);
 
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
            next[idx] = target;
            return next;
          });
        }
      }
 
      rafIds[idx] = requestAnimationFrame(step);
    });
 
    return () => {
      rafIds.forEach((id) => id && cancelAnimationFrame(id));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, statsLoaded]);
 
  const handleEnter = (id) => setHoveredId(id);
  const handleLeave = () => setHoveredId(null);
  const handleFocus = (id) => setFocusedId(id);
  const handleBlur = () => setFocusedId(null);
 
  // ----- utility for rendering display value (handles suffix like "+") -----
  const displayFor = (idx, rawValue) => {
    const parsed = parseIncoming(rawValue);
    if (!parsed.raw || String(parsed.raw).match(/^[\d.,]+$/)) {
      // purely numeric -> use animated counts
      return formatNumber(counts[idx] ?? 0);
    } else {
      // contains non-digit (like "5+"), show raw text but animate numeric portion if possible
      if (parsed.num) {
        const animated = counts[idx] ?? 0;
        const suffix = parsed.suffix || (String(rawValue).trim().endsWith("+") ? "+" : "");
        return `${formatNumber(animated)}${suffix}`;
      }
      return String(parsed.raw);
    }
  };
 
  return (
    <section
      ref={containerRef}
      className={`py-10 bg-white ${className}`}
      aria-label="Program statistics"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 px-8">
            Our Track Record of Robotics in Academics Program
          </h2>
        </div>
 
        {loading ? (
          <div className="text-center text-gray-500">Loading stats...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch px-4">
            {items.map((itm, idx) => {
              const displayValue = displayFor(idx, itm.value);
              const isActive = hoveredId === itm.id || focusedId === itm.id;
              return (
                <div
                  key={itm.id}
                  role="button"
                  tabIndex={0}
                  onMouseEnter={() => handleEnter(itm.id)}
                  onMouseLeave={handleLeave}
                  onFocus={() => handleFocus(itm.id)}
                  onBlur={handleBlur}
                  className={`flex flex-col items-center justify-center text-center bg-white border rounded-xl p-6 transition-all duration-300 cursor-default
                    ${isActive
                    ? "border-sky-400 shadow-[0_12px_30px_rgba(0,183,255,0.12)] scale-[1.02]"
                    : "border-gray-300 hover:border-sky-300 hover:shadow-md"
                  }
                  `}
                >
                  <div
                    className={`mb-3 inline-flex items-center justify-center w-12 h-12 rounded-full ${isActive ? "bg-white ring-2 ring-sky-200" : "bg-sky-50"
                    } drop-shadow-md`}
                  >
                    <span className={`${isActive ? "text-sky-500" : "text-sky-500"}`}>
                    {React.cloneElement(itm.icon, { className: "w-6 h-6" })}
                  </span>
                  </div>
                  <div className="text-2xl md:text-3xl font-extrabold leading-none text-gray-900">
                    {displayValue}
                  </div>
                  <div
                  className={`mt-2 text-sm ${isActive ? "text-sky-600" : "text-gray-600"
                    }`}
                >
                  {itm.label}
                </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
 