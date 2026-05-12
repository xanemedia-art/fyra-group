import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Car,
  ChefHat,
  Clock,
  Heart,
  Home,
  Leaf,
  MapPin,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Thermometer,
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

const ACCENT = "#7EC8E3";

const AMENITIES = [
  { icon: Thermometer, label: "Hot & Cold AC" },
  { icon: Smartphone, label: "Smart LED TV" },
  { icon: Wifi, label: "High-Speed Wi-Fi" },
  { icon: Sparkles, label: "Luxury Toiletries" },
  { icon: Clock, label: "24-Hour Assistance" },
  { icon: Home, label: "Private Balcony*" },
];

const FACILITIES = [
  { icon: Leaf, label: "Landscaped Lawn" },
  { icon: ChefHat, label: "Multi-Cuisine Cafe" },
  { icon: Car, label: "Secure Private Parking" },
  { icon: Heart, label: "Family-Friendly" },
  { icon: Clock, label: "24-Hour Front Desk" },
  { icon: MapPin, label: "Scenic Surroundings" },
];

const ROOMS: RoomDetail[] = [
  {
    name: "Super Deluxe Room",
    size: "450 sq ft",
    bed: "King",
    view: "Breathtaking Mountain View",
    price: RATES.ASHAPURI.SUPER_DELUXE,
    occupancy: "2 Guests",
    description:
      "Our Super Deluxe Rooms (10 available) are perfect for guests who want to enjoy stunning mountain views from their private balcony. These rooms feature hot & cold air conditioning, premium interiors, and modern washrooms for maximum comfort.",
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
    name: "Deluxe Room",
    size: "400 sq ft",
    bed: "King",
    view: "Inner Courtyard",
    price: RATES.ASHAPURI.DELUXE,
    occupancy: "2 Guests",
    description:
      "Designed for cozy and comfortable stays, our Deluxe Rooms (4 available) offer all essential amenities in an elegant setting. These rooms feature stylish interiors and hot & cold air conditioning (Note: These rooms do not have a balcony).",
    amenities: [
      "Hot & Cold Air Conditioning",
      "Stylish Interiors",
      "Modern Amenities",
      "High-Speed Wi-Fi",
      "Smart LED TV",
      "Premium Bedding",
    ],
  },
  {
    name: "Family Suite",
    size: "750 sq ft",
    bed: "1 King + 2 Twin",
    view: "Mountain & Lawn View",
    price: RATES.ASHAPURI.FAMILY,
    occupancy: "4 Guests",
    description:
      "A spacious room ideal for families and groups seeking extra comfort and convenience. This room provides ample space for a relaxed stay in the heart of Manali.",
    amenities: [
      "Extra Spacious Living Area",
      "Hot & Cold Air Conditioning",
      "Ideal for Groups/Families",
      "Modern Washrooms",
      "High-Speed Wi-Fi",
      "Smart LED TV",
    ],
  },
];

