"use client";

import { motion } from "motion/react";
import { Container } from "./Container";
import { SplitReveal } from "./SplitReveal";
import { whyItems } from "../lib/data";

export function WhySection() {
  return (
    <section className="bg-linen py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-bordeaux-deep">
            Warum Elverix
          </span>
          <SplitReveal
            as="h2"
            text="Vier Gründe, die für sich sprechen."
            className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.1] tracking-tight text-ink"
          />
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {whyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                className="flex gap-5 border-t border-line pt-6"
              >
                <Icon className="mt-1 shrink-0 text-bordeaux-deep" size={26} />
                <div>
                  <h3 className="font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
