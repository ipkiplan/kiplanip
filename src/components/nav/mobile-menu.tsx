"use client";

import { useEffect, useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Wordmark } from "@/components/kiplan/wordmark";
import { ThemeToggle } from "@/components/kiplan/theme-toggle";
import { LoginControlMobile } from "@/components/nav/login-control";
import { LanguageSelector } from "@/components/nav/language-selector";
import { Link, useRouter } from "@/components/router/HashRouter";
import { NAV, type NavChild } from "@/data/nav";
import { useTranslation } from "@/i18n/provider";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { path } = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    // Close menu on route change — synced with router state
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [path]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t("ui.openMenu")} className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto p-0">
        <SheetHeader className="border-b border-border px-5 py-4 text-left">
          <div className="flex items-center justify-between">
            <Wordmark size="sm" />
            <Button variant="ghost" size="icon" aria-label={t("ui.closeMenu")} onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <SheetTitle className="sr-only">{t("ui.kiplanNav")}</SheetTitle>
        </SheetHeader>
        <div className="px-3 py-3">
          <Accordion type="multiple" defaultValue={["nav-home"]} className="w-full">
            {NAV.map((section, idx) =>
              section.children ? (
                <AccordionItem key={idx} value={`nav-${section.label.toLowerCase().replace(/\s/g, "-")}`} className="border-b border-border/60">
                  <AccordionTrigger className="py-3 font-mono text-[11px] uppercase tracking-[0.2em] hover:no-underline">
                    <Link to={section.href} className="hover:text-[var(--color-accent)]" onClick={(e) => e.stopPropagation()}>
                      {t(section.labelKey)}
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent className="pb-3">
                    <ul className="space-y-1">
                      {section.children.map((c, i) => (
                        <li key={i}>
                          <MobileChildLink child={c} />
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <div key={idx} className="border-b border-border/60 py-3">
                  <Link to={section.href} className="font-mono text-[11px] uppercase tracking-[0.2em] hover:text-[var(--color-accent)]">
                    {t(section.labelKey)}
                  </Link>
                </div>
              )
            )}
          </Accordion>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <Link
              to="/research/ai"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-wider text-background hover:bg-foreground/90"
            >
              <Search className="h-3.5 w-3.5" />
              {t("nav.aiResearch")}
            </Link>
            <ThemeToggle />
          </div>
          <div className="mt-3 border-t border-border pt-3">
            <LoginControlMobile />
          </div>
          <div className="mt-3">
            <LanguageSelector variant="mobile" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MobileChildLink({ child }: { child: NavChild }) {
  const { t } = useTranslation();
  return (
    <Link
      to={child.href}
      className="block rounded-md px-3 py-2 text-sm text-foreground/90 hover:bg-muted hover:text-foreground"
    >
      <div className="font-medium">{t(child.labelKey)}</div>
      {child.descriptionKey && (
        <div className="mt-0.5 text-[11px] text-muted-foreground">{t(child.descriptionKey)}</div>
      )}
    </Link>
  );
}
