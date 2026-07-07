# Elverix — Agentur-Website

Marketing- und Portfolio-Website für Elverix, eine Agentur für moderne Websites für
lokale Betriebe (Handwerk, Gastronomie, Praxen, Einzelhandel).

## Tech-Stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS v4
- [Motion](https://motion.dev) (ehem. Framer Motion) für UI-Transitions, Shared-Element-
  Transitions und Reveal-Animationen
- [GSAP](https://gsap.com) + ScrollTrigger für Scroll-Choreografie (Hero-Parallax,
  gepinnte Prozess-Sektion)
- [Lenis](https://github.com/darkroomengineering/lenis) für Smooth Scrolling,
  synchronisiert mit GSAP ScrollTrigger
- [React Three Fiber](https://r3f.docs.pmnd.rs) + drei + three für die 3D-Komposition im
  Hero (mit statischem Gradient-Fallback für Mobile/kein WebGL/reduzierte Bewegung)
- [lucide-react](https://lucide.dev) für Icons

## Setup

```bash
npm install
npm run dev
```

Die Seite läuft danach unter [http://localhost:3000](http://localhost:3000).

## Weitere Befehle

```bash
npm run build   # Produktions-Build
npm run start   # Produktions-Server (nach dem Build)
npm run lint    # ESLint
```

## Projektstruktur

```
app/
  page.tsx                    One-Page-Orchestrierung
  layout.tsx                  Root-Layout: Fonts, Metadata, Provider, Header/Footer
  globals.css                 Tailwind-Theme (Farben, Fonts) + globale Styles
  api/contact/route.ts        Formular-Handler (validiert, TODO: E-Mail-Versand)
  konzepte/[slug]/page.tsx    Case-Detail-Seite (volle Seite, SEO-Deep-Link)
  @modal/(.)konzepte/[slug]/  Intercepted Route: Case-Detail als Modal aus dem Grid
  impressum/, datenschutz/    Rechtliche Platzhalterseiten
  components/                 Alle UI-Komponenten
  lib/
    data.ts                   Sämtliche Inhalte (Texte, Preise, FAQ, Konzepte, …)
    smooth-scroll.tsx          Lenis-Provider inkl. GSAP-Sync
    gsap.ts                   GSAP-Setup (ScrollTrigger-Registrierung)
    hooks.ts                  useCountUp, useMediaQuery, useHasWebGL, useAnchorNav
```

## Hinweise

- Alle Preise, Konzept-Cases und Rechtstexte (Impressum/Datenschutz) sind Platzhalter
  bzw. Beispielwerte und müssen vor dem echten Livegang ersetzt bzw. rechtlich geprüft
  werden (klar im jeweiligen Seiteninhalt markiert).
- Das Kontaktformular validiert und beantwortet Anfragen bereits vollständig, sendet
  aber noch keine echte E-Mail — siehe TODO-Kommentar in `app/api/contact/route.ts` für
  die Anbindung an Resend/Postmark bzw. ein Cal.com-Embed.
