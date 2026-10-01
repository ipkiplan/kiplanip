"use client";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { LogIn, LogOut, ChevronDown, User } from "lucide-react";
import { Link } from "@/components/router/HashRouter";
import { useTranslation } from "@/i18n/provider";

/**
 * LoginControl — quiet, understated account control for the navbar.
 *
 * Anonymous: shows a small "Login" text link.
 * Authenticated: shows the user's name with a dropdown (Account, Logout).
 *
 * Login is always optional — no page requires authentication.
 */
export function LoginControl() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  // Loading state — don't render anything to avoid layout shift
  if (status === "loading") {
    return <div className="h-7 w-16" aria-hidden="true" />;
  }

  // Authenticated — show user name + dropdown
  if (session?.user) {
    const name = session.user.name || session.user.email || t("nav.account");
    const initial = name.charAt(0).toUpperCase();
    return (
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          onBlur={() => setTimeout(() => setMenuOpen(false), 150)}
          className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium text-foreground/80 hover:text-foreground transition-colors"
          aria-label={t("loginControl.menu")}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] font-mono text-[10px]">
            {initial}
          </span>
          <span className="hidden sm:inline max-w-[80px] truncate">{name.split(" ")[0]}</span>
          <ChevronDown className="h-3 w-3" />
        </button>
        {menuOpen && (
          <div className="absolute right-0 top-full mt-1 w-44 rounded-md border border-border bg-background shadow-lg z-50">
            <div className="px-3 py-2 border-b border-border/60">
              <div className="text-xs font-medium text-foreground truncate">{name}</div>
              {session.user.email && (
                <div className="text-[10px] text-muted-foreground truncate">{session.user.email}</div>
              )}
            </div>
            <button
              onClick={() => signOut()}
              className="flex w-full items-center gap-2 px-3 py-2 text-xs text-foreground/80 hover:bg-muted/40 hover:text-foreground transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              {t("nav.logout")}
            </button>
          </div>
        )}
      </div>
    );
  }

  // Anonymous — quiet Login link
  return (
    <Link
      to="/login"
      className="hidden items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium text-foreground/60 hover:text-[var(--color-accent)] transition-colors sm:inline-flex"
    >
      <LogIn className="h-3.5 w-3.5" />
      {t("nav.login")}
    </Link>
  );
}

/**
 * LoginControlMobile — simplified version for the mobile menu drawer.
 * Uses a full-width button layout suitable for the Sheet/Drawer.
 */
export function LoginControlMobile() {
  const { data: session, status } = useSession();
  const { t } = useTranslation();

  if (status === "loading") return null;

  if (session?.user) {
    const name = session.user.name || session.user.email || t("nav.account");
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 px-1 py-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] font-mono text-xs">
            {name.charAt(0).toUpperCase()}
          </span>
          <span className="text-sm font-medium text-foreground truncate">{name}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-foreground/80 hover:text-[var(--color-accent)] transition-colors"
        >
          <LogOut className="h-4 w-4" />
          {t("nav.logout")}
        </button>
      </div>
    );
  }

  return (
    <Link
      to="/login"
      className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-foreground/80 hover:text-[var(--color-accent)] transition-colors"
    >
      <LogIn className="h-4 w-4" />
      {t("nav.login")}
    </Link>
  );
}
