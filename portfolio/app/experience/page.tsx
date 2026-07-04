import type { Metadata } from "next";
import { ExperienceContent } from "./ExperienceContent";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience in data science and actuarial pricing.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
