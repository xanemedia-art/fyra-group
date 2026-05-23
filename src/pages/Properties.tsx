import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Sparkles, Wind, Home, Hotel } from "lucide-react";
import { motion } from "motion/react";
import { KineticText } from "../components/KineticText";
import { IMAGES } from "../constants/images";
import { useHeroParallax } from "../hooks/useHeroParallax";

const PROPERTIES = [
  {
    name: "Fyra Hotel",
    tagline: "Modern Luxury Flagship",
    description: "Our flagship property offers a perfect blend of mountain charm and reliable comfort. Recently expanded to 23 rooms, it remains the heart of the FYRA experience in Manali.",
    href: "/properties/fyra-hotel",
    accent: "#C9A84C",
    location: "Prini, Manali",
    image: IMAGES.FYRA_HOTEL.HERO,
    icon: Hotel,
    highlights: ["23 Premium Rooms", "Mountain Charm", "Reliable Comfort", "Flagship Service"],
  },
  {
    name: "FYRA AASHIYANA THE GHAR",
    tagline: "The Ghar (Home Stay)",
    description: "True to its name, 'The Ghar' is designed to feel like your own home. It combines traditional hospitality with premium modern amenities for a seamless stay experience.",
    href: "/properties/aashiyana",
    accent: "#D4933E",
    location: "Manali",
    image: IMAGES.AASHIYANA.HERO,
    icon: Home,
    highlights: ["16 Homely Rooms", "Traditional Hospitality", "Modern Amenities", "Intimate Setting"],
  },
  {
    name: "Fyra Ashapuri Snow Inn",
    tagline: "Climate-Controlled Comfort",
    description: "Our most advanced property, built for ultimate luxury. Featuring Hot & Cold AC and top-tier facilities, ensuring a cozy stay even in the peak of Himalayan winter.",
    href: "/properties/aashapuri-snow-inn",
    accent: "#C9A84C",
    location: "Manali",
    image: IMAGES.ASHAPURI.AERIAL,
    icon: Wind,
    highlights: ["15 Luxury Rooms", "Hot & Cold AC", "Top-Tier Facilities", "Winter Sanctuary"],
  },
];

export function PropertiesPage() {
  const { heroRef, imageRef } = useHeroParallax();

  return (
    <div className="w-full overflow-x-hidden bg-background">
      {/* Cinematic Hero */}
      <section
        ref={heroRef}
        className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-forest/20 z-10" />
        <div
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center hero-exhale"
          style={{ backgroundImage: `url("${IMAGES.FYRA_HOTEL.AERIAL}")` }}
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <KineticText
            className="font-body text-xs tracking-wide-xl text-gold uppercase mb-6"
            delay={0.2}
          >
            The Collection
          </KineticText>
          <KineticText
            className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-card mb-8 leading-tight text-shadow-premium"
            delay={0.4}
          >
            Our Mountain <br />
            <span className="italic font-normal">Sanctuaries.</span>
          </KineticText>
          <div className="w-20 h-1 bg-gold mx-auto opacity-50" />
        </div>
      </section>

      {/* Property Showcase */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="space-y-24 sm:space-y-40">
          {PROPERTIES.map((property, index) => (
            <motion.div
              key={property.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-24 items-center`}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div 
                  className="absolute -inset-4 border border-gold/10 -z-10 group-hover:inset-0 transition-all duration-700" 
                  style={{ borderColor: `${property.accent}20` }}
                />
                <div className="relative aspect-[4/3] overflow-hidden shadow-2xl rounded-sm">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-1000"
                  />
                  <div className="absolute inset-0 bg-forest/5 mix-blend-multiply" />
                  
                  {/* Floating Icon Tag */}
                  <div className="absolute top-8 left-8 p-4 bg-background/90 backdrop-blur-md shadow-xl rounded-sm">
                    <property.icon className="w-6 h-6" style={{ color: property.accent }} />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                <div className="flex items-center gap-3 mb-6">
                   <div className="h-px w-8" style={{ backgroundColor: property.accent }} />
                   <span className="font-body text-[10px] tracking-wide-xl uppercase" style={{ color: property.accent }}>
                     {property.tagline}
                   </span>
                </div>
                
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4">
                  {property.name}
                </h2>
                
                <div className="flex items-center gap-2 mb-8 text-muted-foreground/60">
                   <MapPin className="w-4 h-4" />
                   <span className="font-body text-xs uppercase tracking-widest">{property.location}</span>
                </div>

                <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 italic">
                  "{property.description}"
                </p>

                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-12 w-full">
                   {property.highlights.map((h, i) => (
                     <div key={h} className="flex items-center gap-3">
                        <Sparkles className="w-3.5 h-3.5" style={{ color: property.accent }} />
                        <span className="font-body text-xs font-medium text-foreground/80 tracking-wide uppercase">
                          {h}
                        </span>
                     </div>
                   ))}
                </div>

                <Link
                  to={property.href}
                  className="group inline-flex items-center gap-4 px-8 py-4 border border-foreground/10 hover:border-foreground transition-smooth"
                >
                  <span className="font-body text-sm font-semibold tracking-widest">
                    EXPLORE THE RETREAT
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Brand CTA */}
      <section className="bg-muted py-24 sm:py-32 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <KineticText className="font-display text-3xl sm:text-4xl md:text-5xl mb-8 pb-4 leading-tight">
            Curating Moments, <br />
            <span className="italic font-normal">Defining Luxury.</span>
          </KineticText>
          <p className="font-body text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Each Fyra property is a distinct world — shaped by its landscape, 
            its stories, and the people who make it come alive.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-forest text-gold font-body text-sm font-semibold tracking-widest hover:brightness-110 transition-smooth rounded-sm shadow-xl"
          >
            SPEAK WITH A CONCIERGE
          </Link>
        </div>
      </section>
    </div>
  );
}
