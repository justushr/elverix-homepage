"use client";

import { motion } from "motion/react";
import { Container } from "./Container";
import { SplitReveal } from "./SplitReveal";
import { useCountUp } from "../lib/hooks";

const stats = [
  { value: 3, suffix: "s", label: "Zeit, die dein Design hat, um zu überzeugen" },
  { value: 88, suffix: "%", label: "kommen nach einem schlechten ersten Eindruck nicht zurück" },
  { value: 70, suffix: "%", label: "suchen dich heute zuerst auf dem Smartphone" },
];

function Stat({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { ref, display } = useCountUp(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="border-t border-line pt-6"
    >
      <span className="font-display text-5xl text-bordeaux-deep md:text-6xl">
        <span ref={ref}>{display}</span>
        {suffix}
      </span>
      <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-ink-soft">{label}</p>
    </motion.div>
  );
}

export function ProblemSection() {
  return (
    <section className="bg-linen py-24 md:py-32">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <SplitReveal
            as="h2"
            text="Deine Website kostet dich jeden Tag Kunden."
            className="font-display text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.1] tracking-tight text-ink"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-ink-soft md:pt-3"
          >
            Menschen suchen bei Google, landen auf deiner Seite — und entscheiden in
            Sekunden, ob sie bleiben oder zum nächsten Ergebnis wechseln. Eine veraltete
            oder verwirrende Website kostet dich damit nicht nur Ästhetik, sondern echte
            Anfragen und Termine.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3 md:mt-24">
          {stats.map((stat, index) => (
            <Stat key={stat.label} index={index} {...stat} />
          ))}
        </div>

        <p className="mt-10 text-xs text-ink-soft">
          Vielzitierte Richtwerte aus der UX-Forschung — dein Ergebnis hängt von Branche und
          Umsetzung ab.
        </p>
      </Container>
    </section>
  );
}
