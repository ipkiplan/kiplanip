import type { GlossaryTerm } from "./types";

// IP Dictionary — definitional entries. Accurate structural definitions only.
// No invented statutory section references.

export const GLOSSARY: GlossaryTerm[] = [
  {
    slug: "intellectual-property",
    term: "Intellectual Property",
    definition:
      "Creations of the mind — inventions, literary and artistic works, designs, symbols, names and images used in commerce. IP is protected in law by patents, copyright, trademarks, industrial designs, geographical indications and related rights.",
    category: "Foundations",
    relatedRights: ["ip-portfolio"],
    source: { name: "WIPO", slug: "wipo" },
    verification: "Verified",
  },
  {
    slug: "national-treatment",
    term: "National Treatment",
    definition:
      "Principle (Paris and Berne Conventions, TRIPS) under which each member state must grant nationals of other member states the same IP protection as it grants to its own nationals.",
    category: "International Principles",
    relatedRights: ["trademarks", "patents", "copyright"],
    source: { name: "Paris Convention", slug: "paris-convention-source" },
    verification: "Verified",
  },
  {
    slug: "right-of-priority",
    term: "Right of Priority",
    definition:
      "Paris Convention principle under which an application filed in one member establishes a priority period — 12 months for patents, 6 months for industrial designs and trademarks — during which filings in other members benefit from the original filing date for novelty purposes.",
    category: "International Principles",
    relatedRights: ["patents", "trademarks", "industrial-designs"],
    source: { name: "Paris Convention", slug: "paris-convention-source" },
    verification: "Verified",
  },
  {
    slug: "prior-art",
    term: "Prior Art",
    definition:
      "Everything made available to the public before the filing or priority date of a patent application, in any form (written, oral, use, display). Used to assess novelty and inventive step.",
    category: "Patents",
    relatedRights: ["patents"],
    source: { name: "WIPO", slug: "wipo" },
    verification: "Verified",
  },
  {
    slug: "inventive-step",
    term: "Inventive Step",
    definition:
      "Patent requirement — the invention, having regard to the prior art, would not have been obvious to a person skilled in the art. Equivalent to non-obviousness in some jurisdictions.",
    category: "Patents",
    relatedRights: ["patents"],
    source: { name: "WIPO", slug: "wipo" },
    verification: "Verified",
  },
  {
    slug: "industrial-applicability",
    term: "Industrial Applicability",
    definition:
      "Patent requirement — the invention must be capable of being made or used in any kind of industry. Equivalent to utility in some jurisdictions.",
    category: "Patents",
    relatedRights: ["patents"],
    source: { name: "WIPO", slug: "wipo" },
    verification: "Verified",
  },
  {
    slug: "distinctiveness",
    term: "Distinctiveness",
    definition:
      "Trademark requirement — a sign must be capable of distinguishing the goods or services of one undertaking from those of others. May be inherent (fanciful, arbitrary, suggestive) or acquired through use.",
    category: "Trademarks",
    relatedRights: ["trademarks"],
    source: { name: "WIPO", slug: "wipo" },
    verification: "Verified",
  },
  {
    slug: "likelihood-of-confusion",
    term: "Likelihood of Confusion",
    definition:
      "Trademark infringement test — whether the defendant's use of a similar sign for similar goods or services gives rise to a likelihood of confusion on the part of the relevant public.",
    category: "Trademarks",
    relatedRights: ["trademarks"],
    source: { name: "WIPO", slug: "wipo" },
    verification: "Verified",
  },
  {
    slug: "well-known-mark",
    term: "Well-Known Mark",
    definition:
      "Trademark that is well known to the relevant sector of the public in a jurisdiction and that may receive protection even without registration there (Paris Convention Article 6bis).",
    category: "Trademarks",
    relatedRights: ["trademarks"],
    source: { name: "Paris Convention", slug: "paris-convention-source" },
    verification: "Verified",
  },
  {
    slug: "individual-character",
    term: "Individual Character",
    definition:
      "Industrial design requirement — the design produces a different overall impression on the informed user from prior designs.",
    category: "Industrial Designs",
    relatedRights: ["industrial-designs"],
    source: { name: "WIPO", slug: "wipo" },
    verification: "Verified",
  },
  {
    slug: "originality",
    term: "Originality",
    definition:
      "Copyright requirement — the work must be the product of the author's own intellectual creation, not copied.",
    category: "Copyright",
    relatedRights: ["copyright"],
    source: { name: "Berne Convention", slug: "berne-convention-source" },
    verification: "Verified",
  },
  {
    slug: "idea-expression",
    term: "Idea–Expression Distinction",
    definition:
      "Copyright principle — protection extends to the expression of ideas, not to ideas themselves, procedures, methods of operation or mathematical concepts as such.",
    category: "Copyright",
    relatedRights: ["copyright"],
    source: { name: "WIPO", slug: "wipo" },
    verification: "Verified",
  },
  {
    slug: "moral-rights",
    term: "Moral Rights",
    definition:
      "Author's personal (non-economic) rights — typically the right of attribution (paternity) and the right of integrity — protected under Berne Convention Article 6bis.",
    category: "Copyright",
    relatedRights: ["copyright"],
    source: { name: "Berne Convention", slug: "berne-convention-source" },
    verification: "Verified",
  },
  {
    slug: "trade-secret",
    term: "Trade Secret",
    definition:
      "Information that is secret, has commercial value because it is secret, and has been subject to reasonable steps under the circumstances to keep it secret. Protected under TRIPS Article 39.2.",
    category: "Trade Secrets",
    relatedRights: ["trade-secrets"],
    source: { name: "TRIPS", slug: "trips-source" },
    verification: "Verified",
  },
  {
    slug: "geographical-indication",
    term: "Geographical Indication",
    definition:
      "Sign used on products that have a specific geographical origin and possess qualities, reputation or characteristics essentially attributable to that origin.",
    category: "Geographical Indications",
    relatedRights: ["geographical-indications"],
    source: { name: "TRIPS", slug: "trips-source" },
    verification: "Verified",
  },
  {
    slug: "compulsory-licence",
    term: "Compulsory Licence",
    definition:
      "Authorisation by a government allowing a third party to exploit a patented invention without the patent holder's consent, subject to conditions (Paris Convention Article 5A, TRIPS Article 31).",
    category: "Patents",
    relatedRights: ["patents"],
    source: { name: "TRIPS", slug: "trips-source" },
    verification: "Verified",
  },
  {
    slug: "udrp",
    term: "UDRP",
    definition:
      "Uniform Domain-Name Dispute-Resolution Policy, administered by ICANN, providing a streamlined mechanism for resolving abusive registrations of domain names that conflict with trademarks.",
    category: "Domain & Online",
    relatedRights: ["domain-online-ip"],
    source: { name: "WIPO", slug: "wipo" },
    verification: "Verified",
  },
  {
    slug: "tpm",
    term: "Technological Protection Measure (TPM)",
    definition:
      "Technology used to restrict access to or copying of protected works. WCT Article 11 requires legal protection against circumvention of effective TPMs.",
    category: "Copyright",
    relatedRights: ["copyright", "domain-online-ip"],
    source: { name: "WCT & WPPT", slug: "wct-wppt" },
    verification: "Verified",
  },
  {
    slug: "frand",
    term: "FRAND",
    definition:
      "Fair, Reasonable and Non-Discriminatory licensing terms — typically applicable to standard-essential patents (SEPs) that are essential to implementing a technical standard.",
    category: "Patents",
    relatedRights: ["patents", "ip-portfolio"],
    source: { name: "WIPO", slug: "wipo" },
    verification: "Verified",
  },
  {
    slug: "filing-system",
    term: "International Filing System",
    definition:
      "System that allows a single application to seek protection in multiple jurisdictions. Principal systems: PCT (patents), Madrid (trademarks), Hague (industrial designs), Lisbon (appellations of origin / GIs).",
    category: "Filing Systems",
    relatedRights: ["patents", "trademarks", "industrial-designs"],
    source: { name: "WIPO", slug: "wipo" },
    verification: "Verified",
  },
];

export function getGlossaryTerm(slug: string) {
  return GLOSSARY.find((g) => g.slug === slug);
}
