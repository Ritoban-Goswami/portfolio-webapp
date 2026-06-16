"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="lg:w-1/2 relative z-10 mt-12 sm:mt-20 lg:mt-0 flex justify-center lg:justify-end w-full">
      <motion.div
        className="relative w-full max-w-[320px] sm:max-w-[450px] md:max-w-[600px] aspect-[4/5]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent z-10" />
        <Image
          alt="Portrait of Ritoban Goswami, a Full-Stack Engineer"
          className="w-full h-full object-contain relative z-0 opacity-100 drop-shadow-2xl bg-transparent"
          src="/hero.png"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          priority
        />
      </motion.div>
    </div>
  );
}
