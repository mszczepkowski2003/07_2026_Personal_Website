import type { ProjectDemo } from "@/lib/types";

/**
 * Future-proof demo slot. Renders a styled placeholder today; when `status`
 * flips to "live" it mounts the real embed (iframe now, component later) with
 * NO template change required — purely data-driven from data/projects.ts.
 */
export function DemoSlot({ demo, title }: { demo: ProjectDemo; title: string }) {
  if (demo.status === "live" && demo.kind === "iframe" && demo.endpoint) {
    return (
      <div className="overflow-hidden border border-accent/40">
        <iframe
          src={demo.endpoint}
          title={`${title} — interactive demo`}
          className="h-[600px] w-full"
          loading="lazy"
        />
      </div>
    );
  }

  // Placeholder state (coming-soon, or live component not yet wired).
  return (
    <div className="relative flex min-h-[260px] flex-col items-center justify-center gap-4 border border-dashed border-accent/40 bg-surface/40 p-10 text-center">
      <span className="eyebrow text-accent">Demo</span>
      <p className="max-w-md text-sm font-extralight leading-relaxed text-ink-muted">
        {demo.note}
      </p>
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ink-faint">
        Interactive demo coming soon
      </span>
    </div>
  );
}
