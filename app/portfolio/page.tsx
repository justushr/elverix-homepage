import type { Metadata } from "next";
import { PortfolioPageContent } from "./PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Unsere Gestaltungskonzepte und abgeschlossenen Projekte — Elverix baut moderne Websites für lokale Betriebe.",
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
