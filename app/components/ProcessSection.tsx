"use client";

import { motion } from "motion/react";
import { Container } from "./Container";
import { SplitReveal } from "./SplitReveal";
import { processSteps } from "../lib/data";

export function ProcessSection() {
  return (
    <section id="prozess" className="bg-linen py-24 md:py-32">
      <Container>
        <div className="mb-12 max-w-xl md:mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-bordeaux-deep">
            Der Prozess
          </span>
          <SplitReveal
            as="h2"
            text="Von der Idee zur fertigen Website."
            className="mt-4 font-display text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.1] tracking-tight text-ink"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="rounded-2xl border border-line bg-paper p-6"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-xl text-bordeaux-deep">{step.number}</span>
                <h3 className="font-display text-xl text-ink">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
