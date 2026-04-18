import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Mountain, Telescope, Wind } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { type RoomDetail, RoomModal } from "../components/RoomModal";

const ACCENT = "#7EC8E3";

const HIGHLIGHTS = [
  {
    icon: Mountain,
    label: "Heli-Skiing",
    description: "Access to remote powder runs",
  },
  {
    icon: Wind,
    label: "Glacier Treks",
    description: "Guided expeditions to Solang",
  },
  {
    icon: Telescope,
    label: "Astronomy Deck",
    description: "Milky Way observation nights",
  },
  {
    icon: MapPin,
    label: "Rohtang Access",
    description: "Gateway to the Lahaul Spiti",
  },
];

const ROOMS: RoomDetail[] = [
  {
    name: "Deluxe Room",
    size: "520 sq ft",
    bed: "King",
    view: "Rohtang Range at Dawn",
    price: "₹15,000",
    occupancy: "2 Guests",
    description:
      "Perched at 9,200 feet, the Deluxe Room wraps you in warm cedar and Himalayan wool, with floor-to-ceiling glass that frames the Rohtang Range at first light. The altitude itself is the amenity — crisp air, absolute silence, and a sky unpolluted by city light fill every waking moment.",
    amenities: [
      "Heated Floors",
      "55″ Flat Screen TV",
      "Minibar & Mountain Herb Tea Kit",
      "In-Room Safe",
      "Complimentary Breakfast",
      "High-Speed WiFi",
      "Rain Shower",
      "Premium Toiletries",
      "Iron & Ironing Board",
      "Binoculars & Star Map",
    ],
  },
  {
    name: "Family Suite",
    size: "820 sq ft",
    bed: "1 King + 2 Twin",
    view: "Beas Kund Glacier Panorama",
    price: "₹22,000",
    occupancy: "4 Guests",
    description:
      "Designed for families who seek adventure together, the Family Suite spans two sleeping zones with a shared living area wrapped in panoramic glacier views. Glacier binoculars, a mountain library, and a private balcony make it the perfect base for high-altitude exploration.",
    amenities: [
      "Heated Floors Throughout",
      "Two Flat Screen TVs",
      "Family Minibar & Snack Station",
      "In-Room Safe",
      "Complimentary Breakfast for 4",
      "High-Speed WiFi",
      "Dual Showers",
      "Premium Toiletries",
      "Kids Activity Pack",
      "Private Balcony with Glacier View",
    ],
  },
  {
    name: "Super Deluxe",
    size: "620 sq ft",
    bed: "Super King",
    view: "Solang Valley & Snow Peaks",
    price: "₹19,000",
    occupancy: "2–3 Guests",
    description:
      "The Super Deluxe is our signature altitude experience — a Super King bed anchored beneath a vaulted timber ceiling, with the Solang Valley spread across the full-width panoramic window. A private jacuzzi terrace lets you soak under the stars at 9,200 feet.",
    amenities: [
      "Private Jacuzzi Terrace",
      "Heated Floors",
      "65″ Flat Screen TV",
      "Premium Minibar & Champagne Welcome",
      "In-Room Safe",
      "Complimentary Breakfast",
      "High-Speed WiFi",
      "Luxury Rain Shower",
      "Bvlgari Amenity Kit",
      "Dedicated Butler Service",
    ],
  },
];

