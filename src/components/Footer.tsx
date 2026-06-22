import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { footerNavLinks, socialLinks } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-on-background/5 bg-surface-container-lowest overflow-hidden">
      <div className="grid-bg" aria-hidden="true" />

      {/* Big typographic statement */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 pt-16 md:pt-24 pb-10 md:pb-16">
        <p className="font-mono-label text-[10px] uppercase tracking-[0.25em] text-on-background/30 mb-4">
          Based in India · Available worldwide
        </p>
        <h2 className="font-headline-xl text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tight leading-[0.85] select-none">
          <span className="stroke-text-footer">Let&apos;s </span><span className="stroke-text-footer-red">Work</span>
        </h2>
        <div className="flex gap-6 mt-6 md:mt-8">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-1 font-mono-label text-[11px] uppercase tracking-widest text-on-background/40 hover:text-on-background transition-colors duration-200"
            >
              {label}
              <ArrowUpRight size={9} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="h-px bg-on-background/8" />
      </div>

      {/* Bottom bar */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex items-center gap-4">
          <Image
            alt="Ritoban Goswami"
            src="/logo.webp"
            width={176}
            height={96}
            className="opacity-30 hover:opacity-60 transition-opacity duration-300"
            style={{ width: "40px", height: "auto" }}
          />
          <p className="font-mono-label text-[10px] uppercase tracking-widest text-on-background/30">
            © {new Date().getFullYear()} Ritoban Goswami
          </p>
        </div>
        <nav className="flex gap-5">
          {footerNavLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-mono-label text-[10px] uppercase tracking-widest text-on-background/30 hover:text-on-background/70 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
