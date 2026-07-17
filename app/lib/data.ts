import {
  Hammer,
  Sparkles,
  MapPin,
  CalendarCheck,
  ShieldCheck,
  Tag,
  UserRound,
  Rocket,
  MapPinned,
  MessageCircleHeart,
  Ban,
  ReceiptText,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Preise", href: "/#preise" },
  { label: "FAQ", href: "/#faq" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: LayoutTemplate,
    title: "Website-Neubau",
    description:
      "Eine komplett neue Website, von Grund auf für deinen Betrieb geplant und gebaut — kein austauschbares Baukasten-Template.",
  },
  {
    icon: Sparkles,
    title: "Redesign",
    description:
      "Deine Inhalte bleiben, dein Auftritt wird neu gedacht: schneller, klarer und auf der Höhe der Zeit.",
  },
  {
    icon: MapPin,
    title: "Lokale SEO",
    description:
      "Damit du bei Google gefunden wirst, wenn jemand in deiner Stadt genau das sucht, was du anbietest.",
  },
  {
    icon: CalendarCheck,
    title: "Terminbuchung & Anfragen",
    description:
      "Anfragen und Termine landen direkt in deinem Kalender oder Postfach — ganz ohne Telefonklingeln.",
  },
  {
    icon: ShieldCheck,
    title: "Wartung & Pflege",
    description:
      "Technik, Updates und kleine Änderungen laufen bei uns weiter. Du musst dich um nichts kümmern.",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Erstanfrage",
    description:
      "Du schreibst uns kurz, was du brauchst — wir melden uns per E-Mail und klären gemeinsam, was deine Website leisten soll.",
  },
  {
    number: "02",
    title: "Konzept",
    description:
      "Struktur, Inhalte und Ziel der Seite auf eine klare Linie gebracht — bevor auch nur ein Pixel gestaltet wird.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Ein individueller Entwurf, abgestimmt auf deine Marke, mit dem du dich sofort wiedererkennst.",
  },
  {
    number: "04",
    title: "Umsetzung",
    description:
      "Wir bauen die Website technisch sauber, schnell und zuverlässig auf jedem Gerät.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Deine neue Website geht live — inklusive Domain-Einrichtung, Technik-Check und letztem Feinschliff.",
  },
  {
    number: "06",
    title: "Betreuung",
    description:
      "Auch danach sind wir da: für Updates, kleine Änderungen und Fragen, die im Alltag aufkommen.",
  },
];

export type PortfolioCase = {
  slug: string;
  branche: string;
  name: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  colorFrom: string;
  colorTo: string;
  demoUrl?: string;
  thumbnailPhoto?: string;
};

