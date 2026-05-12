import { Phone } from "lucide-react";
import { motion } from "motion/react";

const PHONE_NUMBER = "+919711754726";

export function CallButton() {
  return (
    <motion.a
      href={`tel:${PHONE_NUMBER}`}
      data-ocid="call-concierge"
      aria-label="Call our reservation desk"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 0.5, // Offset from WhatsApp button
      }}
      className="fixed z-40 left-4 sm:left-5 flex items-center justify-center rounded-full bg-forest shadow-elevated hover:scale-110 transition-smooth group"
      style={{
        width: "52px",
        height: "52px",
        /* Position above sticky bar + safe area, same height as WhatsApp button */
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 72px)",
      }}
    >
      {/* Inner circle */}
      <span className="flex items-center justify-center w-full h-full rounded-full bg-forest border-2 border-gold/20 group-hover:bg-gold transition-smooth">
        <Phone
          className="w-5 h-5 text-gold group-hover:text-forest transition-smooth"
          fill="currentColor"
        />
      </span>

      {/* Tooltip — mirrored for left side */}
      <span className="absolute left-full ml-3 whitespace-nowrap bg-forest text-gold text-xs font-body px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none shadow-elevated hidden sm:block">
        Call for Reservations
      </span>
    </motion.a>
  );
}
