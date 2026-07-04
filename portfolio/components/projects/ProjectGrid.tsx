"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className="grid grid-cols-1 gap-6 md:grid-cols-2"
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </motion.div>
  );
}
