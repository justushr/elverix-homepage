import type { Metadata } from "next";
import { UeberUnsContent } from "./UeberUnsContent";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Wer steckt hinter Elverix? Erfahre mehr über unser Team, unsere Werte und unseren Ansatz.",
};

export default function UeberUnsPage() {
  return <UeberUnsContent />;
}
