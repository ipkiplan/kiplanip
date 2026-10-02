"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

export const EASE = [0.16, 1, 0.3, 1] as const;

export function MotionSection({
  children,
  className,
  delay = 0,
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay } },
  };
  return (
    <motion.section
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
    >
      {children}
    </motion.section>
  );
}

export function SectionShell({
  children,
  className,
  id,
  containerClassName,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={`relative ${className ?? ""}`}>
      <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${containerClassName ?? ""}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl ${className ?? ""}`}
    >
      {eyebrow && (
        <div className={`mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)] ${align === "center" ? "" : ""}`}>
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-[1.875rem] md:text-[2.25rem] lg:text-[2.75rem] font-medium leading-[1.1] tracking-tight text-balance text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-[1.0625rem] text-muted-foreground leading-[1.7] text-pretty max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
