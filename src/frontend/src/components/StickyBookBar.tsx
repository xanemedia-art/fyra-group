import { Link } from "@tanstack/react-router";
import { CalendarDays, ChevronRight } from "lucide-react";

export function StickyBookBar() {
  return (
    <div
      data-ocid="sticky-book-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-gold border-t-2 border-gold shadow-gold-glow"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <CalendarDays className="w-4 h-4 text-forest opacity-70 flex-shrink-0" />
          <span className="font-display text-forest text-sm font-semibold tracking-wide hidden sm:block">
            Book Your Stay
          </span>
          <span className="font-body text-forest text-xs opacity-60 hidden md:block">
            — Curated Himalayan Experiences
          </span>
        </div>

        {/* Property quick links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/properties/fyra-hotel"
            className="font-body text-forest text-xs tracking-wide hover:opacity-70 transition-smooth"
          >
            Fyra Hotel
          </Link>
          <span className="text-forest opacity-30 text-xs">|</span>
          <Link
            to="/properties/aashiyana"
            className="font-body text-forest text-xs tracking-wide hover:opacity-70 transition-smooth"
          >
            Aashiyana
          </Link>
          <span className="text-forest opacity-30 text-xs">|</span>
          <Link
            to="/properties/aashapuri-snow-line"
            className="font-body text-forest text-xs tracking-wide hover:opacity-70 transition-smooth"
          >
            Snow Line
          </Link>
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          data-ocid="sticky-book-cta"
          className="flex items-center gap-2 bg-forest text-gold font-body text-xs tracking-wide px-5 py-2.5 hover:bg-foreground transition-smooth flex-shrink-0"
        >
          Reserve Now
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
