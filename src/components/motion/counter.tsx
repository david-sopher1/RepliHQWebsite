"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

const format = (n: number) => Math.round(n).toLocaleString("en-US");

/**
 * Counts up to `value` the first time it scrolls into view. The server renders the
 * final value (good for no-JS and crawlers); the client resets to 0 before counting.
 */
export function Counter({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const primed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    if (!inView) {
      if (!primed.current) {
        el.textContent = format(0);
        primed.current = true;
      }
      return;
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = format(v);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={className}>
      {format(value)}
    </span>
  );
}
