"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ui } from "@/lib/i18n/ui";

export default function NotFound() {
  const { lang } = useLanguage();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-6">{ui.notFound.code[lang]}</p>
      <h1 className="font-heading text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
        {ui.notFound.title[lang]}
      </h1>
      <p className="mt-5 max-w-md text-base font-extralight leading-relaxed text-ink-muted">
        {ui.notFound.body[lang]}
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:border-accent/50 hover:text-accent"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>
        {ui.notFound.back[lang]}
      </Link>
    </div>
  );
}
