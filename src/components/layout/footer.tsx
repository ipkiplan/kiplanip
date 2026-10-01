"use client";

import { type ReactNode } from "react";
import { Link } from "@/components/router/HashRouter";
import { useTranslation } from "@/i18n/provider";
import {
  ShieldCheck,
  FileWarning,
  Scale,
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  ChevronRight,
} from "lucide-react";

/* ============================================================
 *  KIPLAN IP — Footer
 *  Two-layer institutional footer:
 *    LAYER 1 — Main KIPLAN IP navigation (6 columns)
 *    LAYER 2 — Institutional / Contact container
 *              (parent organisation, contact info, KIPLAN family)
 *  Bottom  — Legal utility bar + copyright
 *
 *  Visual system: warm ivory / deep ink / amber palette,
 *  Playfair Display + Inter + Geist Mono, hairline borders.
 * ============================================================ */

interface FooterLink {
  labelKey: string;  // i18n key for the display label
  href: string;
}
interface FooterGroup {
  headingKey: string;  // i18n key for the column heading
  links: FooterLink[];
}

// LAYER 1 — main navigation columns.
// All routes verified against src/components/router/RouteRenderer.tsx.
// Each entry references a translation key — the actual label is resolved
// at render time via `t(labelKey)`, so the footer is fully localized.
const COLUMNS: FooterGroup[] = [
  {
    headingKey: "footer.kiplanIp",
    links: [
      { labelKey: "nav.kiplanIp", href: "/about/kiplan-ip" },
      { labelKey: "footer.research", href: "/resources/professional/research" },
      { labelKey: "footer.knowledge", href: "/resources/general/ip-basics" },
      { labelKey: "footer.nepalInternational", href: "/resources/professional/international-ip" },
    ],
  },
  {
    headingKey: "footer.ipRights",
    links: [
      { labelKey: "nav.trademarks", href: "/ip-rights/trademarks" },
      { labelKey: "nav.patents", href: "/ip-rights/patents" },
      { labelKey: "nav.industrialDesigns", href: "/ip-rights/industrial-designs" },
      { labelKey: "nav.copyright", href: "/ip-rights/copyright" },
      { labelKey: "nav.tradeSecrets", href: "/ip-rights/trade-secrets" },
      { labelKey: "nav.geographicalIndications", href: "/ip-rights/geographical-indications" },
      { labelKey: "nav.domainOnlineIp", href: "/ip-rights/domain-online-ip" },
      { labelKey: "nav.ipPortfolio", href: "/ip-rights/ip-portfolio" },
    ],
  },
  {
    headingKey: "footer.resources",
    links: [
      { labelKey: "nav.ipBasics", href: "/resources/general/ip-basics" },
      { labelKey: "nav.ipDictionary", href: "/resources/general/dictionary" },
      { labelKey: "nav.faqs", href: "/resources/general/faqs" },
      { labelKey: "nav.guides", href: "/resources/general/guides" },
      { labelKey: "nav.researchCentre", href: "/resources/professional/research" },
      { labelKey: "nav.laws", href: "/resources/professional/laws" },
      { labelKey: "nav.treaties", href: "/resources/professional/treaties" },
      { labelKey: "nav.classifications", href: "/resources/professional/classifications" },
      { labelKey: "nav.countryParticipation", href: "/resources/professional/country-participation" },
      { labelKey: "nav.ipOffices", href: "/resources/professional/offices" },
    ],
  },
  {
    headingKey: "footer.publications",
    links: [
      { labelKey: "nav.researchPapers", href: "/publications/research-papers" },
      { labelKey: "nav.draftPapers", href: "/publications/draft-papers" },
      { labelKey: "nav.workingPapers", href: "/publications/working-papers" },
      { labelKey: "nav.researchNotes", href: "/publications/research-notes" },
      { labelKey: "nav.ipUpdates", href: "/publications/ip-updates" },
    ],
  },
  {
    headingKey: "footer.about",
    links: [
      { labelKey: "nav.kiplanIp", href: "/about/kiplan-ip" },
      { labelKey: "nav.kiplanLawFirm", href: "/about/kiplan-law-firm" },
      { labelKey: "nav.team", href: "/about/team" },
      { labelKey: "nav.philosophy", href: "/about/philosophy" },
      { labelKey: "nav.researchPhilosophy", href: "/about/research-philosophy" },
    ],
  },
  {
    headingKey: "footer.contact",
    links: [
      { labelKey: "footer.getInTouch", href: "/contact" },
      { labelKey: "nav.consultation", href: "/contact/consultation" },
      { labelKey: "nav.ipInquiry", href: "/contact/ip-inquiry" },
      { labelKey: "nav.researchInquiry", href: "/contact/research-inquiry" },
      { labelKey: "nav.generalContact", href: "/contact/general" },
    ],
  },
];

