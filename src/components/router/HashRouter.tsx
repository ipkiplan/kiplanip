"use client";

import { useEffect, useState, useCallback, createContext, useContext, type ReactNode } from "react";

// KIPLAN IP hash-based router.
// Routes are encoded in window.location.hash as `#/path/segments`.
// Supports dynamic segments via convention: detail routes use `:slug` patterns
// and are matched in route definitions.

export interface RouteMatch {
  path: string;
  params: Record<string, string>;
}

interface RouterContextValue {
  path: string;
  navigate: (to: string) => void;
  back: () => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used within HashRouter");
  return ctx;
}

function getPathFromHash(): string {
  if (typeof window === "undefined") return "/";
  const h = window.location.hash;
  if (!h || h === "#" || h === "#/") return "/";
  // Strip leading "#/"
  let p = h.startsWith("#") ? h.slice(1) : h;
  if (!p.startsWith("/")) p = "/" + p;
  // Trim trailing slash (except root)
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

function scrollToTop() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }
}

export function HashRouter({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<string>("/");

  useEffect(() => {
    // Sync router state with browser URL hash — this is the canonical pattern
    // for a client-side hash router. setState here mirrors external (window) state.
    const initial = getPathFromHash();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPath(initial);
    if (initial !== "/" && (window.location.hash === "" || window.location.hash === "#")) {
      window.location.hash = "#" + initial;
    }
    const onHash = () => {
      setPath(getPathFromHash());
      scrollToTop();
    };
    window.addEventListener("hashchange", onHash);
    window.addEventListener("popstate", onHash);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("popstate", onHash);
    };
  }, []);

  const navigate = useCallback((to: string) => {
    if (typeof window === "undefined") return;
    const target = to.startsWith("/") ? to : "/" + to;
    if (getPathFromHash() === target) {
      scrollToTop();
      return;
    }
    window.location.hash = "#" + target;
    // hashchange handler will update state and scroll
  }, []);

  const back = useCallback(() => {
    if (typeof window !== "undefined") window.history.back();
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate, back }}>
      {children}
    </RouterContext.Provider>
  );
}

// Helper for client links.
export function Link({
  to,
  children,
  className,
  onClick,
  ...rest
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">) {
  const { navigate } = useRouter();
  return (
    <a
      href={"#" + (to.startsWith("/") ? to : "/" + to)}
      className={className}
      onClick={(e) => {
        // allow modifier-click to open new tab etc.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        navigate(to);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

// Route matching utilities for the renderer.
export interface RouteDef {
  pattern: string; // e.g. "/research/treaty/:slug"
  render: (params: Record<string, string>) => ReactNode;
}

export function matchRoute(pattern: string, path: string): Record<string, string> | null {
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

export { RouterContext };
