import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Dumbbell,
  MapPin,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { type RoomDetail, RoomModal } from "../components/RoomModal";

const ACCENT = "#C9A84C";

const HIGHLIGHTS = [
  {
    icon: Waves,
    label: "Infinity Pool",
    description: "Overlooking the Beas River Valley",
  },
  {
    icon: Utensils,
    label: "Fine Dining",
    description: "Himalayan cuisine reimagined",
  },
  {
    icon: Dumbbell,
    label: "Spa & Wellness",
    description: "Ayurvedic & mountain therapies",
  },
  {
    icon: Wifi,
    label: "Seamless Connectivity",
    description: "High-speed fiber throughout",
  },
];

const ROOMS: RoomDetail[] = [
  {
    name: "Deluxe Room",
    size: "480 sq ft",
    bed: "King",
    view: "Beas Valley Panorama",
    price: "₹12,000",
    occupancy: "2 Guests",
    description:
      "The Deluxe Room is a study in restrained elegance — local slate floors, walnut panelling, and a floor-to-ceiling window that frames the Beas Valley like a living painting. Morning light pours gold across hand-woven Kullu textiles, and the marble-clad bathroom gleams with every comfort.",
    amenities: [
      "Air Conditioning",
      "55″ Flat Screen TV",
      "Minibar & Nespresso",
      "In-Room Safe",
      "Complimentary Breakfast",
      "High-Speed WiFi",
      "Rain Shower & Soaking Tub",
      "Premium Bvlgari Toiletries",
      "Iron & Ironing Board",
      "Daily Turndown Service",
    ],
  },
  {
    name: "Family Suite",
    size: "780 sq ft",
    bed: "1 King + 2 Twin",
    view: "Rohtang Range & Valley",
    price: "₹18,000",
    occupancy: "4 Guests",
    description:
      "Spacious enough for families, intimate enough for couples — the Family Suite is a two-zone sanctuary with a master King bedroom and a separate twin sleeping area. Dual balconies overlook the Rohtang skyline, and the open living space is furnished with bespoke Manali craftwork and contemporary comforts.",
    amenities: [
      "Air Conditioning",
      "Dual 55″ Flat Screen TVs",
      "Minibar & Tea Station",
      "In-Room Safe",
      "Complimentary Breakfast for 4",
      "High-Speed WiFi",
      "Dual Rain Showers",
      "Premium Toiletries",
      "Iron & Ironing Board",
      "Connecting Room Option",
    ],
  },
];

export function FyraHotelPage() {
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
            "url(/assets/generated/fyra-hotel-hero.dim_1600x900.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-16 w-full">
          <p className="font-body text-xs tracking-wide-xl text-gold uppercase mb-3">
            Modern Luxury Flagship
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-card mb-3">
            Fyra Hotel
          </h1>
          <p className="flex items-center gap-2 font-body text-sm text-card/70">
            <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
            Mall Road, Manali, Himachal Pradesh
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link
              to="/contact"
              data-ocid="hotel-hero-book-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-forest font-body text-sm tracking-wide hover:bg-card transition-smooth min-h-[48px]"
            >
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("hotel-rooms")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-card/40 text-card font-body text-sm tracking-wide hover:border-gold hover:text-gold transition-smooth min-h-[48px]"
            >
              View Rooms
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
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
            <p className="font-body text-xs tracking-wide-xl text-gold uppercase mb-4">
              The Experience
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-6 gold-underline">
              A Living Work of Mountain Architecture
            </h2>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Fyra Hotel rises from the Manali skyline as a bold declaration:
              that luxury and landscape are not opposites, but partners. Our 42
              suites are clad in local slate, walnut, and floor-to-ceiling glass
              — every room a frame around the Himalayan theatre.
            </p>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
              From the infinity edge pool suspended over the Beas Valley to the
              Char-Dham spa drawing on ancient Ayurvedic wisdom, every detail
              here has been designed with intention.
            </p>
            <div className="flex items-center gap-4">
              <p
                className="text-gold text-sm tracking-widest"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </p>
              <span className="font-body text-sm text-muted-foreground">
                5-Star Luxury Property
              </span>
            </div>
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
                className="bg-muted/40 border border-border p-4 sm:p-5 group hover:border-gold transition-smooth"
                data-ocid={`hotel-highlight-${i}`}
              >
                <h.icon className="w-5 h-5 text-gold mb-3" />
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
      <section id="hotel-rooms" className="bg-muted/30 spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-10 sm:mb-12">
            <p className="font-body text-xs tracking-wide-xl text-gold uppercase mb-3">
              Accommodations
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
              Rooms & Suites
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl">
            {ROOMS.map((room, i) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border shadow-card p-5 sm:p-6 hover:border-gold transition-smooth"
                data-ocid={`room-card.item.${i + 1}`}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {room.name}
                </h3>
                <p className="font-body text-xs text-muted-foreground mb-3">
                  {room.size} · {room.bed} Bed
                </p>
                <p className="font-body text-xs text-gold mb-5 flex items-center gap-1.5">
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
                    data-ocid={`room-card.open_modal_button.${i + 1}`}
                    className="font-body text-xs text-gold border-b border-gold pb-0.5 hover:opacity-70 transition-smooth min-h-[44px] flex items-end"
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
        <h2 className="font-display text-2xl sm:text-3xl text-gold mb-4">
          Reserve Your Suite
        </h2>
        <p className="font-body text-sm text-card/60 mb-8 max-w-md mx-auto">
          Contact our reservations team for availability, bespoke packages, and
          private event enquiries.
        </p>
        <Link
          to="/contact"
          data-ocid="hotel-book-cta"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gold text-forest font-body text-sm tracking-wide hover:bg-card transition-smooth min-h-[48px]"
        >
          Book Now <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
