// Centralised navigation config — exactly 6 top-level items per spec.
//
// i18n integration: each NavSection and NavChild carries `labelKey` (and
// optionally `descriptionKey`) pointing to a translation key in the i18n
// registry. The actual display label is resolved at render time via
// `t(labelKey)` — so the NAV data structure is locale-agnostic and the
// translations live in src/i18n/locales/{en,ne,zh-CN,ja}.ts.
//
// The legacy `label` field is kept as the English fallback / machine-readable
// name (used for `key=` and AccordionItem value generation) but is NOT shown
// to users directly.

export interface NavChild {
  label: string;        // English fallback (machine-readable, used for keys/anchors)
  labelKey: string;     // i18n key for the display label
  href: string;
  descriptionKey?: string;  // i18n key for the description (optional)
  group?: string;       // Group label key (e.g. "menu.general" or "menu.professional")
}

export interface NavSection {
  label: string;        // English fallback
  labelKey: string;     // i18n key for the display label
  href: string;
  children?: NavChild[];
}

export const NAV: NavSection[] = [
  {
    label: "HOME",
    labelKey: "nav.home",
    href: "/",
  },
  {
    label: "IP RIGHTS",
    labelKey: "nav.ipRights",
    href: "/ip-rights",
    children: [
      { label: "Trademarks", labelKey: "nav.trademarks", href: "/ip-rights/trademarks", descriptionKey: "nav.trademarksDesc" },
      { label: "Patents", labelKey: "nav.patents", href: "/ip-rights/patents", descriptionKey: "nav.patentsDesc" },
      { label: "Industrial Designs", labelKey: "nav.industrialDesigns", href: "/ip-rights/industrial-designs", descriptionKey: "nav.industrialDesignsDesc" },
      { label: "Copyright", labelKey: "nav.copyright", href: "/ip-rights/copyright", descriptionKey: "nav.copyrightDesc" },
      { label: "Trade Secrets", labelKey: "nav.tradeSecrets", href: "/ip-rights/trade-secrets", descriptionKey: "nav.tradeSecretsDesc" },
      { label: "Geographical Indications", labelKey: "nav.geographicalIndications", href: "/ip-rights/geographical-indications", descriptionKey: "nav.geographicalIndicationsDesc" },
      { label: "Domain / Online IP", labelKey: "nav.domainOnlineIp", href: "/ip-rights/domain-online-ip", descriptionKey: "nav.domainOnlineIpDesc" },
      { label: "IP Portfolio", labelKey: "nav.ipPortfolio", href: "/ip-rights/ip-portfolio", descriptionKey: "nav.ipPortfolioDesc" },
    ],
  },
  {
    label: "RESOURCES",
    labelKey: "nav.resources",
    href: "/resources",
    children: [
      { label: "General Resources", labelKey: "nav.generalResources", href: "/resources/general", descriptionKey: "nav.generalResourcesDesc", group: "menu.general" },
      { label: "IP Basics", labelKey: "nav.ipBasics", href: "/resources/general/ip-basics", group: "menu.general" },
      { label: "IP Dictionary", labelKey: "nav.ipDictionary", href: "/resources/general/dictionary", group: "menu.general" },
      { label: "FAQs", labelKey: "nav.faqs", href: "/resources/general/faqs", group: "menu.general" },
      { label: "Guides", labelKey: "nav.guides", href: "/resources/general/guides", group: "menu.general" },
      { label: "Identify Your IP", labelKey: "nav.identifyYourIp", href: "/resources/general/identify-your-ip", group: "menu.general" },
      { label: "Professional Resources", labelKey: "nav.professionalResources", href: "/resources/professional", descriptionKey: "nav.professionalResourcesDesc", group: "menu.professional" },
      { label: "Research Centre", labelKey: "nav.researchCentre", href: "/resources/professional/research", group: "menu.professional" },
      { label: "Nepal IP", labelKey: "nav.nepalIp", href: "/resources/professional/nepal-ip", group: "menu.professional" },
      { label: "International IP", labelKey: "nav.internationalIp", href: "/resources/professional/international-ip", group: "menu.professional" },
      { label: "Laws", labelKey: "nav.laws", href: "/resources/professional/laws", group: "menu.professional" },
      { label: "Treaties", labelKey: "nav.treaties", href: "/resources/professional/treaties", group: "menu.professional" },
      { label: "Classifications", labelKey: "nav.classifications", href: "/resources/professional/classifications", group: "menu.professional" },
      { label: "Countries", labelKey: "nav.countries", href: "/resources/professional/countries", group: "menu.professional" },
      { label: "Country Participation", labelKey: "nav.countryParticipation", href: "/resources/professional/country-participation", group: "menu.professional" },
      { label: "Organizations", labelKey: "nav.organizations", href: "/resources/professional/organizations", group: "menu.professional" },
      { label: "IP Offices", labelKey: "nav.ipOffices", href: "/resources/professional/offices", group: "menu.professional" },
      { label: "Filing Systems", labelKey: "nav.filingSystems", href: "/resources/professional/filing-systems", group: "menu.professional" },
      { label: "Source Library", labelKey: "nav.sourceLibrary", href: "/resources/professional/sources", group: "menu.professional" },
      { label: "Document Library", labelKey: "nav.documentLibrary", href: "/resources/professional/documents", group: "menu.professional" },
    ],
  },
  {
    label: "ABOUT",
    labelKey: "nav.about",
    href: "/about",
    children: [
      { label: "KIPLAN IP", labelKey: "nav.kiplanIp", href: "/about/kiplan-ip", descriptionKey: "nav.kiplanIpDesc" },
      { label: "KIPLAN Law Firm", labelKey: "nav.kiplanLawFirm", href: "/about/kiplan-law-firm", descriptionKey: "nav.kiplanLawFirmDesc" },
      { label: "Team", labelKey: "nav.team", href: "/about/team", descriptionKey: "nav.teamDesc" },
      { label: "Philosophy", labelKey: "nav.philosophy", href: "/about/philosophy", descriptionKey: "nav.philosophyDesc" },
      { label: "Research Philosophy", labelKey: "nav.researchPhilosophy", href: "/about/research-philosophy", descriptionKey: "nav.researchPhilosophyDesc" },
    ],
  },
  {
    label: "PUBLICATIONS",
    labelKey: "nav.publications",
    href: "/publications",
    children: [
      { label: "Research Papers", labelKey: "nav.researchPapers", href: "/publications/research-papers", descriptionKey: "nav.researchPapersDesc" },
      { label: "Draft Papers", labelKey: "nav.draftPapers", href: "/publications/draft-papers", descriptionKey: "nav.draftPapersDesc" },
      { label: "Working Papers", labelKey: "nav.workingPapers", href: "/publications/working-papers", descriptionKey: "nav.workingPapersDesc" },
      { label: "Research Notes", labelKey: "nav.researchNotes", href: "/publications/research-notes", descriptionKey: "nav.researchNotesDesc" },
      { label: "Reports", labelKey: "nav.reports", href: "/publications/reports", descriptionKey: "nav.reportsDesc" },
      { label: "IP Updates", labelKey: "nav.ipUpdates", href: "/publications/ip-updates", descriptionKey: "nav.ipUpdatesDesc" },
      { label: "Articles", labelKey: "nav.articles", href: "/publications/articles", descriptionKey: "nav.articlesDesc" },
      { label: "Commentaries", labelKey: "nav.commentaries", href: "/publications/commentaries", descriptionKey: "nav.commentariesDesc" },
    ],
  },
  {
    label: "CONTACT",
    labelKey: "nav.contact",
    href: "/contact",
    children: [
      { label: "Consultation", labelKey: "nav.consultation", href: "/contact/consultation", descriptionKey: "nav.consultationDesc" },
      { label: "IP Inquiry", labelKey: "nav.ipInquiry", href: "/contact/ip-inquiry", descriptionKey: "nav.ipInquiryDesc" },
      { label: "Research Inquiry", labelKey: "nav.researchInquiry", href: "/contact/research-inquiry", descriptionKey: "nav.researchInquiryDesc" },
      { label: "General Contact", labelKey: "nav.generalContact", href: "/contact/general", descriptionKey: "nav.generalContactDesc" },
    ],
  },
];

export function findNavSection(href: string) {
  return NAV.find((n) => n.href === href || (n.children && n.children.some((c) => c.href === href)));
}
