import { forwardRef } from "react";
import Image from "next/image";

const HeroImage = forwardRef<HTMLDivElement>(function HeroImage(_, ref) {
  return (
    <div ref={ref} className="lg:order-2 lg:w-1/2 relative z-10 mt-0 sm:mt-10 lg:mt-0 flex justify-center lg:justify-end w-full" style={{ opacity: 0 }}>
      <div className="relative w-full max-w-[280px] sm:max-w-[450px] md:max-w-[600px] aspect-[4/5] animate-float">
        <Image
          alt="Portrait of Ritoban Goswami, a Full-Stack Engineer"
          className="w-full h-full object-contain relative z-0 opacity-100 drop-shadow-2xl bg-transparent"
          src="/hero.png"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          priority
        />
      </div>
    </div>
  );
});

export default HeroImage;
