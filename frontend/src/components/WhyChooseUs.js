import { Leaf, Sparkles, Clock, MapPinned } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Authentic South Indian Taste",
    description: "Traditional recipes passed down through generations",
  },
  {
    icon: Sparkles,
    title: "Hygienic & Clean Kitchen",
    description: "Maintained to the highest standards of cleanliness",
  },
  {
    icon: Clock,
    title: "Freshly Prepared Food",
    description: "Every dish cooked fresh to order (~20 minutes)",
  },
  {
    icon: MapPinned,
    title: "Convenient Location",
    description: "Easily accessible near Kalpana Chowk",
  },
];

export const WhyChooseUs = ({ isVisible }) => {
  return (
    <section
      id="why"
      data-animate
      className="py-16 md:py-24 bg-brand-cream"
      data-testid="why-choose-us-section"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-brand-brown font-poppins text-sm font-semibold uppercase tracking-wider">
            What Makes Us Special
          </span>
          <h2
            className="font-playfair text-3xl md:text-4xl font-bold text-brand-charcoal mt-2"
            data-testid="why-choose-us-title"
          >
            Why Choose Truptee?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl border border-transparent hover:border-brand-gold transition-all duration-300 hover:shadow-lg group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`feature-card-${index}`}
              >
                <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-brand-green" size={32} />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-brand-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-charcoal/70 font-poppins text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
