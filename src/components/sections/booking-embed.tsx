"use client";

import { useEffect, useRef, useState } from "react";

import { finalCta, site } from "@/content/site";

/**
 * Calendly inline booking widget, as a plain iframe (no third-party script). It is
 * only inserted once the section is within ~800px of the viewport, so it never
 * competes with the hero for bandwidth.
 *
 * Note: the background/text/primary color params only take effect on paid Calendly
 * plans; on the free plan Calendly ignores them and shows its default theme.
 */
function embedSrc() {
  const url = new URL(site.booking.url);
  url.searchParams.set("embed_type", "Inline");
  url.searchParams.set("embed_domain", new URL(site.url).hostname);
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("background_color", "0e1011");
  url.searchParams.set("text_color", "f4f5f2");
  url.searchParams.set("primary_color", "c6f24e");
  return url.toString();
}

export function BookingEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    // 830px = Calendly's natural card height at ≤600px wide; taller shows a white strip.
    <div ref={ref} className="relative h-[830px] w-full overflow-hidden rounded-xl">
      {inView ? (
        <iframe
          src={embedSrc()}
          title="Book a strategy call with RepliHQ"
          className={`size-full border-0 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
        />
      ) : null}
      {!loaded ? (
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
