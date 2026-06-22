"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[99999] flex h-dvh w-dvw items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-on-background/10" />
          <div className="absolute inset-0 rounded-full border-2 border-primary" />
          <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-primary">
            !
          </span>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm uppercase tracking-[0.3em] text-on-background/60">
            Something went wrong
          </h2>
          <p className="text-xs text-on-background/40 max-w-xs">
            {error.message || "An unexpected error occurred"}
          </p>
        </div>
        <button
          onClick={reset}
          className="mt-2 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-on-background/60 border border-on-background/10 rounded-full hover:bg-on-background/5 hover:border-on-background/30 hover:text-on-background/90 transition-all duration-300"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
