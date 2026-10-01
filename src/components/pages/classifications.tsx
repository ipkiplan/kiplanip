"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { CLASSIFICATIONS, getClassification } from "@/data/classifications";
import { ORGANIZATIONS } from "@/data/organizations";
import { StatusBadge, SourceBadge, LastUpdated } from "@/components/kiplan/badges";
import { RelatedContent, VerificationNotice } from "@/components/kiplan/related-content";
import { ArrowRight, ArrowLeft, Compass } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function ClassificationExplorer() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.classifications") }]} />
        <SectionHeader eyebrow={t("classifications.eyebrow")} title={t("classifications.title")} subtitle={t("classifications.subtitle")} />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {CLASSIFICATIONS.map((c) => (
            <Link key={c.slug} to={`/research/classification/${c.slug}`} className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-6 hover:border-[var(--color-accent)]/40 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-medium text-foreground">{c.name}</h3>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{c.abbreviation}</div>
                </div>
                <StatusBadge status={c.verification as any} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.purpose}</p>
              <div className="mt-auto flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("treaties.administeredBy")}: {c.responsibleOrg.name}</span>
              </div>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">{t("treaties.viewDetails")} <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card/40 p-6">
          <h3 className="font-display text-lg font-medium text-foreground">{t("classifications.noteCpcVsIpc.heading")}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {t("classifications.noteCpcVsIpc.body")}
          </p>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function ClassificationDetail({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const c = getClassification(slug);
  if (!c) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">{t("classifications.notFound")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("classifications.notFoundDesc")}</p>
          <Link to="/resources/professional/classifications" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background">
            <ArrowLeft className="h-4 w-4" /> {t("classifications.backToClassifications")}
          </Link>
        </div>
      </SectionShell>
    );
  }
  const org = ORGANIZATIONS.find((o) => o.slug === c.responsibleOrg.slug);

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.resources"), href: "/resources" }, { label: t("breadcrumb.professional"), href: "/resources/professional" }, { label: t("nav.classifications"), href: "/resources/professional/classifications" }, { label: c.name }]} />

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("nav.classifications")} · {c.responsibleOrg.name}</div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{c.name}</h1>
          <p className="mt-1 font-mono text-sm text-muted-foreground">{c.abbreviation}</p>
        </div>

        <LastUpdated className="mt-4" date={c.versionNote} sourceDate={null} />

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("ipDetail.module.overview")}</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{c.purpose}</p>
        </section>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Field label={t("treaties.subject")} value={c.subjectMatter} />
          <Field label={t("treaties.administeredBy")} value={c.responsibleOrg.name} link={org ? `/research/organization/${org.slug}` : undefined} />
          <Field label={t("ui.officialSource")} value={c.officialSource ?? t("ui.verificationRequired")} link={c.officialSource ?? undefined} external />
          <Field label={t("field.updateInformation")} value={c.updateInfo} />
        </div>

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("ipDetail.module.classification")}</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{c.structure}</p>
        </section>

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("ipDetail.module.nepal")}</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{c.nepalRelevance}</p>
          <div className="mt-3"><VerificationNotice body={t("verification.classificationNepalUse")} /></div>
        </section>

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("ipDetail.module.internationalSystems")}</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{c.internationalRelevance}</p>
        </section>

        {c.versionNote && (
          <div className="mt-6 rounded-lg border border-amber-600/30 bg-amber-50/60 dark:bg-amber-950/20 px-4 py-3 text-xs text-amber-700 dark:text-amber-300">
            <strong className="font-mono uppercase tracking-wider">{t("ipDetail.module.overview")}:</strong> {c.versionNote}
          </div>
        )}

        <RelatedContent
          groups={[
            { heading: t("treaties.administeredBy"), links: org ? [{ label: org.name, href: `/research/organization/${org.slug}` }] : [] },
            { heading: t("ipDetail.relatedContent.relatedRights"), links: c.relatedRights.map((r) => ({ label: r, href: `/ip-rights/${r}` })) },
          ]}
        />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/research/ai" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors">
            <Compass className="h-4 w-4" /> {t("ipDetail.askAi")} {c.abbreviation}
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
