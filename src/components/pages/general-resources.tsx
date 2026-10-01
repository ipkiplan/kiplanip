"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { IP_RIGHTS } from "@/data/ip-rights";
import { TREATIES } from "@/data/treaties";
import { CLASSIFICATIONS } from "@/data/classifications";
import { SOURCES } from "@/data/sources";
import { ORGANIZATIONS, OFFICES } from "@/data/organizations";
import { PUBLICATIONS } from "@/data/publications";
import { COUNTRIES } from "@/data/countries";
import { EntityCard } from "@/components/cards/entity-card";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function IPBasics() {
  const { t } = useTranslation();
  const basics = [
    { title: t("ipBasics.whatIsIp.title"), body: t("ipBasics.whatIsIp.body"), href: "/about/kiplan-ip" },
    { title: t("ipBasics.eightCategories.title"), body: t("ipBasics.eightCategories.body"), href: "/ip-rights" },
    { title: t("ipBasics.internationalIp.title"), body: t("ipBasics.internationalIp.body"), href: "/resources/professional/international-ip" },
    { title: t("ipBasics.whoAdministers.title"), body: t("ipBasics.whoAdministers.body"), href: "/resources/professional/organizations" },
    { title: t("ipBasics.treatyVsFiling.title"), body: t("ipBasics.treatyVsFiling.body"), href: "/resources/professional/filing-systems" },
    { title: t("ipBasics.classification.title"), body: t("ipBasics.classification.body"), href: "/resources/professional/classifications" },
  ];
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.general"), href: "/resources/general" }, { label: t("nav.ipBasics") }]} />
        <SectionHeader eyebrow={t("ipBasics.eyebrow")} title={t("ipBasics.title")} subtitle={t("ipBasics.subtitle")} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {basics.map((b) => (
            <Link key={b.title} to={b.href} className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
              <h3 className="font-display text-lg font-medium text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">{t("ui.read")} <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function FAQs() {
  const { t } = useTranslation();
  const faqs = [
    { q: t("faqs.q1"), a: t("faqs.a1") },
    { q: t("faqs.q2"), a: t("faqs.a2") },
    { q: t("faqs.q3"), a: t("faqs.a3") },
    { q: t("faqs.q4"), a: t("faqs.a4") },
    { q: t("faqs.q5"), a: t("faqs.a5") },
    { q: t("faqs.q6"), a: t("faqs.a6") },
    { q: t("faqs.q7"), a: t("faqs.a7") },
    { q: t("faqs.q8"), a: t("faqs.a8") },
  ];
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.general"), href: "/resources/general" }, { label: t("nav.faqs") }]} />
        <SectionHeader eyebrow={t("ipBasics.eyebrow")} title={t("faqs.title")} subtitle={t("faqs.subtitle")} />
        <div className="mt-12 divide-y divide-border/60 rounded-lg border border-border bg-card/40">
          {faqs.map((f, i) => (
            <details key={i} className="group px-5 py-4 [&_summary]:list-none">
              <summary className="flex cursor-pointer items-center justify-between gap-3">
                <span className="font-display text-base font-medium text-foreground">{f.q}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function Guides() {
  const { t } = useTranslation();
  const guides = [
    { title: t("nav.identifyYourIp"), body: t("guides.identifyYourIp.body"), href: "/resources/general/identify-your-ip" },
    { title: t("nav.ipRights"), body: t("guides.ipRights.body"), href: "/ip-rights" },
    { title: t("nav.treaties"), body: t("guides.treaties.body"), href: "/resources/professional/treaties" },
    { title: t("nav.classifications"), body: t("guides.classifications.body"), href: "/resources/professional/classifications" },
    { title: t("nav.researchCentre"), body: t("guides.researchCentre.body"), href: "/resources/professional/research" },
    { title: t("hero.aiResearchInterface"), body: t("guides.aiResearch.body"), href: "/research/ai" },
  ];
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.general"), href: "/resources/general" }, { label: t("nav.guides") }]} />
        <SectionHeader eyebrow={t("ipBasics.eyebrow")} title={t("guides.title")} subtitle={t("guides.subtitle")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link key={g.title} to={g.href} className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
              <h3 className="font-display text-lg font-medium text-foreground">{g.title}</h3>
              <p className="text-sm text-muted-foreground">{g.body}</p>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">{t("ui.open")} <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function ResearchCentre() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.researchCentre") }]} />
        <SectionHeader eyebrow={t("resourcesLanding.professionalEyebrow")} title={t("nav.researchCentre")} subtitle={t("researchCentre.subtitle")} />

        <div className="mt-12">
          <p className="text-sm text-muted-foreground">
            {t("researchCentre.intro")}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <EntityCard title={t("nav.ipRights")} eyebrow={t("researchCentre.ipRightsEyebrow").replace("{count}", String(IP_RIGHTS.length))} href="/ip-rights" description={t("researchCentre.ipRightsDesc")} />
          <EntityCard title={t("nav.treaties")} eyebrow={t("researchCentre.treatiesEyebrow").replace("{count}", String(TREATIES.length))} href="/resources/professional/treaties" description={t("researchCentre.treatiesDesc")} />
          <EntityCard title={t("nav.classifications")} eyebrow={t("researchCentre.classificationsEyebrow").replace("{count}", String(CLASSIFICATIONS.length))} href="/resources/professional/classifications" description={t("researchCentre.classificationsDesc")} />
          <EntityCard title={t("nav.countries")} eyebrow={t("researchCentre.countriesEyebrow").replace("{count}", String(COUNTRIES.length))} href="/resources/professional/countries" description={t("researchCentre.countriesDesc")} />
          <EntityCard title={t("nav.organizations")} eyebrow={t("researchCentre.organizationsEyebrow").replace("{count}", String(ORGANIZATIONS.length))} href="/resources/professional/organizations" description={t("researchCentre.organizationsDesc")} />
          <EntityCard title={t("nav.ipOffices")} eyebrow={t("researchCentre.ipOfficesEyebrow").replace("{count}", String(OFFICES.length))} href="/resources/professional/offices" description={t("researchCentre.ipOfficesDesc")} />
          <EntityCard title={t("nav.publications")} eyebrow={t("researchCentre.publicationsEyebrow").replace("{count}", String(PUBLICATIONS.length))} href="/publications" description={t("researchCentre.publicationsDesc")} />
          <EntityCard title={t("methodology.sources")} eyebrow={t("researchCentre.sourcesEyebrow")} href="/resources/professional/sources" description={t("researchCentre.sourcesDesc")} />
          <EntityCard title={t("hero.aiResearchInterface")} eyebrow={t("researchCentre.aiResearchEyebrow")} href="/research/ai" description={t("researchCentre.aiResearchDesc")} />
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card/40 p-6">
          <h3 className="font-display text-lg font-medium text-foreground">{t("footer.entityCounts")}</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {[
              { label: t("nav.ipRights"), count: IP_RIGHTS.length },
              { label: t("nav.treaties"), count: TREATIES.length },
              { label: t("nav.classifications"), count: CLASSIFICATIONS.length },
              { label: t("footer.sourceRecords"), count: SOURCES.length },
              { label: t("nav.organizations"), count: ORGANIZATIONS.length },
              { label: t("nav.publications"), count: PUBLICATIONS.length },
            ].map((s, i) => (
              <div key={i} className="rounded-lg border border-border bg-background/60 p-4 text-center">
                <div className="font-display text-2xl font-medium text-[var(--color-accent)]">{s.count}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground italic">
            {t("footer.countsNote")}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            {t("footer.sourceRecordsNote")}
          </p>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

// (helper removed — page is fully static)
