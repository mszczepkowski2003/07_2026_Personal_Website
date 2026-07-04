export function SkillTag({
  children,
  highlight = false,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center border px-3 py-1 font-mono text-xs tracking-wide transition-colors ${
        highlight
          ? "border-accent/40 text-accent"
          : "border-line bg-surface-card/60 text-ink-muted hover:border-ink-faint hover:text-ink-soft"
      }`}
    >
      {children}
    </span>
  );
}
