import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Car,
  ChefHat,
  Clock,
  Dumbbell,
  MapPin,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Utensils,
  Waves,
  Wifi,
  Mountain,
  Phone,
  Heart,
  Coffee
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { KineticText } from "../components/KineticText";
import { type RoomDetail, RoomModal } from "../components/RoomModal";
import { useHeroParallax } from "../hooks/useHeroParallax";
import { IMAGES } from "../constants/images";
import { RATES } from "../constants/rates";

const ACCENT = "#C9A84C";

const AMENITIES = [
  { icon: Smartphone, label: "55″ Smart LED TV" },
  { icon: Wifi, label: "High-Speed Fiber" },
  { icon: Utensils, label: "Minibar & Nespresso" },
  { icon: Sparkles, label: "Bvlgari Toiletries" },
  { icon: Clock, label: "Daily Turndown" },
  { icon: ShieldCheck, label: "In-Room Safe" },
];

const FACILITIES = [
  { icon: Car, label: "Car & Bus Parking" },
  { icon: MapPin, label: "Travel Desk" },
  { icon: Wifi, label: "High-Speed Wi-Fi" },
  { icon: Waves, label: "Hot & Cold Water" },
  { icon: Mountain, label: "Panoramic Balcony" },
  { icon: Utensils, label: "Multi-Cuisine Dining" },
  { icon: Smartphone, label: "Satellite LED TV" },
  { icon: Phone, label: "Intercom Facility" },
  { icon: ShieldCheck, label: "Fire Safety Sys" },
  { icon: Heart, label: "Doctor on Call" },
  { icon: Coffee, label: "Tea/Coffee Maker" },
  { icon: Clock, label: "24h Power & CCTV" },
];

const ROOMS: RoomDetail[] = [
  {
    name: "Deluxe Room",
    size: "480 sq ft",
    bed: "Double Bed",
    view: "Mountain / Garden View",
    price: RATES.FYRA_HOTEL.DELUXE,
    occupancy: "2 Guests",
    description:
      "These charming double bed include all modern facilities required to make your stay comfortable. An elegant & comfortable double bed with all modern facilities with a small balcony or a patch of garden at the back side gives you a relaxed ambience.",
    amenities: [
      "Private Balcony / Garden Patch",
      "Mountain View",
      "Fully AC / Room Heater",
      "Flat Screen TV",
      "Complimentary Breakfast",
      "Free High-Speed Wi-Fi",
      "Welcome drink & Cookies on arrival",
      "Coffee/Tea Maker",
      "Pick & Drop Facilities",
      "In-room Safe & Minibar",
      "Hairdryer & Laundry Service",
      "Telephone",
    ],
  },
  {
    name: "Family Suite",
    size: "780 sq ft",
    bed: "2 Interconnected Rooms",
    view: "River & Valley View",
    price: RATES.FYRA_HOTEL.FAMILY,
    occupancy: "4 Guests",
    description:
      "The luxurious & spacious interconnected 2 room provide a decent space for a family offers the most spectacular view of the Himalayas. With a Balcony and all modern amenities it is the perfect setting for a family holiday. Enjoy nature's theatre from nature's theatre from the comfort of being indoors.",
    amenities: [
      "Private Balcony",
      "Spectacular River & Valley Views",
      "Fully AC / Room Heater",
      "Flat Screen TV",
      "Complimentary Breakfast",
      "Free High-Speed Wi-Fi",
      "Welcome drink & Cookies on arrival",
      "Late check-out until 3pm*",
      "Coffee/Tea Maker",
      "Pick & Drop Facilities",
      "In-room Safe & Minibar",
      "Hairdryer & Laundry Service",
    ],
  },
];

