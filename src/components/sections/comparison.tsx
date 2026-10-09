import { Check, Minus, X } from "lucide-react";

import { comparison, type Verdict } from "@/content/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { Container, Section, SectionHeader } from "@/components/site/primitives";

const verdictLabel: Record<Verdict, string> = { good: "Advantage", neutral: "Mixed", bad: "Drawback" };

function VerdictIcon({ verdict }: { verdict: Verdict }) {
  const Icon = verdict === "good" ? Check : verdict === "bad" ? X : Minus;
  return (
    <span
      className={cn(
        "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
        verdict === "good" ? "bg-primary text-primary-foreground" : "bg-white/[0.06] text-muted-foreground",
      )}
    >
      <Icon aria-hidden className="size-3" strokeWidth={3} />
      <span className="sr-only">{verdictLabel[verdict]}:</span>
    </span>
  );
}

export function Comparison() {
  const [ours, ...others] = comparison.columns;

  return (
    <Section aria-labelledby="compare-heading" className="border-t border-border">
      <Container>
        <SectionHeader
          id="compare-heading"
          eyebrow={comparison.eyebrow}
          heading={comparison.heading}
          subhead={comparison.subhead}
        />

        {/* Desktop / tablet: table */}
        <Reveal className="mt-14 hidden md:block">
          <table className="w-full table-fixed border-separate border-spacing-0 text-left text-sm">
            <caption className="sr-only">
              {ours} compared with {others.join(" and ")}
            </caption>
            <thead>
              <tr>
                <th scope="col" className="w-[19%] p-0" />
                {comparison.columns.map((col, i) => (
                  <th
                    key={col}
                    scope="col"
                    className={cn(
                      "px-5 pt-5 pb-4 align-bottom text-base font-semibold tracking-tight",
                      i === 0
                        ? "rounded-t-2xl border-x border-t border-primary/30 bg-primary/[0.05] text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {i === 0 ? (
                      <span className="mb-2 block font-mono text-[0.65rem] font-medium tracking-[0.14em] text-primary uppercase">
                        {comparison.recommendedLabel}
                      </span>
                    ) : null}
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, r) => {
                const lastRow = r === comparison.rows.length - 1;
                return (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="border-t border-border py-5 pr-4 align-top font-mono text-xs font-medium tracking-wide text-subtle-foreground uppercase"
                    >
                      {row.label}
                    </th>
                    {row.cells.map((cell, i) => (
                      <td
                        key={i}
                        className={cn(
                          "border-t border-border px-5 py-5 align-top",
                          i === 0 && "border-x border-x-primary/30 bg-primary/[0.05]",
                          i === 0 && lastRow && "rounded-b-2xl border-b border-b-primary/30",
                        )}
                      >
                        <span className="flex gap-3">
                          <VerdictIcon verdict={cell.verdict} />
                          <span className={i === 0 ? "text-foreground" : "text-muted-foreground"}>{cell.text}</span>
                        </span>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Reveal>

        {/* Mobile: one card per option */}
        <div className="mt-12 flex flex-col gap-4 md:hidden">
          {comparison.columns.map((col, c) => (
            <Reveal
              key={col}
              className={cn(
                "rounded-2xl border p-5",
                c === 0 ? "border-primary/30 bg-primary/[0.05]" : "border-border bg-card",
              )}
            >
              <h3 className="flex items-center justify-between text-base font-semibold tracking-tight">
                {col}
                {c === 0 ? (
                  <span className="font-mono text-[0.65rem] font-medium tracking-[0.14em] text-primary uppercase">
                    {comparison.recommendedLabel}
                  </span>
                ) : null}
              </h3>
              <dl className="mt-4 flex flex-col divide-y divide-border">
                {comparison.rows.map((row) => (
                  <div key={row.label} className="flex flex-col gap-1.5 py-3">
                    <dt className="font-mono text-[0.65rem] tracking-wide text-subtle-foreground uppercase">{row.label}</dt>
                    <dd className="flex gap-2.5 text-sm">
                      <VerdictIcon verdict={row.cells[c].verdict} />
                      <span className={c === 0 ? "text-foreground" : "text-muted-foreground"}>{row.cells[c].text}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
