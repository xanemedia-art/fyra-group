import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const ACTIVITIES = [
  {
    id: "paragliding",
    title: "Paragliding Over Solang Valley",
    category: "Adventure",
    duration: "2–3 hours",
    description:
      "Soar above the Beas River and snow-capped ridgelines with our certified paragliding partners. A transcendent perspective on the valley that defines Manali.",
    image: "/assets/generated/fyra-hotel-hero.dim_1600x900.jpg",
  },
  {
    id: "apple-orchard",
    title: "Apple Orchard Walk & Picnic",
    category: "Lifestyle",
    duration: "3–4 hours",
    description:
      "Walk through terraced apple orchards with a Fyra naturalist guide, followed by a curated picnic in a forest clearing with artisanal provisions and local wine.",
    image: "/assets/generated/aashiyana-hero.dim_1600x900.jpg",
  },
  {
    id: "village-walk",
    title: "Old Manali Village Heritage Walk",
    category: "Culture",
    duration: "2 hours",
    description:
      "A guided walk through the ancient lanes of Old Manali: Hidimba temple, local weaving cooperatives, spice markets and the stories of a mountain town.",
    image: "/assets/generated/fyra-hero-landscape.dim_1920x1080.jpg",
  },
  {
    id: "star-gazing",
    title: "High-Altitude Stargazing",
    category: "Astronomy",
    duration: "Evening, 2 hours",
    description:
      "At 9,200 ft, away from light pollution, the Himalayan night sky is extraordinary. A resident astronomer guides you through constellations, planets and stories written in stars.",
    image: "/assets/generated/aashapuri-hero.dim_1600x900.jpg",
  },
  {
    id: "river-rafting",
    title: "Beas River White Water Rafting",
    category: "Adventure",
    duration: "Half day",
    description:
      "Navigate Grade II–IV rapids on the Beas River with certified guides and premium equipment. Suitable for beginners and experienced rafters alike.",
    image: "/assets/generated/fyra-valley-cta.dim_1600x900.jpg",
  },
  {
    id: "wellness-walk",
    title: "Forest Bathing & Meditation",
    category: "Wellness",
    duration: "1.5 hours",
    description:
      "A guided Shinrin-yoku (forest bathing) session in the ancient deodar cedar forests above Manali. A practice of mindful presence rooted in Japanese tradition.",
    image: "/assets/generated/aashiyana-hero.dim_1600x900.jpg",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Adventure: "#C9A84C",
  Lifestyle: "#D4933E",
  Culture: "#C9A84C",
  Astronomy: "#7EC8E3",
  Wellness: "#D4933E",
};

export function ActivitiesPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Header */}
      <section className="bg-muted/30 spacing-section border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs tracking-wide-xl text-gold uppercase mb-4"
          >
            Curated Experiences
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4"
          >
            Activities &amp; Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            From exhilarating mountain adventures to quiet cultural walks, Fyra
            Group curates experiences that make the Himalayas personal.
          </motion.p>
        </div>
      </section>

      {/* Activity Grid */}
      <section className="bg-background spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ACTIVITIES.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-card border border-border shadow-card overflow-hidden hover:shadow-elevated transition-smooth"
                data-ocid={`activity-card-${index}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                    loading="lazy"
                  />
                  <div
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 font-body text-xs tracking-wide text-forest"
                    style={{
                      backgroundColor:
                        CATEGORY_COLORS[activity.category] || "#C9A84C",
                    }}
                  >
                    {activity.category}
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="font-body text-xs text-muted-foreground mb-2">
                    {activity.duration}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 leading-tight">
                    {activity.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                    {activity.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-body text-xs tracking-wide text-gold border-b border-gold pb-0.5 hover:gap-3 transition-smooth min-h-[44px] sm:min-h-0"
                  >
                    Enquire <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
