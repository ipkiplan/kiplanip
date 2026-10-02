"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { KiplanImage } from "@/components/kiplan/kiplan-image";
import { ArrowRight, Globe2 } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function InternationalSection() {
  const { t } = useTranslation();
  const LEVELS = [
    { label: t("international.world"), body: t("international.worldBody"), href: "/resources/professional/international-ip" },
    { label: t("international.asia"), body: t("international.asiaBody"), href: "/resources/professional/countries" },
    { label: t("international.southAsia"), body: t("international.southAsiaBody"), href: "/resources/professional/countries" },
    { label: t("international.nepal"), body: t("international.nepalBody"), href: "/resources/professional/nepal-ip" },
    { label: t("international.kathmandu"), body: t("international.kathmanduBody"), href: "/about/kiplan-ip" },
  ];
  return (
    <MotionSection className="py-16 md:py-24 border-t border-border/40">
      <SectionShell>
        <SectionHeader
          eyebrow={t("international.eyebrow")}
          title={t("international.title")}
          subtitle={t("international.subtitle")}
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <KiplanImage
            src="/image/ktm-setting-sun.webp"
            alt="Kathmandu cityscape at sunset with traditional tiered-roof temples and the Himalayan mountain range, overlaid with a faint world map and the KIPLAN IP identity — Nepal at the centre of the international IP system."
            aspect="aspect-[16/9]"
            caption={t("international.caption")}
          />
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p>
              KIPLAN IP reads &quot;international reach&quot; as the architecture of the international IP system
              itself — the treaties, classification systems, filing routes, organisations and offices — rather
              than as KIPLAN-branded offices in multiple countries.
            </p>
            <p className="mt-3">
              The nested hierarchy on the right moves from the global IP architecture (World) down through
              regional layers (Asia, South Asia) to Nepal and finally Kathmandu — the physical base from
              which KIPLAN IP operates.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {LEVELS.map((l, i) => (
            <Link
              key={i}
              to={l.href}
              className="group relative flex h-full flex-col gap-2 rounded-lg border border-border bg-card p-5 transition-all hover:border-[var(--color-accent)]/40 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  L{i + 1}
                </span>
                {i === 0 && <Globe2 className="h-4 w-4 text-[var(--color-accent)]" />}
              </div>
              <h3 className="font-display text-lg font-medium text-foreground">{l.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{l.body}</p>
              <div className="mt-auto pt-2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100">
                {t("international.view")} <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}
