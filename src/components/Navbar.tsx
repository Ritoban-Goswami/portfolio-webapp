"use client";

import { useState, useEffect, useRef } from "react";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import Image from "next/image";
import { FileText, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants/navigation";

const RESUME_URL = "https://docs.google.com/document/d/e/2PACX-1vS8C_x9MZ0LMwM09cS7lO9UBzJa9rThBJX0qI_trwRaJ8F7o58_FjjagFpuI_sfy7Mi-7KaXZeYWrig/pub";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          setActiveSection(id === "hero" ? "" : id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    const hero = document.getElementById("hero");
    if (hero) observer.observe(hero);

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);

      // Clear active section when scrolled past skills section
      const skills = document.getElementById("skills");
      if (skills && skills.getBoundingClientRect().bottom < 0) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useBodyScrollLock(mobileMenuOpen);


  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 w-full z-40 pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0, 0.2, 1], delay: 0.3 }}
    >
      <div className="relative flex items-center justify-between max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-20 sm:h-24 pointer-events-none">

        {/* Logo */}
        <a href="#" aria-label="Go to top of page" className="pointer-events-auto">
          <Image
            alt="Ritoban Goswami Logo"
            className="rounded-md opacity-80 hover:opacity-100 transition-opacity duration-300 mt-4"
            src="/logo.webp"
            width={176}
            height={96}
            style={{ width: "60px", height: "auto" }}
            priority
            loading="eager"
          />
        </a>

        {/* Desktop Navigation - centered pill */}
        <nav
          className={`hidden md:flex items-center gap-1 pointer-events-auto backdrop-blur-xl border rounded-full px-0.5 py-0.5 transition-all duration-300 ${scrolled
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
                className={`font-label-md text-xs uppercase tracking-widest px-4 py-1.5 rounded-full transition-all duration-200 ${isActive
                  ? "text-primary"
                  : "text-on-background/50 hover:text-on-background hover:bg-on-background/[0.06]"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action buttons + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <a
            className="hidden sm:flex items-center gap-2 border border-on-background/20 text-on-background/70 hover:border-on-background/50 hover:text-on-background hover:bg-on-background/5 font-label-md text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 active:scale-95"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={13} />
            <span className="hidden lg:inline">Resume</span>
            <span className="lg:hidden">CV</span>
          </a>
          <a
            className="hidden sm:inline-flex bg-primary text-on-primary font-label-md text-xs uppercase tracking-widest px-5 py-2 rounded-full hover:bg-primary-container transition-all duration-300 active:scale-95"
            href="#contact"
          >
            Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-on-background/70 hover:text-on-background hover:bg-on-background/10 transition-all"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu - Bottom Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30 pointer-events-auto"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="md:hidden fixed bottom-0 inset-x-0 z-40 pointer-events-auto"
            >
              <div className="mx-4 mb-6 p-2 bg-surface-container/95 backdrop-blur-xl border border-on-background/10 rounded-2xl shadow-2xl">
                {/* Handle bar */}
                <div className="flex justify-center pt-2 pb-4">
                  <div className="w-10 h-1 bg-on-background/20 rounded-full" />
                </div>

                <nav className="flex flex-col gap-1 pb-2">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.id;
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.05,
                        }}
                        className={`flex items-center justify-center font-label-md text-sm uppercase tracking-widest py-3 px-4 rounded-xl transition-all duration-200 ${isActive
                          ? "text-primary bg-primary/10"
                          : "text-on-background/70 hover:text-on-background hover:bg-on-background/5"
                          }`}
                      >
                        {link.label}
                      </motion.a>
                    );
                  })}
                </nav>

                {/* Divider */}
                <div className="h-px bg-on-background/10 mx-2 my-2" />

                {/* CTAs */}
                <div className="flex gap-2 p-2">
                  <a
                    className="flex-1 flex items-center justify-center gap-2 border border-on-background/20 text-on-background/70 hover:border-on-background/40 hover:text-on-background font-label-md text-xs uppercase tracking-widest py-3 rounded-xl transition-all"
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FileText size={14} />
                    Resume
                  </a>
                  <a
                    className="flex-1 flex items-center justify-center bg-primary text-on-primary font-label-md text-xs uppercase tracking-widest py-3 rounded-xl hover:bg-primary-container transition-all"
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </motion.header>
  );
}
