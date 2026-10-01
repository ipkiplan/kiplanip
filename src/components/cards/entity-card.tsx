"use client";

import { type ReactNode } from "react";
import { Link } from "@/components/router/HashRouter";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/kiplan/badges";

export interface CardProps {
  title: string;
  href?: string;
  eyebrow?: string;
  description?: string;
  meta?: ReactNode;
  status?: string;
  className?: string;
  children?: ReactNode;
}

export function EntityCard({
  title,
  href,
  eyebrow,
  description,
  meta,
  status,
  className,
  children,
}: CardProps) {
  const content = (
    <>
      {eyebrow && (
        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {eyebrow}
        </div>
      )}
      <h3 className="font-display text-lg font-medium text-foreground leading-tight">{title}</h3>
      {description && (
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
      )}
      {children}
      {(meta || status) && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {status && <StatusBadge status={status as any} />}
          {meta}
        </div>
      )}
    </>
  );
  const card = (
    <Card
      className={`group relative flex h-full flex-col gap-1 overflow-hidden p-5 transition-all hover:border-[var(--color-accent)]/40 hover:shadow-sm ${className ?? ""}`}
    >
      {content}
    </Card>
  );
  if (href) {
    return (
      <Link to={href} className="block h-full">
        {card}
      </Link>
    );
  }
  return card;
}

export function CardGrid({ children, cols = 3 }: { children: ReactNode; cols?: 2 | 3 | 4 }) {
  const colClass =
    cols === 2 ? "sm:grid-cols-2" : cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return <div className={`grid gap-5 ${colClass}`}>{children}</div>;
}
