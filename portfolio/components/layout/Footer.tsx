import Link from "next/link";
import { profile, socials } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-base">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-heading text-lg font-semibold tracking-tight text-ink transition-colors hover:text-accent"
            >
              {profile.name}
            </Link>
            <p className="mt-3 text-sm font-extralight leading-relaxed text-ink-muted">
              {profile.role} — turning complex datasets into automated,
              production-ready solutions.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Get in touch</p>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target={s.url.startsWith("http") ? "_blank" : undefined}
                    rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-baseline gap-3 text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-ink-faint group-hover:text-accent">
                      {s.label}
                    </span>
                    <span className="font-light">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line/60 pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <Link href="/contact" className="transition-colors hover:text-accent">
            Contact →
          </Link>
        </div>
      </div>
    </footer>
  );
}
