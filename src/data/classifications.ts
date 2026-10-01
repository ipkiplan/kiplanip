import type { Classification } from "./types";

export const CLASSIFICATIONS: Classification[] = [
  {
    slug: "nice",
    name: "Nice Classification",
    abbreviation: "NCL",
    purpose: "Classifies goods and services for the registration of trademarks.",
    responsibleOrg: { name: "WIPO", slug: "wipo" },
    subjectMatter: "Goods (Classes 1–34) and Services (Classes 35–45) for trademark registration.",
    structure:
      "The Nice Classification consists of 45 classes: 34 for goods and 11 for services. Each class contains an alphabetical list of specific goods or services. The classification is hierarchical: class — heading — explanatory note — alphabetical list.",
    officialSource: "https://www.wipo.int/classifications/nice/en/",
    nepalRelevance:
      "Nepal-related use of the Nice Classification for trademark examination is a matter for the Nepal IP Office to confirm. Verification of the specific edition in use requires direct contact with the office.",
    internationalRelevance:
      "The Nice Classification is the global standard for classifying trademark goods and services and is widely used by national and regional IP offices, including under the Madrid System.",
    updateInfo:
      "The Nice Classification is periodically revised by the WIPO Committee of Experts. New editions are published approximately every five years; annual versions are issued between editions.",
    verification: "Verified",
    relatedRights: ["trademarks"],
    versionNote: "Periodically revised — verify current edition directly with WIPO.",
  },
  {
    slug: "vienna",
    name: "Vienna Classification",
    abbreviation: "VCL",
    purpose: "Classifies the figurative (visual) elements of marks.",
    responsibleOrg: { name: "WIPO", slug: "wipo" },
    subjectMatter: "Figurative elements of trademarks including shapes, designs, colours and combinations.",
    structure:
      "The Vienna Classification is a hierarchical system of categories, divisions and sections, each identified by a two-digit category, a two-digit division and a one- or two-digit section code.",
    officialSource: "https://www.wipo.int/classifications/vienna/en/",
    nepalRelevance:
      "Nepal-related use of the Vienna Classification by the Nepal IP Office requires verification directly with the office.",
    internationalRelevance:
      "The Vienna Classification is widely used by national and regional IP offices for searching and examining figurative marks.",
    updateInfo:
      "The Vienna Classification is revised periodically by the WIPO Committee of Experts.",
    verification: "Verified",
    relatedRights: ["trademarks"],
    versionNote: "Periodically revised — verify current edition directly with WIPO.",
  },
  {
    slug: "locarno",
    name: "Locarno Classification",
    abbreviation: "LOC",
    purpose: "Classifies industrial designs.",
    responsibleOrg: { name: "WIPO", slug: "wipo" },
    subjectMatter: "Industrial designs by product type.",
    structure:
      "The Locarno Classification consists of classes and subclasses of products. Each class is identified by a two-digit number, and each subclass by a letter. An alphabetical list of products indicates the relevant class and subclass.",
    officialSource: "https://www.wipo.int/classifications/locarno/en/",
    nepalRelevance:
      "Nepal-related use of the Locarno Classification by the Nepal IP Office requires verification directly with the office.",
    internationalRelevance:
      "The Locarno Classification is the global standard for classifying industrial designs and is used in international filings under the Hague System.",
    updateInfo:
      "The Locarno Classification is revised periodically by the WIPO Committee of Experts.",
    verification: "Verified",
    relatedRights: ["industrial-designs"],
    versionNote: "Periodically revised — verify current edition directly with WIPO.",
  },
  {
    slug: "ipc",
    name: "International Patent Classification",
    abbreviation: "IPC",
    purpose: "Classifies patents and utility models by technology area.",
    responsibleOrg: { name: "WIPO", slug: "wipo" },
    subjectMatter: "All fields of technology covered by patent documents.",
    structure:
      "The IPC is a hierarchical system: section (letter) — class (two digits) — subclass (letter) — main group / subgroup. The full IPC contains eight sections (A–H) covering human necessities, performing operations, chemistry, textiles, fixed constructions, mechanical engineering, physics and electricity.",
    officialSource: "https://www.wipo.int/classifications/ipc/en/",
    nepalRelevance:
      "Nepal-related use of the IPC by the Nepal IP Office requires verification directly with the office.",
    internationalRelevance:
      "The IPC is the global standard for patent classification and is required on patent documents published by all IPC contracting offices.",
    updateInfo:
      "The IPC is revised by the IPC Committee of Experts. A new version enters into force every January 1st.",
    verification: "Verified",
    relatedRights: ["patents"],
    versionNote: "Revised annually — verify current version directly with WIPO.",
  },
  {
    slug: "cpc",
    name: "Cooperative Patent Classification",
    abbreviation: "CPC",
    purpose: "Provides a more detailed patent classification than the IPC for search and examination.",
    responsibleOrg: { name: "EPO & USPTO", slug: "epo" },
    subjectMatter: "All fields of technology covered by patent documents, more granular than the IPC.",
    structure:
      "The CPC is based on the European Classification (ECLA) and the USPTO classification. It uses a hierarchical scheme compatible with the IPC at higher levels but extends to more than 250,000 subgroups. The CPC is a separate classification system — it is not a sub-system of the IPC.",
    officialSource: "https://www.cooperativepatentclassification.org",
    nepalRelevance:
      "The CPC is primarily used by the EPO and USPTO. Nepal-related relevance depends on whether Nepale applicants seek examination or protection through EPO or USPTO routes.",
    internationalRelevance:
      "The CPC is widely used by patent offices globally for patent searching, including for prior-art searches in PCT international searches where the searching authority uses the CPC.",
    updateInfo:
      "The CPC is jointly maintained by the EPO and USPTO and updated on a regular schedule, including revision proposals published for consultation.",
    verification: "Verified",
    relatedRights: ["patents"],
    versionNote: "Distinct from the IPC; jointly maintained by EPO and USPTO.",
  },
];

export function getClassification(slug: string) {
  return CLASSIFICATIONS.find((c) => c.slug === slug);
}
