"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import HeroImage from "@/components/HeroImage";
import { gsap } from "@/lib/gsap";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(imageRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55 })
        .fromTo(nameRef.current, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.3")
        .fromTo(roleRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.3")
        .fromTo(bodyRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.25")
        .fromTo(ctaRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.35 }, "-=0.2")
        .fromTo(chevronRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.1");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-[85svh] md:min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="grid-bg" aria-hidden="true" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[110px] pointer-events-none" aria-hidden="true" />

      {/* Mobile: image on top, text below — Desktop: side by side */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full mt-4 lg:mt-10">

        {/* Image: first in DOM = top on mobile, pushed right on desktop via lg:order-2 in HeroImage */}
        <HeroImage ref={imageRef} />

        <div className="lg:order-1 lg:w-1/2 relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-0 px-5 sm:px-0">

          <div ref={nameRef} className="relative w-full" style={{ opacity: 0 }}>
            <h1 className="font-headline-xl font-geist text-[3.6rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] text-on-background tracking-tight leading-[0.82] font-black uppercase relative z-20 mix-blend-difference">
              Ritoban
            </h1>
            <h1 className="font-headline-xl font-geist text-[3rem] sm:text-[4rem] md:text-[7rem] lg:text-[9rem] stroke-text tracking-tight leading-[0.82] font-black uppercase relative z-0 -mt-1 sm:-mt-2 md:-mt-6 ml-2 sm:ml-4 md:ml-12">
              Goswami
            </h1>
          </div>

          <div ref={roleRef} className="mt-4 sm:mt-10 lg:mt-16 flex items-center gap-4 sm:gap-6" style={{ opacity: 0 }}>
            <div className="h-px w-16 bg-primary" />
            <span className="text-on-background/70 font-mono-label text-xs md:text-sm uppercase tracking-[0.4em]">
              Full-Stack Engineer
            </span>
          </div>

          <p
            ref={bodyRef}
            className="font-body-lg text-sm sm:text-base lg:text-lg text-on-background/55 max-w-sm lg:max-w-md mt-4 sm:mt-10 font-light leading-relaxed"
            style={{ opacity: 0 }}
          >
            3+ years shipping production features end-to-end across B2B marketplaces and SaaS platforms — from React/Next.js UI through Node.js/Express.js APIs to AWS serverless infrastructure.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-16 w-full sm:w-auto"
            style={{ opacity: 0 }}
          >
            <a
              className="bg-primary text-on-primary font-label-md text-sm uppercase tracking-widest px-6 py-3 rounded-none hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
              href="#projects"
            >
              View Work
              <ArrowRight size={16} />
            </a>
            <a
              className="bg-transparent border border-on-background/20 text-on-background font-label-md text-sm uppercase tracking-widest px-6 py-3 rounded-none hover:border-on-background hover:bg-on-background/5 transition-all duration-300 active:scale-95 inline-flex items-center justify-center backdrop-blur-md"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>

      </div>
      <a
        ref={chevronRef}
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-on-background/30 hover:text-on-background/70 transition-colors duration-300"
        style={{ opacity: 0 }}
      >
        <ChevronDown
          size={24}
          className="animate-bounce"
          strokeWidth={1.5}
        />
      </a>
    </section>
  );
}
