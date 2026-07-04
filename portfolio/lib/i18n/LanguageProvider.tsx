"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  type Language,
} from "./config";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * App-wide language state. Renders English on the server and on the first
 * client paint (so hydration always matches), then upgrades to the visitor's
 * stored preference after mount. Keeps <html lang> and localStorage in sync.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(DEFAULT_LANGUAGE);

  // Hydrate the stored preference after mount to avoid an SSR mismatch.
  useEffect(() => {
    const stored = window.localStorage.getItem(
      LANGUAGE_STORAGE_KEY
    ) as Language | null;
    if (stored === "en" || stored === "pl") {
      setLangState(stored);
    }
  }, []);

  // Persist + reflect the active language on the document element.
  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((next: Language) => setLangState(next), []);
  const toggle = useCallback(
    () => setLangState((prev) => (prev === "en" ? "pl" : "en")),
    []
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
