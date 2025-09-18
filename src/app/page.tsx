
import HeroSection from "./components/hero-section";
import { HeroHeader } from "./components/hero-header";
import HowItWorksSection from "./components/how-it-works-section";
import Footer from "./components/footer";
import CTA from "./components/cta";
import Projects from "./components/projects";
import Voter from "./components/voter";
import Builder from "./components/builder";
import Feature1 from "./components/feauture-1";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-halyard-display)]">
      <HeroHeader />
      <HeroSection />
      
      <HowItWorksSection />
      <Voter />
      <Builder />
      <Feature1 />
      <Projects />

      <CTA />
      <Footer />
    </div>
  );
}
