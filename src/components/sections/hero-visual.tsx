"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { CalendarCheck, Inbox } from "lucide-react";

import { heroDemo } from "@/content/site";
import { cn } from "@/lib/utils";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const HOURS = [9, 10, 11, 12, 13, 14, 15, 16];
// Pre-existing (non-RepliHQ) events so the calendar reads as a real week.
const BUSY = [
  { day: 0, hour: 10 },
  { day: 1, hour: 13 },
  { day: 2, hour: 14 },
  { day: 3, hour: 11 },
  { day: 4, hour: 10 },
];

/*
 * Timeline: one tick every TICK_MS. Reply i arrives at tick i*STEP, is tagged
 * positive one tick later, and is booked onto the calendar one tick after that.
 * After the last booking the scene holds, clears, and loops.
 */
const TICK_MS = 950;
const STEP = 3;
const LAST = heroDemo.replies.length * STEP - 1;
const HOLD = 5;
const START = -1;
const FINAL = LAST;
const INITIAL = 2; // first paint already shows one booked meeting
const MAX_VISIBLE = 4;

type Phase = "hidden" | "new" | "positive" | "booked";
const phaseAt = (i: number, t: number): Phase => {
  const d = t - i * STEP;
  if (d < 0) return "hidden";
  if (d === 0) return "new";
  if (d === 1) return "positive";
  return "booked";
};

