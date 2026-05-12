import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Car,
  ChefHat,
  Clock,
  Coffee,
  Heart,
  Home,
  MapPin,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tv,
  Utensils,
  Wifi,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { KineticText } from "../components/KineticText";
import { type RoomDetail, RoomModal } from "../components/RoomModal";
import { useHeroParallax } from "../hooks/useHeroParallax";
import { IMAGES } from "../constants/images";
import { RATES } from "../constants/rates";

const ACCENT = "#D4933E";

const AMENITIES = [
  { icon: Home, label: "Private Balcony" },
  { icon: Smartphone, label: "Smart LED TV" },
  { icon: Wifi, label: "High-Speed Wi-Fi" },
  { icon: Coffee, label: "Tea/Coffee Maker" },
  { icon: Sparkles, label: "Luxury Toiletries" },
  { icon: Clock, label: "24-Hour Hot Water" },
];

const FACILITIES = [
  { icon: Car, label: "Free Parking" },
  { icon: ArrowRight, label: "Lift Access" },
  { icon: ChefHat, label: "Multi-Cuisine Restaurant" },
  { icon: Clock, label: "24-Hour Front Desk" },
  { icon: ShieldCheck, label: "Daily Housekeeping" },
  { icon: MapPin, label: "Travel Assistance" },
];

const ROOMS: RoomDetail[] = [
  {
    name: "Deluxe Room",
    size: "420 sq ft",
    bed: "King",
    view: "Scenic Mountain View",
    price: RATES.AASHIYANA.DELUXE,
    occupancy: "2 Guests",
    image: IMAGES.AASHIYANA.ROOMS.DELUXE,
    description:
      "Our Deluxe Rooms offer the perfect balance of comfort, functionality, and mountain charm. Each room features a private balcony where you can soak in the serene Manali landscape, complemented by premium bedding and high-tech washroom amenities.",
    amenities: [
      "Private Balcony with scenic views",
      "Mini Refrigerator",
      "Hair Dryer",
      "Smart LED TV",
      "High-Speed Wi-Fi",
      "Tea/Coffee Maker",
      "Luxury Toiletries",
      "24-Hour Hot & Cold Water",
      "Modern Washrooms",
      "Premium Bedding",
    ],
  },
  {
    name: "Super Deluxe Room",
    size: "450 sq ft",
    bed: "King",
    view: "Breathtaking Mountain View",
    price: RATES.AASHIYANA.SUPER_DELUXE,
    occupancy: "2 Guests",
    image: IMAGES.AASHIYANA.ROOMS.SUPER_DELUXE,
    description:
      "Our Super Deluxe Rooms are perfect for guests who want to enjoy stunning mountain views from their private balcony. These rooms feature hot & cold air conditioning, premium interiors, and modern washrooms for maximum comfort.",
    amenities: [
      "Private Balcony with scenic views",
      "Hot & Cold Air Conditioning",
      "Premium Interiors",
      "Modern Washrooms",
      "Comfortable Bedding",
      "High-Speed Wi-Fi",
      "Smart LED TV",
    ],
  },
  {
    name: "Family Suite",
    size: "850 sq ft",
    bed: "1 King + 2 Twin",
    view: "Valley & Orchard View",
    price: RATES.AASHIYANA.FAMILY_SUITE,
    occupancy: "4 Guests",
    image: IMAGES.AASHIYANA.HERO,
    description:
      "Ideal for larger families or groups, our Family Suite offers enhanced privacy and additional living space. It combines all the comforts of home with the luxury of a boutique hotel, ensuring a memorable stay for your loved ones.",
    amenities: [
      "Additional Living Space",
      "Enhanced Privacy",
      "Private Balconies",
      "Mini Refrigerator",
      "Hair Dryer",
      "Two Smart LED TVs",
      "High-Speed Wi-Fi",
      "Tea/Coffee Maker",
      "Luxury Toiletries",
      "Modern Washrooms",
    ],
  },
];

