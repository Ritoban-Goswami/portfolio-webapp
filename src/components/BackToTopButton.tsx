"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) * 0.3;
    const distY = (e.clientY - centerY) * 0.3;
    x.set(distX);
    y.set(distY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`fixed bottom-8 right-8 z-50 group ${show
        ? "opacity-100 pointer-events-auto translate-y-0"
        : "opacity-0 pointer-events-none translate-y-4"
        }`}
      style={{ x: springX, y: springY }}
      id="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Back to top"
      initial={{ scale: 0.8 }}
      animate={{ scale: show ? 1 : 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Minimal pill button */}
      <div className="relative h-10 w-10 flex items-center justify-center bg-surface-container-high/80 backdrop-blur-md rounded-full border border-on-background/10 group-hover:border-primary/50 transition-all duration-300">
        {/* Arrow with hover animation */}
        <motion.div
          className="text-on-background/60 group-hover:text-primary transition-colors duration-300"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <ArrowUp size={16} strokeWidth={2.5} />
        </motion.div>
      </div>
    </motion.button>
  );
}
