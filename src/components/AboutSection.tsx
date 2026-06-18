"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import AboutOrbs from "@/components/AboutOrbs";
import SectionHeading from "@/components/SectionHeading";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = sectionRef.current?.querySelectorAll(".about-anim");
      targets?.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
            delay: i * 0.07,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-12 lg:py-40 mt-24 relative px-4 sm:px-6 lg:px-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center max-w-6xl mx-auto relative z-10">
        <div>
          {/* Mono overline */}
          <span className="about-anim font-mono-label text-xs uppercase tracking-[0.2em] text-on-background/30 mb-4 lg:mb-6 block">
            About Me
          </span>

          {/* Heading */}
          <SectionHeading
            primary="From Physics to"
            italic="Engineering."
            className="about-anim mb-6 lg:mb-10"
          />

          <p className="about-anim font-body-md text-sm lg:text-lg text-on-background/60 mb-5 lg:mb-8 font-light leading-relaxed">
            Self-taught engineer who transitioned from Physics to professional software development, bringing strong analytical rigour to every problem. I own the full delivery cycle — architecture, implementation, data layer, and cloud infra — across B2B marketplaces and SaaS platforms.
          </p>
          <p className="about-anim font-body-md text-sm lg:text-lg text-on-background/60 font-light leading-relaxed">
            Currently working across two product teams — a B2B wholesale marketplace and a SaaS platform — as a founding-level engineer. I thrive in fast-moving remote environments, shipping production-grade features end-to-end and mentoring engineers along the way.
          </p>
        </div>

        <div className="about-anim">
          <AboutOrbs />
        </div>
      </div>
    </section>
  );
}
