"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, X, ImageIcon, ExternalLink, Code2 } from "lucide-react";
import { projectData, projectOrder, type ProjectKey } from "@/data/projects";
import { gsap } from "@/lib/gsap";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import SectionHeading from "@/components/SectionHeading";

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
      previousFocusRef.current?.focus();
    });
  }, []);

  useBodyScrollLock(!!activeProject);

  useEffect(() => {
    if (!activeProject || !drawerRef.current || !overlayRef.current) return;

    const isMobile = window.innerWidth < 640;
    const tl = gsap.timeline();
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" })
      .fromTo(
        drawerRef.current,
        isMobile ? { y: "100%" } : { x: "100%" },
        isMobile ? { y: "0%", duration: 0.45, ease: "power4.out" } : { x: "0%", duration: 0.55, ease: "power4.out" },
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
  const rest = projectOrder.slice(1) as ProjectKey[];

  return (
    <>
      <section
        ref={sectionRef}
        className="py-12 lg:py-40 mt-12 lg:mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0"
        id="projects"
      >
        {/* Heading row */}
        <div className="mb-8 lg:mb-20">
          <SectionHeading primary="Featured" italic="Projects" />
        </div>

        {/* Hero card — Boardly */}
        <div
          className="proj-hero glass-card group cursor-pointer mb-6 overflow-hidden flex flex-col lg:flex-row min-h-[420px] border border-on-background/5 hover:border-on-background/10 transition-colors duration-500"
          onClick={() => openDrawer("boardly")}
        >
          {/* Text side */}
          <div className="flex flex-col justify-between p-6 sm:p-12 lg:w-[48%] shrink-0">
            <div>
              <span className="font-cormorant italic text-[2.5rem] lg:text-[3.5rem] leading-none text-on-background/8 font-semibold select-none">
                {featured.index}
              </span>
              <h3 className="font-headline-lg text-2xl lg:text-5xl text-on-background group-hover:text-primary transition-colors duration-300 font-extrabold tracking-tight mt-2 mb-4 lg:mb-6">
                {featured.title}
              </h3>
              <p className="font-body-lg text-on-background/50 font-light leading-relaxed text-sm lg:text-lg">
                {featured.description}
              </p>
            </div>
            <div className="mt-6 lg:mt-10">
              <div className="flex flex-wrap gap-3 mb-8">
                {featured.tags.map((tag) => (
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
            {featured.video ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              >
                <source src={`${featured.video}.webm`} type="video/webm" />
                <source src={`${featured.video}.mp4`} type="video/mp4" />
              </video>
            ) : featured.image ? (
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
            return (
              <div
                key={key}
                className="proj-secondary glass-card group cursor-pointer flex flex-col p-7 sm:p-8 border border-on-background/5 hover:border-on-background/10 transition-colors duration-500 overflow-hidden"
                onClick={() => openDrawer(key)}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="font-cormorant italic text-4xl leading-none text-on-background/8 font-semibold select-none">
                    {proj.index}
                  </span>
                  <div className="w-9 h-9 rounded-full border border-on-background/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 shrink-0">
                    <ArrowUpRight size={15} className="text-on-background/40 group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-headline-md text-xl text-on-background group-hover:text-primary transition-colors duration-300 font-bold tracking-tight mb-3">
                  {proj.title}
                </h3>
                <p className="font-body-md text-on-background/40 font-light leading-relaxed text-sm flex-grow mb-6">
                  {proj.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tags.slice(0, 3).map((tag) => (
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

          {/* Drawer panel — bottom sheet on mobile, side drawer on sm+ */}
          <div
            ref={drawerRef}
            className="absolute bottom-0 inset-x-0 max-h-[90svh] sm:max-h-none sm:top-0 sm:bottom-auto sm:right-0 sm:left-auto sm:h-full w-full sm:w-[85vw] lg:w-[60vw] xl:w-[52vw] bg-surface-container-low sm:border-l border-t sm:border-t-0 border-on-background/10 flex flex-col overflow-y-auto overscroll-contain shadow-2xl rounded-t-2xl sm:rounded-none"
            style={{ transform: typeof window !== "undefined" && window.innerWidth < 640 ? "translateY(100%)" : "translateX(100%)" }}
          >
            {/* Image banner — h-40 on mobile, h-[480px] on sm+ */}
            <div className="relative w-full h-40 sm:h-[480px] bg-surface-container-high overflow-hidden shrink-0">
              <div className="absolute inset-0 animate-pulse bg-on-background/5" />
              {projectData[activeProject].video ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover object-top"
                >
                  <source src={`${projectData[activeProject].video}.webm`} type="video/webm" />
                  <source src={`${projectData[activeProject].video}.mp4`} type="video/mp4" />
                </video>
              ) : projectData[activeProject].image ? (
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
              {/* Handle bar — mobile only */}
              <div className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-on-background/30 rounded-full" />
              {/* Close button */}
              <button
                className="sm:hidden absolute top-3 right-3 w-9 h-9 rounded-full text-on-background/60 hover:text-on-background bg-surface-container-high/70 backdrop-blur-sm border border-on-background/10 hover:border-on-background/30 hover:bg-on-background/5 transition-all duration-300 z-10 flex items-center justify-center"
                onClick={closeDrawer}
                aria-label="Close"
              >
                <X size={15} />
              </button>
              {/* Index pinned to banner bottom-left */}
              <span className="absolute bottom-3 left-5 sm:left-8 font-cormorant italic text-4xl sm:text-6xl leading-none text-on-background/15 font-semibold select-none">
                {projectData[activeProject].index}
              </span>
            </div>

            {/* Content */}
            <div className="px-5 sm:px-10 pt-4 sm:pt-8 pb-10">
              {/* Title + tags */}
              <h2
                id="drawer-title"
                className="font-headline-lg text-2xl sm:text-4xl text-on-background font-extrabold tracking-tight mb-3 sm:mb-5"
              >
                {projectData[activeProject].title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-5 sm:mb-10 pb-5 sm:pb-10 border-b border-on-background/5">
                {projectData[activeProject].tags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-on-background/5 border border-on-background/10 text-[10px] font-mono-label text-on-background/60 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="font-body-lg text-on-background/60 leading-relaxed text-sm sm:text-base font-light mb-4 sm:mb-6">
                {projectData[activeProject].description}
              </p>

              {/* Challenge */}
              <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-on-background/5">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-cormorant italic text-3xl text-primary/30 font-semibold leading-none select-none">01</span>
                  <h3 className="font-mono-label text-xs uppercase tracking-[0.2em] text-on-background/40">Challenge</h3>
                </div>
                <p className="font-body-md text-on-background/60 font-light leading-relaxed pl-9 text-sm">
                  {projectData[activeProject].challenges}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-5 sm:mb-8">
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
                    className="flex-1 bg-transparent border border-on-background/20 hover:bg-on-background/5 hover:border-on-background/40 text-on-background px-5 py-2.5 rounded-full font-mono-label text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <Code2 size={13} /> View Source
                  </a>
                )}
                {projectData[activeProject].demoUrl && (
                  <a
                    href={projectData[activeProject].demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary hover:bg-primary-container text-on-primary px-5 py-2.5 rounded-full font-mono-label text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 group"
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
