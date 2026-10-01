import type { FilingSystem } from "./types";

// Spec §6 — international filing systems live in their own data module.
// Madrid (trademarks), Hague (industrial designs), and the PCT procedural route
// (patents) are the three principal international filing systems. Source records
// (not specific contracting state lists) are used; participation is documented
// under CountryParticipation, never reduced to a flat "Yes/No".

// Authoritative definition lives in treaties.ts (FilingSystem is structurally
// paired with its underlying treaty). This module re-exports the canonical list
// so consumers can import from `@/data/filing-systems` directly per spec.
export { FILING_SYSTEMS, getFilingSystem } from "./treaties";

export type { FilingSystem };
