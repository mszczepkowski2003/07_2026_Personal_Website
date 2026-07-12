"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ui } from "@/lib/i18n/ui";

export function ScrollIndicator() {
  const { lang } = useLanguage();

  return (
    <div className="pointer-events-none flex flex-col items-center gap-4">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink-soft">
        {ui.hero.scroll[lang]}
      </span>

      {/* Mouse-style capsule with an animated dot — instantly reads as "scroll" */}
      <span className="flex h-11 w-6 justify-center rounded-full border-2 border-ink-soft/80">
        <span className="scroll-cue-dot mt-2 h-2 w-2 rounded-full bg-accent" />
      </span>

      {/* Bouncing chevron underneath reinforces the direction */}
      <span className="scroll-cue-chevron font-mono text-lg leading-none text-accent">
        ↓
      </span>

      <style>{`
        @keyframes scrollCueDot {
          0% { transform: translateY(0); opacity: 0; }
          25% { opacity: 1; }
          100% { transform: translateY(14px); opacity: 0; }
        }
        @keyframes scrollCueChevron {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(5px); opacity: 1; }
        }
        .scroll-cue-dot {
          animation: scrollCueDot 1.6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        .scroll-cue-chevron {
          animation: scrollCueChevron 1.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
