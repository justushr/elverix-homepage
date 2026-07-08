import type { Metadata, Viewport } from "next";
import { Bitter, Inter } from "next/font/google";
import { AnimatePresence, MotionConfig } from "motion/react";
import Script from "next/script";
import "./globals.css";
import { SmoothScrollProvider } from "./lib/smooth-scroll";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { siteConfig } from "./lib/data";

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elverix.com"),
  title: {
    default: `${siteConfig.name} — Website Agentur aus ${siteConfig.location}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — Website Agentur aus ${siteConfig.location}`,
    description: siteConfig.description,
    url: "https://elverix.com",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://elverix.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Elverix — Moderne Websites für lokale Betriebe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Website Agentur aus ${siteConfig.location}`,
    description: siteConfig.description,
    images: ["https://elverix.com/opengraph-image"],
  },
  alternates: {
    canonical: "https://elverix.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#070B18",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${bitter.variable} ${inter.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8177517019052547"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BKV8C5V5BG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BKV8C5V5BG');
          `}
        </Script>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://elverix.com/#organization",
                  name: "Elverix",
                  url: "https://elverix.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://elverix.com/opengraph-image",
                    width: 1200,
                    height: 630,
                  },
                  image: "https://elverix.com/opengraph-image",
                  email: "kontakt@elverix.com",
                  description:
                    "Elverix ist eine Website-Agentur aus Arnsberg. Wir bauen moderne, schnelle Websites für Handwerk, Gastronomie, Praxen und Einzelhandel im Sauerland und NRW.",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Arnsberg",
                    addressRegion: "Nordrhein-Westfalen",
                    addressCountry: "DE",
                  },
                  areaServed: [
                    { "@type": "City", name: "Arnsberg" },
                    { "@type": "AdministrativeArea", name: "Sauerland" },
                    { "@type": "State", name: "Nordrhein-Westfalen" },
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Website-Erstellung für lokale Betriebe",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        name: "Website für Handwerksbetriebe",
                        description:
                          "Professionelle Websites für Schreiner, Elektriker, Maler und andere Handwerksbetriebe im Sauerland und NRW.",
                      },
                      {
                        "@type": "Offer",
                        name: "Website für Gastronomie",
                        description:
                          "Moderne Restaurant-Websites mit Online-Reservierung, Speisekarte und Tagesangeboten.",
                      },
                      {
                        "@type": "Offer",
                        name: "Website für Arztpraxen",
                        description:
                          "Professionelle Websites für Arztpraxen, Zahnarztpraxen und medizinische Einrichtungen mit Online-Terminbuchung.",
                      },
                      {
                        "@type": "Offer",
                        name: "Website für Einzelhandel",
                        description:
                          "Online-Auftritte für lokale Einzelhändler, Boutiquen und Fachgeschäfte.",
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://elverix.com/#website",
                  url: "https://elverix.com",
                  name: "Elverix — Moderne Websites für lokale Betriebe",
                  publisher: { "@id": "https://elverix.com/#organization" },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-linen font-sans text-ink antialiased">
        <MotionConfig reducedMotion="user">
          <SmoothScrollProvider>
            <ScrollProgress />
            <Header />
            <main>{children}</main>
            <AnimatePresence>{modal}</AnimatePresence>
            <Footer />
          </SmoothScrollProvider>
        </MotionConfig>
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-40 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />
      </body>
    </html>
  );
}
