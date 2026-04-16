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

const ROOMS = [
  {
    name: "Valley Suite",
    size: "680 sq ft",
    bed: "King",
    view: "Beas Valley Panorama",
    price: "₹28,000",
  },
  {
    name: "Peak Penthouse",
    size: "1,200 sq ft",
    bed: "Super King",
    view: "Rohtang Range",
    price: "₹55,000",
  },
  {
    name: "Forest Deluxe",
    size: "480 sq ft",
    bed: "Queen",
    view: "Pine Forest",
    price: "₹18,000",
  },
];

export function FyraHotelPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative h-[75vh] flex items-end parallax-bg overflow-hidden"
        style={{
          backgroundImage:
            "url(/assets/generated/fyra-hotel-hero.dim_1600x900.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <p className="font-body text-xs tracking-wide-xl text-gold uppercase mb-3">
            Modern Luxury Flagship
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-card mb-3">
            Fyra Hotel
          </h1>
          <p className="flex items-center gap-2 font-body text-sm text-card/70">
            <MapPin className="w-4 h-4 text-gold" />
            Mall Road, Manali, Himachal Pradesh
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
      </section>

      {/* Intro */}
      <section className="bg-background spacing-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-xs tracking-wide-xl text-gold uppercase mb-4">
              The Experience
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 gold-underline">
              A Living Work of Mountain Architecture
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
              Fyra Hotel rises from the Manali skyline as a bold declaration:
              that luxury and landscape are not opposites, but partners. Our 42
              suites are clad in local slate, walnut, and floor-to-ceiling glass
              — every room a frame around the Himalayan theatre.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              From the infinity edge pool suspended over the Beas Valley to the
              Char-Dham spa drawing on ancient Ayurvedic wisdom, every detail
              here has been designed with intention.
            </p>
            <div className="flex items-center gap-4">
              <p
                className="text-gold text-sm tracking-widest mr-3"
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
            className="grid grid-cols-2 gap-4"
          >
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h.label}
                className="bg-muted/40 border border-border p-5 group hover:border-gold transition-smooth"
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
      <section className="bg-muted/30 spacing-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="font-body text-xs tracking-wide-xl text-gold uppercase mb-3">
              Accommodations
            </p>
            <h2 className="font-display text-3xl font-semibold text-foreground">
              Rooms & Suites
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROOMS.map((room, i) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border shadow-card p-6 hover:border-gold transition-smooth"
                data-ocid={`room-card-${i}`}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {room.name}
                </h3>
                <p className="font-body text-xs text-muted-foreground mb-4">
                  {room.size} • {room.bed} Bed
                </p>
                <p className="font-body text-xs text-gold mb-6 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
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
                  <Link
                    to="/contact"
                    className="font-body text-xs text-gold border-b border-gold pb-0.5 hover:opacity-70 transition-smooth"
                  >
                    Reserve
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-20 text-center px-6">
        <h2 className="font-display text-3xl text-gold mb-4">
          Reserve Your Suite
        </h2>
        <p className="font-body text-sm text-card/60 mb-8 max-w-md mx-auto">
          Contact our reservations team for availability, bespoke packages, and
          private event enquiries.
        </p>
        <Link
          to="/contact"
          data-ocid="hotel-book-cta"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-forest font-body text-sm tracking-wide hover:bg-card transition-smooth"
        >
          Book Now <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
