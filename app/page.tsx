import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProcessSection } from "./components/ProcessSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { WhySection } from "./components/WhySection";
import { PromiseSection } from "./components/PromiseSection";
import { PricingSection } from "./components/PricingSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <WhySection />
      <PromiseSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
