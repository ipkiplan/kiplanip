import type { Organization, IPOffice } from "./types";
import { FILING_SYSTEMS, getFilingSystem } from "./treaties";

// Re-export so consumers can import filing systems from a stable data path.
export { FILING_SYSTEMS, getFilingSystem };

export const ORGANIZATIONS: Organization[] = [
  {
    slug: "wipo",
    name: "World Intellectual Property Organization",
    abbreviation: "WIPO",
    type: "Specialized Agency",
    headquarters: "Geneva, Switzerland",
    established: "1967",
    purpose:
      "WIPO is the global forum for intellectual property policy, services, information and cooperation. As a self-funding agency of the United Nations, it administers more than 25 IP treaties (including Paris, Berne, PCT, Madrid, Hague and Budapest systems, WCT, WPPT) and maintains international classification systems (Nice, Vienna, Locarno, IPC).",
    administers: [
      { name: "Paris Convention", slug: "paris-convention" },
      { name: "Berne Convention", slug: "berne-convention" },
      { name: "Patent Cooperation Treaty (PCT)", slug: "pct" },
      { name: "Madrid System", slug: "madrid-system" },
      { name: "Hague System", slug: "hague-system" },
      { name: "Budapest Treaty", slug: "budapest-treaty" },
      { name: "WIPO Copyright Treaty (WCT)", slug: "wct" },
      { name: "WIPO Performances and Phonograms Treaty (WPPT)", slug: "wppt" },
      { name: "Rome Convention", slug: "rome-convention" },
    ],
    classificationSystems: [
      { name: "Nice Classification", slug: "nice" },
      { name: "Vienna Classification", slug: "vienna" },
      { name: "Locarno Classification", slug: "locarno" },
      { name: "International Patent Classification", slug: "ipc" },
    ],
    website: "https://www.wipo.int",
    verification: "Verified",
    notes: "Publicly verifiable structural facts.",
  },
  {
    slug: "wto",
    name: "World Trade Organization",
    abbreviation: "WTO",
    type: "Intergovernmental",
    headquarters: "Geneva, Switzerland",
    established: "1995",
    purpose:
      "The WTO deals with the global rules of trade between nations. It administers the TRIPS Agreement (Trade-Related Aspects of Intellectual Property Rights), which establishes minimum standards of IP protection that all WTO members must provide.",
    administers: [{ name: "TRIPS Agreement", slug: "trips" }],
    classificationSystems: [],
    website: "https://www.wto.org",
    verification: "Verified",
    notes: "Publicly verifiable structural facts.",
  },
  {
    slug: "epo",
    name: "European Patent Office",
    abbreviation: "EPO",
    type: "Intergovernmental",
    headquarters: "Munich, Germany",
    established: "1977",
    purpose:
      "The EPO is the executive arm of the European Patent Organisation, established by the European Patent Convention (EPC, 1973). It examines and grants European patents valid in the contracting states. The EPO also jointly maintains the Cooperative Patent Classification (CPC) with the USPTO.",
    administers: [],
    classificationSystems: [{ name: "Cooperative Patent Classification", slug: "cpc" }],
    website: "https://www.epo.org",
    verification: "Verified",
    notes: "Publicly verifiable structural facts.",
  },
  {
    slug: "uspto",
    name: "United States Patent and Trademark Office",
    abbreviation: "USPTO",
    type: "Intergovernmental",
    headquarters: "Alexandria, Virginia, United States",
    established: "1836",
    purpose:
      "The USPTO is the national IP office of the United States, responsible for granting patents and registering trademarks. The USPTO jointly maintains the Cooperative Patent Classification (CPC) with the EPO.",
    administers: [],
    classificationSystems: [{ name: "Cooperative Patent Classification", slug: "cpc" }],
    website: "https://www.uspto.gov",
    verification: "Verified",
    notes: "Publicly verifiable structural facts.",
  },
];

export function getOrganization(slug: string) {
  return ORGANIZATIONS.find((o) => o.slug === slug);
}

export const OFFICES: IPOffice[] = [
  {
    slug: "wipo-office",
    name: "WIPO Secretariat",
    country: "Switzerland",
    countrySlug: "switzerland",
    acronym: "WIPO",
    jurisdictionLevel: "International",
    website: "https://www.wipo.int",
    administers: ["Madrid System", "Hague System", "PCT", "Budapest Treaty"],
    address: "34, chemin des Colombettes, 1202 Geneva, Switzerland",
    verification: "Verified",
    notes: "Publicly verifiable structural facts.",
  },
  {
    slug: "epo-office",
    name: "European Patent Office",
    country: "Germany",
    countrySlug: "germany",
    acronym: "EPO",
    jurisdictionLevel: "Regional",
    website: "https://www.epo.org",
    administers: ["European Patent System"],
    address: "Bob-van-Benthem-Platz 1, 80469 Munich, Germany",
    verification: "Verified",
    notes: "Publicly verifiable structural facts.",
  },
  {
    slug: "uspto-office",
    name: "United States Patent and Trademark Office",
    country: "United States",
    countrySlug: "united-states",
    acronym: "USPTO",
    jurisdictionLevel: "National",
    website: "https://www.uspto.gov",
    administers: ["US Patent System", "US Trademark System"],
    address: "600 Dulany Street, Alexandria, VA 22314, United States",
    verification: "Verified",
    notes: "Publicly verifiable structural facts.",
  },
  {
    slug: "nepal-ip-office",
    name: "Nepal Intellectual Property Office",
    country: "Nepal",
    countrySlug: "nepal",
    acronym: null,
    jurisdictionLevel: "National",
    website: null,
    administers: ["Nepal Trademark Registration", "Nepal Patent Registration", "Nepal Industrial Design Registration"],
    address: null,
    verification: "Verification required",
    notes: "Specific office name, official designation, URL, address and procedures require direct verification from the Government of Nepal.",
  },
];

export function getOffice(slug: string) {
  return OFFICES.find((o) => o.slug === slug);
}
