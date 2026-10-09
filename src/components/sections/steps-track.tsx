"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

import { howItWorks } from "@/content/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

/** Four steps on a track that fills with the accent color as you scroll through. */
export function StepsTrack() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const last = howItWorks.steps.length - 1;

  return (
    <ol ref={ref} className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
      {/* Track: vertical on mobile, horizontal on desktop */}
      <div aria-hidden className="absolute top-2 bottom-2 left-[1.1875rem] w-px bg-border md:top-[1.1875rem] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-auto">
        <motion.div
          className="absolute inset-0 origin-top bg-primary shadow-[0_0_12px_rgb(198_242_78/0.6)] md:hidden"
          style={{ scaleY: progress }}
        />
        <motion.div
          className="absolute inset-0 hidden origin-left bg-primary shadow-[0_0_12px_rgb(198_242_78/0.6)] md:block"
          style={{ scaleX: progress }}
        />
      </div>

      {howItWorks.steps.map((step, i) => (
        <li key={step.title} className="relative flex flex-col pl-14 md:pl-0">
          <span
            className={cn(
              "absolute top-0 left-0 grid size-[2.4rem] place-items-center rounded-full border font-mono text-xs font-medium md:relative",
              i === last
                ? "border-primary bg-primary text-primary-foreground shadow-[0_0_24px_-4px_rgb(198_242_78/0.7)]"
                : "border-border-strong bg-background text-foreground",
            )}
          >
            0{i + 1}
          </span>
          <Reveal delay={i * 0.08} className="flex flex-1 flex-col">
            <h3 className="text-lg font-semibold tracking-tight md:mt-7">{step.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{step.body}</p>
            <p className="mt-5 flex items-center gap-2 border-t border-border pt-4 font-mono text-xs md:mt-auto">
              <span className="text-subtle-foreground">{howItWorks.effortLabel}:</span>
              <span className={i === last ? "text-primary" : "text-foreground/90"}>{step.effort}</span>
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
