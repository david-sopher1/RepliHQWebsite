"use client";

import { useEffect } from "react";
import { MotionConfig } from "motion/react";
import Lenis from "lenis";

/**
 * Client-side providers: reduced-motion-aware animation defaults and Lenis smooth
 * scrolling (skipped entirely when the user prefers reduced motion).
 */
export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.12,
      // Smooth-scroll in-page anchors, offset for the sticky nav.
      anchors: { offset: -72 },
    });
    return () => lenis.destroy();
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
