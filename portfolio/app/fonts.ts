import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

// Body — intentionally restricted to ExtraLight (200) and Light (300)
export const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300"],
  variable: "--font-inter",
  display: "swap",
});

// Headings — geometric grotesque
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Technical labels / tags
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
