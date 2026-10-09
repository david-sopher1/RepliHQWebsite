import { ArrowRight } from "lucide-react";

import { hero } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/primitives";
import { HeroVisual } from "@/components/sections/hero-visual";

// Above-the-fold copy animates with CSS (not JS) so it paints before hydration
// and doesn't hold back LCP.
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="glow-signal pointer-events-none absolute top-[55%] left-1/2 -z-10 h-[38rem] w-[70rem] max-w-[160vw] -translate-x-1/2 opacity-70"
      />

      <Container className="flex flex-col items-center text-center">
        <p
          className="inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-border-strong bg-white/[0.03] py-1.5 pr-4 pl-2 text-xs text-muted-foreground"
          style={delay(0)}
        >
          <span className="rounded-full bg-primary/12 px-2 py-0.5 font-mono text-[0.68rem] font-medium text-primary">
            {hero.badge}
          </span>
          {hero.eyebrow}
        </p>

        <h1
          id="hero-heading"
          className="mt-7 max-w-4xl animate-fade-up text-[clamp(2.75rem,1.4rem+6.2vw,5.75rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-balance"
          style={delay(60)}
        >
          <span className="text-gradient">{hero.headline.lead}</span>
          <br />
          <span className="text-gradient">{hero.headline.prefix}</span>
          <span className="font-serif font-normal tracking-[-0.02em] text-primary italic">
            {hero.headline.emphasis}
          </span>
        </h1>

        <p
          className="mt-7 max-w-2xl animate-fade-up text-base leading-relaxed text-pretty text-muted-foreground md:text-lg"
          style={delay(140)}
        >
          {hero.subhead}
        </p>

        <div
          className="mt-10 flex w-full animate-fade-up flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          style={delay(220)}
        >
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight className="transition-transform duration-200 group-hover/button:translate-x-0.5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
            <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
          </Button>
        </div>
        <p className="mt-5 animate-fade-up text-xs text-subtle-foreground" style={delay(280)}>
          {hero.note}
        </p>
      </Container>

      <Container className="mt-16 md:mt-20">
        <div className="mx-auto max-w-5xl animate-fade-up" style={delay(360)}>
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
