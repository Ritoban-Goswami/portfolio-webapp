"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface FadeUpSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function FadeUpSection({ children, className, id, delay = 0 }: FadeUpSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.section>
  );
}
