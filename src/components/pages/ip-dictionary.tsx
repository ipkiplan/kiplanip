"use client";

import { useState, useMemo } from "react";
import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { GLOSSARY } from "@/data/glossary";
import { useTranslation } from "@/i18n/provider";

const ALL_KEY = "All";

export function IPDictionary() {
  const { t } = useTranslation();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(ALL_KEY);
  const cats = useMemo(() => [ALL_KEY, ...Array.from(new Set(GLOSSARY.map((g) => g.category)))], []);
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return GLOSSARY.filter((g) => {
      if (cat !== ALL_KEY && g.category !== cat) return false;
      if (!term) return true;
      return g.term.toLowerCase().includes(term) || g.definition.toLowerCase().includes(term);
    });
  }, [q, cat]);

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.general"), href: "/resources/general" }, { label: t("nav.ipDictionary") }]} />
        <SectionHeader eyebrow={t("ipDictionary.eyebrow")} title={t("ipDictionary.title")} subtitle={t("ipDictionary.subtitle")} />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("ipDictionary.searchPlaceholder")}
              className="pl-9"
              aria-label={t("ui.search")}
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                cat === c ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]" : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c === ALL_KEY ? t("ipDictionary.all") : c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {filtered.length === 0 ? (
            <div className="col-span-full rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              {t("ipDictionary.noResults")}
            </div>
          ) : (
            filtered.map((g) => (
              <div key={g.slug} className="rounded-lg border border-border bg-card/40 p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-medium text-foreground">{g.term}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{g.category}</span>
                </div>
                <p className="mt-2 text-sm text-foreground/90 leading-relaxed">{g.definition}</p>
                {g.relatedRights && g.relatedRights.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {g.relatedRights.map((r) => (
                      <Link key={r} to={`/ip-rights/${r}`} className="rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground hover:text-[var(--color-accent)]">
                        {r}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </SectionShell>
    </MotionSection>
  );
}
