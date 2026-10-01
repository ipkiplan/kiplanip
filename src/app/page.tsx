"use client";

import { HashRouter } from "@/components/router/HashRouter";
import { RouteRenderer } from "@/components/router/RouteRenderer";

export default function Home() {
  return (
    <HashRouter>
      <RouteRenderer />
    </HashRouter>
  );
}
