import FadeUpSection from "@/components/FadeUpSection";
import AboutOrbs from "@/components/AboutOrbs";

export default function AboutSection() {
  return (
    <FadeUpSection className="py-20 md:py-40 mt-12 md:mt-24 relative px-4 sm:px-6 lg:px-0" id="about" delay={0.1}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
        <div>
          <h2 className="font-headline-lg text-4xl md:text-5xl text-on-background font-extrabold mb-10 tracking-tight">
            From Physics to <br />
            <span className="text-on-background/40 font-cormorant italic text-[3.5rem] tracking-wide font-semibold">Engineering.</span>
          </h2>
          <p className="font-body-md text-lg text-on-background/60 mb-8 font-light leading-relaxed">
            A self-taught engineer who transitioned from Physics, bringing strong analytical rigour to every problem. I own the full delivery cycle — architecture, implementation, data layer, and cloud infra — across B2B marketplaces and SaaS platforms.
          </p>
          <p className="font-body-md text-lg text-on-background/60 font-light leading-relaxed">
            I thrive in fast-moving remote product teams, optimising for performance, reducing latency, and shipping production-grade features end-to-end.
          </p>
        </div>
        <AboutOrbs />
      </div>
    </FadeUpSection>
  );
}
