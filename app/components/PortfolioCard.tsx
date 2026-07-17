"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { PortfolioCase } from "../lib/data";
import { SiteMockup } from "./SiteMockup";

const BRANCHE_COLORS: Record<string, string> = {
  Bäckerei: "rgba(217,119,6,0.15)",
  Restaurant: "rgba(181,67,46,0.15)",
  Handwerk: "rgba(139,106,79,0.15)",
  Friseursalon: "rgba(201,143,136,0.15)",
  Arztpraxis: "rgba(111,163,156,0.15)",
  Einzelhandel: "rgba(124,134,161,0.15)",
  Fitness: "rgba(249,115,22,0.15)",
  Café: "rgba(200,133,74,0.15)",
};

const BRANCHE_TEXT: Record<string, string> = {
  Bäckerei: "#d97706",
  Restaurant: "#b5432e",
  Handwerk: "#8b6a4f",
  Friseursalon: "#c98f88",
  Arztpraxis: "#6fa39c",
  Einzelhandel: "#7c86a1",
  Fitness: "#f97316",
  Café: "#C8854A",
};

export function PortfolioCard({
  item,
  index,
  featured = false,
}: {
  item: PortfolioCase;
  index: number;
  featured?: boolean;
}) {
  const brancheColor = BRANCHE_TEXT[item.branche] ?? "#00C8FF";
  const brancheBg = BRANCHE_COLORS[item.branche] ?? "rgba(0,200,255,0.1)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      className={featured ? "lg:col-span-2" : ""}
    >
      <Link href={`/konzepte/${item.slug}`} className="group block">
        {/* Card thumbnail */}
        <motion.div
          layoutId={`case-visual-${item.slug}`}
          className="relative overflow-hidden rounded-2xl border border-white/[0.07]"
          style={{
            aspectRatio: featured ? "16/9" : "4/3",
          }}
        >
          {item.thumbnailPhoto ? (
            <>
              {/* Photo */}
              <Image
                src={item.thumbnailPhoto}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Subtle color tint from top-left */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${item.colorFrom}30 0%, transparent 55%)`,
                }}
              />
              {/* Bottom fade to dark background */}
              <div
                className="absolute inset-x-0 bottom-0 h-2/3"
                style={{
                  background: `linear-gradient(to top, ${item.colorTo} 0%, ${item.colorTo}cc 25%, ${item.colorTo}44 60%, transparent 100%)`,
                }}
              />
              {/* Bottom text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: item.colorFrom }}
                >
                  {item.branche}
                </p>
                <p className="mt-1 font-display text-lg font-medium leading-snug text-white">
                  {item.name}
                </p>
              </div>
            </>
          ) : (
            <>
              <SiteMockup
                variant="after"
                businessName={item.name}
                branche={item.branche}
                colorFrom={item.colorFrom}
                colorTo={item.colorTo}
                slug={item.slug}
              />
              {/* Hover overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(ellipse 70% 60% at 50% 100%, ${item.colorFrom}22, transparent 70%)`,
                }}
              />
            </>
          )}

          {/* Demo badge */}
          {item.demoUrl && (
            <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white/70 backdrop-blur-sm">
              <ExternalLink size={9} />
              Live Demo
            </div>
          )}
        </motion.div>

        {/* Meta */}
        <div className="mt-4 flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span
                className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em]"
                style={{
                  backgroundColor: brancheBg,
                  color: brancheColor,
                  border: `1px solid ${brancheColor}30`,
                }}
              >
                {item.branche}
              </span>
              <span className="text-[10px] uppercase tracking-[0.1em] text-ink-faint">Konzept</span>
            </div>
            <h3 className="mt-2 font-display text-[1.1rem] font-medium leading-snug text-ink transition-colors duration-200 group-hover:text-white">
              {item.name}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-soft">
              {item.summary}
            </p>
          </div>
          <div
            className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] transition-all duration-300 group-hover:border-white/20 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
            }}
          >
            <ArrowUpRight
              size={14}
              className="text-ink-faint transition-colors duration-300 group-hover:text-ink"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
