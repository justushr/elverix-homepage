"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { SplitReveal } from "./SplitReveal";
import { useAnchorNav } from "../lib/hooks";

export function PricingSection() {
  const handleAnchorClick = useAnchorNav();

  return (
    <section id="preise" className="bg-linen py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-bordeaux-deep">
            Preise
          </span>
          <SplitReveal
            as="h2"
            text="Faire Preise für individuelle Projekte."
            className="mt-4 font-display text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.1] tracking-tight text-ink"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.55 }}
          className="mt-16 flex flex-col gap-10 rounded-3xl border border-line bg-paper p-10 shadow-soft md:flex-row md:items-center md:justify-between md:p-14"
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-bordeaux-deep">
              Projektpreis
            </p>
            <div className="mt-3 flex items-end gap-3">
              <span className="font-display text-[clamp(2.8rem,6vw,4.5rem)] font-medium leading-none text-ink">
                499 €
              </span>
              <span className="mb-1.5 font-display text-[clamp(1.4rem,3vw,2.2rem)] font-medium text-ink-soft">
                – 2.099 €
              </span>
            </div>
            <p className="mt-3 text-sm text-ink-soft">
              Einmalig, je nach Umfang und Anforderungen deines Projekts.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <p className="max-w-xs text-sm leading-relaxed text-ink-soft md:text-right">
              Dein genaues Angebot besprechen wir kostenlos und unverbindlich
              im Erstgespräch.
            </p>
            <Link
              href="/#kontakt"
              onClick={(event) => handleAnchorClick(event, "/#kontakt")}
              className="inline-flex items-center gap-2 rounded-full bg-bordeaux-deep px-6 py-3.5 text-sm font-medium text-linen transition-colors hover:bg-ink"
            >
              Kostenloses Gespräch vereinbaren
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        <p className="mt-8 max-w-2xl text-sm text-ink-soft">
          Alle Preise verstehen sich zzgl. gesetzlicher Mehrwertsteuer. Was im
          Angebot steht, ist der Preis, den du zahlst — keine versteckten Kosten.
        </p>
      </Container>
    </section>
  );
}
