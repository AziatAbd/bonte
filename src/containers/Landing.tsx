import { HeroSection } from "../components/Hero";
import { PartnersSection } from "../components/Partner";
import { ProductsSection } from "../components/Product";
import { AboutSection } from "../components/About";
import { VideoSection } from "../components/Video";
import { ContactSection } from "../components/Contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { smoothScrollToId } from "../utils/smoothScrollToId";

export default function FoodIndustryLanding() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const id = location.state.scrollToId;
      setTimeout(() => {
        smoothScrollToId(id);
      }, 100); // короткая задержка, чтобы DOM успел отрендериться
    }
    return () => {
      location.state = null;
    };
  }, [location]);

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
