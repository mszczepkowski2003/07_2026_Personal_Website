import type { Localized } from "@/lib/i18n/config";
import type { SocialLink } from "@/lib/types";

export const profile = {
  name: "Michał Szczepkowski",
  role: "Data Scientist",
  email: "mszczepkowski2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/michał-szczepkowski-6849362b8/",
  github: "https://github.com/mszczepkowski2003",

  // Real bio, extracted from the old site.
  bio: {
    en: `Data Scientist with over a year of experience in actuarial pricing modelling. Focused on transforming complex datasets into efficient, automated solutions. I am driven by a practical curiosity to understand the 'why' behind the data, bridging the gap between statistical research and production-ready code.`,
    pl: `Data Scientist z ponad rocznym doświadczeniem w modelowaniu taryf aktuarialnych. Skupiony na przekształcaniu złożonych zbiorów danych w wydajne, zautomatyzowane rozwiązania. Napędza mnie praktyczna ciekawość, by zrozumieć „dlaczego” kryjące się za danymi — łącząc badania statystyczne z kodem gotowym do produkcji.`,
  } satisfies Localized,

  // Invented augmentation — personal mission / "what drives me".
  mission: {
    en: `I build models that survive contact with production. The interesting work lives in the gap between a clean notebook result and a system someone can actually depend on — and that gap is where I like to spend my time.`,
    pl: `Buduję modele, które przetrwają zderzenie z produkcją. Najciekawsza praca kryje się w przepaści między czystym wynikiem z notatnika a systemem, na którym ktoś może naprawdę polegać — i to właśnie w tej przepaści lubię spędzać czas.`,
  } satisfies Localized,

  drives: {
    en: `Curiosity is the engine. I treat every project as a question rather than a deliverable: why does this pattern hold, where does it break, and what would it take to ship the answer? That mindset keeps me learning faster than any single role could.`,
    pl: `Ciekawość jest napędem. Każdy projekt traktuję jak pytanie, a nie zadanie do odhaczenia: dlaczego ten wzorzec się utrzymuje, gdzie się załamuje i czego trzeba, by dostarczyć odpowiedź? To podejście sprawia, że uczę się szybciej niż w jakiejkolwiek pojedynczej roli.`,
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
  text: {
    en: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
    pl: "Nie ma nic szlachetnego w byciu lepszym od bliźniego; prawdziwa szlachetność to być lepszym od swojego dawnego ja.",
  } satisfies Localized,
  author: "Ernest Hemingway",
};
