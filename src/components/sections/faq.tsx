import { ArrowRight } from "lucide-react";

import { faq, nav, site } from "@/content/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { Container, Section, SectionHeader } from "@/components/site/primitives";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export function Faq() {
  return (
    <Section id="faq" aria-labelledby="faq-heading" className="border-t border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeader id="faq-heading" eyebrow={faq.eyebrow} heading={faq.heading} />
          <Reveal delay={0.1} className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p>{faq.contactPrompt}</p>
            <a
              href={nav.cta.href}
              className="group inline-flex w-fit items-center gap-1.5 font-medium text-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-primary"
            >
              {faq.contactCta}
              <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="w-fit font-mono text-foreground/80 underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-primary"
            >
              {site.email}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <Accordion type="single" collapsible className="border-t border-border">
            {faq.items.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </Section>
  );
}
