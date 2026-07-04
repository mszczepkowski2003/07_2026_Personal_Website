"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navCards } from "@/lib/nav";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ui } from "@/lib/i18n/ui";

export function NavCards() {
  const { lang } = useLanguage();

  return (
    <section className="relative px-6 pb-40 pt-12">
      <div className="mx-auto max-w-content">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-12 text-center"
        >
          {ui.navCards.explore[lang]}
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2"
        >
          {navCards.map((card, i) => (
            <motion.div key={card.href} variants={fadeUp}>
              <Link
                href={card.href}
                className="group relative flex min-h-[220px] flex-col justify-between bg-base p-8 transition-colors duration-300 hover:bg-surface-card md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-ink-faint">
                    0{i + 1}
                  </span>
                  <span className="font-mono text-lg text-ink-faint transition-all duration-300 ease-out-expo group-hover:translate-x-1 group-hover:text-accent">
                    →
                  </span>
                </div>

                <div>
                  <h2 className="font-heading text-3xl font-medium tracking-tight text-ink transition-colors duration-200 group-hover:text-accent md:text-4xl">
                    {card.label[lang]}
                  </h2>
                  <p className="mt-3 max-w-xs text-sm font-extralight leading-relaxed text-ink-muted">
                    {card.teaser[lang]}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
