"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { IP_RIGHTS } from "@/data/ip-rights";
import { SourceBadge, StatusBadge } from "@/components/kiplan/badges";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { useTranslation } from "@/i18n/provider";

export function IPRightsLanding() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.ipRights") }]} />
        <SectionHeader
          eyebrow={t("ipRightsLanding.eyebrow")}
          title={t("ipRightsLanding.title")}
          subtitle={t("ipRightsLanding.subtitle")}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {IP_RIGHTS.map((r) => {
            const Icon = (Icons as any)[r.icon] ?? Icons.Circle;
            return (
              <Link
                key={r.slug}
                to={`/ip-rights/${r.slug}`}
                className="group relative flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-6 card-hover-lift hover:border-[var(--color-accent)]/40 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {String(r.index).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">{r.name}</h3>
                <p className="line-clamp-4 text-sm text-muted-foreground leading-relaxed">{r.overview}</p>
                <div className="mt-auto flex flex-wrap items-center gap-2">
                  <StatusBadge status={r.nepal.verification as any} />
                </div>
                <div className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100">
                  {t("ipRights.explore")} <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card/40 p-6">
          <h3 className="font-display text-lg font-medium text-foreground">{t("ipRightsLanding.moduleStructure")}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {t("ipRightsLanding.modulesList").split(", ").map((m) => (
              <span key={m} className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {m}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            {t("ipRightsLanding.modulesNote")}
          </p>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
