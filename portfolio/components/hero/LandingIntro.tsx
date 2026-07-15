"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollIndicator } from "@/components/shared/ScrollIndicator";
import { LanguageToggle } from "@/components/shared/LanguageToggle";
import { materializeChar, materializeContainer } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ui } from "@/lib/i18n/ui";

// Shader is client-only WebGL — never server-render it.
const ShaderAnimation = dynamic(
  () =>
    import("@/components/shader/ShaderAnimation").then((m) => m.ShaderAnimation),
  { ssr: false, loading: () => <div className="h-full w-full bg-black" /> }
);

/** Per-word group that staggers its own characters for the materialize effect. */
function MaterializeWord({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.span
      variants={materializeContainer}
      aria-label={text}
      className={className}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={materializeChar}
          aria-hidden="true"
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * Landing intro = ONE pinned stage. The oversized name materializes on load
 * over the shader backdrop; scroll then dims the shader and fades the scroll
 * cue as the stage hands off to the page below — no hard cut between sections.
 */
export function LandingIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Shader stays faintly alive (idea #6) rather than disappearing entirely.
  const shaderOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.16]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section ref={ref} className="relative h-[160vh]">
      <div className="sticky top-0 h-svh overflow-hidden bg-base">
        {/* Shader backdrop */}
        <motion.div style={{ opacity: shaderOpacity }} className="absolute inset-0">
          <ShaderAnimation />
        </motion.div>

        {/* Legibility veil */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Dissolve to base at the bottom for a fluid handoff into the page */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-base" />

        {/* Identity layer — materializes on load over the shader */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <motion.div
            variants={materializeContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.p
              variants={materializeChar}
              className="eyebrow mb-6"
              style={{ fontSize: "1.1rem" }}
            >
              {ui.hero.role[lang]}
            </motion.p>
            {/* Style A — Monolith: name + surname share identical formatting
                (same size, weight, colour). Sized to the longer word so
                neither overflows. */}
            <h1 className="font-heading font-semibold leading-[0.88] tracking-tight text-ink">
              <MaterializeWord
                text="Michał"
                className="block text-[clamp(2.1rem,9.2vw,8rem)]"
              />
              <MaterializeWord
                text="Szczepkowski"
                className="mt-1 block text-[clamp(2.1rem,9.2vw,8rem)]"
              />
            </h1>
          </motion.div>
        </div>

        {/* Subtle language switch + scroll cue, stacked at the bottom */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-6"
        >
          <LanguageToggle className="scale-90 opacity-60 transition-opacity duration-200 hover:opacity-100" />
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
}
