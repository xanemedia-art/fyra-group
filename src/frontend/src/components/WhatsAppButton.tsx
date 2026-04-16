import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20a%20stay%20at%20Fyra%20Group.";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp-concierge"
      aria-label="Chat with our WhatsApp concierge"
      className="fixed z-40 right-5 bottom-[72px] flex items-center justify-center w-13 h-13 rounded-full bg-gold shadow-gold-glow hover:scale-105 transition-smooth group"
      style={{ width: "52px", height: "52px" }}
    >
      {/* WhatsApp-green inner circle */}
      <span className="flex items-center justify-center w-full h-full rounded-full bg-gold border-2 border-forest/10 group-hover:bg-[#25D366] transition-smooth">
        <MessageCircle
          className="w-5 h-5 text-forest group-hover:text-white transition-smooth"
          fill="currentColor"
        />
      </span>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 whitespace-nowrap bg-forest text-gold text-xs font-body px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none shadow-elevated">
        Chat with Concierge
      </span>
    </a>
  );
}
