import Image from "next/image";
import { ArrowRight, Check, Code2, Briefcase, X as XIcon, Zap } from "lucide-react";
import SpotlightCursor from "@/components/SpotlightCursor";
import BackToTopButton from "@/components/BackToTopButton";
import ScrollAnimator from "@/components/ScrollAnimator";
import ProjectsSection from "@/components/ProjectsSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Environmental Overlays */}
      <div className="noise-overlay" aria-hidden="true"></div>
      <SpotlightCursor />

      {/* Client-side utilities */}
      <BackToTopButton />
      <ScrollAnimator />

      {/* Main Layout Wrapper */}
      <div className="relative z-10 w-full">

        {/* Header Section */}
        <header className="fixed top-0 w-full z-40 bg-background/70 backdrop-blur-xl border-b border-on-background/5 shadow-none">
          <div className="flex justify-between items-center max-w-[1400px] mx-auto px-6 md:px-12 h-24">
            <a href="#" aria-label="Go to top of page">
              <Image
                alt="Ritoban Goswami Logo"
                className="h-16 w-24 object-cover rounded-md"
                src="/logo.svg"
                width={96}
                height={64}
                priority
              />
            </a>
            <nav className="hidden md:flex gap-10">
              <a
                className="text-on-background/50 hover:text-on-background transition-colors duration-300 font-label-md text-sm uppercase tracking-widest"
                href="#about"
              >
                About
              </a>
              <a
                className="text-on-background/50 hover:text-on-background transition-colors duration-300 font-label-md text-sm uppercase tracking-widest"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="text-on-background/50 hover:text-on-background transition-colors duration-300 font-label-md text-sm uppercase tracking-widest"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="text-on-background/50 hover:text-on-background transition-colors duration-300 font-label-md text-sm uppercase tracking-widest"
                href="#skills"
              >
                Skills
              </a>
            </nav>
            <a
              className="hidden md:block bg-primary text-on-primary font-label-md text-xs uppercase tracking-widest px-8 py-3 rounded-none hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 active:scale-95"
              href="#contact"
            >
              Hire Me
            </a>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-48 overflow-hidden">

          {/* Hero Section */}
          <section className="min-h-[90vh] flex flex-col items-center justify-center relative fade-up mt-10" id="hero">
            <div className="grid-bg" aria-hidden="true"></div>
            <div className="bg-glow glow-1" aria-hidden="true"></div>
            <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full">

              {/* Bespoke Typography Left Side */}
              <div className="lg:w-1/2 relative z-20 flex flex-col items-start text-left pt-20 lg:pt-0">
                <div className="relative w-full">
                  <h1 className="font-headline-xl text-[5rem] md:text-[8rem] lg:text-[10rem] text-on-background tracking-tight leading-[0.8] font-black uppercase relative z-20 mix-blend-difference">
                    Ritoban
                  </h1>
                  <h1 className="font-headline-xl text-[4rem] md:text-[7rem] lg:text-[9rem] stroke-text tracking-tight leading-[0.8] font-black uppercase relative z-0 -mt-2 md:-mt-6 ml-4 md:ml-12">
                    Goswami
                  </h1>
                </div>
                <div className="mt-16 flex items-center gap-6">
                  <div className="h-px w-16 bg-primary"></div>
                  <span className="text-on-background/70 font-mono-label text-xs md:text-sm uppercase tracking-[0.4em]">
                    Full-Stack Engineer
                  </span>
                </div>
                <p className="font-body-lg text-lg text-on-background/60 max-w-md mt-10 font-light leading-relaxed">
                  Building high-performance, scalable web applications with a focus on React, Next.js, and
                  AWS. Bridging the gap between physics logic and software architecture.
                </p>
                <div className="flex gap-6 mt-16">
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

              {/* Hero Image Right Side */}
              <div className="lg:w-1/2 relative z-10 mt-20 lg:mt-0 flex justify-center lg:justify-end w-full">
                <div className="relative w-full max-w-[600px] aspect-[4/5] animate-float-hero">

                  {/* Shadow/Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent z-10"></div>

                  {/* Main Figure */}
                  <Image
                    alt="Developer Figure"
                    className="w-full h-full object-contain relative z-0 opacity-100 drop-shadow-2xl bg-transparent"
                    src="/hero.png"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    priority
                  />
                </div>
              </div>

            </div>
          </section>

          {/* About Section */}
          <section className="py-40 mt-24 fade-up relative" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="font-headline-lg text-4xl md:text-5xl text-on-background font-extrabold mb-10 tracking-tight">
                  From Physics to <br />
                  <span className="text-on-background/40 italic font-light">Engineering</span>.
                </h2>
                <p className="font-body-md text-lg text-on-background/60 mb-8 font-light leading-relaxed">
                  My journey started with physics, teaching me to break down complex systems into fundamental
                  principles. I apply this exact methodology to software engineering—building robust
                  architectures that scale elegantly.
                </p>
                <p className="font-body-md text-lg text-on-background/60 font-light leading-relaxed">
                  I thrive on optimizing performance, reducing latency, and delivering seamless user
                  experiences.
                </p>
              </div>
              <div className="relative flex justify-center items-center h-full min-h-[400px]">
                <div className="absolute w-[300px] h-[300px] border border-on-background/5 rounded-full animate-[spin_20s_linear_infinite] border-dashed"></div>
                <div className="absolute w-[200px] h-[200px] border border-on-background/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="glass-card p-10 rounded-full w-64 h-64 flex flex-col items-center justify-center text-center z-10">
                  <div className="font-headline-xl text-on-background font-black text-6xl leading-none mb-2">3+</div>
                  <div className="font-mono-label text-on-background/50 uppercase tracking-[0.2em] text-xs">Years Exp</div>
                  <div className="w-12 h-px bg-on-background/10 my-4"></div>
                  <div className="font-headline-md text-on-background font-bold text-3xl leading-none mb-1">200+</div>
                  <div className="text-[10px] text-on-background/40 uppercase tracking-[0.2em]">Features Shipped</div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="py-40 mt-24 fade-up" id="experience">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-on-background mb-32 text-center tracking-tight font-extrabold">
              Work <span className="text-on-background/40 italic font-light">Experience</span>
            </h2>
            <div className="relative max-w-5xl mx-auto">
              <div className="timeline-track"></div>

              {/* Appycodes */}
              <div className="relative flex flex-col md:flex-row items-center justify-between mb-40 w-full group">
                <div className="hidden md:block w-[45%] text-right pr-16">
                  <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-sm group-hover:text-on-background transition-colors duration-300">
                    2022 - Present
                  </span>
                </div>
                <div className="timeline-dot transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,31,31,0.5)]"></div>
                <div className="w-full pl-12 md:pl-0 md:w-[45%] md:text-left md:pl-16">
                  <div className="md:hidden mb-6">
                    <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-xs">
                      2022 - Present
                    </span>
                  </div>
                  <div className="glass-card p-12 rounded-none border-l-[1px] border-l-on-background/10 group-hover:border-l-primary">
                    <h3 className="font-headline-md text-2xl text-on-background mb-3 font-semibold">
                      Software Engineer
                    </h3>
                    <h4 className="font-body-md text-on-background/40 mb-10 uppercase tracking-widest text-xs">
                      Appycodes
                    </h4>
                    <ul className="space-y-6 font-body-md text-on-background/60 font-light">
                      <li className="flex items-start gap-4">
                        <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                        <span>
                          Built scalable architecture resulting in <strong className="text-on-background font-medium">32% faster load times</strong>.
                        </span>
                      </li>
                      <li className="flex items-start gap-4">
                        <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                        <span>
                          Optimized database queries for <strong className="text-on-background font-medium">60% lower search latency</strong>.
                        </span>
                      </li>
                      <li className="flex items-start gap-4">
                        <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                        <span>
                          Implemented robust error handling, leading to <strong className="text-on-background font-medium">90% fewer delivery failures</strong>.
                        </span>
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
                    <h3 className="font-headline-md text-2xl text-on-background mb-3 font-semibold">
                      Founding Engineer
                    </h3>
                    <h4 className="font-body-md text-on-background/40 mb-10 uppercase tracking-widest text-xs">
                      Tellbyte
                    </h4>
                    <ul className="space-y-6 font-body-md text-on-background/60 font-light text-left md:text-right">
                      <li className="flex items-start md:flex-row-reverse gap-4">
                        <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                        <span>Architected initial MVP from scratch.</span>
                      </li>
                      <li className="flex items-start md:flex-row-reverse gap-4">
                        <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                        <span>
                          Maintained <strong className="text-on-background font-medium">Lighthouse scores of 80-90+</strong> across all metrics.
                        </span>
                      </li>
                      <li className="flex items-start md:flex-row-reverse gap-4">
                        <Check size={18} className="text-on-background/30 mt-1 shrink-0" />
                        <span>Scaled user base significantly in the first year.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="timeline-dot transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,31,31,0.5)]"></div>
                <div className="hidden md:block w-[45%] text-left pl-16 order-1 md:order-2">
                  <span className="font-mono-label text-on-background/40 uppercase tracking-[0.2em] text-sm group-hover:text-on-background transition-colors duration-300">
                    2020 - 2022
                  </span>
                </div>
              </div>

            </div>
          </section>

          <ProjectsSection />

          {/* Skills Section */}
          <section className="py-40 mt-24 fade-up max-w-6xl mx-auto" id="skills">
            <h2 className="font-headline-lg text-4xl md:text-5xl text-on-background mb-32 text-center tracking-tight font-extrabold">
              Technical <span className="text-on-background/40 italic font-light">Arsenal</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              <div className="glass-card p-12">
                <h3 className="font-headline-md text-xl text-on-background mb-10 flex items-center gap-4 font-semibold tracking-wide">
                  <span className="text-on-background/20 font-mono-label text-sm uppercase">01 //</span> Languages
                </h3>
                <div className="flex flex-wrap gap-4">
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    JavaScript
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    TypeScript
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    Python
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    SQL
                  </span>
                </div>
              </div>

              <div className="glass-card p-12">
                <h3 className="font-headline-md text-xl text-on-background mb-10 flex items-center gap-4 font-semibold tracking-wide">
                  <span className="text-on-background/20 font-mono-label text-sm uppercase">02 //</span> Frontend
                </h3>
                <div className="flex flex-wrap gap-4">
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    React
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    Next.js
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    Tailwind CSS
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    Framer Motion
                  </span>
                </div>
              </div>

              <div className="glass-card p-12">
                <h3 className="font-headline-md text-xl text-on-background mb-10 flex items-center gap-4 font-semibold tracking-wide">
                  <span className="text-on-background/20 font-mono-label text-sm uppercase">03 //</span> Backend
                </h3>
                <div className="flex flex-wrap gap-4">
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    Node.js
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    PostgreSQL
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    AWS
                  </span>
                  <span className="px-5 py-2.5 bg-transparent border border-on-background/10 text-sm font-light text-on-background/70 hover:border-on-background/40 hover:text-on-background transition-all cursor-default">
                    Docker
                  </span>
                </div>
              </div>

            </div>
          </section>

        </main>

        {/* Contact Section */}
        <section className="py-40 mt-24 fade-up w-full border-t border-on-background/5 bg-surface-container-low" id="contact">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="text-center mb-24">
              <h2 className="font-headline-xl text-5xl md:text-7xl text-on-background mb-8 font-extrabold tracking-tighter">
                Let&apos;s Build <br />
                <span className="text-on-background/40 italic font-light">Something Great.</span>
              </h2>
              <p className="font-body-lg text-on-background/50 max-w-xl mx-auto font-light text-lg">
                Currently open to new opportunities. Reach out and I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="glass-card p-12 md:p-16 max-w-2xl mx-auto rounded-xl">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer Component */}
        <footer className="relative z-10 w-full py-20 bg-surface-container-lowest border-t border-on-background/5 flex flex-col items-center gap-12 text-center">
          <div className="flex justify-between items-center w-full max-w-[1200px] px-6 md:px-12 flex-col md:flex-row gap-10">
            <Image
              alt="Ritoban Goswami Logo"
              className="h-14 w-20 object-cover rounded-md opacity-30 hover:opacity-100 transition-opacity"
              src="/logo.svg"
              width={80}
              height={56}
            />
            <div className="flex gap-10">
              <a
                aria-label="GitHub"
                className="text-on-background/40 hover:text-on-background transition-colors duration-300"
                href="#"
              >
                <Code2 size={20} />
              </a>
              <a
                aria-label="LinkedIn"
                className="text-on-background/40 hover:text-on-background transition-colors duration-300"
                href="#"
              >
                <Briefcase size={20} />
              </a>
              <a
                aria-label="Twitter"
                className="text-on-background/40 hover:text-on-background transition-colors duration-300"
                href="#"
              >
                <XIcon size={20} />
              </a>
            </div>
          </div>
          <div className="w-full max-w-[1200px] px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono-label tracking-widest text-on-background/30 uppercase">
            <p>© {new Date().getFullYear()} Ritoban Goswami.</p>
            <p className="flex items-center gap-2">
              Built for performance{" "}
              <Zap size={12} className="text-primary" />
            </p>
          </div>
        </footer>

      </div>

    </>
  );
}
