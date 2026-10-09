"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowUpRight, CalendarCheck } from "lucide-react";

import { finalCta, site } from "@/content/site";
import { Button } from "@/components/ui/button";

const Cal = dynamic(() => import("@calcom/embed-react"), { ssr: false });

const NAMESPACE = "strategy-call";

type Status = "idle" | "loading" | "ready" | "failed";

/**
 * Cal.com inline booking widget. The embed script is only fetched once the section
 * is within ~800px of the viewport, so it never competes with the hero. If the
 * booking link can't load (e.g. the placeholder link hasn't been swapped yet), a
 * clean fallback with a direct link is shown instead of Cal's error page.
 */
export function CalEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatus("loading");
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const loading = status !== "idle";
  useEffect(() => {
    if (!loading) return;
    let cancelled = false;
    import("@calcom/embed-react").then(async ({ getCalApi }) => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      if (cancelled) return;
      cal("on", { action: "linkReady", callback: () => !cancelled && setStatus("ready") });
      cal("on", { action: "linkFailed", callback: () => !cancelled && setStatus("failed") });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          dark: { "cal-brand": "#c6f24e" },
          light: { "cal-brand": "#0b0f00" },
        },
      });
    });
    return () => {
      cancelled = true;
    };
  }, [loading]);

  return (
    <div ref={ref} className="relative min-h-[640px] w-full">
      {loading && status !== "failed" ? (
        <Cal
          namespace={NAMESPACE}
          calLink={site.booking.calLink}
          config={{ layout: "month_view", theme: "dark" }}
          className={status === "ready" ? "opacity-100 transition-opacity duration-500" : "opacity-0"}
          style={{ width: "100%", height: "100%", minHeight: 640, overflow: "auto" }}
        />
      ) : null}

      {status === "failed" ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-center">
          <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
            <CalendarCheck aria-hidden className="size-6" />
          </span>
          <p className="max-w-xs text-sm text-muted-foreground">{finalCta.fallback}</p>
          <Button asChild>
            <a href={site.booking.url} target="_blank" rel="noopener noreferrer">
              {finalCta.fallbackLink}
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      ) : status !== "ready" ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center">
          <div className="flex flex-col items-center gap-3 font-mono text-xs text-subtle-foreground">
            <span className="size-2 animate-pulse-dot rounded-full bg-primary" />
            {finalCta.loading}
          </div>
        </div>
      ) : null}
    </div>
  );
}
