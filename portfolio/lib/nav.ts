import type { Localized } from "@/lib/i18n/config";

export interface NavCardItem {
  label: Localized;
  href: string;
  teaser: Localized;
}

// The four landing nav-cards. Contact is intentionally NOT a card —
// it lives in the navbar + footer only.
// Order here drives the 01–04 numbering on the landing page.
export const navCards: NavCardItem[] = [
  {
    href: "/about",
    label: { en: "About", pl: "O mnie" },
    teaser: {
      en: "The person behind the models — and what drives the work.",
      pl: "Człowiek stojący za modelami — i co go napędza.",
    },
  },
  {
    href: "/experience",
    label: { en: "Experience", pl: "Doświadczenie" },
    teaser: {
      en: "Actuarial pricing, consulting, and research.",
      pl: "Modelowanie taryf, konsulting i badania.",
    },
  },
  {
    href: "/education",
    label: { en: "Education", pl: "Edukacja" },
    teaser: {
      en: "Computer Science & Econometrics, plus an award or two.",
      pl: "Informatyka i ekonometria — z nagrodą czy dwiema.",
    },
  },
  {
    href: "/projects",
    label: { en: "Projects", pl: "Projekty" },
    teaser: {
      en: "End-to-end ML, from raw data to deployed APIs.",
      pl: "Kompleksowy ML — od surowych danych po wdrożone API.",
    },
  },
];

export interface NavLinkItem {
  label: Localized;
  href: string;
}

// Full top-nav set (adds Contact). Mirrors the landing-card order.
export const navLinks: NavLinkItem[] = [
  { href: "/about", label: { en: "About", pl: "O mnie" } },
  { href: "/experience", label: { en: "Experience", pl: "Doświadczenie" } },
  { href: "/education", label: { en: "Education", pl: "Edukacja" } },
  { href: "/projects", label: { en: "Projects", pl: "Projekty" } },
  { href: "/contact", label: { en: "Contact", pl: "Kontakt" } },
];
