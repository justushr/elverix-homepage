"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "../lib/data";
import { useAnchorNav } from "../lib/hooks";
import { Container } from "./Container";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleAnchorClick = useAnchorNav();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  const onLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      handleAnchorClick(event, href);
    }
    setIsMenuOpen(false);
  };

  const isSolid = isScrolled || isMenuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isSolid
            ? "border-b border-line bg-linen/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-20 items-center justify-between md:h-24">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="group flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-bordeaux transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(0,200,255,0.8)]" />
            <span className="font-display text-2xl tracking-tight text-ink">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => onLinkClick(event, link.href)}
                className="relative text-sm text-ink-soft transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-bordeaux after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/#kontakt"
              onClick={(event) => onLinkClick(event, "/#kontakt")}
              className="rounded-full border border-bordeaux/40 bg-bordeaux-soft px-5 py-2.5 text-sm text-bordeaux transition-all hover:border-bordeaux hover:shadow-[0_0_16px_rgba(0,200,255,0.25)]"
            >
              Anfragen
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-linen/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-10 pt-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * index, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={(event) => onLinkClick(event, link.href)}
                    className="block border-b border-line py-4 font-display text-3xl text-ink transition-colors hover:text-bordeaux"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * navLinks.length, duration: 0.4 }}
              >
                <Link
                  href="/#kontakt"
                  onClick={(event) => onLinkClick(event, "/#kontakt")}
                  className="mt-6 inline-block rounded-full border border-bordeaux/40 bg-bordeaux-soft px-6 py-3 font-sans text-base text-bordeaux"
                >
                  Kostenlos anfragen
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
