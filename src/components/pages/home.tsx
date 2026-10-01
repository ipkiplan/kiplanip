"use client";

import { useEffect } from "react";
import { Hero } from "@/components/sections/hero";
import { IPRightsSection } from "@/components/sections/ip-rights-section";
import { IdentifyYourIP } from "@/components/sections/identify-your-ip";
import { ResearchSection } from "@/components/sections/research-section";
import { NepalSection } from "@/components/sections/nepal-section";
import { InternationalSection } from "@/components/sections/international-section";
import { ClassificationsTreatiesSection } from "@/components/sections/classifications-treaties-section";
import { AISection } from "@/components/sections/ai-section";
import { PublicationsPreview } from "@/components/sections/publications-preview";
import { ConsultationSection } from "@/components/sections/consultation-section";

export function HomePage() {
  return (
    <>
      <Hero />
      <IPRightsSection />
      <IdentifyYourIP />
      <ResearchSection />
      <NepalSection />
      <InternationalSection />
      <ClassificationsTreatiesSection />
      <AISection />
      <PublicationsPreview />
      <ConsultationSection />
    </>
  );
}

/**
 * IdentifyYourIPPage — renders the full HomePage and then scrolls to the
 * Identify Your IP section on mount.
 *
 * This is the route target for /resources/general/identify-your-ip.
 * The section lives on the homepage (it's part of the homepage's narrative
 * flow), so this route renders HomePage and scrolls to the section's anchor
 * (#identify-your-ip) rather than rendering a separate standalone page.
 */
export function IdentifyYourIPPage() {
  useEffect(() => {
    // Small delay to ensure the HomePage has mounted and the section exists in the DOM.
    const timer = setTimeout(() => {
      const el = document.getElementById("identify-your-ip");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return <HomePage />;
}
