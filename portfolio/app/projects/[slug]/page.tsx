import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { DemoSlot } from "@/components/projects/DemoSlot";
import { SkillTag } from "@/components/shared/SkillTag";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { StatGrid } from "@/components/shared/StatGrid";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.oneLiner,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 pb-32 pt-32 md:pt-40">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-accent"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>
        Back to Projects
      </Link>

      {/* Title + hero */}
      <SectionReveal className="mt-10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink-faint">
            {project.mainLanguage ?? "Project"}
          </span>
          {project.invented && (
            <span className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-faint/60">
              · concept project
            </span>
          )}
        </div>
        <h1 className="mt-4 font-heading font-semibold leading-[0.95] tracking-tight text-ink text-[clamp(2.5rem,6.5vw,4.5rem)]">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg font-extralight leading-relaxed text-ink-muted">
          {project.oneLiner}
        </p>

        {/* Hero visual placeholder */}
        <div className="mt-10 flex aspect-[16/7] items-center justify-center border border-line bg-surface/40">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ink-faint">
            Project visual
          </span>
        </div>
      </SectionReveal>

      {/* Headline metrics */}
      {project.stats && project.stats.length > 0 && (
        <div className="mt-16 border-t border-line/60 pt-12">
          <StatGrid stats={project.stats} />
        </div>
      )}

      {/* Overview */}
      <SectionReveal className="mt-20">
        <h2 className="eyebrow mb-5">Overview</h2>
        <p className="max-w-2xl text-lg font-extralight leading-relaxed text-ink-soft">
          {project.overview}
        </p>
      </SectionReveal>

      {/* Approach */}
      <SectionReveal className="mt-20">
        <h2 className="eyebrow mb-8">Approach &amp; Methodology</h2>
        <div className="space-y-10">
          {project.approach.map((block) => (
            <div key={block.heading}>
              <h3 className="font-heading text-xl font-medium text-ink">
                {block.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {block.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm font-extralight leading-relaxed text-ink-muted"
                  >
                    <span className="mt-2 h-px w-4 shrink-0 bg-accent/60" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* Tech stack */}
      <SectionReveal className="mt-20">
        <h2 className="eyebrow mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-2.5">
          {project.techStack.map((tech) => (
            <SkillTag key={tech}>{tech}</SkillTag>
          ))}
        </div>
      </SectionReveal>

      {/* Results */}
      {project.results.length > 0 && (
        <SectionReveal className="mt-20">
          <h2 className="eyebrow mb-6">Key Results</h2>
          <ul className="space-y-4">
            {project.results.map((result, i) => (
              <li
                key={i}
                className="flex gap-4 border-l border-accent/40 pl-5 text-base font-extralight leading-relaxed text-ink-soft"
              >
                {result}
              </li>
            ))}
          </ul>
        </SectionReveal>
      )}

      {/* Demo slot */}
      <SectionReveal className="mt-20">
        <DemoSlot demo={project.demo} title={project.title} />
      </SectionReveal>

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
                {link.label}
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
          Back to Projects
        </Link>
      </div>
    </article>
  );
}
