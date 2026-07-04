export interface NavLink {
  label: string;
  href: string;
  teaser: string;
}

// The four landing nav-cards. Contact is intentionally NOT a card —
// it lives in the navbar + footer only.
export const navCards: NavLink[] = [
  {
    label: "Projects",
    href: "/projects",
    teaser: "End-to-end ML, from raw data to deployed APIs.",
  },
  {
    label: "About",
    href: "/about",
    teaser: "The person behind the models — and what drives the work.",
  },
  {
    label: "Experience",
    href: "/experience",
    teaser: "Actuarial pricing, consulting, and research.",
  },
  {
    label: "Education",
    href: "/education",
    teaser: "Computer Science & Econometrics, plus an award or two.",
  },
];

// Full top-nav set (adds Contact).
export const navLinks: { label: string; href: string }[] = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];
