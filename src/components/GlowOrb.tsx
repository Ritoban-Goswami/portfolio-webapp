"use client";

import { motion } from "framer-motion";

export default function GlowOrb() {
  return (
    <motion.div
      className="bg-glow glow-1"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
      transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, delay: 0.8 }}
    />
  );
}
