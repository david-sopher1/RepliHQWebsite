import { cn } from "@/lib/utils";

/** Mark: a rounded "reply bubble" with a check — a reply that became a booking. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn("size-7", className)}>
      <rect width="32" height="32" rx="9" fill="#C6F24E" />
      <path
        d="M9.5 16.5l4.2 4.2L22.5 11.5"
        fill="none"
        stroke="#0B0F00"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-[1.05rem] font-semibold tracking-[-0.03em] text-foreground">
        Repli<span className="text-muted-foreground">HQ</span>
      </span>
    </span>
  );
}
