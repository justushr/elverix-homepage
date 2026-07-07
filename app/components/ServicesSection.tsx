"use client";

import { motion } from "motion/react";
import { Container } from "./Container";
import { SplitReveal } from "./SplitReveal";
import { TiltCard } from "./TiltCard";
import { services } from "../lib/data";

export function ServicesSection() {
  return (
    <section id="leistungen" className="bg-linen-2 py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-bordeaux-deep">
            Leistungen
          </span>
          <SplitReveal
            as="h2"
            text="Alles, was deine Website wirklich braucht."
            className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.1] tracking-tight text-ink"
          />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
              >
                <TiltCard className="h-full rounded-3xl border border-line bg-paper p-8 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bordeaux-soft text-bordeaux-deep">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
