"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Minimal custom cursor: a small solid dot + a thin trailing ring that
 * highlights over interactive elements. Disabled on touch / coarse pointers.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  // 1) Detect a real (fine) pointer and enable rendering of the cursor elements.
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-none-fine");
    return () => {
      document.documentElement.classList.remove("cursor-none-fine");
    };
  }, []);

  // 2) Once enabled (elements are in the DOM), attach the movement listeners.
  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let started = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      // Reveal on first real movement to avoid a corner flash.
      if (!started) {
        started = true;
        ringX = mouseX;
        ringY = mouseY;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    // Ring lags slightly behind the dot for a precise, weighted feel.
    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      ring.dataset.hover = target?.closest(
        "a, button, [role='button'], input, textarea, label"
      )
        ? "true"
        : "false";
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnter = () => {
      if (!started) return;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-accent opacity-0"
        style={{ transition: "opacity 200ms ease" }}
      />
      <div
        ref={ringRef}
        data-hover="false"
        className="custom-cursor-ring pointer-events-none fixed left-0 top-0 z-[100] -ml-4 -mt-4 h-8 w-8 rounded-full border border-ink/40 opacity-0"
        style={{ transition: "opacity 200ms ease, border-color 200ms ease" }}
      />
      <style jsx global>{`
        .custom-cursor-ring[data-hover="true"] {
          border-color: rgba(34, 211, 238, 0.9);
        }
      `}</style>
    </>
  );
}
