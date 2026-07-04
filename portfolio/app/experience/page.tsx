import type { Metadata } from "next";
import { experience } from "@/data/experience";
import { PageHeader } from "@/components/shared/PageHeader";
import { Timeline, type TimelineItem } from "@/components/shared/Timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience in data science and actuarial pricing.",
};

export default function ExperiencePage() {
  const items: TimelineItem[] = experience.map((e) => ({
    title: e.role,
    meta: e.company,
    period: e.period,
    description: e.description,
    invented: e.invented,
  }));

  return (
    <div className="mx-auto max-w-content px-6 pb-32 pt-32 md:pt-40">
      <PageHeader
        eyebrow="Career"
        title="Experience"
        intro="Where I've applied data science in practice — actuarial pricing, consulting, and academic research."
      />
      <div className="mt-16 max-w-3xl">
        <Timeline items={items} />
      </div>
    </div>
  );
}
