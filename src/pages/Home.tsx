import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { KineticText } from "../components/KineticText";
import { IMAGES } from "../constants/images";

const HERO_IMAGES = IMAGES.HOME.HERO_SLIDESHOW.map((src, i) => ({
  src,
  alt: `Fyra Group — Himalayan Luxury Experience ${i + 1}`,
}));

const SEASONAL_TAGLINES = [
  "FYRA – Where Hospitality Meets Heart.",
  "Where the Himalayas whisper peace",
  "Winter's silence, gold at every turn",
  "Cherry blossoms and crisp mountain air",
  "Cool summers above the clouds",
  "Autumn hues and golden stillness",
  "Find yourself in the heart of the mountains",
];

const PROPERTIES = [
  {
    name: "Fyra Hotel",
    tagline: "Modern Luxury Flagship",
    description:
      "Where mountain charm meets reliable comfort. Recently expanded to 23 rooms, our flagship property remains the heart of the FYRA experience in Manali.",
    href: "/properties/fyra-hotel",
    accent: "#C9A84C",
    location: "Prini, Manali",
    image: IMAGES.FYRA_HOTEL.HERO,
  },
  {
    name: "FYRA AASHIYANA THE GHAR",
    tagline: "The Ghar (Home Stay)",
    description:
      "Designed to feel like your own home in the mountains. Featuring 16 rooms, it combines traditional hospitality with premium modern amenities for a seamless stay.",
    href: "/properties/aashiyana",
    accent: "#D4933E",
    location: "Manali, Himachal Pradesh",
    image: IMAGES.AASHIYANA.AERIAL,
  },
  {
    name: "Fyra Ashapuri Snow Inn",
    tagline: "Advanced Luxury Resort",
    description:
      "Our most advanced property, built for climate-controlled comfort. Featuring Hot & Cold AC and top-tier facilities for a cozy stay even in the peak of winter.",
    href: "/properties/aashapuri-snow-inn",
    accent: "#C9A84C",
    location: "Manali, Himachal Pradesh",
    image: IMAGES.ASHAPURI.AERIAL,
  },
];

const TESTIMONIALS = [
  {
    quote: "I recently stayed at Fyra Hotel, Manali, and had an absolutely wonderful experience. The property is beautiful, the rooms are clean and comfortable, and the overall ambience is perfect for a relaxing holiday.",
    author: "Himanshu Jain",
    location: "Mumbai, India",
    property: "Fyra Hotel",
    rating: 5,
  },
  {
    quote: "Spacious, clean, and beautifully arranged rooms. But the best part was the view — it was absolutely breathtaking! The staff was friendly and always ready to help. Highly recommend!",
    author: "Taniya Kundu",
    location: "Kolkata, India",
    property: "Fyra Hotel",
    rating: 5,
  },
  {
    quote: "The place is excellent and location is close to all prominent places. Staff were too sweet and the service was quick. Food served was tasty and excellent 👌",
    author: "Suby Abraham",
    location: "Bangalore, India",
    property: "Fyra Hotel",
    rating: 5,
  },
];

