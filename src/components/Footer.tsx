import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-on-background/5 bg-surface-container-lowest">
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 pt-14 pb-12 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-4">
          <Image
            alt="Ritoban Goswami"
            src="/logo.webp"
            width={176}
            height={96}
            className="opacity-25 hover:opacity-70 transition-opacity duration-300"
            style={{ width: "72px", height: "auto" }}
          />
          <p className="font-body-md text-on-background/25 font-light text-sm max-w-[220px] leading-relaxed">
            Crafting performant, production-grade web experiences.
          </p>
        </div>

        {/* Nav + Social */}
        <div className="flex gap-16">
          <div>
            <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-on-background/20 mb-4">Pages</p>
            <ul className="flex flex-col gap-2.5">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-mono-label text-[11px] uppercase tracking-widest text-on-background/30 hover:text-on-background transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-on-background/20 mb-4">Connect</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "GitHub", href: "https://github.com/Ritoban-Goswami" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/ritoban-goswami" },
                { label: "Email", href: "mailto:dev.ritoban.goswami@gmail.com" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-1 font-mono-label text-[11px] uppercase tracking-widest text-on-background/30 hover:text-on-background transition-colors duration-200 group"
                  >
                    {label}
                    <ArrowUpRight size={9} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-5 border-t border-on-background/5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-mono-label text-[10px] uppercase tracking-widest text-on-background/20">
          © {new Date().getFullYear()} Ritoban Goswami. All rights reserved.
        </p>
        <p className="font-mono-label text-[10px] uppercase tracking-widest text-on-background/20">
          Designed & Built by Ritoban Goswami
        </p>
      </div>
    </footer>
  );
}
