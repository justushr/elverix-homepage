function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const stripes =
  "repeating-linear-gradient(45deg, #cfcabd, #cfcabd 6px, #bdb8ab 6px, #bdb8ab 12px)";

export function SiteMockup({
  variant,
  businessName,
  branche,
  colorFrom,
  colorTo,
}: {
  variant: "before" | "after";
  businessName: string;
  branche: string;
  colorFrom: string;
  colorTo: string;
}) {
  if (variant === "before") {
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

  return (
    <div
      className="flex h-full w-full flex-col overflow-hidden"
      style={{ backgroundColor: colorTo }}
    >
      {/* Browser chrome */}
      <div
        className="flex shrink-0 items-center gap-1.5 px-3 py-2"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backgroundColor: "rgba(255,255,255,0.03)",
        }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: `${colorFrom}70` }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.14)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
        <span
          className="ml-3 truncate rounded-full px-3 py-0.5 text-[9px]"
          style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)" }}
        >
          {slugify(businessName)}.de
        </span>
      </div>

      {/* Page */}
      <div
        className="relative flex flex-1 flex-col overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 90% 65% at 15% 5%, ${colorFrom}25, transparent 65%)`,
        }}
      >
        {/* Nav */}
        <div className="flex shrink-0 items-center justify-between px-4 py-2.5 sm:px-5">
          <span
            className="max-w-[16ch] truncate text-[10px] font-bold tracking-tight sm:text-[11px]"
            style={{ color: colorFrom }}
          >
            {businessName}
          </span>
          <div
            className="rounded-full px-2.5 py-1 text-[8px] font-semibold sm:text-[9px]"
            style={{ backgroundColor: colorFrom, color: "#fff" }}
          >
            Anfragen
          </div>
        </div>

        {/* Hero */}
        <div className="flex flex-1 flex-col justify-center px-4 sm:px-5">
          <p
            className="text-[8px] uppercase tracking-[0.14em] sm:text-[9px]"
            style={{ color: `${colorFrom}80` }}
          >
            {branche}
          </p>
          <h2
            className="mt-1.5 font-bold leading-tight sm:mt-2"
            style={{
              color: "#fff",
              fontSize: "clamp(11px, 2.6vw, 20px)",
              maxWidth: "14ch",
            }}
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
              style={{ backgroundColor: colorFrom, color: "#fff" }}
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

        {/* Feature row */}
        <div className="grid shrink-0 grid-cols-3 gap-1.5 px-4 pb-4 sm:px-5">
          {["Qualität", "Erfahrung", "Service"].map((label) => (
            <div
              key={label}
              className="rounded-lg p-2 sm:p-2.5"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: `1px solid ${colorFrom}22`,
              }}
            >
              <div
                className="mb-1.5 h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: `${colorFrom}90` }}
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
