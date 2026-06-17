"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import HeroImage from "@/components/HeroImage";
import GlowOrb from "@/components/GlowOrb";
import gsap from "gsap";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(nameRef.current, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.55 })
        .fromTo(roleRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.3")
        .fromTo(bodyRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.25")
        .fromTo(ctaRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.35 }, "-=0.2")
        .fromTo(imageRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.55 }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center relative mt-10"
    >
      <div className="grid-bg" aria-hidden="true" />
      <GlowOrb />
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full">

        <div className="lg:w-1/2 relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left pt-20 lg:pt-0">
          <div ref={nameRef} className="relative w-full" style={{ opacity: 0 }}>
            <h1 className="font-headline-xl font-geist text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] text-on-background tracking-tight leading-[0.8] font-black uppercase relative z-20 mix-blend-difference">
              Ritoban
            </h1>
            <h1 className="font-headline-xl font-geist text-[2.5rem] sm:text-[4rem] md:text-[7rem] lg:text-[9rem] stroke-text tracking-tight leading-[0.8] font-black uppercase relative z-0 -mt-1 sm:-mt-2 md:-mt-6 ml-2 sm:ml-4 md:ml-12">
              Goswami
            </h1>
          </div>

          <div ref={roleRef} className="mt-10 sm:mt-16 flex items-center gap-4 sm:gap-6" style={{ opacity: 0 }}>
            <div className="h-px w-16 bg-primary" />
            <span className="text-on-background/70 font-mono-label text-xs md:text-sm uppercase tracking-[0.4em]">
              Full-Stack Engineer
            </span>
          </div>

          <p
            ref={bodyRef}
            className="font-body-lg text-base sm:text-lg text-on-background/60 max-w-md mt-8 sm:mt-10 font-light leading-relaxed"
            style={{ opacity: 0 }}
          >
            3+ years shipping production features end-to-end across B2B marketplaces and SaaS platforms — from React/Next.js UI through Node.js/Express.js APIs to AWS serverless infrastructure.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 sm:mt-16 w-full sm:w-auto"
            style={{ opacity: 0 }}
          >
            <a
              className="bg-primary text-on-primary font-label-md text-sm uppercase tracking-widest px-8 py-4 rounded-none hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 active:scale-95 flex items-center gap-3"
              href="#projects"
            >
              View Work
              <ArrowRight size={16} />
            </a>
            <a
              className="bg-transparent border border-on-background/20 text-on-background font-label-md text-sm uppercase tracking-widest px-8 py-4 rounded-none hover:border-on-background hover:bg-on-background/5 transition-all duration-300 active:scale-95 inline-flex items-center justify-center backdrop-blur-md"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>

        <HeroImage ref={imageRef} />

      </div>
    </section>
  );
}
