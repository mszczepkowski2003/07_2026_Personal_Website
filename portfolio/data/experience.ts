import type { ExperienceEntry } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    role: {
      en: "Junior Data Analyst",
      pl: "Młodszy Analityk Danych",
    },
    company: { en: "Modelarium sp. z o.o.", pl: "Modelarium sp. z o.o." },
    period: { en: "March 2025 — Present", pl: "Marzec 2025 — obecnie" },
    description: {
      en: "Consulting company specialising in actuarial pricing modelling. Transform complex insurance datasets into automated, production-ready pricing solutions.",
      pl: "Firma konsultingowa specjalizująca się w modelowaniu taryf aktuarialnych. Przekształcam złożone zbiory danych ubezpieczeniowych w zautomatyzowane, gotowe do produkcji rozwiązania taryfowe.",
    },
  },
  {
    // Invented placeholder to give the timeline visual rhythm.
    role: {
      en: "Research Assistant (Data Analysis)",
      pl: "Asystent naukowy (analiza danych)",
    },
    company: { en: "University of Gdańsk", pl: "Uniwersytet Gdański" },
    period: { en: "2024 — 2025", pl: "2024 — 2025" },
    description: {
      en: "Supported econometric research projects: data cleaning, statistical modelling, and reproducible reporting pipelines alongside the Methods of Data Analysis programme.",
      pl: "Wspierałem projekty badawcze z ekonometrii: czyszczenie danych, modelowanie statystyczne i powtarzalne procesy raportowania w ramach programu Metody Analizy Danych.",
    },
    invented: true,
  },
];
