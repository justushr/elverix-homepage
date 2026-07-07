"use client";

import Link from "next/link";
import { navLinks, siteConfig } from "../lib/data";
import { useAnchorNav } from "../lib/hooks";
import { Container } from "./Container";

export function Footer() {
  const handleAnchorClick = useAnchorNav();

  const onLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      handleAnchorClick(event, href);
    }
  };

  return (
    <footer className="border-t border-line bg-linen">
      {/* Subtle top glow line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-bordeaux/40 to-transparent" />

      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-bordeaux shadow-[0_0_8px_rgba(0,200,255,0.6)]" />
              <span className="font-display text-2xl text-ink">{siteConfig.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{siteConfig.description}</p>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-bordeaux">
              Navigation
            </span>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(event) => onLinkClick(event, link.href)}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-bordeaux">
              Kontakt & Rechtliches
            </span>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-ink-soft transition-colors hover:text-bordeaux"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-ink-faint md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>
          <p>Konzipiert und gebaut von Elverix — als Beweis, nicht nur als Behauptung.</p>
        </div>
      </Container>
    </footer>
  );
}
