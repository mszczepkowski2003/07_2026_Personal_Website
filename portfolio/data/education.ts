import type { EducationEntry } from "@/lib/types";

// University degrees. The B.Sc. carries its thesis award as a subtle
// annotation rather than a separate entry, since the award was won for it.
export const degrees: EducationEntry[] = [
  {
    title: "M.Sc. — Computer Science & Econometrics",
    institution: "University of Gdańsk",
    period: "2025 — 2027",
    detail: "Big Data specialization.",
    highlight: true,
  },
  {
    title: "B.Sc. — Computer Science & Econometrics",
    institution: "University of Gdańsk",
    period: "2022 — 2025",
    detail: "Methods of Data Analysis specialization.",
    award: {
      label:
        "🏆 Thesis awarded the Main Award — on automating real estate appraisal with Random Forest.",
      meta: "Polish Economic Society · 2025",
    },
  },
];

// Courses & certifications — kept separate from formal degrees.
export const courses: EducationEntry[] = [
  {
    title: "Deep Learning Specialization",
    institution: "Coursera",
    period: "2025",
  },
];
