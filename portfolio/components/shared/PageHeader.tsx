import { SectionReveal } from "@/components/shared/SectionReveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <SectionReveal>
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-8 bg-accent" />
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h1 className="font-heading font-semibold leading-[0.92] tracking-tight text-ink text-[clamp(2.75rem,8vw,6rem)]">
        {title}
      </h1>
      {intro && (
        <p className="mt-7 max-w-2xl text-balance text-lg font-extralight leading-relaxed text-ink-muted">
          {intro}
        </p>
      )}
    </SectionReveal>
  );
}
