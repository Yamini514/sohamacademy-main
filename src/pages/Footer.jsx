import React from "react";
import logo from "../../public/brand.png"; // replace with your actual logo path
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border,#E2E8F0)] bg-white mt-2 py-4 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6">
        
        {/* Left side: Contact Info */}
        <div className="flex flex-col items-start text-[var(--color-text,#475569)]">
          <a
            href="mailto:admin@sohamacademy.org"
            className="flex items-center gap-1 hover:text-sky-500 transition-colors"
          >
            <Mail className="w-4 h-4 text-sky-500" />
            admin@sohamacademy.org
          </a>
          <a
            href="tel:+919000843268"
            className="flex items-center gap-1 hover:text-sky-500 transition-colors mt-1"
          >
            <Phone className="w-4 h-4 text-sky-500" />
            +91 90008 43268
          </a>
        </div>

        {/* Center: Copyright + Developer */}
        <p className="text-center text-gray-500 text-xs sm:text-sm">
          Copyright ©{" "}
          <span className="font-medium text-gray-700">
            Soham Academy of Human Excellence
          </span>{" "}
          | Designed & Developed by{" "}
          <a
            href="https://www.srinishtha.com "
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline font-medium"
          >
            Srinishtha Technologies LLP
          </a>
        </p>

        {/* Right side: Small Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Soham Academy Logo"
            className="h-auto w-auto max-h-10 object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
