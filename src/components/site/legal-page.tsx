import { legal } from "@/content/site";
import { Container, PlaceholderBadge } from "@/components/site/primitives";

type LegalDoc = (typeof legal)["privacy"];

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <article className="relative pt-32 pb-24 md:pt-40 md:pb-32">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-96" />
      <Container className="max-w-3xl">
        <header className="flex flex-col gap-4 border-b border-border pb-10">
          {legal.placeholder ? <PlaceholderBadge className="w-fit">{legal.placeholderLabel}</PlaceholderBadge> : null}
          <h1 className="text-gradient text-[clamp(2.25rem,1.6rem+2.5vw,3.25rem)] leading-tight font-semibold tracking-[-0.035em]">
            {doc.title}
          </h1>
          <p className="font-mono text-xs text-subtle-foreground">Last updated: {legal.lastUpdated}</p>
        </header>
        <div className="mt-10 flex flex-col gap-10">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold tracking-tight">{section.heading}</h2>
              <div className="mt-3 flex flex-col gap-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
