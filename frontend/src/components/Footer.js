import { MapPin, Phone, Clock, Leaf } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white py-12 md:py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
                <span className="text-2xl">🍃</span>
              </div>
              <div>
                <h3 className="text-white font-playfair text-xl font-bold">
                  Truptee
                </h3>
                <p className="text-white/80 text-xs font-poppins">
                  Pure Veg Restaurant
                </p>
              </div>
            </div>
            <p className="font-poppins text-white/70 text-sm leading-relaxed mb-4">
              Authentic South Indian vegetarian cuisine served with love and
              hygiene. Your trusted destination for homely, delicious food.
            </p>
            <div className="flex items-center gap-2">
              <Leaf className="text-brand-gold" size={20} />
              <span className="font-poppins text-sm text-brand-gold font-semibold">
                100% Vegetarian
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-brand-gold flex-shrink-0 mt-1" size={18} />
                <p className="font-poppins text-sm text-white/70">
                  67, Buddha Nagar, Kalpana Chowk, Bhubaneswar, Odisha 751009
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-brand-gold flex-shrink-0" size={18} />
                <a
                  href="tel:933754213"
                  className="font-poppins text-sm text-white/70 hover:text-brand-gold transition-colors"
                  data-testid="footer-phone-link"
                >
                  933754213
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-brand-gold flex-shrink-0 mt-1" size={18} />
                <div className="font-poppins text-sm text-white/70">
                  <p>Breakfast: 7:00 AM – 12:00 Noon</p>
                  <p>Evening: 4:00 PM – 9:00 PM</p>
                  <p>Chinese: 11:00 AM – 10:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <div className="space-y-3 font-poppins text-sm">
              <button
                onClick={() =>
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-white/70 hover:text-brand-gold transition-colors"
                data-testid="footer-menu-link"
              >
                View Menu
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("location")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-white/70 hover:text-brand-gold transition-colors"
                data-testid="footer-location-link"
              >
                Location & Hours
              </button>
              <a
                href="https://maps.google.com/?q=67,+Buddha+Nagar,+Kalpana+Chowk,+Bhubaneswar,+Odisha+751009"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-brand-gold transition-colors"
                data-testid="footer-directions-link"
              >
                Get Directions
              </a>
              <a
                href="tel:933754213"
                className="block text-white/70 hover:text-brand-gold transition-colors"
                data-testid="footer-call-link"
              >
                Call for Takeaway
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-poppins text-sm text-white/60 text-center md:text-left">
              © 2025 Truptee Veg Restaurant. All rights reserved.
            </p>
            <p className="font-poppins text-xs text-white/50 text-center md:text-right">
              Parcel charges ₹5 per box. Taxes applicable as per government rates.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
