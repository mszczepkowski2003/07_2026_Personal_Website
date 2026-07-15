import type { Localized } from "@/lib/i18n/config";
import type { SocialLink } from "@/lib/types";

export const profile = {
  name: "Michał Szczepkowski",
  role: "Data Scientist",
  email: "mszczepkowski.business@gmail.com",
  linkedin: "https://www.linkedin.com/in/michał-szczepkowski-6849362b8/",
  github: "https://github.com/mszczepkowski2003",

  // Two-paragraph bio (professional + personal approach). Paragraphs are
  // separated by a blank line and rendered individually on the About page.
  bio: {
    en: `Data Scientist with over a year of consulting experience, where I managed the full lifecycle of predictive pricing models and optimized pipelines for high-dimensional datasets. I've learned that a model's value lies not in its accuracy alone, but in its ability to drive real-world business decisions. I pair statistical rigor with data storytelling, turning scattered, seemingly meaningless fragments of data into clear answers and solutions people can act on.

My approach is shaped as much by my basketball past as by my professional experience. Sport taught me two lessons I apply every day: discipline, resilience, and curiosity are what actually drive growth, and that individual stats mean nothing without a team win. I look for responsibility, adapt quickly to the environment around me, and measure my work by the team's collective success, not just my own output.`,
    pl: `Data Scientist z ponad rocznym doświadczeniem w konsultingu, gdzie zarządzałem pełnym cyklem życia predykcyjnych modeli pricingowych i optymalizowałem pipeline'y dla wielowymiarowych zbiorów danych. Nauczyłem się, że wartość modelu nie leży jedynie w jego dokładności, lecz w zdolności do wspierania realnych decyzji biznesowych. W mojej pracy łączę statystyczną rzetelność z data storytellingiem, przekształcając rozproszone, z pozoru nic nie znaczące dane w jasne odpowiedzi i rozwiązania, na podstawie których można działać.

Moje podejście do pracy ukształtowane zostało zarówno przez moją przeszłość koszykarską, jak i doświadczenie zawodowe. Sport nauczył mnie dwóch rzeczy, które stosuję każdego dnia: dyscyplina, odporność i ciekawość naprawdę napędzają rozwój, oraz że indywidualne statystyki nic nie znaczą bez zwycięstwa zespołu. Aktywnie poszukuję odpowiedzialności, szybko adaptuję się do otoczenia i mierzę swoją pracę wspólnym sukcesem zespołu, a nie tylko własnym wynikiem.`,
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
    skills: ["Scikit-Learn", "TensorFlow", "XGBoost", "Optuna", "Statistics"],
  },
  {
    label: { en: "Data & Infra", pl: "Dane i infrastruktura" },
    skills: ["PostgreSQL", "Pandas", "NumPy", "Docker", "FastAPI", "Git"],
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
