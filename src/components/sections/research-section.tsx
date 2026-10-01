"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { ArrowRight, Database, Layers, Network, FileText, ScrollText, Building2 } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

const PILLAR_KEYS = [
  { icon: <Network className="h-4 w-4" />, titleKey: "research.treaties", bodyKey: "research.treatiesBody", href: "/resources/professional/treaties" },
  { icon: <Layers className="h-4 w-4" />, titleKey: "research.classifications", bodyKey: "research.classificationsBody", href: "/resources/professional/classifications" },
  { icon: <Database className="h-4 w-4" />, titleKey: "research.filingSystems", bodyKey: "research.filingSystemsBody", href: "/resources/professional/filing-systems" },
  { icon: <Building2 className="h-4 w-4" />, titleKey: "research.organizations", bodyKey: "research.organizationsBody", href: "/resources/professional/organizations" },
  { icon: <ScrollText className="h-4 w-4" />, titleKey: "research.laws", bodyKey: "research.lawsBody", href: "/resources/professional/laws" },
  { icon: <FileText className="h-4 w-4" />, titleKey: "research.sources", bodyKey: "research.sourcesBody", href: "/resources/professional/sources" },
] as const;

export function ResearchSection() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-20 md:py-28 border-t border-border/40">
      <SectionShell>
        <SectionHeader
          eyebrow={t("research.eyebrow")}
          title={t("research.title")}
          subtitle={t("research.subtitle")}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PILLAR_KEYS.map((p, i) => (
            <Link
              key={i}
              to={p.href}
              className="group relative flex flex-col gap-3 rounded-lg border border-border bg-card p-6 card-hover-lift hover:border-[var(--color-accent)]/40 hover:shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                {p.icon}
              </span>
              <h3 className="font-display text-lg font-medium text-foreground">{t(p.titleKey as any)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(p.bodyKey as any)}</p>
              <div className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100">
                {t("research.explore")} <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}
