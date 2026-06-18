"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { gsap } from "@/lib/gsap";
import SectionHeading from "@/components/SectionHeading";

interface ExperienceEntry {
  date: string;
  title: string;
  company: string;
  meta: string;
  align: "right" | "left";
  bullets: React.ReactNode[];
}

const experiences: ExperienceEntry[] = [
  {
    date: "Sep 2022 – Present",
    title: "Software Engineer",
    company: "Appycodes",
    meta: "B2B Wholesale Marketplace · Remote UK",
    align: "right",
    bullets: [
      <>Owned end-to-end delivery of <strong className="text-on-background font-medium">200+ production features</strong> for hundreds of thousands of active merchants across product discovery, listing management, and checkout workflows.</>,
      <>Led Next.js App Router migration, improving page load performance by <strong className="text-on-background font-medium">32%</strong>, lifting Core Web Vitals scores platform-wide, and directly reducing bounce rate.</>,
      <>Architected scalable microservice APIs within a <strong className="text-on-background font-medium">200+ repository AWS serverless ecosystem</strong> (Lambda, API Gateway, DynamoDB, MySQL) with zero-downtime CI/CD pipelines.</>,
      <>Implemented real-time email status tracking via AWS SES and SQS, reducing <strong className="text-on-background font-medium">undetected delivery failures by ~90%</strong>.</>,
      <>Integrated Stripe payments and OAuth 2.0 with role-based access control and security-hardened session management, supporting secure transactions across the full marketplace.</>,
      <>Built Algolia-powered product discovery with dynamic faceted filters, cutting <strong className="text-on-background font-medium">average search latency by over 60%</strong>.</>,
      <>Designed a reusable component library (Tailwind CSS + Shadcn UI), cutting <strong className="text-on-background font-medium">feature delivery time by 40%</strong>, and mentored 2–3 junior engineers through code reviews and pair programming, raising overall PR quality team-wide.</>,
    ],
  },
  {
    date: "Sep 2025 – Present",
    title: "Full Stack Engineer",
    company: "Tellbyte",
    meta: "SaaS Platform · Contract · Remote US",
    align: "left",
    bullets: [
      <>Joined as a founding engineer, led frontend development, and participated in hiring engineers and designers as the company scaled.</>,
      <>Delivered <strong className="text-on-background font-medium">5–6 production applications</strong> across SaaS and client-facing domains, converting complex Figma designs into pixel-perfect, fully responsive full-stack applications.</>,
      <>Built complex animation-heavy interfaces using Framer Motion, achieving <strong className="text-on-background font-medium">80–90+ Lighthouse scores</strong> through bundle optimisation, lazy loading, and CLS reduction.</>,
      <>Integrated Elastic Email for transactional workflows and implemented GTM analytics pipelines covering event tracking, conversion funnels, and third-party tag management.</>,
    ],
  },
];

const VISIBLE_BULLETS = 2;

interface BulletListProps {
  bullets: React.ReactNode[];
  isLeft: boolean;
  className?: string;
}

