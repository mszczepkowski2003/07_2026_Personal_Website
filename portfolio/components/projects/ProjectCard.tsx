"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { fadeUp } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ui } from "@/lib/i18n/ui";

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLanguage();

  return (
    <motion.div variants={fadeUp}>
      <Link
        href={`/projects/${project.slug}`}
        className="group relative flex h-full flex-col justify-between border border-line bg-surface-card/50 p-7 transition-colors duration-200 hover:border-accent/50 hover:bg-surface-hover/50"
      >
        {/* Accent edge that sweeps in on hover */}
        <span className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-300 ease-out-expo group-hover:w-full" />

        <div>
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink-faint">
              {project.mainLanguage
                ? ui.projectLanguage[project.mainLanguage][lang]
                : ui.projectDetail.fallbackLabel[lang]}
            </span>
            {project.invented && (
              <span className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-faint/60">
                {ui.projectCard.concept[lang]}
              </span>
            )}
          </div>

          <h3 className="font-heading text-xl font-medium leading-tight text-ink transition-colors group-hover:text-accent">
            {project.title[lang]}
          </h3>

          <p className="mt-3 text-sm font-extralight leading-relaxed text-ink-muted">
            {project.oneLiner[lang]}
          </p>
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="border border-line px-2 py-0.5 font-mono text-[0.65rem] text-ink-faint"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 font-mono text-[0.65rem] text-ink-faint">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-muted transition-colors group-hover:text-accent">
            {ui.projectCard.view[lang]}
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
