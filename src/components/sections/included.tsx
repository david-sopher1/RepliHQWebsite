import {
  CalendarCheck,
  Check,
  ChartLine,
  Database,
  FlaskConical,
  MessagesSquare,
  ShieldCheck,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

import { included } from "@/content/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { Container, Section, SectionHeader } from "@/components/site/primitives";

const f = included.features;

export function Included() {
  return (
    <Section id="included" aria-labelledby="included-heading" className="border-t border-border">
      <Container>
        <SectionHeader
          id="included-heading"
          eyebrow={included.eyebrow}
          heading={included.heading}
          subhead={included.subhead}
        />

        <ul className="mt-14 grid gap-4 lg:grid-cols-3">
          <BentoCard icon={WandSparkles} title={f.personalization.title} body={f.personalization.body} className="lg:col-span-2">
            <PersonalizationVisual />
          </BentoCard>
          <BentoCard icon={Database} title={f.leads.title} body={f.leads.body} delay={0.06}>
            <LeadsVisual />
          </BentoCard>
          <BentoCard icon={ShieldCheck} title={f.deliverability.title} body={f.deliverability.body}>
            <DeliverabilityVisual />
          </BentoCard>
          <BentoCard icon={MessagesSquare} title={f.replies.title} body={f.replies.body} className="lg:col-span-2" delay={0.06}>
            <RepliesVisual />
          </BentoCard>
          <BentoCard icon={FlaskConical} title={f.copy.title} body={f.copy.body}>
            <CopyVisual />
          </BentoCard>
          <BentoCard icon={ChartLine} title={f.reporting.title} body={f.reporting.body} className="lg:col-span-2" delay={0.06}>
            <ReportingVisual />
          </BentoCard>
        </ul>
      </Container>
    </Section>
  );
}

function BentoCard({
  icon: Icon,
  title,
  body,
  className,
  delay = 0,
  children,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <li className={cn("min-w-0", className)}>
      <Reveal
        delay={delay}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-border-strong"
      >
        <div
          aria-hidden
          className="relative flex min-h-48 items-center justify-center overflow-hidden border-b border-border bg-[radial-gradient(ellipse_at_top,rgb(255_255_255/0.035),transparent_70%)] p-5 md:p-6"
        >
          {children}
        </div>
        <div className="flex flex-col gap-2 p-6">
          <h3 className="flex items-center gap-2.5 text-base font-semibold tracking-tight">
            <Icon aria-hidden className="size-4 text-primary" />
            {title}
          </h3>
          <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>
        </div>
      </Reveal>
    </li>
  );
}

/* ---------- Visuals (decorative, aria-hidden via parent) ---------- */

function PersonalizationVisual() {
  const d = f.personalization.demo;
  return (
    <div className="w-full max-w-lg rounded-xl border border-border-strong bg-background/80 p-4 text-left shadow-2xl shadow-black/40 sm:p-5">
      <div className="flex items-center justify-between border-b border-border pb-3 font-mono text-[0.68rem] text-subtle-foreground">
        <span>To: Priya R.</span>
        <span>Step 1 of 3</span>
      </div>
      <p className="mt-3 text-sm text-foreground/90">{d.greeting}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {d.lines.map((line, i) =>
          line.personalized ? (
            <span
              key={i}
              className="rounded-[4px] bg-primary/10 px-1 text-primary decoration-primary/50 decoration-dashed underline-offset-4 [box-decoration-break:clone] group-hover:underline"
            >
              {line.text}
            </span>
          ) : (
            <span key={i}> {line.text} </span>
          ),
        )}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-mono text-[0.65rem] text-muted-foreground">
        <WandSparkles className="size-3 text-primary" />
        {d.tag}
      </span>
    </div>
  );
}

function LeadsVisual() {
  return (
    <div className="w-full max-w-xs rounded-xl border border-border-strong bg-background/80 p-4">
      <div className="flex items-center justify-between font-mono text-[0.68rem] text-subtle-foreground">
        <span>j•••••@•••••••.com</span>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">Verified</span>
      </div>
      <ul className="mt-3 flex flex-col gap-2">
        {f.leads.demo.map((item, i) => (
          <li key={item} className="flex items-center gap-2.5 text-[0.8rem] text-foreground/85">
            <span
              className="grid size-4 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Check className="size-2.5" strokeWidth={3.5} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DeliverabilityVisual() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center gap-3 rounded-xl border border-border-strong bg-background/80 p-3">
        <ShieldCheck className="size-5 shrink-0 text-primary" />
        <div className="min-w-0">
          <p className="truncate font-mono text-[0.7rem] text-foreground/90">yourcompany.com</p>
          <p className="text-[0.7rem] text-subtle-foreground">Primary domain · never used for outreach</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {f.deliverability.demo.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-1 rounded-full border border-border-strong bg-white/[0.03] px-2.5 py-1 font-mono text-[0.65rem] text-foreground/85"
          >
            <Check className="size-3 text-primary" strokeWidth={3} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function RepliesVisual() {
  const d = f.replies.demo;
  return (
    <div className="flex w-full max-w-md flex-col gap-2.5 text-[0.8rem]">
      <p className="max-w-[80%] self-start rounded-2xl rounded-bl-md border border-border-strong bg-white/[0.04] px-3.5 py-2.5 text-foreground/90">
        {d.inbound}
      </p>
      <p className="max-w-[85%] self-end rounded-2xl rounded-br-md border border-primary/30 bg-primary/[0.07] px-3.5 py-2.5 text-foreground/90">
        {d.outbound}
      </p>
      <span className="inline-flex items-center gap-1.5 self-end rounded-full bg-primary px-2.5 py-1 font-mono text-[0.65rem] font-semibold text-primary-foreground transition-transform duration-300 group-hover:-translate-y-0.5">
        <CalendarCheck className="size-3" />
        {d.booked}
      </span>
    </div>
  );
}

function CopyVisual() {
  const [a, b] = f.copy.demo;
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      {[
        { label: a, width: "w-[42%]", win: false },
        { label: b, width: "w-[78%]", win: true },
      ].map((v) => (
        <div key={v.label}>
          <div className="mb-1.5 flex items-center justify-between font-mono text-[0.68rem]">
            <span className={v.win ? "text-foreground" : "text-subtle-foreground"}>{v.label}</span>
            {v.win ? <span className="text-primary">Winner</span> : null}
          </div>
          <div className="h-2 rounded-full bg-white/[0.05]">
            <div
              className={cn(
                "h-full origin-left rounded-full transition-transform duration-700 group-hover:scale-x-105",
                v.width,
                v.win ? "bg-primary shadow-[0_0_14px_rgb(198_242_78/0.45)]" : "bg-white/25",
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ReportingVisual() {
  // Illustrative shape only — no real data.
  const bars = [28, 34, 31, 42, 47, 45, 56, 61, 66, 72, 78, 86];
  const [sent, replies, meetings] = f.reporting.demo;
  return (
    <div className="w-full max-w-lg">
      <div className="flex gap-4 font-mono text-[0.65rem] text-subtle-foreground">
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-sm bg-white/15" />
          {sent}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-sm bg-white/40" />
          {replies}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-sm bg-primary" />
          {meetings}
        </span>
      </div>
      <div className="mt-4 flex h-28 items-end gap-1.5 border-b border-border sm:gap-2">
        {bars.map((h, i) => (
          <div key={i} className="flex h-full flex-1 flex-col justify-end gap-[2px]">
            <div className="rounded-t-[3px] bg-white/15" style={{ height: `${h * 0.55}%` }} />
            <div className="bg-white/40" style={{ height: `${h * 0.25}%` }} />
            <div
              className="rounded-b-[2px] bg-primary transition-[filter] duration-300 group-hover:brightness-110"
              style={{ height: `${h * 0.12}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
