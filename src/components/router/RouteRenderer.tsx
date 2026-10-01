"use client";

import { type ReactNode, useEffect } from "react";
import { useRouter } from "@/components/router/HashRouter";
import { Navbar } from "@/components/nav/navbar";
import { Footer, Disclaimer } from "@/components/layout/footer";
import { HomePage, IdentifyYourIPPage } from "@/components/pages/home";
import { ErrorState } from "@/components/kiplan/related-content";

// Page imports
import { IPRightsLanding } from "@/components/pages/ip-rights-landing";
import { IPRightDetail as IPRightDetailPage } from "@/components/pages/ip-right-detail";
import { ResourcesLanding, GeneralResourcesLanding, ProfessionalResourcesLanding } from "@/components/pages/resources-landing";
import { RegistrationChargesPage } from "@/components/pages/registration-charges";
import { IPBasics, FAQs, Guides, ResearchCentre } from "@/components/pages/general-resources";
import { IPDictionary } from "@/components/pages/ip-dictionary";
import { TreatyExplorer, TreatyDetail } from "@/components/pages/treaties";
import { ClassificationExplorer, ClassificationDetail } from "@/components/pages/classifications";
import { CountriesExplorer, CountryDetail, CountryParticipationPage } from "@/components/pages/countries";
import { OrganizationsPage, OrganizationDetail, OfficesPage, OfficeDetail, FilingSystemsPage, FilingSystemDetail, SourcesPage, SourceDetail } from "@/components/pages/organizations";
import { LawsPage, LawDetail, DocumentsPage } from "@/components/pages/laws";
import { NepalIPPage, InternationalIPPage } from "@/components/pages/nepal-international";
import { PublicationsLanding, PublicationsByType, PublicationDetail } from "@/components/pages/publications";
import { AboutLanding, KIPLANIPPage, KIPLANLawFirmPage, TeamPage, PhilosophyPage, ResearchPhilosophyPage, KIPLANNotaryPage, KIPLANScholarPage } from "@/components/pages/about";
import { ContactLanding, ConsultationForm, IPInquiryForm, ResearchInquiryForm, GeneralContactForm } from "@/components/pages/contact";
import { LoginPage } from "@/components/pages/login";
import { AIResearchPage } from "@/components/pages/ai-research";
import { LegalPage } from "@/components/pages/legal";

interface RouteEntry {
  pattern: string;
  render: (params: Record<string, string>) => ReactNode;
}

