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
    <main
      className="relative bg-white min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url('https://ria.sohamacademy.org/wp-content/uploads/2025/01/Snapinst.app_469204666_1514121172637631_4412047678977477125_n_1080-1024x576.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Transparent overlay for 80% effect */}
      <div className="absolute inset-0 bg-white/80 z-0"></div>

      {/* Page content */}
      <div className="relative z-10">
        {/* <section>
          <div className="mb-4 sm:mb-12">
            <SectionHeader
              title="Contact"
              subtitle="Want a similar program for your school or institution? Don’t hesitate to reach out!"
            />
          </div>
        </section> */}

        <ContactSection />
      </div>

      {/* Alert message */}
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
