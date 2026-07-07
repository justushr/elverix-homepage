"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "../lib/gsap";
import { useMediaQuery } from "../lib/hooks";
import { Container } from "./Container";
import { SplitReveal } from "./SplitReveal";
import { processSteps } from "../lib/data";

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const prefersReducedMotion = useReducedMotion();
  const isPinned = isDesktop && !prefersReducedMotion;

  useGSAP(
    () => {
      if (!isPinned || !pinRef.current) return;

      const total = processSteps.length;
      const trigger = ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        end: `+=${total * 360}`,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const index = Math.min(total - 1, Math.floor(self.progress * total));
          setActiveIndex((current) => (current === index ? current : index));
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleY(${self.progress})`;
          }
        },
      });

      return () => trigger.kill();
    },
    { dependencies: [isPinned], scope: sectionRef }
  );

  return (
    <section id="prozess" ref={sectionRef} className="bg-linen">
      <div ref={pinRef} className={isPinned ? "relative h-screen overflow-hidden" : "relative"}>
        <Container
          className={`flex h-full flex-col justify-center ${isPinned ? "" : "py-24 md:py-32"}`}
        >
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

          {isPinned ? (
            <div className="grid gap-16 md:grid-cols-[220px_1fr]">
              <div className="relative flex flex-col gap-0">
                <div className="absolute bottom-1 left-[7px] top-1 w-px bg-line">
                  <div
                    ref={progressRef}
                    className="w-full origin-top bg-bordeaux-deep"
                    style={{ height: "100%", transform: "scaleY(0)" }}
                  />
                </div>
                {processSteps.map((step, index) => (
                  <div key={step.number} className="relative flex items-center gap-4 py-3">
                    <span
                      className={`relative z-10 h-[15px] w-[15px] shrink-0 rounded-full border-2 transition-colors duration-300 ${
                        index <= activeIndex
                          ? "border-bordeaux-deep bg-bordeaux-deep"
                          : "border-line bg-linen"
                      }`}
                    />
                    <span
                      className={`font-sans text-sm transition-colors duration-300 ${
                        index === activeIndex ? "text-ink" : "text-ink-soft"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative min-h-[240px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="font-display text-3xl text-bordeaux-deep">
                      {processSteps[activeIndex].number}
                    </span>
                    <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">
                      {processSteps[activeIndex].title}
                    </h3>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft md:text-lg">
                      {processSteps[activeIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                  className="rounded-2xl border border-line bg-paper p-6"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-xl text-bordeaux-deep">
                      {step.number}
                    </span>
                    <h3 className="font-display text-xl text-ink">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
                </motion.div>
              ))}
            </div>
          )}
        </Container>
      </div>
    </section>
  );
}
