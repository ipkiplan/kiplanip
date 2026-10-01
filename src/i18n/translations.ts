/**
 * Centralized translations registry.
 *
 * To add a new language:
 * 1. Create src/i18n/locales/{code}.ts exporting a translation object
 * 2. Import it below and add to the `translations` map
 * 3. Add the language code to SUPPORTED_LANGUAGES in config.ts
 *
 * No other code changes needed.
 */

import { en } from "./locales/en";
import { ne } from "./locales/ne";
import { zhCN } from "./locales/zh-CN";
import { ja } from "./locales/ja";
import type { LanguageCode } from "./config";

export type TranslationKey = keyof typeof en;
export type Translations = Record<LanguageCode, Record<TranslationKey, string>>;

export const translations: Translations = {
  en,
  ne,
  "zh-CN": zhCN,
  ja,
};
