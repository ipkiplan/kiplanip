"use client";

import { type ReactNode } from "react";
import { CheckCircle2, AlertCircle, HelpCircle, ShieldAlert, XCircle } from "lucide-react";
import type { SourceTier, SourceType, VerificationStatus, LegalInfoLevel, CountryStatus } from "@/data/types";

// Per spec: Tier 1 = amber/official, Tier 2 = blue-gray/academic, Tier 3 = neutral/professional.
// Slate is used for the academic tone — it reads as a muted blue-gray without
// introducing an actual blue accent into the warm-ivory/deep-ink/amber palette.
export function SourceBadge({
  tier,
  type,
  className,
}: {
  tier: SourceTier;
  type?: SourceType;
  className?: string;
}) {
  const tierLabel =
    tier === "tier-1-official"
      ? "Tier 1 · Official"
      : tier === "tier-2-institutional"
      ? "Tier 2 · Institutional"
      : "Tier 3 · Professional";
  const tierColor =
    tier === "tier-1-official"
      ? "border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
      : tier === "tier-2-institutional"
      ? "border-slate-500/30 bg-slate-100 text-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
      : "border-zinc-400/30 bg-zinc-100 text-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300";
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${tierColor} ${className ?? ""}`}>
      {tierLabel}
      {type && <span className="opacity-60">· {type}</span>}
    </span>
  );
}

export function LegalInfoBadge({ level, className }: { level: LegalInfoLevel; className?: string }) {
  const color =
    level === "1-Authoritative Text"
      ? "border-emerald-600/30 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
      : level === "2-Official Explanation"
      ? "border-emerald-600/20 bg-emerald-50/50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300"
      : level === "3-Institutional/Academic"
      ? "border-amber-600/30 bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300"
      : level === "4-Professional Commentary"
      ? "border-zinc-400/30 bg-zinc-100 text-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300"
      : "border-rose-500/30 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300";
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${color} ${className ?? ""}`}>
      L{level.charAt(0)} · {level.split("-")[1]}
    </span>
  );
}

export function StatusBadge({
  status,
  className,
}: {
  status: VerificationStatus | CountryStatus;
  className?: string;
}) {
  let icon: ReactNode = null;
  let color = "";
  if (status === "Verified") {
    icon = <CheckCircle2 className="h-3 w-3" />;
    color = "border-emerald-600/30 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300";
  } else if (status === "Verification required") {
    icon = <AlertCircle className="h-3 w-3" />;
    color = "border-amber-600/30 bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300";
  } else if (status === "Source unavailable") {
    icon = <ShieldAlert className="h-3 w-3" />;
    color = "border-rose-500/30 bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300";
  } else if (status === "Unverifiable") {
    icon = <XCircle className="h-3 w-3" />;
    color = "border-zinc-400/30 bg-zinc-100 text-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300";
  } else if (status === "Not a Party") {
    icon = <XCircle className="h-3 w-3" />;
    color = "border-zinc-400/30 bg-zinc-100 text-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300";
  } else if (status === "Party" || status === "Member") {
    icon = <CheckCircle2 className="h-3 w-3" />;
    color = "border-emerald-600/30 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300";
  } else if (status === "Signatory" || status === "Acceded" || status === "Ratified" || status === "Accepted" || status === "Approved" || status === "Effective") {
    icon = <CheckCircle2 className="h-3 w-3" />;
    color = "border-emerald-600/20 bg-emerald-50/60 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300";
  } else if (status === "Observer") {
    icon = <HelpCircle className="h-3 w-3" />;
    color = "border-zinc-400/30 bg-zinc-100 text-zinc-600 dark:bg-zinc-800/60 dark:text-zinc-300";
  } else {
    icon = <AlertCircle className="h-3 w-3" />;
    color = "border-amber-600/30 bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300";
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${color} ${className ?? ""}`}>
      {icon}
      {status}
    </span>
  );
}

export function EntityTypeBadge({ type, className }: { type: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/8 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] ${className ?? ""}`}
    >
      {type}
    </span>
  );
}

export function LastUpdated({ date, sourceDate }: { date?: string | null; sourceDate?: string | null }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-muted-foreground">
      {date && (
        <span className="inline-flex items-center gap-1.5">
          <span className="opacity-60">Last Updated:</span>
          <span className="text-foreground">{date}</span>
        </span>
      )}
      {sourceDate && (
        <span className="inline-flex items-center gap-1.5">
          <span className="opacity-60">Source Date:</span>
          <span className="text-foreground">{sourceDate}</span>
        </span>
      )}
      {!date && !sourceDate && (
        <span className="italic opacity-60">Date: Verification required</span>
      )}
    </div>
  );
}
