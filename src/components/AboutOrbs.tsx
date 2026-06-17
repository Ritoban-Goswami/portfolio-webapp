const stats = [
  {
    value: "3+",
    label: "Years Experience",
    context: "Full-cycle delivery across B2B & SaaS",
  },
  {
    value: "200+",
    label: "Features Shipped",
    context: "Production, end-to-end ownership",
  },
  {
    value: "32%",
    label: "Faster Page Loads",
    context: "Next.js App Router migration",
  },
  {
    value: "40%",
    label: "Faster Delivery",
    context: "Via reusable component library",
  },
];

export default function AboutOrbs() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map(({ value, label, context }) => (
        <div key={label} className="glass-card p-6 flex flex-col justify-end min-h-[160px] group hover:border-on-background/10">
          <div className="w-8 h-px bg-primary/50 mb-4 group-hover:bg-primary transition-colors duration-300" />
          <div className="font-headline-lg text-3xl text-on-background font-extrabold tracking-tight leading-none mb-1">
            {value}
          </div>
          <div className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-on-background/50 mb-2">
            {label}
          </div>
          <div className="font-body-md text-[11px] text-on-background/25 font-light leading-snug">
            {context}
          </div>
        </div>
      ))}
    </div>
  );
}
