"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { useTranslation } from "@/i18n/provider";

export function LegalPage({ topic }: { topic: "privacy" | "terms" | "disclaimer" | "copyright" | "accessibility" | "sitemap" }) {
  const { t } = useTranslation();
  const data = {
    privacy: { title: t("legal.privacy.title"), body: t("legal.privacy.body") },
    terms: { title: t("legal.terms.title"), body: t("legal.terms.body") },
    disclaimer: { title: t("legal.disclaimer.title"), body: t("legal.disclaimer.body") },
    copyright: { title: t("legal.copyright.title"), body: t("legal.copyright.body") },
    accessibility: { title: t("legal.accessibility.title"), body: t("legal.accessibility.body") },
    sitemap: { title: t("legal.sitemap.title"), body: t("legal.sitemap.body") },
  }[topic];

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-3xl">
        <Breadcrumbs items={[{ label: t("breadcrumb.legal"), href: "/" }, { label: data.title }]} />
        <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{data.title}</h1>
        <div className="mt-6 space-y-4 text-sm md:text-base text-foreground/90 leading-relaxed">
          <p>{data.body}</p>
        </div>
        <div className="mt-8">
          <Link to="/" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors">
            {t("nav.home")}
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
