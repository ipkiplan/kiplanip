import * as React from "react";
import { cn } from "@/lib/utils";
import { MotionSection } from "@/components/kiplan/motion-section";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  supporting?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Reusable editorial section header:
 * mono label (e.g. "03 — PRACTICE AREAS") + Playfair display heading + supporting sentence.
 */
export function SectionHeader({
  label,
  title,
  supporting,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <MotionSection
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
      <h2 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
        {title}
      </h2>
      {supporting && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty",
            align === "center" && "mx-auto",
          )}
        >
          {supporting}
        </p>
      )}
    </MotionSection>
  );
}
