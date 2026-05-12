import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Leaf, Mountain, History, Target, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { KineticText } from "../components/KineticText";
import { useHeroParallax } from "../hooks/useHeroParallax";
import { IMAGES } from "../constants/images";

const VALUES = [
  {
    icon: Heart,
    title: "Excellence in Service",
    description:
      "We follow strong management-driven standards while keeping guest satisfaction at the heart of everything we do. Every interaction is thoughtfully designed to be smooth, responsive, and memorable.",
  },
  {
    icon: Leaf,
    title: "Modern Innovation",
    description:
      "We continuously upgrade our properties with the latest comforts — from advanced climate control systems to thoughtfully designed premium interiors — ensuring a seamless and contemporary stay experience.",
  },
  {
    icon: Mountain,
    title: "Authentic Experiences",
    description:
      "More than just a stay, we help you connect with the true essence of Manali — its natural beauty, local culture, and peaceful mountain lifestyle.",
  },
];

const MILESTONES = [
  {
    year: "2021",
    event:
      "The Beginning: We opened our doors with an intimate collection of 13 rooms, laying the foundation for our signature blend of comfort and style.",
  },
  {
    year: "2022",
    event:
      "Early Success: Following a warm reception, we quickly expanded by adding 10 new rooms, enhancing our ability to host travelers from around the globe.",
  },
  {
    year: "2024",
    event:
      "Strategic Growth: With a focus on elevated design, we integrated 7 premium rooms at FYRA Cottage, further diversifying our offerings.",
  },
  {
    year: "2025",
    event:
      "Major Expansion: In our most significant leap yet, we added 16 rooms at FYRA AASHIYANA THE GHAR, bringing new energy and modern amenities to the FYRA experience.",
  },
  {
    year: "2026",
    event:
      "Looking Forward: Continuing our momentum, we have added 15 additional rooms at FYRA Ashapuri Snow Inn, cementing our position as a leading name in hospitality.",
  },
];

