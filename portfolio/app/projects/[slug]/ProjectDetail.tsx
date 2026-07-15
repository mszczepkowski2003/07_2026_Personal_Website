"use client";

import Link from "next/link";
import type { Project } from "@/lib/types";
import { DemoSlot } from "@/components/projects/DemoSlot";
import { SkillTag } from "@/components/shared/SkillTag";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { StatGrid } from "@/components/shared/StatGrid";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ui } from "@/lib/i18n/ui";

export function ProjectDetail({ project }: { project: Project }) {
  const { lang } = useLanguage();

  return (
    <article className="mx-auto max-w-4xl px-6 pb-32 pt-32 md:pt-40">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-accent"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>
        {ui.projectDetail.back[lang]}
      </Link>

      {/* Title + hero */}
      <SectionReveal className="mt-10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink-faint">
            {project.mainLanguage
              ? ui.projectLanguage[project.mainLanguage][lang]
              : ui.projectDetail.fallbackLabel[lang]}
          </span>
          {project.invented && (
            <span className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-faint/60">
              {ui.projectDetail.concept[lang]}
            </span>
          )}
        </div>
        <h1 className="mt-4 font-heading font-semibold leading-[0.95] tracking-tight text-ink text-[clamp(2.5rem,6.5vw,4.5rem)]">
          {project.title[lang]}
        </h1>
        <p className="mt-5 max-w-2xl text-lg font-extralight leading-relaxed text-ink-muted">
          {project.oneLiner[lang]}
        </p>
      </SectionReveal>

      {/* Headline metrics */}
      {project.stats && project.stats.length > 0 && (
        <div className="mt-16 border-t border-line/60 pt-12">
          <StatGrid stats={project.stats} />
        </div>
      )}

      {/* Overview */}
      <SectionReveal className="mt-20">
        <h2 className="eyebrow mb-5">{ui.projectDetail.overview[lang]}</h2>
        <p className="max-w-2xl text-lg font-extralight leading-relaxed text-ink-soft">
          {project.overview[lang]}
        </p>
      </SectionReveal>

      {/* Approach */}
      <SectionReveal className="mt-20">
        <h2 className="eyebrow mb-8">{ui.projectDetail.approach[lang]}</h2>
        <div className="space-y-10">
          {project.approach.map((block) => (
            <div key={block.heading.en}>
              <h3 className="font-heading text-xl font-medium text-ink">
                {block.heading[lang]}
              </h3>
              <ul className="mt-4 space-y-3">
                {block.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm font-extralight leading-relaxed text-ink-muted"
                  >
                    <span className="mt-2 h-px w-4 shrink-0 bg-accent/60" />
                    <span>{point[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* Tech stack */}
      <SectionReveal className="mt-20">
        <h2 className="eyebrow mb-6">{ui.projectDetail.techStack[lang]}</h2>
        <div className="flex flex-wrap gap-2.5">
          {project.techStack.map((tech) => (
            <SkillTag key={tech}>{tech}</SkillTag>
          ))}
        </div>
      </SectionReveal>

      {/* Results */}
      {project.results.length > 0 && (
        <SectionReveal className="mt-20">
          <h2 className="eyebrow mb-6">{ui.projectDetail.results[lang]}</h2>
          <ul className="space-y-4">
            {project.results.map((result, i) => (
              <li
                key={i}
                className="flex gap-4 border-l border-accent/40 pl-5 text-base font-extralight leading-relaxed text-ink-soft"
              >
                {result[lang]}
              </li>
            ))}
          </ul>
        </SectionReveal>
      )}

      {/* Demo slot — only rendered once a demo is actually live. Non-live
          demos show nothing (no "coming soon" placeholder). */}
      {project.demo.status === "live" && (
        <SectionReveal className="mt-20">
          <DemoSlot demo={project.demo} title={project.title[lang]} />
        </SectionReveal>
      )}

      {/* Links */}
      {project.links.length > 0 && (
        <SectionReveal className="mt-16">
          <div className="flex flex-wrap gap-4">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:border-accent/50 hover:text-accent"
              >
                {link.label[lang]}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </SectionReveal>
      )}

      {/* Footer nav */}
      <div className="mt-24 border-t border-line/60 pt-10">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-accent"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          {ui.projectDetail.back[lang]}
        </Link>
      </div>
    </article>
  );
}
