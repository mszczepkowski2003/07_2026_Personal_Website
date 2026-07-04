import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: profile.bio.en,
};

export default function AboutPage() {
  return <AboutContent />;
}
