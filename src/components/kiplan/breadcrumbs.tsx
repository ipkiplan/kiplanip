"use client";

import { Fragment } from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "@/components/router/HashRouter";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="h-3 w-3" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <Fragment key={i}>
            <li aria-hidden="true">
              <ChevronRight className="h-3 w-3 opacity-50" />
            </li>
            <li>
              {item.href && i < items.length - 1 ? (
                <Link to={item.href} className="hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
