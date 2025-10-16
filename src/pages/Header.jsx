import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
  { name: "Dashboard", external:"https://soham-academy-ui.netlify.app/" },
    { name: "Reports", to: "/reports" },
    { name: "FTC", to: "/ftc" },
    { name: "Contact", to: "/contact" },
    
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-17">
          {/* --- Left: Logo Section --- */}
          <div className="flex items-center space-x-3">
            
            <a href="/"> <img
              src="/brand.png"
              alt="Soham Academy Logo"
              className="h-14 w-auto object-contain"
            /></a>
          </div>

          {/* --- Right: Desktop Navigation --- */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((item) =>
              item.external ? (
                // ✅ External link (Dashboard)
                <a
                  key={item.name}
                   
                  href={item.external}
                  target="_self"

                 
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-gray-800 hover:text-sky-600 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-[15px] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-sky-600 border-b-2 border-sky-600 pb-1"
                        : "text-gray-800 hover:text-sky-600"
                    }`
                  }
                  end
                >
                  {item.name}
                </NavLink>
              )
            )}
          </nav>

          {/* --- Mobile Menu Button --- */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-sky-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((item) =>
              item.external ? (
                // ✅ External link for mobile
                <a
                  key={item.name}
                  href={item.external}
                  target="_self"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "text-sky-600 bg-sky-50"
                        : "text-gray-700 hover:text-sky-600 hover:bg-gray-50"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                  end
                >
                  {item.name}
                </NavLink>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
