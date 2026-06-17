"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, FileText } from "lucide-react";

const RESUME_URL = "https://docs.google.com/document/d/e/2PACX-1vS8C_x9MZ0LMwM09cS7lO9UBzJa9rThBJX0qI_trwRaJ8F7o58_FjjagFpuI_sfy7Mi-7KaXZeYWrig/pub";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 w-full z-40 pointer-events-none">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto px-6 md:px-12 h-24 pointer-events-none">

        <a href="#" aria-label="Go to top of page" className="pointer-events-auto">
          <Image
            alt="Ritoban Goswami Logo"
            className="rounded-md opacity-80 hover:opacity-100 transition-opacity duration-300"
            src="/logo.webp"
            width={176}
            height={96}
            style={{ width: "80px", height: "auto", marginTop: '1rem' }}
            priority
            loading="eager"
          />
        </a>

        <nav className="hidden md:flex items-center gap-1 pointer-events-auto bg-on-background/[0.04] backdrop-blur-xl border border-on-background/[0.07] rounded-full px-2 py-2">
          {navLinks.map((link) => (
            <a key={link.href} className="text-on-background/50 hover:text-on-background hover:bg-on-background/[0.06] transition-all duration-200 font-label-md text-xs uppercase tracking-widest px-5 py-2 rounded-full" href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 pointer-events-auto">
          <a
            className="flex items-center gap-2 border border-on-background/20 text-on-background/70 hover:border-on-background hover:text-on-background font-label-md text-xs uppercase tracking-widest px-5 py-3 transition-all duration-300 active:scale-95"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={13} />
            Resume
          </a>
          <a
            className="bg-primary text-on-primary font-label-md text-xs uppercase tracking-widest px-7 py-3 rounded-none hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 active:scale-95"
            href="#contact"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden pointer-events-auto text-on-background/70 hover:text-on-background transition-colors p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-24 bg-background/95 backdrop-blur-xl pointer-events-auto flex flex-col items-center justify-center gap-8 transition-all duration-300 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            className="text-on-background/70 hover:text-on-background font-label-md text-sm uppercase tracking-[0.3em] transition-colors"
            href={link.href}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          className="flex items-center gap-2 text-on-background/60 hover:text-on-background font-label-md text-sm uppercase tracking-[0.3em] transition-colors"
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
        >
          <FileText size={14} />
          Resume
        </a>
        <a
          className="mt-4 bg-primary text-on-primary font-label-md text-sm uppercase tracking-widest px-8 py-4 hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 active:scale-95"
          href="#contact"
          onClick={() => setMobileOpen(false)}
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
