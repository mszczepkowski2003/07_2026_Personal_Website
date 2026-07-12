import type { Localized } from "@/lib/i18n/config";
import type { SocialLink } from "@/lib/types";

export const profile = {
  name: "Michał Szczepkowski",
  role: "Data Scientist",
  email: "mszczepkowski.business@gmail.com",
  linkedin: "https://www.linkedin.com/in/michał-szczepkowski-6849362b8/",
  github: "https://github.com/mszczepkowski2003",

  // Real bio, extracted from the old site.
  bio: {
    en: `Data Scientist with over a year of experience in actuarial pricing modelling. Focused on transforming complex datasets into efficient, automated solutions. I am driven by a practical curiosity to understand the 'why' behind the data, bridging the gap between statistical research and production-ready code.`,
    pl: `Data Scientist z ponad rocznym doświadczeniem w modelowaniu aktuarialnym. Skupiony na przekształcaniu złożonych zbiorów danych w wydajne, zautomatyzowane rozwiązania. Napędza mnie praktyczna ciekawość, by zrozumieć „dlaczego” kryjące się za danymi — łącząc badania statystyczne z kodem gotowym do produkcji.`,
  } satisfies Localized,

  // Invented augmentation — personal mission / "what drives me".
  mission: {
    en: `I bridge the gap between experimental code and reliable production systems. I focus on building ML infrastructure and models that don't just work in a notebook, but perform predictably in the real world.`,
    pl: `Łączę świat eksperymentalnego kodu z niezawodnymi systemami produkcyjnymi. Skupiam się na budowaniu modeli i infrastruktury ML, które nie tylko działają w notebookach, ale działają przewidywalnie w realnych warunkach.`,
  } satisfies Localized,

  drives: {
    en: `Curiosity is what drives my growth. I treat every project as a challenge to dive into understanding its unique constraints and finding the optimal solution. This approach is why I genuinely enjoy my work. Every new problem is an opportunity to sharpen my analytical and engineering skills.`,
    pl: `Ciekawość to paliwo, które napędza mój rozwój. Każdy projekt traktuję jako wyzwanie, w które chcę się głęboko wgryźć oraz zrozumieć jego specyfikę i odnaleźć optymalne rozwiązania. To podejście sprawia, że czerpię ogromną satysfakcję z pracy, a każde nowe zadanie staje się okazją do rozwinięcia mojego warsztatu analitycznego i inżynieryjnego.`,
  } satisfies Localized,
};

// Skill groups for the About page (derived from the real tech stack).
export const skillGroups: { label: Localized; skills: string[] }[] = [
  {
    label: { en: "Languages", pl: "Języki" },
    skills: ["Python", "R", "SQL"],
  },
  {
    label: { en: "ML & Modelling", pl: "ML i modelowanie" },
    skills: ["Scikit-Learn", "TensorFlow", "PyTorch", "XGBoost", "Optuna"],
  },
  {
    label: { en: "Data & Infra", pl: "Dane i infrastruktura" },
    skills: ["PostgreSQL", "Pandas", "Docker", "FastAPI", "Git"],
  },
  {
    label: { en: "Reporting", pl: "Raportowanie" },
    skills: ["Tableau", "Plotly", "Matplotlib", "Quarto"],
  },
];

// Flat highlighted stack for the landing / hero contexts.
export const coreStack = ["Python", "R", "PostgreSQL"];

// Personal interests outside of work — shown on the About page.
export const interests: Localized[] = [
  { en: "Travel", pl: "Podróże" },
  { en: "Sport", pl: "Sport" },
  { en: "Automotive", pl: "Motoryzacja" },
  { en: "Cooking", pl: "Gotowanie" },
];

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
    handle: "mszczepkowski.business@gmail.com",
    url: "mailto:mszczepkowski.business@gmail.com",
  },
];

export const heroQuote = {
  text: {
    en: "There is nothing noble in being superior to your fellow man. True nobility is being superior to your former self.",
    pl: "Nie ma nic szlachetnego w byciu lepszym od bliźniego. Prawdziwa szlachetność to być lepszym od swojego dawnego ja.",
  } satisfies Localized,
  author: "Ernest Hemingway",
};
