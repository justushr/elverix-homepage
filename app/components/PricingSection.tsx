"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Container } from "./Container";
import { SplitReveal } from "./SplitReveal";
import { pricingPlans } from "../lib/data";
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
            text="Transparente Pakete statt Stundenzettel."
            className="mt-4 font-display text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.1] tracking-tight text-ink"
          />
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`flex flex-col rounded-3xl border p-8 transition-shadow duration-300 md:p-9 ${
                plan.highlighted
                  ? "border-bordeaux-deep bg-paper shadow-lift ring-1 ring-bordeaux-deep/40"
                  : "border-line bg-paper shadow-soft"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 w-fit rounded-full bg-bordeaux-deep px-3 py-1 text-xs font-medium text-linen">
                  Beliebteste Wahl
                </span>
              )}

              <h3 className="font-display text-2xl text-ink">{plan.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{plan.tagline}</p>

              <div className="mt-6">
                <span className="font-display text-4xl text-ink">{plan.price}</span>
                <p className="mt-1 text-xs uppercase tracking-[0.08em] text-ink-soft">
                  {plan.priceNote}
                </p>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-ink-soft">
                    <Check size={17} className="mt-0.5 shrink-0 text-bordeaux-deep" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/#kontakt"
                onClick={(event) => handleAnchorClick(event, "/#kontakt")}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-bordeaux-deep text-linen hover:bg-ink"
                    : "bg-ink text-linen hover:bg-bordeaux-deep"
                }`}
              >
                {plan.ctaLabel}
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm text-ink-soft">
          Alle Preise sind Beispielwerte zur Orientierung und verstehen sich zzgl.
          gesetzlicher Mehrwertsteuer. Dein individuelles Angebot besprechen wir im
          kostenlosen Erstgespräch.
        </p>
      </Container>
    </section>
  );
}
