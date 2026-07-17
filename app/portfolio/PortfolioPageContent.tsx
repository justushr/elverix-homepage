"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Clock, Layers, ExternalLink } from "lucide-react";
import { portfolioCases } from "../lib/data";
import { Container } from "../components/Container";
import { SplitReveal } from "../components/SplitReveal";
import { PortfolioCard } from "../components/PortfolioCard";

const ALL_BRANCHEN = ["Alle", ...Array.from(new Set(portfolioCases.map((c) => c.branche)))];
const LIVE_DEMO_COUNT = portfolioCases.filter((c) => c.demoUrl).length;
const BRANCHE_COUNT = new Set(portfolioCases.map((c) => c.branche)).size;

const PLACEHOLDER_COUNT = 3;

function PlaceholderCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
    >
      <div className="group block cursor-default">
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          style={{
            border: "1.5px dashed rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(0,200,255,0.25) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                border: "1px solid rgba(0,200,255,0.15)",
                background: "rgba(0,200,255,0.05)",
              }}
            >
              <Clock size={16} className="text-bordeaux opacity-50" />
            </div>
            <div className="text-center">
              <p className="text-xs font-medium text-ink-faint">Demnächst</p>
              <p className="mt-0.5 text-[10px] text-ink-faint/60">Platz für dein Projekt</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-16 rounded-full bg-white/[0.04]" />
          </div>
          <div className="mt-2 h-4 w-36 rounded-full bg-white/[0.04]" />
          <div className="mt-1.5 h-3 w-full rounded-full bg-white/[0.03]" />
        </div>
      </div>
    </motion.div>
  );
}

export function PortfolioPageContent() {
  const [activeFilter, setActiveFilter] = useState("Alle");

  const filtered = useMemo(
    () =>
      activeFilter === "Alle"
        ? portfolioCases
        : portfolioCases.filter((c) => c.branche === activeFilter),
    [activeFilter]
  );

  const showPlaceholders = activeFilter === "Alle";

  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-16 pt-40 md:pb-20 md:pt-48">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,200,255,0.08) 0%, transparent 65%)",
          }}
        />
        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,200,255,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <Container>
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-bordeaux/25 bg-bordeaux-soft px-4 py-1.5 text-[11px] uppercase tracking-[0.14em] text-bordeaux"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-bordeaux" />
            Unsere Arbeit
          </motion.span>

          <SplitReveal
            as="h1"
            trigger="mount"
            text="Portfolio & Konzepte."
            className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,5vw,4.8rem)] font-medium leading-[1.06] tracking-tight text-ink"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft md:text-lg"
          >
            Da Elverix noch jung ist, zeigen wir dir durchdachte Gestaltungskonzepte
            für verschiedene Branchen — als ehrlichen Beweis für unsere Arbeitsweise.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.55 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            {[
              { value: portfolioCases.length.toString(), label: "Konzepte" },
              { value: BRANCHE_COUNT.toString(), label: "Branchen" },
              { value: LIVE_DEMO_COUNT.toString(), label: "Live-Demos" },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-medium text-bordeaux">{value}</span>
                <span className="text-sm text-ink-faint">{label}</span>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ─── Filter + Grid ─────────────────────────────────────────────── */}
      <section className="pb-24 pt-4 md:pb-32">
        <Container>
          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-12 flex flex-wrap gap-2"
          >
            {ALL_BRANCHEN.map((branche) => {
              const active = activeFilter === branche;
              return (
                <button
                  key={branche}
                  onClick={() => setActiveFilter(branche)}
                  className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
                  style={{
                    color: active ? "#070B18" : "rgba(139,156,199,0.8)",
                    background: active ? "#00C8FF" : "rgba(255,255,255,0.04)",
                    border: active ? "1px solid #00C8FF" : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {branche}
                </button>
              );
            })}
          </motion.div>

          {/* Divider */}
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px flex-1 bg-white/[0.06]" />
            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-ink-faint">
              <Layers size={11} />
              {activeFilter === "Alle" ? "Alle Konzepte" : activeFilter}
              {" · "}
              {filtered.length} {filtered.length === 1 ? "Konzept" : "Konzepte"}
            </span>
            <span className="h-px flex-1 bg-white/[0.06]" />
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((item, index) => (
                <PortfolioCard
                  key={item.slug}
                  item={item}
                  index={index}
                  featured={index === 0 && activeFilter === "Alle"}
                />
              ))}

              {showPlaceholders &&
                Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                  <PlaceholderCard key={`placeholder-${i}`} index={i} />
                ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-white/[0.05] py-24 md:py-32">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,200,255,0.06) 0%, transparent 70%)",
          }}
        />

        <Container className="relative max-w-3xl text-center">
          {/* Icon cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-bordeaux/20 bg-bordeaux-soft"
          >
            <ExternalLink size={22} className="text-bordeaux" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.08] tracking-tight text-ink"
          >
            Dein Projekt könnte{" "}
            <span className="text-bordeaux">das nächste</span> sein.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg"
          >
            Im kostenlosen Erstgespräch schauen wir gemeinsam, was deine Website
            leisten soll — und wie wir das umsetzen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-bordeaux px-7 py-3.5 text-sm font-semibold text-linen shadow-glow transition-all duration-200 hover:scale-[1.03] hover:bg-white hover:shadow-[0_0_60px_rgba(0,200,255,0.3)]"
            >
              Kostenloses Erstgespräch
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/ueber-uns"
              className="text-sm text-ink-faint underline underline-offset-4 transition-colors hover:text-ink"
            >
              Mehr über uns
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-5 text-[11px] text-ink-faint"
          >
            {["Festpreise", "Kein Agentur-Overhead", "Umsetzung in 4–6 Wochen"].map(
              (item, i) => (
                <span key={item} className="flex items-center gap-1.5">
                  {i > 0 && <span className="h-3 w-px bg-white/10" />}
                  <span className="h-1 w-1 rounded-full bg-bordeaux/60" />
                  {item}
                </span>
              )
            )}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
