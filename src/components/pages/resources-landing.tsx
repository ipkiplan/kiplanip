"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

const GENERAL = [
  { label: "nav.ipBasics", href: "/resources/general/ip-basics", body: "resourcesLanding.ipBasicsDesc" },
  { label: "nav.ipDictionary", href: "/resources/general/dictionary", body: "resourcesLanding.ipDictionaryDesc" },
  { label: "nav.faqs", href: "/resources/general/faqs", body: "resourcesLanding.faqsDesc" },
  { label: "nav.guides", href: "/resources/general/guides", body: "resourcesLanding.guidesDesc" },
  { label: "nav.identifyYourIp", href: "/resources/general/identify-your-ip", body: "resourcesLanding.identifyYourIpDesc" },
  { label: "nav.sourceLibrary", href: "/resources/professional/sources", body: "resourcesLanding.usefulResourcesDesc" },
];

const PROFESSIONAL = [
  { label: "nav.researchCentre", href: "/resources/professional/research", body: "resourcesLanding.researchCentreDesc" },
  { label: "nav.nepalIp", href: "/resources/professional/nepal-ip", body: "resourcesLanding.nepalIpDesc" },
  { label: "nav.internationalIp", href: "/resources/professional/international-ip", body: "resourcesLanding.internationalIpDesc" },
  { label: "nav.laws", href: "/resources/professional/laws", body: "resourcesLanding.lawsDesc" },
  { label: "nav.treaties", href: "/resources/professional/treaties", body: "resourcesLanding.treatiesDesc" },
  { label: "nav.classifications", href: "/resources/professional/classifications", body: "resourcesLanding.classificationsDesc" },
  { label: "nav.countries", href: "/resources/professional/countries", body: "resourcesLanding.countriesDesc" },
  { label: "nav.countryParticipation", href: "/resources/professional/country-participation", body: "resourcesLanding.countryParticipationDesc" },
  { label: "nav.organizations", href: "/resources/professional/organizations", body: "resourcesLanding.organizationsDesc" },
  { label: "nav.ipOffices", href: "/resources/professional/offices", body: "resourcesLanding.ipOfficesDesc" },
  { label: "nav.filingSystems", href: "/resources/professional/filing-systems", body: "resourcesLanding.filingSystemsDesc" },
  { label: "nav.sourceLibrary", href: "/resources/professional/sources", body: "resourcesLanding.sourceLibraryDesc" },
  { label: "nav.documentLibrary", href: "/resources/professional/documents", body: "resourcesLanding.documentLibraryDesc" },
];

export function ResourcesLanding() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources") }]} />
        <SectionHeader
          eyebrow={t("breadcrumb.resources")}
          title={t("resourcesLanding.title")}
          subtitle={t("resourcesLanding.subtitle")}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-xl font-medium text-foreground">{t("resourcesLanding.generalEyebrow")}</h2>
            <div className="grid gap-3">
              {GENERAL.map((g) => (
                <Link
                  key={g.href}
                  to={g.href}
                  className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-4 hover:border-[var(--color-accent)]/40 transition-colors"
                >
                  <div className="min-w-0">
                    <div className="font-display font-medium text-foreground">{t(g.label as any)}</div>
                    <div className="text-xs text-muted-foreground">{t(g.body as any)}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-[var(--color-accent)]" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-xl font-medium text-foreground">{t("resourcesLanding.professionalEyebrow")}</h2>
            <div className="grid gap-3">
              {PROFESSIONAL.map((p) => (
                <Link
                  key={p.href}
                  to={p.href}
                  className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-4 hover:border-[var(--color-accent)]/40 transition-colors"
                >
                  <div className="min-w-0">
                    <div className="font-display font-medium text-foreground">{t(p.label as any)}</div>
                    <div className="text-xs text-muted-foreground">{t(p.body as any)}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-[var(--color-accent)]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function GeneralResourcesLanding() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("resourcesLanding.generalEyebrow") }]} />
        <SectionHeader eyebrow={t("resourcesLanding.generalEyebrow")} title={t("resourcesLanding.generalTitle")} subtitle={t("resourcesLanding.generalSubtitle")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GENERAL.map((g) => (
            <Link key={g.href} to={g.href} className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
              <h3 className="font-display text-lg font-medium text-foreground">{t(g.label as any)}</h3>
              <p className="text-sm text-muted-foreground">{t(g.body as any)}</p>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">{t("ui.open")} <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function ProfessionalResourcesLanding() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("resourcesLanding.professionalEyebrow") }]} />
        <SectionHeader eyebrow={t("resourcesLanding.professionalEyebrow")} title={t("resourcesLanding.professionalTitle")} subtitle={t("resourcesLanding.professionalSubtitle")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROFESSIONAL.map((p) => (
            <Link key={p.href} to={p.href} className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
              <h3 className="font-display text-lg font-medium text-foreground">{t(p.label as any)}</h3>
              <p className="text-sm text-muted-foreground">{t(p.body as any)}</p>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">{t("ui.open")} <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}
