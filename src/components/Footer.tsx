import Image from "next/image";
import { Code2, Briefcase, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full pt-20 pb-5 bg-surface-container-lowest border-t border-on-background/5 flex flex-col items-center gap-12 text-center">
      <div className="flex justify-between items-center w-full max-w-[1200px] px-6 md:px-12 flex-col md:flex-row gap-10">
        <Image
          alt="Ritoban Goswami Logo"
          className="rounded-md opacity-30 hover:opacity-100 transition-opacity"
          src="/logo.webp"
          width={176}
          height={96}
          style={{ width: "90px", height: "auto" }}
        />
        <div className="flex gap-10">
          <a aria-label="GitHub" className="text-on-background/40 hover:text-on-background transition-colors duration-300" href="https://github.com/Ritoban-Goswami" target="_blank" rel="noopener noreferrer">
            <Code2 size={20} />
          </a>
          <a aria-label="LinkedIn" className="text-on-background/40 hover:text-on-background transition-colors duration-300" href="https://www.linkedin.com/in/ritoban-goswami" target="_blank" rel="noopener noreferrer">
            <Briefcase size={20} />
          </a>
        </div>
      </div>
      <div className="w-full max-w-[1200px] pt-16 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono-label tracking-widest text-on-background/30 uppercase">
        <p>© {new Date().getFullYear()} Ritoban Goswami.</p>
        <p className="flex items-center gap-2">
          Built for performance <Zap size={12} className="text-primary" />
        </p>
      </div>
    </footer>
  );
}
