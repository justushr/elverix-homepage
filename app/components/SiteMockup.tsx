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
    <div className="flex h-full w-full flex-col bg-linen">
      <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: `${colorFrom}66` }} />
        <span className="h-2.5 w-2.5 rounded-full bg-pine/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/30" />
        <span className="ml-3 truncate rounded-full bg-linen-2 px-3 py-0.5 text-[10px] text-ink-soft">
          {slugify(businessName)}.de
        </span>
      </div>
      <div
        className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-7"
        style={{ background: `linear-gradient(160deg, ${colorFrom}1f, transparent 65%)` }}
      >
        <div>
          <span className="text-[10px] uppercase tracking-[0.16em] text-ink-faint">{branche}</span>
          <p className="mt-2 max-w-[20ch] font-display text-lg leading-snug text-ink sm:text-2xl">
            {businessName}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="rounded-full px-4 py-2 text-[11px] font-medium text-linen sm:text-xs"
            style={{ backgroundColor: colorTo }}
          >
            Jetzt anfragen
          </span>
          <span className="text-[10px] text-ink-soft underline underline-offset-2 sm:text-xs">
            Mehr erfahren
          </span>
        </div>
      </div>
    </div>
  );
}
