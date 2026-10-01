"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { VerificationNotice } from "@/components/kiplan/related-content";
import { KiplanImage } from "@/components/kiplan/kiplan-image";
import { useTranslation } from "@/i18n/provider";
import { ArrowRight, ExternalLink, Building2, ChevronRight } from "lucide-react";

export function AboutLanding() {
  const { t } = useTranslation();
  const cards = [
    { label: "KIPLAN IP", href: "/about/kiplan-ip", body: t("about.kiplanIpCard") },
    { label: "KIPLAN Law Firm", href: "/about/kiplan-law-firm", body: t("about.kiplanLawFirmCard") },
    { label: t("nav.team"), href: "/about/team", body: t("about.teamCard") },
    { label: t("nav.philosophy"), href: "/about/philosophy", body: t("about.philosophyCard") },
    { label: t("nav.researchPhilosophy"), href: "/about/research-philosophy", body: t("about.researchPhilosophyCard") },
  ];
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.about") }]} />
        <SectionHeader eyebrow={t("about.eyebrow")} title={t("about.landingTitle")} subtitle={t("about.landingSubtitle")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link key={c.href} to={c.href} className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 card-hover-lift hover:border-[var(--color-accent)]/40">
              <h3 className="font-display text-lg font-medium text-foreground">{c.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">{t("about.open")} <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function KIPLANIPPage() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-4xl">
        <Breadcrumbs items={[{ label: t("breadcrumb.about"), href: "/about" }, { label: "KIPLAN IP" }]} />
        <SectionHeader eyebrow={t("about.eyebrow")} title="KIPLAN IP" subtitle={t("about.kiplanIpSubtitle")} />
        <div className="mt-8 prose prose-sm max-w-none text-foreground/90 leading-relaxed">
          <p>{t("about.kiplanIpPara1")}</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("about.positioningHeading")}</h3>
          <p className="mt-2">{t("about.positioningPara")}</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("about.relationshipHeading")}</h3>
          <p className="mt-2">{t("about.relationshipPara")}</p>
        </div>
        <div className="mt-8"><VerificationNotice body={t("about.kiplanIpVerification")} /></div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/about/kiplan-law-firm" className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background">{t("about.aboutKiplanLawFirm")} <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/about/research-philosophy" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-[var(--color-accent)]">{t("about.researchPhilosophyLink")} <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function KIPLANLawFirmPage() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-4xl">
        <Breadcrumbs items={[{ label: t("breadcrumb.about"), href: "/about" }, { label: "KIPLAN Law Firm" }]} />
        <SectionHeader eyebrow={t("about.eyebrow")} title="KIPLAN Law Firm" subtitle={t("about.kiplanLawFirmSubtitle")} />
        <div className="mt-8 prose prose-sm max-w-none text-foreground/90 leading-relaxed">
          <p>{t("about.kiplanLawFirmPara1")}</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("about.lawFirmRelationshipHeading")}</h3>
          <p className="mt-2">{t("about.lawFirmRelationshipPara")}</p>
        </div>
        <div className="mt-8"><VerificationNotice body={t("about.lawFirmVerification")} /></div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/about/team" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]">{t("about.viewTeam")} <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background">{t("about.contact")} <ArrowRight className="h-4 w-4" /></Link>
          <a
            href="https://kiplanlaw.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors"
          >
            Visit KIPLAN Law Firm <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function TeamPage() {
  const { t } = useTranslation();
  const roles = [
    { role: t("team.role.ipPracticeLead"), body: t("team.role.ipPracticeLeadBody") },
    { role: t("team.role.researchLead"), body: t("team.role.researchLeadBody") },
    { role: t("team.role.internationalIpSpecialist"), body: t("team.role.internationalIpSpecialistBody") },
    { role: t("team.role.nepalIpSpecialist"), body: t("team.role.nepalIpSpecialistBody") },
    { role: t("team.role.aiResearchEditor"), body: t("team.role.aiResearchEditorBody") },
    { role: t("team.role.knowledgeManager"), body: t("team.role.knowledgeManagerBody") },
  ];
  // Authentic KIPLAN professional portraits. Per spec §359, no fabricated credentials
  // are attached — full biographies, bar admissions, education and prior experience
  // remain marked "Verification required" until authoritative corroboration is supplied.
  const practitioners = [
    {
      src: "/image/Adv kamal(1).webp",
      alt: "A male practitioner wearing glasses, a black suit jacket and a white shirt, standing against a dark blue background patterned with the repeating text KIPLAN LAW.",
      name: "Kamal Khadka",
      designation: "Advocate · Notary Public · IP Practitioner",
      license: "Advocate License No. 4039/1993 · Notary Public License No. 170/2007",
      education: "LLM · Tribhuvan University · MA-HRM, UoC Canberra, Aus.",
      memberships: "Member: Nepal Bar Council, Nepal Notary Public Association, MAN",
      source: "https://kamalkhadka.vercel.app",
    },
    {
      src: "/image/Adv-r-sharma.png",
      alt: "Adv. R. Sharma — professional portrait of a male practitioner in formal attire.",
    },
  ];
  // Professional & Administrative Team — named individuals with roles, qualifications, and photographs.
  const professionalAdmin = [
    { name: "Ghanashyam Katuwal", role: "Admin Officer", qualifications: "MPA (TU)", image: "/image/ghanashyam-katuwal.jpeg", imageAlt: "Ghanashyam Katuwal — Admin Officer." },
    { name: "Rima Khadka", role: "Administrative Assistant", qualifications: "BA — PSG (TU)", image: "/image/Rima-khadka.jpg", imageAlt: "Rima Khadka — Administrative Assistant." },
    { name: "Bimala Shahi", role: "Office Assistant", qualifications: "Intermediate (CTEVT)", image: "/image/Bimala-Shahi.jpg", imageAlt: "Bimala Shahi — Office Assistant." },
    { name: "Engr. Add News Jha", role: "Engr. / Web Developer", qualifications: "", image: "/image/Engg-news-jha.png", imageAlt: "Engr. Add News Jha — Engr. / Web Developer." },
  ];
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.about"), href: "/about" }, { label: t("breadcrumb.team") }]} />
        <SectionHeader eyebrow={t("breadcrumb.about")} title={t("team.title")} subtitle={t("team.subtitle")} />
        <div className="mt-8"><VerificationNotice body={t("team.verificationBody")} /></div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{t("team.role")} {String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-1 font-display text-lg font-medium text-foreground">{r.role}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("common.informationNotVerified")}</div>
            </div>
          ))}
        </div>

        {/* Practitioners — authentic portraits, credentials verification-pending */}
        <section className="mt-12 border-t border-border/60 pt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-display text-xl font-medium text-foreground">{t("common.practitioners")}</h2>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{t("common.credentialsPending")}</span>
          </div>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground leading-relaxed">
            {t("team.practitionersIntro")}
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-3xl">
            {practitioners.map((p, i) => (
              <div key={i} className="rounded-lg border border-border bg-card overflow-hidden">
                <KiplanImage
                  src={p.src}
                  alt={p.alt}
                  aspect="aspect-[4/5]"
                  wrapperClassName="rounded-none border-0 bg-muted/30"
                  loading="lazy"
                />
                <div className="p-4">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                    {t("team.practitioner")} {String(i + 1).padStart(2, "0")}
                  </div>
                  {p.name ? (
                    <>
                      <div className="mt-1 font-display text-base font-medium text-foreground">{p.name}</div>
                      <div className="mt-1 text-xs text-foreground/80 leading-relaxed font-medium">{p.designation}</div>
                      <div className="mt-2 space-y-1 text-xs text-muted-foreground leading-relaxed">
                        {p.license && <div>{p.license}</div>}
                        {p.education && <div>{p.education}</div>}
                        {p.memberships && <div>{p.memberships}</div>}
                      </div>
                      {p.source && (
                        <a href={p.source} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">
                          {t("team.source")} <ArrowRight className="h-3 w-3" />
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="mt-1 font-display text-base font-medium text-foreground">{t("team.namePending")}</div>
                      <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {t("team.rolePending")}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional & Administrative Team */}
        <section className="mt-12 border-t border-border/60 pt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-display text-xl font-medium text-foreground">{t("common.profAdminTeam")}</h2>
          </div>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground leading-relaxed">
            {t("common.profAdminDesc")}
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {professionalAdmin.map((m, i) => (
              <div key={i} className="rounded-lg border border-border bg-card overflow-hidden">
                {m.image && (
                  <KiplanImage
                    src={m.image}
                    alt={m.imageAlt || m.name}
                    aspect="aspect-[4/5]"
                    wrapperClassName="rounded-none border-0 bg-muted/30"
                    loading="lazy"
                  />
                )}
                <div className="p-4">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-1.5 font-display text-base font-medium text-foreground leading-tight">{m.name}</h3>
                  <div className="mt-1 text-sm text-foreground/90 font-medium">{m.role}</div>
                  {m.qualifications && (
                    <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{m.qualifications}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionShell>
    </MotionSection>
  );
}

export function PhilosophyPage() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-4xl">
        <Breadcrumbs items={[{ label: t("breadcrumb.about"), href: "/about" }, { label: t("nav.philosophy") }]} />
        <SectionHeader eyebrow={t("about.eyebrow")} title={t("nav.philosophy")} subtitle={t("philosophy.subtitle")} />
        <div className="mt-8 prose prose-sm max-w-none text-foreground/90 leading-relaxed">
          <p>{t("philosophy.intro")}</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("philosophy.sourceFirst.heading")}</h3>
          <p className="mt-2">{t("philosophy.sourceFirst.body")}</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("philosophy.honesty.heading")}</h3>
          <p className="mt-2">{t("philosophy.honesty.body")}</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("philosophy.ai.heading")}</h3>
          <p className="mt-2">{t("philosophy.ai.body")}</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("philosophy.jurisdiction.heading")}</h3>
          <p className="mt-2">{t("philosophy.jurisdiction.body")}</p>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function ResearchPhilosophyPage() {
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-4xl">
        <Breadcrumbs items={[{ label: t("breadcrumb.about"), href: "/about" }, { label: t("nav.researchPhilosophy") }]} />
        <SectionHeader eyebrow={t("about.eyebrow")} title={t("nav.researchPhilosophy")} subtitle={t("researchPhilosophy.subtitle")} />
        <div className="mt-8 prose prose-sm max-w-none text-foreground/90 leading-relaxed">
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("researchPhilosophy.section1.heading")}</h3>
          <p className="mt-2">{t("researchPhilosophy.section1.body")}</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("researchPhilosophy.section2.heading")}</h3>
          <p className="mt-2">{t("researchPhilosophy.section2.body")}</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("researchPhilosophy.section3.heading")}</h3>
          <p className="mt-2">{t("researchPhilosophy.section3.body")}</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("researchPhilosophy.section4.heading")}</h3>
          <p className="mt-2">{t("researchPhilosophy.section4.body")}</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("researchPhilosophy.section5.heading")}</h3>
          <p className="mt-2">{t("researchPhilosophy.section5.body")}</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("researchPhilosophy.section6.heading")}</h3>
          <p className="mt-2">{t("researchPhilosophy.section6.body")}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/resources/professional/sources" className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background">{t("nav.sourceLibrary")} <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/research/ai" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]">{t("hero.aiResearchInterface")} <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