const BulletList = forwardRef<HTMLUListElement, BulletListProps>(
  function BulletList({ bullets, isLeft, className = "" }, ref) {
    return (
      <ul
        ref={ref}
        className={`space-y-4 font-body-md text-sm lg:text-base text-on-background/60 font-light ${isLeft ? "text-left lg:text-right" : ""} ${className}`}
      >
        {bullets.map((bullet, i) => (
          <li key={i} className={`flex items-start gap-4 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
            <Check size={16} className="text-on-background/30 mt-1 shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    );
  }
);

function ExperienceCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const extraRef = useRef<HTMLUListElement>(null);
  const isLeft = entry.align === "left";
  const hiddenBullets = entry.bullets.slice(VISIBLE_BULLETS);

  // CSS transitions handle the expand/collapse animations now

  return (
    <div
      className={`exp-entry relative flex flex-col lg:flex-row items-center justify-between w-full group ${index < experiences.length - 1 ? "mb-10 lg:mb-40" : ""}`}
    >
      {/* Date — desktop left or right */}
      {!isLeft && (
        <div className="exp-date hidden lg:block w-[45%] text-right pr-16">
          <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-sm group-hover:text-on-background transition-colors duration-300">
            {entry.date}
          </span>
        </div>
      )}
      {/* Timeline dot */}
      <div data-align={entry.align} className="exp-dot timeline-dot transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,31,31,0.5)]" />

      {/* Card side */}
      <div className={`exp-card w-full pl-8 lg:pl-0 lg:w-[45%] ${isLeft ? "lg:text-right lg:pr-16 lg:order-1" : "lg:text-left lg:pl-16"}`}>
        {/* Date — mobile */}
        <div className={`lg:hidden mb-4 ${isLeft ? "mt-8" : ""}`}>
          <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-xs">
            {entry.date}
          </span>
        </div>

        <div className={`glass-card p-6 sm:p-10 rounded-none border-l-[1px] border-l-on-background/10 group-hover:border-l-primary ${isLeft ? "lg:border-l-0 lg:border-r-[1px] lg:border-r-on-background/10 lg:group-hover:border-l-transparent lg:group-hover:border-r-primary" : ""}`}>
          <h3 className="font-headline-md text-2xl text-on-background mb-3 font-semibold">{entry.title}</h3>
          <h4 className="font-body-md text-on-background/40 mb-1 uppercase tracking-widest text-xs">{entry.company}</h4>
          <p className={`font-body-md text-on-background/30 mb-6 sm:mb-8 text-xs font-light ${isLeft ? "text-left lg:text-right" : ""}`}>{entry.meta}</p>

          {/* Always-visible bullets */}
          <BulletList bullets={entry.bullets.slice(0, VISIBLE_BULLETS)} isLeft={isLeft} />

          {/* Collapsible extra bullets */}
          {hiddenBullets.length > 0 && (
            <>
              <BulletList
                ref={extraRef}
                bullets={hiddenBullets}
                isLeft={isLeft}
                className={`overflow-hidden transition-all duration-500 ease-out pt-5 ${expanded ? "h-auto opacity-100" : "h-0 opacity-0"}`}
              />

              <button
                onClick={() => setExpanded((v) => !v)}
                className={`mt-6 flex items-center gap-1.5 text-xs font-mono-label uppercase tracking-[0.15em] text-on-background/30 hover:text-primary transition-colors duration-200 ${isLeft ? "lg:ml-auto" : ""}`}
              >
                <span>{expanded ? "Show less" : `+${hiddenBullets.length} more`}</span>
                <ChevronDown
                  size={13}
                  className={`shrink-0 transition-transform duration-350 ease-out ${expanded ? "rotate-180" : ""}`}
                />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Date — desktop right side for left-aligned entries */}
      {isLeft && (
        <div className="exp-date hidden lg:block w-[45%] text-left pl-16 lg:order-2">
          <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-sm group-hover:text-on-background transition-colors duration-300">
            {entry.date}
          </span>
        </div>
      )}
    </div>
  );
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading fade-up
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 88%",
          once: true,
        },
      });

      // 2. Timeline track draw (scaleY from 0 → 1, origin top)
      gsap.fromTo(
        trackRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.6,
          },
        }
      );

      // 3. Per-entry: dot + card staggered timeline
      const entries = sectionRef.current?.querySelectorAll(".exp-entry");
      entries?.forEach((entry) => {
        const dot = entry.querySelector(".exp-dot");
        const card = entry.querySelector(".exp-card");
        const date = entry.querySelector(".exp-date");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: entry,
            start: "top 82%",
            once: true,
          },
        });

        const isLeftCard = (dot as HTMLElement)?.dataset.align === "left";
        const xFrom = isLeftCard ? -50 : 50;

        tl.fromTo(dot, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" })
          .fromTo(card, { x: xFrom, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.1")
          .fromTo(date, { opacity: 0, x: -xFrom * 0.5 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }, "-=0.4");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-12 lg:py-40 mt-12 lg:mt-24 px-4 sm:px-6 lg:px-0"
    >
      <SectionHeading
        ref={headingRef}
        primary="Work"
        italic="Experience"
        className="mb-10 lg:mb-32 text-center"
      />

      <div className="relative max-w-5xl mx-auto">
        <div ref={trackRef} className="timeline-track" />
        {experiences.map((entry, i) => (
          <ExperienceCard key={entry.company} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
