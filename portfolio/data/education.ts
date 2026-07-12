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
      url: "https://www.gdansk.pte.pl/aktualnosci/laureat-xxii-konkursu-prac-licencjackich",
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
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/specialization/UBF1SQHXBZZL",
  },
  {
    title: {
      en: "Predictive Modelling in Actuarial Science with Neural Networks",
      pl: "Predictive Modelling in Actuarial Science with Neural Networks",
    },
    institution: {
      en: "Polish Society of Actuaries",
      pl: "Polskie Stowarzyszenie Aktuariuszy",
    },
    period: "2025",
    certificateOnLinkedIn: true,
  },
  {
    title: {
      en: "Design Thinking",
      pl: "Design Thinking",
    },
    institution: { en: "Infiro", pl: "Infiro" },
    period: "2025",
    certificateOnLinkedIn: true,
  },
  {
    title: {
      en: "Python for Machine Learning & Data Science",
      pl: "Python for Machine Learning & Data Science",
    },
    institution: { en: "Udemy", pl: "Udemy" },
    period: "2024",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-50b5b564-dbd0-4694-a6f5-7ea4bdda7f42/",
  },
];
