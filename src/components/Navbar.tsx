"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, FileText } from "lucide-react";
import gsap from "gsap";

const RESUME_URL = "https://docs.google.com/document/d/e/2PACX-1vS8C_x9MZ0LMwM09cS7lO9UBzJa9rThBJX0qI_trwRaJ8F7o58_FjjagFpuI_sfy7Mi-7KaXZeYWrig/pub";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileTlRef = useRef<gsap.core.Timeline | null>(null);

  // Entrance animation
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  // Scroll-aware backdrop
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Observe hero — clears active state when back at top
    const heroEl = document.getElementById("hero");
    if (heroEl) {
      const heroObs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(""); },
        { rootMargin: "0px 0px -50% 0px", threshold: 0 }
      );
      heroObs.observe(heroEl);
      observers.push(heroObs);
    }

    // Observe each nav section
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    // Clear when scrolled past all sections into footer/contact
    const lastSection = document.getElementById("skills");
    const onScroll = () => {
      if (!lastSection) return;
      const bottom = lastSection.getBoundingClientRect().bottom;
      if (bottom < 0) setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Mobile menu GSAP open/close
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();
      tl.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -12, pointerEvents: "none" },
        { opacity: 1, y: 0, duration: 0.3, ease: "power3.out", pointerEvents: "auto" }
      );
      const links = mobileMenuRef.current.querySelectorAll(".mobile-link");
      tl.fromTo(links, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25, stagger: 0.06, ease: "power2.out" }, "-=0.1");
      mobileTlRef.current = tl;
    } else {
      document.body.style.overflow = "auto";
      if (mobileTlRef.current) {
        gsap.to(mobileMenuRef.current, { opacity: 0, y: -8, duration: 0.2, ease: "power2.in", pointerEvents: "none" });
      }
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [mobileOpen]);

  return (
    <header ref={headerRef} className="fixed top-0 w-full z-40 pointer-events-none" style={{ opacity: 0 }}>
      <div className="relative flex items-center justify-center max-w-[1400px] mx-auto px-6 md:px-12 h-24 pointer-events-none">

        {/* Logo */}
        <a href="#" aria-label="Go to top of page" className="absolute left-6 md:left-12 pointer-events-auto">
          <Image
            alt="Ritoban Goswami Logo"
            className="rounded-md opacity-80 hover:opacity-100 transition-opacity duration-300 mt-4"
            src="/logo.webp"
            width={176}
            height={96}
            style={{ width: "80px", height: "auto" }}
            priority
            loading="eager"
          />
        </a>

        {/* Navigation - centered pill */}
        <nav
          className={`hidden md:flex items-center gap-1 pointer-events-auto backdrop-blur-xl border rounded-full px-2 py-2 transition-all duration-300 ${scrolled
            ? "bg-on-background/[0.07] border-on-background/[0.12]"
            : "bg-on-background/[0.04] border-on-background/[0.07]"
            }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-label-md text-xs uppercase tracking-widest px-5 py-2 rounded-full transition-all duration-200 ${isActive
                  ? "text-primary"
                  : "text-on-background/50 hover:text-on-background hover:bg-on-background/[0.06]"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action buttons */}
        <div className="hidden md:flex items-center gap-3 absolute right-6 md:right-12 pointer-events-auto">
          <a
            className="flex items-center gap-2 border border-on-background/20 text-on-background/70 hover:border-on-background/50 hover:text-on-background hover:bg-on-background/5 font-label-md text-xs uppercase tracking-widest px-5 py-3 rounded-full transition-all duration-300 active:scale-95"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={13} />
            Resume
          </a>
          <a
            className="bg-primary text-on-primary font-label-md text-xs uppercase tracking-widest px-7 py-3 rounded-full hover:bg-primary-container transition-all duration-300 active:scale-95"
            href="#contact"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden absolute right-6 pointer-events-auto w-10 h-10 rounded-full border border-on-background/10 bg-surface-container-high/50 backdrop-blur-sm text-on-background/70 hover:text-on-background hover:border-on-background/30 hover:bg-on-background/5 transition-all duration-300 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden fixed inset-0 top-24 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
        style={{ opacity: 0, pointerEvents: "none" }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            className={`mobile-link font-label-md text-sm uppercase tracking-[0.3em] transition-colors ${activeSection === link.id ? "text-on-background" : "text-on-background/60 hover:text-on-background"
              }`}
            href={link.href}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          className="mobile-link flex items-center gap-2 text-on-background/60 hover:text-on-background font-label-md text-sm uppercase tracking-[0.3em] transition-colors"
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
        >
          <FileText size={14} />
          Resume
        </a>
        <a
          className="mobile-link mt-4 bg-primary text-on-primary font-label-md text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-primary-container transition-all duration-300 active:scale-95"
          href="#contact"
          onClick={() => setMobileOpen(false)}
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
