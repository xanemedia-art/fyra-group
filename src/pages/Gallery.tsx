import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  Quote,
  Camera
} from "lucide-react";
import { IMAGES } from "../constants/images";

const CATEGORIES = ["All", "Fyra Hotel", "FYRA AASHIYANA THE GHAR", "Ashapuri", "Landscapes"];

const GUEST_STORIES = [
  {
    quote: "I recently stayed at Fyra Hotel, Manali, and had an absolutely wonderful experience. The property is beautiful, the rooms are clean and comfortable, and the overall ambience is perfect for a relaxing holiday.",
    author: "Himanshu Jain",
    location: "Mumbai, India",
    property: "Fyra Hotel",
  },
  {
    quote: "Spacious, clean, and beautifully arranged rooms. But the best part was the view — it was absolutely breathtaking! The staff was friendly and always ready to help. Highly recommend!",
    author: "Taniya Kundu",
    location: "Kolkata, India",
    property: "Fyra Hotel",
  },
  {
    quote: "The place is excellent and location is close to all prominent places. Staff were too sweet and the service was quick. Food served was tasty and excellent 👌",
    author: "Suby Abraham",
    location: "Bangalore, India",
    property: "Fyra Hotel",
  }
];

export function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof IMAGES.GALLERY[0] | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const filteredImages = filter === "All" 
    ? IMAGES.GALLERY 
    : IMAGES.GALLERY.filter(img => img.category === filter);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide(s => (s + 1) % GUEST_STORIES.length);
    }, 8000);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-background">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-forest/95 backdrop-blur-xl p-4 sm:p-8"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 text-gold hover:bg-gold/10 rounded-full transition-smooth"
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl"
              />
              <div className="mt-8 text-center">
                <span className="font-body text-xs tracking-wide-xl text-gold uppercase mb-2 block">
                  {selectedImage.category}
                </span>
                <h3 className="font-display text-2xl text-card font-medium italic">
                  "{selectedImage.alt}"
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 bg-muted/30 border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[url('/assets/hero/hero-hotel-aerial.webp')] bg-cover bg-center grayscale" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 bg-gold/5 border border-gold/10 rounded-full"
          >
            <Camera className="w-3.5 h-3.5 text-gold" />
            <span className="font-body text-[10px] tracking-wide-xl text-gold uppercase">Visual Chronicles</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-[32px] xs:text-4xl sm:text-5xl md:text-7xl font-semibold text-foreground mb-8 leading-tight"
          >
            The Himalayan <br />
            <span className="italic font-normal">Perspective.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed italic"
          >
            "A collection of moments where the raw power of the mountains meets 
            the refined touch of luxury hospitality."
          </motion.p>
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
                    layoutId="gallery-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => (
              <motion.div
                layout
                key={item.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer overflow-hidden bg-muted break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover group-hover:scale-105 transition-smooth duration-1000"
                  loading="lazy"
                />
                
                {/* Premium Hover Overlay */}
                <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-smooth duration-500 flex flex-col items-center justify-center p-8 text-center">
                  <div className="p-3 border border-gold/40 rounded-full mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-smooth duration-500">
                    <Maximize2 className="w-5 h-5 text-gold" />
                  </div>
                  <span className="font-body text-[10px] tracking-wide-xl text-gold uppercase mb-2 opacity-0 group-hover:opacity-100 transition-smooth delay-100">
                    {item.category}
                  </span>
                  <p className="font-display text-lg text-card italic opacity-0 group-hover:opacity-100 transition-smooth delay-200">
                    {item.alt}
                  </p>
                </div>

                {/* Subtle permanent tag */}
                <div className="absolute bottom-4 right-4 sm:opacity-0 group-hover:opacity-100 transition-smooth">
                   <div className="h-px w-8 bg-gold/50" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Testimonials - Editorial Style */}
      <section className="bg-muted py-24 sm:py-40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
           <div className="absolute inset-0 bg-[url('/assets/hero/hero-ashapuri-night.webp')] bg-cover bg-center" />
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <Quote className="w-12 h-12 text-gold/30 mx-auto mb-12" />
          
          <div className="relative h-64 sm:h-56">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl italic text-foreground leading-snug mb-10 max-w-4xl mx-auto">
                  "{GUEST_STORIES[currentSlide].quote}"
                </blockquote>
                
                <div className="flex flex-col items-center">
                  <div className="h-px w-12 bg-gold mb-6" />
                  <p className="font-body text-sm font-semibold text-foreground uppercase tracking-widest">
                    {GUEST_STORIES[currentSlide].author}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    {GUEST_STORIES[currentSlide].location} — <span className="text-gold/80">{GUEST_STORIES[currentSlide].property}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-16 sm:mt-24">
            {GUEST_STORIES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1 transition-all duration-500 rounded-full ${
                  currentSlide === i ? "w-12 bg-gold" : "w-2 bg-gold/20 hover:bg-gold/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-forest py-24 sm:py-32 relative text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl text-card mb-8">
            Begin Your Own <br />
            <span className="italic font-normal">Himalayan Story.</span>
          </h2>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-forest font-body text-sm font-semibold tracking-widest hover:brightness-110 transition-smooth rounded-sm shadow-xl"
            >
              BOOK YOUR STAY
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
