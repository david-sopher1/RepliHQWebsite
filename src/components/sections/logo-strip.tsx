import { logos } from "@/content/site";
import { Container, PlaceholderBadge } from "@/components/site/primitives";

// TODO: swap the dashed slots for real client logos (e.g. <Image src="/logos/acme.svg" …/>)
// and set `logos.placeholder` to false in src/content/site.ts.
export function LogoStrip() {
  return (
    <section aria-label="Client logos" className="relative py-12 md:py-16">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">{logos.heading}</p>
          {logos.placeholder ? <PlaceholderBadge>Placeholder logos</PlaceholderBadge> : null}
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {logos.items.map((label, i) => (
            <li
              key={i}
              className="flex h-14 items-center justify-center rounded-xl border border-dashed border-border-strong font-mono text-xs text-subtle-foreground"
            >
              {label} {i + 1}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
