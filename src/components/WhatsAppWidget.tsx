import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppWidget = () => {
  const { t } = useLanguage();
  const phoneNumber = "919900090908"; // Format: country code + number without + or spaces
  const message = encodeURIComponent("Hi! I'm contacting you through your website. I'd like to know more about Classic Donne Biryani.");

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Desktop Widget */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block animate-fade-in">
        <button
          onClick={handleClick}
          className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-foreground text-primary-foreground px-4 py-2 rounded-lg whitespace-nowrap text-sm shadow-lg">
              Chat with us on WhatsApp
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-foreground border-b-8 border-b-transparent"></div>
              </div>
            </div>
          </div>

          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
        </button>
      </div>

      {/* Mobile Widget */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden animate-fade-in">
        <button
          onClick={handleClick}
          className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-3.5 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
        </button>
      </div>
    </>
  );
};

export default WhatsAppWidget;