const ROUTES: RouteEntry[] = [
  // Home
  { pattern: "/", render: () => <HomePage /> },

  // IP Rights
  { pattern: "/ip-rights", render: () => <IPRightsLanding /> },
  { pattern: "/ip-rights/trademarks", render: () => <IPRightDetailPage slug="trademarks" /> },
  { pattern: "/ip-rights/patents", render: () => <IPRightDetailPage slug="patents" /> },
  { pattern: "/ip-rights/industrial-designs", render: () => <IPRightDetailPage slug="industrial-designs" /> },
  { pattern: "/ip-rights/copyright", render: () => <IPRightDetailPage slug="copyright" /> },
  { pattern: "/ip-rights/trade-secrets", render: () => <IPRightDetailPage slug="trade-secrets" /> },
  { pattern: "/ip-rights/geographical-indications", render: () => <IPRightDetailPage slug="geographical-indications" /> },
  { pattern: "/ip-rights/domain-online-ip", render: () => <IPRightDetailPage slug="domain-online-ip" /> },
  { pattern: "/ip-rights/ip-portfolio", render: () => <IPRightDetailPage slug="ip-portfolio" /> },

  // Resources — landing + general + professional
  { pattern: "/resources", render: () => <ResourcesLanding /> },
  { pattern: "/resources/general", render: () => <GeneralResourcesLanding /> },
  { pattern: "/resources/general/ip-basics", render: () => <IPBasics /> },
  { pattern: "/resources/general/dictionary", render: () => <IPDictionary /> },
  { pattern: "/resources/general/faqs", render: () => <FAQs /> },
  { pattern: "/resources/general/guides", render: () => <Guides /> },
  { pattern: "/resources/general/identify-your-ip", render: () => <IdentifyYourIPPage /> }, // scrolls to the Identify Your IP section on the homepage
  { pattern: "/resources/professional", render: () => <ProfessionalResourcesLanding /> },
  { pattern: "/resources/professional/research", render: () => <ResearchCentre /> },
  { pattern: "/resources/professional/nepal-ip", render: () => <NepalIPPage /> },
  { pattern: "/resources/professional/international-ip", render: () => <InternationalIPPage /> },
  { pattern: "/resources/professional/laws", render: () => <LawsPage /> },
  { pattern: "/resources/professional/treaties", render: () => <TreatyExplorer /> },
  { pattern: "/resources/professional/classifications", render: () => <ClassificationExplorer /> },
  { pattern: "/resources/professional/countries", render: () => <CountriesExplorer /> },
  { pattern: "/resources/professional/country-participation", render: () => <CountryParticipationPage /> },
  { pattern: "/resources/professional/organizations", render: () => <OrganizationsPage /> },
  { pattern: "/resources/professional/offices", render: () => <OfficesPage /> },
  { pattern: "/resources/professional/filing-systems", render: () => <FilingSystemsPage /> },
  { pattern: "/resources/professional/sources", render: () => <SourcesPage /> },
  { pattern: "/resources/professional/documents", render: () => <DocumentsPage /> },
  { pattern: "/resources/professional/registration-charges", render: () => <RegistrationChargesPage /> },

  // About
  { pattern: "/about", render: () => <AboutLanding /> },
  { pattern: "/about/kiplan-ip", render: () => <KIPLANIPPage /> },
  { pattern: "/about/kiplan-law-firm", render: () => <KIPLANLawFirmPage /> },
  { pattern: "/about/kiplan-notary", render: () => <KIPLANNotaryPage /> },
  { pattern: "/about/kiplan-scholar", render: () => <KIPLANScholarPage /> },
  { pattern: "/about/team", render: () => <TeamPage /> },
  { pattern: "/about/philosophy", render: () => <PhilosophyPage /> },
  { pattern: "/about/research-philosophy", render: () => <ResearchPhilosophyPage /> },

  // Publications
  { pattern: "/publications", render: () => <PublicationsLanding /> },
  { pattern: "/publications/research-papers", render: () => <PublicationsByType type="Research Paper" /> },
  { pattern: "/publications/draft-papers", render: () => <PublicationsByType type="Draft Paper" /> },
  { pattern: "/publications/working-papers", render: () => <PublicationsByType type="Working Paper" /> },
  { pattern: "/publications/research-notes", render: () => <PublicationsByType type="Research Note" /> },
  { pattern: "/publications/reports", render: () => <PublicationsByType type="Report" /> },
  { pattern: "/publications/ip-updates", render: () => <PublicationsByType type="IP Update" /> },
  { pattern: "/publications/articles", render: () => <PublicationsByType type="Article" /> },
  { pattern: "/publications/commentaries", render: () => <PublicationsByType type="Commentary" /> },

  // Contact
  { pattern: "/contact", render: () => <ContactLanding /> },
  { pattern: "/contact/consultation", render: () => <ConsultationForm /> },
  { pattern: "/contact/ip-inquiry", render: () => <IPInquiryForm /> },
  { pattern: "/contact/research-inquiry", render: () => <ResearchInquiryForm /> },
  { pattern: "/contact/general", render: () => <GeneralContactForm /> },

  // Login
  { pattern: "/login", render: () => <LoginPage /> },

  // AI research
  { pattern: "/research/ai", render: () => <AIResearchPage /> },

  // Detail routes (dynamic)
  { pattern: "/research/treaty/:slug", render: (p) => <TreatyDetail slug={p.slug} /> },
  { pattern: "/research/classification/:slug", render: (p) => <ClassificationDetail slug={p.slug} /> },
  { pattern: "/research/country/:slug", render: (p) => <CountryDetail slug={p.slug} /> },
  { pattern: "/research/office/:slug", render: (p) => <OfficeDetail slug={p.slug} /> },
  { pattern: "/research/organization/:slug", render: (p) => <OrganizationDetail slug={p.slug} /> },
  { pattern: "/research/filing-system/:slug", render: (p) => <FilingSystemDetail slug={p.slug} /> },
  { pattern: "/research/law/:slug", render: (p) => <LawDetail slug={p.slug} /> },
  { pattern: "/research/publication/:slug", render: (p) => <PublicationDetail slug={p.slug} /> },
  { pattern: "/research/source/:slug", render: (p) => <SourceDetail slug={p.slug} /> },

  // Legal
  { pattern: "/legal/privacy", render: () => <LegalPage topic="privacy" /> },
  { pattern: "/legal/terms", render: () => <LegalPage topic="terms" /> },
  { pattern: "/legal/disclaimer", render: () => <LegalPage topic="disclaimer" /> },
  { pattern: "/legal/copyright", render: () => <LegalPage topic="copyright" /> },
  { pattern: "/legal/accessibility", render: () => <LegalPage topic="accessibility" /> },
  { pattern: "/legal/sitemap", render: () => <LegalPage topic="sitemap" /> },
];

function matchPath(path: string): { entry: RouteEntry; params: Record<string, string> } | null {
  for (const entry of ROUTES) {
    const params = matchRouteHelper(entry.pattern, path);
    if (params) return { entry, params };
  }
  return null;
}

function matchRouteHelper(pattern: string, path: string): Record<string, string> | null {
  const pSeg = pattern.split("/").filter(Boolean);
  const sSeg = path.split("/").filter(Boolean);
  if (pSeg.length !== sSeg.length) return null;
  const params: Record<string, string> = {};
  for (let i = 0; i < pSeg.length; i++) {
    if (pSeg[i].startsWith(":")) {
      params[pSeg[i].slice(1)] = decodeURIComponent(sSeg[i]);
    } else if (pSeg[i] !== sSeg[i]) {
      return null;
    }
  }
  return params;
}

export function RouteRenderer() {
  const { path } = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [path]);

  const matched = matchPath(path);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {matched ? (
          matched.entry.render(matched.params)
        ) : (
          <div className="py-20">
            <div className="mx-auto max-w-3xl px-6">
              <ErrorState
                title="Page not found"
                body={`The page "${path}" could not be located. Check the address or use the navigation above.`}
              />
            </div>
          </div>
        )}
      </main>
      <Disclaimer />
      <Footer />
    </div>
  );
}
