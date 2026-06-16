"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="fixed inset-0 z-[99999] flex h-dvh w-dvw items-center justify-center bg-[#050505]">
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />
          <div className="absolute inset-0 rounded-full border-2 border-[#ff1f1f]" />
          <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-[#ff1f1f]">
            !
          </span>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/60">
            Something went wrong
          </h2>
          <p className="text-xs text-white/40 max-w-xs">
            {error.message || "An unexpected error occurred"}
          </p>
        </div>
        <button
          onClick={reset}
          className="mt-2 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60 border border-white/10 rounded hover:bg-white/5 hover:text-white/80 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
