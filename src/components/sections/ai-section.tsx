"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { VerificationNotice } from "@/components/kiplan/related-content";
import { KiplanImage } from "@/components/kiplan/kiplan-image";
import { ArrowRight, Compass, FileText, Database } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

export function AISection() {
  const { t } = useTranslation();
  const structureItems = [
    { icon: <FileText className="h-3 w-3" />, label: t("ai.question"), body: t("ai.questionBody") },
    { icon: <FileText className="h-3 w-3" />, label: t("ai.answer"), body: t("ai.answerBody") },
    { icon: <Database className="h-3 w-3" />, label: t("ai.sources"), body: t("ai.sourcesBody") },
    { icon: <FileText className="h-3 w-3" />, label: t("ai.relevantDocs"), body: t("ai.relevantDocsBody") },
    { icon: <Compass className="h-3 w-3" />, label: t("ai.relatedIpRights"), body: t("ai.relatedIpRightsBody") },
    { icon: <FileText className="h-3 w-3" />, label: t("ai.jurisdiction"), body: t("ai.jurisdictionBody") },
    { icon: <FileText className="h-3 w-3" />, label: t("ai.relatedResearch"), body: t("ai.relatedResearchBody") },
    { icon: <Database className="h-3 w-3" />, label: t("ai.importantQualification"), body: t("ai.importantQualificationBody") },
  ];
  return (
    <MotionSection className="py-20 md:py-28 border-t border-border/40">
      <SectionShell>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow={t("ai.eyebrow")}
              title={t("ai.title")}
              subtitle={t("ai.subtitle")}
            />
            <div className="mt-8">
              <VerificationNotice
                label={t("ai.qualification")}
                body={t("ai.qualificationBody")}
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/research/ai" className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90">
                <Compass className="h-4 w-4" /> {t("ai.openAiResearch")}
              </Link>
              <Link to="/about/research-philosophy" className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-[var(--color-accent)]">
                {t("ai.researchPhilosophy")} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <KiplanImage
              src="/image/chips.webp"
              alt="A researcher wearing a white laboratory coat, safety glasses and blue gloves examines a green circuit board under a microscope — representing the evidence-first, source-verification posture of KIPLAN IP's research workflow."
              aspect="aspect-[16/9]"
              caption={t("ai.caption")}
            />
            <div className="rounded-2xl border border-border bg-background/60 p-6">
              <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                <Compass className="h-3 w-3" /> {t("ai.responseStructure")}
              </div>
              <ol className="space-y-3">
                {structureItems.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 border-b border-border/40 pb-2 last:border-0 last:pb-0">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-mono text-[10px]">{i + 1}</span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-foreground">
                        <span className="text-[var(--color-accent)]">{s.icon}</span>
                        {s.label}
                      </div>
                      <div className="text-[11px] text-muted-foreground leading-relaxed">{s.body}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
