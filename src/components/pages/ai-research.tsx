"use client";

import { useState } from "react";
import { SectionShell, MotionSection } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { SourceBadge, StatusBadge } from "@/components/kiplan/badges";
import { Label } from "@/components/ui/label";
import { Link } from "@/components/router/HashRouter";
import { Compass, AlertCircle, Search, FileText, Globe2, ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

interface ExampleQuery {
  id: string;
  question: string;
  answer: string;
  sources: { slug: string; tier: string; type: string; label: string; url?: string | null }[];
  documents: { label: string; href: string; verified: string }[];
  ipRights: { slug: string; label: string }[];
  jurisdiction: string;
  relatedResearch: { label: string; href: string }[];
  qualification: string[];
}

const EXAMPLES: ExampleQuery[] = [
  {
    id: "what-is-pct",
    question: "What is the Patent Cooperation Treaty (PCT) and how does it work?",
    answer:
      "The Patent Cooperation Treaty (PCT) is an international treaty administered by WIPO that provides a unified procedure for filing patent applications across its contracting states. An applicant files a single international application, which has effect in all designated PCT contracting states. An International Searching Authority (ISA) produces an International Search Report and a written opinion. The applicant may then request optional international preliminary examination. Finally, the applicant enters the 'national phase' in each designated state where protection is sought, paying national fees and translations as required. The PCT does not grant an 'international patent' — it streamlines the initial filing and search, and defers national-phase decisions.\n\nThis response is AI-assisted (Level 5 — KIPLAN/AI Interpretation). The structural facts about the PCT are publicly verifiable through WIPO. Specific procedural details, fees, time limits and the list of current contracting states must be verified directly with WIPO and the relevant national offices.",
    sources: [
      { slug: "wipo", tier: "tier-1-official", type: "International Organization", label: "WIPO — PCT portal", url: "https://www.wipo.int/pct/en/" },
      { slug: "pct-source", tier: "tier-1-official", type: "Treaty", label: "Patent Cooperation Treaty — official text", url: "https://www.wipo.int/pct/en/" },
    ],
    documents: [
      { label: "PCT — Official Treaty Text", href: "/research/treaty/pct", verified: "Verified" },
      { label: "International Patent Classification (IPC)", href: "/research/classification/ipc", verified: "Verified" },
    ],
    ipRights: [{ slug: "patents", label: "Patents" }],
    jurisdiction: "International (treaty administered by WIPO; national phase entries per designated state)",
    relatedResearch: [
      { label: "Patents — IP Right", href: "/ip-rights/patents" },
      { label: "International IP Architecture", href: "/resources/professional/international-ip" },
      { label: "Filing Systems — PCT", href: "/research/filing-system/pct-filing" },
    ],
    qualification: [
      "AI output is Level 5 (KIPLAN/AI Interpretation) — it is not the authoritative text (Level 1).",
      "The PCT was signed in 1970 and is administered by WIPO — these are publicly verifiable facts.",
      "Specific procedural details, fees, time limits and the current list of contracting states must be verified directly with WIPO and the relevant national offices.",
      "Nepal's PCT participation status requires verification from authoritative sources — KIPLAN IP does not publish unverified status claims.",
      "AI output is not legal advice. Specific matters may require professional legal advice from a qualified practitioner.",
    ],
  },
  {
    id: "nepal-paris-convention",
    question: "Is Nepal a party to the Paris Convention?",
    answer:
      "I could not verify Nepal's precise participation status under the Paris Convention from the sources currently available. KIPLAN IP does not publish unverified status claims. To confirm Nepal's status, consult the WIPO treaties database (wipo.int/treaties) directly, or contact the Government of Nepal's authoritative channels.\n\nThe Paris Convention itself was adopted on 20 March 1883, entered into force in 1884, and is administered by WIPO. These structural facts are publicly verifiable. Nepal's specific status (Signatory, Party, Member, Acceded, Ratified, Accepted, Approved, Effective, Observer or Not a Party) requires verification from authoritative sources.\n\nThis response is AI-assisted (Level 5 — KIPLAN/AI Interpretation). It is not legal advice.",
    sources: [
      { slug: "wipo", tier: "tier-1-official", type: "International Organization", label: "WIPO — Treaties database", url: "https://www.wipo.int/treaties/en/" },
      { slug: "paris-convention-source", tier: "tier-1-official", type: "Treaty", label: "Paris Convention — official text", url: "https://www.wipo.int/treaties/en/ip/paris/" },
      { slug: "nepal-ip-office", tier: "tier-1-official", type: "Official/Government", label: "Nepal IP Office (verification required)" },
    ],
    documents: [
      { label: "Paris Convention — Official Text", href: "/research/treaty/paris-convention", verified: "Verified" },
      { label: "Nepal — Country Record", href: "/research/country/nepal", verified: "Verification required" },
    ],
    ipRights: [
      { slug: "patents", label: "Patents" },
      { slug: "trademarks", label: "Trademarks" },
      { slug: "industrial-designs", label: "Industrial Designs" },
      { slug: "geographical-indications", label: "Geographical Indications" },
    ],
    jurisdiction: "International treaty — Nepal participation requires verification",
    relatedResearch: [
      { label: "Country Participation Table", href: "/resources/professional/country-participation" },
      { label: "Nepal IP Hub", href: "/resources/professional/nepal-ip" },
      { label: "Treaty Explorer", href: "/resources/professional/treaties" },
    ],
    qualification: [
      "AI could not verify Nepal's Paris Convention status from the currently available sources.",
      "Verification necessary: consult the WIPO treaties database directly.",
      "AI output is Level 5 (KIPLAN/AI Interpretation) — not authoritative.",
      "AI output is not legal advice.",
    ],
  },
  {
    id: "nice-vs-vienna",
    question: "What is the difference between the Nice and Vienna classifications?",
    answer:
      "The Nice Classification (NCL) and the Vienna Classification (VCL) are both administered by WIPO but serve different purposes. The Nice Classification classifies goods and services for the registration of trademarks — it consists of 45 classes (34 for goods, 11 for services). The Vienna Classification classifies the figurative (visual) elements of marks — it uses a hierarchical system of categories, divisions and sections.\n\nIn short: Nice is about what goods/services a trademark covers; Vienna is about what the trademark looks like (for figurative marks).\n\nBoth classifications are periodically revised by WIPO Committees of Experts. Verify the current edition directly with WIPO before relying on specific class or subclass codes.\n\nThis response is AI-assisted (Level 5 — KIPLAN/AI Interpretation). The structural facts about the Nice and Vienna classifications are publicly verifiable through WIPO.",
    sources: [
      { slug: "nice-classification-source", tier: "tier-1-official", type: "Official Database", label: "Nice Classification — WIPO", url: "https://www.wipo.int/classifications/nice/en/" },
      { slug: "vienna-classification-source", tier: "tier-1-official", type: "Official Database", label: "Vienna Classification — WIPO", url: "https://www.wipo.int/classifications/vienna/en/" },
      { slug: "wipo", tier: "tier-1-official", type: "International Organization", label: "WIPO", url: "https://www.wipo.int" },
    ],
    documents: [
      { label: "Nice Classification — Current Edition", href: "/research/classification/nice", verified: "Verified" },
      { label: "Vienna Classification — Current Edition", href: "/research/classification/vienna", verified: "Verified" },
    ],
    ipRights: [{ slug: "trademarks", label: "Trademarks" }],
    jurisdiction: "International (administered by WIPO; applied by national and regional IP offices)",
    relatedResearch: [
      { label: "Trademarks — IP Right", href: "/ip-rights/trademarks" },
      { label: "Classification Explorer", href: "/resources/professional/classifications" },
      { label: "Madrid System (uses Nice)", href: "/research/treaty/madrid-system" },
    ],
    qualification: [
      "Both classifications are periodically revised — verify the current edition directly with WIPO.",
      "AI output is Level 5 (KIPLAN/AI Interpretation) — not authoritative.",
      "AI output is not legal advice.",
    ],
  },
  {
    id: "what-is-trademark",
    question: "What is a trademark and how is it protected?",
    answer:
      "A trademark is any sign capable of distinguishing the goods or services of one undertaking from those of others. It may consist of words, designs, letters, numerals, colours, the shape of goods or their packaging, sounds, or any combination of these. Trademark protection generally arises through registration with the relevant national or regional IP office, though some jurisdictions also provide limited protection for unregistered marks through passing-off or unfair competition law.\n\nInternationally, the principal framework includes the Paris Convention (right of priority, national treatment), the TRIPS Agreement (minimum standards), and the Madrid System (international filing). Classification of goods and services is by the Nice Classification; figurative elements by the Vienna Classification.\n\nThis response is AI-assisted (Level 5 — KIPLAN/AI Interpretation). It is general in nature and not legal advice. Nepal-specific trademark registration procedures, fees and examination guidelines require verification directly with the Nepal IP Office.",
    sources: [
      { slug: "wipo", tier: "tier-1-official", type: "International Organization", label: "WIPO — Trademarks", url: "https://www.wipo.int/trademarks/en/" },
      { slug: "paris-convention-source", tier: "tier-1-official", type: "Treaty", label: "Paris Convention", url: "https://www.wipo.int/treaties/en/ip/paris/" },
      { slug: "trips-source", tier: "tier-1-official", type: "Treaty", label: "TRIPS Agreement", url: "https://www.wto.org/english/tratop_e/trips_e/trips_e.htm" },
      { slug: "nice-classification-source", tier: "tier-1-official", type: "Official Database", label: "Nice Classification", url: "https://www.wipo.int/classifications/nice/en/" },
      { slug: "madrid-system-source", tier: "tier-1-official", type: "Official Database", label: "Madrid System", url: "https://www.wipo.int/madrid/en/" },
    ],
    documents: [
      { label: "Paris Convention — Official Text", href: "/research/treaty/paris-convention", verified: "Verified" },
      { label: "Nice Classification — Detail", href: "/research/classification/nice", verified: "Verified" },
      { label: "Madrid System — Detail", href: "/research/treaty/madrid-system", verified: "Verified" },
    ],
    ipRights: [{ slug: "trademarks", label: "Trademarks" }],
    jurisdiction: "International framework (Paris, TRIPS, Madrid); national registration per jurisdiction",
    relatedResearch: [
      { label: "Trademarks — IP Right", href: "/ip-rights/trademarks" },
      { label: "Classification Explorer", href: "/resources/professional/classifications" },
      { label: "Madrid System — Filing", href: "/research/filing-system/madrid-system" },
    ],
    qualification: [
      "AI output is Level 5 (KIPLAN/AI Interpretation) — not authoritative legal text.",
      "Nepal-specific trademark procedures, fees and examination guidelines require verification directly with the Nepal IP Office.",
      "AI output is not legal advice.",
    ],
  },
];

export function AIResearchPage() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<ExampleQuery | null>(EXAMPLES[0]);
  const [custom, setCustom] = useState("");

  function submitCustom(e: React.FormEvent) {
    e.preventDefault();
    if (!custom.trim()) return;
    setSelected({
      id: "custom",
      question: custom.trim(),
      answer:
        "I cannot verify the specific answer to this question from the currently available sources. KIPLAN IP does not fabricate legal citations, dates, treaty provisions, article numbers, country participation, or specific statistics.\n\nThis response is AI-assisted (Level 5 — KIPLAN/AI Interpretation). For specific legal information, please consult the authoritative sources listed in the Source Library, or consult a qualified practitioner.\n\nAI output is not legal advice.",
      sources: [
        { slug: "kiplan-research", tier: "tier-3-professional", type: "KIPLAN/AI Interpretation", label: "KIPLAN IP Research Architecture" },
      ],
      documents: [],
      ipRights: [],
      jurisdiction: "Verification required",
      relatedResearch: [
        { label: "Source Library", href: "/resources/professional/sources" },
        { label: "Research Centre", href: "/resources/professional/research" },
      ],
      qualification: [
        "AI could not verify the specific answer to this question.",
        "Verification necessary: consult authoritative sources directly.",
        "AI output is Level 5 (KIPLAN/AI Interpretation) — not authoritative.",
        "AI output is not legal advice.",
      ],
    });
  }

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Research" }, { label: "AI Research Interface" }]} />

        <div className="mb-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">
            <Compass className="inline h-3 w-3" /> AI-Assisted Research
          </div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            AI helps you find and understand evidence. It does not become the evidence.
          </h1>
          <p className="mt-3 max-w-3xl text-base text-muted-foreground leading-relaxed">
            The KIPLAN IP AI research interface is source-first. Each response surfaces sources and qualifications as prominently as the answer itself.
          </p>
        </div>

        <div className="mb-8 rounded-lg border border-amber-600/30 bg-amber-50/60 dark:bg-amber-950/20 px-4 py-3">
          <p className="font-mono text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-300">{t("ai.qualification")}</p>
          <p className="mt-1 text-sm text-amber-700/90 dark:text-amber-300/90 leading-relaxed">
            {t("aiResearch.qualificationNotice")}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: examples + custom input */}
          <div>
            <h2 className="mb-3 font-display text-lg font-medium text-foreground">{t("aiResearch.exampleQueries")}</h2>
            <ul className="space-y-2">
              {EXAMPLES.map((ex) => (
                <li key={ex.id}>
                  <button
                    onClick={() => setSelected(ex)}
                    className={`w-full rounded-lg border p-4 text-left transition-colors ${
                      selected?.id === ex.id ? "border-[var(--color-accent)] bg-[var(--color-accent)]/8" : "border-border bg-card hover:border-[var(--color-accent)]/40"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <Search className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--color-accent)]" />
                      <span className="text-sm text-foreground leading-snug">{ex.question}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>

            <form onSubmit={submitCustom} className="mt-6 rounded-lg border border-border bg-card p-4">
              <Label htmlFor="custom-q" className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("aiResearch.askOwnQuestion")}</Label>
              <textarea
                id="custom-q"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                placeholder={t("aiResearch.questionPlaceholder")}
                className="min-h-[80px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              />
              <button type="submit" className="mt-3 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90">
                <Compass className="h-4 w-4" /> {t("aiResearch.submit")}
              </button>
              <p className="mt-2 text-xs text-muted-foreground italic">{t("aiResearch.disclaimerItalic")}</p>
            </form>
          </div>

          {/* Right: response */}
          <div>
            {selected && (
              <div className="rounded-lg border border-border bg-card/40 p-5">
                <ResponseBlock data={selected} />
              </div>
            )}
          </div>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

function ResponseBlock({ data }: { data: ExampleQuery }) {
  return (
    <div className="space-y-6">
      <Block label="1. Question" icon={<Search className="h-3 w-3" />}>
        <p className="text-sm font-medium text-foreground">{data.question}</p>
      </Block>

      <Block label="2. Answer" icon={<FileText className="h-3 w-3" />}>
        <p className="whitespace-pre-line text-sm text-foreground/90 leading-relaxed">{data.answer}</p>
        <span className="mt-3 inline-flex"><StatusBadge status="Verification required" /></span>
      </Block>

      <Block label="3. Sources" icon={<Globe2 className="h-3 w-3" />} prominent>
        {data.sources.length === 0 ? (
          <p className="text-xs italic text-muted-foreground">No sources currently available. Verification necessary.</p>
        ) : (
          <ul className="space-y-2">
            {data.sources.map((s, i) => (
              <li key={i} className="rounded-lg border border-border bg-background p-3">
                <div className="flex items-start justify-between gap-2">
                  <Link to={`/research/source/${s.slug}`} className="text-sm font-medium text-foreground hover:text-[var(--color-accent)]">{s.label}</Link>
                  <SourceBadge tier={s.tier as any} type={s.type as any} />
                </div>
                {s.url && <a href={s.url} target="_blank" rel="noreferrer" className="mt-1 inline-block break-all font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">Official source →</a>}
              </li>
            ))}
          </ul>
        )}
      </Block>

      {data.documents.length > 0 && (
        <Block label="4. Relevant Documents" icon={<FileText className="h-3 w-3" />}>
          <ul className="space-y-1.5">
            {data.documents.map((d, i) => (
              <li key={i} className="flex items-center justify-between gap-2 text-sm">
                <Link to={d.href} className="text-foreground hover:text-[var(--color-accent)]">{d.label}</Link>
                <StatusBadge status={d.verified as any} />
              </li>
            ))}
          </ul>
        </Block>
      )}

      {data.ipRights.length > 0 && (
        <Block label="5. Related IP Rights" icon={<FileText className="h-3 w-3" />}>
          <div className="flex flex-wrap gap-2">
            {data.ipRights.map((r) => (
              <Link key={r.slug} to={`/ip-rights/${r.slug}`} className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/8 px-3 py-1 text-xs text-[var(--color-accent)] hover:bg-[var(--color-accent)]/15">
                {r.label}
              </Link>
            ))}
          </div>
        </Block>
      )}

      <Block label="6. Jurisdiction" icon={<Globe2 className="h-3 w-3" />}>
        <p className="text-sm text-foreground/90">{data.jurisdiction}</p>
      </Block>

      {data.relatedResearch.length > 0 && (
        <Block label="7. Related Research" icon={<FileText className="h-3 w-3" />}>
          <ul className="space-y-1.5">
            {data.relatedResearch.map((r, i) => (
              <li key={i}>
                <Link to={r.href} className="inline-flex items-center gap-1 text-sm text-foreground hover:text-[var(--color-accent)]">
                  {r.label} <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            ))}
          </ul>
        </Block>
      )}

      <Block label="8. Important Qualification" icon={<AlertCircle className="h-3 w-3" />}>
        <ul className="space-y-1.5">
          {data.qualification.map((q, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/90 leading-relaxed">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-amber-600" />
              {q}
            </li>
          ))}
        </ul>
      </Block>
    </div>
  );
}

function Block({ label, icon, children, prominent }: { label: string; icon: React.ReactNode; children: React.ReactNode; prominent?: boolean }) {
  return (
    <section className={prominent ? "rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/4 p-4" : ""}>
      <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
        {icon} {label}
      </div>
      {children}
    </section>
  );
}
