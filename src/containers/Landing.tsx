import { HeroSection } from "../components/Hero";
import { PartnersSection } from "../components/Partner";
import { ProductsSection } from "../components/Product";
import { AboutSection } from "../components/About";
import { VideoSection } from "../components/Video";
import { ContactSection } from "../components/Contact";

export default function FoodIndustryLanding() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <PartnersSection />
      <ProductsSection />
      <AboutSection />
      <VideoSection />
      <ContactSection />
    </div>
  );
}
