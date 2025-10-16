// src/pages/ContactPage.jsx
import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const handleMessage = (e) => {
      const detail = e?.detail;
      if (detail?.type && detail?.text) {
        setAlert(detail);
      
        const t = setTimeout(() => setAlert(null), 3500);
        return () => clearTimeout(t);
      }
    };

    window.addEventListener("contact:status", handleMessage);
    return () => window.removeEventListener("contact:status", handleMessage);
  }, []);

  return (
    <main className="bg-white min-h-screen relative">
      {/* Header */}
      <section >
        <div className="max-w-7xl mx-auto ">
          <SectionHeader
            title="Contact"
            subtitle="Want a similar program for your school or institution? Don’t hesitate to reach out!"
          />
        </div>
      </section>
      <ContactSection />

      {/* Floating Message (toast) */}
      {alert && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-lg shadow-md text-white text-sm font-medium transition-all animate-fade-in ${
            alert.type === "error" ? "bg-rose-600" : "bg-green-600"
          }`}
          role="status"
          aria-live="polite"
        >
          {alert.text}
        </div>
      )}
    </main>
  );
}
