import { DollarSign, Flame, Hourglass, type LucideIcon } from "lucide-react";

import { problem } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { Container, Section, SectionHeader } from "@/components/site/primitives";

const icons: Record<string, LucideIcon> = {
  hourglass: Hourglass,
  dollar: DollarSign,
  flame: Flame,
};

export function Problem() {
  return (
    <Section aria-labelledby="problem-heading">
      <Container>
        <SectionHeader id="problem-heading" eyebrow={problem.eyebrow} heading={problem.heading} subhead={problem.subhead} />
        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {problem.items.map((item, i) => {
            const Icon = icons[item.icon] ?? Hourglass;
            return (
              <li key={item.title} className="h-full">
                <Reveal
                  delay={i * 0.08}
                  className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-border-strong md:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-xl border border-border-strong bg-white/[0.03] text-foreground/80">
                      <Icon aria-hidden className="size-[1.1rem]" />
                    </span>
                    <span className="font-mono text-xs text-subtle-foreground">0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