export function AashapuriPage() {
  const [activeRoom, setActiveRoom] = useState<RoomDetail | null>(null);

  return (
    <div className="w-full overflow-x-hidden">
      <RoomModal
        room={activeRoom}
        accentColor={ACCENT}
        onClose={() => setActiveRoom(null)}
      />

      {/* Hero */}
      <section
        className="relative h-[60vh] sm:h-[70vh] lg:h-[75vh] flex items-end parallax-bg overflow-hidden"
        style={{
          backgroundImage:
            "url(/assets/generated/aashapuri-hero.dim_1600x900.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1A]/80 via-[#1A2E1A]/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-16 w-full">
          <p
            className="font-body text-xs tracking-wide-xl uppercase mb-3"
            style={{ color: ACCENT }}
          >
            High-Altitude Adventure Resort
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-card mb-3">
            Aashapuri Snow Line
          </h1>
          <p className="flex items-center gap-2 font-body text-sm text-card/70">
            <MapPin
              className="w-4 h-4 flex-shrink-0"
              style={{ color: ACCENT }}
            />
            Near Rohtang Pass, 9,200 ft
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link
              to="/contact"
              data-ocid="aashapuri-hero-book-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 font-body text-sm tracking-wide text-forest hover:bg-card transition-smooth min-h-[48px]"
              style={{ backgroundColor: ACCENT }}
            >
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("aashapuri-rooms")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-card/40 text-card font-body text-sm tracking-wide hover:border-gold hover:text-gold transition-smooth min-h-[48px]"
            >
              View Rooms
            </button>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: ACCENT }}
        />
      </section>

      {/* Intro */}
      <section className="bg-background spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="font-body text-xs tracking-wide-xl uppercase mb-4"
              style={{ color: ACCENT }}
            >
              The Snow Line Experience
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-6">
              At the Edge of the World
            </h2>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Aashapuri Snow Line is the Fyra Group's most audacious property.
              Perched at 9,200 feet on the approach to Rohtang Pass, it exists
              in a world of silence broken only by wind and the creak of fresh
              snowfall.
            </p>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
              This is for the traveller who wants more than a room with a view —
              who wants to feel the altitude, see glaciers glow at dusk, and
              fall asleep under a sky unpolluted by light.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h.label}
                className="bg-muted/40 border border-border p-4 sm:p-5 hover:border-[#7EC8E3] transition-smooth"
                data-ocid={`aashapuri-highlight-${i}`}
              >
                <h.icon className="w-5 h-5 mb-3" style={{ color: ACCENT }} />
                <p className="font-body text-sm font-medium text-foreground mb-1">
                  {h.label}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {h.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rooms */}
      <section id="aashapuri-rooms" className="bg-muted/30 spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-10 sm:mb-12">
            <p
              className="font-body text-xs tracking-wide-xl uppercase mb-3"
              style={{ color: ACCENT }}
            >
              Accommodations
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
              Rooms & Suites
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {ROOMS.map((room, i) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border shadow-card p-5 sm:p-6 hover:border-[#7EC8E3] transition-smooth"
                data-ocid={`snow-room-card.item.${i + 1}`}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {room.name}
                </h3>
                <p className="font-body text-xs text-muted-foreground mb-3">
                  {room.size} · {room.bed} Bed
                </p>
                <p
                  className="font-body text-xs mb-5 flex items-center gap-1.5"
                  style={{ color: ACCENT }}
                >
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  {room.view}
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-body text-xs text-muted-foreground">
                      from
                    </p>
                    <p className="font-display text-2xl font-semibold text-foreground">
                      {room.price}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      per night
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveRoom(room)}
                    data-ocid={`snow-room-card.open_modal_button.${i + 1}`}
                    className="font-body text-xs border-b pb-0.5 hover:opacity-70 transition-smooth min-h-[44px] flex items-end"
                    style={{ color: ACCENT, borderColor: ACCENT }}
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-14 sm:py-20 text-center px-4 sm:px-6">
        <h2
          className="font-display text-2xl sm:text-3xl mb-4"
          style={{ color: ACCENT }}
        >
          Reserve at Snow Line
        </h2>
        <p className="font-body text-sm text-card/60 mb-8 max-w-md mx-auto">
          Winter and spring availability fills quickly. Contact us to plan your
          high-altitude escape.
        </p>
        <Link
          to="/contact"
          data-ocid="aashapuri-book-cta"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 font-body text-sm tracking-wide text-forest hover:bg-card transition-smooth min-h-[48px]"
          style={{ backgroundColor: ACCENT }}
        >
          Book Now <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
