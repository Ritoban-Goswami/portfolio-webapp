"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ProjectDetails {
  title: string;
  description: string;
  tags: string[];
  challenges: string;
  solution: string;
  sourceUrl?: string;
  demoUrl?: string;
}

const projectData: Record<string, ProjectDetails> = {
  boardly: {
    title: "Boardly",
    description: "A collaborative whiteboarding tool built with React and WebSockets. Enables real-time drawing, note-taking, and remote team collaboration with sub-50ms latency sync.",
    tags: ["React", "Node.js", "Socket.io", "Canvas API"],
    challenges: "Synchronizing drawing state across multiple clients with minimal latency while handling network jitter and maintaining a unified event log for undo/redo functionality.",
    solution: "Implemented a custom operational transformation (OT) algorithm over WebSockets, decoupling local optimistic updates from server reconciliation.",
    sourceUrl: "#",
    demoUrl: "#"
  },
  quantize: {
    title: "quantize-colors",
    description: "An open-source library for extracting dominant colors from images using K-Means clustering. Highly optimized for browser environments with Web Workers.",
    tags: ["TypeScript", "Algorithms", "Web Workers", "Open Source"],
    challenges: "Performing complex matrix operations and clustering algorithms on large image data sets without blocking the main UI thread in the browser.",
    solution: "Offloaded heavy computations to Web Workers and utilized TypedArrays for efficient memory access and transfer between the main thread and workers.",
    sourceUrl: "#",
    demoUrl: "#"
  }
};

