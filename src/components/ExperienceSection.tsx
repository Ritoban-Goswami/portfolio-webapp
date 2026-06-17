import { Check } from "lucide-react";
import FadeUpSection from "@/components/FadeUpSection";

export default function ExperienceSection() {
  return (
    <FadeUpSection className="py-20 md:py-40 mt-12 md:mt-24 px-4 sm:px-6 lg:px-0" id="experience">
      <h2 className="font-headline-lg text-4xl md:text-5xl text-on-background mb-16 md:mb-32 text-center tracking-tight font-extrabold">
        Work <span className="text-on-background/40 font-cormorant italic text-[3.5rem] tracking-wide font-semibold ml-[0.4rem]">Experience</span>
      </h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="timeline-track" />

        {/* Appycodes */}
        <div className="relative flex flex-col md:flex-row items-center justify-between mb-20 md:mb-40 w-full group">
          <div className="hidden md:block w-[45%] text-right pr-16">
            <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-sm group-hover:text-on-background transition-colors duration-300">
              Sep 2022 – Present
            </span>
          </div>
          <div className="timeline-dot transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,31,31,0.5)]" />
          <div className="w-full pl-12 md:pl-0 md:w-[45%] md:text-left md:pl-16">
            <div className="md:hidden mb-6">
              <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-xs">
                Sep 2022 – Present
              </span>
            </div>
            <div className="glass-card p-6 sm:p-12 rounded-none border-l-[1px] border-l-on-background/10 group-hover:border-l-primary">
              <h3 className="font-headline-md text-2xl text-on-background mb-3 font-semibold">Software Engineer</h3>
              <h4 className="font-body-md text-on-background/40 mb-1 uppercase tracking-widest text-xs">Appycodes</h4>
              <p className="font-body-md text-on-background/30 mb-6 sm:mb-10 text-xs font-light">B2B Wholesale Marketplace · Remote UK</p>
              <ul className="space-y-6 font-body-md text-on-background/60 font-light">
                <li className="flex items-start gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Owned end-to-end delivery of <strong className="text-on-background font-medium">200+ production features</strong> for hundreds of thousands of active merchants across product discovery, listing management, and checkout workflows.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Led Next.js App Router migration, improving page load performance by <strong className="text-on-background font-medium">32%</strong>, lifting Core Web Vitals scores platform-wide, and directly reducing bounce rate.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Architected scalable microservice APIs within a <strong className="text-on-background font-medium">200+ repository AWS serverless ecosystem</strong> (Lambda, API Gateway, DynamoDB, MySQL) with zero-downtime CI/CD pipelines.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Implemented real-time email status tracking via AWS SES and SQS, reducing <strong className="text-on-background font-medium">undetected delivery failures by ~90%</strong>.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Built Algolia-powered product discovery with dynamic faceted filters, cutting <strong className="text-on-background font-medium">average search latency by over 60%</strong>.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Designed a reusable component library (Tailwind CSS + Shadcn UI), cutting <strong className="text-on-background font-medium">feature delivery time by 40%</strong>, and mentored 2–3 junior engineers through code reviews.</span>
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
                Sep 2025 – Present
              </span>
            </div>
            <div className="glass-card p-6 sm:p-12 rounded-none border-l-[1px] border-l-on-background/10 md:border-l-0 md:border-r-[1px] md:border-r-on-background/10 group-hover:border-l-primary md:group-hover:border-l-transparent md:group-hover:border-r-primary">
              <h3 className="font-headline-md text-2xl text-on-background mb-3 font-semibold">Full Stack Engineer</h3>
              <h4 className="font-body-md text-on-background/40 mb-1 uppercase tracking-widest text-xs">Tellbyte</h4>
              <p className="font-body-md text-on-background/30 mb-6 sm:mb-10 text-xs font-light text-left md:text-right">SaaS Platform · Contract · Remote US</p>
              <ul className="space-y-6 font-body-md text-on-background/60 font-light text-left md:text-right">
                <li className="flex items-start md:flex-row-reverse gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Joined as a founding engineer, led frontend development, and participated in hiring engineers and designers as the company scaled.</span>
                </li>
                <li className="flex items-start md:flex-row-reverse gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Delivered <strong className="text-on-background font-medium">5–6 production applications</strong> across SaaS and client-facing domains, converting complex Figma designs into pixel-perfect, fully responsive full-stack applications.</span>
                </li>
                <li className="flex items-start md:flex-row-reverse gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Built complex animation-heavy interfaces using Framer Motion, achieving <strong className="text-on-background font-medium">80–90+ Lighthouse scores</strong> through bundle optimisation, lazy loading, and CLS reduction.</span>
                </li>
                <li className="flex items-start md:flex-row-reverse gap-4">
                  <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                  <span>Integrated Elastic Email for transactional workflows and implemented GTM analytics pipelines covering event tracking, conversion funnels, and third-party tag management.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="timeline-dot transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,31,31,0.5)]" />
          <div className="hidden md:block w-[45%] text-left pl-16 order-1 md:order-2">
            <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-sm group-hover:text-on-background transition-colors duration-300">
              Sep 2025 – Present
            </span>
          </div>
        </div>

      </div>
    </FadeUpSection>
  );
}
