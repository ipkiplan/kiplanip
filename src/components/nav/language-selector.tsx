"use client";

import { useId } from "react";
import { useLanguage } from "@/i18n/provider";
import { SUPPORTED_LANGUAGES } from "@/i18n/config";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Globe, Check, ChevronDown } from "lucide-react";

/**
 * LanguageSelector — compact dropdown language switcher.
 *
 * Trigger:   🌐 <Code> ▾      (e.g. "🌐 EN ▾")
 * Dropdown:  CODE — NativeName   (e.g. "EN — English", "NP — नेपाली")
 *            Each native name renders in its own language-appropriate font.
 *
 * Variant differences:
 * - desktop  → button sized for the navbar (h-8, text-xs)
 * - mobile   → button sized for the mobile sheet (full-width, slightly larger tap target)
 *
 * The switching logic, persistence, and ARIA labelling all delegate to the
 * existing LanguageProvider — no i18n behaviour is duplicated here.
 */

/**
 * Per-language font stacks for the dropdown native-name rendering.
 * These are applied via inline style so each option renders in its own
 * font regardless of the current page language (html[lang]).
 *
 * The page-level typography is handled separately via html[lang="..."]
 * CSS variable overrides in globals.css.
 */
const NATIVE_FONT_STACK: Record<string, string> = {
  en: "inherit",  // uses body font (Inter + system fallbacks)
  ne: '"Noto Sans Devanagari", "Noto Sans CJK Devanagari", "Mukta", "Mangal", "Aparajita", sans-serif',
  "zh-CN": '"Noto Sans SC", "Noto Sans CJK SC", "PingFang SC", "Microsoft YaHei", "Source Han Sans SC", sans-serif',
  ja: '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Yu Gothic UI", "Meiryo", "Noto Sans JP", "Noto Sans CJK JP", sans-serif',
};

interface LanguageSelectorProps {
  variant?: "desktop" | "mobile";
}

export function LanguageSelector({ variant = "desktop" }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const menuId = useId();

  const activeConfig =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) ?? SUPPORTED_LANGUAGES[0];

  // Compact label for the trigger: EN / NP / CN / JN (always 2-letter code)
  const triggerLabel = activeConfig.label;
  const isMobile = variant === "mobile";

  const triggerClass = isMobile
    ? "inline-flex w-full items-center justify-between gap-2 rounded-md border border-border bg-background px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-1"
    : "inline-flex h-8 items-center gap-1.5 rounded-md px-2 text-[11px] font-medium uppercase tracking-wider text-foreground/70 transition-colors hover:bg-accent/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-1";

  const globeClass = isMobile
    ? "h-4 w-4 text-muted-foreground shrink-0"
    : "h-3.5 w-3.5 text-muted-foreground shrink-0";

  const chevronClass = isMobile
    ? "h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200"
    : "h-3 w-3 text-muted-foreground shrink-0 transition-transform duration-200";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={`Language selector. Current language: ${activeConfig.nativeLabel}. Activate to choose another language.`}
        aria-haspopup="menu"
        className={triggerClass}
      >
        <Globe className={globeClass} aria-hidden="true" />
        <span className="whitespace-nowrap">{triggerLabel}</span>
        <ChevronDown
          className={chevronClass}
          aria-hidden="true"
          data-slot="language-selector-chevron"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        id={menuId}
        role="menu"
        aria-label="Select language"
        align={isMobile ? "center" : "end"}
        sideOffset={4}
        className={isMobile ? "w-[var(--radix-dropdown-menu-trigger-width)] min-w-0" : "min-w-[10rem]"}
      >
        {SUPPORTED_LANGUAGES.map((lang) => {
          const isActive = language === lang.code;
          return (
            <DropdownMenuItem
              key={lang.code}
              role="menuitemradio"
              aria-checked={isActive}
              aria-label={`Switch to ${lang.nativeLabel}`}
              onSelect={(e) => {
                e.preventDefault();
                setLanguage(lang.code);
              }}
              className="gap-2"
            >
              <span className="flex-1 truncate flex items-center gap-2">
                {/* Compact code (EN / NP / CN / JN) — monospace for alignment */}
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {lang.label}
                </span>
                {/* Em-dash separator */}
                <span className="text-muted-foreground/40">—</span>
                {/* Native name rendered in its own language-appropriate font */}
                <span
                  className="font-medium"
                  style={{ fontFamily: NATIVE_FONT_STACK[lang.code] ?? "inherit" }}
                >
                  {lang.nativeLabel}
                </span>
              </span>
              {isActive && <Check className="h-3.5 w-3.5 text-[var(--color-accent)]" aria-hidden="true" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
