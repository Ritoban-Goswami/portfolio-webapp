"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function SpotlightCursor() {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50, mass: 0.1 });

  const ringX = useSpring(mouseX, { stiffness: 180, damping: 32, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 32, mass: 0.6 });

  useEffect(() => {
    const interactiveSelector = "a, button, input, textarea, select, [role='button'], [data-cursor-hover]";

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(interactiveSelector)) setHovering(true);
    };

    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(interactiveSelector)) setHovering(false);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseout", handleMouseOut, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <div aria-hidden="true" className="hidden [@media(pointer:fine)]:block" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease" }}>

      {/* Ring — tracks with medium lag, expands on hover */}
      <motion.div
        className="pointer-events-none fixed rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 9998,
          willChange: "transform",
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          border: hovering
            ? "1px solid rgba(255,31,31,0.5)"
            : "1px solid rgba(255,255,255,0.12)",
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease",
        }}
      />

      {/* Inner dot — near-instant, collapses on hover */}
      <motion.div
        className="pointer-events-none fixed rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 9999,
          willChange: "transform",
          width: hovering ? 3 : 4,
          height: hovering ? 3 : 4,
          background: hovering ? "rgba(255,31,31,0.9)" : "rgba(255,255,255,0.9)",
          boxShadow: hovering
            ? "0 0 6px 2px rgba(255,31,31,0.4)"
            : "0 0 4px 1px rgba(255,255,255,0.2)",
          transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
        }}
      />
    </div>
  );
}
