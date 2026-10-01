/**
 * Centralized language configuration for KIPLAN IP.
 *
 * Active languages: English (en), Nepali (ne), Simplified Chinese (zh-CN), Japanese (ja).
 *
 * To add a future language:
 * 1. Create a new translation file in src/i18n/locales/{code}.ts
 * 2. Add the language code to the `SUPPORTED_LANGUAGES` array below
 * 3. Import the translation file and add it to the `translations` map in translations.ts
 * 4. Add the language's display name and flag/label to `LANGUAGE_LABELS`
 *
 * No other code changes are required — the LanguageProvider, useTranslation hook,
 * and LanguageSelector component all read from this configuration.
 */

export type LanguageCode = "en" | "ne" | "zh-CN" | "ja";

export interface LanguageConfig {
  code: LanguageCode;
  label: string;       // Display label in the language selector
  nativeLabel: string; // Native name for the language
  htmlLang: string;    // Value for <html lang="...">
}

export const DEFAULT_LANGUAGE: LanguageCode = "en";

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  { code: "en", label: "EN", nativeLabel: "English", htmlLang: "en" },
  { code: "ne", label: "NP", nativeLabel: "नेपाली", htmlLang: "ne" },
  { code: "zh-CN", label: "CN", nativeLabel: "中文", htmlLang: "zh-CN" },
  { code: "ja", label: "JN", nativeLabel: "日本語", htmlLang: "ja" },
];

export const LANGUAGE_STORAGE_KEY = "kiplan-ip-lang";

export function isSupportedLanguage(code: string): code is LanguageCode {
  return SUPPORTED_LANGUAGES.some((l) => l.code === code);
}
