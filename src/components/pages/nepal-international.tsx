"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { VerificationNotice } from "@/components/kiplan/related-content";
import { KiplanImage } from "@/components/kiplan/kiplan-image";
import { TREATIES } from "@/data/treaties";
import { CLASSIFICATIONS } from "@/data/classifications";
import { FILING_SYSTEMS } from "@/data/organizations";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function NepalIPPage() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.nepalIp") }]} />
        <SectionHeader eyebrow={t("nepalIp.eyebrow")} title={t("nepalIp.title")} subtitle={t("nepalIp.subtitle")} />

        <div className="mt-8"><VerificationNotice body={t("nepalIp.verificationBody")} /></div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <KiplanImage
            src="/image/complete 1.webp"
            alt="A collage of nine photographs and eight icons representing intellectual property in Nepal — including Kathmandu's tiered-roof architecture, a craftsman carving wood, a scientist examining a microscope slide, books titled Intellectual Property, an office interior, and the exterior of a modern building labeled Department of Patents — a visual map of the KIPLAN IP Nepal research domain."
            aspect="aspect-[3/2]"
            caption={t("nepalIp.caption")}
            wrapperClassName="rounded-lg overflow-hidden border border-border/60 bg-foreground/[0.92] shadow-sm"
            imgClassName="h-full w-full object-cover opacity-95"
            captionClassName="mt-2 px-1 font-mono text-[10px] uppercase tracking-wider text-background/60"
          />
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p>
              {t("nepalIp.intro1")}
            </p>
            <p className="mt-3">
              {t("nepalIp.intro2")}{" "}
              <span className="font-mono text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-300">{t("ui.verificationRequired")}</span>{" "}
              — {t("philosophy.honesty.heading").toLowerCase()}.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-display text-lg font-medium text-foreground">{t("nepal.treatyParticipation")}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t("nepalIp.treatyParticipationCard.body")}</p>
            <Link to="/resources/professional/country-participation" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">{t("ui.open")} {t("nepal.treatyParticipation").toLowerCase()} <ArrowRight className="h-3 w-3" /></Link>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-display text-lg font-medium text-foreground">{t("nepal.nationalIpOffice")}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t("nepalIp.nationalIpOfficeCard.body")}</p>
            <Link to="/research/office/nepal-ip-office" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">{t("ui.view")} {t("nepal.nationalIpOffice").toLowerCase()} <ArrowRight className="h-3 w-3" /></Link>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-display text-lg font-medium text-foreground">{t("nepal.nationalIpLegislation")}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t("nepalIp.nationalIpLegislationCard.body")}</p>
            <Link to="/research/law/nepal-ip-laws" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">{t("ui.view")} {t("nav.laws").toLowerCase()} <ArrowRight className="h-3 w-3" /></Link>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-display text-lg font-medium text-foreground">{t("nav.countries")}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t("nepalIp.countriesCard.body")}</p>
            <Link to="/research/country/nepal" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">{t("ui.view")} {t("nav.countries").toLowerCase()} <ArrowRight className="h-3 w-3" /></Link>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="mb-4 font-display text-xl font-medium text-foreground">{t("nepalIp.howTreatsFacts.heading")}</h2>
          <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />{t("nepalIp.howTreatsFacts.bullet1")}</li>
            <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />{t("nepalIp.howTreatsFacts.bullet2")}</li>
            <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />{t("nepalIp.howTreatsFacts.bullet3")}</li>
          </ul>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function InternationalIPPage() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.internationalIp") }]} />
        <SectionHeader eyebrow={t("nepalIp.eyebrow")} title={`International ${t("nav.internationalIp")}`} subtitle={t("international.subtitle")} />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-display text-xl font-medium text-foreground">{t("classTreaties.principalTreaties")}</h3>
            <ul className="divide-y divide-border/60 rounded-lg border border-border bg-card/40">
              {TREATIES.map((tr) => (
                <li key={tr.slug}>
                  <Link to={`/research/treaty/${tr.slug}`} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/40 transition-colors">
                    <div>
                      <div className="font-display font-medium text-foreground">{tr.name}</div>
                      <div className="text-xs text-muted-foreground">{tr.subject}</div>
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{tr.adoptionDate}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-display text-xl font-medium text-foreground">{t("nav.classifications")}</h3>
            <ul className="divide-y divide-border/60 rounded-lg border border-border bg-card/40">
              {CLASSIFICATIONS.map((c) => (
                <li key={c.slug}>
                  <Link to={`/research/classification/${c.slug}`} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/40 transition-colors">
                    <div>
                      <div className="font-display font-medium text-foreground">{c.name}</div>
                      <div className="text-xs text-muted-foreground">{c.purpose}</div>
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{c.abbreviation}</div>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 mb-3 font-display text-xl font-medium text-foreground">{t("nav.filingSystems")}</h3>
            <ul className="divide-y divide-border/60 rounded-lg border border-border bg-card/40">
              {FILING_SYSTEMS.map((f) => (
                <li key={f.slug}>
                  <Link to={`/research/filing-system/${f.slug}`} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/40 transition-colors">
                    <div>
                      <div className="font-display font-medium text-foreground">{f.name}</div>
                      <div className="text-xs text-muted-foreground">{f.type}</div>
                    </div>
                    {f.abbreviation && <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{f.abbreviation}</div>}
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
