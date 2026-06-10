export default function AboutOrbs() {
  return (
    <div className="relative flex justify-center items-center h-full min-h-[400px]">
      <div
        className="absolute w-[300px] h-[300px] border border-on-background/5 rounded-full border-dashed"
        style={{ animation: "spin-cw 20s linear infinite" }}
      />
      <div
        className="absolute w-[200px] h-[200px] border border-on-background/5 rounded-full"
        style={{ animation: "spin-ccw 15s linear infinite" }}
      />
      <div className="glass-card p-10 rounded-full w-64 h-64 flex flex-col items-center justify-center text-center z-10">
        <div className="font-headline-xl text-on-background font-black text-6xl leading-none mb-2">3+</div>
        <div className="font-mono-label text-on-background/50 uppercase tracking-[0.2em] text-xs">Years Exp</div>
        <div className="w-12 h-px bg-on-background/10 my-4" />
        <div className="font-headline-md text-on-background font-bold text-3xl leading-none mb-1">200+</div>
        <div className="text-[10px] text-on-background/40 uppercase tracking-[0.2em]">Features Shipped</div>
      </div>
    </div>
  );
}
