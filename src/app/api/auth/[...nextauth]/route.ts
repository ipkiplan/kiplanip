import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// NextAuth uses the older Next.js route handler convention (App Router).
// This file handles: GET /api/auth/* (signin, signout, session, callback)
//
// Google OAuth is the sole authentication method at this stage.
// Email/password is intentionally NOT implemented.
//
// The PrismaAdapter syncs user accounts and sessions with the database.
// JWT session strategy is used (not database sessions) so the hash-based
// router can read session state client-side without DB queries.

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma as any),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Attach the user id and role to the session object
      if (session.user) {
        (session.user as any).id = token.sub;
        (session.user as any).role = (token as any).role || "user";
      }
      return session;
    },
    async jwt({ token, user }) {
      // On first sign-in, `user` is the DB user object. Store role in token.
      if (user) {
        (token as any).role = (user as any).role || "user";
      }
      return token;
    },
  },
  pages: {
    // Use a custom login page instead of NextAuth's default
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