// Resources — split into two quiet groups (LEARN / RESEARCH & DATA) for
// visual sub-organisation within the Resources column. Same routes.
const RESOURCES_GROUPS: { labelKey: string; links: FooterLink[] }[] = [
  {
    labelKey: "footer.learn",
    links: [
      { labelKey: "nav.ipBasics", href: "/resources/general/ip-basics" },
      { labelKey: "nav.ipDictionary", href: "/resources/general/dictionary" },
      { labelKey: "nav.faqs", href: "/resources/general/faqs" },
      { labelKey: "nav.guides", href: "/resources/general/guides" },
    ],
  },
  {
    labelKey: "footer.researchData",
    links: [
      { labelKey: "nav.researchCentre", href: "/resources/professional/research" },
      { labelKey: "nav.laws", href: "/resources/professional/laws" },
      { labelKey: "nav.treaties", href: "/resources/professional/treaties" },
      { labelKey: "nav.classifications", href: "/resources/professional/classifications" },
      { labelKey: "nav.countryParticipation", href: "/resources/professional/country-participation" },
      { labelKey: "nav.ipOffices", href: "/resources/professional/offices" },
    ],
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { labelKey: "footer.privacy", href: "/legal/privacy" },
  { labelKey: "footer.terms", href: "/legal/terms" },
  { labelKey: "footer.disclaimerLink", href: "/legal/disclaimer" },
  { labelKey: "footer.copyright", href: "/legal/copyright" },
  { labelKey: "footer.accessibility", href: "/legal/accessibility" },
  { labelKey: "footer.sitemap", href: "/legal/sitemap" },
];

// Verified contact information — Civil Trade Centre, Kathmandu.
const CONTACT = {
  address: "Civil Trade Centre (CTC) Mall, 4th Floor, Suite 525, Sundhara, Kathmandu, Nepal",
  phones: ["+977-01-5312040", "+977-9849530970"],
  email: "ipkiplan@gmail.com",
  hours: "Sunday – Friday · 9:30 AM – 5:30 PM",
};

export function Footer() {
  const { t } = useTranslation();
  const LEGAL_LINKS_LOCAL: FooterLink[] = [
    { label: t("footer.privacy"), href: "/legal/privacy" },
    { label: t("footer.terms"), href: "/legal/terms" },
    { label: t("footer.disclaimerLink"), href: "/legal/disclaimer" },
    { label: t("footer.copyright"), href: "/legal/copyright" },
    { label: t("footer.accessibility"), href: "/legal/accessibility" },
    { label: t("footer.sitemap"), href: "/legal/sitemap" },
  ];
  return (
    <footer className="mt-auto border-t border-border bg-card/30">
      {/* ============== LAYER 1 — Main KIPLAN IP navigation ============== */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Institutional identity line — KIPLAN IP column heading,
            with the division relationship stated clearly. */}
        <div className="mb-10 max-w-3xl">
          <div className="font-display text-2xl font-medium tracking-tight text-foreground">
            KIPLAN <span className="text-[var(--color-accent)]">IP</span>
          </div>
          <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
            {t("footer.intellectualProperty")} · {t("footer.knowledge")} · {t("footer.research")}
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-pretty">
            {t("footer.divisionStatement")}
          </p>
          <p className="mt-2 text-xs text-muted-foreground/80 leading-relaxed max-w-2xl">
            {t("footer.institutionalStatement")}
          </p>
        </div>

        {/* Six-column navigation grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {/* KIPLAN IP column — smaller; identity already stated above. */}
          <nav aria-label={t("footer.kiplanIp")} className="footer-nav-col">
            <h3 className="footer-col-heading">{t(COLUMNS[0].headingKey)}</h3>
            <ul className="footer-link-list">
              {COLUMNS[0].links.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="footer-link">{t(l.labelKey)}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* IP Rights column */}
          <nav aria-label={t("footer.ipRights")} className="footer-nav-col">
            <h3 className="footer-col-heading">{t(COLUMNS[1].headingKey)}</h3>
            <ul className="footer-link-list">
              {COLUMNS[1].links.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="footer-link">{t(l.labelKey)}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources column — split into Learn / Research & Data sub-groups */}
          <nav aria-label={t("footer.resources")} className="footer-nav-col">
            <h3 className="footer-col-heading">{t(COLUMNS[2].headingKey)}</h3>
            {RESOURCES_GROUPS.map((grp) => (
              <div key={grp.labelKey} className="mb-4 last:mb-0">
                <div className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/70">
                  {t(grp.labelKey)}
                </div>
                <ul className="footer-link-list">
                  {grp.links.map((l) => (
                    <li key={l.href}>
                      <Link to={l.href} className="footer-link">{t(l.labelKey)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Publications column */}
          <nav aria-label={t("footer.publications")} className="footer-nav-col">
            <h3 className="footer-col-heading">{t(COLUMNS[3].headingKey)}</h3>
            <ul className="footer-link-list">
              {COLUMNS[3].links.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="footer-link">{t(l.labelKey)}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* About column — with parent / division hierarchy note */}
          <nav aria-label={t("footer.about")} className="footer-nav-col">
            <h3 className="footer-col-heading">{t(COLUMNS[4].headingKey)}</h3>
            <ul className="footer-link-list">
              {COLUMNS[4].links.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="footer-link">{t(l.labelKey)}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 rounded-md border border-border/60 bg-background/40 px-2.5 py-2">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70">
                {t("footer.hierarchy")}
              </div>
              <div className="mt-1 text-[11px] leading-snug text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Building2 className="h-3 w-3 text-[var(--color-accent)]/70" aria-hidden="true" />
                  <span>{t("footer.kiplanLawFirm")}</span>
                </div>
                <div className="ml-1.5 mt-0.5 flex items-center gap-1 text-muted-foreground/80">
                  <ChevronRight className="h-2.5 w-2.5" aria-hidden="true" />
                  <span>{t("footer.kiplanIp")} <span className="text-muted-foreground/60">({t("footer.ipDivisionShort")})</span></span>
                </div>
              </div>
            </div>
          </nav>

          {/* Contact column */}
          <nav aria-label={t("footer.contact")} className="footer-nav-col">
            <h3 className="footer-col-heading">{t(COLUMNS[5].headingKey)}</h3>
            <ul className="footer-link-list">
              {COLUMNS[5].links.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="footer-link">{t(l.labelKey)}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ============== LAYER 2 — Institutional / Contact container ==============
          Wrapped in a very light blue / blue-gray "institutional band" —
          visually distinct from the main footer navigation above and the
          legal utility bar below. The band is intentionally restrained:
          a subtle blue-gray wash + hairline top/bottom borders. It reads
          as an institutional information band, not a marketing banner. */}
      <div className="kiplan-institutional-band">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3 lg:gap-12">
            {/* Institutional statement */}
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                KIPLAN
              </div>
              <div className="space-y-1.5 text-sm leading-relaxed text-foreground">
                <div className="font-display text-base font-medium text-foreground/90">
                  {t("footer.kiplanLawFirm")}
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {t("footer.parentOrganisationShort")}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <ChevronRight className="h-3 w-3 text-[var(--color-accent)]/60" aria-hidden="true" />
                  <span className="font-display text-base font-medium text-foreground/90">{t("footer.kiplanIp")}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {t("footer.ipDivisionShort")}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed max-w-sm">
                {t("footer.divisionStatement")}
              </p>
            </div>

            {/* Contact KIPLAN — verified institutional contact */}
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                {t("footer.contactKiplan")}
              </div>
              <ul className="space-y-2.5 text-[13px] text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--color-accent)]/70" aria-hidden="true" />
                  <span>{t("footer.contactAddress")}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--color-accent)]/70" aria-hidden="true" />
                  <span className="flex flex-wrap gap-x-2 gap-y-0.5">
                    {CONTACT.phones.map((p, i) => (
                      <span key={p}>
                        <a href={`tel:${p.replace(/[^+\d]/g, "")}`} className="hover:text-foreground transition-colors">
                          {p}
                        </a>
                        {i < CONTACT.phones.length - 1 && <span className="mx-1 text-muted-foreground/40">·</span>}
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--color-accent)]/70" aria-hidden="true" />
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground transition-colors">
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--color-accent)]/70" aria-hidden="true" />
                  <span>{t("footer.contactHours")}</span>
                </li>
              </ul>
            </div>

            {/* KIPLAN Family / Related properties */}
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                {t("footer.kiplanFamily")}
              </div>
              <p className="mb-3 text-xs text-muted-foreground/80 leading-relaxed">
                {t("footer.relatedProperties")}
              </p>
              <ul className="space-y-1.5 text-[13px]">
                <li>
                  <Link to="/about/kiplan-law-firm" className="footer-link">
                    {t("footer.kiplanLawFirm")}
                  </Link>
                </li>
                <li>
                  <Link to="/about/kiplan-ip" className="footer-link">
                    {t("footer.kiplanIp")}
                  </Link>
                </li>
                {/* KIPLAN Notary and KIPLAN Scholar — internal institutional
                    pages on this platform. Each links to its /about/kiplan-*
                    page, which in turn directs visitors to the external
                    website (where the URL is confirmed). */}
                <li>
                  <Link to="/about/kiplan-notary" className="footer-link">
                    KIPLAN Notary
                  </Link>
                </li>
                <li>
                  <Link to="/about/kiplan-scholar" className="footer-link">
                    KIPLAN Scholar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ============== DEEP-BLUE LEGAL CONTAINER ==============
          One cohesive deep-blue section holding ALL legal utility
          content: the 6 legal links, the copyright line, and the full
          disclaimer paragraph. This is the ONLY place these appear in
          the footer — no duplicate legal content elsewhere.

          Visually distinct from the light-blue institutional band
          above, but part of the same footer. */}
      <div className="kiplan-legal-band">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Legal utility links + copyright row */}
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <nav aria-label="Legal">
              <ul className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[10px] uppercase tracking-wider">
                {LEGAL_LINKS_LOCAL.map((l, i) => (
                  <li key={l.href} className="flex items-center gap-4">
                    <Link to={l.href}>
                      {l.label}
                    </Link>
                    {i < LEGAL_LINKS_LOCAL.length - 1 && (
                      <span className="kiplan-legal-sep" aria-hidden="true">·</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <p className="font-mono text-[10px] uppercase tracking-wider opacity-80">
              © {new Date().getFullYear()} {t("footer.copyrightText")}
            </p>
          </div>

          {/* Full disclaimer paragraph — same content, sized for readability
              on the deep background. Not excessively small. */}
          <p className="mt-6 max-w-4xl text-xs leading-relaxed opacity-75">
            <strong className="font-medium opacity-100">{t("footer.disclaimer")}</strong> {t("footer.disclaimerBody")}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
 *  Disclaimer section — used on the Home page above the footer
 *  (preserved from prior implementation; not part of the
 *  footer component itself, but kept here for cohesion).
 * ============================================================ */
export function Disclaimer() {
  const { t } = useTranslation();
  const items: { icon: ReactNode; label: string; body: string }[] = [
    {
      icon: <Scale className="h-4 w-4" />,
      label: t("disclaimer.generalInfo.label"),
      body: t("disclaimer.generalInfo.body"),
    },
    {
      icon: <FileWarning className="h-4 w-4" />,
      label: t("disclaimer.verify.label"),
      body: t("disclaimer.verify.body"),
    },
    {
      icon: <ShieldCheck className="h-4 w-4" />,
      label: t("disclaimer.ai.label"),
      body: t("disclaimer.ai.body"),
    },
  ];
  return (
    <section aria-label="Disclaimer" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-0.5 text-[var(--color-accent)]">{it.icon}</div>
              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">{it.label}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
