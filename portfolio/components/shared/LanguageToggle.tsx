"use client";

import { useId } from "react";
import { LANGUAGES, type Language, type Localized } from "@/lib/i18n/config";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ui } from "@/lib/i18n/ui";

/** Union Jack, drawn inline so it renders identically on every platform. */
function FlagGB({ className }: { className?: string }) {
  const id = useId();
  const clipAll = `${id}-a`;
  const clipDiag = `${id}-d`;
  return (
    <svg
      viewBox="0 0 60 30"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <clipPath id={clipAll}>
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id={clipDiag}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath={`url(#${clipAll})`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          clipPath={`url(#${clipDiag})`}
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

/** Flag of Poland — white over red. */
function FlagPL({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 10"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="16" height="10" fill="#fff" />
      <rect y="5" width="16" height="5" fill="#DC143C" />
    </svg>
  );
}

const OPTIONS: Record<
  Language,
  { Flag: (p: { className?: string }) => JSX.Element; label: Localized }
> = {
  en: { Flag: FlagGB, label: ui.langToggle.english },
  pl: { Flag: FlagPL, label: ui.langToggle.polish },
};

/**
 * Binary language switch rendered as two national flags in a highlighted,
 * bordered control. The active language is shown in full colour with an accent
 * frame; the inactive one is dimmed and desaturated. Each flag is a real
 * button with an accessible label + `aria-pressed`.
 */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label={ui.langToggle.groupLabel[lang]}
      className={`inline-flex items-center gap-1 border border-line bg-surface-card/70 p-1 ${className}`}
    >
      {LANGUAGES.map((code: Language) => {
        const { Flag, label } = OPTIONS[code];
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={label[lang]}
            className={`flex items-center justify-center border transition-all duration-200 ${
              active
                ? "border-accent opacity-100"
                : "border-transparent opacity-45 grayscale hover:opacity-90 hover:grayscale-0"
            }`}
          >
            <Flag className="h-[18px] w-7" />
          </button>
        );
      })}
    </div>
  );
}
