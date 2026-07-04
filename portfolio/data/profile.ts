import type { SocialLink } from "@/lib/types";

export const profile = {
  name: "Michał Szczepkowski",
  role: "Data Scientist",
  email: "mszczepkowski2003@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/michał-szczepkowski-6849362b8/",
  github: "https://github.com/mszczepkowski2003",

  // Real bio, extracted from the old site.
  bio: `Data Scientist with over a year of experience in actuarial pricing modelling. Focused on transforming complex datasets into efficient, automated solutions. I am driven by a practical curiosity to understand the 'why' behind the data, bridging the gap between statistical research and production-ready code.`,

  // Invented augmentation — personal mission / "what drives me".
  mission: `I build models that survive contact with production. The interesting work lives in the gap between a clean notebook result and a system someone can actually depend on — and that gap is where I like to spend my time.`,

  drives: `Curiosity is the engine. I treat every project as a question rather than a deliverable: why does this pattern hold, where does it break, and what would it take to ship the answer? That mindset keeps me learning faster than any single role could.`,
};

// Skill groups for the About page (derived from the real tech stack).
export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "Languages",
    skills: ["Python", "R", "SQL"],
  },
  {
    label: "ML & Modelling",
    skills: [
      "Scikit-Learn",
      "TensorFlow",
      "PyTorch",
      "XGBoost",
      "Optuna",
    ],
  },
  {
    label: "Data & Infra",
    skills: ["PostgreSQL", "Pandas", "Docker", "FastAPI", "Git"],
  },
  {
    label: "Reporting",
    skills: ["Tableau", "Plotly", "Matplotlib", "Quarto"],
  },
];

// Flat highlighted stack for the landing / hero contexts.
export const coreStack = ["Python", "R", "PostgreSQL"];

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    handle: "Michał Szczepkowski",
    url: "https://www.linkedin.com/in/michał-szczepkowski-6849362b8/",
  },
  {
    label: "GitHub",
    handle: "@mszczepkowski2003",
    url: "https://github.com/mszczepkowski2003",
  },
  {
    label: "Email",
    handle: "mszczepkowski2003@gmail.com",
    url: "mailto:mszczepkowski2003@gmail.com",
  },
];

export const heroQuote = {
  text: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
  author: "Ernest Hemingway",
};
