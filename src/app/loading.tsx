export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] flex h-dvh w-dvw items-center justify-center bg-[#050505]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#ff1f1f] animate-spin" />
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-white/40">
          Loading
        </span>
      </div>
    </div>
  );
}
