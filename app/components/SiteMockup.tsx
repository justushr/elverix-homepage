function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const stripes =
  "repeating-linear-gradient(45deg, #cfcabd, #cfcabd 6px, #bdb8ab 6px, #bdb8ab 12px)";

// ─── Shared browser chrome ────────────────────────────────────────────────────
function Chrome({ url, dot }: { url: string; dot: string }) {
  return (
    <div
      className="flex shrink-0 items-center gap-1.5 px-3 py-2"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        backgroundColor: "rgba(255,255,255,0.03)",
      }}
    >
      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: `${dot}70` }} />
      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.14)" }} />
      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
      <span
        className="ml-3 truncate rounded-full px-3 py-0.5 text-[9px]"
        style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)" }}
      >
        {url}
      </span>
    </div>
  );
}

// ─── BEFORE: generische veraltete Website ────────────────────────────────────
function BeforeMockup({ businessName }: { businessName: string }) {
  return (
    <div
      className="flex h-full w-full flex-col bg-[#ece9e2] text-black"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-[#d8d4c9] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
        <span className="ml-3 truncate rounded bg-white/70 px-2 py-0.5 text-[9px] text-black/50">
          www.{slugify(businessName)}.de/index.html
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2.5 overflow-hidden p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2 border-b-2 border-double border-black/30 pb-2">
          <span className="truncate text-sm font-bold text-[#1a3a6b] underline sm:text-base">
            {businessName}
          </span>
          <div className="hidden shrink-0 gap-2 text-[9px] text-[#0000ee] underline sm:flex">
            <span>Home</span>
            <span>Über uns</span>
            <span>Leistungen</span>
            <span>Kontakt</span>
          </div>
        </div>
        <div className="inline-block w-fit bg-[#c0392b] px-2 py-0.5 text-[9px] font-bold text-white">
          ★ Willkommen auf unserer Webseite! ★
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2.5">
          <div className="col-span-2 space-y-2 text-[9px] leading-relaxed text-black/70 sm:text-[10px]">
            <p>
              Lorem ipsum dolor sit amet, hier stand seit Jahren derselbe Text ohne
              Aktualisierung.
            </p>
            <div className="h-14 w-full border border-black/20 sm:h-20" style={{ backgroundImage: stripes }} />
            <p>Öffnungszeiten: siehe Aushang (evtl. veraltet)</p>
          </div>
          <div className="space-y-2">
            <div className="h-16 w-full border border-black/20 sm:h-24" style={{ backgroundImage: stripes }} />
            <div className="h-7 w-full border border-black/30 bg-[#eeeeee] text-center text-[9px] leading-7 text-[#0000ee] underline">
              Hier klicken!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── AFTER: Bäckerei Mühlenbeck ───────────────────────────────────────────────
function BaeckereiAfter({ c, b }: { c: string; b: string }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden" style={{ backgroundColor: b }}>
      <Chrome url="baeckerei-muehlenbeck.de" dot={c} />
      <div
        className="relative flex flex-1 flex-col overflow-hidden"
        style={{ background: `radial-gradient(ellipse 110% 80% at 0% -10%, ${c}28, transparent 60%)` }}
      >
        {/* Nav */}
        <div className="flex shrink-0 items-center justify-between px-4 py-2.5 sm:px-5">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: c }} />
            <span className="text-[9px] font-bold sm:text-[10px]" style={{ color: "#fff" }}>
              Bäckerei Mühlenbeck
            </span>
          </div>
          <span
            className="rounded-full px-2.5 py-0.5 text-[7px] font-bold sm:text-[8px]"
            style={{ backgroundColor: c, color: "#fff" }}
          >
            Bestellen
          </span>
        </div>
        {/* Hero */}
        <div className="flex flex-1 flex-col justify-center px-4 sm:px-5">
          <p className="text-[7px] uppercase tracking-[0.18em] sm:text-[8px]" style={{ color: `${c}80` }}>
            Familienbäckerei seit 1985
          </p>
          <h2
            className="mt-1.5 font-black leading-none sm:mt-2"
            style={{ color: "#fff", fontSize: "clamp(14px, 3vw, 28px)" }}
          >
            Frisch.
            <br />
            Täglich.
          </h2>
          <p className="mt-1.5 text-[8px] sm:text-[9px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            Handwerk aus dem Sauerland.
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            <span
              className="rounded-full px-2.5 py-1 text-[7px] font-bold sm:text-[8px]"
              style={{ backgroundColor: c, color: "#fff" }}
            >
              Jetzt vorbestellen
            </span>
            <span
              className="text-[7px] underline underline-offset-2 sm:text-[8px]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Speisekarte
            </span>
          </div>
        </div>
        {/* Kategorie-Kacheln */}
        <div className="grid shrink-0 grid-cols-3 gap-1 px-4 pb-3 sm:gap-1.5 sm:px-5">
          {["Brot & Brötchen", "Konditorei", "Café & Snacks"].map((cat) => (
            <div
              key={cat}
              className="rounded-lg p-2"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${c}22` }}
            >
              <div className="mb-1.5 h-1 w-3 rounded-full" style={{ backgroundColor: `${c}80` }} />
              <p
                className="text-[6.5px] font-medium leading-tight sm:text-[7.5px]"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {cat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── AFTER: Trattoria Rosso ───────────────────────────────────────────────────
function TrattoiaRossoAfter({ c, b }: { c: string; b: string }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden" style={{ backgroundColor: b }}>
      <Chrome url="trattoria-rosso.de" dot={c} />
      <div
        className="relative flex flex-1 flex-col overflow-hidden"
        style={{ background: `radial-gradient(ellipse 100% 70% at 50% 0%, ${c}30, transparent 65%)` }}
      >
        {/* Nav */}
        <div className="flex shrink-0 items-center justify-between px-4 py-2.5 sm:px-5">
          <div>
            <div className="text-[9px] font-bold italic sm:text-[10px]" style={{ color: "#fff" }}>
              Trattoria Rosso
            </div>
            <div
              className="text-[6.5px] uppercase tracking-[0.12em] sm:text-[7px]"
              style={{ color: `${c}80` }}
            >
              Ristorante · Pizzeria
            </div>
          </div>
          <span
            className="rounded-full px-2.5 py-0.5 text-[7px] font-bold sm:text-[8px]"
            style={{ backgroundColor: c, color: "#fff" }}
          >
            Reservieren
          </span>
        </div>
        {/* Trennlinie */}
        <div className="mx-4 h-px sm:mx-5" style={{ backgroundColor: `${c}30` }} />
        {/* Hero */}
        <div className="flex flex-1 flex-col justify-center px-4 sm:px-5">
          <p
            className="text-[7px] uppercase tracking-[0.2em] sm:text-[8px]"
            style={{ color: `${c}80` }}
          >
            Cucina Italiana
          </p>
          <h2
            className="mt-1 font-black italic leading-tight sm:mt-2"
            style={{ color: "#fff", fontSize: "clamp(13px, 2.8vw, 24px)", maxWidth: "16ch" }}
          >
            Dal 1994 —<br />Authentisch.
          </h2>
          <p
            className="mt-1.5 text-[7.5px] leading-relaxed sm:text-[8.5px]"
            style={{ color: "rgba(255,255,255,0.4)", maxWidth: "22ch" }}
          >
            Frische Zutaten. Hausgemachte Pasta.
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            <span
              className="rounded-full px-2.5 py-1 text-[7px] font-bold sm:text-[8px]"
              style={{ backgroundColor: c, color: "#fff" }}
            >
              Tisch reservieren
            </span>
            <span
              className="text-[7px] underline underline-offset-2 sm:text-[8px]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Speisekarte
            </span>
          </div>
        </div>
        {/* Menü-Tabs */}
        <div className="flex shrink-0 gap-1 px-4 pb-3 sm:gap-1.5 sm:px-5">
          {["Antipasti", "Pasta", "Pizza", "Dolci"].map((item) => (
            <div
              key={item}
              className="flex-1 rounded-lg py-2 text-center text-[6.5px] font-medium sm:text-[7.5px]"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: `1px solid ${c}20`,
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── AFTER: Holzwerk Bauer ────────────────────────────────────────────────────
function HolzwerkBauerAfter({ c, b }: { c: string; b: string }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden" style={{ backgroundColor: b }}>
      <Chrome url="holzwerk-bauer.de" dot={c} />
      <div
        className="relative flex flex-1 flex-col overflow-hidden"
        style={{ background: `radial-gradient(ellipse 90% 60% at 80% 20%, ${c}22, transparent 65%)` }}
      >
        {/* Nav */}
        <div className="flex shrink-0 items-center justify-between px-4 py-2.5 sm:px-5">
          <div className="flex items-center gap-1.5">
            <div
              className="h-3 w-3 rotate-45 rounded-sm"
              style={{ backgroundColor: c }}
            />
            <div>
              <div className="text-[9px] font-bold sm:text-[10px]" style={{ color: "#fff" }}>
                Holzwerk Bauer
              </div>
              <div
                className="text-[6px] uppercase tracking-[0.1em] sm:text-[6.5px]"
                style={{ color: `${c}70` }}
              >
                Meisterbetrieb seit 1978
              </div>
            </div>
          </div>
          <span
            className="rounded-full px-2.5 py-0.5 text-[7px] font-bold sm:text-[8px]"
            style={{ backgroundColor: c, color: "#fff" }}
          >
            Anfragen
          </span>
        </div>
        {/* Hero */}
        <div className="flex flex-1 flex-col justify-center px-4 sm:px-5">
          <p
            className="text-[7px] uppercase tracking-[0.15em] sm:text-[8px]"
            style={{ color: `${c}80` }}
          >
            Schreinerei · Sauerland
          </p>
          <h2
            className="mt-1.5 font-black leading-tight sm:mt-2"
            style={{ color: "#fff", fontSize: "clamp(12px, 2.8vw, 24px)", maxWidth: "16ch" }}
          >
            Schreinerarbeit
            <br />
            mit Charakter.
          </h2>
          <p
            className="mt-1.5 text-[7.5px] leading-relaxed sm:text-[8.5px]"
            style={{ color: "rgba(255,255,255,0.4)", maxWidth: "22ch" }}
          >
            Individuell. Präzise. Für Generationen.
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            <span
              className="rounded-full px-2.5 py-1 text-[7px] font-bold sm:text-[8px]"
              style={{ backgroundColor: c, color: "#fff" }}
            >
              Maßanfrage
            </span>
            <span
              className="text-[7px] underline underline-offset-2 sm:text-[8px]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Referenzen
            </span>
          </div>
        </div>
        {/* Leistungs-Kacheln */}
        <div className="grid shrink-0 grid-cols-3 gap-1 px-4 pb-3 sm:gap-1.5 sm:px-5">
          {["Möbel nach Maß", "Treppen", "Einbauschränke"].map((s) => (
            <div
              key={s}
              className="rounded-lg p-2"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${c}20` }}
            >
              <div className="mb-1.5 flex gap-0.5">
                <div className="h-1 w-1 rounded-sm" style={{ backgroundColor: `${c}90` }} />
                <div className="h-1 w-1 rounded-sm" style={{ backgroundColor: `${c}50` }} />
              </div>
              <p
                className="text-[6.5px] font-medium leading-tight sm:text-[7.5px]"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {s}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── AFTER: Salon Amelie ──────────────────────────────────────────────────────
function SalonAmelieAfter({ c, b }: { c: string; b: string }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden" style={{ backgroundColor: b }}>
      <Chrome url="salon-amelie.de" dot={c} />
      <div
        className="relative flex flex-1 flex-col overflow-hidden"
        style={{ background: `radial-gradient(ellipse 80% 80% at 50% -20%, ${c}28, transparent 65%)` }}
      >
        {/* Nav */}
        <div className="flex shrink-0 items-center justify-between px-4 py-2.5 sm:px-5">
          <div>
            <div className="text-[9px] font-bold tracking-wide sm:text-[10px]" style={{ color: "#fff" }}>
              Salon Amelie
            </div>
            <div
              className="text-[6px] uppercase tracking-[0.14em] sm:text-[6.5px]"
              style={{ color: `${c}80` }}
            >
              Friseur & Styling
            </div>
          </div>
          <span
            className="rounded-full px-2.5 py-0.5 text-[7px] font-bold sm:text-[8px]"
            style={{ backgroundColor: c, color: "#fff" }}
          >
            Termin
          </span>
        </div>
        {/* Hero */}
        <div className="flex flex-1 flex-col justify-center px-4 sm:px-5">
          <p
            className="text-[7px] uppercase tracking-[0.2em] sm:text-[8px]"
            style={{ color: `${c}90` }}
          >
            Ihr Friseur in Arnsberg
          </p>
          <h2
            className="mt-1.5 font-bold leading-snug sm:mt-2"
            style={{ color: "#fff", fontSize: "clamp(12px, 2.8vw, 24px)", maxWidth: "16ch" }}
          >
            Schönheit,
            <br />
            die zu dir passt.
          </h2>
          <p
            className="mt-1.5 text-[7.5px] leading-relaxed sm:text-[8.5px]"
            style={{ color: "rgba(255,255,255,0.45)", maxWidth: "22ch" }}
          >
            Schnitt · Farbe · Styling · Pflege
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            <span
              className="rounded-full px-2.5 py-1 text-[7px] font-bold sm:text-[8px]"
              style={{ backgroundColor: c, color: "#fff" }}
            >
              Online buchen
            </span>
            <span
              className="text-[7px] underline underline-offset-2 sm:text-[8px]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Preisliste
            </span>
          </div>
        </div>
        {/* Leistungen 2×2 mit Preisen */}
        <div className="grid shrink-0 grid-cols-2 gap-1 px-4 pb-3 sm:gap-1.5 sm:px-5">
          {[
            { name: "Schnitt & Form", price: "ab 25 €" },
            { name: "Farbe & Tönung", price: "ab 40 €" },
            { name: "Styling", price: "ab 20 €" },
            { name: "Pflege & Kur", price: "ab 15 €" },
          ].map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between rounded-lg px-2 py-1.5"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${c}18` }}
            >
              <p
                className="text-[6.5px] font-medium sm:text-[7.5px]"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {s.name}
              </p>
              <p className="text-[6px] sm:text-[7px]" style={{ color: `${c}90` }}>
                {s.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── AFTER: Praxis am Lindenplatz ────────────────────────────────────────────
function PraxisLindenplatzAfter({ c, b }: { c: string; b: string }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden" style={{ backgroundColor: b }}>
      <Chrome url="praxis-lindenplatz.de" dot={c} />
      <div
        className="relative flex flex-1 flex-col overflow-hidden"
        style={{ background: `radial-gradient(ellipse 70% 60% at 100% 0%, ${c}20, transparent 60%)` }}
      >
        {/* Nav */}
        <div className="flex shrink-0 items-center justify-between px-4 py-2.5 sm:px-5">
          <div>
            <div className="text-[9px] font-bold sm:text-[10px]" style={{ color: "#fff" }}>
              Praxis am Lindenplatz
            </div>
            <div
              className="text-[6px] uppercase tracking-[0.1em] sm:text-[6.5px]"
              style={{ color: `${c}80` }}
            >
              Allgemeinmedizin · Dr. Lindemann
            </div>
          </div>
          <span
            className="rounded-full px-2.5 py-0.5 text-[7px] font-bold sm:text-[8px]"
            style={{ backgroundColor: c, color: "#fff" }}
          >
            Termin
          </span>
        </div>
        {/* Hero */}
        <div className="flex flex-1 flex-col justify-center px-4 sm:px-5">
          <p
            className="text-[7px] uppercase tracking-[0.15em] sm:text-[8px]"
            style={{ color: `${c}80` }}
          >
            Ihre Hausarztpraxis
          </p>
          <h2
            className="mt-1.5 font-bold leading-snug sm:mt-2"
            style={{ color: "#fff", fontSize: "clamp(12px, 2.8vw, 24px)", maxWidth: "18ch" }}
          >
            Gut versorgt,
            <br />
            gut informiert.
          </h2>
          <p
            className="mt-1.5 text-[7.5px] leading-relaxed sm:text-[8.5px]"
            style={{ color: "rgba(255,255,255,0.4)", maxWidth: "24ch" }}
          >
            Alle wichtigen Infos auf einen Blick.
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            <span
              className="rounded-full px-2.5 py-1 text-[7px] font-bold sm:text-[8px]"
              style={{ backgroundColor: c, color: "#fff" }}
            >
              Online-Termin
            </span>
            <span
              className="text-[7px] underline underline-offset-2 sm:text-[8px]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Rezept bestellen
            </span>
          </div>
        </div>
        {/* Schnellzugriff 2×2 */}
        <div className="grid shrink-0 grid-cols-2 gap-1 px-4 pb-3 sm:gap-1.5 sm:px-5">
          {[
            { label: "Sprechzeiten", hi: true },
            { label: "Rezepte online", hi: false },
            { label: "Überweisung", hi: false },
            { label: "Notfall-Infos", hi: false },
          ].map(({ label, hi }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 rounded-lg px-2 py-1.5"
              style={{
                backgroundColor: hi ? `${c}20` : "rgba(255,255,255,0.05)",
                border: `1px solid ${hi ? c + "40" : c + "18"}`,
              }}
            >
              <div
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: hi ? c : `${c}50` }}
              />
              <p
                className="text-[6.5px] font-medium sm:text-[7.5px]"
                style={{ color: hi ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.45)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── AFTER: Papeterie Nordlicht ───────────────────────────────────────────────
function PaperieNordlichtAfter({ c, b }: { c: string; b: string }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden" style={{ backgroundColor: b }}>
      <Chrome url="papeterie-nordlicht.de" dot={c} />
      <div
        className="relative flex flex-1 flex-col overflow-hidden"
        style={{ background: `radial-gradient(ellipse 80% 80% at 20% 100%, ${c}18, transparent 60%)` }}
      >
        {/* Nav */}
        <div className="flex shrink-0 items-center justify-between px-4 py-2.5 sm:px-5">
          <div className="flex items-center gap-1.5">
            <div className="flex flex-col gap-0.5">
              <div className="h-0.5 w-3" style={{ backgroundColor: c }} />
              <div className="h-0.5 w-2" style={{ backgroundColor: `${c}60` }} />
            </div>
            <span
              className="text-[9px] font-bold tracking-wide sm:text-[10px]"
              style={{ color: "#fff" }}
            >
              Papeterie Nordlicht
            </span>
          </div>
          <span
            className="rounded-full px-2.5 py-0.5 text-[7px] font-bold sm:text-[8px]"
            style={{ backgroundColor: c, color: "#fff" }}
          >
            Shop
          </span>
        </div>
        {/* Hero */}
        <div className="flex flex-1 flex-col justify-center px-4 sm:px-5">
          <p
            className="text-[7px] uppercase tracking-[0.2em] sm:text-[8px]"
            style={{ color: `${c}80` }}
          >
            Inhabergeführt seit 2008
          </p>
          <h2
            className="mt-1.5 font-bold leading-snug sm:mt-2"
            style={{ color: "#fff", fontSize: "clamp(12px, 2.8vw, 24px)", maxWidth: "16ch" }}
          >
            Schreibkultur
            <br />& Papier.
          </h2>
          <p
            className="mt-1.5 text-[7.5px] leading-relaxed sm:text-[8.5px]"
            style={{ color: "rgba(255,255,255,0.4)", maxWidth: "22ch" }}
          >
            Ausgewähltes für Liebhaber der Schreibkultur.
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            <span
              className="rounded-full px-2.5 py-1 text-[7px] font-bold sm:text-[8px]"
              style={{ backgroundColor: c, color: "#fff" }}
            >
              Entdecken
            </span>
            <span
              className="text-[7px] underline underline-offset-2 sm:text-[8px]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Öffnungszeiten
            </span>
          </div>
        </div>
        {/* Produkt-Kategorien */}
        <div className="grid shrink-0 grid-cols-3 gap-1 px-4 pb-3 sm:gap-1.5 sm:px-5">
          {[
            { name: "Notizbücher", dots: 3 },
            { name: "Füller & Tinten", dots: 2 },
            { name: "Geschenke", dots: 1 },
          ].map(({ name, dots }) => (
            <div
              key={name}
              className="rounded-lg p-2"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${c}20` }}
            >
              <div className="mb-1.5 flex gap-0.5">
                {Array.from({ length: dots }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1 w-1 rounded-full"
                    style={{ backgroundColor: `${c}${i === 0 ? "90" : "40"}` }}
                  />
                ))}
              </div>
              <p
                className="text-[6.5px] font-medium leading-tight sm:text-[7.5px]"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── AFTER: Studio Kraft ─────────────────────────────────────────────────────
function StudioKraftAfter({ c, b }: { c: string; b: string }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden" style={{ backgroundColor: b }}>
      <Chrome url="studio-kraft.de" dot={c} />
      <div
        className="relative flex flex-1 flex-col overflow-hidden"
        style={{ background: `radial-gradient(ellipse 80% 60% at 100% 0%, ${c}22, transparent 60%)` }}
      >
        {/* Nav */}
        <div className="flex shrink-0 items-center justify-between px-4 py-2.5 sm:px-5">
          <div className="flex items-center gap-1.5">
            <div
              className="flex h-4 w-4 items-center justify-center rounded-sm"
              style={{ backgroundColor: c }}
            >
              <div className="h-1.5 w-1.5 rounded-sm bg-black/70" />
            </div>
            <div>
              <div className="text-[9px] font-black uppercase tracking-widest sm:text-[10px]" style={{ color: "#fff" }}>
                Studio Kraft
              </div>
              <div
                className="text-[6px] uppercase tracking-[0.1em] sm:text-[6.5px]"
                style={{ color: `${c}80` }}
              >
                Personal Training
              </div>
            </div>
          </div>
          <span
            className="rounded-full px-2.5 py-0.5 text-[7px] font-bold sm:text-[8px]"
            style={{ backgroundColor: c, color: "#fff" }}
          >
            Beratung
          </span>
        </div>
        {/* Hero */}
        <div className="flex flex-1 flex-col justify-center px-4 sm:px-5">
          <p
            className="text-[7px] uppercase tracking-[0.2em] sm:text-[8px]"
            style={{ color: `${c}90` }}
          >
            Personal Training · Arnsberg
          </p>
          <h2
            className="mt-1.5 font-black uppercase leading-none sm:mt-2"
            style={{ color: "#fff", fontSize: "clamp(14px, 3.2vw, 28px)" }}
          >
            Stärker.
            <br />
            <span style={{ color: c }}>Heute.</span>
          </h2>
          <p
            className="mt-1.5 text-[7.5px] leading-relaxed sm:text-[8.5px]"
            style={{ color: "rgba(255,255,255,0.4)", maxWidth: "22ch" }}
          >
            Individuelle Trainingspläne. Messbare Ergebnisse.
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            <span
              className="rounded-full px-2.5 py-1 text-[7px] font-bold sm:text-[8px]"
              style={{ backgroundColor: c, color: "#fff" }}
            >
              Erstberatung buchen
            </span>
            <span
              className="text-[7px] underline underline-offset-2 sm:text-[8px]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Pakete ansehen
            </span>
          </div>
        </div>
        {/* Paket-Kacheln */}
        <div className="grid shrink-0 grid-cols-3 gap-1 px-4 pb-3 sm:gap-1.5 sm:px-5">
          {[
            { name: "Starter", sessions: "8 Sessions" },
            { name: "Transform", sessions: "20 Sessions", hot: true },
            { name: "Elite", sessions: "Unlimited" },
          ].map(({ name, sessions, hot }) => (
            <div
              key={name}
              className="rounded-lg p-2"
              style={{
                backgroundColor: hot ? `${c}18` : "rgba(255,255,255,0.04)",
                border: `1px solid ${hot ? c + "40" : c + "14"}`,
              }}
            >
              <div
                className="mb-1 h-0.5 w-4 rounded-full"
                style={{ backgroundColor: hot ? c : `${c}40` }}
              />
              <p
                className="text-[6.5px] font-bold uppercase tracking-wide sm:text-[7.5px]"
                style={{ color: hot ? "#fff" : "rgba(255,255,255,0.45)" }}
              >
                {name}
              </p>
              <p
                className="mt-0.5 text-[6px] sm:text-[6.5px]"
                style={{ color: hot ? `${c}90` : "rgba(255,255,255,0.3)" }}
              >
                {sessions}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── AFTER: Generischer Fallback ──────────────────────────────────────────────
function GenericAfter({
  businessName,
  branche,
  c,
  b,
}: {
  businessName: string;
  branche: string;
  c: string;
  b: string;
}) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden" style={{ backgroundColor: b }}>
      <Chrome url={`${slugify(businessName)}.de`} dot={c} />
      <div
        className="relative flex flex-1 flex-col overflow-hidden"
        style={{ background: `radial-gradient(ellipse 90% 65% at 15% 5%, ${c}25, transparent 65%)` }}
      >
        <div className="flex shrink-0 items-center justify-between px-4 py-2.5 sm:px-5">
          <span
            className="max-w-[16ch] truncate text-[10px] font-bold tracking-tight sm:text-[11px]"
            style={{ color: c }}
          >
            {businessName}
          </span>
          <div
            className="rounded-full px-2.5 py-1 text-[8px] font-semibold sm:text-[9px]"
            style={{ backgroundColor: c, color: "#fff" }}
          >
            Anfragen
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center px-4 sm:px-5">
          <p
            className="text-[8px] uppercase tracking-[0.14em] sm:text-[9px]"
            style={{ color: `${c}80` }}
          >
            {branche}
          </p>
          <h2
            className="mt-1.5 font-bold leading-tight sm:mt-2"
            style={{ color: "#fff", fontSize: "clamp(11px, 2.6vw, 20px)", maxWidth: "14ch" }}
          >
            {businessName}
          </h2>
          <p
            className="mt-1.5 text-[8px] leading-relaxed sm:text-[9px]"
            style={{ color: "rgba(255,255,255,0.4)", maxWidth: "24ch" }}
          >
            Qualität & Verlässlichkeit — für Sie vor Ort.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span
              className="rounded-full px-3 py-1 text-[8px] font-semibold sm:text-[9px]"
              style={{ backgroundColor: c, color: "#fff" }}
            >
              Jetzt anfragen
            </span>
            <span
              className="text-[8px] underline underline-offset-2 sm:text-[9px]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Mehr erfahren
            </span>
          </div>
        </div>
        <div className="grid shrink-0 grid-cols-3 gap-1.5 px-4 pb-4 sm:px-5">
          {["Qualität", "Erfahrung", "Service"].map((label) => (
            <div
              key={label}
              className="rounded-lg p-2 sm:p-2.5"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: `1px solid ${c}22` }}
            >
              <div
                className="mb-1.5 h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: `${c}90` }}
              />
              <p
                className="text-[7px] font-medium sm:text-[8px]"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── HAUPTEXPORT ──────────────────────────────────────────────────────────────
export function SiteMockup({
  variant,
  businessName,
  branche,
  colorFrom,
  colorTo,
  slug,
}: {
  variant: "before" | "after";
  businessName: string;
  branche: string;
  colorFrom: string;
  colorTo: string;
  slug?: string;
}) {
  if (variant === "before") {
    return <BeforeMockup businessName={businessName} />;
  }

  switch (slug) {
    case "baeckerei-muehlenbeck":
      return <BaeckereiAfter c={colorFrom} b={colorTo} />;
    case "trattoria-rosso":
      return <TrattoiaRossoAfter c={colorFrom} b={colorTo} />;
    case "holzwerk-bauer":
      return <HolzwerkBauerAfter c={colorFrom} b={colorTo} />;
    case "salon-amelie":
      return <SalonAmelieAfter c={colorFrom} b={colorTo} />;
    case "praxis-am-lindenplatz":
      return <PraxisLindenplatzAfter c={colorFrom} b={colorTo} />;
    case "papeterie-nordlicht":
      return <PaperieNordlichtAfter c={colorFrom} b={colorTo} />;
    case "studio-kraft":
      return <StudioKraftAfter c={colorFrom} b={colorTo} />;
    default:
      return (
        <GenericAfter businessName={businessName} branche={branche} c={colorFrom} b={colorTo} />
      );
  }
}
