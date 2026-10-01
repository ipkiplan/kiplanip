"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Wordmark } from "@/components/kiplan/wordmark";
import { ThemeToggle } from "@/components/kiplan/theme-toggle";
import { MobileMenu } from "@/components/nav/mobile-menu";
import { MegaMenu } from "@/components/nav/mega-menu";
import { LoginControl } from "@/components/nav/login-control";
import { LanguageSelector } from "@/components/nav/language-selector";
import { Link, useRouter } from "@/components/router/HashRouter";
import { NAV } from "@/data/nav";
import { useTranslation } from "@/i18n/provider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { path, navigate } = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Wordmark size="sm" />
          <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
            {NAV.map((section) => (
              <MegaMenu key={section.href} section={section} />
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-1.5">
          <Link
            to="/research/ai"
            className="hidden items-center gap-2 rounded-md border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-foreground/80 hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] transition-colors sm:inline-flex"
          >
            <Search className="h-3 w-3" />
            {t("nav.aiResearch")}
          </Link>
          <Link
            to="/contact"
            className="hidden items-center rounded-md bg-foreground px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-background hover:bg-foreground/90 transition-colors sm:inline-flex"
          >
            {t("nav.contact")}
          </Link>
          <ThemeToggle />
          <LanguageSelector />
          <LoginControl />
          <MobileMenu />
        </div>
      </div>
      {path !== "/" && (
        <div className="hidden border-t border-border/40 bg-background/40 lg:block">
          <div className="mx-auto flex h-9 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
            <span className="pathbar-mono text-muted-foreground/60">{t("pathbar.youAreHere")}</span>
            <span className="text-border" aria-hidden="true">·</span>
            <button
              onClick={() => navigate(path)}
              className="pathbar-mono text-[var(--color-accent)] hover:underline"
              aria-label={`Navigate to ${path}`}
            >
              {path}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
