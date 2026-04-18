import { j as jsxRuntimeExports, L as Link } from "./index-B49hhkqB.js";
import { m as motion } from "./proxy-vc_7AWZu.js";
import { M as MapPin } from "./map-pin-CZJMnKnR.js";
import { A as ArrowRight } from "./arrow-right-NyNC9Fuo.js";
const PROPERTIES = [
  {
    name: "Fyra Hotel",
    tagline: "Modern Luxury Flagship",
    description: "Our signature property blends contemporary design with Himalayan soul. 42 curated suites, an infinity pool overlooking the Beas River, and an acclaimed fine-dining experience.",
    href: "/properties/fyra-hotel",
    accent: "#C9A84C",
    location: "Mall Road, Manali",
    image: "/assets/generated/fyra-hotel-hero.dim_1600x900.jpg",
    highlights: [
      "42 Suites & Villas",
      "Infinity Pool",
      "Spa & Wellness",
      "Fine Dining"
    ]
  },
  {
    name: "Fyra Aashiyana",
    tagline: "Boutique Heritage Villa",
    description: "Eight private cedar cottages in Old Manali's pine forest. Stone fireplaces, handwoven Kullu shawls, and a farm-to-table kitchen define the Aashiyana experience.",
    href: "/properties/aashiyana",
    accent: "#D4933E",
    location: "Old Manali Village",
    image: "/assets/generated/aashiyana-hero.dim_1600x900.jpg",
    highlights: [
      "8 Private Cottages",
      "Farm-to-Table Kitchen",
      "Forest Walks",
      "Cultural Experiences"
    ]
  },
  {
    name: "Fyra Aashapuri Snow Line",
    tagline: "High-Altitude Adventure Resort",
    description: "At 9,200 ft on the edge of Rohtang, the Snow Line is a base camp for the extraordinary. Heli-skiing, glacier treks, and nights under the Milky Way.",
    href: "/properties/aashapuri-snow-line",
    accent: "#7EC8E3",
    location: "Near Rohtang Pass",
    image: "/assets/generated/aashapuri-hero.dim_1600x900.jpg",
    highlights: [
      "Heli-skiing Access",
      "Glacier Treks",
      "Astronomy Deck",
      "Adventure Concierge"
    ]
  }
];
function PropertiesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 spacing-section border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "font-body text-xs tracking-wide-xl text-gold uppercase mb-4",
          children: "Our Properties"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          className: "font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4",
          children: "Three Mountain Sanctuaries"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.6, delay: 0.2 },
          className: "font-body text-sm sm:text-base text-muted-foreground leading-relaxed",
          children: "Each Fyra property is a distinct world — shaped by its landscape, its stories, and the people who make it come alive."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background spacing-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-14 sm:space-y-20", children: PROPERTIES.map((property, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.1 },
        className: `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`,
        "data-ocid": `property-row-${index}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden group aspect-video sm:aspect-[16/9] lg:aspect-auto lg:h-96", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: property.image,
                alt: property.name,
                className: "w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute bottom-0 left-0 w-16 h-1",
                style: { backgroundColor: property.accent }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs tracking-wide-xl uppercase mb-3",
                style: { color: property.accent },
                children: property.tagline
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-2", children: property.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 font-body text-xs text-muted-foreground mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 flex-shrink-0" }),
              property.location
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-6", children: property.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-2 mb-8", children: property.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "font-body text-xs text-muted-foreground flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-1 h-1 rounded-full flex-shrink-0",
                      style: { backgroundColor: property.accent }
                    }
                  ),
                  h
                ]
              },
              h
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: property.href,
                "data-ocid": `property-link-${index}`,
                className: "inline-flex items-center gap-2 self-start font-body text-sm tracking-wide border-b pb-0.5 transition-smooth hover:gap-3 min-h-[44px] items-end",
                style: {
                  color: property.accent,
                  borderColor: property.accent
                },
                children: [
                  "Explore ",
                  property.name,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            )
          ] })
        ]
      },
      property.name
    )) }) })
  ] });
}
export {
  PropertiesPage
};
