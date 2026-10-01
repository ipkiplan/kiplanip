"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { VerificationNotice } from "@/components/kiplan/related-content";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

const INQUIRY_TYPES = [
  { value: "trademark", label: "contact.form.trademark" },
  { value: "patent", label: "contact.form.patent" },
  { value: "design", label: "contact.form.design" },
  { value: "copyright", label: "contact.form.copyright" },
  { value: "trade-secret", label: "contact.form.tradeSecret" },
  { value: "gi", label: "contact.form.gi" },
  { value: "domain", label: "contact.form.domain" },
  { value: "portfolio", label: "contact.form.portfolio" },
  { value: "other", label: "contact.form.other" },
];

export function ContactLanding() {
  const { t } = useTranslation();
  const cards = [
    { label: t("contact.consultation"), href: "/contact/consultation", body: t("contact.consultationCard") },
    { label: t("contact.ipInquiry"), href: "/contact/ip-inquiry", body: t("contact.ipInquiryCard") },
    { label: t("contact.researchInquiry"), href: "/contact/research-inquiry", body: t("contact.researchInquiryCard") },
    { label: t("contact.generalContact"), href: "/contact/general", body: t("contact.generalContactCard") },
  ];
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.contact") }]} />
        <SectionHeader eyebrow={t("contact.landingEyebrow")} title={t("contact.landingTitle")} subtitle={t("contact.landingSubtitle")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <Link key={c.href} to={c.href} className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
              <h3 className="font-display text-lg font-medium text-foreground">{c.label}</h3>
              <p className="text-sm text-muted-foreground">{c.body}</p>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">{t("ui.open")} <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-border bg-card/40 p-6">
          <h3 className="font-display text-lg font-medium text-foreground">{t("contact.kathmanduHeading")}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t("contact.kathmanduBody")}</p>
          <div className="mt-4"><VerificationNotice body={t("contact.contactVerification")} /></div>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

interface FormConfig {
  titleKey: string;
  eyebrowKey: string;
  descriptionKey: string;
  fields: { name: string; labelKey: string; type: "text" | "email" | "textarea" | "select"; required?: boolean; placeholderKey?: string; options?: { value: string; label: string }[]; counter?: boolean }[];
  submitLabelKey: string;
  reference: string;
}

function InquiryForm({ config }: { config: FormConfig }) {
  const { t } = useTranslation();
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const title = t(config.titleKey);
  const eyebrow = t(config.eyebrowKey);
  const description = t(config.descriptionKey);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      const ref = `${config.reference}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
      toast.success(t("contact.form.inquiryReceived"), {
        description: t("contact.form.inquiryReceivedDesc").replace("{ref}", ref),
      });
      setValues({});
    }, 900);
  }

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-3xl">
        <Breadcrumbs items={[{ label: t("breadcrumb.contact"), href: "/contact" }, { label: title }]} />
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={description} />
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          {config.fields.map((f) => (
            <div key={f.name} className="grid gap-1.5">
              <Label htmlFor={f.name} className="text-xs uppercase tracking-wider text-muted-foreground">
                {t(f.labelKey)}{f.required && <span className="ml-0.5 text-[var(--color-accent)]">*</span>}
              </Label>
              {f.type === "textarea" ? (
                <Textarea
                  id={f.name}
                  required={f.required}
                  placeholder={f.placeholderKey ? t(f.placeholderKey) : undefined}
                  value={values[f.name] ?? ""}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                  maxLength={f.counter ? 800 : undefined}
                  className="min-h-[120px]"
                />
              ) : f.type === "select" ? (
                <select
                  id={f.name}
                  required={f.required}
                  value={values[f.name] ?? ""}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                >
                  <option value="">{t("ui.selectPlaceholder")}</option>
                  {f.options?.map((o) => (
                    <option key={o.value} value={o.value}>{t(o.label)}</option>
                  ))}
                </select>
              ) : (
                <Input
                  id={f.name}
                  type={f.type}
                  required={f.required}
                  placeholder={f.placeholderKey ? t(f.placeholderKey) : undefined}
                  value={values[f.name] ?? ""}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                />
              )}
              {f.counter && (
                <div className="text-right font-mono text-[10px] text-muted-foreground">
                  {(values[f.name] ?? "").length}/800
                </div>
              )}
            </div>
          ))}
          <div className="mt-2 rounded-lg border border-border bg-card/40 p-3">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="font-medium text-foreground/80">{t("legal.privacy.title")}.</strong> {t("legal.privacy.body")}
            </p>
          </div>
          <Button type="submit" disabled={submitting} className="w-fit">
            {submitting ? t("ui.loading") : t(config.submitLabelKey)}
          </Button>
          <p className="text-xs text-muted-foreground italic">{t("contact.qualificationBody")}</p>
        </form>
      </SectionShell>
    </MotionSection>
  );
}

const consultationConfig: FormConfig = {
  titleKey: "contact.consultation",
  eyebrowKey: "contact.landingEyebrow",
  descriptionKey: "contact.consultationBody",
  fields: [
    { name: "name", labelKey: "contact.form.field.fullName", type: "text", required: true, placeholderKey: "contact.form.placeholder.fullName" },
    { name: "email", labelKey: "contact.form.field.email", type: "email", required: true, placeholderKey: "contact.form.placeholder.email" },
    { name: "organisation", labelKey: "contact.form.field.organisation", type: "text", placeholderKey: "contact.form.placeholder.organisation" },
    { name: "matter", labelKey: "contact.form.field.matterType", type: "select", required: true, options: INQUIRY_TYPES },
    { name: "brief", labelKey: "contact.form.field.briefDescription", type: "textarea", required: true, placeholderKey: "contact.form.placeholder.briefConsultation", counter: true },
  ],
  submitLabelKey: "contact.form.submit.consultation",
  reference: "KIP-CONS",
};

const ipInquiryConfig: FormConfig = {
  titleKey: "contact.ipInquiry",
  eyebrowKey: "contact.landingEyebrow",
  descriptionKey: "contact.ipInquiryBody",
  fields: [
    { name: "name", labelKey: "contact.form.field.fullName", type: "text", required: true, placeholderKey: "contact.form.placeholder.fullName" },
    { name: "email", labelKey: "contact.form.field.email", type: "email", required: true, placeholderKey: "contact.form.placeholder.email" },
    { name: "topic", labelKey: "contact.form.field.topic", type: "select", required: true, options: INQUIRY_TYPES },
    { name: "question", labelKey: "contact.form.field.yourQuestion", type: "textarea", required: true, placeholderKey: "contact.form.placeholder.questionIp", counter: true },
  ],
  submitLabelKey: "contact.form.submit.ipInquiry",
  reference: "KIP-IPQ",
};

const researchInquiryConfig: FormConfig = {
  titleKey: "contact.researchInquiry",
  eyebrowKey: "contact.landingEyebrow",
  descriptionKey: "contact.researchInquiryBody",
  fields: [
    { name: "name", labelKey: "contact.form.field.fullName", type: "text", required: true, placeholderKey: "contact.form.placeholder.fullName" },
    { name: "email", labelKey: "contact.form.field.email", type: "email", required: true, placeholderKey: "contact.form.placeholder.email" },
    { name: "organisation", labelKey: "contact.form.field.organisation", type: "text", placeholderKey: "contact.form.placeholder.organisation" },
    { name: "topic", labelKey: "contact.form.field.researchTopic", type: "text", required: true, placeholderKey: "contact.form.placeholder.researchTopic" },
    { name: "brief", labelKey: "contact.form.field.brief", type: "textarea", required: true, placeholderKey: "contact.form.placeholder.briefResearch", counter: true },
  ],
  submitLabelKey: "contact.form.submit.researchInquiry",
  reference: "KIP-RES",
};

const generalContactConfig: FormConfig = {
  titleKey: "contact.generalContact",
  eyebrowKey: "contact.landingEyebrow",
  descriptionKey: "contact.generalContactBody",
  fields: [
    { name: "name", labelKey: "contact.form.field.fullName", type: "text", required: true, placeholderKey: "contact.form.placeholder.fullName" },
    { name: "email", labelKey: "contact.form.field.email", type: "email", required: true, placeholderKey: "contact.form.placeholder.email" },
    { name: "subject", labelKey: "contact.form.field.subject", type: "text", required: true, placeholderKey: "contact.form.placeholder.subject" },
    { name: "message", labelKey: "contact.form.field.message", type: "textarea", required: true, placeholderKey: "contact.form.placeholder.message", counter: true },
  ],
  submitLabelKey: "contact.form.submit.general",
  reference: "KIP-GEN",
};

export function ConsultationForm() { return <InquiryForm config={consultationConfig} />; }
export function IPInquiryForm() { return <InquiryForm config={ipInquiryConfig} />; }
export function ResearchInquiryForm() { return <InquiryForm config={researchInquiryConfig} />; }
export function GeneralContactForm() { return <InquiryForm config={generalContactConfig} />; }
