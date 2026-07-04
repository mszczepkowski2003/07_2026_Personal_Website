import type { Metadata } from "next";
import "./globals.css";
import { inter, spaceGrotesk, jetbrainsMono } from "./fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { GridBackground } from "@/components/shared/GridBackground";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  // Metadata is static per build; English is used as the canonical SEO copy.
  description: profile.bio.en,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.bio.en,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-base text-ink antialiased">
        <LanguageProvider>
          <GridBackground />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
