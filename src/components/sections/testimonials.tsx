import { testimonials } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { Container, PlaceholderBadge, Section, SectionHeader } from "@/components/site/primitives";

// TODO: replace placeholder testimonials in src/content/site.ts with real, approved quotes.
export function Testimonials() {
  return (
    <Section aria-labelledby="testimonials-heading" className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader id="testimonials-heading" eyebrow={testimonials.eyebrow} heading={testimonials.heading} />
          {testimonials.placeholder ? (
            <PlaceholderBadge className="self-start md:self-end">{testimonials.placeholderLabel}</PlaceholderBadge>
          ) : null}
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <li key={i}>
              <Reveal delay={i * 0.08} className="h-full">
                <figure className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-border bg-card p-6 md:p-7">
                  <blockquote className="relative">
                    <span aria-hidden className="block h-8 font-serif text-7xl leading-none text-primary italic">
                      “
                    </span>
                    <p className="mt-2 text-[0.98rem] leading-relaxed text-foreground/90">{t.quote}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-3 border-t border-border pt-5">
                    {/* TODO: add a headshot (next/image) when you have real testimonials */}
                    <span aria-hidden className="size-10 shrink-0 rounded-full border border-dashed border-border-strong bg-white/[0.03]" />
                    <span className="flex flex-col">
                      <span className="text-sm font-medium">{t.name}</span>
                      <span className="text-xs text-muted-foreground">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
