import { Link } from "@tanstack/react-router";
import { ArrowRight, Coffee, Flame, MapPin, Trees } from "lucide-react";
import { motion } from "motion/react";

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

const COTTAGES = [
  {
    name: "Cedar Cottage",
    size: "520 sq ft",
    bed: "King",
    view: "Pine Forest Canopy",
    price: "₹22,000",
  },
  {
    name: "Orchard Retreat",
    size: "620 sq ft",
    bed: "King",
    view: "Apple Orchard",
    price: "₹26,000",
  },
  {
    name: "River Nest",
    size: "440 sq ft",
    bed: "Queen",
    view: "Mountain Stream",
    price: "₹16,000",
  },
];

export function AashiyanaPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative h-[75vh] flex items-end parallax-bg overflow-hidden"
        style={{
          backgroundImage:
            "url(/assets/generated/aashiyana-hero.dim_1600x900.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E1A]/80 via-[#1A2E1A]/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <p
            className="font-body text-xs tracking-wide-xl uppercase mb-3"
            style={{ color: "#D4933E" }}
          >
            Boutique Heritage Villa
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-card mb-3">
            Fyra Aashiyana
          </h1>
          <p className="flex items-center gap-2 font-body text-sm text-card/70">
            <MapPin className="w-4 h-4" style={{ color: "#D4933E" }} />
            Old Manali Village, Himachal Pradesh
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: "#D4933E" }}
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
              style={{ color: "#D4933E" }}
            >
              The Aashiyana Experience
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              A Heritage Villa in the Forest
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
              Aashiyana — meaning "home" in Hindi — lives up to its name.
              Nestled among ancient deodars in Old Manali, our eight private
              cottages are built in the Kath-Kuni vernacular style: stone and
              timber, lovingly restored with handcrafted Kullu textiles and
              local copper fixtures.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
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
            className="grid grid-cols-2 gap-4"
          >
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h.label}
                className="bg-muted/40 border border-border p-5 hover:border-[#D4933E] transition-smooth"
                data-ocid={`aashiyana-highlight-${i}`}
              >
                <h.icon className="w-5 h-5 mb-3" style={{ color: "#D4933E" }} />
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

      {/* Cottages */}
      <section className="bg-muted/30 spacing-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p
              className="font-body text-xs tracking-wide-xl uppercase mb-3"
              style={{ color: "#D4933E" }}
            >
              Accommodations
            </p>
            <h2 className="font-display text-3xl font-semibold text-foreground">
              Private Cottages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COTTAGES.map((cottage, i) => (
              <motion.div
                key={cottage.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border shadow-card p-6 hover:border-[#D4933E] transition-smooth"
                data-ocid={`cottage-card-${i}`}
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {cottage.name}
                </h3>
                <p className="font-body text-xs text-muted-foreground mb-4">
                  {cottage.size} • {cottage.bed} Bed
                </p>
                <p
                  className="font-body text-xs mb-6 flex items-center gap-1.5"
                  style={{ color: "#D4933E" }}
                >
                  <MapPin className="w-3 h-3" />
                  {cottage.view}
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-body text-xs text-muted-foreground">
                      from
                    </p>
                    <p className="font-display text-2xl font-semibold text-foreground">
                      {cottage.price}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      per night
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="font-body text-xs border-b pb-0.5 hover:opacity-70 transition-smooth"
                    style={{ color: "#D4933E", borderColor: "#D4933E" }}
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
        <h2 className="font-display text-3xl mb-4" style={{ color: "#D4933E" }}>
          Reserve Your Cottage
        </h2>
        <p className="font-body text-sm text-card/60 mb-8 max-w-md mx-auto">
          Contact our team to check cottage availability and seasonal packages.
        </p>
        <Link
          to="/contact"
          data-ocid="aashiyana-book-cta"
          className="inline-flex items-center gap-2 px-8 py-4 font-body text-sm tracking-wide text-forest hover:bg-card transition-smooth"
          style={{ backgroundColor: "#D4933E" }}
        >
          Book Now <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
