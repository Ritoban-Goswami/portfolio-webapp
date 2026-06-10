"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight, X, ImageIcon, AlertTriangle, Lightbulb, ExternalLink, Code2 } from "lucide-react";
import { projectData } from "@/data/projects";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <section className="py-40 mt-24 fade-up max-w-6xl mx-auto" id="projects">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
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
            className="glass-card p-12 flex flex-col h-full group cursor-pointer"
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
              A collaborative whiteboarding tool built with React and WebSockets. Enables real-time
              drawing, note-taking, and remote team collaboration with sub-50ms latency sync.
            </p>
            <div className="flex flex-wrap gap-4">
              {["React", "Node.js", "Socket.io", "Canvas"].map((tag) => (
                <span key={tag} className="px-5 py-2 bg-on-background/5 border border-on-background/10 text-xs font-mono-label text-on-background/70 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
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
                <ArrowUpRight size={20} className="text-on-background/50 group-hover:text-primary" />
              </div>
            </div>
            <p className="font-body-md text-on-background/50 flex-grow mb-14 font-light leading-relaxed text-lg">
              An open-source library for extracting dominant colors from images using K-Means clustering.
              Highly optimized for browser environments with Web Workers.
            </p>
            <div className="flex flex-wrap gap-4">
              {["TypeScript", "Algorithms", "Web Workers"].map((tag) => (
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
        className={`modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${activeProject ? "active opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          className="absolute inset-0 bg-background/90 backdrop-blur-md"
          onClick={() => setActiveProject(null)}
          aria-hidden="true"
        />
        <div
          className={`modal-content relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-none border border-on-background/10 shadow-2xl bg-surface-container-low transition-all duration-300 ${activeProject ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
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
                  <ImageIcon size={64} className="text-on-background/5" />
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
                <div className="flex gap-6">
                  <a
                    href={projectData[activeProject].sourceUrl || "#"}
                    className="bg-transparent border border-on-background/20 hover:bg-on-background/5 hover:border-on-background text-on-background px-8 py-4 font-label-md text-sm uppercase tracking-widest transition-all flex items-center gap-3"
                  >
                    <Code2 size={14} /> View Source
                  </a>
                  <a
                    href={projectData[activeProject].demoUrl || "#"}
                    className="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 font-label-md text-sm uppercase tracking-widest transition-all flex items-center gap-3"
                  >
                    <ExternalLink size={14} /> Live Demo
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
