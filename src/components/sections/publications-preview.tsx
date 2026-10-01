"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { PUBLICATIONS } from "@/data/publications";
import { StatusBadge } from "@/components/kiplan/badges";
import { ArrowRight, FileText, ScrollText, BookMarked } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function PublicationsPreview() {
  const { t } = useTranslation();
  const featured = PUBLICATIONS.slice(0, 4);
  return (
    <MotionSection className="py-20 md:py-28 border-t border-border/40 bg-card/20">
      <SectionShell>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow={t("pubs.eyebrow")}
            title={t("pubs.title")}
            subtitle={t("pubs.subtitle")}
            className=""
          />
          <Link to="/publications" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors">
            {t("footer.publications")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {featured.map((p) => {
            const Icon = p.type.includes("Update") ? <BookMarked className="h-4 w-4" /> : p.type.includes("Working") ? <ScrollText className="h-4 w-4" /> : <FileText className="h-4 w-4" />;
            return (
              <Link
                key={p.slug}
                to={`/research/publication/${p.slug}`}
                className="group relative flex flex-col gap-3 rounded-lg border border-border bg-background/60 p-6 transition-all hover:border-[var(--color-accent)]/40 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                    {Icon}
                    {p.type}
                  </span>
                  <StatusBadge status={p.verification as any} />
                </div>
                <h3 className="font-display text-lg font-medium leading-snug text-foreground">{p.title}</h3>
                <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">{p.abstract}</p>
                {p.disclaimer && (
                  <p className="font-mono text-[10px] uppercase tracking-wider text-amber-700 dark:text-amber-300">
                    {p.disclaimer}
                  </p>
                )}
                <div className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100">
                  {t("common.read")} <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </SectionShell>
    </MotionSection>
  );
}
