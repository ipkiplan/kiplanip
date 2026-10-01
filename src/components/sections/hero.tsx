"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Compass, BookOpen, Globe2, Receipt } from "lucide-react";
import { Link } from "@/components/router/HashRouter";
import { SectionShell, EASE } from "@/components/kiplan/motion-section";
import { useTranslation } from "@/i18n/provider";

/**
 * Pre-computed radial-line coordinates for the Hero background SVG.
 *
 * This data is preserved from the prior implementation for hydration-safety.
 * The radial SVG visual itself has been replaced by the ip-images.webp
 * background image (per the hero background refinement task), but the
 * pre-computed constant is retained to avoid any risk of reintroducing
 * the SSR/client float-serialization mismatch that originally motivated it.
 *
 * Geometry: 24 lines, angle = (i / 24) * 2π,
 * inner radius = 120, outer radius = 360, centred at (400, 400).
 */
const HERO_RADIAL_LINES: Array<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}> = Array.from({ length: 24 }, (_, i) => {
  const a = (i / 24) * Math.PI * 2;
  const round = (n: number) => Math.round(n * 10000) / 10000;
  return {
    x1: round(400 + Math.cos(a) * 120),
    y1: round(400 + Math.sin(a) * 120),
    x2: round(400 + Math.cos(a) * 360),
    y2: round(400 + Math.sin(a) * 360),
  };
});
// Mark as intentionally unused — preserved for hydration-safety documentation.
void HERO_RADIAL_LINES;

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  // Subtle parallax on the background image — slower than the prior SVG.
  const bgY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 60]);
  const bgOpacity = useTransform(scrollY, [0, 400], [1, reduce ? 1 : 0.5]);

  return (
    <SectionShell
      id="hero"
      className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 -mt-14"
    >
      {/* === Background image — ip-images.webp ===
          Appears FIRST in the entrance sequence: fades in immediately on load
          (duration 0.6s, delay 0). The image covers the full hero area and
          extends up behind the navbar (via the -mt-14 negative margin above)
          so the navbar visually sits over the image.

          A subtle vertical gradient overlay sits between the image and the
          text for readability — never opaque, always shows the photograph. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0 }}
        style={{ y: bgY, opacity: bgOpacity }}
        className="kiplan-hero-bg pointer-events-none absolute inset-0 -z-20"
        aria-hidden="true"
      />
      {/* Readability overlay — subtle gradient, darkest behind navbar/heading */}
      <div
        className="kiplan-hero-overlay pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />

      {/* === Hero content — appears AFTER the image ===
          The text content fades in with a short delay after the background
          image is visible. Left column (heading + CTAs) at delay 0.5s,
          right column (NepalIPVisual) at delay 0.7s.

          Text colors are switched to light tints to remain readable over
          the background image + overlay, while preserving the exact same
          typographic hierarchy, wording, and structure. */}
      <div className="relative z-10 grid gap-12 lg:grid-cols-1 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
          className="max-w-2xl"
        >
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em]">
            <span className="inline-flex h-1 w-1 rounded-full bg-[var(--color-accent)]" />
            <span className="text-[var(--color-accent)]">{t("hero.eyebrow")}</span>
            <span className="mx-1 text-white/40">·</span>
            <span className="inline-flex items-center gap-1 text-white/70">
              <MapPin className="h-3 w-3" /> {t("hero.kathmanduNepal")}
            </span>
          </div>

          <h1 className="mt-5 font-display text-[2.5rem] font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance drop-shadow-[0_1px_3px_oklch(0.14_0.01_80_/_0.6)]">
            KIPLAN <span className="text-[var(--color-accent)]">IP</span> <span className="text-white/85">— {t("hero.title").replace(/^KIPLAN\s+IP\s*[—-]\s*/, "")}</span>
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-white/85 text-pretty drop-shadow-[0_1px_2px_oklch(0.14_0.01_80_/_0.5)]">
            {t("hero.subtitle")}
          </p>

          {/* === Unified button bar — deep blue container ===
              All four hero actions sit inside one cohesive deep-blue
              container so they read as a single unified navigation/action
              bar. On desktop (≥1024px), all four fit on one line.
              On mobile/tablet, the buttons wrap naturally inside the bar. */}
          <div className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-lg bg-[oklch(0.22_0.04_250)] p-2 backdrop-blur-sm dark:bg-[oklch(0.16_0.04_250)] lg:flex-nowrap">
            <Link
              to="/ip-rights"
              className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs lg:text-sm font-medium text-foreground hover:bg-white/90 transition-colors whitespace-nowrap h-[38px]"
            >
              {t("hero.exploreIpRights")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/research/ai"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-3 py-2 text-xs lg:text-sm font-medium text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors whitespace-nowrap"
            >
              <Compass className="h-4 w-4" />
              {t("hero.aiResearchInterface")}
            </Link>
            <Link
              to="/resources/general/identify-your-ip"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-3 py-2 text-xs lg:text-sm font-medium text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors whitespace-nowrap"
            >
              <Compass className="h-4 w-4" />
              {t("hero.identifyYourIp")}
            </Link>
            <Link
              to="/resources/professional/registration-charges"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-3 py-2 text-xs lg:text-sm font-medium text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors whitespace-nowrap"
            >
              <Receipt className="h-4 w-4" />
              {t("hero.ipRegistrationCharges")}
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
            {[
              { icon: <BookOpen className="h-3.5 w-3.5" />, label: t("hero.stat.8IpRights"), sub: t("hero.stat.8IpRightsSub") },
              { icon: <Globe2 className="h-3.5 w-3.5" />, label: t("hero.stat.internationalIp"), sub: t("hero.stat.internationalIpSub") },
              { icon: <Compass className="h-3.5 w-3.5" />, label: t("hero.stat.sourceFirst"), sub: t("hero.stat.sourceFirstSub") },
            ].map((s, i) => (
              <div key={i} className="text-left">
                <div className="flex items-center gap-1.5 text-[var(--color-accent)]">
                  {s.icon}
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/90">{s.label}</span>
                </div>
                <div className="mt-1.5 text-xs text-white/70 leading-relaxed">{s.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
