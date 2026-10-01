"use client";

import { useState, useMemo } from "react";
import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { PUBLICATIONS, getPublication } from "@/data/publications";
import { StatusBadge } from "@/components/kiplan/badges";
import { VerificationNotice, RelatedContent } from "@/components/kiplan/related-content";
import { KiplanImage } from "@/components/kiplan/kiplan-image";
import { ArrowRight, ArrowLeft, FileText, ScrollText, BookMarked, FileWarning, Compass } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

const TYPE_LABEL: Record<string, string> = {
  "Research Paper": "menu.researchPapers",
  "Draft Paper": "menu.draftPapers",
  "Working Paper": "menu.workingPapers",
  "Research Note": "menu.researchNotes",
  "Report": "menu.reports",
  "IP Update": "menu.ipUpdates",
  "Article": "menu.articles",
  "Commentary": "menu.commentaries",
};

const TYPE_HREF: Record<string, string> = {
  "Research Paper": "/publications/research-papers",
  "Draft Paper": "/publications/draft-papers",
  "Working Paper": "/publications/working-papers",
  "Research Note": "/publications/research-notes",
  "Report": "/publications/reports",
  "IP Update": "/publications/ip-updates",
  "Article": "/publications/articles",
  "Commentary": "/publications/commentaries",
};

