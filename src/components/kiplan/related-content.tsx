"use client";

import { type ReactNode } from "react";
import { Link } from "@/components/router/HashRouter";
import { ArrowRight } from "lucide-react";

export interface RelatedLink {
  label: string;
  href?: string;
  meta?: string;
}

export function RelatedContent({
  title = "Related Content",
  groups,
}: {
  title?: string;
  groups: { heading: string; links: RelatedLink[] }[];
}) {
  return (
    <section
      aria-label={title}
      className="mt-12 border-t border-border/60 pt-8"
    >
      <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">
        {title}
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <div key={i}>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {g.heading}
            </h4>
            <ul className="space-y-2">
              {g.links.map((l, j) => (
                <li key={j}>
                  {l.href ? (
                    <Link
                      to={l.href}
                      className="group inline-flex items-start gap-1.5 text-sm text-foreground hover:text-[var(--color-accent)] transition-colors"
                    >
                      <ArrowRight className="mt-0.5 h-3 w-3 flex-shrink-0 text-muted-foreground group-hover:text-[var(--color-accent)] transition-colors" />
                      <span>
                        {l.label}
                        {l.meta && (
                          <span className="ml-1.5 text-[11px] text-muted-foreground">
                            · {l.meta}
                          </span>
                        )}
                      </span>
                    </Link>
                  ) : (
                    <span className="inline-flex items-start gap-1.5 text-sm text-muted-foreground">
                      <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                      {l.label}
                      {l.meta && (
                        <span className="ml-1.5 text-[11px]">
                          · {l.meta}
                        </span>
                      )}
                    </span>
                  )}
                </li>
              ))}
              {g.links.length === 0 && (
                <li className="text-xs italic text-muted-foreground">No items currently listed.</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-card/40 px-6 py-12 text-center">
      <h3 className="font-display text-xl text-foreground">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{body}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function ErrorState({ title = "Page not found", body, action }: { title?: string; body?: string; action?: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-[40vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">
        404 · Not Found
      </div>
      <h1 className="mt-3 font-display text-3xl md:text-4xl font-medium text-foreground">{title}</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        {body ?? "The page or resource you requested could not be located. Please verify the address and try again."}
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {action ?? (
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            Return home
          </Link>
        )}
      </div>
    </div>
  );
}

export function VerificationNotice({ label = "Verification required", body }: { label?: string; body?: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-amber-600/30 bg-amber-50/60 px-4 py-3 dark:bg-amber-950/20">
      <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-amber-600" />
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-300">{label}</p>
        <p className="mt-1 text-sm text-foreground/90">
          {body ?? "Specific information on this record requires verification directly with the issuing organisation. KIPLAN IP does not publish unverified claims."}
        </p>
      </div>
    </div>
  );
}
