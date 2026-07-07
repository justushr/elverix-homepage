import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { portfolioCases } from "../../lib/data";
import { CaseDetailContent } from "../../components/CaseDetailContent";

export function generateStaticParams() {
  return portfolioCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioCases.find((c) => c.slug === slug);

  if (!item) {
    return { title: "Konzept nicht gefunden" };
  }

  return {
    title: `${item.name} — Konzept`,
    description: item.summary,
  };
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = portfolioCases.find((c) => c.slug === slug);

  if (!item) {
    notFound();
  }

  return <CaseDetailContent item={item} />;
}
