import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Leaf, Mountain } from "lucide-react";
import { motion } from "motion/react";

const VALUES = [
  {
    icon: Mountain,
    title: "Himalayan Reverence",
    description:
      "We build with the mountain, not against it. Our architecture honours local Kath-Kuni traditions — stone, deodar cedar, and hand-cut slate sourced within 50km of each property.",
  },
  {
    icon: Leaf,
    title: "Sustainability First",
    description:
      "Solar energy, rainwater harvesting, and zero-waste kitchens. We partner with Himachali farmers and artisans — because luxury that harms the land it celebrates is no luxury at all.",
  },
  {
    icon: Heart,
    title: "Community Hospitality",
    description:
      "Over 80% of our staff are from local villages. Every Fyra property is a living part of its community — employing, training, and investing in the people of Manali.",
  },
];

const MILESTONES = [
  {
    year: "2009",
    event:
      "Fyra Hotel opens on the Mall Road, Manali's first true luxury boutique.",
  },
  {
    year: "2013",
    event:
      "Fyra Aashiyana launches in Old Manali — 8 heritage cottages in the pines.",
  },
  {
    year: "2018",
    event:
      "Aashapuri Snow Line opens at 9,200 ft near Rohtang — our boldest venture.",
  },
  {
    year: "2022",
    event:
      "Fyra Group receives India's leading sustainable hospitality certification.",
  },
  {
    year: "2025",
    event:
      "We host our 50,000th guest. The Himalayas thank us with the best snowfall in a decade.",
  },
];

export function AboutPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section
        className="relative h-[55vh] sm:h-[60vh] flex items-center parallax-bg overflow-hidden"
        style={{
          backgroundImage:
            "url(/assets/generated/fyra-hero-landscape.dim_1920x1080.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-forest/55" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-wide-xl text-gold uppercase mb-5"
          >
            About Fyra Group
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-card leading-[1.15] mb-6"
          >
            A Legacy Written in Snow and Stone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-sm sm:text-base text-card/70 leading-relaxed"
          >
            Since 2009, Fyra Group has been redefining what luxury means in the
            Western Himalayas.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-xs tracking-wide-xl text-gold uppercase mb-5">
              Our Story
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-6 gold-underline">
              Born From a Love of the Mountains
            </h2>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Fyra Group was founded in 2009 by Arjun and Priya Chauhan, two
              architects from Delhi who fell in love with Manali during a winter
              expedition and decided they wanted to share that feeling — not
              just the views, but the silence, the wood-smoke, the sense of
              arriving somewhere that feels both ancient and alive.
            </p>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Their first property, Fyra Hotel, opened to immediate acclaim —
              not for spectacle, but for restraint. Clean lines, local
              materials, rooms designed to make the mountain the protagonist.
            </p>
            <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
              Fifteen years and three properties later, that founding principle
              remains unchanged: the Himalayas are the luxury. Our job is simply
              to get out of the way.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative aspect-video sm:aspect-[4/3] lg:aspect-auto lg:h-[440px] overflow-hidden"
          >
            <img
              src="/assets/generated/aashiyana-hero.dim_1600x900.jpg"
              alt="Fyra Group founders' vision — heritage cottage architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-gold" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-body text-xs tracking-wide-xl text-gold uppercase mb-4">
              Our Values
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
              What Guides Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="bg-card border border-border shadow-refined p-6 sm:p-8"
              >
                <value.icon className="w-6 h-6 text-gold mb-5" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background spacing-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <p className="font-body text-xs tracking-wide-xl text-gold uppercase mb-4">
              Our Journey
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
              Milestones
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line — positioned after the year label + gap */}
            <div className="absolute left-[56px] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {MILESTONES.map((m, index) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 sm:gap-8 items-start"
                >
                  <span className="font-display text-sm font-semibold text-gold w-12 flex-shrink-0 pt-0.5 text-right">
                    {m.year}
                  </span>
                  <div className="relative flex-1 pl-5 min-w-0">
                    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-gold -translate-x-1" />
                    <p className="font-body text-sm text-muted-foreground leading-relaxed break-words">
                      {m.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-14 sm:py-20 text-center px-4 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl text-gold mb-4">
          Come Stay With Us
        </h2>
        <p className="font-body text-sm text-card/60 mb-8 max-w-sm mx-auto">
          Every Fyra guest becomes part of the story. We'd love to write your
          chapter.
        </p>
        <Link
          to="/contact"
          data-ocid="about-book-cta"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gold text-forest font-body text-sm tracking-wide hover:bg-card transition-smooth min-h-[48px]"
        >
          Plan Your Stay <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
