"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { COUNTRIES, getCountry } from "@/data/countries";
import { TREATIES } from "@/data/treaties";
import { StatusBadge } from "@/components/kiplan/badges";
import { RelatedContent, VerificationNotice } from "@/components/kiplan/related-content";
import { ArrowRight, ArrowLeft, Compass } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function CountriesExplorer() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.countries") }]} />
        <SectionHeader eyebrow={t("countries.eyebrow")} title={t("countries.title")} subtitle={t("countries.subtitle")} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRIES.map((c) => (
            <Link key={c.slug} to={`/research/country/${c.slug}`} className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-medium text-foreground">{c.name}</h3>
                <StatusBadge status={c.verification as any} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {c.region} · {c.capital ?? t("countries.capitalVerification")}
              </div>
              <div className="text-xs text-muted-foreground">{c.ipOffice?.name ?? t("countries.ipOfficeVerification")}</div>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">{t("ui.view")} <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function CountryDetail({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const c = getCountry(slug);
  if (!c) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">{t("countries.notFound")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("countries.notFoundDesc")}</p>
          <Link to="/resources/professional/countries" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background">
            <ArrowLeft className="h-4 w-4" /> {t("countries.backToCountries")}
          </Link>
        </div>
      </SectionShell>
    );
  }
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.countries"), href: "/resources/professional/countries" }, { label: c.name }]} />

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("nav.countries")} · {c.region}</div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{c.name}</h1>
          <p className="mt-1 font-mono text-sm text-muted-foreground">{c.iso2} · {c.iso3} · {t("countries.capitalVerification").replace(": verification required", ": ")}{c.capital ?? t("ui.verificationRequired")}</p>
        </div>

        <div className="mt-4"><StatusBadge status={c.verification as any} /></div>

        {c.notes && <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.notes}</p>}

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("nav.ipOffices")}</h2>
          <div className="rounded-lg border border-border bg-card/40 p-4">
            <div className="text-sm font-medium text-foreground">{c.ipOffice?.name ?? t("ui.verificationRequired")}</div>
            {c.ipOffice?.slug && <Link to={`/research/office/${c.ipOffice.slug}`} className="mt-1 inline-block text-xs text-[var(--color-accent)] hover:underline">{t("ipDetail.view")} {t("nav.ipOffices").toLowerCase()} →</Link>}
          </div>
        </section>

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("nav.treaties")}</h2>
          {c.slug === "nepal" && (
            <VerificationNotice body={t("verification.countryNepalStatus")} />
          )}
          <div className="mt-4 overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40">
                <tr>
                  <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("nav.treaties")}</th>
                  <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("treaties.nepalStatus")}</th>
                  <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("ipDetail.module.overview")}</th>
                  <th className="border-b border-border px-4 py-2" />
                </tr>
              </thead>
              <tbody>
                {(c.treatyParticipation ?? []).map((p) => (
                  <tr key={p.treatySlug}>
                    <td className="border-b border-border/60 px-4 py-3 font-display font-medium text-foreground">
                      <Link to={`/research/treaty/${p.treatySlug}`} className="hover:text-[var(--color-accent)]">{p.treatyName}</Link>
                    </td>
                    <td className="border-b border-border/60 px-4 py-3"><StatusBadge status={p.status as any} /></td>
                    <td className="border-b border-border/60 px-4 py-3 text-xs text-muted-foreground">{p.notes ?? "—"}</td>
                    <td className="border-b border-border/60 px-4 py-3 text-right">
                      <Link to={`/research/treaty/${p.treatySlug}`} className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">{t("ui.view")} <ArrowRight className="h-3 w-3" /></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <RelatedContent
          groups={[
            { heading: t("nav.ipOffices"), links: c.ipOffice?.slug ? [{ label: c.ipOffice.name, href: `/research/office/${c.ipOffice.slug}` }] : [] },
            { heading: t("nav.treaties"), links: (c.treatyParticipation ?? []).map((p) => ({ label: p.treatyName, href: `/research/treaty/${p.treatySlug}` })) },
            { heading: `${t("ui.all")} ${t("nav.treaties")}`, links: TREATIES.map((tr) => ({ label: tr.name, href: `/research/treaty/${tr.slug}` })) },
          ]}
        />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/research/ai" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors">
            <Compass className="h-4 w-4" /> {t("ipDetail.askAi")} {c.name}
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function CountryParticipationPage() {
  // Comparative table — Nepal + others, for each treaty.
  const { t } = useTranslation();
  const treaties = TREATIES;
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.countryParticipation") }]} />
        <SectionHeader eyebrow={t("countries.eyebrow")} title={t("nav.countryParticipation")} subtitle={t("countries.participationSubtitle")} />

        <div className="mt-6"><VerificationNotice body={t("verification.countryNepalStatusAlt")} /></div>

        <div className="mt-8 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[700px] text-sm">
            <thead className="bg-muted/40">
              <tr>
                <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("nav.treaties")}</th>
                {COUNTRIES.map((c) => (
                  <th key={c.slug} className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{c.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {treaties.map((tr) => (
                <tr key={tr.slug} className="hover:bg-muted/30 transition-colors">
                  <td className="border-b border-border/60 px-4 py-3">
                    <Link to={`/research/treaty/${tr.slug}`} className="font-display font-medium text-foreground hover:text-[var(--color-accent)]">{tr.name}</Link>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{tr.adoptionDate}</div>
                  </td>
                  {COUNTRIES.map((c) => {
                    const p = c.treatyParticipation?.find((x) => x.treatySlug === tr.slug);
                    return (
                      <td key={c.slug} className="border-b border-border/60 px-4 py-3">
                        {p ? <StatusBadge status={p.status as any} /> : <span className="text-xs text-muted-foreground">—</span>}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
