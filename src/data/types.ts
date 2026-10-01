// KIPLAN IP — Entity type definitions
// Mirrors master specification §4 (entities) & §6 (data model)

export type Slug = string;

export type SourceTier = "tier-1-official" | "tier-2-institutional" | "tier-3-professional";
export type SourceType =
  | "Official/Government"
  | "International Organization"
  | "Treaty"
  | "Legislation"
  | "Regulation"
  | "Official Database"
  | "Academic"
  | "Professional Commentary"
  | "KIPLAN/AI Interpretation";

export type LegalInfoLevel =
  | "1-Authoritative Text"
  | "2-Official Explanation"
  | "3-Institutional/Academic"
  | "4-Professional Commentary"
  | "5-KIPLAN/AI Interpretation";

export type VerificationStatus =
  | "Verified"
  | "Verification required"
  | "Source unavailable"
  | "Unverifiable";

export type CountryStatus =
  | "Signatory"
  | "Party"
  | "Member"
  | "Acceded"
  | "Ratified"
  | "Accepted"
  | "Approved"
  | "Effective"
  | "Observer"
  | "Not a Party"
  | "Verification required";

export interface SourceRef {
  slug: Slug;
  title: string;
  tier: SourceTier;
  sourceType: SourceType;
  legalInfoLevel: LegalInfoLevel;
  publisher?: string | null;
  issuingBody?: string | null;
  jurisdiction?: string | null;
  date?: string | null; // ISO date string
  retrievalDate?: string | null;
  url?: string | null;
  verificationStatus: VerificationStatus;
  notes?: string | null;
}

export interface SourceRecord extends SourceRef {
  description?: string | null;
  relatedTopic?: string[] | null;
  relatedIPRight?: Slug[] | null;
}

export interface IPRight {
  slug: Slug;
  index: number;
  name: string;
  shortName: string;
  tagline: string;
  overview: string;
  keyConcepts: { title: string; body: string }[];
  protection: string;
  registrationFiling: string;
  classification?: { name: string; slug: Slug }[] | null;
  nepal: { body: string; verification: VerificationStatus };
  internationalSystems: { name: string; slug?: Slug; body: string }[];
  treaties: { name: string; slug: Slug }[];
  laws?: { name: string; slug?: Slug }[] | null;
  offices?: { name: string; slug?: Slug }[] | null;
  research: { topic: string; body: string }[];
  publications: { title: string; slug: Slug }[];
  sources: { name: string; slug: Slug }[];
  relatedRights: { name: string; slug: Slug }[];
  consultation: string;
  icon: string; // lucide icon name
  /**
   * Optional contextual image — `{ src: "/image/...", alt: "..." }`.
   * Only present for IP rights where a relevant image exists in public/image/.
   * Spec §36: images must have meaningful alt text and be lazy-loaded.
   */
  image?: { src: string; alt: string; caption?: string };
}

export interface Country {
  slug: Slug;
  name: string;
  iso2?: string | null;
  iso3?: string | null;
  region: "World" | "Asia" | "South Asia" | "Europe" | "Americas" | "Africa" | "Oceania";
  capital?: string | null;
  ipOffice?: { name: string; slug?: Slug } | null;
  ipLaws?: { name: string; slug?: Slug }[] | null;
  treatyParticipation?: {
    treatySlug: Slug;
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
  }[];
  verification: VerificationStatus;
  notes?: string | null;
}

export interface Organization {
  slug: Slug;
  name: string;
  abbreviation: string;
  type: "Intergovernmental" | "Specialized Agency" | "Regional" | "Other";
  headquarters?: string | null;
  established?: string | null;
  purpose: string;
  administers?: { name: string; slug?: Slug }[];
  classificationSystems?: { name: string; slug: Slug }[];
  website?: string | null;
  verification: VerificationStatus;
  notes?: string | null;
}

export interface IPOffice {
  slug: Slug;
  name: string;
  country: string;
  countrySlug?: Slug;
  acronym?: string | null;
  jurisdictionLevel: "National" | "Regional" | "International";
  website?: string | null;
  administers?: string[] | null;
  address?: string | null;
  verification: VerificationStatus;
  notes?: string | null;
}

