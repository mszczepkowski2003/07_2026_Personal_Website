"use client";

import { projects } from "@/data/projects";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ui } from "@/lib/i18n/ui";

export function ProjectsContent() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-content px-6 pb-32 pt-32 md:pt-40">
      <PageHeader
        eyebrow={ui.projects.eyebrow[lang]}
        title={ui.projects.title[lang]}
        intro={ui.projects.intro[lang]}
      />

      <div className="mt-16">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
