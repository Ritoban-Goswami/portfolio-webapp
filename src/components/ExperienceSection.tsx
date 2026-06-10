import { Check } from "lucide-react";
import FadeUpSection from "@/components/FadeUpSection";

export default function ExperienceSection() {
  return (
    <FadeUpSection className="py-40 mt-24" id="experience">
      <h2 className="font-headline-lg text-4xl md:text-5xl text-on-background mb-32 text-center tracking-tight font-extrabold">
        Work <span className="text-on-background/40 font-cormorant italic text-[3.5rem] tracking-wide font-semibold ml-[0.4rem]">Experience</span>
      </h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="timeline-track" />

        {/* Appycodes */}
        <div className="relative flex flex-col md:flex-row items-center justify-between mb-40 w-full group">
          <div className="hidden md:block w-[45%] text-right pr-16">
            <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-sm group-hover:text-on-background transition-colors duration-300">
              2022 - Present
            </span>
          </div>
          <div className="timeline-dot transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,31,31,0.5)]" />
          <div className="w-full pl-12 md:pl-0 md:w-[45%] md:text-left md:pl-16">
            <div className="md:hidden mb-6">
              <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-xs">
                2022 - Present
              </span>
            </div>
            <div className="glass-card p-12 rounded-none border-l-[1px] border-l-on-background/10 group-hover:border-l-primary">
              <h3 className="font-headline-md text-2xl text-on-background mb-3 font-semibold">Software Engineer</h3>
              <h4 className="font-body-md text-on-background/40 mb-10 uppercase tracking-widest text-xs">Appycodes</h4>
              <ul className="space-y-6 font-body-md text-on-background/60 font-light">
                <li className="flex items-start gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Built scalable architecture resulting in <strong className="text-on-background font-medium">32% faster load times</strong>.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Optimized database queries for <strong className="text-on-background font-medium">60% lower search latency</strong>.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Implemented robust error handling, leading to <strong className="text-on-background font-medium">90% fewer delivery failures</strong>.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tellbyte */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
          <div className="w-full pl-12 md:pl-0 md:w-[45%] md:text-right md:pr-16 order-2 md:order-1">
            <div className="md:hidden mb-6 mt-16">
              <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-xs">
                2020 - 2022
              </span>
            </div>
            <div className="glass-card p-12 rounded-none border-l-[1px] border-l-on-background/10 md:border-l-0 md:border-r-[1px] md:border-r-on-background/10 group-hover:border-l-primary md:group-hover:border-l-transparent md:group-hover:border-r-primary">
              <h3 className="font-headline-md text-2xl text-on-background mb-3 font-semibold">Founding Engineer</h3>
              <h4 className="font-body-md text-on-background/40 mb-10 uppercase tracking-widest text-xs">Tellbyte</h4>
              <ul className="space-y-6 font-body-md text-on-background/60 font-light text-left md:text-right">
                <li className="flex items-start md:flex-row-reverse gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Architected initial MVP from scratch.</span>
                </li>
                <li className="flex items-start md:flex-row-reverse gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Maintained <strong className="text-on-background font-medium">Lighthouse scores of 80-90+</strong> across all metrics.</span>
                </li>
                <li className="flex items-start md:flex-row-reverse gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Scaled user base significantly in the first year.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="timeline-dot transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,31,31,0.5)]" />
          <div className="hidden md:block w-[45%] text-left pl-16 order-1 md:order-2">
            <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-sm group-hover:text-on-background transition-colors duration-300">
              2020 - 2022
            </span>
          </div>
        </div>

      </div>
    </FadeUpSection>
  );
}
