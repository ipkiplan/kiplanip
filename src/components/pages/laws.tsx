"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { VerificationNotice } from "@/components/kiplan/related-content";
import { LAWS, getLaw, DOCUMENTS, getDocument } from "@/data/laws";
import { TREATIES } from "@/data/treaties";
import { StatusBadge, SourceBadge, LastUpdated } from "@/components/kiplan/badges";
import { RelatedContent } from "@/components/kiplan/related-content";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function LawsPage() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.laws") }]} />
        <SectionHeader eyebrow={t("laws.eyebrow")} title={t("laws.title")} subtitle={t("laws.subtitle")} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {LAWS.map((l) => (
            <Link key={l.slug} to={`/research/law/${l.slug}`} className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-medium text-foreground">{l.name}</h3>
                <StatusBadge status={l.verification as any} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{l.type} · {l.jurisdiction}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{l.subjectMatter}</p>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">{t("ui.view")} <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function LawDetail({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const l = getLaw(slug);
  if (!l) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">{t("laws.notFound")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("laws.notFoundDesc")}</p>
          <Link to="/resources/professional/laws" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background"><ArrowLeft className="h-4 w-4" /> {t("laws.backToLaws")}</Link>
        </div>
      </SectionShell>
    );
  }
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.laws"), href: "/resources/professional/laws" }, { label: l.name }]} />
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{l.type} · {l.jurisdiction}</div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{l.name}</h1>
        </div>
        <LastUpdated className="mt-4" date={l.date} />
        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("treaties.subject")}</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{l.subjectMatter}</p>
        </section>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Field label={t("ui.lastUpdated")} value={l.date ?? t("ui.verificationRequired")} />
          <Field label={t("treaties.administeredBy")} value={l.administeringBody ?? t("ui.verificationRequired")} />
          <Field label={t("ui.officialSource")} value={l.officialSource ?? t("ui.verificationRequired")} link={l.officialSource ?? undefined} external />
        </div>
        {l.verification !== "Verified" && (
          <div className="mt-6"><VerificationNotice body={t("verification.statutoryDetails")} /></div>
        )}
        <RelatedContent
          groups={[
            { heading: t("ipDetail.relatedContent.relatedRights"), links: (l.relatedRights ?? []).map((r) => ({ label: r, href: `/ip-rights/${r}` })) },
            { heading: `${t("ui.all")} ${t("nav.treaties")}`, links: TREATIES.map((tr) => ({ label: tr.name, href: `/research/treaty/${tr.slug}` })) },
          ]}
        />
      </SectionShell>
    </MotionSection>
  );
}

export function DocumentsPage() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.documentLibrary") }]} />
        <SectionHeader eyebrow={t("laws.eyebrow")} title={t("nav.documentLibrary")} subtitle={t("laws.documentsSubtitle")} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {DOCUMENTS.map((d) => (
            <div key={d.slug} className="rounded-lg border border-border bg-card p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-medium text-foreground">{d.title}</h3>
                <StatusBadge status={d.verification as any} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{d.type} · {d.jurisdiction} · {d.date ?? t("countries.capitalVerification").replace("Capital: ", "Date: ")}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.issuer}</p>
              <SourceBadge tier={d.sourceTier} />
              {d.url ? (
                <a href={d.url} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">{t("ui.open")} {t("nav.documentLibrary").toLowerCase()} <ArrowRight className="h-3 w-3" /></a>
              ) : (
                <div className="mt-auto"><VerificationNotice body={t("verification.documentUrl")} /></div>
              )}
            </div>
          ))}
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
