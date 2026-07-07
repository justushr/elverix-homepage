"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { PortfolioCase } from "../lib/data";
import { SiteMockup } from "./SiteMockup";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Container } from "./Container";
import { MagneticButton } from "./MagneticButton";
import { useAnchorNav } from "../lib/hooks";

export function CaseDetailContent({
  item,
  isModal = false,
}: {
  item: PortfolioCase;
  isModal?: boolean;
}) {
  const handleAnchorClick = useAnchorNav();

  return (
    <article className={isModal ? "" : "py-28 md:py-36"}>
      <Container className={isModal ? "py-10 md:py-14" : ""}>
        {!isModal && (
          <Link
            href="/#konzepte"
            onClick={(event) => handleAnchorClick(event, "/#konzepte")}
            className="mb-10 inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft size={16} />
            Zurück zu den Konzepten
          </Link>
        )}

        <span className="text-xs uppercase tracking-[0.14em] text-bordeaux-deep">
          {item.branche} · Konzept
        </span>
        <h1 className="mt-3 font-display text-[clamp(2rem,4.6vw,3.6rem)] font-medium leading-[1.05] tracking-tight text-ink">
          {item.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{item.title}</p>

        <div className="mt-8 rounded-2xl border border-bordeaux-soft bg-bordeaux-soft/40 px-5 py-4 text-sm leading-relaxed text-ink-soft">
          <strong className="text-ink">Hinweis:</strong> Dieses Projekt ist ein
          Gestaltungskonzept von Elverix zur Veranschaulichung unserer Arbeitsweise —
          kein reales Kundenprojekt.
        </div>

        <motion.div
          layoutId={`case-visual-${item.slug}`}
          className="mt-10 aspect-[16/10] overflow-hidden rounded-3xl border border-line shadow-lift md:mt-14"
        >
          <SiteMockup
            variant="after"
            businessName={item.name}
            branche={item.branche}
            colorFrom={item.colorFrom}
            colorTo={item.colorTo}
          />
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.12em] text-ink-soft">
              Herausforderung
            </span>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">{item.challenge}</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.12em] text-ink-soft">Lösung</span>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">{item.solution}</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.12em] text-ink-soft">Ergebnis</span>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">{item.outcome}</p>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <h2 className="font-display text-2xl text-ink md:text-3xl">Vorher &amp; Nachher</h2>
          <p className="mt-2 max-w-xl text-sm text-ink-soft">
            Zieh den Regler, um den Unterschied zu sehen — oder nutze die Pfeiltasten, wenn
            der Regler fokussiert ist.
          </p>
          <div className="mt-6">
            <BeforeAfterSlider
              before={
                <SiteMockup
                  variant="before"
                  businessName={item.name}
                  branche={item.branche}
                  colorFrom={item.colorFrom}
                  colorTo={item.colorTo}
                />
              }
              after={
                <SiteMockup
                  variant="after"
                  businessName={item.name}
                  branche={item.branche}
                  colorFrom={item.colorFrom}
                  colorTo={item.colorTo}
                />
              }
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 rounded-3xl border border-line bg-paper p-8 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 shrink-0 text-bordeaux-deep" size={22} />
            <p className="max-w-md text-base text-ink-soft">
              Du erkennst dich in dieser Ausgangslage wieder? Lass uns über ein Konzept für
              deinen Betrieb sprechen.
            </p>
          </div>
          <MagneticButton>
            <Link
              href="/#kontakt"
              onClick={(event) => handleAnchorClick(event, "/#kontakt")}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-linen transition-colors hover:bg-bordeaux-deep"
            >
              Kostenloses Erstgespräch
            </Link>
          </MagneticButton>
        </div>
      </Container>
    </article>
  );
}
