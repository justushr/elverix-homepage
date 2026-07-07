"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioCase } from "../lib/data";
import { SiteMockup } from "./SiteMockup";

export function PortfolioCard({ item, index }: { item: PortfolioCase; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
    >
      <Link href={`/konzepte/${item.slug}`} className="group block">
        <motion.div
          layoutId={`case-visual-${item.slug}`}
          className="aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-soft transition-transform duration-500 group-hover:-translate-y-1"
        >
          <SiteMockup
            variant="after"
            businessName={item.name}
            branche={item.branche}
            colorFrom={item.colorFrom}
            colorTo={item.colorTo}
            slug={item.slug}
          />
        </motion.div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.14em] text-bordeaux-deep">
              {item.branche} · Konzept
            </span>
            <h3 className="mt-1 font-display text-xl text-ink">{item.name}</h3>
          </div>
          <ArrowUpRight
            size={20}
            className="mt-1 shrink-0 text-ink-faint transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-bordeaux-deep"
          />
        </div>
      </Link>
    </motion.div>
  );
}