export function AashiyanaPage() {
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
            backgroundImage: `url("${IMAGES.AASHIYANA.HERO}")`,
          }}
        />
        {/* Deep Vignette Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center w-full">
          <KineticText
            className="font-body text-xs sm:text-sm tracking-wide-xl uppercase mb-4"
            style={{ color: ACCENT }}
            delay={0.2}
          >
            Welcome to the Ghar
          </KineticText>
          <KineticText
            className="font-display text-[32px] xs:text-4xl sm:text-5xl md:text-7xl font-semibold text-card mb-8 leading-tight text-shadow-premium"
            delay={0.4}
          >
            The FYRA AASHIYANA <br />
            <span className="italic font-normal text-gold">THE GHAR.</span>
          </KineticText>
          <KineticText
            className="font-body text-base sm:text-lg text-white/90 mb-10 max-w-2xl mx-auto italic"
            delay={0.6}
          >
            "Where comfort feels like home and hospitality comes from the heart."
          </KineticText>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link
              to="/contact"
              data-ocid="aashiyana-hero-book-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 font-body text-sm tracking-wide text-forest hover:brightness-110 transition-smooth min-h-[52px] rounded-sm"
              style={{ backgroundColor: ACCENT }}
            >
              Book Your Stay <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("aashiyana-rooms")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-card/60 text-card font-body text-sm tracking-wide hover:bg-card/10 transition-smooth min-h-[52px] rounded-sm backdrop-blur-sm"
            >
              Explore Accommodation
            </button>
          </div>
        </div>
      </section>

      {/* Intro - The Ghar Experience */}
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
                  Your Home in the Hills
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-8 leading-tight">
                Heartfelt Hospitality, <br />
                Modern Elegance.
              </h2>
              <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                FYRA AASHIYANA THE GHAR is your home away from home in the
                serene hills of Manali. Thoughtfully designed to combine modern
                comforts with heartfelt hospitality, our boutique property
                offers a warm, elegant, and memorable stay for couples,
                families, and leisure travelers.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex flex-col gap-2">
                  <span className="font-display text-4xl font-bold text-gold">
                    15
                  </span>
                  <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">
                    Premium Rooms
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-display text-4xl font-bold text-gold">
                    01
                  </span>
                  <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">
                    Family Suite
                  </span>
                </div>
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
                src={IMAGES.AASHIYANA.DINING}
                alt="FYRA AASHIYANA THE GHAR Mountain View"
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
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
              Hotel Facilities
            </h2>
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
                <span className="font-body text-xs font-medium text-center uppercase tracking-wider text-muted-foreground">
                  {f.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="aashiyana-rooms" className="bg-background spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="font-body text-xs tracking-wide-xl uppercase text-gold mb-3 block">
                Elegant Accommodation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
                Crafted for Comfort & Charm
              </h2>
            </div>
            <p className="font-body text-sm text-muted-foreground max-w-sm">
              Each room is carefully designed to provide the perfect balance of
              functionality and mountain character.
            </p>
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
                <div className="flex flex-col lg:flex-row bg-card shadow-card overflow-hidden group">
                  <div className="lg:w-1/2 aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={room.image}
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
                    <span className="font-body text-xs font-semibold uppercase tracking-widest text-foreground">
                      {a.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-body text-xs tracking-wide-xl uppercase text-gold mb-3 block">
                The Details Matter
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">
                Premium In-Room <br />
                Amenities
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md">
                Every detail is designed to make you feel comfortable and truly
                cared for. From high-tech modern washrooms to premium bedding,
                we ensure your stay is as seamless as it is memorable.
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
                Dining Experience
              </h2>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 italic">
                "Savor delicious flavors at our in-house Multi-Cuisine
                Restaurant. We serve a variety of Indian, Chinese, and
                Continental dishes, all prepared with fresh ingredients and
                exceptional care by our expert chefs."
              </p>
              <div className="flex items-center gap-6">
                {["Indian", "Chinese", "Continental"].map((item) => (
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
                src={IMAGES.ASHAPURI.HERO}
                alt="Dining Atmosphere"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gold/5 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-muted/30 spacing-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Heart className="w-8 h-8 text-gold mx-auto mb-8" />
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-12">
            Why Choose FYRA AASHIYANA THE GHAR?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 text-left">
            {[
              "Homely ambiance with premium amenities",
              "Private balconies in every room",
              "Family-friendly accommodation",
              "Modern, high-tech bathrooms",
              "Convenient facilities (lift & parking)",
              "Personalized service with warmth",
            ].map((text, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 h-1.5 w-1.5 bg-gold rounded-full flex-shrink-0" />
                <p className="font-body text-sm text-foreground/80 font-medium leading-tight">
                  {text}
                </p>
              </motion.div>
            ))}
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
            A Stay That Feels Like Home
          </h2>
          <p
            className="font-body text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: ACCENT }}
          >
            Whether you are enjoying the mountain breeze from your balcony or
            sharing a meal with loved ones, your stay will be filled with warmth
            and unforgettable memories.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 font-body text-sm font-semibold tracking-widest text-forest hover:brightness-110 transition-smooth rounded-sm shadow-xl"
            style={{ backgroundColor: ACCENT }}
          >
            BOOK YOUR MEMORY <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
