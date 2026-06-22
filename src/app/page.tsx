import SpotlightCursor from "@/components/SpotlightCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTopButton from "@/components/BackToTopButton";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <ScrollProgressBar />
      <SpotlightCursor />
      <BackToTopButton />

      <div className="relative z-10 w-full">
        <Navbar />
        <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-48 overflow-hidden">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
        </main>
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
