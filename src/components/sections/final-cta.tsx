import { ArrowUpRight, Check } from "lucide-react";

import { finalCta, site } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { Container, Eyebrow, Section } from "@/components/site/primitives";
import { CalEmbed } from "@/components/sections/cal-embed";

export function FinalCta() {
  return (
    <Section id="book" aria-labelledby="book-heading" className="overflow-hidden border-t border-border">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10 rotate-180" />
      <div
        aria-hidden
        className="glow-signal pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[36rem] w-[72rem] max-w-[160vw] -translate-x-1/2 translate-y-1/3 opacity-60"
      />
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <Reveal className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{finalCta.eyebrow}</Eyebrow>
          <h2
            id="book-heading"
            className="text-[clamp(2.4rem,1.4rem+4vw,4.25rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-balance"
          >
            <span className="text-gradient">{finalCta.headline.lead}</span>
            <span className="font-serif font-normal tracking-[-0.02em] text-primary italic">
              {finalCta.headline.emphasis}
            </span>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">{finalCta.subhead}</p>
          <ul className="flex flex-col gap-3">
            {finalCta.points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-foreground/90">
                <span className="grid size-5 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check aria-hidden className="size-3" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            {finalCta.fallback}{" "}
            <a
              href={site.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 font-medium text-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-primary"
            >
              {finalCta.fallbackLink}
              <ArrowUpRight aria-hidden className="size-3.5" />
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.08} className="glass overflow-hidden rounded-2xl p-1.5 sm:p-2">
          <CalEmbed />
        </Reveal>
      </Container>
    </Section>
  );
}
