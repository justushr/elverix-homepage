import { notFound } from "next/navigation";
import { portfolioCases } from "../../../lib/data";
import { CaseDetailContent } from "../../../components/CaseDetailContent";
import { Modal } from "../../../components/Modal";

export default async function CaseModalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = portfolioCases.find((c) => c.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <Modal title={item.name}>
      <CaseDetailContent item={item} isModal />
    </Modal>
  );
}