export interface Treaty {
  slug: Slug;
  name: string;
  abbreviation?: string | null;
  subject: string;
  adoptionDate?: string | null;
  entryIntoForce?: string | null;
  administeringOrg?: { name: string; slug?: Slug } | null;
  filingSystem?: boolean;
  participatingCountries?: number | null;
  nepalStatus: CountryStatus;
  nepalStatusNotes?: string | null;
  nepalSignatureDate?: string | null;
  nepalRatificationDate?: string | null;
  nepalAccessionDate?: string | null;
  nepalEffectiveDate?: string | null;
  officialSource?: string | null;
  verification: VerificationStatus;
  relatedRights: Slug[];
  relatedClassifications: Slug[];
  relatedFilingSystems: Slug[];
  relatedLaws?: Slug[] | null;
  relatedPublications?: Slug[] | null;
  summary: string;
  keyProvisions: string[];
}

export interface Classification {
  slug: Slug;
  name: string;
  abbreviation: string;
  purpose: string;
  responsibleOrg: { name: string; slug?: Slug };
  subjectMatter: string;
  structure: string;
  officialSource?: string | null;
  nepalRelevance: string;
  internationalRelevance: string;
  updateInfo: string;
  verification: VerificationStatus;
  relatedRights: Slug[];
  versionNote?: string | null;
}

export interface FilingSystem {
  slug: Slug;
  name: string;
  abbreviation?: string | null;
  administeredBy: { name: string; slug?: Slug };
  type: "International Filing System" | "Regional Filing System";
  purpose: string;
  relatedTreaties: { name: string; slug: Slug }[];
  relatedRights: Slug[];
  verification: VerificationStatus;
  notes?: string | null;
}

export interface Law {
  slug: Slug;
  name: string;
  jurisdiction: string;
  jurisdictionSlug?: Slug;
  type: "Statute" | "Regulation" | "Rule" | "Procedural Guideline";
  subjectMatter: string;
  date?: string | null;
  administeringBody?: string | null;
  officialSource?: string | null;
  verification: VerificationStatus;
  relatedRights?: Slug[] | null;
  notes?: string | null;
  /**
   * Legal force status — distinguishes current law from proposed/historical
   * legislation. Optional to allow incremental adoption without migrating
   * existing records. An omitted value does NOT imply "In force".
   */
  legalStatus?: "In force" | "Proposed" | "Repealed" | "Historical" | "Superseded";
}

export interface Publication {
  slug: Slug;
  title: string;
  type:
    | "Research Paper"
    | "Draft Paper"
    | "Working Paper"
    | "Research Note"
    | "Report"
    | "IP Update"
    | "Article"
    | "Commentary";
  abstract: string;
  date?: string | null;
  version?: string | null;
  reviewStatus?: "Not peer reviewed" | "Internal review" | "Draft" | "Working draft" | null;
  authorsNote?: string | null;
  keywords: string[];
  relatedRights?: Slug[] | null;
  relatedTreaties?: Slug[] | null;
  relatedCountries?: Slug[] | null;
  sources?: Slug[] | null;
  verification: VerificationStatus;
  sections?: { heading: string; body: string }[] | null; // 23-section structure (research papers only)
  disclaimer?: string | null;
}

export interface GlossaryTerm {
  slug: Slug;
  term: string;
  definition: string;
  category: string;
  relatedRights?: Slug[] | null;
  source?: { name: string; slug?: Slug } | null;
  verification: VerificationStatus;
}

export interface Update {
  slug: Slug;
  title: string;
  date?: string | null;
  summary: string;
  category: "International IP" | "Nepal IP" | "Treaty" | "Classification" | "Office" | "Research";
  verification: VerificationStatus;
  source?: string | null;
  relatedRights?: Slug[] | null;
}

export interface DocumentRecord {
  slug: Slug;
  title: string;
  type: "Treaty Text" | "Regulation" | "Statute" | "Official Notice" | "Classification List" | "Filing Form" | "Other";
  issuer?: string | null;
  date?: string | null;
  jurisdiction?: string | null;
  sourceTier: SourceTier;
  url?: string | null;
  verification: VerificationStatus;
  relatedTreaty?: Slug | null;
  relatedRight?: Slug | null;
  notes?: string | null;
}
