import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function ContactPage() {
  return <ContactContent />;
}