export function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const taglineIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );
  const heroRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<number | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ── Parallax scroll ──────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current !== null) {
        cancelAnimationFrame(parallaxRef.current);
      }
      parallaxRef.current = requestAnimationFrame(() => {
        const heroEl = heroRef.current;
        if (!heroEl) return;
        const heroHeight = heroEl.offsetHeight;
        const scrollY = window.scrollY;
        // Only apply while hero is visible
        if (scrollY > heroHeight) return;
        const offset = scrollY * 0.4;
        const scale = 1 + scrollY * 0.0005;
        const blur = Math.min(scrollY * 0.05, 10);
        for (const el of slideRefs.current) {
          if (el) {
            el.style.transform = `translateY(${offset}px) scale(${scale})`;
            el.style.filter = `blur(${blur}px)`;
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (parallaxRef.current !== null) {
        cancelAnimationFrame(parallaxRef.current);
      }
    };
  }, []);

  // ── Slideshow autoplay ───────────────────────────────────────────────────
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 8000);
  }, []);

  useEffect(() => {
    if (!isHovered) startAutoPlay();
    else if (intervalRef.current) clearInterval(intervalRef.current);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoPlay, isHovered]);

  // ── Tagline rotation (4s, offset from 5s slideshow) ─────────────────────
  useEffect(() => {
    if (!isHovered) {
      taglineIntervalRef.current = setInterval(() => {
        setTaglineIndex((prev) => (prev + 1) % SEASONAL_TAGLINES.length);
      }, 4000);
    } else {
      if (taglineIntervalRef.current) clearInterval(taglineIntervalRef.current);
    }
    return () => {
      if (taglineIntervalRef.current) clearInterval(taglineIntervalRef.current);
    };
  }, [isHovered]);

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

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      goNext();
    }
    if (isRightSwipe) {
      goPrev();
    }
  };

  const scrollToProperties = () => {
    document
      .getElementById("properties")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Slideshow images */}
        {HERO_IMAGES.map((img, index) => (
          <div
            key={img.src}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            className={`absolute inset-0 bg-cover bg-center transition-opacity ease-in-out will-change-transform ${index === activeSlide ? "hero-exhale" : ""}`}
            style={{
              backgroundImage: `url(${img.src})`,
              opacity: index === activeSlide ? 1 : 0,
              transitionDuration: "1200ms",
              zIndex: index === activeSlide ? 1 : 0,
            }}
            role="img"
            aria-label={img.alt}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 hero-vignette" style={{ zIndex: 2 }} />

        {/* Hero content */}
        <div
          className="relative text-center px-4 sm:px-6 max-w-4xl mx-auto w-full"
          style={{ zIndex: 3 }}
        >
          <KineticText
            className="font-body text-xs tracking-wide-xl text-gold uppercase mb-4 sm:mb-6"
            delay={0.2}
          >
            Manali, Himachal Pradesh
          </KineticText>
          <KineticText
            className="font-display text-[26px] xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-card font-semibold leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 text-shadow-premium"
            delay={0.4}
          >
            Experience the Pinnacle
            <br />
            <em className="text-gold font-medium">of Himalayan Luxury.</em>
          </KineticText>

          {/* Rotating seasonal tagline */}
          <div
            className="h-8 flex items-center justify-center mb-5 sm:mb-7"
            aria-live="polite"
            aria-atomic="true"
            data-ocid="hero-seasonal-tagline"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="font-display text-sm sm:text-base md:text-lg italic"
                style={{
                  color: "#C9A84C",
                  textShadow: "0 1px 8px rgba(0,0,0,0.6)",
                  letterSpacing: "0.02em",
                }}
              >
                {SEASONAL_TAGLINES[taglineIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <KineticText
            className="font-body text-sm sm:text-base md:text-lg text-card max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 text-shadow-subtle"
            delay={0.6}
          >
            Discover Fyra Group's exclusive retreats in Manali. Unparalleled
            comfort, stunning landscapes, timeless hospitality.
          </KineticText>

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
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-6 gold-underline gold-underline-center"
          >
            The FYRA Promise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            From 13 rooms to a thriving multi-phase establishment, our mission
            remains the same: to provide a sanctuary where every stay feels like
            a milestone. Whether you are here for business or leisure, FYRA
            Group offers the perfect space to rest, recharge, and inspire.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/9] sm:h-56">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
        className="relative bg-cover bg-center py-16 sm:py-24"
        style={{
          backgroundImage: `url(${IMAGES.HOME.CTA_BACKGROUND})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.1) 100%)",
          }}
        />
        <div className="relative z-10 text-center px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl text-gold font-semibold mb-4"
            style={{
              textShadow:
                "0 2px 16px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            Your Himalayan Sanctuary Awaits
          </motion.h2>
          <p
            className="font-body text-sm text-gold mb-8 max-w-md mx-auto"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
          >
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
