"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ScrollIndicator } from "@/components/shared/ScrollIndicator";
import { heroQuote } from "@/data/profile";
import { materializeChar, materializeContainer } from "@/lib/animations";

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
 * Landing intro = ONE pinned stage that crossfades from the shader + Hemingway
 * quote into the oversized name reveal as you scroll — no hard cut between
 * sections. Scroll progress drives: shader dim, quote fade-out, name materialize.
 */
export function LandingIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealName, setRevealName] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Shader stays faintly alive (idea #6) rather than disappearing entirely.
  const shaderOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.16]);
  const quoteOpacity = useTransform(scrollYProgress, [0.04, 0.26], [1, 0]);
  const quoteY = useTransform(scrollYProgress, [0.04, 0.26], [0, -40]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Trigger the per-character name reveal once the quote has cleared.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setRevealName(v >= 0.24);
  });

  return (
    <section ref={ref} className="relative h-[240vh]">
      <div className="sticky top-0 h-svh overflow-hidden bg-base">
        {/* Shader backdrop */}
        <motion.div style={{ opacity: shaderOpacity }} className="absolute inset-0">
          <ShaderAnimation />
        </motion.div>

        {/* Legibility veil */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Dissolve to base at the bottom for a fluid handoff into the page */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-base" />

        {/* Quote layer */}
        <motion.div
          style={{ opacity: quoteOpacity }}
          className="absolute inset-0 z-10 flex items-center justify-center px-6"
        >
          <motion.blockquote style={{ y: quoteY }} className="max-w-3xl text-center">
            <p className="text-balance font-body text-2xl font-extralight leading-snug text-ink-soft sm:text-3xl md:text-4xl">
              &ldquo;{heroQuote.text}&rdquo;
            </p>
            <cite className="mt-6 block font-mono text-xs uppercase not-italic tracking-[0.3em] text-ink-muted">
              — {heroQuote.author}
            </cite>
          </motion.blockquote>
        </motion.div>

        {/* Identity layer (crossfades in as the quote clears) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <motion.div
            variants={materializeContainer}
            initial="hidden"
            animate={revealName ? "visible" : "hidden"}
            className="text-center"
          >
            <motion.p variants={materializeChar} className="eyebrow mb-6">
              Data Scientist
            </motion.p>
            <h1 className="font-heading font-semibold leading-[0.88] tracking-tight text-ink">
              <MaterializeWord
                text="Michał"
                className="block text-[clamp(3rem,13vw,11rem)]"
              />
              <MaterializeWord
                text="Szczepkowski"
                className="mt-1 block text-[clamp(2.1rem,9.2vw,8rem)] text-ink-muted"
              />
            </h1>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute inset-x-0 bottom-10 z-10 flex justify-center"
        >
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
}
