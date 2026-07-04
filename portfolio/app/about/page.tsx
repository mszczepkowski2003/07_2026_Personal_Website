import type { Metadata } from "next";
import { profile, skillGroups } from "@/data/profile";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { SkillTag } from "@/components/shared/SkillTag";

export const metadata: Metadata = {
  title: "About",
  description: profile.bio,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-content px-6 pb-32 pt-32 md:pt-40">
      <PageHeader eyebrow="About Me" title="The person behind the models" />

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr] md:gap-16">
        {/* Profile photo placeholder */}
        <SectionReveal>
          <div className="flex aspect-[3/4] items-center justify-center border border-line bg-surface/40">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ink-faint">
              Photo
            </span>
          </div>
        </SectionReveal>

        {/* Bio + mission */}
        <SectionReveal delay={0.1}>
          <div className="space-y-8">
            <div>
              <h2 className="eyebrow mb-4">Bio</h2>
              <p className="text-lg font-extralight leading-relaxed text-ink-soft">
                {profile.bio}
              </p>
            </div>
            <div>
              <h2 className="eyebrow mb-4">Mission</h2>
              <p className="text-lg font-extralight leading-relaxed text-ink-soft">
                {profile.mission}
              </p>
            </div>
            <div>
              <h2 className="eyebrow mb-4">What drives me</h2>
              <p className="text-base font-extralight leading-relaxed text-ink-muted">
                {profile.drives}
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* Skills */}
      <SectionReveal className="mt-24">
        <h2 className="eyebrow mb-10">Skills &amp; Tools</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-4 font-heading text-sm font-medium uppercase tracking-wide text-ink-muted">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </div>
  );
}
