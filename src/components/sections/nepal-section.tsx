"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { VerificationNotice } from "@/components/kiplan/related-content";
import { KiplanImage } from "@/components/kiplan/kiplan-image";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function NepalSection() {
  const { t } = useTranslation();
  const statusItems = [
    { label: t("nepal.internationalTreaties"), status: t("nepal.verificationRequired") },
    { label: t("nepal.nationalIpOffice"), status: t("nepal.verificationRequired") },
    { label: t("nepal.nationalIpLegislation"), status: t("nepal.verificationRequired") },
    { label: t("nepal.domesticClassification"), status: t("nepal.verificationRequired") },
    { label: t("nepal.pctMadridHague"), status: t("nepal.verificationRequired") },
  ];
  return (
    <MotionSection className="py-20 md:py-28 border-t border-border/40 bg-card/20">
      <SectionShell>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow={t("nepal.eyebrow")}
              title={t("nepal.title")}
              subtitle={t("nepal.subtitle")}
            />
            <div className="mt-8">
              <VerificationNotice
                label={t("nepal.verificationRequired")}
                body={t("nepal.verificationBody")}
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/resources/professional/nepal-ip" className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90">
                {t("nepal.hub")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/resources/professional/country-participation" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-[var(--color-accent)]">
                {t("nepal.treatyParticipation")} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <div className="grid gap-6">
            <KiplanImage
              src="/image/home.webp"
              alt="Kathmandu cityscape with traditional tiered-roof temples and the Himalayan mountain range behind, overlaid with a world map and the KIPLAN IP identity — Kathmandu, Nepal at the centre of the international IP system."
              aspect="aspect-[16/9]"
              caption={t("nepal.caption")}
            />
            <div className="rounded-2xl border border-border bg-background/60 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)] mb-4">
                {t("nepal.status")}
              </div>
              <ul className="space-y-3">
                {statusItems.map((item, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-border/40 pb-2 last:border-0 last:pb-0">
                    <span className="text-sm text-foreground">{item.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-amber-700 dark:text-amber-300">
                      {item.status}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-xs text-muted-foreground leading-relaxed">
                {t("nepal.footnote")}
              </div>
            </div>
          </div>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
