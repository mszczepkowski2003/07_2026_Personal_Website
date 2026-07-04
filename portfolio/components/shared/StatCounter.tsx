"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue } from "framer-motion";
import type { ProjectStat } from "@/lib/types";
import { EASE_OUT, fadeUp } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

/** A single metric that counts up from 0 → value when scrolled into view. */
export function StatCounter({ stat }: { stat: ProjectStat }) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(inViewRef, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const decimals = stat.decimals ?? 0;
  const { lang } = useLanguage();
  // Match the copy's number style: "0.94" in English, "0,94" in Polish.
  const locale = lang === "pl" ? "pl-PL" : "en-US";
  const format = (n: number) =>
    n.toLocaleString(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, stat.value, {
      duration: 1.5,
      ease: EASE_OUT,
    });
    const unsubscribe = count.on("change", (latest) => {
      if (valueRef.current) {
        valueRef.current.textContent = format(latest);
      }
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, count, stat.value, decimals, locale]);

  return (
    <motion.div ref={inViewRef} variants={fadeUp} className="border-l border-accent/40 pl-5">
      <div className="font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {stat.prefix}
        <span ref={valueRef}>{format(0)}</span>
        {stat.suffix}
      </div>
      <div className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
        {stat.label[lang]}
      </div>
    </motion.div>
  );
}
