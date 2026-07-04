import type { Metadata } from "next";
import { ProjectsContent } from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Data science projects — end-to-end ML pipelines, computer vision, and retrieval systems.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
