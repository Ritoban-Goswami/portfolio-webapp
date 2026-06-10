import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-40 pointer-events-none">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto px-6 md:px-12 h-36 pointer-events-none">

        <a href="#" aria-label="Go to top of page" className="pointer-events-auto">
          <Image
            alt="Ritoban Goswami Logo"
            className="rounded-md opacity-80 hover:opacity-100 transition-opacity duration-300"
            src="/logo.svg"
            width={176}
            height={96}
            style={{ width: "176px", height: "auto" }}
            priority
            loading="eager"
          />
        </a>

        <nav className="hidden md:flex items-center gap-1 pointer-events-auto bg-on-background/[0.04] backdrop-blur-xl border border-on-background/[0.07] rounded-full px-2 py-2">
          <a className="text-on-background/50 hover:text-on-background hover:bg-on-background/[0.06] transition-all duration-200 font-label-md text-xs uppercase tracking-widest px-5 py-2 rounded-full" href="#about">About</a>
          <a className="text-on-background/50 hover:text-on-background hover:bg-on-background/[0.06] transition-all duration-200 font-label-md text-xs uppercase tracking-widest px-5 py-2 rounded-full" href="#experience">Experience</a>
          <a className="text-on-background/50 hover:text-on-background hover:bg-on-background/[0.06] transition-all duration-200 font-label-md text-xs uppercase tracking-widest px-5 py-2 rounded-full" href="#projects">Projects</a>
          <a className="text-on-background/50 hover:text-on-background hover:bg-on-background/[0.06] transition-all duration-200 font-label-md text-xs uppercase tracking-widest px-5 py-2 rounded-full" href="#skills">Skills</a>
        </nav>

        <a
          className="hidden md:block pointer-events-auto bg-primary text-on-primary font-label-md text-xs uppercase tracking-widest px-7 py-3 rounded-none hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 active:scale-95"
          href="#contact"
        >
          Hire Me
        </a>

      </div>
    </header>
  );
}
