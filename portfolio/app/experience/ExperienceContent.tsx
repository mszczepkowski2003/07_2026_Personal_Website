"use client";

import Link from "next/link";
import { experience } from "@/data/experience";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { Timeline, type TimelineItem } from "@/components/shared/Timeline";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ui } from "@/lib/i18n/ui";

export function ExperienceContent() {
  const { lang } = useLanguage();

  const items: TimelineItem[] = experience.map((e) => ({
    title: e.role[lang],
    meta: e.company[lang],
    period: e.period[lang],
    description: e.description[lang],
    invented: e.invented,
  }));

  return (
    <div className="mx-auto max-w-content px-6 pb-32 pt-32 md:pt-40">
      <PageHeader
        eyebrow={ui.experience.eyebrow[lang]}
        title={ui.experience.title[lang]}
        intro={ui.experience.intro[lang]}
      />
      <div className="mt-16 max-w-3xl">
        <Timeline items={items} placeholderLabel={ui.experience.placeholder[lang]} />
      </div>

      {/* Where the skills come from — split into their practical (Projects)
          and theoretical (Education) sources */}
      <SectionReveal className="mt-12 max-w-3xl border-t border-line/60 pt-8">
        <p className="eyebrow mb-5">{ui.experience.skillsSource[lang]}</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:border-accent/50 hover:text-accent"
          >
            {ui.experience.practical[lang]}
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/education"
            className="group inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:border-accent/50 hover:text-accent"
          >
            {ui.experience.theoretical[lang]}
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </SectionReveal>
    </div>
  );
}
