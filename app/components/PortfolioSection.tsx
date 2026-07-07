import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { SplitReveal } from "./SplitReveal";
import { PortfolioCard } from "./PortfolioCard";
import { portfolioCases } from "../lib/data";

export function PortfolioSection() {
  const preview = portfolioCases.slice(0, 3);

  return (
    <section id="konzepte" className="bg-linen-2 py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-bordeaux-deep">
              Portfolio
            </span>
            <SplitReveal
              as="h2"
              text="Konzepte, die für sich sprechen."
              className="mt-4 font-display text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.1] tracking-tight text-ink"
            />
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Durchdachte Gestaltungskonzepte für verschiedene Betriebsarten — als
              Beweis dafür, wie wir arbeiten.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="group hidden shrink-0 items-center gap-2 text-sm text-bordeaux transition-colors hover:text-ink sm:inline-flex"
          >
            Alle ansehen
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((item, index) => (
            <PortfolioCard key={item.slug} item={item} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3 text-sm text-ink-soft transition-colors hover:text-bordeaux"
          >
            Alle Konzepte ansehen
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
