"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import { ScrollTrigger } from "../lib/gsap";
import { useAnchorNav, useHasWebGL, useMediaQuery } from "../lib/hooks";
import { Container } from "./Container";
import { MagneticButton } from "./MagneticButton";
import { SplitReveal } from "./SplitReveal";
import { HeroFallback } from "./HeroFallback";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);
  const [canRender3D, setCanRender3D] = useState(false);
  const isDesktopViewport = useMediaQuery("(min-width: 768px)");
  const hasWebGL = useHasWebGL();
  const prefersReducedMotion = useReducedMotion();
  const handleAnchorClick = useAnchorNav();

  useEffect(() => {
    setCanRender3D(isDesktopViewport && hasWebGL === true && !prefersReducedMotion);
  }, [isDesktopViewport, hasWebGL, prefersReducedMotion]);

  useGSAP(
    () => {
      if (!sectionRef.current || !canRender3D) return;

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          scrollProgress.current = self.progress;
        },
      });

      return () => trigger.kill();
    },
    { dependencies: [canRender3D], scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-linen"
    >
      {/* Dot-grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,200,255,0.25) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 60% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 60% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 65% 45%, rgba(0,200,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 top-24 w-[95%] sm:w-[85%] md:top-28 md:w-[64%] lg:w-[58%]"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 26%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 26%)",
        }}
      >
        {canRender3D ? <HeroScene scrollProgress={scrollProgress} /> : <HeroFallback />}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-linen via-linen/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-linen via-transparent to-transparent" />

      <Container className="relative z-10 flex flex-1 flex-col justify-end pb-16 pt-32 md:pb-24 md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-bordeaux/30 bg-bordeaux-soft px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-bordeaux backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bordeaux" />
          Digitales Handwerk für lokale Betriebe
        </motion.span>

        <SplitReveal
          as="h1"
          trigger="mount"
          text="Deine Website soll verkaufen. Nicht nur existieren."
          className="max-w-2xl font-display text-[clamp(2.6rem,5.6vw,4.7rem)] font-medium leading-[1.05] tracking-tight text-ink"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
        >
          Elverix baut schnelle, moderne Websites für Handwerk, Gastronomie und lokale
          Dienstleister — mit der Sorgfalt eines guten Handwerksbetriebs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <MagneticButton>
            <Link
              href="/#kontakt"
              onClick={(event) => handleAnchorClick(event, "/#kontakt")}
              className="inline-flex items-center gap-2 rounded-full bg-bordeaux-deep px-7 py-4 text-base font-medium text-linen shadow-soft transition-all hover:scale-[1.02] hover:shadow-glow"
            >
              Kostenloses Erstgespräch
              <ArrowRight size={18} />
            </Link>
          </MagneticButton>

          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-bordeaux"
          >
            Portfolio ansehen
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-14 flex flex-wrap gap-8 border-t border-line pt-8 md:gap-12"
        >
          {[
            { value: "4–6", unit: "Wochen", label: "bis zum Launch" },
            { value: "100%", unit: "Festpreis", label: "keine Überraschungen" },
            { value: "1", unit: "Ansprechperson", label: "vom Start bis Launch" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl text-ink">
                {stat.value} <span className="text-bordeaux">{stat.unit}</span>
              </div>
              <div className="mt-0.5 text-xs text-ink-faint">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-faint md:flex"
      >
        <span>Scrollen</span>
        <span className="h-10 w-px bg-ink-faint" />
      </motion.div>
    </section>
  );
}
