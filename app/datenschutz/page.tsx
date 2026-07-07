import type { Metadata } from "next";
import { Container } from "../components/Container";
import { siteConfig } from "../lib/data";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${siteConfig.name}.`,
};

export default function DatenschutzPage() {
  return (
    <div className="py-28 md:py-36">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl text-ink md:text-5xl">Datenschutzerklärung</h1>

        <div className="mt-8 rounded-2xl border border-bordeaux-soft bg-bordeaux-soft/40 px-5 py-4 text-sm leading-relaxed text-ink-soft">
          <strong className="text-ink">Hinweis:</strong> Diese Seite ist eine
          Muster-Struktur für den Start von {siteConfig.name} und ersetzt keine
          Rechtsberatung. Bitte vor dem Livegang durch eine rechtskundige bzw.
          datenschutzkundige Person prüfen und an die tatsächlich eingesetzten Werkzeuge
          (Hosting, Analyse, Formular-Versand) anpassen lassen.
        </div>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-soft">
          <section>
            <h2 className="font-display text-xl text-ink">1. Verantwortlicher</h2>
            <p className="mt-3">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              [Firmenname / Rechtsform]
              <br />
              [Straße, Hausnummer, PLZ, Ort]
              <br />
              E-Mail: {siteConfig.email}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">2. Hosting</h2>
            <p className="mt-3">
              Diese Website wird bei [Name des Hosting-Anbieters einfügen] gehostet. Beim
              Aufruf der Seite verarbeitet der Hoster automatisch technische Zugriffsdaten
              (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite) in
              sogenannten Server-Logfiles.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">3. Kontaktformular</h2>
            <p className="mt-3">
              Wenn du uns über das Kontaktformular Anfragen zukommen lässt, werden deine
              Angaben aus dem Formular inklusive der von dir dort angegebenen Kontaktdaten
              zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir
              nicht ohne deine Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">4. Cookies &amp; Analyse-Tools</h2>
            <p className="mt-3">
              Aktuell setzt diese Website keine Analyse- oder Marketing-Cookies ein. Sollte
              sich das ändern, wird diese Erklärung um die entsprechenden Angaben und,
              falls nötig, um einen Cookie-Hinweis mit Einwilligungsmöglichkeit ergänzt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">5. Deine Rechte</h2>
            <p className="mt-3">
              Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder
              Einschränkung der Verarbeitung deiner gespeicherten personenbezogenen Daten
              sowie ein Recht auf Datenübertragbarkeit und Widerspruch. Wende dich dazu an:{" "}
              {siteConfig.email}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink">6. Beschwerderecht</h2>
            <p className="mt-3">
              Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über die
              Verarbeitung deiner personenbezogenen Daten durch uns zu beschweren.
              [Zuständige Aufsichtsbehörde einfügen].
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
