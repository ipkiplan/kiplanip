import type { IPOffice } from "./types";

// Spec §6 — IP Offices directory (national, regional, international).
// Nepal IP Office details (official name, address, procedures) are marked
// "Verification required" — no fabrication of Nepal administrative facts.
// The authoritative list currently lives in organizations.ts (paired with
// their parent organizations). This module re-exports per spec layout.
export { OFFICES, getOffice } from "./organizations";

export type { IPOffice };
