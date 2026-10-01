import { COUNTRIES } from "./countries";
import type { CountryStatus } from "./types";

// Spec §6 — Country Participation records (one per country × treaty).
// Status is NEVER reduced to a flat "Yes/No" — the precise legal status
// (Signatory, Party, Member, Acceded, Ratified, Accepted, Approved, Effective,
// Observer, Not a Party, Verification required) is preserved.
//
// The canonical source of these records is the `treatyParticipation` array on
// each Country record. This module derives a flat list for direct iteration
// (useful for the Country Participation explorer).

export interface CountryParticipation {
  countrySlug: string;
  countryName: string;
  treatySlug: string;
  treatyName: string;
  status: CountryStatus;
  signatureDate?: string | null;
  ratificationDate?: string | null;
  accessionDate?: string | null;
  acceptanceDate?: string | null;
  approvalDate?: string | null;
  effectiveDate?: string | null;
  source?: string | null;
  notes?: string | null;
}

export const COUNTRY_PARTICIPATION: CountryParticipation[] = COUNTRIES.flatMap((country) =>
  (country.treatyParticipation ?? []).map((p) => ({
    countrySlug: country.slug,
    countryName: country.name,
    treatySlug: p.treatySlug,
    treatyName: p.treatyName,
    status: p.status,
    signatureDate: p.signatureDate ?? null,
    ratificationDate: p.ratificationDate ?? null,
    accessionDate: p.accessionDate ?? null,
    acceptanceDate: p.acceptanceDate ?? null,
    approvalDate: p.approvalDate ?? null,
    effectiveDate: p.effectiveDate ?? null,
    source: p.source ?? null,
    notes: p.notes ?? null,
  }))
);

export function getCountryParticipation(countrySlug?: string, treatySlug?: string): CountryParticipation[] {
  return COUNTRY_PARTICIPATION.filter(
    (p) =>
      (!countrySlug || p.countrySlug === countrySlug) &&
      (!treatySlug || p.treatySlug === treatySlug)
  );
}
