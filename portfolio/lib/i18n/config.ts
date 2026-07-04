// Central i18n configuration. Pure types/constants — safe to import from both
// server and client components.

export const LANGUAGES = ["en", "pl"] as const;
export type Language = (typeof LANGUAGES)[number];

/** A value that exists in every supported language. */
export type Localized<T = string> = Record<Language, T>;

export const DEFAULT_LANGUAGE: Language = "en";

/** localStorage key for the persisted language preference. */
export const LANGUAGE_STORAGE_KEY = "site-language";
