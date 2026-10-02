"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { ArrowRight, MessageCircle, Compass, FileQuestion } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function ConsultationSection() {
  const { t } = useTranslation();
  const PATHS = [
    { icon: <MessageCircle className="h-4 w-4" />, label: t("contact.consultation"), href: "/contact/consultation", body: t("contact.consultationBody") },
    { icon: <FileQuestion className="h-4 w-4" />, label: t("contact.ipInquiry"), href: "/contact/ip-inquiry", body: t("contact.ipInquiryBody") },
    { icon: <Compass className="h-4 w-4" />, label: t("contact.researchInquiry"), href: "/contact/research-inquiry", body: t("contact.researchInquiryBody") },
    { icon: <MessageCircle className="h-4 w-4" />, label: t("contact.generalContact"), href: "/contact/general", body: t("contact.generalContactBody") },
  ];
  return (
    <MotionSection className="py-16 md:py-24 border-t border-border/40">
      <SectionShell>
        <SectionHeader
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PATHS.map((p, i) => (
            <Link
              key={i}
              to={p.href}
              className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 card-hover-lift hover:border-[var(--color-accent)]/40 hover:shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                {p.icon}
              </span>
              <h3 className="font-display text-base font-medium text-foreground">{p.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.body}</p>
              <div className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100">
                {t("contact.open")} <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-border bg-card/40 p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)] mb-2">
                {t("contact.location")}
              </div>
              <div className="text-sm text-foreground">{t("contact.kathmanduNepal")}</div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {t("contact.locationNote")}
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)] mb-2">
                {t("contact.importantQualification")}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t("contact.qualificationBody")}
              </p>
            </div>
          </div>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