export const portfolioCases: PortfolioCase[] = [
  {
    slug: "studio-kraft",
    branche: "Fitness",
    name: "Studio Kraft",
    title: "Von Instagram-DMs zur strukturierten Erstberatung online",
    summary:
      "Ein Konzept dafür, wie ein Personal Trainer seine Anfragen professionalisiert — ohne Instagram als einzige Kontaktstelle.",
    challenge:
      "Der Personal Trainer war über Instagram bekannt, aber dort fand man weder klare Preise noch buchbare Termine. Interessenten mussten erst eine DM schicken, wochenlang auf Antwort warten — und landeten meist doch woanders.",
    solution:
      "Eine klare, kraftvolle One-Page-Website mit Paketübersicht, Kundenergebnissen und einem kurzen Erstberatungs-Formular. Keine Ablenkung, keine überflüssigen Seiten — nur die Informationen, die überzeugen.",
    outcome:
      "Neue Anfragen kommen jetzt strukturiert per Formular rein. Die Instagram-Seite leitet direkt auf die Website — und konvertiert statt zu unterhalten.",
    colorFrom: "#f97316",
    colorTo: "#120f0c",
    demoUrl: "/demo/studio-kraft.html",
    thumbnailPhoto: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "cafe-luise",
    branche: "Café",
    name: "Café Luise",
    title: "Vom leeren Tisch zur Online-Reservierung in drei Klicks",
    summary:
      "Ein Konzept dafür, wie ein inhabergeführtes Café online genauso einladend wirkt wie der erste Kaffee am Morgen.",
    challenge:
      "Das Café Luise hatte Stammgäste, aber keine Reichweite. Keine Website, keine Reservierungsmöglichkeit, kein Ort für die Speisekarte — nur ein Instagram-Profil mit unregelmäßigen Posts. Neue Gäste fanden das Café bestenfalls per Zufall.",
    solution:
      "Eine warme, einladende Website mit Tagesmenü, Öffnungszeiten auf einen Blick und einem unkomplizierten Reservierungsformular — gestaltet wie das Café selbst: persönlich, ohne Schnickschnack.",
    outcome:
      "Wer das Café sucht, findet es. Wer es noch nicht kennt, will sofort vorbeikommen. Tischreservierungen laufen jetzt online, ohne dass jemand ans Telefon muss.",
    colorFrom: "#C8854A",
    colorTo: "#1A0E08",
    demoUrl: "/demo/cafe-luise.html",
    thumbnailPhoto: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
];

export type WhyItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyItems: WhyItem[] = [
  {
    icon: Tag,
    title: "Festpreise",
    description:
      "Du weißt vorher genau, was deine Website kostet — keine versteckten Stunden, keine Überraschung auf der Rechnung.",
  },
  {
    icon: UserRound,
    title: "Feste Ansprechperson",
    description:
      "Ein fester Kontakt von der ersten Idee bis zum Launch — kein Ticket-System, kein Callcenter-Gefühl.",
  },
  {
    icon: Rocket,
    title: "Umsetzung in wenigen Wochen",
    description:
      "Von Erstanfrage bis Launch meist in vier bis sechs Wochen, abhängig vom Umfang — ohne endlose Warteschleifen.",
  },
  {
    icon: MapPinned,
    title: "Fokus auf lokale Sichtbarkeit",
    description:
      "Wir bauen nicht irgendeine Website, sondern eine, die in deiner Region tatsächlich gefunden wird.",
  },
];

export type PromiseItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const promiseItems: PromiseItem[] = [
  {
    icon: MessageCircleHeart,
    title: "Klar kommuniziert",
    description:
      "Du bekommst verständliche Erklärungen statt Fachchinesisch — und weißt in jeder Phase, woran wir gerade arbeiten.",
  },
  {
    icon: Ban,
    title: "Kein Agentur-Kauderwelsch",
    description:
      "Wir sprechen wie Menschen, nicht wie eine Pressemitteilung. Auch vermeintlich einfache Fragen sind willkommen.",
  },
  {
    icon: ReceiptText,
    title: "Feste Preise, keine Überraschungen",
    description:
      "Was im Angebot steht, ist der Preis, den du zahlst. Zusatzwünsche besprechen wir vorher, nicht auf der Rechnung.",
  },
  {
    icon: Hammer,
    title: "Eine Website wie diese hier",
    description:
      "Der Qualitätsanspruch, den du gerade siehst, gilt für jedes Projekt — unabhängig von Branche oder Budget.",
  },
];

export type PricingPlan = {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    tagline: "Für den ersten professionellen Auftritt",
    price: "890 €",
    priceNote: "[Beispielpreis] · einmalig",
    features: [
      "Elegante One-Page-Website",
      "Bis zu 5 Inhaltsbereiche",
      "Mobil optimiert & schnell",
      "Kontaktformular",
      "Grundlegende Google-Auffindbarkeit",
    ],
    ctaLabel: "Starter anfragen",
  },
  {
    name: "Business",
    tagline: "Die beliebteste Wahl für wachsende Betriebe",
    price: "1.890 €",
    priceNote: "[Beispielpreis] · einmalig",
    features: [
      "Mehrseitige Website (bis 8 Seiten)",
      "Einfaches Redaktionssystem",
      "Terminanfrage-Formular",
      "Google-Maps- & Standort-Integration",
      "Lokale SEO-Grundausstattung",
    ],
    highlighted: true,
    ctaLabel: "Business anfragen",
  },
  {
    name: "Premium",
    tagline: "Für einen Auftritt, der wirklich heraussticht",
    price: "3.490 €",
    priceNote: "[Beispielpreis] · einmalig",
    features: [
      "Individuelles Design & Animationen",
      "SEO-Grundpaket inklusive",
      "Professionelles Copywriting",
      "Unbegrenzte Inhaltsbereiche",
      "Priorisierte Umsetzung & Betreuung",
    ],
    ctaLabel: "Premium anfragen",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Was, wenn ich später Änderungen brauche?",
    answer:
      "Kein Problem — kleinere Änderungen sind in unseren Wartungspaketen enthalten, größere Anpassungen kalkulieren wir transparent im Vorfeld. Du bist nach dem Launch nicht auf dich allein gestellt.",
  },
  {
    question: "Wie lange dauert die Umsetzung?",
    answer:
      "Je nach Umfang meist vier bis sechs Wochen von Erstanfrage bis Launch. Nach deiner Anfrage bekommst du einen konkreten Zeitplan für dein Projekt.",
  },
  {
    question: "Was kosten Domain und Hosting zusätzlich?",
    answer:
      "Domain und Hosting sind laufende Kosten, die unabhängig von uns anfallen — meist ein niedriger zweistelliger Betrag pro Monat. Wir beraten dich, welche Lösung zu dir passt, und übernehmen die Einrichtung.",
  },
  {
    question: "Reicht nicht auch meine Facebook- oder Instagram-Seite?",
    answer:
      "Social Media ist eine gute Ergänzung, aber kein Ersatz: Eine eigene Website gehört dir, taucht bei Google auf und wirkt seriöser — ganz ohne Algorithmus, der entscheidet, wer sie zu sehen bekommt.",
  },
  {
    question: "Ich habe keine Fotos oder Texte — geht das trotzdem?",
    answer:
      "Ja. Wir arbeiten mit hochwertigen, passenden Bildkonzepten und unterstützen dich beim Formulieren deiner Texte, falls du dabei Hilfe brauchst.",
  },
  {
    question: "Muss ich mich technisch auskennen, um die Website zu pflegen?",
    answer:
      "Nein. Bei Business und Premium bekommst du ein einfaches Redaktionssystem für kleine Textänderungen — für alles andere sind wir per Wartungspaket für dich da.",
  },
  {
    question: "Was, wenn mir das Ergebnis nicht gefällt?",
    answer:
      "Im Design-Prozess besprechen wir Entwürfe gemeinsam und passen sie an, bevor programmiert wird. So gibt es am Ende keine Überraschungen.",
  },
];

export type BusinessType = {
  value: string;
  label: string;
};

export const businessTypes: BusinessType[] = [
  { value: "gastronomie", label: "Restaurant / Gastronomie" },
  { value: "handwerk", label: "Handwerksbetrieb" },
  { value: "beauty", label: "Friseursalon / Beauty" },
  { value: "praxis", label: "Arztpraxis" },
  { value: "einzelhandel", label: "Einzelhandel" },
  { value: "dienstleistung", label: "Sonstige Dienstleistung" },
  { value: "sonstiges", label: "Sonstiges" },
];

export const siteConfig = {
  name: "Elverix",
  email: "kontakt@elverix.com",
  location: "Arnsberg",
  description:
    "Elverix ist eine Website-Agentur aus Arnsberg. Wir bauen moderne, schnelle Websites für Handwerk, Gastronomie, Praxen und Einzelhandel im Sauerland und NRW.",
};
