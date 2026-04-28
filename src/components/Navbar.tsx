"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Videos", href: "#videos" },
  { label: "Men's Health", href: "#health" },
  { label: "Community", href: "#community" },
  { label: "Donate", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-[#2a2a2a]"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <span className="text-[#dc2626] font-bold text-xl tracking-widest uppercase group-hover:text-white transition-colors">
            TGH
          </span>
          <span className="hidden sm:block text-[#f5f0eb]/70 text-sm tracking-wide">
            The God Hand
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[#f5f0eb]/70 hover:text-[#dc2626] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://www.youtube.com/@TGH-m8u"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-[#0d0d0d] font-semibold text-sm px-4 py-2 rounded-full transition-colors duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
          Subscribe
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#f5f0eb] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-[#2a2a2a] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#f5f0eb]/80 hover:text-[#dc2626] text-sm font-medium tracking-wide transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.youtube.com/@TGH-m8u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-[#0d0d0d] font-semibold text-sm px-4 py-2 rounded-full transition-colors"
              >
                Subscribe on YouTube
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
