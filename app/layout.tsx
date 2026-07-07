import type { Metadata, Viewport } from "next";
import { Bitter, Inter } from "next/font/google";
import { AnimatePresence, MotionConfig } from "motion/react";
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
  title: {
    default: `${siteConfig.name} — Moderne Websites für lokale Betriebe`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — Moderne Websites für lokale Betriebe`,
    description: siteConfig.description,
    locale: "de_DE",
    type: "website",
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
