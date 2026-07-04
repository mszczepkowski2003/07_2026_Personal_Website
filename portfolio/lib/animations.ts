import type { Variants } from "framer-motion";

// Shared easing — precise, ease-out biased (no bounce).
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Reuse this for scroll-triggered reveals so they fire once.
export const VIEWPORT_ONCE = { once: true, amount: 0.3 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE_OUT } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// Per-character "materialize": blur → sharp as each glyph resolves.
export const materializeChar: Variants = {
  hidden: { opacity: 0, y: "0.3em", filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE_OUT },
  },
};

export const materializeContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.15 },
  },
};
