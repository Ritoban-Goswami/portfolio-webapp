import FadeUpSection from "@/components/FadeUpSection";
import AboutOrbs from "@/components/AboutOrbs";

export default function AboutSection() {
  return (
    <FadeUpSection className="py-40 mt-24 relative" id="about" delay={0.1}>
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
        <AboutOrbs />
      </div>
    </FadeUpSection>
  );
}
