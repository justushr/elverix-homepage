"use client";

import { motion } from "motion/react";
import { Container } from "./Container";
import { SplitReveal } from "./SplitReveal";
import { promiseItems } from "../lib/data";

export function PromiseSection() {
  return (
    <section className="bg-linen-2 py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-bordeaux-deep">
            Das erwartet dich
          </span>
          <SplitReveal
            as="h2"
            text="Kein Hochglanz-Versprechen. Ein Arbeitsversprechen."
            className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.1] tracking-tight text-ink"
          />
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Wir zeigen dir hier bewusst keine erfundenen Kundenzitate. Stattdessen sagen wir
            dir genau, wie die Zusammenarbeit mit uns aussieht.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {promiseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                className="rounded-3xl border border-line bg-paper p-8"
              >
                <Icon className="text-bordeaux-deep" size={24} />
                <h3 className="mt-5 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
