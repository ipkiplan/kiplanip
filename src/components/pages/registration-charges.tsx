"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { ArrowRight, ExternalLink, AlertTriangle, Scale, FileText } from "lucide-react";

import { useTranslation } from "@/i18n/provider";
/**
 * IP Registration Charges page.
 *
 * Route: /resources/professional/registration-charges
 *
 * Reproduces Schedule 3 of The Patent, Design and Trade Mark Act, 2022 (1965)
 * faithfully and transparently. No secondary-source fees, no calculated totals,
 * no inferred amounts. Every figure comes directly from the statutory source.
 */
export function RegistrationChargesPage() {
  const { t } = useTranslation();
  // The source document and verification details.
  const SOURCE_TITLE = "The Patent, Design and Trade Mark Act, 2022 (1965)";
  const SOURCE_URL = "https://admin.theiguides.org/Media/Documents/PatentDesignTradeMarkAct1965_1.pdf";
  const SOURCE_REFERENCE = "www.lawcommission.gov.np";
  const SCHEDULE_3_PAGE = "PDF page 23 of 23";
  const SECTION_26A_PAGE = "PDF page 13 of 23";
  const ACCESSED_DATE = "20 September 2026";
  const GAZETTE_DATE = "2062.5.13";
  const COMMENCEMENT_DATE = "2062.6.1";

  // Schedule 3 fee rows — reproduced exactly from the source document.
  // Figures are in Nepalese Rupees (Rs) as written in the Act.
  const SCHEDULE_3_ROWS = [
    { sn: "1", details: "Application of Registration fees for the patents, Designs and Trade-marks", patent: "Rs 2,000/-", design: "Rs 1,000/-", trademark: "Rs 2,000/-" },
    { sn: "2", details: "Application Amendment fee", patent: "Rs 500/-", design: "Rs 500/-", trademark: "Rs 500/-" },
    { sn: "3", details: "Registration fee", patent: "Rs 10,000/-", design: "Rs 7,000/-", trademark: "Rs 5,000/-" },
    { sn: "4", details: "Transfer fee", patent: "Rs 5,000/-", design: "Rs 3,000/-", trademark: "Rs 2,000/-" },
    { sn: "5", details: "Endorsement fees for Amendment on record and Certification except transfer", patent: "Rs 2,000/-", design: "Rs 1,000/-", trademark: "Rs 1,000/-" },
    { sn: "6", details: "Fees for the information of registration details", patent: "Rs 750/-", design: "Rs 750/-", trademark: "Rs 500/-" },
    { sn: "7", details: "Fees for complain and objection", patent: "Rs 1,000/-", design: "Rs 1,000/-", trademark: "Rs 1,000/-" },
    { sn: "8", details: "Fees for the copy of the registration certificate", patent: "Rs 1,000/-", design: "Rs 1,000/-", trademark: "Rs 1,000/-" },
    { sn: "9(a)", details: "Renewal Fees — Annual rate for the first time", patent: "Rs 5,000/-", design: "Rs 1,000/-", trademark: "—" },
    { sn: "9(b)", details: "Renewal Fees — Annual rate for the second time", patent: "Rs 7,500/-", design: "Rs 2,000/-", trademark: "—" },
    { sn: "9(c)", details: "Renewal Fees — Annual rate for the Trade-mark each time", patent: "—", design: "—", trademark: "Rs 500/-" },
  ];

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[
          { label: t("breadcrumb.resources"), href: "/resources" },
          { label: t("breadcrumb.professional"), href: "/resources/professional" },
          { label: t("registrationCharges.breadcrumb") },
        ]} />
        <SectionHeader
          eyebrow={t("registrationCharges.eyebrow")}
          title={t("registrationCharges.title")}
          subtitle={t("registrationCharges.subtitle")}
        />

        {/* Short introductory explanation */}
        <div className="mt-8 max-w-3xl prose prose-sm text-foreground/90 leading-relaxed">
          <p>
            {t("registrationCharges.introPara1")}{" "}
            <strong>{SOURCE_TITLE}</strong>{t("registrationCharges.introPara1Strong")}
            {t("registrationCharges.introPara1Tail")}
          </p>
        </div>

        {/* === Statutory Fee Schedule — Schedule 3 === */}
        <div className="mt-10">
          <div className="mb-4 flex items-center gap-2">
            <Scale className="h-4 w-4 text-[var(--color-accent)]" />
            <h2 className="font-display text-xl font-medium text-foreground">
              {t("registrationCharges.scheduleHeading")}
            </h2>
          </div>
          <p className="mb-6 max-w-3xl text-sm text-muted-foreground leading-relaxed">
            {t("registrationCharges.scheduleIntro1")}{" "}
            <em>{SOURCE_TITLE}</em> ({SCHEDULE_3_PAGE}{t("registrationCharges.scheduleIntro1Tail")}
          </p>

          {/* Scrollable table container — allows horizontal scroll on mobile
              without breaking the page layout */}
          <div className="overflow-x-auto rounded-lg border border-border bg-card/40">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground w-12">
                    {t("registrationCharges.sn")}
                  </th>
                  <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {t("registrationCharges.detailsOfFees")}
                  </th>
                  <th className="px-4 py-3 text-right font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap">
                    {t("registrationCharges.patent")}
                  </th>
                  <th className="px-4 py-3 text-right font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap">
                    {t("registrationCharges.design")}
                  </th>
                  <th className="px-4 py-3 text-right font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground whitespace-nowrap">
                    {t("registrationCharges.tradeMark")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {SCHEDULE_3_ROWS.map((row) => (
                  <tr key={row.sn} className="hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 align-top font-mono text-xs text-muted-foreground">
                      {row.sn}
                    </td>
                    <td className="px-4 py-3 text-foreground/90">
                      {row.details}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-foreground/90 whitespace-nowrap">
                      {row.patent}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-foreground/90 whitespace-nowrap">
                      {row.design}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-foreground/90 whitespace-nowrap">
                      {row.trademark}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Schedule 3 commencement note */}
          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
            {t("registrationCharges.commencementNote")}{" "}
            <strong className="text-foreground/80">{COMMENCEMENT_DATE}</strong>{" "}
            {t("registrationCharges.commencementNoteTail")}{" "}
            <strong className="text-foreground/80">{GAZETTE_DATE}</strong>{" "}
            {t("registrationCharges.commencementNoteTail2")}
          </p>
        </div>

        {/* === Authority to Alter Fees — Section 26A === */}
        <div className="mt-10 rounded-lg border border-border bg-card/40 p-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="h-4 w-4 text-[var(--color-accent)]" />
            <h2 className="font-display text-lg font-medium text-foreground">
              {t("registrationCharges.section26AHeading")}
            </h2>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            {t("registrationCharges.section26ABody1")} {SOURCE_TITLE} ({SECTION_26A_PAGE} {t("registrationCharges.section26ABody1Tail")}
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {t("registrationCharges.section26ABody2")} <strong>{t("registrationCharges.section26ABody2Strong")}</strong>. {t("registrationCharges.section26ABody2Tail")}
          </p>
        </div>

        {/* === Source & Verification === */}
        <div className="mt-8 rounded-lg border border-border bg-card/40 p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-4 w-4 text-[var(--color-accent)]" />
            <h2 className="font-display text-lg font-medium text-foreground">
              {t("registrationCharges.sourceVerificationHeading")}
            </h2>
          </div>

          <dl className="space-y-3 text-sm">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:w-44 sm:flex-shrink-0 pt-0.5">
                {t("registrationCharges.sourceLabel")}
              </dt>
              <dd className="text-foreground/90">
                <em>{SOURCE_TITLE}</em>
              </dd>
            </div>

            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:w-44 sm:flex-shrink-0 pt-0.5">
                {t("registrationCharges.sourceLocationLabel")}
              </dt>
              <dd className="text-foreground/90">
                Schedule 3, {SCHEDULE_3_PAGE}
              </dd>
            </div>

            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:w-44 sm:flex-shrink-0 pt-0.5">
                {t("registrationCharges.relatedProvisionLabel")}
              </dt>
              <dd className="text-foreground/90">
                Section 26A, {SECTION_26A_PAGE}
              </dd>
            </div>

            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:w-44 sm:flex-shrink-0 pt-0.5">
                {t("registrationCharges.documentReferenceLabel")}
              </dt>
              <dd className="text-foreground/90">
                {SOURCE_REFERENCE}
              </dd>
            </div>

            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:w-44 sm:flex-shrink-0 pt-0.5">
                {t("registrationCharges.accessedVerifiedLabel")}
              </dt>
              <dd className="text-foreground/90">
                {ACCESSED_DATE}
              </dd>
            </div>

            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] sm:w-44 sm:flex-shrink-0 pt-0.5">
                {t("registrationCharges.sourceDocumentLabel")}
              </dt>
              <dd className="text-foreground/90">
                <a
                  href={SOURCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-accent)] hover:underline"
                >
                  {t("registrationCharges.viewSourceDocument")}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </dd>
            </div>
          </dl>

          <p className="mt-4 max-w-3xl text-xs text-muted-foreground leading-relaxed">
            {t("registrationCharges.sourceNote")} <strong>{SOURCE_REFERENCE}</strong> {t("registrationCharges.sourceNoteTail")}
          </p>
        </div>

        {/* === Important Legislative Note — Industrial Property Bill, 2082 === */}
        <div className="mt-8 rounded-lg border border-amber-600/30 bg-amber-50/60 dark:bg-amber-950/20 p-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="h-4 w-4 text-amber-700 dark:text-amber-300" />
            <h2 className="font-display text-lg font-medium text-foreground">
              {t("registrationCharges.legislativeNoteHeading")}
            </h2>
          </div>

          <p className="text-sm text-foreground/90 leading-relaxed">
            {t("registrationCharges.legislativeNoteBody1")} <strong>{t("registrationCharges.legislativeNoteBody1Strong")}</strong> {t("registrationCharges.legislativeNoteBody1Tail")}
          </p>

          <p className="mt-3 text-sm text-foreground/90 leading-relaxed">
            {t("registrationCharges.legislativeNoteBody2")}
          </p>

          <div className="mt-4 rounded-md border border-amber-600/40 bg-amber-100/40 dark:bg-amber-900/20 px-4 py-3">
            <p className="font-mono text-xs uppercase tracking-wider text-amber-800 dark:text-amber-200">
              <strong>{t("registrationCharges.legislativeNoteStatus")}</strong>
            </p>
          </div>

          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            <strong>{t("registrationCharges.legislativeNoteBody3Strong")}</strong> {t("registrationCharges.legislativeNoteBody3Tail")}
          </p>

          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            <strong>{t("registrationCharges.legislativeNoteBody4Strong")}</strong>
          </p>

          {/* Bill source — Federal Parliament of Nepal.
              No official Parliament Bill URL has been verified through available
              sources. Per the task instructions, we do not invent a URL. If the
              official Parliament record becomes available, a link should be
              added here. */}
        </div>

        {/* Secondary actions */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/resources/professional/laws"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors"
          >
            {t("registrationCharges.lawsLinkLabel")} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background"
          >
            {t("registrationCharges.contactKiplanIp")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