export default function Home() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: ""
  });

  // Spotlight track script
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Back to Top button observer
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll animations observer (Intersection Observer)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(".fade-up");
    fadeElements.forEach((el) => observer.observe(el));

    // Force animation on elements already visible on load
    const timeoutId = setTimeout(() => {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("visible");
        }
      });
    }, 100);

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
      clearTimeout(timeoutId);
    };
  }, []);

  // Prevent scroll when modal is active
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeProject]);

  // Close modals on Escape keypress
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Form handle submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message was successfully logged (demonstration only).`);
    setFormData({ name: "", email: "", type: "", message: "" });
  };

  return (
    <>
      {/* Environmental Overlays */}
      <div className="noise-overlay" aria-hidden="true"></div>
      <div id="cursor-spotlight" ref={spotlightRef} aria-hidden="true"></div>

      {/* Back to Top Button */}
      <button
        className={`fixed bottom-8 right-8 z-50 bg-surface-container-high/80 backdrop-blur-md text-on-background/70 p-4 rounded-full border border-on-background/5 hover:border-on-background/20 hover:text-on-background transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-4"
        }`}
        id="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <span className="material-symbols-outlined block">arrow_upward</span>
      </button>

      {/* Main Layout Wrapper */}
      <div className="relative z-10 w-full">
        
        {/* Header Section */}
        <header className="fixed top-0 w-full z-40 bg-background/70 backdrop-blur-xl border-b border-on-background/5 shadow-none">
          <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 md:px-12 h-24">
            <a href="#" aria-label="Go to top of page">
              <Image
                alt="Ritoban Goswami Logo"
                className="h-16 w-auto object-contain rounded-md"
                src="https://lh3.googleusercontent.com/aida/AP1WRLtQcegocOqeQ8ai4fIzxzmPK9W4ySuSxSpAckMCjJOWGMDtV6qVjjjtF6i-peLt6uKoPwm5prsxraADvoJzMlOyvVRuWkQW2F_DUBWLiaJxgdsSxsbCGcEIEddPgDRuMHocMGUsPpxOucndg2Mmn40v9_2tGRUIbvKWzB0rK90MVrwvazDsZzbwSIb5jLp6CUygYc14NUbOKtjn_5DxmmCjiIQr2lNnrQr88FhJJM1uKaeSWh1j9K6VILQ"
                width={120}
                height={64}
                priority
              />
            </a>
            <nav className="hidden md:flex gap-10">
              <a
                className="text-on-background/50 hover:text-on-background transition-colors duration-300 font-label-md text-sm uppercase tracking-widest"
                href="#about"
              >
                About
              </a>
              <a
                className="text-on-background/50 hover:text-on-background transition-colors duration-300 font-label-md text-sm uppercase tracking-widest"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="text-on-background/50 hover:text-on-background transition-colors duration-300 font-label-md text-sm uppercase tracking-widest"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="text-on-background/50 hover:text-on-background transition-colors duration-300 font-label-md text-sm uppercase tracking-widest"
                href="#skills"
              >
                Skills
              </a>
            </nav>
            <a
              className="hidden md:block bg-primary text-on-primary font-label-md text-xs uppercase tracking-widest px-8 py-3 rounded-none hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 active:scale-95"
              href="#contact"
            >
              Hire Me
            </a>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-48 overflow-hidden">
          
          {/* Hero Section */}
          <section className="min-h-[90vh] flex flex-col items-center justify-center relative fade-up mt-10" id="hero">
            <div className="grid-bg" aria-hidden="true"></div>
            <div className="bg-glow glow-1" aria-hidden="true"></div>
            <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full">
              
              {/* Bespoke Typography Left Side */}
              <div className="lg:w-1/2 relative z-20 flex flex-col items-start text-left pt-20 lg:pt-0">
                <div className="relative w-full">
                  <h1 className="font-headline-xl text-[5rem] md:text-[8rem] lg:text-[10rem] text-on-background tracking-tight leading-[0.8] font-black uppercase relative z-20 mix-blend-difference">
                    Ritoban
                  </h1>
                  <h1 className="font-headline-xl text-[4rem] md:text-[7rem] lg:text-[9rem] stroke-text tracking-tight leading-[0.8] font-black uppercase relative z-0 -mt-2 md:-mt-6 ml-4 md:ml-12">
                    Goswami
                  </h1>
                </div>
                <div className="mt-16 flex items-center gap-6">
                  <div className="h-px w-16 bg-primary"></div>
                  <span className="text-on-background/70 font-mono-label text-xs md:text-sm uppercase tracking-[0.4em]">
                    Full-Stack Engineer
                  </span>
                </div>
                <p className="font-body-lg text-lg text-on-background/60 max-w-md mt-10 font-light leading-relaxed">
                  Building high-performance, scalable web applications with a focus on React, Next.js, and
                  AWS. Bridging the gap between physics logic and software architecture.
                </p>
                <div className="flex gap-6 mt-16">
                  <a
                    className="bg-primary text-on-primary font-label-md text-sm uppercase tracking-widest px-8 py-4 rounded-none hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 active:scale-95 flex items-center gap-3"
                    href="#projects"
                  >
                    View Work
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      arrow_forward
                    </span>
                  </a>
                  <a
                    className="bg-transparent border border-on-background/20 text-on-background font-label-md text-sm uppercase tracking-widest px-8 py-4 rounded-none hover:border-on-background hover:bg-on-background/5 transition-all duration-300 active:scale-95 inline-flex items-center justify-center backdrop-blur-md"
                    href="#contact"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Hero Image Right Side */}
              <div className="lg:w-1/2 relative z-10 mt-20 lg:mt-0 flex justify-center lg:justify-end w-full">
                <div className="relative w-full max-w-[600px] aspect-[4/5] animate-float-hero">
                  
                  {/* Shadow/Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent z-10"></div>
                  
                  {/* Main Figure */}
                  <Image
                    alt="Developer Figure"
                    className="w-full h-full object-contain relative z-0 opacity-100 drop-shadow-2xl bg-transparent"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLuPa-qXOXdrTrvZwYX6dIjhi6T5zwaBv6RJDGfy8GLSmBmGndDy5kUho0B1r-7Kt49BiRuhxY9I9mLZl7jUfxv73QbYU5FYoxwEO472SEPfyDxFldUh5BEJpElKbbuf-SQPy7iIZd2nE9bIfz-Zkdqtd3aR2o3DhE1dQZz9pS6W3a_33bsr-PGPfW5dzoWoCMPXMONyOD0Tb50iiMfevSV6wx4yAJjfMw--mga1hv67XrZ4bFSMMErWTdGW"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    priority
                  />
                  
                  {/* Large Vertical Text Element */}
                  <div className="absolute -right-12 top-1/2 -translate-y-1/2 rotate-90 origin-center hidden xl:block text-on-background/5 font-headline-xl text-[8rem] uppercase tracking-tighter whitespace-nowrap z-0 select-none pointer-events-none">
                    Engineer
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* About Section */}
          <section className="py-40 mt-24 fade-up relative" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="font-headline-lg text-4xl md:text-5xl text-on-background font-extrabold mb-10 tracking-tight">
                  From Physics to <br />
                  <span className="text-on-background/40 italic font-light">Engineering</span>.
                </h2>
                <p className="font-body-md text-lg text-on-background/60 mb-8 font-light leading-relaxed">
                  My journey started with physics, teaching me to break down complex systems into fundamental
                  principles. I apply this exact methodology to software engineering—building robust
                  architectures that scale elegantly.
                </p>
                <p className="font-body-md text-lg text-on-background/60 font-light leading-relaxed">
                  I thrive on optimizing performance, reducing latency, and delivering seamless user
                  experiences.
                </p>
              </div>
              <div className="relative flex justify-center items-center h-full min-h-[400px]">
                <div className="absolute w-[300px] h-[300px] border border-on-background/5 rounded-full animate-[spin_20s_linear_infinite] border-dashed"></div>
                <div className="absolute w-[200px] h-[200px] border border-on-background/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="glass-card p-10 rounded-full w-64 h-64 flex flex-col items-center justify-center text-center z-10">
                  <div className="font-headline-xl text-on-background font-black text-6xl leading-none mb-2">3+</div>
                  <div className="font-mono-label text-on-background/50 uppercase tracking-[0.2em] text-xs">Years Exp</div>
                  <div className="w-12 h-px bg-on-background/10 my-4"></div>
                  <div className="font-headline-md text-on-background font-bold text-3xl leading-none mb-1">200+</div>
                  <div className="text-[10px] text-on-background/40 uppercase tracking-[0.2em]">Features Shipped</div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="py-40 mt-24 fade-up" id="experience">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-on-background mb-32 text-center tracking-tight font-extrabold">
              Work <span className="text-on-background/40 italic font-light">Experience</span>
            </h2>
            <div className="relative max-w-5xl mx-auto">
              <div className="timeline-track"></div>

              {/* Appycodes */}
              <div className="relative flex flex-col md:flex-row items-center justify-between mb-40 w-full group">
                <div className="hidden md:block w-[45%] text-right pr-16">
                  <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-sm group-hover:text-on-background transition-colors duration-300">
                    2022 - Present
                  </span>
                </div>
                <div className="timeline-dot transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,31,31,0.5)]"></div>
                <div className="w-full pl-12 md:pl-0 md:w-[45%] md:text-left md:pl-16">
                  <div className="md:hidden mb-6">
                    <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-xs">
                      2022 - Present
                    </span>
                  </div>
                  <div className="glass-card p-12 rounded-none border-l-[1px] border-l-on-background/10 group-hover:border-l-primary">
                    <h3 className="font-headline-md text-2xl text-on-background mb-3 font-semibold">
                      Software Engineer
                    </h3>
                    <h4 className="font-body-md text-on-background/40 mb-10 uppercase tracking-widest text-xs">
                      Appycodes
                    </h4>
                    <ul className="space-y-6 font-body-md text-on-background/60 font-light">
                      <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-on-background/30 text-[18px] mt-1">check</span>
                        <span>
                          Built scalable architecture resulting in <strong className="text-on-background font-medium">32% faster load times</strong>.
                        </span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-on-background/30 text-[18px] mt-1">check</span>
                        <span>
                          Optimized database queries for <strong className="text-on-background font-medium">60% lower search latency</strong>.
                        </span>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-on-background/30 text-[18px] mt-1">check</span>
                        <span>
                          Implemented robust error handling, leading to <strong className="text-on-background font-medium">90% fewer delivery failures</strong>.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tellbyte */}
              <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                <div className="w-full pl-12 md:pl-0 md:w-[45%] md:text-right md:pr-16 order-2 md:order-1">
                  <div className="md:hidden mb-6 mt-16">
                    <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-xs">
                      2020 - 2022
                    </span>
                  </div>
                  <div className="glass-card p-12 rounded-none border-l-[1px] border-l-on-background/10 md:border-l-0 md:border-r-[1px] md:border-r-on-background/10 group-hover:border-l-primary md:group-hover:border-l-transparent md:group-hover:border-r-primary">
                    <h3 className="font-headline-md text-2xl text-on-background mb-3 font-semibold">
                      Founding Engineer
                    </h3>
                    <h4 className="font-body-md text-on-background/40 mb-10 uppercase tracking-widest text-xs">
                      Tellbyte
                    </h4>
                    <ul className="space-y-6 font-body-md text-on-background/60 font-light text-left md:text-right">
                      <li className="flex items-start md:flex-row-reverse gap-4">
                        <span className="material-symbols-outlined text-on-background/30 text-[18px] mt-1">check</span>
                        <span>Architected initial MVP from scratch.</span>
                      </li>
                      <li className="flex items-start md:flex-row-reverse gap-4">
                        <span className="material-symbols-outlined text-on-background/30 text-[18px] mt-1">check</span>
                        <span>
                          Maintained <strong className="text-on-background font-medium">Lighthouse scores of 80-90+</strong> across all metrics.
                        </span>
                      </li>
                      <li className="flex items-start md:flex-row-reverse gap-4">
                        <span className="material-symbols-outlined text-on-background/30 text-[18px] mt-1">check</span>
                        <span>Scaled user base significantly in the first year.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="timeline-dot transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,31,31,0.5)]"></div>
                <div className="hidden md:block w-[45%] text-left pl-16 order-1 md:order-2">
                  <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-sm group-hover:text-on-background transition-colors duration-300">
                    2020 - 2022
                  </span>
                </div>
              </div>

            </div>
          </section>

          {/* Projects Section */}
          <section className="py-40 mt-24 fade-up max-w-6xl mx-auto" id="projects">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
              <h2 className="font-headline-lg text-4xl md:text-5xl text-on-background tracking-tight font-extrabold">
                Featured <span className="text-on-background/40 italic font-light">Projects</span>
              </h2>
              <a
                className="text-on-background/50 hover:text-on-background font-mono-label text-xs uppercase tracking-widest flex items-center gap-2 transition-colors pb-2"
                href="#"
              >
                View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Boardly */}
              <div
                className="glass-card p-12 flex flex-col h-full group cursor-pointer"
                onClick={() => setActiveProject("boardly")}
              >
                <div className="flex justify-between items-start mb-10">
                  <h3 className="font-headline-md text-3xl text-on-background group-hover:text-primary transition-colors font-bold tracking-tight">
                    Boardly
                  </h3>
                  <div className="w-12 h-12 rounded-full border border-on-background/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                    <span className="material-symbols-outlined text-on-background/50 group-hover:text-primary text-[20px]">
                      north_east
                    </span>
                  </div>
                </div>
                <p className="font-body-md text-on-background/50 flex-grow mb-14 font-light leading-relaxed text-lg">
                  A collaborative whiteboarding tool built with React and WebSockets. Enables real-time
                  drawing, note-taking, and remote team collaboration with sub-50ms latency sync.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-5 py-2 bg-on-background/5 border border-on-background/10 text-xs font-mono-label text-on-background/70 uppercase tracking-wider">
                    React
                  </span>
                  <span className="px-5 py-2 bg-on-background/5 border border-on-background/10 text-xs font-mono-label text-on-background/70 uppercase tracking-wider">
                    Node.js
                  </span>
                  <span className="px-5 py-2 bg-on-background/5 border border-on-background/10 text-xs font-mono-label text-on-background/70 uppercase tracking-wider">
                    Socket.io
                  </span>
                  <span className="px-5 py-2 bg-on-background/5 border border-on-background/10 text-xs font-mono-label text-on-background/70 uppercase tracking-wider">
                    Canvas
                  </span>
                </div>
              </div>

              {/* Quantize Colors */}
              <div
                className="glass-card p-12 flex flex-col h-full group cursor-pointer"
                onClick={() => setActiveProject("quantize")}
              >
                <div className="flex justify-between items-start mb-10">
                  <h3 className="font-headline-md text-3xl text-on-background group-hover:text-primary transition-colors font-bold tracking-tight">
                    quantize-colors
                  </h3>
                  <div className="w-12 h-12 rounded-full border border-on-background/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                    <span className="material-symbols-outlined text-on-background/50 group-hover:text-primary text-[20px]">
                      north_east
                    </span>
                  </div>
                </div>
                <p className="font-body-md text-on-background/50 flex-grow mb-14 font-light leading-relaxed text-lg">
                  An open-source library for extracting dominant colors from images using K-Means clustering.
                  Highly optimized for browser environments with Web Workers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-5 py-2 bg-on-background/5 border border-on-background/10 text-xs font-mono-label text-on-background/70 uppercase tracking-wider">
                    TypeScript
                  </span>
                  <span className="px-5 py-2 bg-on-background/5 border border-on-background/10 text-xs font-mono-label text-on-background/70 uppercase tracking-wider">
                    Algorithms
                  </span>
                  <span className="px-5 py-2 bg-on-background/5 border border-on-background/10 text-xs font-mono-label text-on-background/70 uppercase tracking-wider">
                    Web Workers
                  </span>
                </div>
              </div>

            </div>
          </section>

          {/* Skills Section */}
          <section className="py-40 mt-24 fade-up max-w-6xl mx-auto" id="skills">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-on-background mb-32 text-center tracking-tight font-extrabold">
              Technical <span className="text-on-background/40 italic font-light">Arsenal</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              <div className="glass-card p-12">
                <h3 className="font-headline-md text-xl text-on-background mb-10 flex items-center gap-4 font-semibold tracking-wide">
                  <span className="text-on-background/20 font-mono-label text-sm uppercase">01 //</span> Languages
                </h3>
                <div className="flex flex-wrap gap-4">
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    JavaScript
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    TypeScript
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    Python
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    SQL
                  </span>
                </div>
              </div>

              <div className="glass-card p-12">
                <h3 className="font-headline-md text-xl text-on-background mb-10 flex items-center gap-4 font-semibold tracking-wide">
                  <span className="text-on-background/20 font-mono-label text-sm uppercase">02 //</span> Frontend
                </h3>
                <div className="flex flex-wrap gap-4">
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    React
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    Next.js
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    Tailwind CSS
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    Framer Motion
                  </span>
                </div>
              </div>

              <div className="glass-card p-12">
                <h3 className="font-headline-md text-xl text-on-background mb-10 flex items-center gap-4 font-semibold tracking-wide">
                  <span className="text-on-background/20 font-mono-label text-sm uppercase">03 //</span> Backend
                </h3>
                <div className="flex flex-wrap gap-4">
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    Node.js
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    PostgreSQL
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    AWS
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    Docker
                  </span>
                </div>
              </div>

            </div>
          </section>

        </main>

        {/* Contact Section */}
        <section className="py-40 mt-24 fade-up w-full border-t border-on-background/5 bg-surface-container-low" id="contact">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="text-center mb-24">
              <h2 className="font-headline-xl text-5xl md:text-7xl text-on-background mb-8 font-extrabold tracking-tighter">
                Let&apos;s Build <br />
                <span className="text-on-background/40 italic font-light">Something Great.</span>
              </h2>
              <p className="font-body-lg text-on-background/50 max-w-xl mx-auto font-light text-lg">
                Currently open to new opportunities. Reach out and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="glass-card p-12 md:p-16 max-w-2xl mx-auto rounded-xl">
              <form className="flex flex-col gap-12" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <input
                      className="w-full input-line font-body-md text-lg"
                      placeholder="Your Name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <input
                      className="w-full input-line font-body-md text-lg"
                      placeholder="Your Email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <select
                    className="w-full input-line font-body-md text-lg appearance-none bg-transparent cursor-pointer text-on-background/50"
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option disabled value="">
                      Project Type / Inquiry
                    </option>
                    <option className="bg-surface-container-high text-on-background" value="freelance">
                      Freelance Project
                    </option>
                    <option className="bg-surface-container-high text-on-background" value="fulltime">
                      Full-time Opportunity
                    </option>
                    <option className="bg-surface-container-high text-on-background" value="consulting">
                      Consulting
                    </option>
                    <option className="bg-surface-container-high text-on-background" value="other">
                      Other
                    </option>
                  </select>
                </div>
                <div>
                  <textarea
                    className="w-full input-line font-body-md text-lg min-h-[150px] resize-y"
                    placeholder="Tell me about your project..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <div className="mt-10 flex justify-center">
                  <button
                    className="bg-primary text-on-primary font-label-md text-sm uppercase tracking-widest px-14 py-6 rounded-none hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 active:scale-[0.98] flex items-center gap-4"
                    type="submit"
                  >
                    Send Message
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Footer Component */}
        <footer className="relative z-10 w-full py-20 bg-surface-container-lowest border-t border-on-background/5 flex flex-col items-center gap-12 text-center">
          <div className="flex justify-between items-center w-full max-w-[1200px] px-6 md:px-12 flex-col md:flex-row gap-10">
            <Image
              alt="Ritoban Goswami Logo"
              className="h-14 w-auto object-contain rounded-md opacity-30 hover:opacity-100 transition-opacity"
              src="https://lh3.googleusercontent.com/aida/AP1WRLtQcegocOqeQ8ai4fIzxzmPK9W4ySuSxSpAckMCjJOWGMDtV6qVjjjtF6i-peLt6uKoPwm5prsxraADvoJzMlOyvVRuWkQW2F_DUBWLiaJxgdsSxsbCGcEIEddPgDRuMHocMGUsPpxOucndg2Mmn40v9_2tGRUIbvKWzB0rK90MVrwvazDsZzbwSIb5jLp6CUygYc14NUbOKtjn_5DxmmCjiIQr2lNnrQr88FhJJM1uKaeSWh1j9K6VILQ"
              width={100}
              height={56}
            />
            <div className="flex gap-10">
              <a
                aria-label="GitHub"
                className="text-on-background/40 hover:text-on-background transition-colors duration-300"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
              </a>
              <a
                aria-label="LinkedIn"
                className="text-on-background/40 hover:text-on-background transition-colors duration-300"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">work</span>
              </a>
              <a
                aria-label="Twitter"
                className="text-on-background/40 hover:text-on-background transition-colors duration-300"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">alternate_email</span>
              </a>
            </div>
          </div>
          <div className="w-full max-w-[1200px] px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono-label tracking-widest text-on-background/30 uppercase">
            <p>© 2024 Ritoban Goswami.</p>
            <p className="flex items-center gap-2">
              Built for performance{" "}
              <span className="material-symbols-outlined text-[12px] text-primary">bolt</span>
            </p>
          </div>
        </footer>

      </div>

      {/* Project Detail Modal Overlay */}
      <div
        className={`modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
          activeProject ? "active opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          className="absolute inset-0 bg-background/90 backdrop-blur-md"
          onClick={() => setActiveProject(null)}
          aria-hidden="true"
        ></div>
        <div
          className={`modal-content relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-none border border-on-background/10 shadow-2xl bg-surface-container-low transition-all duration-300 ${
            activeProject ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
          }`}
        >
          {activeProject && projectData[activeProject] && (
            <>
              <div className="sticky top-0 right-0 flex justify-end p-8 z-10 pointer-events-none">
                <button
                  className="text-on-background/50 hover:text-on-background bg-surface-container-high p-3 rounded-full border border-on-background/10 backdrop-blur-md transition-colors pointer-events-auto"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close details"
                >
                  <span className="material-symbols-outlined block">close</span>
                </button>
              </div>
              <div className="p-8 sm:p-16 -mt-20">
                <div className="w-full h-64 sm:h-96 bg-surface-container-high mb-12 flex items-center justify-center border border-on-background/5 overflow-hidden">
                  <span className="material-symbols-outlined text-6xl text-on-background/5">image</span>
                </div>
                <h2
                  id="modal-title"
                  className="font-headline-xl text-4xl md:text-5xl text-on-background mb-6 font-extrabold tracking-tight"
                >
                  {projectData[activeProject].title}
                </h2>
                <div className="flex flex-wrap gap-3 mb-10">
                  {projectData[activeProject].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-1.5 bg-on-background/5 border border-on-background/10 text-xs font-mono-label text-on-background/70 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="font-body-lg text-on-background/60 mb-16 leading-relaxed text-lg font-light">
                  {projectData[activeProject].description}
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  <div className="p-8 border border-on-background/10 bg-on-background/[0.02]">
                    <h3 className="font-headline-md text-on-background mb-6 flex items-center gap-3 text-xl font-medium tracking-wide">
                      <span className="material-symbols-outlined text-on-background/40">warning</span> Challenges
                    </h3>
                    <p className="font-body-md text-on-background/50 font-light leading-relaxed">
                      {projectData[activeProject].challenges}
                    </p>
                  </div>
                  <div className="p-8 border border-on-background/10 bg-on-background/[0.02]">
                    <h3 className="font-headline-md text-on-background mb-6 flex items-center gap-3 text-xl font-medium tracking-wide">
                      <span className="material-symbols-outlined text-on-background/40">lightbulb</span> Solutions
                    </h3>
                    <p className="font-body-md text-on-background/50 font-light leading-relaxed">
                      {projectData[activeProject].solution}
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <a
                    href={projectData[activeProject].sourceUrl || "#"}
                    className="bg-transparent border border-on-background/20 hover:bg-on-background/5 hover:border-on-background text-on-background px-8 py-4 font-label-md text-sm uppercase tracking-widest transition-all flex items-center gap-3"
                  >
                    <span className="material-symbols-outlined text-sm">code</span> View Source
                  </a>
                  <a
                    href={projectData[activeProject].demoUrl || "#"}
                    className="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 font-label-md text-sm uppercase tracking-widest transition-all flex items-center gap-3"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span> Live Demo
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
