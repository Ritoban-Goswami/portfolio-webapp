import FadeUpSection from "@/components/FadeUpSection";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <FadeUpSection className="py-20 md:py-40 mt-12 md:mt-24 w-full border-t border-on-background/5 bg-surface-container-low" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 md:mb-24">
          <h2 className="font-headline-xl text-4xl sm:text-5xl md:text-7xl text-on-background mb-8 font-extrabold tracking-tighter">
            Let&apos;s Build <br />
            <span className="text-on-background/40 font-cormorant italic text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] tracking-wide font-semibold">Something Great.</span>
          </h2>
          <p className="font-body-lg text-on-background/50 max-w-xl mx-auto font-light text-lg">
            Currently open to new opportunities. Reach out and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="glass-card p-6 sm:p-12 md:p-16 max-w-2xl mx-auto rounded-none">
          <ContactForm />
        </div>
      </div>
    </FadeUpSection>
  );
}
