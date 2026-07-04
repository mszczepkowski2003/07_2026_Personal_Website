import type { Metadata } from "next";
import { courses, degrees } from "@/data/education";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { Timeline, type TimelineItem } from "@/components/shared/Timeline";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Computer Science & Econometrics at the University of Gdańsk, plus courses and certifications.",
};

export default function EducationPage() {
  const degreeItems: TimelineItem[] = degrees.map((e) => ({
    title: e.title,
    meta: e.institution,
    period: e.period,
    description: e.detail,
    highlight: e.highlight,
    award: e.award,
  }));

  return (
    <div className="mx-auto max-w-content px-6 pb-32 pt-32 md:pt-40">
      <PageHeader
        eyebrow="Credentials"
        title="Education"
        intro="Computer Science & Econometrics at the University of Gdańsk — plus continued learning beyond the degree."
      />

      {/* University degrees */}
      <SectionReveal className="mt-16">
        <h2 className="eyebrow mb-8">University</h2>
        <div className="max-w-3xl">
          <Timeline items={degreeItems} />
        </div>
      </SectionReveal>

      {/* Courses & certifications */}
      <SectionReveal className="mt-20">
        <h2 className="eyebrow mb-8">Courses &amp; Certifications</h2>
        <div className="grid max-w-3xl grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.title}
              className="flex items-start justify-between gap-4 bg-surface-card/50 p-6"
            >
              <div>
                <h3 className="font-heading text-base font-medium text-ink">
                  {course.title}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {course.institution}
                </p>
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
