"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  LANGUAGE_STORAGE_KEY,
  isSupportedLanguage,
  type LanguageCode,
} from "./config";
import { translations, type TranslationKey } from "./translations";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    // Lazy initializer — runs once on mount, reads localStorage synchronously
    if (typeof window === "undefined") return DEFAULT_LANGUAGE;
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved && isSupportedLanguage(saved)) return saved;
    } catch {
      // localStorage not available
    }
    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    // Update <html lang="..."> on language change for accessibility/SEO
    const config = SUPPORTED_LANGUAGES.find((l) => l.code === language);
    if (config && typeof document !== "undefined") {
      document.documentElement.lang = config.htmlLang;
    }
  }, [language]);

  const setLanguage = useCallback((lang: LanguageCode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // localStorage not available — language won't persist across sessions
    }
    // Update <html lang="..."> for accessibility/SEO
    if (typeof document !== "undefined") {
      const config = SUPPORTED_LANGUAGES.find((l) => l.code === lang);
      if (config) {
        document.documentElement.lang = config.htmlLang;
      }
    }
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      const dict = translations[language] || translations[DEFAULT_LANGUAGE];
      return dict[key] || translations[DEFAULT_LANGUAGE][key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

/**
 * Convenience hook: returns the translation function `t` and current language.
 * Usage: const { t, language } = useTranslation();
 *        t("hero.title") → returns the translated string
 */
export function useTranslation() {
  const { t, language } = useLanguage();
  return { t, language };
}
