import { HeroSection } from '../components/HeroSection';
import { TechCompanySection } from '../components/TechCompanySection';
import { PoietesDifference } from '../components/PoietesDifference';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ProcessSection } from '../components/ProcessSection';
import { FAQSection } from '../components/FAQSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechCompanySection />
      <PoietesDifference />
      <TestimonialsSection />
      <ProcessSection />
      <FAQSection />
    </>
  );
}
