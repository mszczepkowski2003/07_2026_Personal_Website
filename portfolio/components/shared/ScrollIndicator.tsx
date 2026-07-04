export function ScrollIndicator() {
  return (
    <div className="pointer-events-none flex flex-col items-center gap-3">
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ink-muted">
        Scroll
      </span>
      <span className="scroll-cue relative block h-10 w-px bg-line">
        <span className="scroll-cue-dot absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-accent" />
      </span>
      <style>{`
        @keyframes scrollCue {
          0% { transform: translate(-50%, 0); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translate(-50%, 32px); opacity: 0; }
        }
        .scroll-cue-dot {
          animation: scrollCue 1.8s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>
    </div>
  );
}
