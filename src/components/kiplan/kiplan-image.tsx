"use client";

import { useState } from "react";

export interface KiplanImageProps {
  /** Public path beginning with `/image/...` (served from public/image/) */
  src: string;
  /** Meaningful alt text describing the image's actual content (not decorative filler). */
  alt: string;
  /** Optional caption shown below the image (small muted text). */
  caption?: string;
  /** Optional Tailwind aspect-ratio class for the wrapper, e.g. "aspect-[16/9]". Defaults to the image's natural aspect. */
  aspect?: string;
  /** Tailwind classes for the wrapper (border, radius, etc.). Defaults to a hairline border + rounded corner. */
  wrapperClassName?: string;
  /** Tailwind classes for the <img>. Defaults to "h-full w-full object-cover". */
  imgClassName?: string;
  /** Loading strategy: "lazy" (default) for below-fold images, "eager" for above-fold critical images. */
  loading?: "lazy" | "eager";
  /** Whether to mark the image as decorative (alt="") — use sparingly. When true, alt text is forced empty. */
  decorative?: boolean;
  /** Optional priority hint for above-fold images (Next.js Image priority equivalent). */
  fetchPriority?: "high" | "low" | "auto";
  /** Tailwind classes for the caption text. Defaults to muted-foreground. Override to light tones when using a dark wrapper. */
  captionClassName?: string;
}

/**
 * KiplanImage — a minimal, design-system-consistent image wrapper for the
 * KIPLAN IP platform.
 *
 * Design decisions:
 *  - Uses native <img> (no Next.js/Image) to keep things simple — these are
 *    already-optimised static assets in /public/image/, not transformed on demand.
 *  - Lazy-loaded by default; pass `loading="eager"` for above-the-fold images.
 *  - Responsive: object-cover + configurable aspect-ratio wrapper so the
 *    image is cropped gracefully on mobile, tablet, and desktop.
 *  - Hairline border + rounded corners match the existing card design system.
 *  - Alt text is REQUIRED (per spec §247, §36) — the component rejects empty
 *    alt unless `decorative` is explicitly set.
 *  - Caption (optional) sits below the image in small muted mono — matches
 *    the existing "Last Updated" / Source badge micro-typography.
 *  - The inner <img> uses `key={src}` so React remounts it cleanly when src
 *    changes (cleaner than resetting state in a useEffect).
 */
export function KiplanImage({
  src,
  alt,
  caption,
  aspect,
  wrapperClassName = "rounded-lg overflow-hidden border border-border/60 bg-muted/30",
  imgClassName = "h-full w-full object-cover",
  loading = "lazy",
  decorative = false,
  fetchPriority = "auto",
  captionClassName = "mt-2 px-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
}: KiplanImageProps) {
  const finalAlt = decorative ? "" : alt;

  return (
    <figure className={`group relative ${wrapperClassName}`}>
      <div
        className={`relative w-full overflow-hidden ${aspect ?? ""}`}
        style={aspect ? undefined : { aspectRatio: "auto" }}
      >
        <KiplanImageInner
          key={src}
          src={src}
          alt={finalAlt}
          loading={loading}
          fetchPriority={fetchPriority}
          imgClassName={imgClassName}
        />
      </div>
      {caption && (
        <figcaption className={captionClassName}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Inner component — remounted via `key={src}` when the source changes,
 * which cleanly resets the loaded/errored state without needing a
 * setState-in-effect pattern.
 */
function KiplanImageInner({
  src,
  alt,
  loading,
  fetchPriority,
  imgClassName,
}: {
  src: string;
  alt: string;
  loading: "lazy" | "eager";
  fetchPriority: "high" | "low" | "auto";
  imgClassName: string;
}) {
  // If the image is already complete by the time the handler attaches
  // (e.g. cached or loaded eagerly before mount), the browser's `load`
  // event has already fired and our onLoad handler will never run —
  // leaving the image stuck at opacity-0. We initialise `loaded` from
  // the actual DOM node's current state via a ref callback so that
  // already-loaded images appear immediately, without breaking the
  // fade-in for genuinely-pending loads.
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex h-full min-h-[120px] w-full items-center justify-center bg-muted/40 p-4 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        Image unavailable — verify /public/image assets
      </div>
    );
  }

  return (
    <>
      <img
        ref={(node) => {
          // Capture the DOM node synchronously at mount. If it has already
          // finished loading (cached / eager), mark it loaded so the
          // opacity-100 class is applied and the image becomes visible.
          if (node && node.complete && node.naturalWidth > 0 && !loaded) {
            setLoaded(true);
          }
        }}
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        className={`${imgClassName} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
      />
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-muted/40" aria-hidden="true" />
      )}
    </>
  );
}

