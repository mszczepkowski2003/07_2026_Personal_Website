"use client";

import { courses, degrees } from "@/data/education";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { Timeline, type TimelineItem } from "@/components/shared/Timeline";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ui } from "@/lib/i18n/ui";

export function EducationContent() {
  const { lang } = useLanguage();

  const degreeItems: TimelineItem[] = degrees.map((e) => ({
    title: e.title[lang],
    meta: e.institution[lang],
    period: e.period,
    description: e.detail?.[lang],
    highlight: e.highlight,
    award: e.award
      ? { label: e.award.label[lang], meta: e.award.meta[lang], url: e.award.url }
      : undefined,
  }));

  return (
    <div className="mx-auto max-w-content px-6 pb-32 pt-32 md:pt-40">
      <PageHeader
        eyebrow={ui.education.eyebrow[lang]}
        title={ui.education.title[lang]}
        intro={ui.education.intro[lang]}
      />

      {/* University degrees */}
      <SectionReveal className="mt-16">
        <h2 className="eyebrow mb-8">{ui.education.university[lang]}</h2>
        <div className="max-w-3xl">
          <Timeline items={degreeItems} />
        </div>
      </SectionReveal>

      {/* Courses & certifications */}
      <SectionReveal className="mt-20">
        <h2 className="eyebrow mb-8">{ui.education.courses[lang]}</h2>
        <div className="grid max-w-3xl grid-cols-1 gap-3">
          {courses.map((course) => (
            <div
              key={course.title.en}
              className="flex items-start justify-between gap-4 border border-line bg-surface-card/50 p-6"
            >
              <div>
                <h3 className="font-heading text-base font-medium text-ink">
                  {course.title[lang]}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {course.institution[lang]}
                </p>
                {course.certificateUrl && (
                  <a
                    href={course.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex items-center gap-2 border border-accent/40 px-3.5 py-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent transition-colors hover:border-accent hover:bg-accent/10"
                  >
                    {ui.education.certificate[lang]}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                )}
                {course.certificateOnLinkedIn && (
                  <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-faint">
                    {ui.education.certificateLinkedin[lang]}
                  </p>
                )}
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                {course.period}
              </span>
            </div>
          ))}
        </div>
      </SectionReveal>
    </div>
  );
}
