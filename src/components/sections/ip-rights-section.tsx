"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { IP_RIGHTS } from "@/data/ip-rights";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function IPRightsSection() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-16 md:py-24 border-t border-border/40">
      <SectionShell>
        <SectionHeader
          eyebrow={t("ipRights.eyebrow")}
          title={t("ipRights.title")}
          subtitle={t("ipRights.subtitle")}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {IP_RIGHTS.map((r, i) => {
            const Icon = (Icons as any)[r.icon] ?? Icons.Circle;
            return (
              <Link
                key={r.slug}
                to={`/ip-rights/${r.slug}`}
                className="group relative flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-5 card-hover-lift hover:border-[var(--color-accent)]/40 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-lg font-medium leading-tight text-foreground">
                  {r.name}
                </h3>
                <p className="line-clamp-3 text-xs text-muted-foreground leading-relaxed">
                  {r.tagline}
                </p>
                <div className="mt-auto flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100">
                  {t("ipRights.explore")}
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </SectionShell>
    </MotionSection>
  );
}
