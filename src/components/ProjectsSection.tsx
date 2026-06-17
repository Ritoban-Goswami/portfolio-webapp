"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, X, ImageIcon, ExternalLink, Code2 } from "lucide-react";
import { projectData } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const _projectOrder = ["boardly", "quantize", "pawshots", "wordle"] as const;
type ProjectKey = (typeof _projectOrder)[number];

const projectMeta: Record<ProjectKey, { index: string; shortDesc: string; tags: string[] }> = {
  boardly: {
    index: "01",
    shortDesc: "Real-time collaborative Kanban board with RBAC, drag-and-drop, and in-app notifications.",
    tags: ["Next.js", "TypeScript", "Firebase", "Zustand", "Tailwind CSS"],
  },
  quantize: {
    index: "02",
    shortDesc: "Open-source npm library for color quantization, dominant extraction, and luminance palettes.",
    tags: ["JavaScript", "Node.js", "Canvas API", "Open Source"],
  },
  pawshots: {
    index: "03",
    shortDesc: "Pet gallery with bulk ZIP download, infinite scroll, and AI-powered color grouping.",
    tags: ["React 19", "TypeScript", "Styled Components", "Context API", "Vite"],
  },
  wordle: {
    index: "04",
    shortDesc: "Wordle helper that filters suggestions from positional constraints with meaning lookup.",
    tags: ["Next.js", "Shadcn UI", "Tailwind CSS", "Datamuse API"],
  },
};

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const drawerTlRef = useRef<gsap.core.Timeline | null>(null);

  const openDrawer = useCallback((key: string) => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setActiveProject(key);
  }, []);

  const closeDrawer = useCallback(() => {
    if (!drawerTlRef.current) return;
    drawerTlRef.current.reverse();
    drawerTlRef.current.eventCallback("onReverseComplete", () => {
      setActiveProject(null);
      document.body.style.overflow = "auto";
      previousFocusRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    if (!activeProject || !drawerRef.current || !overlayRef.current) return;

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" })
      .fromTo(
        drawerRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.55, ease: "power4.out" },
        "-=0.2"
      );

    drawerTlRef.current = tl;

    const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable[0]?.focus();

    return () => { tl.kill(); };
  }, [activeProject]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
        }
      }
    };
    if (activeProject) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeProject, closeDrawer]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hero = sectionRef.current?.querySelector(".proj-hero");
      const secondary = sectionRef.current?.querySelectorAll(".proj-secondary");

      if (hero) {
        gsap.fromTo(
          hero,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: hero, start: "top 85%", once: true }
          }
        );
      }

      if (secondary?.length) {
        gsap.fromTo(
          secondary,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.65, ease: "power3.out", stagger: 0.12,
            scrollTrigger: { trigger: secondary[0], start: "top 88%", once: true }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featured = projectData["boardly"];
  const featuredMeta = projectMeta["boardly"];
  const rest = (["quantize", "pawshots", "wordle"] as ProjectKey[]);

  return (
    <>
      <section
        ref={sectionRef}
        className="py-20 md:py-40 mt-12 md:mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0"
        id="projects"
      >
        {/* Heading row */}
        <div className="mb-12 md:mb-20">
          <h2 className="font-headline-lg text-4xl md:text-5xl text-on-background tracking-tight font-extrabold">
            Featured <span className="text-on-background/40 font-cormorant italic text-[3.5rem] tracking-wide font-semibold ml-[0.4rem]">Projects</span>
          </h2>
        </div>

        {/* Hero card — Boardly */}
        <div
          className="proj-hero glass-card group cursor-pointer mb-6 overflow-hidden flex flex-col lg:flex-row min-h-[420px] border border-on-background/5 hover:border-on-background/10 transition-colors duration-500"
          onClick={() => openDrawer("boardly")}
        >
          {/* Text side */}
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:w-[48%] shrink-0">
            <div>
              <span className="font-cormorant italic text-[3.5rem] leading-none text-on-background/8 font-semibold select-none">
                {featuredMeta.index}
              </span>
              <h3 className="font-headline-lg text-4xl md:text-5xl text-on-background group-hover:text-primary transition-colors duration-300 font-extrabold tracking-tight mt-2 mb-6">
                {featured.title}
              </h3>
              <p className="font-body-lg text-on-background/50 font-light leading-relaxed text-lg">
                {featured.description}
              </p>
            </div>
            <div className="mt-10">
              <div className="flex flex-wrap gap-3 mb-8">
                {featuredMeta.tags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-on-background/5 border border-on-background/10 text-xs font-mono-label text-on-background/60 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 text-on-background/40 group-hover:text-primary transition-colors duration-300 font-mono-label text-xs uppercase tracking-widest">
                <span>View Case Study</span>
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="relative lg:flex-1 min-h-[260px] lg:min-h-0 overflow-hidden bg-surface-container-high border-t border-on-background/5 lg:border-t-0 lg:border-l lg:border-on-background/5">
            {featured.image ? (
              <Image
                src={featured.image}
                alt={`${featured.title} preview`}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon size={48} className="text-on-background/5" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent lg:block hidden" />
          </div>
        </div>

        {/* Secondary cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {rest.map((key) => {
            const proj = projectData[key];
            const meta = projectMeta[key];
            return (
              <div
                key={key}
                className="proj-secondary glass-card group cursor-pointer flex flex-col p-7 sm:p-8 border border-on-background/5 hover:border-on-background/10 transition-colors duration-500 overflow-hidden"
                onClick={() => openDrawer(key)}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="font-cormorant italic text-5xl leading-none text-on-background/8 font-semibold select-none">
                    {meta.index}
                  </span>
                  <div className="w-9 h-9 rounded-full border border-on-background/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 shrink-0">
                    <ArrowUpRight size={15} className="text-on-background/40 group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-headline-md text-xl text-on-background group-hover:text-primary transition-colors duration-300 font-bold tracking-tight mb-3">
                  {proj.title}
                </h3>
                <p className="font-body-md text-on-background/40 font-light leading-relaxed text-sm flex-grow mb-6">
                  {meta.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {meta.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-on-background/5 border border-on-background/8 text-[10px] font-mono-label text-on-background/50 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Side drawer overlay */}
      {activeProject && projectData[activeProject] && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
        >
          {/* Backdrop */}
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={closeDrawer}
            aria-hidden="true"
            style={{ opacity: 0 }}
          />

          {/* Drawer panel — single column: image banner top, content scrolls below */}
          <div
            ref={drawerRef}
            className="absolute top-0 right-0 h-full w-full sm:w-[85vw] lg:w-[60vw] xl:w-[52vw] bg-surface-container-low border-l border-on-background/10 flex flex-col overflow-y-auto overscroll-contain shadow-2xl"
            style={{ transform: "translateX(100%)" }}
          >
            {/* Image banner — full width, fixed height */}
            <div className="relative w-full h-96 sm:h-[480px] bg-surface-container-high overflow-hidden">
              {projectData[activeProject].image ? (
                <Image
                  src={projectData[activeProject].image!}
                  alt={`${projectData[activeProject].title} preview`}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon size={48} className="text-on-background/5" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />
              {/* Close button pinned to banner top-right */}
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full text-on-background/60 hover:text-on-background bg-surface-container-high/70 backdrop-blur-sm border border-on-background/10 hover:border-on-background/30 hover:bg-on-background/5 transition-all duration-300 z-10 flex items-center justify-center"
                onClick={closeDrawer}
                aria-label="Close"
              >
                <X size={16} />
              </button>
              {/* Index pinned to banner bottom-left */}
              <span className="absolute bottom-3 left-8 font-cormorant italic text-6xl leading-none text-on-background/15 font-semibold select-none">
                {projectMeta[activeProject as ProjectKey]?.index}
              </span>
            </div>

            {/* Content */}
            <div className="px-8 sm:px-10 pt-8 pb-12">
              {/* Title + tags */}
              <h2
                id="drawer-title"
                className="font-headline-lg text-3xl sm:text-4xl text-on-background font-extrabold tracking-tight mb-5"
              >
                {projectData[activeProject].title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-10 pb-10 border-b border-on-background/5">
                {projectData[activeProject].tags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-on-background/5 border border-on-background/10 text-[10px] font-mono-label text-on-background/60 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="font-body-lg text-on-background/60 leading-relaxed text-base font-light mb-6">
                {projectData[activeProject].description}
              </p>

              {/* Challenge */}
              <div className="mb-6 pb-6 border-b border-on-background/5">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-cormorant italic text-3xl text-primary/30 font-semibold leading-none select-none">01</span>
                  <h3 className="font-mono-label text-xs uppercase tracking-[0.2em] text-on-background/40">Challenge</h3>
                </div>
                <p className="font-body-md text-on-background/60 font-light leading-relaxed pl-9 text-sm">
                  {projectData[activeProject].challenges}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-cormorant italic text-3xl text-primary/30 font-semibold leading-none select-none">02</span>
                  <h3 className="font-mono-label text-xs uppercase tracking-[0.2em] text-on-background/40">Solution</h3>
                </div>
                <p className="font-body-md text-on-background/60 font-light leading-relaxed pl-9 text-sm">
                  {projectData[activeProject].solution}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-on-background/5">
                {projectData[activeProject].sourceUrl && (
                  <a
                    href={projectData[activeProject].sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-transparent border border-on-background/20 hover:bg-on-background/5 hover:border-on-background/40 text-on-background px-6 py-3.5 rounded-full font-mono-label text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <Code2 size={13} /> View Source
                  </a>
                )}
                {projectData[activeProject].demoUrl && (
                  <a
                    href={projectData[activeProject].demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary hover:bg-primary-container text-on-primary px-6 py-3.5 rounded-full font-mono-label text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <ExternalLink size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
