"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "./Container";
import { SplitReveal } from "./SplitReveal";
import { MagneticButton } from "./MagneticButton";
import { businessTypes, siteConfig } from "../lib/data";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      businessType: formData.get("businessType"),
      message: formData.get("message"),
      websiteCheck: formData.get("websiteCheck") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? "Unbekannter Fehler");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Da ist etwas schiefgelaufen.");
    }
  };

  const focusNameField = () => {
    document.getElementById("kontakt-name")?.focus();
  };

  return (
    <section id="kontakt" className="bg-linen py-24 md:py-32">
      <Container className="max-w-4xl">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-bordeaux-deep">
            Kontakt
          </span>
          <SplitReveal
            as="h2"
            text="Lass uns über deine Website sprechen."
            className="mt-4 font-display text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-[1.1] tracking-tight text-ink"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-start gap-6 rounded-3xl border border-line bg-paper p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-4">
            <CalendarCheck className="mt-1 shrink-0 text-bordeaux-deep" size={26} />
            <div>
              <h3 className="font-display text-xl text-ink">Der schnellste Weg</h3>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-soft">
                Kostenloses, unverbindliches Erstgespräch anfragen — wir melden uns
                innerhalb von ein bis zwei Werktagen bei dir.
              </p>
            </div>
          </div>
          <MagneticButton>
            <button
              type="button"
              onClick={focusNameField}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-bordeaux-deep px-6 py-3.5 text-sm font-medium text-linen transition-colors hover:bg-ink"
            >
              Erstgespräch anfragen
            </button>
          </MagneticButton>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="mt-10 rounded-3xl border border-line bg-paper p-8 md:p-10"
        >
          <h3 className="font-display text-xl text-ink">
            Oder schreib uns kurz, worum es geht
          </h3>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="kontakt-name" className="text-sm text-ink-soft">
                Name *
              </label>
              <input
                id="kontakt-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="rounded-xl border border-line bg-linen px-4 py-3 text-ink outline-none transition-colors focus:border-bordeaux-deep"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="kontakt-email" className="text-sm text-ink-soft">
                E-Mail *
              </label>
              <input
                id="kontakt-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="rounded-xl border border-line bg-linen px-4 py-3 text-ink outline-none transition-colors focus:border-bordeaux-deep"
              />
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="kontakt-branche" className="text-sm text-ink-soft">
                Betriebsart *
              </label>
              <select
                id="kontakt-branche"
                name="businessType"
                required
                defaultValue=""
                className="rounded-xl border border-line bg-linen px-4 py-3 text-ink outline-none transition-colors focus:border-bordeaux-deep"
              >
                <option value="" disabled>
                  Bitte auswählen
                </option>
                {businessTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="kontakt-nachricht" className="text-sm text-ink-soft">
                Nachricht *
              </label>
              <textarea
                id="kontakt-nachricht"
                name="message"
                required
                rows={5}
                className="resize-none rounded-xl border border-line bg-linen px-4 py-3 text-ink outline-none transition-colors focus:border-bordeaux-deep"
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-ink-soft sm:col-span-2">
              <input
                type="checkbox"
                name="websiteCheck"
                className="mt-1 h-4 w-4 rounded border-line text-bordeaux-deep focus:ring-bordeaux-deep"
              />
              Ich möchte zusätzlich einen kostenlosen Website-Check meiner aktuellen Seite.
            </label>
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-linen transition-colors hover:bg-bordeaux-deep disabled:opacity-60"
            >
              {status === "loading" && <Loader2 size={16} className="animate-spin" />}
              Nachricht senden
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-pine">
                <CheckCircle2 size={18} />
                Danke! Wir melden uns innerhalb von 1–2 Werktagen.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-bordeaux-deep">
                {errorMessage || "Da ist etwas schiefgelaufen."} Schreib uns gerne direkt an{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline">
                  {siteConfig.email}
                </a>
                .
              </p>
            )}
          </div>
        </motion.form>
      </Container>
    </section>
  );
}
