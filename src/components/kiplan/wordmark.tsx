"use client";

import { Link } from "@/components/router/HashRouter";

/**
 * KIPLAN IP Wordmark — the official KIPLAN IP brand logo.
 *
 * Uses the complete logo image (/image/kiplan-ip-logo.jpg) which
 * contains: the icon (rounded square with "K" + globe), the
 * "KIPLAN IP" wordmark (navy + amber "IP"), and the
 * "INTELLECTUAL PROPERTY" subtitle.
 *
 * The logo is preserved exactly as provided — no cropping,
 * recoloring, or modification. It scales responsively via max-height
 * constraints so it fits in the navbar on both desktop and mobile
 * without being cropped.
 *
 * The `size` prop controls the max-height:
 *  - "sm" (default, used in navbar/mobile menu): h-9 (36px)
 *  - "md": h-11 (44px)
 *  - "lg": h-14 (56px)
 */
export function Wordmark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const maxHeight =
    size === "sm" ? "h-9" : size === "lg" ? "h-14" : "h-11";
  return (
    <Link
      to="/"
      className="group inline-flex items-center"
      aria-label="KIPLAN IP — home"
    >
      <img
        src="/image/kiplan-ip-logo.jpg"
        alt="KIPLAN IP — Intellectual Property"
        className={`${maxHeight} w-auto object-contain`}
        style={{ maxHeight: size === "sm" ? 36 : size === "lg" ? 56 : 44 }}
      />
    </Link>
  );
}
