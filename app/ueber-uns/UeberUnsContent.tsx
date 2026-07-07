"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Heart, Lightbulb, Shield, Zap } from "lucide-react";
import { Container } from "../components/Container";
import { SplitReveal } from "../components/SplitReveal";
import { TiltCard } from "../components/TiltCard";

const values = [
  {
    icon: Lightbulb,
    title: "Klarheit vor Komplexität",
    description:
      "Wir glauben, dass die beste Website die ist, die ein Besucher sofort versteht. Kein Design um des Designs willen — jede Entscheidung hat einen Grund.",
  },
  {
    icon: Shield,
    title: "Ehrlichkeit über Hochglanz",
    description:
      "Keine erfundenen Kundenzitate, keine aufgeblähten Versprechen. Wir sagen, was wir können, und zeigen, wie wir arbeiten — und das ist genug.",
  },
  {
    icon: Zap,
    title: "Geschwindigkeit, die begeistert",
    description:
      "Schnelle Websites, schnelle Umsetzung, schnelle Antworten. Wir wissen, dass deine Zeit wertvoll ist — und behandeln sie entsprechend.",
  },
  {
    icon: Heart,
    title: "Handwerk mit Sorgfalt",
    description:
      "Jede Website wird von uns mit derselben Sorgfalt gebaut, die wir uns von einem guten Handwerksbetrieb wünschen würden. Nicht mehr, nicht weniger.",
  },
];

const teamPlaceholders = [
  {
    initials: "M.H.",
    role: "Design & Konzept",
    description:
      "Verantwortlich für das visuelle Erscheinungsbild und die Nutzerführung jeder Website.",
  },
  {
    initials: "J.B.",
    role: "Entwicklung & Technik",
    description:
      "Sorgt dafür, dass jede Seite schnell, sicher und auf jedem Gerät einwandfrei läuft.",
  },
  {
    initials: "?",
    role: "Dein Ansprechpartner",
    description:
      "Jedes Projekt bekommt eine feste Ansprechperson — von der ersten Idee bis nach dem Launch.",
    isPlaceholder: true,
  },
];

export function UeberUnsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linen pb-20 pt-40 md:pb-32 md:pt-52">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(0,200,255,0.06) 0%, transparent 70%)",
          }}
        />
        {/* Gold glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 40% at 75% 30%, rgba(245,166,35,0.05) 0%, transparent 70%)",
          }}
        />
        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,200,255,0.35) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <Container>
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-bordeaux/30 bg-bordeaux-soft px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-bordeaux"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-bordeaux" />
                Über uns
              </motion.span>

              <SplitReveal
                as="h1"
                trigger="mount"
                text="Wir bauen Websites, die wirklich arbeiten."
                className="mt-6 max-w-xl font-display text-[clamp(2.4rem,4.8vw,4.2rem)] font-medium leading-[1.05] tracking-tight text-ink"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <p className="text-lg leading-relaxed text-ink-soft">
                Elverix ist ein junges Webdesign-Studio mit einem klaren Fokus:
                moderne, schnelle Websites für lokale Betriebe — zu festen Preisen,
                ohne Agentur-Kauderwelsch und mit einer festen Ansprechperson.
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                Wir glauben, dass eine gute Website kein Luxus sein sollte. Jeder
                Betrieb verdient einen professionellen Auftritt — unabhängig von
                Branche oder Budget.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-linen-2 py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-bordeaux-deep">
              Unsere Werte
            </span>
            <SplitReveal
              as="h2"
              text="Was uns antreibt."
              className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.1] tracking-tight text-ink"
            />
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                >
                  <TiltCard className="h-full rounded-3xl border border-line bg-paper p-8 shadow-soft">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-bordeaux/20 bg-bordeaux-soft">
                      <Icon size={20} className="text-bordeaux" />
                    </div>
                    <h3 className="mt-5 font-display text-xl text-ink">{value.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                      {value.description}
                    </p>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-linen py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-bordeaux-deep">
              Team
            </span>
            <SplitReveal
              as="h2"
              text="Menschen hinter Elverix."
              className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.1] tracking-tight text-ink"
            />
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Wir sind ein kleines, fokussiertes Team — das bedeutet: kurze Wege,
              klare Kommunikation und Verantwortung für jedes Detail.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamPlaceholders.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className={`rounded-3xl border p-8 ${
                  member.isPlaceholder
                    ? "border-dashed border-bordeaux/20 bg-bordeaux-soft/30"
                    : "border-line bg-paper shadow-soft"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-display font-medium ${
                    member.isPlaceholder
                      ? "border border-dashed border-bordeaux/30 text-bordeaux/50"
                      : "bg-linen-2 text-ink"
                  }`}
                >
                  {member.initials}
                </div>

                <div className="mt-5">
                  <span className="text-xs uppercase tracking-[0.12em] text-bordeaux">
                    {member.role}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach / numbers */}
      <section className="bg-linen-2 py-20 md:py-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { stat: "4–6", label: "Wochen", sub: "von Erstgespräch bis Launch" },
              { stat: "100%", label: "Festpreis", sub: "keine versteckten Kosten" },
              { stat: "1", label: "Ansprechperson", sub: "für das gesamte Projekt" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl border border-line bg-paper p-8"
              >
                <div className="font-display text-5xl text-ink">
                  {item.stat}{" "}
                  <span className="text-bordeaux text-3xl">{item.label}</span>
                </div>
                <p className="mt-3 text-sm text-ink-soft">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-linen py-20 md:py-28">
        <Container className="max-w-3xl text-center">
          <div className="mx-auto mb-10 h-px w-24 bg-gradient-to-r from-transparent via-bordeaux to-transparent" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.1] tracking-tight text-ink"
          >
            Lernen wir uns kennen.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg leading-relaxed text-ink-soft"
          >
            Ein erstes Gespräch kostet nichts und verpflichtet zu nichts —
            aber es gibt uns beiden Klarheit.
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
              Erstgespräch anfragen
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/portfolio"
              className="text-sm text-ink-soft underline underline-offset-4 transition-colors hover:text-ink"
            >
              Portfolio ansehen
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
