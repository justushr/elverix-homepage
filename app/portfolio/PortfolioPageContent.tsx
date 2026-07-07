"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import { portfolioCases } from "../lib/data";
import { Container } from "../components/Container";
import { SplitReveal } from "../components/SplitReveal";
import { PortfolioCard } from "../components/PortfolioCard";

const PLACEHOLDER_COUNT = 4;

function PlaceholderCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
    >
      <div className="group block cursor-default">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-paper">
          {/* Animated shimmer background */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,200,255,0.06) 0%, transparent 70%)",
            }}
          />
          {/* Grid dots */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(0,200,255,0.3) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-bordeaux/20 bg-bordeaux-soft">
              <Clock size={20} className="text-bordeaux opacity-60" />
            </div>
            <p className="text-sm font-medium text-ink-soft">Demnächst verfügbar</p>
            <p className="text-xs text-ink-faint">Platz für dein Projekt</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="h-3 w-24 rounded-full bg-paper" />
          <div className="mt-2 h-4 w-40 rounded-full bg-paper" />
        </div>
      </div>
    </motion.div>
  );
}

export function PortfolioPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linen pb-16 pt-40 md:pb-24 md:pt-48">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,200,255,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,200,255,0.25) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <Container>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-bordeaux/30 bg-bordeaux-soft px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-bordeaux"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-bordeaux" />
            Unsere Arbeit
          </motion.span>

          <SplitReveal
            as="h1"
            trigger="mount"
            text="Portfolio & Konzepte."
            className="mt-6 max-w-2xl font-display text-[clamp(2.8rem,5.5vw,5rem)] font-medium leading-[1.05] tracking-tight text-ink"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            Da Elverix noch jung ist, zeigen wir dir durchdachte Gestaltungskonzepte für
            verschiedene Branchen — als ehrlichen Beweis für unsere Arbeitsweise.
            Echte Kundenprojekte folgen laufend.
          </motion.p>
        </Container>
      </section>

      {/* Portfolio grid */}
      <section className="bg-linen py-16 md:py-24">
        <Container>
          {/* Existing concept cards */}
          <div className="mb-12 flex items-center gap-3">
            <span className="h-px flex-1 bg-line" />
            <span className="text-xs uppercase tracking-[0.14em] text-ink-faint">
              Gestaltungskonzepte
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>

          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioCases.map((item, index) => (
              <PortfolioCard key={item.slug} item={item} index={index} />
            ))}

            {/* Placeholder cards */}
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
              <PlaceholderCard key={`placeholder-${i}`} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="bg-linen-2 py-20 md:py-28">
        <Container className="max-w-3xl text-center">
          {/* Decorative line */}
          <div className="mx-auto mb-10 h-px w-24 bg-gradient-to-r from-transparent via-bordeaux to-transparent" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.1] tracking-tight text-ink"
          >
            Dein Projekt könnte das nächste sein.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg leading-relaxed text-ink-soft"
          >
            Im kostenlosen Erstgespräch schauen wir gemeinsam, was deine Website
            leisten soll — und wie wir das umsetzen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-bordeaux-deep px-7 py-4 text-base font-medium text-linen shadow-soft transition-all hover:scale-[1.02] hover:shadow-glow"
            >
              Kostenloses Erstgespräch
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/ueber-uns"
              className="text-sm text-ink-soft underline underline-offset-4 transition-colors hover:text-ink"
            >
              Mehr über uns erfahren
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
