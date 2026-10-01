"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { IP_RIGHTS, getIPRight } from "@/data/ip-rights";
import { TREATIES } from "@/data/treaties";
import { PUBLICATIONS } from "@/data/publications";
import { SOURCES } from "@/data/sources";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { RelatedContent, VerificationNotice } from "@/components/kiplan/related-content";
import { SourceBadge, StatusBadge, LastUpdated } from "@/components/kiplan/badges";
import { KiplanImage } from "@/components/kiplan/kiplan-image";
import * as Icons from "lucide-react";
import { ArrowRight, ArrowLeft, Compass } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function IPRightDetail({ slug }: { slug: string }) {
  const r = getIPRight(slug);
  const { t } = useTranslation();
  if (!r) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">{t("ipDetail.notFound")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("ipDetail.notFoundDesc")}</p>
          <Link to="/ip-rights" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background">
            <ArrowLeft className="h-4 w-4" /> {t("ipDetail.backToIpRights")}
          </Link>
        </div>
      </SectionShell>
    );
  }
  const Icon = (Icons as any)[r.icon] ?? Icons.Circle;
  const idx = IP_RIGHTS.findIndex((x) => x.slug === slug);
  const prev = IP_RIGHTS[idx - 1];
  const next = IP_RIGHTS[idx + 1];

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.ipRights"), href: "/ip-rights" }, { label: r.name }]} />

        {/* Header */}
        <div className="flex flex-wrap items-start gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
            <Icon className="h-7 w-7" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">
              {t("ipDetail.ipRight")} · {String(r.index).padStart(2, "0")} {t("ipDetail.of08")}
            </div>
            <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{r.name}</h1>
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">{r.tagline}</p>
          </div>
        </div>

        <LastUpdated className="mt-4" />

        {/* Overview */}
        <Module heading={t("ipDetail.module.overview")} body={r.overview} />

        {/* Contextual image — only present for IP rights where a relevant image exists */}
        {r.image && (
          <section className="mt-8 border-t border-border/60 pt-6">
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{t("ipDetail.inContext")}</h2>
            <KiplanImage
              src={r.image.src}
              alt={r.image.alt}
              caption={r.image.caption}
              aspect="aspect-[16/9]"
              wrapperClassName="rounded-lg overflow-hidden border border-border/60 bg-muted/30 max-w-3xl"
            />
          </section>
        )}

        {/* Key Concepts */}
        {r.keyConcepts.length > 0 && (
          <ModuleBlock heading={t("ipDetail.module.keyConcepts")}>
            <div className="grid gap-4 md:grid-cols-2">
              {r.keyConcepts.map((c, i) => (
                <div key={i} className="rounded-lg border border-border bg-card/40 p-4">
                  <h4 className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{c.title}</h4>
                  <p className="mt-2 text-sm text-foreground/90 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </ModuleBlock>
        )}

        {/* Protection */}
        <Module heading={t("ipDetail.module.protection")} body={r.protection} />

        {/* Registration / Filing */}
        <Module heading={t("ipDetail.module.registrationFiling")} body={r.registrationFiling} />

        {/* Classification */}
        {r.classification && r.classification.length > 0 ? (
          <ModuleBlock heading={t("ipDetail.module.classification")}>
            <div className="flex flex-wrap gap-2">
              {r.classification.map((c) => (
                <Link
                  key={c.slug}
                  to={`/research/classification/${c.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/8 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--color-accent)] hover:bg-[var(--color-accent)]/15"
                >
                  {c.name} <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </ModuleBlock>
        ) : (
          <ModuleBlock heading={t("ipDetail.module.classification")}>
            <p className="text-sm text-muted-foreground italic">{t("ipDetail.classificationNotApplicable")}</p>
          </ModuleBlock>
        )}

        {/* Nepal */}
        <ModuleBlock heading={t("ipDetail.module.nepal")}>
          <p className="text-sm text-foreground/90 leading-relaxed">{r.nepal.body}</p>
          <div className="mt-3">
            <StatusBadge status={r.nepal.verification as any} />
          </div>
        </ModuleBlock>

        {/* International Systems */}
        {r.internationalSystems.length > 0 && (
          <ModuleBlock heading={t("ipDetail.module.internationalSystems")}>
            <div className="grid gap-3 md:grid-cols-2">
              {r.internationalSystems.map((s, i) => (
                <div key={i} className="rounded-lg border border-border bg-card/40 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-display font-medium text-foreground">{s.name}</h4>
                    {s.slug && (
                      <Link
                        to={s.slug.startsWith("/") ? s.slug : `/research/treaty/${s.slug}`}
                        className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline"
                      >
                        {t("ipDetail.view")} <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </ModuleBlock>
        )}

        {/* Treaties */}
        {r.treaties.length > 0 && (
          <ModuleBlock heading={t("ipDetail.module.treaties")}>
            <ul className="divide-y divide-border/60 rounded-lg border border-border bg-card/40">
              {r.treaties.map((tr) => {
                const treaty = TREATIES.find((x) => x.slug === tr.slug);
                return (
                  <li key={tr.slug}>
                    <Link
                      to={`/research/treaty/${tr.slug}`}
                      className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/40 transition-colors"
                    >
                      <div className="min-w-0">
                        <div className="font-display font-medium text-foreground">{tr.name}</div>
                        {treaty && (
                          <div className="text-xs text-muted-foreground">
                            {treaty.subject} · {t("ipDetail.adopted")} {treaty.adoptionDate ?? "—"}
                          </div>
                        )}
                      </div>
                      <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </ModuleBlock>
        )}

        {/* Laws */}
        {r.laws && r.laws.length > 0 && (
          <ModuleBlock heading={t("ipDetail.module.laws")}>
            <ul className="divide-y divide-border/60 rounded-lg border border-border bg-card/40">
              {r.laws.map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.slug ? `/research/law/${l.slug}` : "/resources/professional/laws"}
                    className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/40 transition-colors"
                  >
                    <span className="font-display font-medium text-foreground">{l.name}</span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </ModuleBlock>
        )}

        {/* Offices */}
        {r.offices && r.offices.length > 0 && (
          <ModuleBlock heading={t("ipDetail.module.ipOffices")}>
            <ul className="divide-y divide-border/60 rounded-lg border border-border bg-card/40">
              {r.offices.map((o, i) => (
                <li key={i}>
                  <Link
                    to={o.slug ? `/research/office/${o.slug}` : "/resources/professional/offices"}
                    className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/40 transition-colors"
                  >
                    <span className="font-display font-medium text-foreground">{o.name}</span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </ModuleBlock>
        )}

        {/* Research */}
        {r.research.length > 0 && (
          <ModuleBlock heading={t("ipDetail.module.researchTopics")}>
            <div className="grid gap-3 md:grid-cols-2">
              {r.research.map((rs, i) => (
                <div key={i} className="rounded-lg border border-border bg-card/40 p-4">
                  <h4 className="font-display font-medium text-foreground">{rs.topic}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{rs.body}</p>
                </div>
              ))}
            </div>
          </ModuleBlock>
        )}

        {/* Publications */}
        {r.publications.length > 0 && (
          <ModuleBlock heading={t("ipDetail.module.publications")}>
            <ul className="divide-y divide-border/60 rounded-lg border border-border bg-card/40">
              {r.publications.map((p) => {
                const pub = PUBLICATIONS.find((x) => x.slug === p.slug);
                return (
                  <li key={p.slug}>
                    <Link
                      to={`/research/publication/${p.slug}`}
                      className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/40 transition-colors"
                    >
                      <div className="min-w-0">
                        <div className="font-display font-medium text-foreground">{p.title}</div>
                        {pub && (
                          <div className="text-xs text-muted-foreground">{pub.type}{pub.version ? ` · ${pub.version}` : ""}</div>
                        )}
                      </div>
                      <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </ModuleBlock>
        )}

        {/* Sources */}
        {r.sources.length > 0 && (
          <ModuleBlock heading={t("ipDetail.module.sources")}>
            <div className="grid gap-3 md:grid-cols-2">
              {r.sources.map((s) => {
                const src = SOURCES.find((x) => x.slug === s.slug);
                return (
                  <div key={s.slug} className="rounded-lg border border-border bg-card/40 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-display font-medium text-foreground text-sm">{s.name}</h4>
                      {src && <SourceBadge tier={src.tier} />}
                    </div>
                    {src && (
                      <>
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{src.description}</p>
                        {src.url && (
                          <a
                            href={src.url}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 inline-block font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline"
                          >
                            {t("ipDetail.officialSource")} →
                          </a>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </ModuleBlock>
        )}

        {/* Related Rights */}
        {r.relatedRights.length > 0 && (
          <ModuleBlock heading={t("ipDetail.module.relatedRights")}>
            <div className="flex flex-wrap gap-2">
              {r.relatedRights.map((rr) => (
                <Link
                  key={rr.slug}
                  to={`/ip-rights/${rr.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors"
                >
                  {rr.name} <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </ModuleBlock>
        )}

        {/* Consultation */}
        <ModuleBlock heading={t("ipDetail.module.consultation")}>
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-card/40 p-5">
            <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed">{r.consultation}</p>
            <Link
              to="/contact/consultation"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90"
            >
              {t("ipDetail.requestConsultation")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ModuleBlock>

        {/* Related content panel */}
        <RelatedContent
          groups={[
            { heading: t("ipDetail.relatedContent.treaties"), links: r.treaties.map((treaty) => ({ label: treaty.name, href: `/research/treaty/${treaty.slug}` })) },
            { heading: t("ipDetail.relatedContent.classifications"), links: (r.classification ?? []).map((c) => ({ label: c.name, href: `/research/classification/${c.slug}` })) },
            { heading: t("ipDetail.relatedContent.publications"), links: r.publications.map((p) => ({ label: p.title, href: `/research/publication/${p.slug}` })) },
            { heading: t("ipDetail.relatedContent.relatedRights"), links: r.relatedRights.map((rr) => ({ label: rr.name, href: `/ip-rights/${rr.slug}` })) },
            { heading: t("ipDetail.relatedContent.offices"), links: (r.offices ?? []).map((o) => ({ label: o.name, href: o.slug ? `/research/office/${o.slug}` : "/resources/professional/offices" })) },
          ]}
        />

        {/* AI Research */}
        <div className="mt-8">
          <Link
            to="/research/ai"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors"
          >
            <Compass className="h-4 w-4" /> {t("ipDetail.askAi")} {r.shortName}
          </Link>
        </div>

        {/* Prev / Next */}
        <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
          {prev ? (
            <Link to={`/ip-rights/${prev.slug}`} className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-[var(--color-accent)]">
              <ArrowLeft className="h-4 w-4" /> {prev.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/ip-rights/${next.slug}`} className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-[var(--color-accent)]">
              {next.name} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

function Module({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="mt-10 border-t border-border/60 pt-8">
      <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{heading}</h2>
      <p className="text-sm md:text-[15px] text-foreground/90 leading-[1.75] max-w-3xl">{body}</p>
    </section>
  );
}

function ModuleBlock({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 border-t border-border/60 pt-8">
      <h2 className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{heading}</h2>
      {children}
    </section>
  );
}
