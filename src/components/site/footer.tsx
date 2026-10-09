import Link from "next/link";
import { cacheLife } from "next/cache";

import { footer, site } from "@/content/site";
import { Container } from "@/components/site/primitives";
import { Logo } from "@/components/site/logo";
import { SocialIcon } from "@/components/site/social-icon";

// Cache Components requires current-time reads to be cached; the year is fixed per build.
async function CopyrightYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_2fr] md:py-20">
        <div className="flex flex-col gap-5">
          <Link href="/" aria-label="RepliHQ home" className="w-fit rounded-md">
            <Logo />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{footer.tagline}</p>
          <a
            href={`mailto:${site.email}`}
            className="w-fit font-mono text-sm text-foreground/90 underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-primary"
          >
            {site.email}
          </a>
          <ul className="flex gap-2" aria-label="Social links">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${s.label}`}
                  className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  <SocialIcon icon={s.icon} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {footer.groups.map((group) => (
            <div key={group.title}>
              <h2 className="font-mono text-xs tracking-[0.14em] text-subtle-foreground uppercase">{group.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-2 border-t border-border py-6 text-xs text-subtle-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <CopyrightYear /> {site.name}. All rights reserved.
        </p>
        <p className="font-mono">{footer.signoff}</p>
        </div>
      </Container>
    </footer>
  );
}
