"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SectionHeading from "@/components/SectionHeading";

const skills = [
  {
    index: "01",
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    index: "02",
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Radix UI", "WebSockets", "Core Web Vitals"],
  },
  {
    index: "03",
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Microservices", "DynamoDB", "MySQL", "Redis"],
  },
  {
    index: "04",
    label: "Infra & Cloud",
    items: ["AWS Lambda", "API Gateway", "SQS", "SES", "Docker", "CI/CD", "Terraform", "Git"],
  },
  {
    index: "05",
    label: "Testing",
    items: ["Jest", "Cypress"],
  },
  {
    index: "06",
    label: "Integrations",
    items: ["Stripe", "OAuth 2.0", "Algolia", "Twilio", "Elastic Email", "Strapi", "Sanity", "OpenAI API"],
  },
];

const allSkills = skills.flatMap((s) => s.items);

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0, y: 40, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 88%", once: true },
      });

      if (marqueeInnerRef.current) {
        gsap.to(marqueeInnerRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 30,
          repeat: -1,
        });
      }

      const rows = sectionRef.current?.querySelectorAll(".skill-row");
      rows?.forEach((row, i) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.55, ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 90%", once: true },
            delay: i * 0.06,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-12 lg:py-40 mt-12 lg:mt-24"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <SectionHeading
          ref={headingRef}
          primary="Technical"
          italic="Arsenal"
          className="mb-10 lg:mb-24 text-center"
        />
      </div>

      {/* Marquee ticker */}
      <div
        ref={marqueeRef}
        className="overflow-hidden border-y border-on-background/10 py-4 mb-10 lg:mb-24"
      >
        <div ref={marqueeInnerRef} className="flex gap-8 w-max">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span key={i} className="font-mono-label text-xs uppercase tracking-[0.2em] text-on-background/35 whitespace-nowrap flex items-center gap-8">
              {skill}
              <span className="text-primary/50 text-[6px]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Category rows */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        {skills.map(({ index, label, items }) => (
          <div
            key={label}
            className="skill-row flex flex-col lg:grid lg:grid-cols-[auto_1px_1fr] items-start gap-x-5 lg:gap-x-12 py-5 lg:py-7 border-b border-on-background/10 group last:border-b-0 gap-y-3 lg:gap-y-0"
          >
            {/* Category label */}
            <div className="w-full lg:w-44 pt-0.5 shrink-0 flex items-center gap-3 lg:block">
              <span className="font-cormorant italic text-2xl text-primary/40 group-hover:text-primary/70 font-semibold leading-none lg:block lg:mb-1 select-none transition-colors duration-300">{index}</span>
              <span className="font-mono-label text-xs uppercase tracking-[0.18em] text-on-background/50 group-hover:text-on-background/75 transition-colors duration-300">{label}</span>
            </div>

            {/* Divider */}
            <div className="hidden lg:block self-stretch bg-on-background/10 group-hover:bg-primary/40 transition-colors duration-500" />

            {/* Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-1.5 bg-on-background/[0.04] border border-on-background/15 text-xs font-light text-on-background/65 hover:border-primary/40 hover:text-on-background/90 hover:bg-primary/5 transition-all duration-200 cursor-default tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
