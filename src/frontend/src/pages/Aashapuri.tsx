import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Mountain, Telescope, Wind } from "lucide-react";
import { motion } from "motion/react";

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

const ROOMS = [
  {
    name: "Snow Peak Suite",
    size: "640 sq ft",
    bed: "King",
    view: "Rohtang Range at Dawn",
    price: "₹32,000",
  },
  {
    name: "Glacier View Room",
    size: "480 sq ft",
    bed: "King",
    view: "Beas Kund Glacier",
    price: "₹22,000",
  },
  {
    name: "Base Camp Loft",
    size: "380 sq ft",
    bed: "Twin",
    view: "High Altitude Meadow",
    price: "₹16,500",
  },
];

export function AashapuriPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative h-[75vh] flex items-end parallax-bg overflow-hidden"
        style={{
          backgroundImage:
            "url(/assets/generated/aashapuri-hero.dim_1600x900.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1A]/80 via-[#1A2E1A]/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <p
            className="font-body text-xs tracking-wide-xl uppercase mb-3"
            style={{ color: "#7EC8E3" }}
          >
            High-Altitude Adventure Resort
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-card mb-3">
            Aashapuri Snow Line
          </h1>
          <p className="flex items-center gap-2 font-body text-sm text-card/70">
            <MapPin className="w-4 h-4" style={{ color: "#7EC8E3" }} />
            Near Rohtang Pass, 9,200 ft
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: "#7EC8E3" }}
        />
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
            <p
              className="font-body text-xs tracking-wide-xl uppercase mb-4"
              style={{ color: "#7EC8E3" }}
            >
              The Snow Line Experience
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              At the Edge of the World
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
              Aashapuri Snow Line is the Fyra Group's most audacious property.
              Perched at 9,200 feet on the approach to Rohtang Pass, it exists
              in a world of silence broken only by wind and the creak of fresh
              snowfall.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
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
            className="grid grid-cols-2 gap-4"
          >
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h.label}
                className="bg-muted/40 border border-border p-5 hover:border-[#7EC8E3] transition-smooth"
                data-ocid={`aashapuri-highlight-${i}`}
              >
                <h.icon className="w-5 h-5 mb-3" style={{ color: "#7EC8E3" }} />
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
            <p
              className="font-body text-xs tracking-wide-xl uppercase mb-3"
              style={{ color: "#7EC8E3" }}
            >
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
                className="bg-card border border-border shadow-card p-6 hover:border-[#7EC8E3] transition-smooth"
                data-ocid={`snow-room-${i}`}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {room.name}
                </h3>
                <p className="font-body text-xs text-muted-foreground mb-4">
                  {room.size} • {room.bed} Bed
                </p>
                <p
                  className="font-body text-xs mb-6 flex items-center gap-1.5"
                  style={{ color: "#7EC8E3" }}
                >
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
                    className="font-body text-xs border-b pb-0.5 hover:opacity-70 transition-smooth"
                    style={{ color: "#7EC8E3", borderColor: "#7EC8E3" }}
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
        <h2 className="font-display text-3xl mb-4" style={{ color: "#7EC8E3" }}>
          Reserve at Snow Line
        </h2>
        <p className="font-body text-sm text-card/60 mb-8 max-w-md mx-auto">
          Winter and spring availability fills quickly. Contact us to plan your
          high-altitude escape.
        </p>
        <Link
          to="/contact"
          data-ocid="aashapuri-book-cta"
          className="inline-flex items-center gap-2 px-8 py-4 font-body text-sm tracking-wide text-forest hover:bg-card transition-smooth"
          style={{ backgroundColor: "#7EC8E3" }}
        >
          Book Now <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
