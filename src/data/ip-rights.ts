import type { IPRight } from "./types";

// 8 IP Rights per spec §25–§33. Modules vary by right where not applicable.
// Each Nepal section is marked "Verification required" — no fabrication of Nepal law.

export const IP_RIGHTS: IPRight[] = [
  {
    slug: "trademarks",
    index: 1,
    name: "Trademarks",
    shortName: "Trademarks",
    tagline: "Signs that distinguish the goods or services of one undertaking from those of others.",
    overview:
      "A trademark is any sign capable of being represented graphically and of distinguishing the goods or services of one undertaking from those of others. It may consist of words, designs, letters, numerals, colours, the shape of goods or their packaging, sounds, or any combination of these. Trademarks protect commercial origin and reputation, and enable consumers to make informed choices.",
    keyConcepts: [
      { title: "Distinctiveness", body: "A trademark must be capable of distinguishing the goods or services of one undertaking from those of others. Distinctiveness may be inherent (fanciful, arbitrary, suggestive) or acquired through use." },
      { title: "Likelihood of confusion", body: "Infringement is generally assessed by reference to whether the defendant's use of a similar sign for similar goods or services gives rise to a likelihood of confusion on the part of the relevant public." },
      { title: "Use in trade", body: "Trademark rights generally depend on use in commerce. Non-use for a prescribed period may lead to revocation in many jurisdictions." },
      { title: "Well-known marks", body: "Well-known marks (Paris Convention Article 6bis) may receive protection even without registration in a jurisdiction, where the mark is known to the relevant sector of the public." },
    ],
    protection:
      "Trademark protection arises through registration with the national or regional IP office. In some jurisdictions, unregistered marks may receive limited protection through passing off or unfair competition law. Protection is territorial and renewable indefinitely (typically in 10-year periods).",
    registrationFiling:
      "National applications are filed with the relevant IP office. International filing routes include the Madrid System (single international application designating multiple Madrid members, administered by WIPO).",
    classification: [
      { name: "Nice Classification", slug: "nice" },
      { name: "Vienna Classification", slug: "vienna" },
    ],
    nepal: {
      body:
        "Trademark registration in Nepal is administered by the Nepal IP Office. Specific procedures, fees, examination guidelines and the applicable Nice Classification edition require verification directly with the Nepal IP Office and the Government of Nepal.",
      verification: "Verification required",
    },
    internationalSystems: [
      { name: "Madrid System", slug: "madrid-system", body: "International filing system administered by WIPO, based on a basic home mark." },
      { name: "Paris Convention — Right of Priority", slug: "paris-convention", body: "Six-month priority period for trademark filings in other Paris members." },
      { name: "TRIPS — Minimum Standards", slug: "trips", body: "TRIPS Article 15 establishes minimum standards for trademark protection." },
    ],
    treaties: [
      { name: "Paris Convention", slug: "paris-convention" },
      { name: "TRIPS Agreement", slug: "trips" },
      { name: "Madrid System", slug: "madrid-system" },
    ],
    laws: [{ name: "Nepal IP Legislation", slug: "nepal-ip-laws" }],
    offices: [{ name: "Nepal Intellectual Property Office", slug: "nepal-ip-office" }],
    research: [
      { topic: "Distinctiveness", body: "The level of inherent or acquired distinctiveness required for registrability and the role of evidence of acquired distinctiveness." },
      { topic: "Use requirements", body: "Genuine use thresholds, permissible variations, and the consequences of non-use for revocation proceedings." },
      { topic: "Comparative and well-known marks", body: "The protection available to well-known marks under Paris Convention Article 6bis and national implementing provisions." },
    ],
    publications: [
      { title: "Trademark Distinctiveness — Working Paper", slug: "wp-trademark-distinctiveness" },
    ],
    sources: [
      { name: "WIPO — Trademarks", slug: "wipo" },
      { name: "Nice Classification", slug: "nice-classification-source" },
      { name: "Vienna Classification", slug: "vienna-classification-source" },
      { name: "Madrid System", slug: "madrid-system-source" },
      { name: "Paris Convention", slug: "paris-convention-source" },
      { name: "TRIPS", slug: "trips-source" },
    ],
    relatedRights: [
      { name: "Industrial Designs", slug: "industrial-designs" },
      { name: "Geographical Indications", slug: "geographical-indications" },
      { name: "Domain / Online IP Issues", slug: "domain-online-ip" },
    ],
    consultation:
      "For trademark clearance, prosecution, opposition, portfolio strategy or enforcement matters, please request a consultation.",
    icon: "Stamp",
    image: {
      src: "/image/ip-image.webp",
      alt: "A 2-by-4 grid of eight real-world trademark and brand examples — including a KIPLAN business card, HIMALAYAN HERBS product packaging, a smartphone displaying Himalayan Bites, a NEPAL HANDLOOM fabric label, a NEPAL ORIGIN certification tag, a metallic teardrop-shaped bottle, PURE NEPAL cosmetic packaging, and a phone screen with a sound-wave graphic — illustrating the variety of signs that can function as trademarks.",
      caption: "Real-world examples — a single product can engage multiple trademark categories at once",
    },
  },
  {
    slug: "patents",
    index: 2,
    name: "Patents",
    shortName: "Patents",
    tagline: "Exclusive rights granted for inventions that are new, involve an inventive step and are industrially applicable.",
    overview:
      "A patent is an exclusive right granted for an invention — a product or a process — that is new, involves an inventive step (non-obvious) and is industrially applicable. Patents confer the right to exclude others from making, using, offering for sale, selling or importing the patented invention without consent for a limited period (typically 20 years from the filing date).",
    keyConcepts: [
      { title: "Novelty", body: "An invention is new if it is not anticipated by the prior art — everything made available to the public before the filing or priority date." },
      { title: "Inventive step / non-obviousness", body: "An invention involves an inventive step if, having regard to the prior art, it would not have been obvious to a person skilled in the art." },
      { title: "Industrial applicability / utility", body: "An invention must be capable of being made or used in any kind of industry." },
      { title: "Sufficient disclosure", body: "The patent application must disclose the invention in a manner sufficiently clear and complete for it to be carried out by a person skilled in the art (the patent bargain)." },
      { title: "Exclusions", body: "Many jurisdictions exclude discoveries, scientific theories, mathematical methods, aesthetic creations, schemes for performing mental acts, business methods, programs for computers as such, and presentations of information — subject to national variation." },
    ],
    protection:
      "Patent protection arises through examination and grant by the national or regional patent office. A patent confers the right to exclude others from exploiting the invention for the term of the patent. Protection is territorial.",
    registrationFiling:
      "National applications are filed with the relevant patent office. Regional routes include the European Patent Office (EPO) for European contracting states. International filing is provided by the Patent Cooperation Treaty (PCT) administered by WIPO.",
    classification: [
      { name: "International Patent Classification (IPC)", slug: "ipc" },
      { name: "Cooperative Patent Classification (CPC)", slug: "cpc" },
    ],
    nepal: {
      body:
        "Patent protection in Nepal is administered by the Nepal IP Office. Specific procedures, examination practice, fees, statutory subject matter exclusions and the applicable edition of the IPC require verification directly with the Nepal IP Office and the Government of Nepal.",
      verification: "Verification required",
    },
    internationalSystems: [
      { name: "PCT (Patent Cooperation Treaty)", slug: "pct", body: "International filing procedure with international search report and optional preliminary examination." },
      { name: "European Patent System (EPO)", slug: null, body: "Regional examination and grant for EPO contracting states." },
      { name: "Paris Convention — Right of Priority", slug: "paris-convention", body: "12-month priority period for patent filings in other Paris members." },
      { name: "Budapest Treaty", slug: "budapest-treaty", body: "International recognition of microorganism deposits for biotech patents." },
      { name: "TRIPS — Minimum Standards", slug: "trips", body: "TRIPS Article 27 sets minimum standards including 20-year term." },
    ],
    treaties: [
      { name: "Paris Convention", slug: "paris-convention" },
      { name: "Patent Cooperation Treaty (PCT)", slug: "pct" },
      { name: "TRIPS Agreement", slug: "trips" },
      { name: "Budapest Treaty", slug: "budapest-treaty" },
    ],
    laws: [{ name: "Nepal IP Legislation", slug: "nepal-ip-laws" }],
    offices: [
      { name: "Nepal Intellectual Property Office", slug: "nepal-ip-office" },
      { name: "European Patent Office", slug: "epo-office" },
      { name: "USPTO", slug: "uspto-office" },
    ],
    research: [
      { topic: "Inventive step assessment", body: "The level of non-obviousness required, the role of the skilled person and the problem-solution approach used by the EPO." },
      { topic: "Subject matter eligibility", body: "The treatment of software-related, biotech and business-method inventions, and the divergence between jurisdictions." },
      { topic: "Compulsory licensing", body: "Circumstances in which compulsory licences may be granted (TRIPS Articles 31, 31bis) and the safeguards required." },
    ],
    publications: [
      { title: "Patent Subject Matter Eligibility — Draft Paper", slug: "dp-patent-subject-matter" },
    ],
    sources: [
      { name: "WIPO — Patents", slug: "wipo" },
      { name: "PCT", slug: "pct-source" },
      { name: "International Patent Classification", slug: "ipc-classification-source" },
      { name: "Cooperative Patent Classification", slug: "cpc-classification-source" },
      { name: "Paris Convention", slug: "paris-convention-source" },
      { name: "Budapest Treaty", slug: "budapest-treaty-source" },
      { name: "TRIPS", slug: "trips-source" },
      { name: "EPO", slug: "epo" },
      { name: "USPTO", slug: "uspto" },
    ],
    relatedRights: [
      { name: "Industrial Designs", slug: "industrial-designs" },
      { name: "Trade Secrets / Confidential Information", slug: "trade-secrets" },
      { name: "IP Portfolio / Multiple Rights", slug: "ip-portfolio" },
    ],
    consultation:
      "For patentability assessment, drafting, prosecution, opposition, freedom-to-operate analysis or portfolio strategy, please request a consultation.",
    icon: "Lightbulb",
  },
  {
    slug: "industrial-designs",
    index: 3,
    name: "Industrial Designs",
    shortName: "Industrial Designs",
    tagline: "Protection of the ornamental or aesthetic aspect of an article, including shape, pattern and colour.",
    overview:
      "An industrial design is the ornamental or aesthetic aspect of a useful article — including its shape, pattern, colour or combination — that appeals to the eye. Design protection is distinct from patent protection (which protects functional aspects) and from trademark protection (which protects origin-identifying signs).",
    keyConcepts: [
      { title: "Novelty / individual character", body: "Designs must be new and, in many jurisdictions, possess individual character — that is, produce a different overall impression on the informed user from prior designs." },
      { title: "Visibility in use", body: "Some jurisdictions require that the features for which protection is claimed are visible in normal use of the article." },
      { title: "Functionality exclusion", body: "Designs are generally not protectable to the extent that their appearance is solely dictated by the technical function of the article — that is the domain of patent law." },
      { title: "Term and renewal", body: "Design protection typically lasts for an initial period (e.g. 5 years) and is renewable for one or more terms, subject to jurisdiction." },
    ],
    protection:
      "Design protection arises through registration with the national or regional IP office. Some jurisdictions also provide unregistered design rights that arise automatically upon first disclosure.",
    registrationFiling:
      "National applications are filed with the relevant office. International filing is provided by the Hague System administered by WIPO, allowing a single international application designating multiple Hague members.",
    classification: [{ name: "Locarno Classification", slug: "locarno" }],
    nepal: {
      body:
        "Industrial design protection in Nepal is administered by the Nepal IP Office. Specific procedures, fees, examination guidelines and the applicable edition of the Locarno Classification require verification directly with the Nepal IP Office and the Government of Nepal.",
      verification: "Verification required",
    },
    internationalSystems: [
      { name: "Hague System", slug: "hague-system", body: "International filing system administered by WIPO for industrial designs." },
      { name: "Paris Convention — Right of Priority", slug: "paris-convention", body: "Six-month priority period for design filings in other Paris members." },
      { name: "TRIPS — Minimum Standards", slug: "trips", body: "TRIPS Article 25 sets minimum standards of design protection." },
    ],
    treaties: [
      { name: "Paris Convention", slug: "paris-convention" },
      { name: "Hague System", slug: "hague-system" },
      { name: "TRIPS Agreement", slug: "trips" },
    ],
    laws: [{ name: "Nepal IP Legislation", slug: "nepal-ip-laws" }],
    offices: [{ name: "Nepal Intellectual Property Office", slug: "nepal-ip-office" }],
    research: [
      { topic: "Individual character", body: "The standard of the 'informed user' and the scope of comparison in assessing individual character." },
      { topic: "Unregistered design right", body: "The interaction between registered and unregistered design protection (e.g. EU unregistered Community design)." },
      { topic: "Functionality and visibility", body: "The boundary between design and patent protection for functional features." },
    ],
    publications: [
      { title: "Design Protection — Research Note", slug: "rn-design-protection" },
    ],
    sources: [
      { name: "WIPO — Designs", slug: "wipo" },
      { name: "Locarno Classification", slug: "locarno-classification-source" },
      { name: "Hague System", slug: "hague-system-source" },
      { name: "Paris Convention", slug: "paris-convention-source" },
      { name: "TRIPS", slug: "trips-source" },
    ],
    relatedRights: [
      { name: "Trademarks", slug: "trademarks" },
      { name: "Patents", slug: "patents" },
      { name: "Copyright", slug: "copyright" },
    ],
    consultation:
      "For design clearance, prosecution, Hague System filings or enforcement of design rights, please request a consultation.",
    icon: "Shapes",
  },
  {
    slug: "copyright",
    index: 4,
    name: "Copyright",
    shortName: "Copyright",
    tagline: "Protection of original literary, artistic, scientific and other creative works upon creation.",
    overview:
      "Copyright protects original literary, artistic, scientific, musical, dramatic and cinematographic works, as well as software, databases and other works of authorship. Under the Berne Convention, protection arises automatically upon creation without formal registration, although some jurisdictions provide voluntary registration systems.",
    keyConcepts: [
      { title: "Originality", body: "A work must be original — that is, the product of the author's own intellectual creation, not copied from another source." },
      { title: "Idea–expression distinction", body: "Copyright protects the expression of ideas, not the ideas themselves, procedures, methods of operation or mathematical concepts as such." },
      { title: "Economic rights", body: "Reproduction, distribution, public performance, communication to the public, adaptation and translation rights are typically conferred on the rights-holder." },
      { title: "Moral rights", body: "The right of attribution (paternity) and the right of integrity — separate from economic rights and retained by the author in many jurisdictions." },
      { title: "Term", body: "The Berne Convention minimum term is life of the author plus 50 years; many jurisdictions provide longer terms." },
    ],
    protection:
      "Protection arises automatically upon creation in Berne Convention members. Some jurisdictions provide voluntary registration that may serve as evidence of ownership. Protection is territorial but the Berne Convention guarantees national treatment across members.",
    registrationFiling:
      "Copyright is not primarily a registration-based right under the Berne Convention. Voluntary registration systems exist in some jurisdictions (e.g. US Copyright Office) and may be used for evidence or recordation of transfers.",
    classification: null,
    nepal: {
      body:
        "Copyright protection in Nepal is governed by national copyright legislation. Specific statute titles, term, ownership and moral rights provisions require verification directly with the Government of Nepal and authoritative sources.",
      verification: "Verification required",
    },
    internationalSystems: [
      { name: "Berne Convention", slug: "berne-convention", body: "Principal international copyright treaty — automatic protection and national treatment." },
      { name: "WCT (WIPO Copyright Treaty)", slug: "wct", body: "Addresses copyright in the digital environment." },
      { name: "WPPT (WIPO Performances and Phonograms Treaty)", slug: "wppt", body: "Addresses performers' and producers' rights in the digital environment." },
      { name: "Rome Convention", slug: "rome-convention", body: "Protects performers, phonogram producers and broadcasting organisations (related rights)." },
      { name: "TRIPS — Minimum Standards", slug: "trips", body: "TRIPS Articles 9–14 incorporate Berne substantive standards and address related rights." },
    ],
    treaties: [
      { name: "Berne Convention", slug: "berne-convention" },
      { name: "WCT (WIPO Copyright Treaty)", slug: "wct" },
      { name: "WPPT (WIPO Performances and Phonograms Treaty)", slug: "wppt" },
      { name: "Rome Convention", slug: "rome-convention" },
      { name: "TRIPS Agreement", slug: "trips" },
    ],
    laws: [{ name: "Nepal IP Legislation", slug: "nepal-ip-laws" }],
    offices: [{ name: "Nepal Intellectual Property Office", slug: "nepal-ip-office" }],
    research: [
      { topic: "Originality", body: "The level of intellectual creation required across jurisdictions, including for compilations and databases." },
      { topic: "Digital exhaustion", body: "Whether the distribution right is exhausted after a digital first sale, and the divergence between jurisdictions." },
      { topic: "Text and data mining", body: "Treatment of TDM under copyright exceptions and the emergence of TDM-specific statutory licences." },
    ],
    publications: [
      { title: "Copyright in the Digital Environment — Article", slug: "art-copyright-digital" },
    ],
    sources: [
      { name: "WIPO — Copyright", slug: "wipo" },
      { name: "Berne Convention", slug: "berne-convention-source" },
      { name: "WCT & WPPT", slug: "wct-wppt" },
      { name: "Rome Convention", slug: "rome-convention-source" },
      { name: "TRIPS", slug: "trips-source" },
    ],
    relatedRights: [
      { name: "Trade Secrets / Confidential Information", slug: "trade-secrets" },
      { name: "Domain / Online IP Issues", slug: "domain-online-ip" },
      { name: "Industrial Designs", slug: "industrial-designs" },
    ],
    consultation:
      "For copyright licensing, enforcement, collective rights management, or digital-platform matters, please request a consultation.",
    icon: "BookOpen",
  },
  {
    slug: "trade-secrets",
    index: 5,
    name: "Trade Secrets / Confidential Information",
    shortName: "Trade Secrets",
    tagline: "Protection of commercially valuable information that is secret, has commercial value and is subject to reasonable steps to keep it secret.",
    overview:
      "A trade secret is information that is secret (not generally known or readily accessible), has commercial value because it is secret, and has been subject to reasonable steps under the circumstances to keep it secret. Trade secrets can include formulas, manufacturing processes, customer lists, business methods, source code and technical know-how.",
    keyConcepts: [
      { title: "Secrecy", body: "The information must not be generally known among, or readily accessible to, persons within the circles that normally deal with the kind of information." },
      { title: "Commercial value", body: "The information must derive commercial value from its secrecy." },
      { title: "Reasonable steps", body: "The holder must have taken reasonable measures under the circumstances to keep the information secret — contractual, technical and organisational." },
      { title: "No registration", body: "Trade secrets are not registered; protection arises from the secrecy itself and from laws against misappropriation, breach of confidence and unfair competition." },
    ],
    protection:
      "Protection arises automatically upon the information meeting the three criteria above. Enforcement is through civil actions for misappropriation, breach of contract or breach of confidence. TRIPS Article 39 sets minimum standards of protection.",
    registrationFiling:
      "Not applicable. Trade secrets are not registered. Protection is maintained by the holder through secrecy measures and contractual controls (NDAs, employee agreements).",
    classification: null,
    nepal: {
      body:
        "Trade secret protection in Nepal is governed by national law — including any unfair competition, contract or tort provisions that may apply. Specific statutory framework and case law require verification directly with the Government of Nepal and authoritative sources.",
      verification: "Verification required",
    },
    internationalSystems: [
      { name: "TRIPS — Article 39", slug: "trips", body: "TRIPS Article 39.2 sets international minimum standards for protection of undisclosed information." },
      { name: "Paris Convention — Repression of Unfair Competition", slug: "paris-convention", body: "Paris Convention Article 10bis obliges members to provide effective protection against unfair competition." },
    ],
    treaties: [
      { name: "TRIPS Agreement", slug: "trips" },
      { name: "Paris Convention", slug: "paris-convention" },
    ],
    laws: [{ name: "Nepal IP Legislation", slug: "nepal-ip-laws" }],
    offices: null,
    research: [
      { topic: "Reasonable steps", body: "The contractual, organisational and technical measures that satisfy the 'reasonable steps' criterion across jurisdictions." },
      { topic: "Reverse engineering", body: "The extent to which reverse engineering is permitted and its effect on trade secret status." },
      { topic: "Employee mobility", body: "The interaction between trade secret protection, post-employment restrictive covenants and free movement of workers." },
    ],
    publications: [
      { title: "Trade Secret Protection — Working Paper", slug: "wp-trade-secret-protection" },
    ],
    sources: [
      { name: "WIPO — Trade Secrets", slug: "wipo" },
      { name: "TRIPS", slug: "trips-source" },
      { name: "Paris Convention", slug: "paris-convention-source" },
    ],
    relatedRights: [
      { name: "Patents", slug: "patents" },
      { name: "IP Portfolio / Multiple Rights", slug: "ip-portfolio" },
    ],
    consultation:
      "For trade secret audits, NDAs, employee mobility matters, or misappropriation claims, please request a consultation.",
    icon: "Lock",
  },
  {
    slug: "geographical-indications",
    index: 6,
    name: "Geographical Indications",
    shortName: "Geographical Indications",
    tagline: "Signs used on goods that have a specific geographical origin and possess qualities, reputation or characteristics essentially attributable to that origin.",
    overview:
      "A geographical indication (GI) is a sign used on products that have a specific geographical origin and possess qualities, reputation or characteristics that are essentially attributable to that origin. Typical GIs include agricultural products, foodstuffs, wines and spirits, and handicrafts.",
    keyConcepts: [
      { title: "Origin link", body: "There must be a qualitative link between the product and its place of origin — qualities, reputation or other characteristics." },
      { title: "Collective and certification marks", body: "Some jurisdictions protect GIs through collective or certification marks; others have sui generis GI registers." },
      { title: " Lisbon Agreement", body: "The Lisbon Agreement (1958) provides for the international registration of appellations of origin; the Geneva Act (2015) extends protection to GIs more broadly." },
      { title: "TRIPS Article 22–24", body: "TRIPS Articles 22–24 set minimum standards for GI protection, including higher protection for wines and spirits." },
    ],
    protection:
      "Protection is available through sui generis registers, collective or certification marks, or specific administrative protection schemes. TRIPS Articles 22–24 set international minimum standards.",
    registrationFiling:
      "International registration of appellations of origin is available under the Lisbon System administered by WIPO. The Geneva Act of the Lisbon Agreement extends to GIs.",
    classification: null,
    nepal: {
      body:
        "Geographical indications relevant to Nepal — including agricultural products, tea, handicrafts and other traditional goods of regional origin — may be protected under national law. Specific GI registrations, registered product names and the statutory framework require verification directly with the Government of Nepal and authoritative sources.",
      verification: "Verification required",
    },
    internationalSystems: [
      { name: "Lisbon System (Appellations of Origin / GIs)", slug: null, body: "International registration administered by WIPO under the Lisbon Agreement and its Geneva Act." },
      { name: "TRIPS — Articles 22–24", slug: "trips", body: "International minimum standards for GI protection." },
      { name: "Paris Convention — Indications of Source", slug: "paris-convention", body: "Paris Convention Article 10 protects indications of source." },
    ],
    treaties: [
      { name: "TRIPS Agreement", slug: "trips" },
      { name: "Paris Convention", slug: "paris-convention" },
    ],
    laws: [{ name: "Nepal IP Legislation", slug: "nepal-ip-laws" }],
    offices: [{ name: "Nepal Intellectual Property Office", slug: "nepal-ip-office" }],
    research: [
      { topic: "Sui generis vs collective marks", body: "Comparative analysis of GI protection models — sui generis registers, collective marks, certification marks and administrative schemes." },
      { topic: "Conflict with trademarks", body: "The treatment of prior trademark rights that conflict with a GI registration, and TRIPS Article 24 exceptions." },
      { topic: "Nepal GIs", body: "Identification of products that may qualify as Nepalese GIs, subject to verification of registered names and the statutory framework." },
    ],
    publications: [
      { title: "Geographical Indications for Nepal — Working Paper", slug: "wp-gi-nepal" },
    ],
    sources: [
      { name: "WIPO — GIs", slug: "wipo" },
      { name: "TRIPS", slug: "trips-source" },
      { name: "Paris Convention", slug: "paris-convention-source" },
    ],
    relatedRights: [
      { name: "Trademarks", slug: "trademarks" },
      { name: "IP Portfolio / Multiple Rights", slug: "ip-portfolio" },
    ],
    consultation:
      "For GI registrations, brand-protection strategy for regional products, or GI enforcement, please request a consultation.",
    icon: "MapPin",
    image: {
      src: "/image/craft.webp",
      alt: "A craftsman wearing a patterned cap and dark shirt uses a hammer and chisel to carve an intricate wooden panel on a workbench, with a golden Buddha statue and traditional tiered-roof buildings visible in the background — illustrating the traditional knowledge and regional cultural production that geographical indications protect.",
      caption: "Traditional crafts and regional products — the domain of geographical indications",
    },
  },
  {
    slug: "domain-online-ip",
    index: 7,
    name: "Domain / Online IP Issues",
    shortName: "Domain & Online IP",
    tagline: "Intersection of IP rights with the domain name system, online platforms and digital content distribution.",
    overview:
      "This right addresses the intersection of IP rights with the domain name system (DNS), online platforms, social media and digital distribution channels. It includes cybersquatting, UDRP and other dispute resolution mechanisms, online trademark enforcement, platform liability, and digital copyright matters including TPMs and DRMs.",
    keyConcepts: [
      { title: "UDRP", body: "The Uniform Domain-Name Dispute-Resolution Policy (UDRP), administered by ICANN, provides a streamlined mechanism for resolving abusive registrations of domain names that conflict with trademarks." },
      { title: "ccTLD disputes", body: "Country-code top-level domains (ccTLDs) often have their own dispute resolution policies, which may differ from the UDRP." },
      { title: "Platform liability", body: "The treatment of online intermediary liability for infringing content, including notice-and-takedown regimes and safe harbours." },
      { title: "TPMs and DRMs", body: "Technological Protection Measures and Digital Rights Management — protected under WCT Article 11 and national implementing legislation." },
    ],
    protection:
      "Protection is multi-layered: trademarks and copyright protect the underlying marks and works; the UDRP and ccTLD dispute policies address domain name disputes; notice-and-takedown regimes address online infringement; and TPMs are protected under the WCT and national law.",
    registrationFiling:
      "Domain registrations are made through ICANN-accredited registrars. IP rights underlying online enforcement are registered with the relevant IP office.",
    classification: null,
    nepal: {
      body:
        "The Nepalese national ccTLD (.np) is administered by the relevant Nepalese registry. Specific registration requirements, dispute resolution policies and eligibility criteria require verification directly with the registry operator and authoritative sources.",
      verification: "Verification required",
    },
    internationalSystems: [
      { name: "UDRP (ICANN)", slug: null, body: "Streamlined dispute resolution for abusive registrations of generic top-level domain names." },
      { name: "WCT — TPM Protection", slug: "wct", body: "WCT Article 11 requires legal protection against circumvention of effective technological measures." },
      { name: "WPPT — Rights Management Information", slug: "wppt", body: "WPPT protects rights management information for performers and phonogram producers." },
      { name: "TRIPS — Online Enforcement", slug: "trips", body: "TRIPS Part III enforcement obligations apply to online infringement." },
    ],
    treaties: [
      { name: "WCT (WIPO Copyright Treaty)", slug: "wct" },
      { name: "WPPT (WIPO Performances and Phonograms Treaty)", slug: "wppt" },
      { name: "TRIPS Agreement", slug: "trips" },
    ],
    laws: [{ name: "Nepal IP Legislation", slug: "nepal-ip-laws" }],
    offices: null,
    research: [
      { topic: "UDRP and ccTLD policy", body: "Comparative analysis of dispute resolution mechanisms across gTLDs and ccTLDs." },
      { topic: "Notice-and-takedown", body: "Effectiveness and due-process considerations of notice-and-takedown regimes across jurisdictions." },
      { topic: "TPM anti-circumvention", body: "The scope of TPM anti-circumvention protection, exceptions for interoperability and research, and the relationship with copyright limitations." },
    ],
    publications: [
      { title: "Online IP Enforcement — Article", slug: "art-online-ip-enforcement" },
    ],
    sources: [
      { name: "WIPO — Domain Names", slug: "wipo" },
      { name: "WCT & WPPT", slug: "wct-wppt" },
      { name: "TRIPS", slug: "trips-source" },
    ],
    relatedRights: [
      { name: "Trademarks", slug: "trademarks" },
      { name: "Copyright", slug: "copyright" },
      { name: "IP Portfolio / Multiple Rights", slug: "ip-portfolio" },
    ],
    consultation:
      "For domain name disputes, UDRP filings, online enforcement, or platform compliance, please request a consultation.",
    icon: "Globe",
  },
  {
    slug: "ip-portfolio",
    index: 8,
    name: "IP Portfolio / Multiple Rights",
    shortName: "IP Portfolio",
    tagline: "Strategy for managing multiple IP rights covering a single product, brand, technology or business.",
    overview:
      "A single commercial product, brand, technology or business is typically protected by multiple IP rights simultaneously — patents on functional aspects, design rights on appearance, trademarks on origin, copyright on materials and code, trade secrets on know-how, and contractual controls on confidential information. Coordinated portfolio management is essential.",
    keyConcepts: [
      { title: "Layered protection", body: "Different IP rights protect different aspects of the same product — for example, a smartphone may be protected by utility patents on its technology, design rights on its appearance, trademarks on its brand, copyright on its software and trade secrets on its manufacturing processes." },
      { title: "Lifecycle management", body: "IP rights have different terms, renewal dates and procedural requirements. Portfolio management tracks filings, annuities, ownership changes and enforcement decisions." },
      { title: "Cross-border strategy", body: "Territoriality requires parallel filings in each jurisdiction of interest, with international systems (PCT, Madrid, Hague) used to streamline the process." },
      { title: "Freedom to operate", body: "FTO analysis assesses whether a commercial activity can be carried out without infringing third-party IP rights in the relevant jurisdictions." },
    ],
    protection:
      "Portfolio protection combines the protection mechanisms of each constituent right. Coordination ensures that filings are timed, that disclosure in one right does not undermine another (e.g. patent disclosure vs trade secret), and that enforcement is prioritised.",
    registrationFiling:
      "Portfolio filings combine national applications, regional routes (EPO) and international systems (PCT, Madrid, Hague). Coordination with commercial milestones is essential.",
    classification: [
      { name: "Nice Classification", slug: "nice" },
      { name: "Vienna Classification", slug: "vienna" },
      { name: "Locarno Classification", slug: "locarno" },
      { name: "International Patent Classification (IPC)", slug: "ipc" },
      { name: "Cooperative Patent Classification (CPC)", slug: "cpc" },
    ],
    nepal: {
      body:
        "For Nepale entities and rights-holders, portfolio strategy must coordinate Nepal IP Office filings with international routes (PCT, Madrid, Hague). Specific procedures and eligibility require verification with the Nepal IP Office and WIPO authoritative sources.",
      verification: "Verification required",
    },
    internationalSystems: [
      { name: "PCT (Patents)", slug: "pct", body: "International patent filing." },
      { name: "Madrid System (Trademarks)", slug: "madrid-system", body: "International trademark filing." },
      { name: "Hague System (Designs)", slug: "hague-system", body: "International design filing." },
      { name: "Lisbon System (GIs)", slug: null, body: "International registration of appellations of origin / GIs." },
    ],
    treaties: [
      { name: "Paris Convention", slug: "paris-convention" },
      { name: "Berne Convention", slug: "berne-convention" },
      { name: "TRIPS Agreement", slug: "trips" },
      { name: "Patent Cooperation Treaty (PCT)", slug: "pct" },
      { name: "Madrid System", slug: "madrid-system" },
      { name: "Hague System", slug: "hague-system" },
    ],
    laws: [{ name: "Nepal IP Legislation", slug: "nepal-ip-laws" }],
    offices: [
      { name: "Nepal Intellectual Property Office", slug: "nepal-ip-office" },
      { name: "WIPO Secretariat", slug: "wipo-office" },
    ],
    research: [
      { topic: "Layered protection", body: "How different IP rights interact to protect a single product, and the strategic considerations in coordinating filings." },
      { topic: "Disclosure trade-offs", body: "The trade-off between patent disclosure (public) and trade secret protection (private), and the strategic use of each." },
      { topic: "Open and standards-essential patents", body: "The treatment of FRAND-licensing for standards-essential patents and its impact on portfolio strategy." },
    ],
    publications: [
      { title: "IP Portfolio Strategy — Working Paper", slug: "wp-ip-portfolio" },
    ],
    sources: [
      { name: "WIPO — Portfolio Management", slug: "wipo" },
      { name: "KIPLAN IP Research Architecture", slug: "kiplan-research" },
    ],
    relatedRights: [
      { name: "Trademarks", slug: "trademarks" },
      { name: "Patents", slug: "patents" },
      { name: "Industrial Designs", slug: "industrial-designs" },
      { name: "Copyright", slug: "copyright" },
      { name: "Trade Secrets / Confidential Information", slug: "trade-secrets" },
      { name: "Geographical Indications", slug: "geographical-indications" },
      { name: "Domain / Online IP Issues", slug: "domain-online-ip" },
    ],
    consultation:
      "For portfolio audit, multi-right strategy, freedom-to-operate analysis, or coordinated international filings, please request a consultation.",
    icon: "Layers",
    image: {
      src: "/image/portfolio-legla-instrument.jpg",
      alt: "A gold emblem of a crowned lion holding scales on a shield, surrounded by gold wax seals, rubber stamps, wavy lines, and a banner reading CERTIFIED LEGAL INSTRUMENTS, with faint cursive text and signatures in the background — representing the layered, certified legal instruments that constitute a multi-right IP portfolio.",
      caption: "Layered protection — a portfolio engages multiple certified legal instruments at once",
    },
  },
];

export function getIPRight(slug: string) {
  return IP_RIGHTS.find((r) => r.slug === slug);
}
