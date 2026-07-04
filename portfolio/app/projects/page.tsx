import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Data science projects — end-to-end ML pipelines, computer vision, and retrieval systems.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-content px-6 pb-32 pt-32 md:pt-40">
      <PageHeader
        eyebrow="Selected Work"
        title="Projects"
        intro="My interactive playground — where I experiment with new techniques, explore domains beyond daily work, and challenge myself to build and ship."
      />

      <div className="mt-16">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
