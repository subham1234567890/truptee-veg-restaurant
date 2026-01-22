import { MapPin, Navigation2, Phone } from "lucide-react";

export const Location = ({ isVisible }) => {
  const address = "67, Buddha Nagar, Kalpana Chowk, Bhubaneswar, Odisha 751009";
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;

  return (
    <section
      id="location"
      data-animate
      className="py-16 md:py-24 bg-brand-cream"
      data-testid="location-section"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="text-brand-brown font-poppins text-sm font-semibold uppercase tracking-wider">
            Visit Us
          </span>
          <h2
            className="font-playfair text-3xl md:text-4xl font-bold text-brand-charcoal mt-2"
            data-testid="location-title"
          >
            Location & Directions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div
            className={`bg-white rounded-2xl p-8 border border-brand-green/10 space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-green" size={24} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-brand-charcoal mb-2">
                    Address
                  </h3>
                  <p className="font-poppins text-brand-charcoal/70 leading-relaxed">
                    {address}
                  </p>
                  <p className="font-poppins text-brand-charcoal/60 text-sm mt-2">
                    <strong>Landmark:</strong> Near Kalpana Chowk
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-brand-green/10 pt-6">
              <h3 className="font-playfair text-xl font-semibold text-brand-charcoal mb-4">
                Opening Hours
              </h3>
              <div className="space-y-3 font-poppins text-brand-charcoal/70">
                <div className="flex justify-between">
                  <span className="font-medium">South Indian Tiffin:</span>
                  <span className="text-right">7:00 AM – 12:00 Noon<br />4:00 PM – 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Chinese:</span>
                  <span>11:00 AM – 10:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Tandoor & North Indian:</span>
                  <span className="text-right">11:30 AM – 3:30 PM<br />7:30 PM – 10:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Snacks:</span>
                  <span>4:00 PM – 8:00 PM</span>
                </div>
              </div>
            </div>

            <div className="border-t border-brand-green/10 pt-6 flex flex-col sm:flex-row gap-4">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-brand-green text-white px-6 py-3 rounded-full font-poppins font-semibold text-center hover:bg-brand-green/90 transition-all hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                data-testid="location-get-directions-button"
              >
                <Navigation2 size={20} />
                Get Directions
              </a>
              <a
                href="tel:933754213"
                className="flex-1 bg-transparent border-2 border-brand-green text-brand-green px-6 py-3 rounded-full font-poppins font-semibold text-center hover:bg-brand-green hover:text-white transition-all hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                data-testid="location-call-button"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>

          <div
            className={`rounded-2xl overflow-hidden border-4 border-white shadow-xl h-[500px] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "300ms" }}
            data-testid="location-map"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1526573!2d85.8194!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzQ2LjAiTiA4NcKwNDknMDkuOCJF!5e0!3m2!1sen!2sin!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Truptee Veg Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