export function PublicationsLanding() {
  const { t } = useTranslation();
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return PUBLICATIONS;
    return PUBLICATIONS.filter((p) => p.title.toLowerCase().includes(query) || p.abstract.toLowerCase().includes(query) || p.keywords.some((k) => k.toLowerCase().includes(query)));
  }, [q]);

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.publications") }]} />
        <SectionHeader eyebrow={t("publications.eyebrow")} title={t("publications.title")} subtitle={t("publications.subtitle")} />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <KiplanImage
            src="/image/reflection-sunrise.webp"
            alt="Sunrise illuminating a Himalayan mountain valley, with the sun's rays and surrounding peaks reflecting in a calm body of water in the foreground — the editorial atmosphere of the KIPLAN IP publications archive."
            aspect="aspect-[3/2]"
            caption="Reflection — the editorial stance of KIPLAN IP research"
          />
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p>
              The KIPLAN IP publications archive collects research papers, working papers, draft
              papers, research notes, reports, IP updates, articles and commentaries — each with
              structured metadata, source directory, and visible review status.
            </p>
            <p className="mt-3">
              Draft and working papers carry DRAFT or WORKING PAPER labels with version and review
              status — never implying peer review or institutional endorsement unless that is actually
              established.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {Object.entries(TYPE_LABEL).map(([type, labelKey]) => (
            <Link key={type} to={TYPE_HREF[type]} className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-colors">
              {t(labelKey as any)}
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("publications.searchPlaceholder")}
            className="w-full max-w-xl rounded-md border border-border bg-background px-3 py-2 text-sm"
            aria-label={t("ui.search")}
          />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {filtered.length === 0 ? (
            <div className="col-span-full rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">{t("ui.noResults")}</div>
          ) : (
            filtered.map((p) => <PublicationCard key={p.slug} slug={p.slug} />)
          )}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

function PublicationCard({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const p = getPublication(slug);
  if (!p) return null;
  const Icon = p.type.includes("Update") ? <BookMarked className="h-4 w-4" /> : p.type.includes("Working") ? <ScrollText className="h-4 w-4" /> : p.type.includes("Draft") ? <FileWarning className="h-4 w-4" /> : <FileText className="h-4 w-4" />;
  return (
    <Link to={`/research/publication/${p.slug}`} className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{Icon}{p.type}</span>
        <StatusBadge status={p.verification as any} />
      </div>
      <h3 className="font-display text-lg font-medium leading-snug text-foreground">{p.title}</h3>
      <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">{p.abstract}</p>
      {p.disclaimer && <p className="font-mono text-[10px] uppercase tracking-wider text-amber-700 dark:text-amber-300">{p.disclaimer}</p>}
      <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">{t("ui.read")} <ArrowRight className="h-3 w-3" /></span>
    </Link>
  );
}

export function PublicationsByType({ type }: { type: string }) {
  const { t } = useTranslation();
  const items = PUBLICATIONS.filter((p) => p.type === type);
  const typeLabel = TYPE_LABEL[type] ? t(TYPE_LABEL[type] as any) : type;
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.publications"), href: "/publications" }, { label: typeLabel }]} />
        <SectionHeader eyebrow={t("publications.eyebrow")} title={typeLabel} subtitle={type === "Draft Paper" || type === "Working Paper" ? t("publications.draftWorkingSubtitle") : t("publications.otherTypesSubtitle")} />
        {items.length === 0 ? (
          <div className="mt-12 rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            {t("ui.noResults")}
          </div>
        ) : (
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {items.map((p) => <PublicationCard key={p.slug} slug={p.slug} />)}
          </div>
        )}
      </SectionShell>
    </MotionSection>
  );
}

export function PublicationDetail({ slug }: { slug: string }) {
  const { t } = useTranslation();
  const p = getPublication(slug);
  if (!p) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">{t("publications.notFound")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("publications.notFoundDesc")}</p>
          <Link to="/publications" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background"><ArrowLeft className="h-4 w-4" /> {t("publications.backToPublications")}</Link>
        </div>
      </SectionShell>
    );
  }
  const isDraft = p.type === "Draft Paper";
  const isWorking = p.type === "Working Paper";
  const isResearch = p.type === "Research Paper";
  const typeLabel = TYPE_LABEL[p.type] ? t(TYPE_LABEL[p.type] as any) : p.type;
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-4xl">
        <Breadcrumbs items={[{ label: t("breadcrumb.publications"), href: "/publications" }, { label: typeLabel, href: TYPE_HREF[p.type] }, { label: p.title }]} />

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{p.type}</span>
            {p.version && <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{p.version}</span>}
            {p.reviewStatus && <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{p.reviewStatus}</span>}
          </div>
          <h1 className="mt-2 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-tight">{p.title}</h1>
          {p.authorsNote && <p className="mt-2 font-mono text-xs text-muted-foreground">{p.authorsNote}</p>}
        </div>

        {(isDraft || isWorking) && (
          <div className="mt-6 rounded-lg border border-amber-600/30 bg-amber-50/60 dark:bg-amber-950/20 px-4 py-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-300">
              {isDraft ? t("publications.draftPaper") : t("publications.workingPaper")} · {p.version ?? t("publications.versionNotSpecified")} · {p.reviewStatus ?? t("publications.reviewStatusNotSpecified")}
            </p>
            <p className="mt-1 text-xs text-amber-700/90 dark:text-amber-300/90 leading-relaxed">
              {t("publications.draftNotice").replace("{type}", isDraft ? t("publications.draftType") : t("publications.workingType"))}
            </p>
          </div>
        )}

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("publications.abstract")}</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{p.abstract}</p>
        </section>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.keywords.map((k) => (
            <span key={k} className="rounded-full border border-border bg-card px-2.5 py-0.5 text-[11px] text-muted-foreground">{k}</span>
          ))}
        </div>

        {isResearch && p.sections && p.sections.length > 0 ? (
          <section className="mt-10 border-t border-border/60 pt-6">
            <h2 className="mb-4 font-display text-xl font-medium text-foreground">{t("publications.fullResearchPaperHeading")}</h2>
            <ol className="space-y-5">
              {p.sections.map((s, i) => (
                <li key={i} className="rounded-lg border border-border bg-card/40 p-4">
                  <h3 className="font-display font-medium text-foreground">{s.heading}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ol>
          </section>
        ) : (
          <section className="mt-10 border-t border-border/60 pt-6">
            <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("publications.fullTextHeading")}</h2>
            <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{p.abstract}</p>
            <p className="mt-4 text-xs text-muted-foreground italic">{t("publications.fullTextOnRequest")}</p>
          </section>
        )}

        {p.disclaimer && (
          <div className="mt-8 rounded-lg border border-border bg-card/40 p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{t("footer.disclaimerLink")}</p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.disclaimer}</p>
          </div>
        )}

        {p.verification !== "Verified" && <div className="mt-6"><VerificationNotice body={t("publications.verificationBody")} /></div>}

        <RelatedContent
          groups={[
            { heading: t("ipDetail.relatedContent.relatedRights"), links: (p.relatedRights ?? []).map((r) => ({ label: r, href: `/ip-rights/${r}` })) },
            { heading: t("ipDetail.relatedContent.treaties"), links: (p.relatedTreaties ?? []).map((tr) => ({ label: tr, href: `/research/treaty/${tr}` })) },
            { heading: t("ipDetail.module.classification"), links: (p.relatedCountries ?? []).map((c) => ({ label: c, href: `/research/country/${c}` })) },
            { heading: t("methodology.sources"), links: (p.sources ?? []).map((src) => ({ label: src, href: `/research/source/${src}` })) },
          ]}
        />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/research/ai" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors">
            <Compass className="h-4 w-4" /> {t("publications.askAiAboutResearch")}
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
