import type { Metadata } from "next";
import { Container } from "../components/Container";
import { siteConfig } from "../lib/data";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${siteConfig.name}.`,
};

export default function ImpressumPage() {
  return (
    <div className="py-28 md:py-36">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl text-ink md:text-5xl">Impressum</h1>

        <div className="mt-8 rounded-2xl border border-bordeaux-soft bg-bordeaux-soft/40 px-5 py-4 text-sm leading-relaxed text-ink-soft">
          <strong className="text-ink">Hinweis:</strong> Diese Seite ist eine
          Muster-Struktur für den Start von {siteConfig.name} und ersetzt keine
          Rechtsberatung. Bitte vor dem Livegang durch eine rechtskundige Person prüfen
          und mit den echten Unternehmensangaben vervollständigen lassen.
        </div>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-soft">
          <section>
            <h2 className="font-display text-xl text-ink">Angaben gemäß § 5 TMG</h2>
            <p className="mt-3">
              [Firmenname / Rechtsform]
              <br />
              [Straße, Hausnummer]
              <br />
              [PLZ, Ort]
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Vertreten durch</h2>
            <p className="mt-3">[Name der vertretungsberechtigten Person]</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Kontakt</h2>
            <p className="mt-3">
              Telefon: [Telefonnummer]
              <br />
              E-Mail: {siteConfig.email}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Umsatzsteuer-ID</h2>
            <p className="mt-3">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              [USt-IdNr., falls vorhanden]
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-3">[Name, Anschrift wie oben]</p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">Streitschlichtung</h2>
            <p className="mt-3">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
              (OS) bereit: [Link zur OS-Plattform einfügen, sofern erforderlich]. Wir sind
              nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen, sofern hier nichts anderes
              angegeben ist.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
