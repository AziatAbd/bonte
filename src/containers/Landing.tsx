import { HeroSection } from "../components/Hero";
import { PartnersSection } from "../components/Partner";
import { ProductsSection } from "../components/Product";
import { AboutSection } from "../components/About";
import { VideoSection } from "../components/Video";
import { ContactSection } from "../components/Contact";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { smoothScrollToId } from "../utils/smoothScrollToId";

export default function FoodIndustryLanding() {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  // Отслеживание скролла для показа/скрытия кнопки
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <HeroSection />
      <PartnersSection />
      <ProductsSection />
      <AboutSection />
      <VideoSection />
      <ContactSection />

      {/* Кнопка "Наверх" */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 group cursor-pointer"
          aria-label="Наверх"
        >
          <svg
            className="w-6 h-6 transform group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
