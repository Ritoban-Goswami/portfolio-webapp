"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, X, ImageIcon, AlertTriangle, Lightbulb, ExternalLink, Code2 } from "lucide-react";
import { projectData } from "@/data/projects";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
      previousFocusRef.current = document.activeElement as HTMLElement;
    } else {
      document.body.style.overflow = "auto";
      previousFocusRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    if (activeProject) {
      window.addEventListener("keydown", handleKeyDown);
      const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusableElements?.[0]?.focus();
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  return (
    <>
      <section className="py-20 md:py-40 mt-12 md:mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0" id="projects">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
          <h2 className="font-headline-lg text-4xl md:text-5xl text-on-background tracking-tight font-extrabold">
            Featured <span className="text-on-background/40 font-cormorant italic text-[3.5rem] tracking-wide font-semibold ml-[0.4rem]">Projects</span>
          </h2>
          <a
            className="text-on-background/50 hover:text-on-background font-mono-label text-xs uppercase tracking-widest flex items-center gap-2 transition-colors pb-2"
            href="#"
          >
            View All <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Boardly */}
          <div
            className="glass-card p-6 sm:p-12 flex flex-col h-full group cursor-pointer"
            onClick={() => setActiveProject("boardly")}
          >
            <div className="flex justify-between items-start mb-10">
              <h3 className="font-headline-md text-3xl text-on-background group-hover:text-primary transition-colors font-bold tracking-tight">
                Boardly
              </h3>
              <div className="w-12 h-12 rounded-full border border-on-background/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <ArrowUpRight size={20} className="text-on-background/50 group-hover:text-primary" />
              </div>
            </div>
            <p className="font-body-md text-on-background/50 flex-grow mb-14 font-light leading-relaxed text-lg">
              A production-grade real-time collaborative Kanban board with multi-board support, drag-and-drop task management, role-based access control, and in-app notifications.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Next.js", "TypeScript", "Firebase", "Zustand", "Tailwind CSS"].map((tag) => (
                <span key={tag} className="px-5 py-2 bg-on-background/5 border border-on-background/10 text-xs font-mono-label text-on-background/70 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quantize Colors */}
          <div
            className="glass-card p-6 sm:p-12 flex flex-col h-full group cursor-pointer"
            onClick={() => setActiveProject("quantize")}
          >
            <div className="flex justify-between items-start mb-10">
              <h3 className="font-headline-md text-3xl text-on-background group-hover:text-primary transition-colors font-bold tracking-tight">
                quantize-colors
              </h3>
              <div className="w-12 h-12 rounded-full border border-on-background/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <ArrowUpRight size={20} className="text-on-background/50 group-hover:text-primary" />
              </div>
            </div>
            <p className="font-body-md text-on-background/50 flex-grow mb-14 font-light leading-relaxed text-lg">
              An open-source npm library implementing color quantization, dominant color extraction, and luminance-based palette generation for dynamic theming and image compression.
            </p>
            <div className="flex flex-wrap gap-4">
              {["JavaScript", "Node.js", "Canvas API", "Open Source"].map((tag) => (
                <span key={tag} className="px-5 py-2 bg-on-background/5 border border-on-background/10 text-xs font-mono-label text-on-background/70 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* PawShots */}
          <div
            className="glass-card p-6 sm:p-12 flex flex-col h-full group cursor-pointer"
            onClick={() => setActiveProject("pawshots")}
          >
            <div className="flex justify-between items-start mb-10">
              <h3 className="font-headline-md text-3xl text-on-background group-hover:text-primary transition-colors font-bold tracking-tight">
                PawShots
              </h3>
              <div className="w-12 h-12 rounded-full border border-on-background/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <ArrowUpRight size={20} className="text-on-background/50 group-hover:text-primary" />
              </div>
            </div>
            <p className="font-body-md text-on-background/50 flex-grow mb-14 font-light leading-relaxed text-lg">
              A pet image gallery with bulk ZIP download, infinite scroll, real-time search, and AI-powered color analysis grouping pets into 13 visual categories via quantize-colors.
            </p>
            <div className="flex flex-wrap gap-4">
              {["React 19", "TypeScript", "Styled Components", "Context API", "Vite"].map((tag) => (
                <span key={tag} className="px-5 py-2 bg-on-background/5 border border-on-background/10 text-xs font-mono-label text-on-background/70 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Word(le) Finder */}
          <div
            className="glass-card p-6 sm:p-12 flex flex-col h-full group cursor-pointer"
            onClick={() => setActiveProject("wordle")}
          >
            <div className="flex justify-between items-start mb-10">
              <h3 className="font-headline-md text-3xl text-on-background group-hover:text-primary transition-colors font-bold tracking-tight">
                Word(le) Finder
              </h3>
              <div className="w-12 h-12 rounded-full border border-on-background/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <ArrowUpRight size={20} className="text-on-background/50 group-hover:text-primary" />
              </div>
            </div>
            <p className="font-body-md text-on-background/50 flex-grow mb-14 font-light leading-relaxed text-lg">
              A web tool that helps Wordle players find word suggestions based on green, yellow, and grey letter feedback — with meaning lookup for each result.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Next.js", "Shadcn UI", "Tailwind CSS", "Datamuse API"].map((tag) => (
                <span key={tag} className="px-5 py-2 bg-on-background/5 border border-on-background/10 text-xs font-mono-label text-on-background/70 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Project Detail Modal Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${activeProject ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          className="fixed inset-0 bg-background/90 backdrop-blur-md"
          onClick={() => setActiveProject(null)}
          aria-hidden="true"
        />
        <div className="relative z-10 p-4 sm:p-6 min-h-[calc(100vh-3rem)] flex items-center justify-center pointer-events-none">
          <div
            ref={modalRef}
            className={`modal-content relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-none border border-on-background/10 shadow-2xl bg-surface-container-low backdrop-blur-xl transition-all duration-300 pointer-events-auto ${activeProject ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
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
                    <X size={18} />
                  </button>
                </div>
                <div className="p-8 sm:p-16 -mt-20">
                  <div className="w-full h-64 sm:h-96 bg-surface-container-high mb-12 flex items-center justify-center border border-on-background/5 overflow-hidden">
                    {projectData[activeProject].image ? (
                      <Image
                        src={projectData[activeProject].image!}
                        alt={`${projectData[activeProject].title} preview`}
                        width={896}
                        height={384}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <ImageIcon size={64} className="text-on-background/5" />
                    )}
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
                        <AlertTriangle size={20} className="text-on-background/40" /> Challenges
                      </h3>
                      <p className="font-body-md text-on-background/50 font-light leading-relaxed">
                        {projectData[activeProject].challenges}
                      </p>
                    </div>
                    <div className="p-8 border border-on-background/10 bg-on-background/[0.02]">
                      <h3 className="font-headline-md text-on-background mb-6 flex items-center gap-3 text-xl font-medium tracking-wide">
                        <Lightbulb size={20} className="text-on-background/40" /> Solutions
                      </h3>
                      <p className="font-body-md text-on-background/50 font-light leading-relaxed">
                        {projectData[activeProject].solution}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {projectData[activeProject].sourceUrl && (
                      <a
                        href={projectData[activeProject].sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border border-on-background/20 hover:bg-on-background/5 hover:border-on-background text-on-background px-6 sm:px-8 py-3 sm:py-4 font-label-md text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3"
                      >
                        <Code2 size={14} /> View Source
                      </a>
                    )}
                    {projectData[activeProject].demoUrl && (
                      <a
                        href={projectData[activeProject].demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary-container text-on-primary px-6 sm:px-8 py-3 sm:py-4 font-label-md text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
