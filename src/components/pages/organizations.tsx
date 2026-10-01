"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { ORGANIZATIONS, getOrganization, OFFICES, getOffice, FILING_SYSTEMS } from "@/data/organizations";
import { SOURCES, getSource } from "@/data/sources";
import { StatusBadge, SourceBadge, LastUpdated } from "@/components/kiplan/badges";
import { RelatedContent, VerificationNotice } from "@/components/kiplan/related-content";
import { ArrowRight, ArrowLeft, Compass, ExternalLink } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function OrganizationsPage() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.organizations") }]} />
        <SectionHeader eyebrow={t("organizations.eyebrow")} title={t("organizations.title")} subtitle={t("organizations.subtitle")} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {ORGANIZATIONS.map((o) => (
            <Link key={o.slug} to={`/research/organization/${o.slug}`} className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-6 hover:border-[var(--color-accent)]/40 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{o.abbreviation}</div>
                  <h3 className="font-display text-xl font-medium text-foreground">{o.name}</h3>
                </div>
                <StatusBadge status={o.verification as any} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{o.purpose}</p>
              <div className="mt-auto flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <span>{t("organizations.hq")}: {o.headquarters ?? "—"}</span>
                <span>·</span>
                <span>Est: {o.established ?? "—"}</span>
              </div>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">{t("ui.view")} <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function OrganizationDetail({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const o = getOrganization(slug);
  if (!o) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">{t("organizations.notFound")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("organizations.notFoundDesc")}</p>
          <Link to="/resources/professional/organizations" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background"><ArrowLeft className="h-4 w-4" /> {t("organizations.backToOrganizations")}</Link>
        </div>
      </SectionShell>
    );
  }
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.organizations"), href: "/resources/professional/organizations" }, { label: o.name }]} />

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{o.type} · {o.abbreviation}</div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{o.name}</h1>
        </div>

        <LastUpdated className="mt-4" date={o.established} sourceDate={null} />

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("ipDetail.module.overview")}</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{o.purpose}</p>
        </section>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Field label={t("ipDetail.module.overview")} value={o.type} />
          <Field label={t("organizations.hq")} value={o.headquarters ?? t("ui.verificationRequired")} />
          <Field label={t("ui.lastUpdated")} value={o.established ?? t("ui.verificationRequired")} />
        </div>

        {o.administers && o.administers.length > 0 && (
          <section className="mt-8 border-t border-border/60 pt-6">
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("treaties.administeredBy")}</h2>
            <ul className="divide-y divide-border/60 rounded-lg border border-border bg-card/40">
              {o.administers.map((a, i) => (
                <li key={i}>
                  <Link to={a.slug ? `/research/treaty/${a.slug}` : "/resources/professional/treaties"} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/40 transition-colors">
                    <span className="font-display font-medium text-foreground">{a.name}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {o.classificationSystems && o.classificationSystems.length > 0 && (
          <section className="mt-8 border-t border-border/60 pt-6">
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("nav.classifications")}</h2>
            <div className="flex flex-wrap gap-2">
              {o.classificationSystems.map((c) => (
                <Link key={c.slug} to={`/research/classification/${c.slug}`} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/8 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--color-accent)] hover:bg-[var(--color-accent)]/15">
                  {c.name} <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {o.website && (
          <a href={o.website} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors">
            <ExternalLink className="h-4 w-4" /> {t("ui.officialSource")}
          </a>
        )}

        <RelatedContent
          groups={[
            { heading: `${t("treaties.administeredBy")} ${t("nav.treaties")}`, links: (o.administers ?? []).map((a) => ({ label: a.name, href: a.slug ? `/research/treaty/${a.slug}` : "/resources/professional/treaties" })) },
            { heading: t("nav.classifications"), links: (o.classificationSystems ?? []).map((c) => ({ label: c.name, href: `/research/classification/${c.slug}` })) },
            { heading: t("ipDetail.relatedContent.relatedRights"), links: ["patents", "trademarks", "industrial-designs", "copyright", "geographical-indications"].map((r) => ({ label: r, href: `/ip-rights/${r}` })) },
          ]}
        />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/research/ai" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors">
            <Compass className="h-4 w-4" /> {t("ipDetail.askAi")} {o.abbreviation}
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function OfficesPage() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.ipOffices") }]} />
        <SectionHeader eyebrow={t("organizations.eyebrow")} title={t("organizations.officesDirectoryTitle").replace("{name}", t("nav.ipOffices"))} subtitle={t("organizations.officesSubtitle")} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {OFFICES.map((o) => (
            <Link key={o.slug} to={`/research/office/${o.slug}`} className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-6 hover:border-[var(--color-accent)]/40 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-medium text-foreground">{o.name}</h3>
                <StatusBadge status={o.verification as any} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{o.jurisdictionLevel} · {o.country}</div>
              {o.acronym && <div className="font-mono text-xs text-[var(--color-accent)]">{o.acronym}</div>}
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">{t("ui.view")} <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function OfficeDetail({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const o = getOffice(slug);
  if (!o) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">{t("organizations.notFound")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("organizations.notFoundDesc")}</p>
          <Link to="/resources/professional/offices" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background"><ArrowLeft className="h-4 w-4" /> {t("nav.ipOffices")}</Link>
        </div>
      </SectionShell>
    );
  }
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.ipOffices"), href: "/resources/professional/offices" }, { label: o.name }]} />

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{o.jurisdictionLevel} {t("nav.ipOffices")} · {o.country}</div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{o.name}</h1>
          {o.acronym && <p className="mt-1 font-mono text-sm text-muted-foreground">{o.acronym}</p>}
        </div>

        <div className="mt-4"><StatusBadge status={o.verification as any} /></div>

        {o.notes && <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{o.notes}</p>}

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Field label={t("field.jurisdictionLevel")} value={o.jurisdictionLevel} />
          <Field label={t("nav.countries")} value={o.country} link={o.countrySlug ? `/research/country/${o.countrySlug}` : undefined} />
          <Field label={t("ui.officialSource")} value={o.website ?? t("ui.verificationRequired")} link={o.website ?? undefined} external />
          <Field label={t("field.address")} value={o.address ?? t("ui.verificationRequired")} />
        </div>

        {o.administers && o.administers.length > 0 && (
          <section className="mt-8 border-t border-border/60 pt-6">
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("treaties.administeredBy")}</h2>
            <ul className="flex flex-wrap gap-2">
              {o.administers.map((a, i) => (
                <li key={i} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground">{a}</li>
              ))}
            </ul>
          </section>
        )}

        {o.verification !== "Verified" && (
          <div className="mt-6"><VerificationNotice body={t("verification.officeDetails")} /></div>
        )}

        <RelatedContent
          groups={[
            { heading: t("nav.countries"), links: o.countrySlug ? [{ label: o.country, href: `/research/country/${o.countrySlug}` }] : [] },
            { heading: t("nav.filingSystems"), links: FILING_SYSTEMS.map((f) => ({ label: f.name, href: `/research/filing-system/${f.slug}` })) },
          ]}
        />
      </SectionShell>
    </MotionSection>
  );
}

export function FilingSystemsPage() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.filingSystems") }]} />
        <SectionHeader eyebrow={t("organizations.eyebrow")} title={`International ${t("nav.filingSystems")}`} subtitle={t("organizations.filingSystemsSubtitle")} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {FILING_SYSTEMS.map((f) => (
            <Link key={f.slug} to={`/research/filing-system/${f.slug}`} className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-6 hover:border-[var(--color-accent)]/40 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-medium text-foreground">{f.name}</h3>
                {f.abbreviation && <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{f.abbreviation}</span>}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.purpose}</p>
              <div className="mt-auto font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("treaties.administeredBy")}: {f.administeredBy.name}</div>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">{t("ui.view")} <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function FilingSystemDetail({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const f = FILING_SYSTEMS.find((x) => x.slug === slug);
  if (!f) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">{t("organizations.notFound")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("organizations.notFoundDesc")}</p>
          <Link to="/resources/professional/filing-systems" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background"><ArrowLeft className="h-4 w-4" /> {t("nav.filingSystems")}</Link>
        </div>
      </SectionShell>
    );
  }
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.filingSystems"), href: "/resources/professional/filing-systems" }, { label: f.name }]} />
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{f.type} · {t("treaties.administeredBy")} {f.administeredBy.name}</div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{f.name}</h1>
          {f.abbreviation && <p className="mt-1 font-mono text-sm text-muted-foreground">{f.abbreviation}</p>}
        </div>
        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("ipDetail.module.overview")}</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{f.purpose}</p>
        </section>
        <RelatedContent
          groups={[
            { heading: t("treaties.administeredBy"), links: [{ label: f.administeredBy.name, href: `/research/organization/${f.administeredBy.slug}` }] },
            { heading: t("ipDetail.relatedContent.treaties"), links: f.relatedTreaties.map((tr) => ({ label: tr.name, href: `/research/treaty/${tr.slug}` })) },
            { heading: t("ipDetail.relatedContent.relatedRights"), links: f.relatedRights.map((r) => ({ label: r, href: `/ip-rights/${r}` })) },
          ]}
        />
      </SectionShell>
    </MotionSection>
  );
}

export function SourcesPage() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.sourceLibrary") }]} />
        <SectionHeader eyebrow={t("organizations.eyebrow")} title={t("nav.sourceLibrary")} subtitle={t("organizations.sourcesSubtitle")} />

        <div className="mt-12 space-y-8">
          {(["tier-1-official", "tier-2-institutional", "tier-3-professional"] as const).map((tier) => (
            <div key={tier}>
              <h2 className="mb-4 font-display text-xl font-medium text-foreground flex items-center gap-2">
                <SourceBadge tier={tier} />
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{SOURCES.filter((s) => s.tier === tier).length} {t("methodology.sources").toLowerCase()}</span>
              </h2>
              <div className="grid gap-3 md:grid-cols-2">
                {SOURCES.filter((s) => s.tier === tier).map((s) => (
                  <Link key={s.slug} to={`/research/source/${s.slug}`} className="group rounded-lg border border-border bg-card p-4 hover:border-[var(--color-accent)]/40 transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-medium text-foreground text-sm leading-snug">{s.title}</h3>
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <StatusBadge status={s.verificationStatus as any} />
                      {s.url && <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">→ {t("methodology.sources").toLowerCase()}</span>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function SourceDetail({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const s = getSource(slug);
  if (!s) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">{t("organizations.notFound")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("organizations.notFoundDesc")}</p>
          <Link to="/resources/professional/sources" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background"><ArrowLeft className="h-4 w-4" /> {t("nav.sourceLibrary")}</Link>
        </div>
      </SectionShell>
    );
  }
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.sourceLibrary"), href: "/resources/professional/sources" }, { label: s.title }]} />

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{s.sourceType} · {s.jurisdiction}</div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{s.title}</h1>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <SourceBadge tier={s.tier} />
          <StatusBadge status={s.verificationStatus as any} />
        </div>

        <LastUpdated className="mt-4" date={s.date} sourceDate={s.retrievalDate} />

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("ipDetail.module.overview")}</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{s.description}</p>
        </section>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Field label={t("field.publisher")} value={s.publisher ?? t("ui.verificationRequired")} />
          <Field label={t("field.issuingBody")} value={s.issuingBody ?? t("ui.verificationRequired")} />
          <Field label={t("field.jurisdiction")} value={s.jurisdiction ?? "—"} />
          <Field label={t("ui.lastUpdated")} value={s.date ?? t("ui.verificationRequired")} />
          <Field label={t("field.retrievalDate")} value={s.retrievalDate ?? "—"} />
          <Field label={t("field.url")} value={s.url ?? t("ui.verificationRequired")} link={s.url ?? undefined} external />
        </div>

        {s.verificationStatus !== "Verified" && (
          <div className="mt-6"><VerificationNotice body={t("verification.sourceAuthority")} /></div>
        )}

        {s.relatedTopic && s.relatedTopic.length > 0 && (
          <section className="mt-8 border-t border-border/60 pt-6">
            <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("sources.relatedTopics.heading")}</h2>
            <div className="flex flex-wrap gap-2">
              {s.relatedTopic.map((topic) => (
                <span key={topic} className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{topic}</span>
              ))}
            </div>
          </section>
        )}

        <RelatedContent
          groups={[
            { heading: t("ipDetail.relatedContent.relatedRights"), links: (s.relatedIPRight ?? []).map((r) => ({ label: r, href: `/ip-rights/${r}` })) },
          ]}
        />
      </SectionShell>
    </MotionSection>
  );
}

function Field({ label, value, link, external }: { label: string; value: string; link?: string; external?: boolean }) {
  return (
    <div className="rounded-lg border border-border bg-card/40 p-4">
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      {link ? (
        external ? (
          <a href={link} target="_blank" rel="noreferrer" className="mt-1 block break-all text-sm text-[var(--color-accent)] hover:underline">{value}</a>
        ) : (
          <Link to={link} className="mt-1 block text-sm text-[var(--color-accent)] hover:underline">{value}</Link>
        )
      ) : (
        <div className="mt-1 text-sm text-foreground">{value}</div>
      )}
    </div>
  );
}
