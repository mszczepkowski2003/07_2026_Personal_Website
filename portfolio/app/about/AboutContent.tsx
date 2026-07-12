"use client";

import Image from "next/image";
import { interests, profile, skillGroups } from "@/data/profile";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { SkillTag } from "@/components/shared/SkillTag";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ui } from "@/lib/i18n/ui";

export function AboutContent() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-content px-6 pb-32 pt-32 md:pt-40">
      <PageHeader eyebrow={ui.about.eyebrow[lang]} title={ui.about.title[lang]} />

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr] md:gap-16">
        {/* Profile photo — swap the file at /public/profile.jpg to change it. */}
        <SectionReveal>
          <div className="relative aspect-[3/4] overflow-hidden border border-line bg-surface/40">
            <Image
              src="/profile.jpg"
              alt={profile.name}
              fill
              sizes="(max-width: 768px) 100vw, 280px"
              className="object-cover object-center"
              priority
            />
          </div>
        </SectionReveal>

        {/* Bio + mission */}
        <SectionReveal delay={0.1}>
          <div className="space-y-8">
            <div>
              <h2 className="eyebrow mb-4">{ui.about.bio[lang]}</h2>
              <p className="text-lg font-extralight leading-relaxed text-ink-soft">
                {profile.bio[lang]}
              </p>
            </div>
            <div>
              <h2 className="eyebrow mb-4">{ui.about.mission[lang]}</h2>
              <p className="text-lg font-extralight leading-relaxed text-ink-soft">
                {profile.mission[lang]}
              </p>
            </div>
            <div>
              <h2 className="eyebrow mb-4">{ui.about.drives[lang]}</h2>
              <p className="text-base font-extralight leading-relaxed text-ink-muted">
                {profile.drives[lang]}
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* Skills */}
      <SectionReveal className="mt-24">
        <h2 className="eyebrow mb-10">{ui.about.skills[lang]}</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label.en}>
              <h3 className="mb-4 font-heading text-sm font-medium uppercase tracking-wide text-ink-muted">
                {group.label[lang]}
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

      {/* Interests */}
      <SectionReveal className="mt-20">
        <h2 className="eyebrow mb-6">{ui.about.interests[lang]}</h2>
        <div className="flex flex-wrap gap-2.5">
          {interests.map((interest) => (
            <SkillTag key={interest.en}>{interest[lang]}</SkillTag>
          ))}
        </div>
      </SectionReveal>
    </div>
  );
}