/* ============================================================
 *  KIPLAN Family — shared hierarchy panel
 *  Used on the KIPLAN Notary and KIPLAN Scholar pages to show
 *  the institutional structure consistently. Highlights the
 *  current page's position within the wider KIPLAN ecosystem.
 * ============================================================ */
function KiplanFamilyHierarchy({ current }: { current: "kiplan-notary" | "kiplan-scholar" }) {
  const { t } = useTranslation();
  const rows: { label: string; role: string; href?: string; isCurrent?: boolean }[] = [
    { label: t("footer.kiplanLawFirm"), role: t("footer.parentOrganisation"), href: "/about/kiplan-law-firm" },
    { label: t("footer.kiplanIp"), role: t("footer.ipDivision"), href: "/about/kiplan-ip" },
    { label: "KIPLAN Notary", role: t("kiplanFamily.notaryDivision"), href: current === "kiplan-notary" ? undefined : "/about/kiplan-notary", isCurrent: current === "kiplan-notary" },
    { label: "KIPLAN Scholar", role: t("kiplanFamily.educationResearch"), href: current === "kiplan-scholar" ? undefined : "/about/kiplan-scholar", isCurrent: current === "kiplan-scholar" },
  ];
  return (
    <div className="rounded-lg border border-border bg-card/40 p-5">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3">
        {t("kiplanFamily.eyebrow")}
      </div>
      <ul className="space-y-2">
        {rows.map((r, i) => (
          <li key={r.label} className="flex items-start gap-2.5">
            {i > 0 && <ChevronRight className="mt-0.5 h-3 w-3 flex-shrink-0 text-[var(--color-accent)]/50" aria-hidden="true" />}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-2">
                {r.isCurrent ? (
                  <span className="font-display text-sm font-medium text-foreground">{r.label}</span>
                ) : r.href ? (
                  <Link to={r.href} className="font-display text-sm font-medium text-foreground hover:text-[var(--color-accent)] transition-colors">
                    {r.label}
                  </Link>
                ) : (
                  <span className="font-display text-sm font-medium text-foreground">{r.label}</span>
                )}
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{r.role}</span>
                {r.isCurrent && (
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-1.5 py-0.5 rounded">
                    {t("pathbar.youAreHere")}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
 *  KIPLAN Notary — institutional information page
 *  Route: /about/kiplan-notary
 *  Purpose: introduces KIPLAN Notary as the Notary Division of
 *  KIPLAN Law Firm and directs visitors to its external website.
 *  Does NOT duplicate the external Notary website's content.
 * ============================================================ */
export function KIPLANNotaryPage() {
  // Confirmed external URL for KIPLAN Notary.
  const NOTARY_URL = "https://kiplannotary.vercel.app";
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-4xl">
        <Breadcrumbs items={[{ label: t("breadcrumb.about"), href: "/about" }, { label: t("kiplanNotary.title") }]} />
        <SectionHeader
          eyebrow={t("about.eyebrow")}
          title={t("kiplanNotary.title")}
          subtitle={t("kiplanNotary.subtitle")}
        />

        <div className="mt-8 prose prose-sm max-w-none text-foreground/90 leading-relaxed">
          <p>{t("kiplanNotary.intro")}</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("kiplanNotary.rolePurposeHeading")}</h3>
          <p className="mt-2">{t("kiplanNotary.rolePurposeBody")}</p>
        </div>

        <div className="mt-8"><KiplanFamilyHierarchy current="kiplan-notary" /></div>

        <div className="mt-8"><VerificationNotice body={t("kiplanNotary.verificationBody")} /></div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={NOTARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            {t("kiplanNotary.visitCta")}
            <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            to="/about/kiplan-law-firm"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors"
          >
            {t("kiplanNotary.aboutLawFirmCta")} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-[var(--color-accent)] transition-colors"
          >
            {t("kiplanNotary.aboutKiplanCta")} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

/* ============================================================
 *  KIPLAN Scholar — institutional information page
 *  Route: /about/kiplan-scholar
 *  Purpose: introduces KIPLAN Scholar as an Education &
 *  Research Platform within the wider KIPLAN institutional
 *  structure, associated with KIPLAN Law Firm.
 *
 *  The KIPLAN Scholar website URL is confirmed as
 *  https://kiplanscholar.com and renders as an active external
 *  link via the SCHOLAR_URL constant below.
 * ============================================================ */
export function KIPLANScholarPage() {
  // Confirmed external URL for KIPLAN Scholar.
  const SCHOLAR_URL: string | null = "https://kiplanscholar.com";
  const { t } = useTranslation();
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-4xl">
        <Breadcrumbs items={[{ label: t("breadcrumb.about"), href: "/about" }, { label: t("kiplanScholar.title") }]} />
        <SectionHeader
          eyebrow={t("about.eyebrow")}
          title={t("kiplanScholar.title")}
          subtitle={t("kiplanScholar.subtitle")}
        />

        <div className="mt-8 prose prose-sm max-w-none text-foreground/90 leading-relaxed">
          <p>{t("kiplanScholar.intro")}</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">{t("kiplanScholar.rolePurposeHeading")}</h3>
          <p className="mt-2">{t("kiplanScholar.rolePurposeBody")}</p>
        </div>

        <div className="mt-8"><KiplanFamilyHierarchy current="kiplan-scholar" /></div>

        <div className="mt-8"><VerificationNotice body={t("kiplanScholar.verificationBody")} /></div>

        <div className="mt-8 flex flex-wrap gap-3">
          {SCHOLAR_URL ? (
            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              {t("kiplanScholar.visitCta")}
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <div
              role="status"
              aria-label={t("kiplanScholar.urlStatusAriaLabel")}
              className="inline-flex items-center gap-2.5 rounded-md border border-border bg-card/40 px-4 py-2 text-sm"
            >
              <ExternalLink className="h-4 w-4 text-[var(--color-accent)]/60" aria-hidden="true" />
              <span className="text-muted-foreground">
                {t("kiplanScholar.websiteLabel")}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                {t("kiplanScholar.urlToBeConfirmed")}
              </span>
            </div>
          )}
          <Link
            to="/about/kiplan-law-firm"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors"
          >
            {t("kiplanNotary.aboutLawFirmCta")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