export function AashapuriPage() {
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
            backgroundImage: `url("${IMAGES.ASHAPURI.HERO}")`,
          }}
        />
        {/* Icy Overlays */}
        <div className="absolute inset-0 bg-forest/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center w-full">
          <KineticText
            className="font-body text-xs sm:text-sm tracking-wide-xl uppercase mb-4"
            style={{ color: ACCENT }}
            delay={0.2}
          >
            Premium Mountain Retreat
          </KineticText>
          <KineticText
            className="font-display text-[32px] xs:text-4xl sm:text-5xl md:text-7xl font-semibold text-card mb-8 leading-tight text-shadow-premium"
            delay={0.4}
          >
            The Fyra Ashapuri <br />
            <span className="italic font-normal text-gold">Snow Inn.</span>
          </KineticText>
          <KineticText
            className="font-body text-base sm:text-lg text-white/90 mb-10 max-w-2xl mx-auto italic"
            delay={0.6}
          >
            "Experience the true essence of mountain hospitality in the heart of
            Manali."
          </KineticText>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 font-body text-sm tracking-wide text-forest hover:brightness-110 transition-smooth min-h-[52px] rounded-sm shadow-lg"
              style={{ backgroundColor: ACCENT }}
            >
              Book Your Stay <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("aashapuri-rooms")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-card/60 text-card font-body text-sm tracking-wide hover:bg-card/10 transition-smooth min-h-[52px] rounded-sm backdrop-blur-sm"
            >
              Explore Accommodation
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
                <span
                  className="font-body text-xs tracking-wide-xl uppercase"
                  style={{ color: ACCENT }}
                >
                  Peaceful Retreat
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-8 leading-tight">
                Breathtaking Beauty, <br />
                Exceptional Warmth.
              </h2>
              <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                Experience the perfect blend of comfort, elegance, and
                breathtaking mountain beauty at FYRA Ashapuri Snow Inn. Whether
                you are traveling with family, friends, or your loved one, our
                hotel offers a peaceful retreat with modern amenities and warm
                hospitality in the heart of Manali.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex flex-col">
                  <span className="font-display text-3xl font-bold text-foreground">
                    15
                  </span>
                  <span className="font-body text-[10px] uppercase tracking-widest text-muted-foreground">
                    Well-Appointed Rooms
                  </span>
                </div>
                <div className="h-10 w-px bg-border mx-4" />
                <span className="font-body text-xs text-muted-foreground italic">
                  Premium interiors & modern amenities.
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
                src={IMAGES.ASHAPURI.HERO}
                alt="Ashapuri Snow Inn Scenery"
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-1000"
              />
              <div className="absolute inset-0 border-[20px] border-white/5 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="bg-muted/30 spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
              World-Class Amenities
            </h2>
            <div
              className="h-1 w-20 mx-auto"
              style={{ backgroundColor: ACCENT }}
            />
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
                  <f.icon className="w-6 h-6" style={{ color: ACCENT }} />
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
      <section id="aashapuri-rooms" className="bg-background spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span
                className="font-body text-xs tracking-wide-xl uppercase mb-3 block"
                style={{ color: ACCENT }}
              >
                Luxury Accommodation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
                Rooms Crafted for Relaxation
              </h2>
            </div>
            <p className="font-body text-sm text-muted-foreground max-w-sm">
              Thoughtfully designed to provide maximum comfort and relaxation in
              an elegant mountain setting.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {ROOMS.map((room, i) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative bg-card border border-border shadow-card hover:shadow-elevated transition-smooth flex flex-col lg:flex-row overflow-hidden"
              >
                <div className="w-full lg:w-2/5 relative overflow-hidden h-64 lg:h-auto">
                  <img
                    src={
                      i === 0
                        ? IMAGES.ASHAPURI.ROOMS.SUPER_DELUXE
                        : i === 1
                          ? IMAGES.ASHAPURI.ROOMS.DELUXE
                          : IMAGES.ASHAPURI.ROOMS.FAMILY
                    }
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
                </div>
                <div className="w-full lg:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <h3
                      className="font-display text-2xl font-semibold text-foreground mb-2 group-hover:opacity-80 transition-smooth"
                      style={{ color: i === 0 ? ACCENT : "inherit" }}
                    >
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-card font-body text-[10px] uppercase tracking-widest hover:brightness-125 transition-smooth"
                      style={{ color: ACCENT }}
                    >
                      View Details <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Facilities - Lawn & Parking */}
      <section className="bg-muted/50 spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 sm:p-12 border border-border/50 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <Leaf className="w-8 h-8 text-gold mb-6" />
                <h3 className="font-display text-2xl font-semibold mb-4">
                  Beautiful Landscaped Lawn
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Relax in our lush green lawn, where you can enjoy morning tea,
                  evening gatherings, and the refreshing mountain atmosphere.
                </p>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-smooth">
                <Leaf className="w-24 h-24" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 sm:p-12 border border-border/50 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <Car className="w-8 h-8 text-gold mb-6" />
                <h3 className="font-display text-2xl font-semibold mb-4">
                  Secure Private Parking
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Travel with complete peace of mind with our dedicated private
                  parking facility, ensuring convenience and security for your
                  vehicle.
                </p>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-smooth">
                <Car className="w-24 h-24" />
              </div>
            </motion.div>
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
                Indulge in Flavors
              </h2>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 italic">
                "Indulge in a delightful culinary experience at our in-house
                Multi-Cuisine Restaurant, serving a wide range of Indian,
                Chinese, Continental, and local Himachali dishes prepared with
                fresh ingredients and exceptional care."
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Indian Specialties",
                  "Chinese Classics",
                  "Continental",
                  "Himachali Local",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <KineticText className="font-display text-3xl sm:text-4xl font-semibold">
              Why Choose FYRA Ashapuri Snow Inn?
            </KineticText>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Premium accommodation in Manali",
              "Balcony rooms with breathtaking views",
              "Exceptional hospitality by FYRA Group",
              "Delicious multi-cuisine dining",
              "Spacious family rooms",
              "Beautiful lawn and peaceful ambience",
              "Safe and secure private parking",
            ].map((text, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="font-body text-sm text-foreground/80 font-medium">
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
            style={{ backgroundImage: `url("${IMAGES.ASHAPURI.HERO}")` }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl mb-8 leading-tight"
            style={{ color: ACCENT }}
          >
            Your Perfect Mountain Getaway
          </h2>
          <p
            className="font-body text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ color: ACCENT }}
          >
            Whether you are planning a romantic holiday, family vacation, or a
            relaxing escape to the hills, FYRA Ashapuri Snow Inn offers
            everything you need for an unforgettable stay in Manali.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 font-body text-sm font-semibold tracking-widest text-forest hover:brightness-110 transition-smooth rounded-sm shadow-xl"
            style={{ backgroundColor: ACCENT }}
          >
            BOOK YOUR STAY TODAY <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
