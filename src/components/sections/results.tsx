import { results } from "@/content/site";
import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";
import { Container, PlaceholderBadge, Section, SectionHeader } from "@/components/site/primitives";

// TODO: all figures are placeholders — set real values in src/content/site.ts (results.stats).
export function Results() {
  return (
    <Section id="results" aria-labelledby="results-heading" className="overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="glow-signal pointer-events-none absolute -top-40 left-1/2 -z-10 h-[30rem] w-[60rem] max-w-[160vw] -translate-x-1/2 opacity-40"
      />
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader id="results-heading" eyebrow={results.eyebrow} heading={results.heading} subhead={results.subhead} />
          {results.placeholder ? <PlaceholderBadge className="self-start md:self-end">{results.placeholderLabel}</PlaceholderBadge> : null}
        </div>

        <dl className="mt-14 grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-card sm:grid-cols-2 lg:grid-cols-4">
          {results.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.06}
              className="relative flex flex-col-reverse gap-3 border-border p-7 not-first:border-t sm:nth-2:border-t-0 sm:even:border-l lg:border-t-0 lg:not-first:border-l md:p-8"
            >
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="text-[clamp(2.5rem,1.8rem+2.4vw,3.5rem)] leading-none font-semibold tracking-[-0.04em] tabular-nums">
                {stat.prefix}
                <Counter value={stat.value} className="text-gradient" />
                <span className="text-primary">{stat.suffix}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
