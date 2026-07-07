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
};

export const portfolioCases: PortfolioCase[] = [
  {
    slug: "baeckerei-muehlenbeck",
    branche: "Bäckerei",
    name: "Bäckerei Mühlenbeck",
    title: "Frisch aus dem Ofen — auch online vorbestellbar",
    summary:
      "Wie eine Familienbäckerei mit 40 Jahren Geschichte online genauso einladend wird wie der Laden selbst.",
    challenge:
      "Die Bäckerei Mühlenbeck war in der Nachbarschaft längst eine Institution — online war sie kaum auffindbar. Bestellungen liefen ausschließlich über Telefon und persönlichen Besuch. Wer seinen Lieblingsbrotkranz für den Samstag reservieren wollte, musste früh genug in der Schlange stehen.",
    solution:
      "Eine warme, handwerklich gestaltete Website mit Tagesangeboten, saisonalen Highlights und einem einfachen Vorbestell-Formular. Design und Sprache transportieren das Handwerk hinter jedem Laib — authentisch, appetitlich und sofort vertrauenswürdig.",
    outcome:
      "Ein digitales Schaufenster, das rund um die Uhr geöffnet ist. Vorbestellungen gehen jetzt online ein, der Samstagmorgen ist entspannter — und neue Stammkunden finden die Bäckerei über Google.",
    colorFrom: "#d97706",
    colorTo: "#1c1917",
  },
  {
    slug: "trattoria-rosso",
    branche: "Restaurant",
    name: "Trattoria Rosso",
    title: "Vom PDF-Menü zur Tischreservierung in zehn Sekunden",
    summary:
      "Ein Konzept dafür, wie ein Restaurant hungrige Gäste online genauso gut abholt wie an der Tür.",
    challenge:
      "Die alte Website war seit Jahren nicht aktualisiert worden. Öffnungszeiten stimmten nicht mehr, die Speisekarte existierte nur als unscharfes PDF-Foto, und auf dem Handy musste man seitlich scrollen, um überhaupt etwas zu lesen.",
    solution:
      "Eine klare Startseite mit genau den Informationen, die zählen: Tisch reservieren, Speisekarte ansehen, Anfahrt finden — alles ohne langes Suchen. Große, appetitliche Bildkomposition statt Stock-Foto-Buffet.",
    outcome:
      "Wer abends spontan einen Tisch sucht, findet die Antwort in Sekunden: reservieren, anrufen oder direkt hinlaufen.",
    colorFrom: "#b5432e",
    colorTo: "#6b2415",
  },
  {
    slug: "holzwerk-bauer",
    branche: "Handwerk",
    name: "Holzwerk Bauer",
    title: "Vom Branchenbuch-Eintrag zur ersten Adresse im Ort",
    summary:
      "Ein Konzept dafür, wie eine Schreinerei aus reiner Mundpropaganda heraus online sichtbar wird.",
    challenge:
      "Der Betrieb hatte gar keine eigene Website — nur einen veralteten Eintrag in einem Branchenverzeichnis mit falscher Telefonnummer. Neue Kundschaft fand ihn ausschließlich über Empfehlungen.",
    solution:
      "Eine Website, die zeigt, was der Betrieb kann, bevor er es erzählen muss: Referenzprojekte in großen, ruhigen Bildern, klar sortierte Leistungen und ein Anfrageformular für Maßanfertigungen.",
    outcome:
      "Aus einem unsichtbaren Betrieb wird eine Adresse, die bei der Suche nach einer Schreinerei am Ort ganz oben auftaucht.",
    colorFrom: "#8b6a4f",
    colorTo: "#3d2c1e",
  },
  {
    slug: "salon-amelie",
    branche: "Friseursalon",
    name: "Salon Amelie",
    title: "Termine, die auch nach Feierabend reinkommen",
    summary:
      "Ein Konzept dafür, wie ein Salon Buchungen ermöglicht, ohne dass jemand ans Telefon muss.",
    challenge:
      "Termine liefen ausschließlich über Anrufe während der Öffnungszeiten — für viele potenzielle Kund:innen ein Grund, direkt einen anderen Salon zu googeln, der auch abends online buchbar ist.",
    solution:
      "Eine leichte, einladende Seite mit Leistungen, Preisübersicht und einem direkten Weg zur Online-Terminbuchung — rund um die Uhr erreichbar, ohne Wartemusik.",
    outcome:
      "Buchungen können jetzt auch außerhalb der Öffnungszeiten eingehen, ohne dass am Empfang das Telefon klingelt.",
    colorFrom: "#c98f88",
    colorTo: "#6e3438",
  },
  {
    slug: "praxis-am-lindenplatz",
    branche: "Arztpraxis",
    name: "Praxis am Lindenplatz",
    title: "Weniger Anrufe am Empfang, mehr Klarheit für Patient:innen",
    summary:
      "Ein Konzept dafür, wie eine Hausarztpraxis die häufigsten Fragen beantwortet, bevor das Telefon klingelt.",
    challenge:
      "Die bestehende Seite bestand aus einer einzigen unübersichtlichen Textwand. Wichtige Fragen zu Sprechzeiten, Rezeptbestellung und neuen Patient:innen waren kaum auffindbar.",
    solution:
      "Klare Struktur nach den Fragen, die Patient:innen wirklich haben: Sprechzeiten auf einen Blick, Online-Rezeptanfrage und verständliche Leistungsbeschreibungen — ruhig gestaltet, ohne klinische Kälte.",
    outcome:
      "Patient:innen finden die wichtigsten Informationen, ohne anzurufen — das entlastet spürbar das Praxisteam am Empfang.",
    colorFrom: "#6fa39c",
    colorTo: "#2e4a46",
  },
  {
    slug: "papeterie-nordlicht",
    branche: "Einzelhandel",
    name: "Papeterie Nordlicht",
    title: "Ein Schaufenster, das auch nachts geöffnet hat",
    summary:
      "Ein Konzept dafür, wie ein inhabergeführtes Geschäft online genauso neugierig macht wie die Auslage vor Ort.",
    challenge:
      "Das Geschäft lebte vom Charme der Innenstadt-Laufkundschaft, war online aber praktisch unauffindbar — keine Website, nur ein selten gepflegtes Social-Media-Profil.",
    solution:
      "Eine Website mit Schaufenster-Charakter: aktuelle Sortimentshighlights, Öffnungszeiten und Lage — gestaltet wie ein digitales Regal, durch das man gerne stöbert.",
    outcome:
      "Auch wer den Laden noch nicht kennt, bekommt online einen Eindruck, der neugierig auf den Besuch vor Ort macht.",
    colorFrom: "#7c86a1",
    colorTo: "#2f3444",
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
  email: "hallo@elverix.de",
  location: "Arnsberg",
  description:
    "Elverix ist eine Website-Agentur aus Arnsberg. Wir bauen moderne, schnelle Websites für Handwerk, Gastronomie, Praxen und Einzelhandel im Sauerland und NRW.",
};
