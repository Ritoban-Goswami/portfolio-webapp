import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SpotlightCursor from "@/components/SpotlightCursor";

export default function NotFound() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <SpotlightCursor />

      <div className="relative min-h-screen bg-background text-on-background flex flex-col items-center justify-center overflow-hidden">
        <div className="grid-bg" aria-hidden="true" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[110px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <p className="font-mono text-primary text-[text-mono-label] tracking-[0.2em] uppercase mb-6 text-sm">
            Error 404
          </p>

          <h1 className="font-sans font-extrabold text-[clamp(96px,20vw,200px)] leading-none tracking-tighter text-on-background/5 stroke-text select-none">
            404
          </h1>

          <h2 className="font-sans font-bold text-[clamp(28px,5vw,48px)] leading-tight tracking-tight text-on-background -mt-4 mb-4">
            Page Not Found
          </h2>

          <p className="text-on-background/50 text-base md:text-lg max-w-md leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-on-primary font-medium text-sm tracking-wide px-6 py-3 rounded-sm hover:bg-primary-container transition-colors duration-200"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
