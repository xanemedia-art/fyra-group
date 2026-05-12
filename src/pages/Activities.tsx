import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Clock, Star, Compass } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { KineticText } from "../components/KineticText";
import { IMAGES } from "../constants/images";
import { useHeroParallax } from "../hooks/useHeroParallax";

const CATEGORIES = ["All", "Adventure", "Culture", "Wellness", "Nature"];

const ACTIVITIES = [
  {
    id: "trekking",
    title: "Beas Kund Trek",
    category: "Nature",
    duration: "Full Day",
    description: "Journey to the source of the Beas River. A moderately challenging trek through alpine meadows with panoramic views of the Pir Panjal range.",
    image: IMAGES.ACTIVITIES.TREKKING,
    rating: 4.9,
  },
  {
    id: "yoga",
    title: "Sunrise Yoga & Meditation",
    category: "Wellness",
    duration: "1.5 Hours",
    description: "Begin your day with mindfulness. A guided session on our terrace overlooking the snow-capped peaks, led by expert practitioners.",
    image: IMAGES.ACTIVITIES.WELLNESS,
    rating: 5.0,
  },
  {
    id: "paragliding",
    title: "Tandem Paragliding",
    category: "Adventure",
    duration: "2 Hours",
    description: "Soar above the Solang Valley. Experience the ultimate adrenaline rush with a bird's-eye view of the Himalayan landscape.",
    image: IMAGES.ACTIVITIES.ADVENTURE,
    rating: 4.8,
  },
  {
    id: "village-walk",
    title: "Heritage Village Walk",
    category: "Culture",
    duration: "3 Hours",
    description: "Explore the ancient architecture and local traditions of Prini village. A journey through time, culture, and Himalayan lifestyle.",
    image: IMAGES.ACTIVITIES.CULTURE,
    rating: 4.7,
  },
  {
    id: "stargazing",
    title: "Night Sky Observation",
    category: "Nature",
    duration: "Evening",
    description: "At 9,000 ft, the stars are closer than ever. A guided astronomical session using professional telescopes away from city lights.",
    image: IMAGES.ACTIVITIES.STARGAZING,
    rating: 4.9,
  },
  {
    id: "spa",
    title: "Alpine Spa Rituals",
    category: "Wellness",
    duration: "Flexible",
    description: "Indulge in treatments inspired by local herbs and traditions. Our spa rituals are designed to rejuvenate the body and soul.",
    image: IMAGES.ACTIVITIES.SPA,
    rating: 5.0,
  }
];

export function ActivitiesPage() {
  const { heroRef, imageRef } = useHeroParallax();
  const [filter, setFilter] = useState("All");

  const filteredActivities = filter === "All" 
    ? ACTIVITIES 
    : ACTIVITIES.filter(a => a.category === filter);

  return (
    <div className="w-full overflow-x-hidden bg-background">
      {/* Cinematic Hero */}
      <section
        ref={heroRef}
        className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-forest/30 z-10" />
        <div
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center hero-exhale"
          style={{ backgroundImage: `url("${IMAGES.ACTIVITIES.HERO}")` }}
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <KineticText
            className="font-body text-xs tracking-wide-xl text-gold uppercase mb-6"
            delay={0.2}
          >
            Curated Experiences
          </KineticText>
          <KineticText
            className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-card mb-8 leading-tight text-shadow-premium"
            delay={0.4}
          >
            Beyond the <br />
            <span className="italic font-normal">Threshold.</span>
          </KineticText>
          <div className="w-20 h-1 bg-gold mx-auto opacity-50" />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-border/50 py-6">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex justify-center items-center gap-4 sm:gap-8 min-w-max mx-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative font-body text-xs sm:text-sm tracking-wide-xl uppercase py-2 transition-smooth ${
                  filter === cat ? "text-gold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div
                    layoutId="activities-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredActivities.map((activity, index) => (
              <motion.div
                layout
                key={activity.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-1000"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-[10px] tracking-wide-xl text-gold uppercase border border-gold/10">
                      {activity.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-forest/80 backdrop-blur-sm px-2 py-1 text-[10px] text-card">
                     <Star className="w-3 h-3 text-gold fill-gold" />
                     {activity.rating}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4 text-muted-foreground/60 text-[10px] tracking-widest uppercase">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {activity.duration}
                    </div>
                    <div className="h-3 w-px bg-border" />
                    <div className="flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" />
                      Manali
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4 group-hover:text-gold transition-smooth">
                    {activity.title}
                  </h3>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                    {activity.description}
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-body text-xs font-bold tracking-widest text-foreground hover:text-gold transition-smooth border-t border-border/50 pt-6"
                  >
                    PLAN THIS EXPERIENCE
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Bespoke Experiences CTA */}
      <section className="bg-muted py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
           <div className="absolute inset-0 bg-[url('/assets/hero/hero-hotel-aerial.webp')] bg-cover bg-center" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center lg:text-left lg:flex lg:items-center lg:gap-20">
          <div className="flex-1 mb-10 lg:mb-0">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              A Bespoke <br />
              <span className="italic font-normal">Himalayan Journey.</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed max-w-xl">
              Don't see exactly what you're looking for? Our concierge specializes 
              in crafting custom itineraries tailored to your specific interests, 
              from private heli-tours to secluded riverside picnics.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-forest text-gold font-body text-sm font-semibold tracking-widest hover:brightness-110 transition-smooth rounded-sm shadow-xl"
            >
              REQUEST CUSTOM ITINERARY
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
