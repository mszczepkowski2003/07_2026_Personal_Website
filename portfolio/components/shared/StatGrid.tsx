"use client";

import { motion } from "framer-motion";
import type { ProjectStat } from "@/lib/types";
import { StatCounter } from "@/components/shared/StatCounter";
import { staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";

export function StatGrid({ stats }: { stats: ProjectStat[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4"
    >
      {stats.map((stat) => (
        <StatCounter key={stat.label} stat={stat} />
      ))}
    </motion.div>
  );
}
