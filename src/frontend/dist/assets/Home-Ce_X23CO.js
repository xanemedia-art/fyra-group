import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link, C as ChevronDown } from "./index-CGGQSEAl.js";
import { m as motion } from "./proxy-CwdrCzVW.js";
import { A as ArrowRight } from "./arrow-right-MXiKwPb1.js";
import { M as MapPin } from "./map-pin-Be9DzTnP.js";
const PROPERTIES = [
  {
    name: "Fyra Hotel",
    tagline: "Modern Luxury Flagship",
    description: "Where contemporary design meets Himalayan grandeur. Our flagship property offers 42 suites with panoramic valley views, an infinity pool, and a Michelin-calibre dining experience.",
    href: "/properties/fyra-hotel",
    accent: "#C9A84C",
    accentClass: "accent-gold",
    borderClass: "border-gold",
    location: "Mall Road, Manali",
    image: "/assets/generated/fyra-hotel-hero.dim_1600x900.jpg"
  },
  {
    name: "Fyra Aashiyana",
    tagline: "Boutique Heritage Villa",
    description: "A sanctuary of intimacy and warmth. Eight private cottages nestled in pine forests, with stone fireplaces, handwoven textiles, and the scent of cedar in the mountain air.",
    href: "/properties/aashiyana",
    accent: "#D4933E",
    accentClass: "accent-amber",
    borderClass: "border-amber",
    location: "Old Manali, Himachal Pradesh",
    image: "/assets/generated/aashiyana-hero.dim_1600x900.jpg"
  },
  {
    name: "Fyra Aashapuri Snow Line",
    tagline: "High-Altitude Adventure Resort",
    description: "For those who seek the edge of the world. Perched at 9,200 ft, this resort is the gateway to the Rohtang Pass, offering heli-skiing, ice walks, and star-gazing under obsidian skies.",
    href: "/properties/aashapuri-snow-line",
    accent: "#7EC8E3",
    accentClass: "accent-icy-blue",
    borderClass: "border-icy-blue",
    location: "Near Rohtang Pass, Manali",
    image: "/assets/generated/aashapuri-hero.dim_1600x900.jpg"
  }
];
const TESTIMONIALS = [
  {
    quote: "Staying at Fyra Hotel was unlike anything I have experienced. The staff remembered our preferences from day one. The silence, the stars, the food — everything was extraordinary.",
    author: "Priya Mehta",
    location: "Mumbai, India",
    property: "Fyra Hotel",
    rating: 5
  },
  {
    quote: "Aashiyana felt like a discovery. No crowds, just pine trees, crackling fireplaces and service so thoughtful it felt personal. We will return every winter.",
    author: "James & Elara Thornton",
    location: "London, UK",
    property: "Fyra Aashiyana",
    rating: 5
  },
  {
    quote: "The Snow Line resort is extraordinary. Waking up to fresh snow on the Rohtang and having chai served to your window — this is what travel should feel like.",
    author: "Nanah Ramachandran",
    location: "Bangalore, India",
    property: "Aashapuri Snow Line",
    rating: 5
  }
];
function HomePage() {
  const navigate = useNavigate();
  const [selector, setSelector] = reactExports.useState({
    property: "",
    checkin: "",
    checkout: ""
  });
  const scrollToProperties = () => {
    var _a;
    (_a = document.getElementById("properties")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  const handleSelectorSubmit = (e) => {
    e.preventDefault();
    navigate({ to: "/contact" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-screen flex items-center justify-center parallax-bg overflow-hidden",
        style: {
          backgroundImage: "url(/assets/generated/fyra-hero-landscape.dim_1920x1080.jpg)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-forest/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6 max-w-4xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                className: "font-body text-xs tracking-wide-xl text-gold uppercase mb-6",
                children: "Manali, Himachal Pradesh"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.15 },
                className: "font-display text-5xl md:text-6xl lg:text-7xl text-card font-semibold leading-[1.1] mb-8",
                children: [
                  "Experience the Pinnacle",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold font-medium", children: "of Himalayan Luxury." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.3 },
                className: "font-body text-base md:text-lg text-card/75 max-w-xl mx-auto leading-relaxed mb-8",
                children: "Discover Fyra Group's exclusive retreats in Manali. Unparalleled comfort, stunning landscapes, timeless hospitality."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.45 },
                className: "mb-10 max-w-2xl mx-auto",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "form",
                  {
                    onSubmit: handleSelectorSubmit,
                    "data-ocid": "hero-property-selector",
                    className: "bg-card/15 backdrop-blur-sm border border-card/20 p-5 flex flex-col sm:flex-row gap-3 items-end",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            htmlFor: "hero-property",
                            className: "block font-body text-[10px] tracking-wide-xl text-gold uppercase mb-1.5",
                            children: "Select Property"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "select",
                          {
                            id: "hero-property",
                            value: selector.property,
                            onChange: (e) => setSelector((s) => ({ ...s, property: e.target.value })),
                            "data-ocid": "hero-property-dropdown",
                            className: "w-full bg-card/20 border border-card/30 text-card font-body text-sm px-3 py-2.5 focus:outline-none focus:border-gold/60 transition-smooth placeholder:text-card/50",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", className: "bg-foreground text-card", children: "All Properties" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "option",
                                {
                                  value: "fyra-hotel",
                                  className: "bg-foreground text-card",
                                  children: "Fyra Hotel"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "aashiyana", className: "bg-foreground text-card", children: "Fyra Aashiyana" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "option",
                                {
                                  value: "aashapuri-snow-line",
                                  className: "bg-foreground text-card",
                                  children: "Fyra Aashapuri Snow Line"
                                }
                              )
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            htmlFor: "hero-checkin",
                            className: "block font-body text-[10px] tracking-wide-xl text-gold uppercase mb-1.5",
                            children: "Check-in"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "hero-checkin",
                            type: "date",
                            value: selector.checkin,
                            onChange: (e) => setSelector((s) => ({ ...s, checkin: e.target.value })),
                            "data-ocid": "hero-checkin-input",
                            className: "w-full bg-card/20 border border-card/30 text-card font-body text-sm px-3 py-2.5 focus:outline-none focus:border-gold/60 transition-smooth"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            htmlFor: "hero-checkout",
                            className: "block font-body text-[10px] tracking-wide-xl text-gold uppercase mb-1.5",
                            children: "Check-out"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "hero-checkout",
                            type: "date",
                            value: selector.checkout,
                            onChange: (e) => setSelector((s) => ({ ...s, checkout: e.target.value })),
                            "data-ocid": "hero-checkout-input",
                            className: "w-full bg-card/20 border border-card/30 text-card font-body text-sm px-3 py-2.5 focus:outline-none focus:border-gold/60 transition-smooth"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "submit",
                          "data-ocid": "hero-check-availability-btn",
                          className: "bg-gold text-forest font-body text-xs tracking-wide px-5 py-2.5 hover:bg-card hover:text-forest transition-smooth whitespace-nowrap flex-shrink-0",
                          children: "Check Availability"
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.6, delay: 0.6 },
                className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/properties",
                      "data-ocid": "hero-explore-cta",
                      className: "inline-flex items-center gap-2 px-8 py-4 bg-gold text-forest font-body text-sm tracking-wide hover:bg-card hover:text-forest transition-smooth",
                      children: [
                        "Explore Properties",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/about",
                      className: "inline-flex items-center gap-2 px-8 py-4 border border-card/40 text-card font-body text-sm tracking-wide hover:border-gold hover:text-gold transition-smooth",
                      children: "Our Story"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: scrollToProperties,
              "aria-label": "Scroll to properties",
              className: "absolute bottom-10 left-1/2 -translate-x-1/2 text-card/50 hover:text-gold transition-smooth animate-bounce",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-6 h-6" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background spacing-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 8 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "font-body text-xs tracking-wide-xl text-gold uppercase mb-5",
          children: "The Fyra Philosophy"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 15 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.1 },
          className: "font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 gold-underline gold-underline-center",
          children: "Where Stillness Becomes Luxury"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.25 },
          className: "font-body text-base text-muted-foreground leading-relaxed",
          children: "For over a decade, Fyra Group has curated mountain sanctuaries in the Western Himalayas — where thoughtful design, local craft, and unhurried hospitality converge. We believe luxury is not noise, but profound, uninterrupted quiet."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "properties", className: "bg-muted/30 spacing-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs tracking-wide-xl text-gold uppercase mb-4", children: "Our Mountain Sanctuaries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-semibold text-foreground", children: "Three Distinct Escapes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: PROPERTIES.map((property, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: index * 0.12 },
          className: "group bg-card shadow-card overflow-hidden hover:shadow-elevated transition-smooth",
          "data-ocid": `property-card-${index}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden h-56", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: property.image,
                  alt: property.name,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute bottom-0 left-0 right-0 h-1",
                  style: { backgroundColor: property.accent }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs tracking-wide uppercase mb-2",
                  style: { color: property.accent },
                  children: property.tagline
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground mb-1", children: property.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1 font-body text-xs text-muted-foreground mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
                property.location
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3", children: property.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: property.href,
                  "data-ocid": `property-explore-${index}`,
                  className: "inline-flex items-center gap-2 font-body text-xs tracking-wide border-b pb-0.5 transition-smooth hover:gap-3",
                  style: {
                    color: property.accent,
                    borderColor: property.accent
                  },
                  children: [
                    "Explore",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                  ]
                }
              )
            ] })
          ]
        },
        property.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background spacing-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs tracking-wide-xl text-gold uppercase mb-4", children: "Guest Stories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-semibold text-foreground", children: "Moments That Linger" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: TESTIMONIALS.map((t, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: index * 0.12 },
          className: "bg-card border border-border shadow-refined p-8",
          "data-ocid": `testimonial-card-${index}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-gold text-sm tracking-widest",
                "aria-label": `${t.rating} out of 5 stars`,
                children: "★".repeat(t.rating)
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-base italic text-foreground leading-relaxed mb-6", children: [
              '"',
              t.quote,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-medium text-foreground", children: t.author }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: t.location }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-gold mt-1", children: t.property })
            ] })
          ]
        },
        t.author
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative parallax-bg py-24",
        style: {
          backgroundImage: "url(/assets/generated/fyra-valley-cta.dim_1600x900.jpg)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-forest/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h2,
              {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.7 },
                className: "font-display text-3xl md:text-4xl text-card font-semibold mb-4",
                children: "Your Himalayan Sanctuary Awaits"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base text-card/70 mb-8 max-w-md mx-auto", children: "Speak with our concierge to craft a bespoke itinerary. Every stay, a story." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contact",
                "data-ocid": "home-final-cta",
                className: "inline-flex items-center gap-2 px-8 py-4 bg-gold text-forest font-body text-sm tracking-wide hover:bg-card hover:text-forest transition-smooth",
                children: [
                  "Plan Your Stay",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  HomePage
};
