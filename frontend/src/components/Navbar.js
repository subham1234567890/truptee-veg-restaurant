import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-green shadow-lg py-3"
          : "bg-brand-green/95 py-4"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">🍃</span>
            </div>
            <div>
              <h1 className="text-white font-playfair text-xl md:text-2xl font-bold leading-tight">
                Truptee
              </h1>
              <p className="text-white/80 text-xs font-poppins">Pure Veg Restaurant</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("menu")}
              className="text-white hover:text-brand-gold transition-colors font-poppins font-medium"
              data-testid="nav-menu-link"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-white hover:text-brand-gold transition-colors font-poppins font-medium"
              data-testid="nav-location-link"
            >
              Location
            </button>
            <a
              href="tel:933754213"
              className="bg-white text-brand-green px-6 py-2 rounded-full font-poppins font-semibold hover:bg-brand-gold hover:text-white transition-all hover:scale-105 active:scale-95"
              data-testid="nav-call-button"
            >
              Call Now
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className="md:hidden mt-4 pb-4 space-y-3"
            data-testid="mobile-menu"
          >
            <button
              onClick={() => scrollToSection("menu")}
              className="block w-full text-left text-white hover:text-brand-gold transition-colors font-poppins py-2"
              data-testid="mobile-menu-link"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="block w-full text-left text-white hover:text-brand-gold transition-colors font-poppins py-2"
              data-testid="mobile-location-link"
            >
              Location
            </button>
            <a
              href="tel:933754213"
              className="block text-center bg-white text-brand-green px-6 py-2 rounded-full font-poppins font-semibold"
              data-testid="mobile-call-button"
            >
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
