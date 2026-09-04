"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const stats = [
  { value: "5K+", label: "Merchants on Platform", context: "200+ retailers, 3,000+ orders/day" },
  { value: "78%", label: "Auto-Approved Credit", context: "KYC engine, 65% less manual review" },
  { value: "60%", label: "Faster Search", context: "Algolia, 420ms → 168ms autocomplete and filters" },
  { value: "<200ms", label: "INP, Platform-Wide", context: "Google's \"Good\" Core Web Vitals" },
];

function StatCard({ value, label, context }: { value: string; label: string; context: string }) {
  const numRef = useRef<HTMLDivElement>(null);

  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  const prefix = value.match(/^[^0-9.]+/)?.[0] ?? "";
  const suffix = value.replace(/^[^0-9.]+/, "").replace(/[0-9.]/g, "");

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
          el.textContent =
            prefix +
            (Number.isInteger(numeric)
              ? Math.round(obj.val).toString()
              : obj.val.toFixed(1)) +
            suffix;
        },
      });
    });

    return () => ctx.revert();
  }, [numeric, prefix, suffix]);

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
