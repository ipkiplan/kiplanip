"use client";

import { useState, useMemo } from "react";
import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { TREATIES, getTreaty } from "@/data/treaties";
import { SOURCES } from "@/data/sources";
import { PUBLICATIONS } from "@/data/publications";
import { IP_RIGHTS } from "@/data/ip-rights";
import { StatusBadge, SourceBadge, LastUpdated } from "@/components/kiplan/badges";
import { RelatedContent, VerificationNotice } from "@/components/kiplan/related-content";
import { ArrowRight, ArrowLeft, Compass } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function TreatyExplorer() {
  const { t } = useTranslation();
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | "filing" | "non-filing">("all");
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return TREATIES.filter((x) => {
      if (filter === "filing" && !x.filingSystem) return false;
      if (filter === "non-filing" && x.filingSystem) return false;
      if (!query) return true;
      return x.name.toLowerCase().includes(query) || x.subject.toLowerCase().includes(query);
    });
  }, [q, filter]);

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.treaties") }]} />
        <SectionHeader eyebrow={t("treaties.eyebrow")} title={t("treaties.title")} subtitle={t("treaties.subtitle")} />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("treaties.searchPlaceholder")}
            className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm"
            aria-label={t("ui.search")}
          />
          <div className="flex gap-2">
            {(["all", "filing", "non-filing"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-md border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                  filter === f ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {f === "all" ? t("treaties.filterAll") : f === "filing" ? t("treaties.filterFiling") : t("treaties.filterNonFiling")}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/40">
              <tr>
                <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("nav.treaties")}</th>
                <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("treaties.subject")}</th>
                <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("treaties.adoptionDate")}</th>
                <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("treaties.administeredBy")}</th>
                <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("treaties.nepalStatus")}</th>
                <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("treaties.filingSystem")}</th>
                <th className="border-b border-border px-4 py-2" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((tr) => (
                <tr key={tr.slug} className="hover:bg-muted/30 transition-colors">
                  <td className="border-b border-border/60 px-4 py-3 font-display font-medium text-foreground">
                    <Link to={`/research/treaty/${tr.slug}`} className="hover:text-[var(--color-accent)]">{tr.name}</Link>
                  </td>
                  <td className="border-b border-border/60 px-4 py-3 text-muted-foreground text-xs">{tr.subject}</td>
                  <td className="border-b border-border/60 px-4 py-3 font-mono text-xs">{tr.adoptionDate ?? "—"}</td>
                  <td className="border-b border-border/60 px-4 py-3 text-xs">{tr.administeringOrg?.name ?? "—"}</td>
                  <td className="border-b border-border/60 px-4 py-3"><StatusBadge status={tr.nepalStatus as any} /></td>
                  <td className="border-b border-border/60 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{tr.filingSystem ? t("treaties.filingSystem") : t("nav.treaties")}</td>
                  <td className="border-b border-border/60 px-4 py-3 text-right">
                    <Link to={`/research/treaty/${tr.slug}`} className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">
                      {t("ui.view")} <ArrowRight className="h-3 w-3" />
                    </Link>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="px-4 py-8 text-center text-sm text-muted-foreground">{t("treaties.noResults")}</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function TreatyDetail({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const treaty = getTreaty(slug);
  if (!treaty) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">{t("treaties.notFound")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("treaties.notFoundDesc")}</p>
          <Link to="/resources/professional/treaties" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background">
            <ArrowLeft className="h-4 w-4" /> {t("treaties.backToTreaties")}
          </Link>
        </div>
      </SectionShell>
    );
  }

  const sources = SOURCES.filter((s) => treaty.officialSource && s.url && s.url === treaty.officialSource).concat(SOURCES.filter((s) => treaty.relatedRights.some((r) => s.relatedIPRight?.includes(r))));

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.treaties"), href: "/resources/professional/treaties" }, { label: treaty.name }]} />

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">
            {treaty.filingSystem ? t("treaties.filingSystem") : t("nav.treaties")} · {treaty.administeringOrg?.name}
          </div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{treaty.name}</h1>
          {treaty.abbreviation && <p className="mt-1 font-mono text-sm text-muted-foreground">{treaty.abbreviation}</p>}
        </div>

        <LastUpdated className="mt-4" date={treaty.adoptionDate} sourceDate={treaty.entryIntoForce} />

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("ipDetail.module.overview")}</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{treaty.summary}</p>
        </section>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Field label={t("treaties.subject")} value={treaty.subject} />
          <Field label={t("treaties.adoptionDate")} value={treaty.adoptionDate ?? t("ui.verificationRequired")} />
          <Field label={t("treaties.inForce")} value={treaty.entryIntoForce ?? t("ui.verificationRequired")} />
          <Field label={t("treaties.administeredBy")} value={treaty.administeringOrg?.name ?? t("ui.verificationRequired")} link={treaty.administeringOrg?.slug ? `/research/organization/${treaty.administeringOrg.slug}` : undefined} />
          <Field label={t("treaties.filingSystem")} value={treaty.filingSystem ? t("treaties.filingSystem") : t("nav.treaties")} />
          <Field label={t("ui.officialSource")} value={treaty.officialSource ?? t("ui.verificationRequired")} link={treaty.officialSource ?? undefined} external />
        </div>

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("ipDetail.module.keyConcepts")}</h2>
          <ul className="space-y-2">
            {treaty.keyProvisions.map((k, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/90 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                {k}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("treaties.nepalStatus")}</h2>
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={treaty.nepalStatus as any} />
            <span className="text-sm text-muted-foreground">{treaty.nepalStatusNotes}</span>
          </div>
          <VerificationNotice body={t("verification.treatyNepalStatus")} />
        </section>

        <RelatedContent
          groups={[
            { heading: t("treaties.administeredBy"), links: treaty.administeringOrg?.slug ? [{ label: treaty.administeringOrg.name, href: `/research/organization/${treaty.administeringOrg.slug}` }] : [] },
            { heading: t("ipDetail.relatedContent.relatedRights"), links: treaty.relatedRights.map((r) => { const right = IP_RIGHTS.find((x) => x.slug === r); return { label: right?.name ?? r, href: `/ip-rights/${r}` }; }) },
            { heading: t("ipDetail.relatedContent.classifications"), links: treaty.relatedClassifications.map((c) => ({ label: c, href: `/research/classification/${c}` })) },
            { heading: t("treaties.filingSystem"), links: treaty.relatedFilingSystems.map((f) => ({ label: f, href: `/research/filing-system/${f}` })) },
            { heading: t("ipDetail.relatedContent.publications"), links: PUBLICATIONS.filter((p) => p.relatedTreaties?.includes(treaty.slug)).map((p) => ({ label: p.title, href: `/research/publication/${p.slug}` })) },
            { heading: t("methodology.sources"), links: sources.map((s) => ({ label: s.title, href: `/research/source/${s.slug}` })) },
          ]}
        />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/research/ai" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors">
            <Compass className="h-4 w-4" /> {t("ipDetail.askAi")} {treaty.abbreviation ?? treaty.name}
          </Link>
        </div>
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
