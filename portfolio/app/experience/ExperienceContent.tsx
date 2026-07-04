"use client";

import { experience } from "@/data/experience";
import { PageHeader } from "@/components/shared/PageHeader";
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
    </div>
  );
}
