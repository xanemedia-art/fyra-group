import { Link } from "@tanstack/react-router";
import { ArrowRight, Coffee, Flame, MapPin, Trees } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { type RoomDetail, RoomModal } from "../components/RoomModal";

const ACCENT = "#D4933E";

const HIGHLIGHTS = [
  {
    icon: Flame,
    label: "Stone Fireplaces",
    description: "In every cottage suite",
  },
  {
    icon: Trees,
    label: "Pine Forest Setting",
    description: "Secluded in Old Manali",
  },
  {
    icon: Coffee,
    label: "Farm-to-Table Kitchen",
    description: "Seasonal Himachali cuisine",
  },
  {
    icon: MapPin,
    label: "Cultural Walks",
    description: "Guided village experiences",
  },
];

const ROOMS: RoomDetail[] = [
  {
    name: "Deluxe Room",
    size: "460 sq ft",
    bed: "King",
    view: "Pine Forest Canopy",
    price: "₹13,000",
    occupancy: "2 Guests",
    description:
      "Surrounded by ancient deodars, the Aashiyana Deluxe Room is a sanctuary built in the Kath-Kuni tradition — stone walls, hand-hewn timber beams, and hand-woven Kullu textiles layered over plush bedding. A private veranda overlooks the pine canopy, where birdsong replaces alarm clocks.",
    amenities: [
      "Stone Fireplace",
      "Air Conditioning",
      "42″ Flat Screen TV",
      "Minibar & Artisanal Tea Collection",
      "In-Room Safe",
      "Complimentary Himachali Breakfast",
      "High-Speed WiFi",
      "Rain Shower & Deep Soaking Tub",
      "Locally Crafted Toiletries",
      "Private Forest Veranda",
    ],
  },
  {
    name: "Family Suite",
    size: "850 sq ft",
    bed: "1 King + 2 Twin",
    view: "Apple Orchard & Valley",
    price: "₹19,000",
    occupancy: "4 Guests",
    description:
      "The Family Suite at Aashiyana is a two-bedroom cottage wrapped in orchard views — a master King bedroom with stone fireplace and two cozy twin beds in a connected children's room. Families gather in the shared living nook, where a private kitchen garden supplies the morning breakfast.",
    amenities: [
      "Two Stone Fireplaces",
      "Air Conditioning",
      "Two Flat Screen TVs",
      "Family Minibar & Snack Basket",
      "In-Room Safe",
      "Complimentary Breakfast for 4",
      "High-Speed WiFi",
      "Dual Bathrooms with Rain Showers",
      "Premium Toiletries",
      "Private Orchard Terrace",
    ],
  },
  {
    name: "Super Deluxe",
    size: "600 sq ft",
    bed: "Super King",
    view: "Mountain Stream & Deodars",
    price: "₹16,500",
    occupancy: "2–3 Guests",
    description:
      "The Aashiyana Super Deluxe is the most immersive cottage we offer — a Super King bed, a vaulted cedar ceiling, and a private deck that reaches out over a murmuring mountain stream. Elder flower wine, copper-inlaid furniture, and a copper-basin soaking tub complete the heritage luxury experience.",
    amenities: [
      "Stone Fireplace",
      "Private Deck over Mountain Stream",
      "Air Conditioning",
      "55″ Flat Screen TV",
      "Premium Minibar & Welcome Basket",
      "In-Room Safe",
      "Complimentary Breakfast",
      "High-Speed WiFi",
      "Copper Soaking Tub & Rain Shower",
      "Exclusive Heritage Toiletry Set",
    ],
  },
];

export function AashiyanaPage() {
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
            "url(/assets/generated/aashiyana-hero.dim_1600x900.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1A]/80 via-[#1A2E1A]/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-16 w-full">
          <p
            className="font-body text-xs tracking-wide-xl uppercase mb-3"
            style={{ color: ACCENT }}
          >
            Boutique Heritage Villa
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-card mb-3">
            Fyra Aashiyana
          </h1>
          <p className="flex items-center gap-2 font-body text-sm text-card/70">
            <MapPin
              className="w-4 h-4 flex-shrink-0"
              style={{ color: ACCENT }}
            />
            Old Manali Village, Himachal Pradesh
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link
              to="/contact"
              data-ocid="aashiyana-hero-book-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 font-body text-sm tracking-wide text-forest hover:bg-card transition-smooth min-h-[48px]"
              style={{ backgroundColor: ACCENT }}
            >
              Book Now <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("aashiyana-rooms")
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
              The Aashiyana Experience
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-6">
              A Heritage Villa in the Forest
            </h2>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Aashiyana — meaning "home" in Hindi — lives up to its name.
              Nestled among ancient deodars in Old Manali, our eight private
              cottages are built in the Kath-Kuni vernacular style: stone and
              timber, lovingly restored with handcrafted Kullu textiles and
              local copper fixtures.
            </p>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
              Wake to the scent of pine smoke. Take your breakfast on a private
              veranda watching apple orchards bloom. Return to a cedar-smoke
              fireplace and a glass of local elderflower wine.
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
                className="bg-muted/40 border border-border p-4 sm:p-5 hover:border-[#D4933E] transition-smooth"
                data-ocid={`aashiyana-highlight-${i}`}
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
      <section id="aashiyana-rooms" className="bg-muted/30 spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-10 sm:mb-12">
            <p
              className="font-body text-xs tracking-wide-xl uppercase mb-3"
              style={{ color: ACCENT }}
            >
              Accommodations
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
              Rooms & Cottages
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
                className="bg-card border border-border shadow-card p-5 sm:p-6 hover:border-[#D4933E] transition-smooth"
                data-ocid={`cottage-card.item.${i + 1}`}
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
                    data-ocid={`cottage-card.open_modal_button.${i + 1}`}
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
          Reserve Your Cottage
        </h2>
        <p className="font-body text-sm text-card/60 mb-8 max-w-md mx-auto">
          Contact our team to check cottage availability and seasonal packages.
        </p>
        <Link
          to="/contact"
          data-ocid="aashiyana-book-cta"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 font-body text-sm tracking-wide text-forest hover:bg-card transition-smooth min-h-[48px]"
          style={{ backgroundColor: ACCENT }}
        >
          Book Now <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
