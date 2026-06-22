"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const stats = [
  { value: "3+", label: "Years Experience", context: "Full-cycle delivery across B2B & SaaS" },
  { value: "200+", label: "Features Shipped", context: "Production, end-to-end ownership" },
  { value: "32%", label: "Faster Page Loads", context: "Next.js App Router migration" },
  { value: "40%", label: "Faster Delivery", context: "Via reusable component library" },
];

function StatCard({ value, label, context }: { value: string; label: string; context: string }) {
  const numRef = useRef<HTMLDivElement>(null);

  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (!numRef.current || isNaN(numeric)) return;
    const el = numRef.current;
    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: numeric,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = (Number.isInteger(numeric)
            ? Math.round(obj.val).toString()
            : obj.val.toFixed(1)) + suffix;
        },
      });
    });

    return () => ctx.revert();
  }, [numeric, suffix]);

  return (
    <div className="glass-card p-6 flex flex-col justify-end min-h-[160px] group hover:border-on-background/10">
      <div className="w-8 h-px bg-primary/50 mb-4 group-hover:bg-primary transition-colors duration-300" />
      <div ref={numRef} className="font-headline-lg text-3xl text-on-background font-extrabold tracking-tight leading-none mb-1">
        {value}
      </div>
      <div className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-on-background/50 mb-2">
        {label}
      </div>
      <div className="font-body-md text-[11px] text-on-background/25 font-light leading-snug">
        {context}
      </div>
    </div>
  );
}

export default function AboutOrbs() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
