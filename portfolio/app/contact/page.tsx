import type { Metadata } from "next";
import { profile, socials } from "@/data/profile";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionReveal } from "@/components/shared/SectionReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content px-6 pb-32 pt-32 md:pt-40">
      <PageHeader
        eyebrow="Say Hello"
        title="Contact"
        intro="Open to data science roles, collaborations, and interesting problems. The fastest way to reach me is below."
      />

      <SectionReveal className="mt-16">
        <ul className="divide-y divide-line border-y border-line">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.url}
                target={s.url.startsWith("http") ? "_blank" : undefined}
                rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-6 py-7 transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ink-faint group-hover:text-accent">
                    {s.label}
                  </span>
                  <span className="font-heading text-xl font-medium text-ink transition-colors group-hover:text-accent md:text-2xl">
                    {s.handle}
                  </span>
                </div>
                <span className="font-mono text-lg text-ink-faint transition-all duration-200 ease-out-expo group-hover:translate-x-1 group-hover:text-accent">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </SectionReveal>
    </div>
  );
}
