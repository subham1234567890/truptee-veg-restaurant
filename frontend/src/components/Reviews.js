import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    text: "Best South Indian food in Bhubaneswar! The masala dosa is absolutely delicious and reminds me of home. Very hygienic and the staff is friendly.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "We are regular customers here. The food quality is consistently good and prices are reasonable. Love their idli sambar and Chinese items too!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    text: "Authentic taste and clean kitchen. The Truptee Special Dosa is a must-try! Great location near Kalpana Chowk, easy to find.",
    rating: 5,
  },
];

export const Reviews = ({ isVisible }) => {
  return (
    <section
      id="reviews"
      data-animate
      className="py-16 md:py-24 bg-white"
      data-testid="reviews-section"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-brand-brown font-poppins text-sm font-semibold uppercase tracking-wider">
            What Our Customers Say
          </span>
          <h2
            className="font-playfair text-3xl md:text-4xl font-bold text-brand-charcoal mt-2"
            data-testid="reviews-title"
          >
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#D4A373" className="text-brand-gold" />
              ))}
            </div>
            <span className="font-poppins text-brand-charcoal/70 ml-2">
              Rated on Google Maps
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-brand-cream rounded-2xl p-8 border border-brand-green/10 relative hover:border-brand-gold transition-all duration-300 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`review-card-${index}`}
            >
              <Quote
                className="absolute top-6 right-6 text-brand-gold/20"
                size={48}
              />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#D4A373"
                    className="text-brand-gold"
                  />
                ))}
              </div>
              <p className="font-poppins text-brand-charcoal/80 leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>
              <div className="border-t border-brand-green/10 pt-4">
                <p className="font-playfair text-lg font-semibold text-brand-charcoal">
                  {review.name}
                </p>
                <p className="font-poppins text-sm text-brand-charcoal/60">
                  Verified Customer
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              "67, Buddha Nagar, Kalpana Chowk, Bhubaneswar, Odisha 751009"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-green text-white px-8 py-3 rounded-full font-poppins font-semibold hover:bg-brand-green/90 transition-all hover:scale-105 hover:shadow-lg active:scale-95"
            data-testid="view-more-reviews-button"
          >
            View More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
