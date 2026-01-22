import { MapPin, Navigation2 } from "lucide-react";

export const Hero = ({ isVisible }) => {
  return (
    <section
      id="hero"
      data-animate
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
      data-testid="hero-section"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="inline-block bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-2">
              <span className="text-brand-green font-poppins text-sm font-semibold uppercase tracking-wide">
                Pure Vegetarian
              </span>
            </div>

            <h1
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-brand-charcoal leading-tight"
              data-testid="hero-title"
            >
              Authentic Taste of{" "}
              <span className="text-brand-green">South India</span> in
              Bhubaneswar
            </h1>

            <p className="text-lg md:text-xl text-brand-charcoal/70 font-poppins leading-relaxed">
              Hygienic, freshly prepared dishes loved by our customers. Experience
              the true flavors of South Indian cuisine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:933754213"
                className="bg-brand-green text-white px-8 py-4 rounded-full font-poppins font-semibold text-center hover:bg-brand-green/90 transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                data-testid="hero-call-button"
              >
                Call for Takeaway
              </a>
              <a
                href="https://maps.google.com/?q=67,+Buddha+Nagar,+Kalpana+Chowk,+Bhubaneswar,+Odisha+751009"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-brand-green text-brand-green px-8 py-4 rounded-full font-poppins font-semibold text-center hover:bg-brand-green hover:text-white transition-all hover:scale-105 hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
                data-testid="hero-directions-button"
              >
                <Navigation2 size={20} />
                Get Directions
              </a>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-brand-green/20">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <p className="text-sm font-poppins text-brand-charcoal/60">100%</p>
                  <p className="text-sm font-poppins font-semibold text-brand-charcoal">
                    Vegetarian
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <p className="text-sm font-poppins text-brand-charcoal/60">Hygienic</p>
                  <p className="text-sm font-poppins font-semibold text-brand-charcoal">
                    Kitchen
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="text-sm font-poppins text-brand-charcoal/60">Customer</p>
                  <p className="text-sm font-poppins font-semibold text-brand-charcoal">
                    Loved
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg"
                    alt="Masala Dosa"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/17223838/pexels-photo-17223838.jpeg"
                    alt="South Indian Thali"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/31199041/pexels-photo-31199041.jpeg"
                    alt="Idli Sambar"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/34170982/pexels-photo-34170982.jpeg"
                    alt="Chinese Noodles"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-brand-green/10 hidden lg:block">
              <div className="flex items-center gap-3">
                <MapPin className="text-brand-green" size={24} />
                <div>
                  <p className="font-poppins text-sm text-brand-charcoal/60">
                    Visit Us At
                  </p>
                  <p className="font-poppins font-semibold text-brand-charcoal">
                    Kalpana Chowk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
