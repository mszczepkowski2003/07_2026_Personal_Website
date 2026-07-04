"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";

export interface TimelineItem {
  title: string;
  meta: string;
  period: string;
  description?: string;
  highlight?: boolean;
  invented?: boolean;
  /** Subtle distinction tied to this entry (e.g. a thesis award). */
  award?: { label: string; meta: string; url?: string };
}

export function Timeline({
  items,
  placeholderLabel = "* placeholder entry",
}: {
  items: TimelineItem[];
  placeholderLabel?: string;
}) {
  return (
    <motion.ol
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className="relative border-l border-line"
    >
      {items.map((item, i) => (
        <motion.li key={i} variants={fadeUp} className="relative pl-8 pb-12 last:pb-0">
          {/* Node */}
          <span
            className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border ${
              item.highlight
                ? "border-accent bg-accent"
                : "border-ink-faint bg-base"
            }`}
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-heading text-lg font-medium text-ink">
              {item.title}
            </h3>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
              {item.period}
            </span>
          </div>
          <p className="mt-1 text-sm text-ink-muted">{item.meta}</p>
          {item.description && (
            <p className="mt-3 max-w-2xl text-sm font-extralight leading-relaxed text-ink-soft">
              {item.description}
            </p>
          )}
          {item.award && (
            <div className="mt-4 flex max-w-2xl gap-3 border-l border-accent/40 pl-4">
              <div>
                <p className="text-sm font-extralight leading-relaxed text-ink-soft">
                  {item.award.label}
                </p>
                {item.award.url ? (
                  <a
                    href={item.award.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-3 inline-flex items-center gap-2 border border-accent/40 px-3.5 py-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent transition-colors hover:border-accent hover:bg-accent/10"
                  >
                    {item.award.meta}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                ) : (
                  <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-faint">
                    {item.award.meta}
                  </p>
                )}
              </div>
            </div>
          )}
          {item.invented && (
            <span className="mt-3 inline-block font-mono text-[0.6rem] uppercase tracking-widest text-ink-faint/70">
              {placeholderLabel}
            </span>
          )}
        </motion.li>
      ))}
    </motion.ol>
  );
}
