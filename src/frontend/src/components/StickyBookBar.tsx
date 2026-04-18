import { Link } from "@tanstack/react-router";
import { CalendarDays, ChevronRight } from "lucide-react";

export function StickyBookBar() {
  return (
    <div
      data-ocid="sticky-book-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-gold border-t-2 border-gold shadow-gold-glow"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-14 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <CalendarDays className="w-4 h-4 text-forest opacity-70 flex-shrink-0" />
          <span className="font-display text-forest text-sm font-semibold tracking-wide truncate">
            Book Your Stay
          </span>
          <span className="font-body text-forest text-xs opacity-60 hidden lg:block flex-shrink-0">
            — Curated Himalayan Experiences
          </span>
        </div>

        {/* Property quick links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-shrink-0">
          <Link
            to="/properties/fyra-hotel"
            className="font-body text-forest text-xs tracking-wide hover:opacity-70 transition-smooth whitespace-nowrap"
          >
            Fyra Hotel
          </Link>
          <span className="text-forest opacity-30 text-xs">|</span>
          <Link
            to="/properties/aashiyana"
            className="font-body text-forest text-xs tracking-wide hover:opacity-70 transition-smooth whitespace-nowrap"
          >
            Aashiyana
          </Link>
          <span className="text-forest opacity-30 text-xs">|</span>
          <Link
            to="/properties/aashapuri-snow-line"
            className="font-body text-forest text-xs tracking-wide hover:opacity-70 transition-smooth whitespace-nowrap"
          >
            Snow Line
          </Link>
        </div>

        {/* CTA — always visible, large enough touch target */}
        <Link
          to="/contact"
          data-ocid="sticky-book-cta"
          className="flex items-center gap-1.5 bg-forest text-gold font-body text-xs tracking-wide px-4 sm:px-5 py-2.5 hover:bg-foreground transition-smooth flex-shrink-0 min-h-[40px]"
        >
          Reserve Now
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
