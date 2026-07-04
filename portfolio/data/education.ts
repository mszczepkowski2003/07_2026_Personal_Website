import type { EducationEntry } from "@/lib/types";

// University degrees. The B.Sc. carries its thesis award as a subtle
// annotation rather than a separate entry, since the award was won for it.
export const degrees: EducationEntry[] = [
  {
    title: {
      en: "M.Sc. — Computer Science & Econometrics",
      pl: "Mgr — Informatyka i Ekonometria",
    },
    institution: { en: "University of Gdańsk", pl: "Uniwersytet Gdański" },
    period: "2025 — 2027",
    detail: { en: "Big Data specialization.", pl: "Specjalizacja Big Data." },
    highlight: true,
  },
  {
    title: {
      en: "B.Sc. — Computer Science & Econometrics",
      pl: "Lic. — Informatyka i Ekonometria",
    },
    institution: { en: "University of Gdańsk", pl: "Uniwersytet Gdański" },
    period: "2022 — 2025",
    detail: {
      en: "Methods of Data Analysis specialization.",
      pl: "Specjalizacja Metody Analizy Danych.",
    },
    award: {
      label: {
        en: "🏆 Thesis awarded the Main Award — on automating real estate appraisal with Random Forest.",
        pl: "🏆 Praca nagrodzona Nagrodą Główną — za automatyzację wyceny nieruchomości z użyciem Random Forest.",
      },
      meta: {
        en: "Polish Economic Society · 2025",
        pl: "Polskie Towarzystwo Ekonomiczne · 2025",
      },
    },
  },
];

// Courses & certifications — kept separate from formal degrees.
export const courses: EducationEntry[] = [
  {
    title: {
      en: "Deep Learning Specialization",
      pl: "Specjalizacja Deep Learning",
    },
    institution: { en: "Coursera", pl: "Coursera" },
    period: "2025",
  },
];
