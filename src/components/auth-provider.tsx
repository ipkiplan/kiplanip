"use client";

import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";

/**
 * NextAuth SessionProvider wrapper.
 *
 * Wraps the entire application so that useSession() is available
 * in any client component. Sits inside ThemeProvider in layout.tsx.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