export function AboutPage() {
  const { heroRef, imageRef } = useHeroParallax();

  return (
    <div className="w-full overflow-x-hidden bg-background text-foreground">
      {/* Cinematic Hero */}
      <section
        ref={heroRef}
        className="relative h-[65vh] sm:h-[75vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-forest/30 z-10" />
        <div
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center hero-exhale"
          style={{ backgroundImage: `url(${IMAGES.ABOUT.HERO})` }}
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <KineticText
            className="font-body text-xs tracking-wide-xl text-gold uppercase mb-6"
            delay={0.2}
          >
            About Fyra Group
          </KineticText>
          <KineticText
            className="font-display text-4xl sm:text-5xl md:text-7xl font-semibold text-card mb-8 leading-tight text-shadow-premium"
            delay={0.4}
          >
            A Legacy Written in <br />
            <span className="italic font-normal text-gold">Snow and Stone.</span>
          </KineticText>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-body text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed italic"
          >
            "Since 2009, Fyra Group has been redefining what luxury means in the
            Western Himalayas."
          </motion.p>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="py-24 sm:py-40 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
               <History className="w-4 h-4 text-gold" />
               <span className="font-body text-[10px] tracking-wide-xl text-gold uppercase">The FYRA Evolution</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-8 leading-tight">
              Elevating Himalayan <br />
              Hospitality.
            </h2>
            
            <div className="space-y-6">
              <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed">
                At FYRA Group, our story is one of relentless growth and a passion
                for redefining the guest experience. Founded in 2021, FYRA Group
                was born from a deep-rooted passion for travel and a vision to
                bring professional excellence to the heart of the Himalayas.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                We don't just provide rooms; we provide a sanctuary. Our rapid
                journey from a single boutique hotel to a diverse portfolio of
                properties reflects our commitment to quality, consistent growth,
                and the ultimate guest experience.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed italic border-l-2 border-gold/30 pl-6 py-1">
                From 13 rooms to a thriving multi-phase establishment, our mission
                remains the same: to provide a sanctuary where every stay feels
                like a milestone. Whether you are here for business or leisure,
                FYRA Group offers the perfect space to rest, recharge, and
                inspire.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="absolute -inset-4 border border-gold/10 -z-10" />
             <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-sm">
                <img
                  src={IMAGES.ABOUT.STORY}
                  alt="Fyra Group heritage architecture"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-smooth duration-1000"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/5 -z-10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Philosophy - The 3 Pillars */}
      <section className="bg-muted py-24 sm:py-40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="mb-20">
             <span className="font-body text-[10px] tracking-wide-xl text-gold uppercase mb-4 block">Our Core Pillars</span>
             <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">The FYRA Philosophy.</h2>
             <p className="font-body text-muted-foreground max-w-2xl mx-auto italic">
                "At FYRA Group, we believe in blending professional excellence with
                a personal touch—creating experiences that feel both refined and
                genuinely warm."
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-10 border border-border/50 shadow-refined flex flex-col items-center text-center group hover:border-gold/30 transition-smooth"
              >
                <div className="p-4 bg-muted rounded-full mb-8 group-hover:bg-gold/10 transition-smooth">
                  <value.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4 tracking-tight uppercase">{value.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <p className="mt-20 font-display text-xl text-gold italic max-w-2xl mx-auto leading-relaxed">
            "At FYRA, we don’t just host guests—we create experiences that stay
            with you long after your journey ends."
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 sm:py-40 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
             <div className="aspect-square overflow-hidden shadow-2xl rounded-sm">
                <img
                  src={IMAGES.ABOUT.FOUNDER_BG}
                  alt="Mountain landscape"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-smooth duration-1000"
                />
             </div>
             <div className="absolute -top-12 -left-12 p-8 bg-forest text-gold shadow-2xl rounded-sm z-10 hidden sm:block">
                <Target className="w-10 h-10 mb-4" />
                <span className="font-body text-[10px] tracking-wide-xl uppercase">10 Years Corp Sales</span>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
             <span className="font-body text-[10px] tracking-wide-xl text-gold uppercase mb-6 block">Meet Our Founder</span>
             <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 leading-tight">
               The Visionary Behind <br />
               <span className="italic font-normal">FYRA Group.</span>
             </h2>
             
             <div className="space-y-6 mb-12">
               <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed">
                 A Management Graduate with sharp business acumen, our founder
                 spent 10 years navigating the high-pressure world of Corporate
                 Sales. While a corporate career brought great success, their heart
                 always belonged to the mountains and the spirit of exploration.
               </p>
               <p className="font-body text-base text-muted-foreground leading-relaxed">
                 Driven by a deep-rooted passion for traveling and an
                 entrepreneurial fire, our founder decided to bridge the gap
                 between professional excellence and soulful hospitality.
               </p>
             </div>

             <div className="relative p-10 bg-muted border-l-4 border-gold shadow-sm">
                <ShieldCheck className="absolute top-4 right-4 w-6 h-6 text-gold opacity-20" />
                <p className="font-display text-xl sm:text-2xl italic text-foreground leading-relaxed">
                  "For us, FYRA isn’t just a business; it’s a commitment to
                  providing the same warmth and comfort that every traveler looks
                  for during their journey."
                </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="bg-background py-24 sm:py-40 relative overflow-hidden border-t border-border">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
           <div className="absolute inset-0 bg-[url('/assets/hero/hero-hotel-aerial.webp')] bg-cover bg-center grayscale" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
             <span className="font-body text-[10px] tracking-wide-xl text-gold uppercase mb-4 block">Our Journey</span>
             <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground">Milestones.</h2>
             <div className="h-px w-20 bg-gold mx-auto mt-6" />
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />
            
            <div className="space-y-24">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-row md:flex-row items-center gap-8 md:gap-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 text-left ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                     <span className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gold/10 mb-2 md:mb-4 block leading-none">{m.year}</span>
                     <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm mx-0 md:mx-0 inline-block">
                        {m.event}
                     </p>
                  </div>
                  <div className="w-8 h-8 md:w-6 md:h-6 bg-background rounded-full border-2 border-gold shadow-[0_0_20px_rgba(201,168,76,0.3)] z-10 relative flex-shrink-0">
                     <div className="absolute inset-1.5 md:inset-1 bg-gold rounded-full" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-background py-24 sm:py-32 text-center px-4 overflow-hidden relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-8 leading-tight">
            Come Stay With Us. <br />
            <span className="italic font-normal">Write Your Chapter.</span>
          </h2>
          <p className="font-body text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed">
            Every Fyra guest becomes part of the story. We'd love to write your
            chapter.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-gold text-forest font-body text-sm font-bold tracking-widest hover:brightness-110 transition-smooth rounded-sm shadow-xl"
            >
              PLAN YOUR STAY <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -z-10" />
      </section>
    </div>
  );
}
