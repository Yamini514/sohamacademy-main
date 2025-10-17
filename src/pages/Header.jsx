import React, { useState } from "react";
import { NavLink } from "react-router-dom";

/**
 * Professional, responsive Header
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Dashboard", external: "https://soham-academy-ui.netlify.app/" },
    { name: "Reports", to: "/reports" },
    { name: "FTC", to: "/ftc" },
    { name: "Contact", to: "/contact" },
  ];

  const handleClick = (closeMenu = false, external = false, href = "") => {
    if (closeMenu) setMenuOpen(false);
    // If external, navigate will happen naturally; still scroll to top
    // Use smooth or instant as you prefer
    window.scrollTo({ top: 0, behavior: "smooth" });
    // For external links we don't prevent default here; anchor does navigation.
    // For SPA NavLink the route will change and page will be at top due to this call.
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="PX-3 ">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="inline-flex items-center"
              onClick={(e) => {
                // ensure clicking brand also scrolls to top
                handleClick(true);
              }}
            >
              <img
                src="/brand.png"
                alt="Soham Academy"
                className="max-h-10 px-10 md:max-h-14 w-auto object-contain"
              />
            </a>
          </div>
          <nav className="hidden lg:flex items-center gap-6 ml-auto">
            {navLinks.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.external}
                  target="_self"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-medium transition-colors duration-150 text-slate-800 hover:text-sky-600 px-1 py-1"
                  onClick={() => handleClick(false, true, item.external)}
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `text-sm md:text-base font-medium transition-colors duration-150 px-1 py-1 pb-1 ` +
                    (isActive
                      ? "text-sky-600 border-b-2 border-sky-600"
                      : "text-slate-800 hover:text-sky-600")
                  }
                  onClick={() => handleClick(false)}
                >
                  {item.name}
                </NavLink>
              )
            )}
          </nav>
          <div className="flex items-center gap-3">
            <div className="lg:hidden">
              <button
                className="p-2 rounded-md text-slate-700 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.external}
                    target="_self"
                    rel="noopener noreferrer"
                    onClick={() => handleClick(true, true, item.external)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    end
                    onClick={() => handleClick(true)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ` +
                      (isActive ? "text-sky-600 bg-sky-50" : "text-slate-700 hover:text-sky-600 hover:bg-gray-50")
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
