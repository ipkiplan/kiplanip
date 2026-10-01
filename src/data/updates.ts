import type { Update } from "./types";

// Spec §6 — IP Updates feed.
// Structural templates only — no fabricated Nepal-specific updates.
// Each record preserves a clear verification status, source attribution
// where verifiable, and "Verification required" where the underlying fact
// has not been corroborated by an authoritative source.

export const UPDATES: Update[] = [
  {
    slug: "update-treaty-status-verification-pending",
    title: "Research Update: Nepal treaty participation status verification pending",
    date: "2026-09-28",
    summary:
      "Nepal-specific treaty participation status under the principal international IP treaties (Paris, Berne, PCT, TRIPS, Madrid, Hague, Budapest, Rome, WCT, WPPT) is currently being verified against authoritative WIPO and WTO sources. KIPLAN IP does not publish Nepal status as verified until corroborated by authoritative sources.",
    category: "Treaty",
    verification: "Verification required",
    source: "WIPO treaties database — verification pending",
    relatedRights: null,
  },
  {
    slug: "update-classification-version-review",
    title: "Research Note: International classification systems — structural review",
    date: "2026-09-28",
    summary:
      "A structural review of the principal international classification systems (Nice, Vienna, Locarno, IPC, CPC) is in progress. Specific edition numbers, version dates and class-level changes are not published until verified against the administering organisation's authoritative source (WIPO for Nice/Vienna/Locarno/IPC; EPO+USPTO for CPC).",
    category: "Classification",
    verification: "Verification required",
    source: "WIPO / EPO / USPTO — verification pending",
    relatedRights: ["trademarks", "patents", "industrial-designs"],
  },
  {
    slug: "update-nepal-ip-office-record-pending",
    title: "Research Update: Nepal IP Office record — verification pending",
    date: "2026-09-28",
    summary:
      "The Nepal IP Office record (official designation, address, official website, examination guidelines and procedural fees) requires direct verification from the Government of Nepal. The placeholder record preserves the structural fields without inventing specific administrative facts.",
    category: "Office",
    verification: "Verification required",
    source: "Government of Nepal — verification pending",
    relatedRights: ["trademarks", "patents", "industrial-designs", "copyright"],
  },
];

export function getUpdate(slug: string) {
  return UPDATES.find((u) => u.slug === slug);
}
