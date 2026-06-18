"use client";

import { useEffect, useRef } from "react";
import ContactForm from "@/components/ContactForm";
import { Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: leftRef.current, start: "top 85%", once: true }
        }
      );
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.15,
          scrollTrigger: { trigger: rightRef.current, start: "top 85%", once: true }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-12 lg:py-40 mt-12 lg:mt-24 w-full border-t border-on-background/5 bg-surface-container-low"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-24 items-start">

        {/* Left — editorial panel */}
        <div ref={leftRef}>
          <span className="font-mono-label text-[10px] sm:text-xs uppercase tracking-[0.2em] text-on-background/40 mb-4 sm:mb-6 block">
            Get in touch
          </span>
          <h2 className="font-headline-lg text-3xl lg:text-5xl text-on-background mb-4 sm:mb-6 lg:mb-8 font-extrabold tracking-tight">
            Let&apos;s Build <br className="hidden sm:block" />
            <span className="text-on-background/40 font-cormorant italic text-[2.1rem] lg:text-[3.5rem] tracking-wide font-semibold ml-[0.4rem]">Something Great.</span>
          </h2>
          <p className="font-body-lg text-on-background/50 font-light text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-md">
            Currently open to new opportunities — freelance, full-time, or consulting. I&apos;ll get back to you within 24 hours.
          </p>

          {/* Direct email — hidden on mobile to save space */}
          <div className="hidden lg:block">
            <p className="font-body-md text-on-background/30 text-sm font-light mb-3">
              Or drop me a direct email at
            </p>
            <a
              href="mailto:dev.ritoban.goswami@gmail.com"
              className="flex items-center gap-4 group w-fit"
            >
              <div className="w-9 h-9 border border-on-background/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <Mail size={14} className="text-on-background/40 group-hover:text-primary transition-colors" />
              </div>
              <span className="font-mono-label text-xs tracking-widest text-on-background/40 group-hover:text-on-background transition-colors duration-300">
                dev.ritoban.goswami@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div ref={rightRef}>
          <ContactForm />
        </div>

      </div>
    </section>
  );
}
