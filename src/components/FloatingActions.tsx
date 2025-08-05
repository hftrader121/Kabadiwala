import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-20 right-20 flex flex-col gap-3 z-50">

      {/* WhatsApp Button */}
      <Button
        variant="floating"
        size="icon"
        className="bg-green-400 hover:bg-green-500 shadow-glow w-20 h-20"
        onClick={() => window.open("https://wa.me/919958654732?text=Hi%20I%20want%20to%20sell%20scrap")}
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </Button>

      {/* Call Button */}
      <Button
        variant="floating"
        size="icon"
        className="bg-blue-500 hover:bg-blue-600 shadow-glow w-20 h-20"
        onClick={() => window.open("tel:+919958654732")}
        title="Call Now"
      >
        <Phone size={28} />
      </Button>
    </div>
  );
};

export default FloatingActions;
