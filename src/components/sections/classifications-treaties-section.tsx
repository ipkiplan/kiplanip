"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { CLASSIFICATIONS } from "@/data/classifications";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function ClassificationsTreatiesSection() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-20 md:py-28 border-t border-border/40 bg-card/20">
      <SectionShell>
        <SectionHeader
          eyebrow={t("classTreaties.eyebrow")}
          title={t("classTreaties.title")}
          subtitle={t("classTreaties.subtitle")}
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-xl font-medium text-foreground">{t("classTreaties.classificationSystems")}</h3>
              <Link to="/resources/professional/classifications" className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">
                {t("classTreaties.explorer")} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <ul className="divide-y divide-border/60 rounded-lg border border-border bg-background/60">
              {CLASSIFICATIONS.map((c) => (
                <li key={c.slug}>
                  <Link to={`/research/classification/${c.slug}`} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/40 transition-colors">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-medium text-foreground">{c.name}</span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{c.abbreviation}</span>
                      </div>
                      <div className="truncate text-xs text-muted-foreground">{c.purpose}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-xl font-medium text-foreground">{t("classTreaties.principalTreaties")}</h3>
              <Link to="/resources/professional/treaties" className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">
                {t("classTreaties.treatyExplorer")} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <ul className="divide-y divide-border/60 rounded-lg border border-border bg-background/60">
              {[
                { name: "Paris Convention", date: "1883", slug: "paris-convention", subject: "Industrial property" },
                { name: "Berne Convention", date: "1886", slug: "berne-convention", subject: "Copyright" },
                { name: "Patent Cooperation Treaty (PCT)", date: "1970", slug: "pct", subject: "Patents — international filing" },
                { name: "TRIPS Agreement", date: "1994", slug: "trips", subject: "Multilateral minimum standards" },
                { name: "Madrid System", date: "1891", slug: "madrid-system", subject: "Trademarks — international filing" },
                { name: "Hague System", date: "1925", slug: "hague-system", subject: "Designs — international filing" },
                { name: "Budapest Treaty", date: "1977", slug: "budapest-treaty", subject: "Microorganism deposit" },
                { name: "Rome Convention", date: "1961", slug: "rome-convention", subject: "Related rights" },
                { name: "WCT", date: "1996", slug: "wct", subject: "Copyright in digital environment" },
                { name: "WPPT", date: "1996", slug: "wppt", subject: "Performers & phonogram producers" },
              ].map((t_item) => (
                <li key={t_item.slug}>
                  <Link to={`/research/treaty/${t_item.slug}`} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/40 transition-colors">
                    <div className="min-w-0">
                      <div className="font-display font-medium text-foreground">{t_item.name}</div>
                      <div className="text-xs text-muted-foreground">{t_item.subject}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t_item.date}</span>
                      <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
