import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const HERO_IMAGES = [
  {
    src: "/assets/generated/fyra-hero-landscape.dim_1920x1080.jpg",
    alt: "Fyra Group — Manali Valley at sunrise",
  },
  {
    src: "/assets/generated/fyra-hotel-hero.dim_1600x900.jpg",
    alt: "Fyra Hotel — Modern Luxury Flagship",
  },
  {
    src: "/assets/generated/aashiyana-hero.dim_1600x900.jpg",
    alt: "Fyra Aashiyana — Boutique Heritage Villa",
  },
  {
    src: "/assets/generated/aashapuri-hero.dim_1600x900.jpg",
    alt: "Fyra Aashapuri Snow Line — High-Altitude Resort",
  },
  {
    src: "/assets/generated/fyra-valley-cta.dim_1600x900.jpg",
    alt: "Himalayan Valley — Fyra Group",
  },
];

const PROPERTIES = [
  {
    name: "Fyra Hotel",
    tagline: "Modern Luxury Flagship",
    description:
      "Where contemporary design meets Himalayan grandeur. Our flagship property offers 42 suites with panoramic valley views, an infinity pool, and a Michelin-calibre dining experience.",
    href: "/properties/fyra-hotel",
    accent: "#C9A84C",
    location: "Mall Road, Manali",
    image: "/assets/generated/fyra-hotel-hero.dim_1600x900.jpg",
  },
  {
    name: "Fyra Aashiyana",
    tagline: "Boutique Heritage Villa",
    description:
      "A sanctuary of intimacy and warmth. Eight private cottages nestled in pine forests, with stone fireplaces, handwoven textiles, and the scent of cedar in the mountain air.",
    href: "/properties/aashiyana",
    accent: "#D4933E",
    location: "Old Manali, Himachal Pradesh",
    image: "/assets/generated/aashiyana-hero.dim_1600x900.jpg",
  },
  {
    name: "Fyra Aashapuri Snow Line",
    tagline: "High-Altitude Adventure Resort",
    description:
      "For those who seek the edge of the world. Perched at 9,200 ft, this resort is the gateway to the Rohtang Pass, offering heli-skiing, ice walks, and star-gazing under obsidian skies.",
    href: "/properties/aashapuri-snow-line",
    accent: "#7EC8E3",
    location: "Near Rohtang Pass, Manali",
    image: "/assets/generated/aashapuri-hero.dim_1600x900.jpg",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Staying at Fyra Hotel was unlike anything I have experienced. The staff remembered our preferences from day one. The silence, the stars, the food — everything was extraordinary.",
    author: "Priya Mehta",
    location: "Mumbai, India",
    property: "Fyra Hotel",
    rating: 5,
  },
  {
    quote:
      "Aashiyana felt like a discovery. No crowds, just pine trees, crackling fireplaces and service so thoughtful it felt personal. We will return every winter.",
    author: "James & Elara Thornton",
    location: "London, UK",
    property: "Fyra Aashiyana",
    rating: 5,
  },
  {
    quote:
      "The Snow Line resort is extraordinary. Waking up to fresh snow on the Rohtang and having chai served to your window — this is what travel should feel like.",
    author: "Nanah Ramachandran",
    location: "Bangalore, India",
    property: "Aashapuri Snow Line",
    rating: 5,
  },
];