export function FyraHotelPage() {
  const [activeRoom, setActiveRoom] = useState<RoomDetail | null>(null);
  const { heroRef, imageRef } = useHeroParallax();

  return (
    <div className="w-full overflow-x-hidden">
      <RoomModal
        room={activeRoom}
        accentColor={ACCENT}
        onClose={() => setActiveRoom(null)}
      />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background with Exhale */}
        <div
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center hero-exhale"
          style={{
            backgroundImage: `url("${IMAGES.FYRA_HOTEL.HERO}")`,
          }}
        />
        {/* Deep Vignette Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center w-full">
          <KineticText
            className="font-body text-xs sm:text-sm tracking-wide-xl uppercase mb-4"
            style={{ color: ACCENT }}
            delay={0.2}
          >
            Modern Luxury Flagship
          </KineticText>
          <KineticText
            className="font-display text-[32px] xs:text-4xl sm:text-5xl md:text-7xl font-semibold text-card mb-8 leading-tight text-shadow-premium"
            delay={0.4}
          >
            The Fyra Hotel <br />
            <span className="italic font-normal text-gold">Flagship.</span>
          </KineticText>
          <KineticText
            className="font-body text-base sm:text-lg text-white/90 mb-10 max-w-2xl mx-auto italic"
            delay={0.6}
          >
            "A living work of mountain architecture where luxury and landscape
            become one."
          </KineticText>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 font-body text-sm tracking-wide text-forest hover:brightness-110 transition-smooth min-h-[52px] rounded-sm"
              style={{ backgroundColor: ACCENT }}
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-card/60 text-card font-body text-sm tracking-wide hover:bg-card/10 transition-smooth min-h-[52px] rounded-sm backdrop-blur-sm"
            >
              View Rooms & Suites
            </button>
          </div>
        </div>
      </section>

      {/* Intro - The Experience */}
      <section className="bg-background spacing-section border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold/50" />
                <span className="font-body text-xs tracking-wide-xl uppercase text-gold">
                  The Experience
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-8 leading-tight">
                Himalayan Theatre, <br />
                Refined Elegance.
              </h2>
              <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                FYRA HOTEL is located on a charming hill-top, at an elevation of
                6,200 feet above sea-level, offering a spectacular & mesmeric
                view of the Himalayas surrounded by apple orchard and panoramic
                view of green valley with its stream, pine forest and its snow
                capped mountains.
              </p>
              <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                It provides a welcome sense of luxury, privacy and serenity,
                making it an ideal retreat for either a family holiday, a
                romantic getaway, or a corporate sojourn. The resort, with its
                23 elegantly appointed rooms with Balcony, is located a mere 15
                minutes drive from Mall road.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex text-gold">
                  {"★".repeat(5)}
                </div>
                <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">
                  5-Star Luxury Property
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-elevated group"
            >
              <img
                src={IMAGES.FYRA_HOTEL.AERIAL}
                alt="Fyra Hotel Exterior"
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-1000"
              />
              <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="bg-muted/30 spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
              What we offer to our customers
            </h2>
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto mb-8">
               From secure parking for large coaches to round-the-clock power backup and safety systems, 
               we ensure a seamless and worry-free stay for every guest.
            </p>
            <div className="h-1 w-20 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 sm:gap-10">
            {FACILITIES.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center p-6 bg-card border border-border/50 rounded-sm hover:border-gold/30 hover:shadow-refined transition-smooth group"
              >
                <div className="p-3 bg-muted/50 rounded-full mb-4 group-hover:bg-gold/10 transition-smooth">
                  <f.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="font-body text-[10px] font-semibold text-center uppercase tracking-widest text-muted-foreground">
                  {f.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="hotel-rooms" className="bg-background spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="font-body text-xs tracking-wide-xl uppercase text-gold mb-3 block">
                Luxury Accommodation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
                Rooms & Suites
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {ROOMS.map((room, i) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col lg:flex-row bg-card border border-border shadow-card overflow-hidden group">
                  <div className="lg:w-1/2 aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={i === 0 ? IMAGES.FYRA_HOTEL.ROOMS.DELUXE : IMAGES.FYRA_HOTEL.ROOMS.FAMILY}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                    />
                  </div>
                  <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2 group-hover:text-gold transition-smooth">
                      {room.name}
                    </h3>
                    <div className="flex gap-4 mb-4">
                      <span className="font-body text-[10px] uppercase tracking-widest text-muted-foreground border-r border-border pr-4">
                        {room.size}
                      </span>
                      <span className="font-body text-[10px] uppercase tracking-widest text-muted-foreground">
                        {room.occupancy}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                      {room.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="font-body text-[10px] uppercase tracking-widest text-muted-foreground">
                        Starting from
                      </p>
                      <p className="font-display text-2xl font-bold text-foreground">
                        {room.price}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveRoom(room)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-gold font-body text-xs uppercase tracking-widest hover:bg-gold hover:text-forest transition-smooth"
                    >
                      Details <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="bg-muted/50 spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {AMENITIES.map((a, i) => (
                  <motion.div
                    key={a.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-start"
                  >
                    <a.icon className="w-6 h-6 text-gold mb-4" />
                    <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-foreground">
                      {a.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-body text-xs tracking-wide-xl uppercase text-gold mb-3 block">
                Standard of Excellence
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
                Premium In-Room <br />
                Amenities
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md">
                From the infinity pool suspended over the Beas Valley to the spa
                drawing on ancient Ayurvedic wisdom, every detail here has been
                designed with intention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Experience */}
      <section className="bg-background spacing-section border-t border-border overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
           <div className="absolute inset-0 bg-[url('/assets/hero/hero-hotel-aerial.JPG')] bg-cover bg-center grayscale" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="bg-card border border-border shadow-refined overflow-hidden flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-10 sm:p-16 flex flex-col justify-center bg-background/50 backdrop-blur-sm">
              <Utensils className="w-10 h-10 mb-8" style={{ color: ACCENT }} />
              <h2 className="font-display text-3xl sm:text-4xl text-foreground font-semibold mb-6">
                Fine Dining
              </h2>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 italic">
                "Himalayan cuisine reimagined. Savor delicious flavors at our
                in-house restaurant where fresh, local ingredients meet
                contemporary culinary techniques."
              </p>
              <div className="flex items-center gap-6">
                {["Gourmet", "Organic", "Bespoke"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-gold rounded-full" />
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-80 lg:h-auto overflow-hidden">
              <img
                src={IMAGES.FYRA_HOTEL.DINING_HERO}
                alt="Dining Atmosphere"
                className="w-full h-full object-cover grayscale opacity-60"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-forest py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale"
            style={{ backgroundImage: `url("${IMAGES.FYRA_HOTEL.AERIAL}")` }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl mb-8 leading-tight"
            style={{ color: ACCENT }}
          >
            Reserve Your Experience
          </h2>
          <p
            className="font-body text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: ACCENT }}
          >
            Contact our reservations team for availability, bespoke packages,
            and private event enquiries at Manali's modern luxury flagship.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 font-body text-sm font-semibold tracking-widest text-forest hover:brightness-110 transition-smooth rounded-sm shadow-xl"
            style={{ backgroundColor: ACCENT }}
          >
            BOOK YOUR STAY <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
