import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)} {...props} />;
}

export function Section({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("relative py-24 md:py-32", className)} {...props} />;
}

export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-primary" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  heading,
  subhead,
  align = "left",
  id,
  className,
}: {
  eyebrow: string;
  heading: string;
  subhead?: string;
  align?: "left" | "center";
  id?: string;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex max-w-3xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="text-gradient text-[clamp(2rem,1.2rem+3vw,3.4rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance"
      >
        {heading}
      </h2>
      {subhead ? (
        <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">{subhead}</p>
      ) : null}
    </Reveal>
  );
}

/** Visible marker for content that still needs real data before launch. */
export function PlaceholderBadge({ children = "Placeholder", className }: { children?: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-dashed border-amber-300/40 bg-amber-300/[0.06] px-2.5 py-1 font-mono text-[0.68rem] tracking-wide text-amber-200/90 uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
