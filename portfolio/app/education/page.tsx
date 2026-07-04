import type { Metadata } from "next";
import { EducationContent } from "./EducationContent";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Computer Science & Econometrics at the University of Gdańsk, plus courses and certifications.",
};

export default function EducationPage() {
  return <EducationContent />;
}
