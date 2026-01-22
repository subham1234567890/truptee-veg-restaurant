import { Star } from "lucide-react";

const dishes = [
  {
    name: "Truptee Special Masala Dosa",
    price: "₹160",
    description: "Crispy dosa with perfectly spiced potato filling",
    image: "https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg",
    badge: "Customer Favourite",
  },
  {
    name: "Masala Dosa",
    price: "₹105",
    description: "Classic, crisp, and flavourful",
    image: "https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg",
    badge: null,
  },
  {
    name: "Idli Sambar",
    price: "₹50",
    description: "Soft idlis with traditional sambar and chutney",
    image: "https://images.pexels.com/photos/31199041/pexels-photo-31199041.jpeg",
    badge: null,
  },
  {
    name: "Mysore Masala Dosa",
    price: "₹135",
    description: "Spicy chutney layer for extra kick",
    image: "https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg",
    badge: null,
  },
  {
    name: "South Indian Veg Meals",
    price: "Thali",
    description: "Homely thali with rice, sambar, veg, chutney",
    image: "https://images.pexels.com/photos/17223838/pexels-photo-17223838.jpeg",
    badge: "Customer Favourite",
  },
  {
    name: "Paneer Masala Dosa",
    price: "₹150",
    description: "Paneer-stuffed dosa, richer and hearty",
    image: "https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg",
    badge: null,
  },
];

export const SignatureDishes = ({ isVisible }) => {
  return (
    <section
      id="dishes"
      data-animate
      className="py-16 md:py-24 bg-white"
      data-testid="signature-dishes-section"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-brand-brown font-poppins text-sm font-semibold uppercase tracking-wider">
            Popular Dishes
          </span>
          <h2
            className="font-playfair text-3xl md:text-4xl font-bold text-brand-charcoal mt-2"
            data-testid="signature-dishes-title"
          >
            Our Signature Dishes
          </h2>
          <p className="text-brand-charcoal/70 font-poppins mt-3 max-w-2xl mx-auto">
            Authentic South Indian flavors that keep our customers coming back
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className={`bg-brand-cream rounded-xl overflow-hidden border border-brand-green/10 hover:border-brand-gold hover:shadow-xl transition-all duration-300 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`dish-card-${index}`}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {dish.badge && (
                  <div className="absolute top-3 right-3 bg-brand-brown text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={14} fill="white" />
                    <span className="text-xs font-poppins font-semibold">
                      {dish.badge}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-playfair text-lg font-semibold text-brand-charcoal">
                    {dish.name}
                  </h3>
                  <span className="font-poppins text-lg font-bold text-brand-brown">
                    {dish.price}
                  </span>
                </div>
                <p className="text-sm text-brand-charcoal/70 font-poppins">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
