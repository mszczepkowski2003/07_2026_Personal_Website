import type { Localized } from "./config";

/**
 * UI "chrome" copy — every fixed string that lives in a component rather than
 * in the content data files (buttons, section labels, page headers, etc.).
 * Access as `ui.section.key[lang]`.
 */
export const ui = {
  nav: {
    toggleMenu: { en: "Toggle menu", pl: "Przełącz menu" },
  },
  langToggle: {
    groupLabel: { en: "Language", pl: "Język" },
    english: { en: "Switch to English", pl: "Przełącz na angielski" },
    polish: { en: "Switch to Polish", pl: "Przełącz na polski" },
  },
  hero: {
    role: { en: "Data Scientist", pl: "Data Scientist" },
    scroll: { en: "Scroll", pl: "Przewiń" },
  },
  navCards: {
    explore: { en: "Explore", pl: "Przeglądaj" },
  },
  footer: {
    tagline: {
      en: "turning complex datasets into automated, production-ready solutions.",
      pl: "przekształcam złożone zbiory danych w zautomatyzowane, gotowe do wdrożenia rozwiązania.",
    },
    getInTouch: { en: "Get in touch", pl: "Kontakt" },
    rights: { en: "All rights reserved.", pl: "Wszelkie prawa zastrzeżone." },
    contact: { en: "Contact →", pl: "Kontakt →" },
  },
  about: {
    eyebrow: { en: "About Me", pl: "O mnie" },
    title: {
      en: "The person behind the models",
      pl: "Człowiek stojący za modelami",
    },
    photo: { en: "Photo", pl: "Zdjęcie" },
    bio: { en: "Bio", pl: "Bio" },
    mission: { en: "Mission", pl: "Misja" },
    drives: { en: "What drives me", pl: "Co mnie napędza" },
    skills: { en: "Skills & Tools", pl: "Umiejętności i narzędzia" },
    interests: { en: "Interests", pl: "Zainteresowania" },
  },
  contact: {
    eyebrow: { en: "Say Hello", pl: "Przywitaj się" },
    title: { en: "Contact", pl: "Kontakt" },
    intro: {
      en: "Open to data science roles, collaborations, and interesting problems. The fastest way to reach me is below.",
      pl: "Otwarty na role w data science, współpracę i ciekawe problemy. Najszybciej złapiesz mnie poniżej.",
    },
  },
  education: {
    eyebrow: { en: "Credentials", pl: "Kwalifikacje" },
    title: { en: "Education", pl: "Edukacja" },
    intro: {
      en: "Computer Science & Econometrics at the University of Gdańsk — plus continued learning beyond the degree.",
      pl: "Informatyka i ekonometria na Uniwersytecie Gdańskim — oraz ciągła nauka poza studiami.",
    },
    university: { en: "University", pl: "Studia" },
    courses: { en: "Courses & Certifications", pl: "Kursy i certyfikaty" },
    certificate: { en: "View Certificate", pl: "Zobacz certyfikat" },
    certificateLinkedin: {
      en: "Certificate available on my LinkedIn",
      pl: "Certyfikat dostępny na moim LinkedIn",
    },
  },
  experience: {
    eyebrow: { en: "Career", pl: "Kariera" },
    title: { en: "Experience", pl: "Doświadczenie" },
    intro: {
      en: "Where I've applied data science in practice.",
      pl: "Gdzie stosowałem data science w praktyce.",
    },
    placeholder: { en: "* placeholder entry", pl: "* wpis poglądowy" },
  },
  projects: {
    eyebrow: { en: "Selected Work", pl: "Wybrane prace" },
    title: { en: "Projects", pl: "Projekty" },
    intro: {
      en: "My interactive playground — where I experiment with new techniques, explore domains beyond daily work, and challenge myself to build and ship.",
      pl: "Mój interaktywny plac zabaw — gdzie eksperymentuję z nowymi technikami, wychodzę poza codzienną pracę i rzucam sobie wyzwanie, by budować i wdrażać.",
    },
  },
  projectCard: {
    concept: { en: "concept", pl: "koncept" },
    view: { en: "View Project", pl: "Zobacz projekt" },
  },
  projectDetail: {
    back: { en: "Back to Projects", pl: "Powrót do projektów" },
    fallbackLabel: { en: "Project", pl: "Projekt" },
    concept: { en: "· concept project", pl: "· projekt koncepcyjny" },
    visual: { en: "Project visual", pl: "Wizualizacja projektu" },
    overview: { en: "Overview", pl: "Przegląd" },
    approach: { en: "Approach & Methodology", pl: "Podejście i metodologia" },
    techStack: { en: "Tech Stack", pl: "Stos technologiczny" },
    results: { en: "Key Results", pl: "Kluczowe wyniki" },
  },
  demo: {
    label: { en: "Demo", pl: "Demo" },
    comingSoon: {
      en: "Interactive demo coming soon",
      pl: "Interaktywne demo już wkrótce",
    },
  },
  // Display labels for a project's primary language tag.
  projectLanguage: {
    English: { en: "English", pl: "Angielski" },
    Polish: { en: "Polish", pl: "Polski" },
  },
  notFound: {
    code: { en: "404", pl: "404" },
    title: { en: "Page not found", pl: "Nie znaleziono strony" },
    body: {
      en: "The page you're looking for doesn't exist or has moved.",
      pl: "Strona, której szukasz, nie istnieje lub została przeniesiona.",
    },
    back: { en: "Back home", pl: "Powrót do strony głównej" },
  },
} satisfies Record<string, Record<string, Localized>>;
