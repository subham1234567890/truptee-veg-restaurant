import { Phone, Navigation2 } from "lucide-react";

export const MobileActionBar = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-brand-green/20 p-4 flex justify-around items-center z-50 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
      data-testid="mobile-action-bar"
    >
      <a
        href="tel:933754213"
        className="flex flex-col items-center gap-1 text-brand-green hover:text-brand-green/80 transition-colors flex-1"
        data-testid="mobile-bar-call-button"
      >
        <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
          <Phone size={20} />
        </div>
        <span className="text-xs font-poppins font-semibold">Call</span>
      </a>
      <a
        href="https://maps.google.com/?q=67,+Buddha+Nagar,+Kalpana+Chowk,+Bhubaneswar,+Odisha+751009"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-brand-green hover:text-brand-green/80 transition-colors flex-1"
        data-testid="mobile-bar-directions-button"
      >
        <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
          <Navigation2 size={20} />
        </div>
        <span className="text-xs font-poppins font-semibold">Directions</span>
      </a>
      <button
        onClick={() =>
          document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
        }
        className="flex flex-col items-center gap-1 text-brand-green hover:text-brand-green/80 transition-colors flex-1"
        data-testid="mobile-bar-menu-button"
      >
        <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
          <span className="text-xl">📋</span>
        </div>
        <span className="text-xs font-poppins font-semibold">Menu</span>
      </button>
    </div>
  );
};

export default MobileActionBar;
