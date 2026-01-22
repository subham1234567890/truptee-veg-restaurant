import { useState, useEffect } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

export const QuickInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hidden md:block fixed top-20 left-0 right-0 z-40 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      data-testid="quick-info-bar"
    >
      <div className="bg-white border-b border-brand-green/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-green" />
                <span className="font-poppins text-brand-charcoal">
                  67, Buddha Nagar, Kalpana Chowk, Bhubaneswar
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-brand-green" />
                <span className="font-poppins text-brand-charcoal">
                  Breakfast 7:00–12:00 | Evening 16:00–21:00
                </span>
              </div>
            </div>
            <a
              href="tel:933754213"
              className="flex items-center gap-2 bg-brand-green text-white px-4 py-2 rounded-full font-poppins font-semibold hover:bg-brand-green/90 transition-all hover:scale-105 active:scale-95"
              data-testid="quick-info-call-button"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickInfo;
