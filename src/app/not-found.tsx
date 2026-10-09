import Link from "next/link";

import { notFound as copy } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/site/primitives";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80dvh] items-center pt-24">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="font-mono text-xs tracking-[0.14em] text-primary uppercase">404</p>
        <h1 className="text-gradient text-[clamp(2.25rem,1.6rem+3vw,3.5rem)] leading-tight font-semibold tracking-[-0.035em]">
          {copy.heading}
        </h1>
        <p className="max-w-md text-muted-foreground">{copy.body}</p>
        <Button asChild size="lg">
          <Link href="/">{copy.cta}</Link>
        </Button>
      </Container>
    </section>
  );
}
