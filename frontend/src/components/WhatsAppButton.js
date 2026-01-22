import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "933754213";
  const message = encodeURIComponent(
    "Hi! I'd like to place a takeaway order from Truptee Veg Restaurant."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-110 active:scale-95 flex items-center gap-3 group"
      data-testid="whatsapp-button"
      aria-label="Order via WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline font-poppins font-semibold pr-2 group-hover:pr-3 transition-all">
        Order on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