export function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  const goTo = (index: number) => {
    setActiveSlide(index);
    startAutoPlay();
  };

  const goPrev = () => {
    setActiveSlide(
      (prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length,
    );
    startAutoPlay();
  };

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    startAutoPlay();
  };

  const scrollToProperties = () => {
    document
      .getElementById("properties")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow images */}
        {HERO_IMAGES.map((img, index) => (
          <div
            key={img.src}
            className="absolute inset-0 bg-cover bg-center transition-opacity ease-in-out"
            style={{
              backgroundImage: `url(${img.src})`,
              opacity: index === activeSlide ? 1 : 0,
              transitionDuration: "800ms",
              zIndex: index === activeSlide ? 1 : 0,
            }}
            role="img"
            aria-label={img.alt}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-forest/50" style={{ zIndex: 2 }} />

        {/* Hero content */}
        <div
          className="relative text-center px-4 sm:px-6 max-w-4xl mx-auto w-full"
          style={{ zIndex: 3 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-wide-xl text-gold uppercase mb-4 sm:mb-6"
          >
            Manali, Himachal Pradesh
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-card font-semibold leading-[1.1] mb-5 sm:mb-8"
          >
            Experience the Pinnacle
            <br />
            <em className="text-gold font-medium">of Himalayan Luxury.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body text-sm sm:text-base md:text-lg text-card/75 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10"
          >
            Discover Fyra Group's exclusive retreats in Manali. Unparalleled
            comfort, stunning landscapes, timeless hospitality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              to="/properties"
              data-ocid="hero-explore-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-forest font-body text-sm tracking-wide hover:bg-card hover:text-forest transition-smooth"
            >
              Explore Properties
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              data-ocid="hero-our-story-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-card/40 text-card font-body text-sm tracking-wide hover:border-gold hover:text-gold transition-smooth"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Arrow navigation — 44px min touch targets */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          data-ocid="hero-slideshow-prev"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 text-card/60 hover:text-gold transition-smooth flex items-center justify-center w-11 h-11 border border-card/20 hover:border-gold/60 backdrop-blur-sm"
          style={{ zIndex: 4 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          data-ocid="hero-slideshow-next"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 text-card/60 hover:text-gold transition-smooth flex items-center justify-center w-11 h-11 border border-card/20 hover:border-gold/60 backdrop-blur-sm"
          style={{ zIndex: 4 }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dot indicators — finger-friendly tap targets */}
        <div
          className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-1"
          style={{ zIndex: 4 }}
          data-ocid="hero-slideshow-dots"
        >
          {HERO_IMAGES.map((img, index) => (
            <button
              key={img.src}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              data-ocid={`hero-dot-${index + 1}`}
              className="flex items-center justify-center p-2 transition-smooth"
            >
              <span
                className="block transition-smooth"
                style={{
                  width: index === activeSlide ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor:
                    index === activeSlide
                      ? "#C9A84C"
                      : "rgba(255,255,255,0.45)",
                  transitionDuration: "300ms",
                }}
              />
            </button>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          onClick={scrollToProperties}
          aria-label="Scroll to properties"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-card/50 hover:text-gold transition-smooth animate-bounce p-2"
          style={{ zIndex: 4 }}
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </section>

      {/* PHILOSOPHY INTRO */}
      <section className="bg-background spacing-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-wide-xl text-gold uppercase mb-5"
          >
            The Fyra Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-6 gold-underline gold-underline-center"
          >
            Where Stillness Becomes Luxury
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            For over a decade, Fyra Group has curated mountain sanctuaries in
            the Western Himalayas — where thoughtful design, local craft, and
            unhurried hospitality converge. We believe luxury is not noise, but
            profound, uninterrupted quiet.
          </motion.p>
        </div>
      </section>

      {/* PROPERTIES */}
      <section id="properties" className="bg-muted/30 spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-body text-xs tracking-wide-xl text-gold uppercase mb-4">
              Our Mountain Sanctuaries
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
              Three Distinct Escapes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {PROPERTIES.map((property, index) => (
              <motion.div
                key={property.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group bg-card shadow-card overflow-hidden hover:shadow-elevated transition-smooth"
                data-ocid={`property-card-${index + 1}`}
              >
                <div className="relative overflow-hidden aspect-[16/9] sm:h-56">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                    loading="lazy"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: property.accent }}
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p
                    className="font-body text-xs tracking-wide uppercase mb-2"
                    style={{ color: property.accent }}
                  >
                    {property.tagline}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {property.name}
                  </h3>
                  <p className="flex items-center gap-1 font-body text-xs text-muted-foreground mb-4">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    {property.location}
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {property.description}
                  </p>
                  <Link
                    to={property.href}
                    data-ocid={`property-explore-${index + 1}`}
                    className="inline-flex items-center gap-2 font-body text-xs tracking-wide border-b pb-0.5 transition-smooth hover:gap-3"
                    style={{
                      color: property.accent,
                      borderColor: property.accent,
                    }}
                  >
                    Explore
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GUEST STORIES */}
      <section className="bg-background spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-body text-xs tracking-wide-xl text-gold uppercase mb-4">
              Guest Stories
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
              Moments That Linger
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="bg-card border border-border shadow-refined p-6 sm:p-8"
                data-ocid={`testimonial-card-${index + 1}`}
              >
                <div className="flex gap-1 mb-5">
                  <p
                    className="text-gold text-sm tracking-widest"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {"★".repeat(t.rating)}
                  </p>
                </div>
                <blockquote className="font-display text-base italic text-foreground leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-border pt-5">
                  <p className="font-body text-sm font-medium text-foreground">
                    {t.author}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {t.location}
                  </p>
                  <p className="font-body text-xs text-gold mt-1">
                    {t.property}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section
        className="relative parallax-bg py-16 sm:py-24"
        style={{
          backgroundImage:
            "url(/assets/generated/fyra-valley-cta.dim_1600x900.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-forest/60" />
        <div className="relative z-10 text-center px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl text-card font-semibold mb-4"
          >
            Your Himalayan Sanctuary Awaits
          </motion.h2>
          <p className="font-body text-sm text-card/70 mb-8 max-w-md mx-auto">
            Speak with our concierge to craft a bespoke itinerary. Every stay, a
            story.
          </p>
          <Link
            to="/contact"
            data-ocid="home-final-cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-forest font-body text-sm tracking-wide hover:bg-card hover:text-forest transition-smooth"
          >
            Plan Your Stay
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
