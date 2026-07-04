/**
 * Faint blueprint grid behind all content. Fixed, non-interactive, very low
 * opacity so it gives dark space structure without competing with text.
 * Content sits above it via the layout's relative/z-10 main wrapper.
 */
export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.022) 1px, transparent 1px)",
        backgroundSize: "88px 88px",
        // Fade the grid out toward the edges so it never feels boxed-in.
        maskImage:
          "radial-gradient(ellipse 120% 90% at 50% 40%, black 55%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 120% 90% at 50% 40%, black 55%, transparent 100%)",
      }}
    />
  );
}
