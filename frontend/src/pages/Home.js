import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import SignatureDishes from "@/components/SignatureDishes";
import WhyChooseUs from "@/components/WhyChooseUs";
import FullMenu from "@/components/FullMenu";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      <Hero isVisible={isVisible.hero} />
      <QuickInfo />
      <SignatureDishes isVisible={isVisible.dishes} />
      <WhyChooseUs isVisible={isVisible.why} />
      <FullMenu isVisible={isVisible.menu} />
      <Location isVisible={isVisible.location} />
      <Reviews isVisible={isVisible.reviews} />
      <Footer />
      <MobileActionBar />
      <WhatsAppButton />
    </div>
  );
}
