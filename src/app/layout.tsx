import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";
import { LanguageProvider } from "@/i18n/provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KIPLAN IP — Intellectual Property, Research & Strategy",
  description:
    "KIPLAN IP — where intellectual property practice, research, evidence, knowledge and international IP systems meet in Nepal. Protecting ideas. Understanding rights. Connecting Nepal with the world.",
  keywords: [
    "KIPLAN IP",
    "intellectual property",
    "IP research",
    "trademarks",
    "patents",
    "industrial designs",
    "copyright",
    "trade secrets",
    "geographical indications",
    "domain IP",
    "IP portfolio",
    "WIPO",
    "WTO",
    "TRIPS",
    "Paris Convention",
    "Berne Convention",
    "PCT",
    "Madrid System",
    "Hague System",
    "Nice Classification",
    "Vienna Classification",
    "Locarno Classification",
    "IPC",
    "CPC",
    "Nepal IP",
    "Kathmandu",
    "KIPLAN Law Firm",
  ],
  authors: [{ name: "KIPLAN IP" }],
  applicationName: "KIPLAN IP",
  icons: {
    icon: [
      { url: "/image/kiplan-ip-logo.jpg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/image/kiplan-ip-logo.jpg", type: "image/jpeg" },
    ],
    shortcut: ["/image/kiplan-ip-logo.jpg"],
  },
  openGraph: {
    title: "KIPLAN IP — Intellectual Property, Research & Strategy",
    description:
      "Protecting ideas. Understanding rights. Connecting Nepal with the world. KIPLAN IP is where intellectual property practice, research, evidence, knowledge and international IP systems meet in Nepal.",
    siteName: "KIPLAN IP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KIPLAN IP — Intellectual Property, Research & Strategy",
    description:
      "Protecting ideas. Understanding rights. Connecting Nepal with the world.",
  },
  verification: {
    google: "ovxNJ_vy_tlEWQMPz2GIkS6uIdIQS0a5PZguCPOKPAg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <LanguageProvider>
              <div className="min-h-screen flex flex-col">{children}</div>
              <SonnerToaster position="bottom-right" richColors closeButton />
            </LanguageProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