const formatSlot = (day: number, hour: number) => {
  const h = hour > 12 ? hour - 12 : hour;
  return `${DAYS[day]} ${h}:00 ${hour >= 12 ? "PM" : "AM"}`;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [t, setT] = useState(INITIAL);

  useEffect(() => {
    if (reduce) {
      setT(FINAL);
      return;
    }
    if (!inView) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setT((prev) => (prev >= LAST + HOLD ? START : prev + 1));
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [inView, reduce]);

  const replies = heroDemo.replies.map((r, i) => ({ ...r, i, phase: phaseAt(i, t) }));
  const visible = replies
    .filter((r) => r.phase !== "hidden")
    .reverse()
    .slice(0, MAX_VISIBLE);
  const booked = replies.filter((r) => r.phase === "booked");
  const latestBooked = booked.at(-1)?.i;

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Illustration: positive replies arrive in an inbox and are booked as meetings on a weekly calendar."
      className="glass relative overflow-hidden rounded-2xl"
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-5">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
        </div>
        <div className="flex items-center gap-2.5 font-mono text-[0.7rem] text-muted-foreground sm:text-xs">
          <span className="relative flex size-2 rounded-full bg-primary animate-pulse-dot" />
          <span className="hidden sm:inline">{heroDemo.bookedLabel}</span>
          <span className="relative inline-flex h-5 min-w-5 items-center justify-center overflow-hidden rounded-md bg-primary/10 px-1.5 font-semibold text-primary tabular-nums">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={booked.length}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.35, ease }}
              >
                {booked.length}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        {/* Inbox */}
        <div className="border-b border-border p-3 sm:p-4 md:border-r md:border-b-0">
          <PanelLabel icon={<Inbox className="size-3.5" />} label={heroDemo.inboxLabel} />
          <ul className="mt-3 flex h-[17.5rem] flex-col gap-2 overflow-hidden sm:h-[18.5rem]">
            <AnimatePresence initial={false} mode="popLayout">
              {visible.map((r) => (
                <motion.li
                  key={`${r.i}`}
                  layout
                  initial={{ opacity: 0, y: -14, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, ease }}
                  className={cn(
                    "relative rounded-xl border p-3 transition-colors duration-500",
                    r.phase === "new"
                      ? "border-border-strong bg-white/[0.05]"
                      : "border-border bg-white/[0.02]",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="grid size-8 shrink-0 place-items-center rounded-full bg-surface-2 font-mono text-[0.65rem] font-semibold text-foreground/80 ring-1 ring-border-strong"
                    >
                      {r.initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-[0.8rem] font-medium text-foreground">
                          {r.name}
                          <span className="ml-1.5 font-normal text-subtle-foreground">{r.role}</span>
                        </p>
                        {r.phase === "new" ? (
                          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-primary" />
                        ) : null}
                      </div>
                      <p className="mt-0.5 truncate text-[0.8rem] text-muted-foreground">{r.message}</p>
                      <div className="mt-2 h-5">
                        <StatusChip phase={r.phase} slot={formatSlot(r.day, r.hour)} />
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>

        {/* Calendar */}
        <div className="p-3 sm:p-4">
          <PanelLabel icon={<CalendarCheck className="size-3.5" />} label={heroDemo.calendarLabel} />
          <div className="mt-3 grid grid-cols-[2.25rem_repeat(5,minmax(0,1fr))] text-[0.65rem] sm:grid-cols-[2.75rem_repeat(5,minmax(0,1fr))]">
            <div />
            {DAYS.map((d) => (
              <div key={d} className="pb-2 text-center font-mono text-subtle-foreground">
                {d}
              </div>
            ))}
          </div>
          <div className="relative grid h-[16rem] grid-cols-[2.25rem_repeat(5,minmax(0,1fr))] grid-rows-8 sm:h-[17rem] sm:grid-cols-[2.75rem_repeat(5,minmax(0,1fr))]">
            {HOURS.map((h, row) => (
              <div
                key={h}
                className="col-start-1 -translate-y-1.5 pr-2 text-right font-mono text-[0.6rem] text-subtle-foreground"
                style={{ gridRow: row + 1 }}
              >
                {h > 12 ? h - 12 : h}
                {h >= 12 ? "p" : "a"}
              </div>
            ))}
            {/* Grid lines */}
            <div
              aria-hidden
              className="pointer-events-none col-span-5 col-start-2 row-span-8 row-start-1 rounded-lg border border-border bg-[linear-gradient(to_bottom,var(--border)_1px,transparent_1px),linear-gradient(to_right,var(--border)_1px,transparent_1px)] bg-[size:100%_12.5%,20%_100%]"
            />
            {BUSY.map((b) => (
              <div
                key={`busy-${b.day}-${b.hour}`}
                aria-hidden
                className="m-[3px] rounded-md border border-white/[0.06] bg-white/[0.04]"
                style={{ gridColumn: b.day + 2, gridRow: b.hour - 8 }}
              />
            ))}
            <AnimatePresence>
              {booked.map((r) => (
                <motion.div
                  key={`event-${r.i}`}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  className="relative z-10 m-[3px] flex min-w-0 items-center overflow-hidden rounded-md bg-primary px-1.5 text-primary-foreground shadow-[0_0_24px_-4px_rgb(198_242_78/0.7)]"
                  style={{ gridColumn: r.day + 2, gridRow: r.hour - 8 }}
                >
                  <span className="truncate text-[0.6rem] leading-tight font-semibold sm:text-[0.65rem]">
                    {r.name}
                  </span>
                  {r.i === latestBooked && !reduce ? (
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 rounded-md ring-2 ring-primary"
                      initial={{ opacity: 0.9, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.6 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                    />
                  ) : null}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function PanelLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 px-1 font-mono text-[0.7rem] tracking-[0.12em] text-muted-foreground uppercase">
      {icon}
      {label}
    </div>
  );
}

function StatusChip({ phase, slot }: { phase: Phase; slot: string }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {phase === "positive" ? (
        <motion.span
          key="positive"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[0.62rem] font-medium text-primary"
        >
          <span aria-hidden className="size-1 rounded-full bg-primary" />
          {heroDemo.positiveLabel}
        </motion.span>
      ) : phase === "booked" ? (
        <motion.span
          key="booked"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 font-mono text-[0.62rem] font-semibold text-primary-foreground"
        >
          <CalendarCheck aria-hidden className="size-3" />
          {heroDemo.bookedTag} · {slot}
        </motion.span>
      ) : null}
    </AnimatePresence>
  );
}
