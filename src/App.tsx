import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ServicesSection } from './components/ServicesSection';
import { CTASection } from './components/CTASection';
import { Navigation } from './components/Navigation';
import { CookieBanner } from './components/CookieBanner';
import "./index.css";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <CookieBanner />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}