import { c as createLucideIcon, j as jsxRuntimeExports, L as Link } from "./index-B49hhkqB.js";
import { m as motion } from "./proxy-vc_7AWZu.js";
import { M as Mountain } from "./mountain-CT4282_J.js";
import { A as ArrowRight } from "./arrow-right-NyNC9Fuo.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode);
const VALUES = [
  {
    icon: Mountain,
    title: "Himalayan Reverence",
    description: "We build with the mountain, not against it. Our architecture honours local Kath-Kuni traditions — stone, deodar cedar, and hand-cut slate sourced within 50km of each property."
  },
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Solar energy, rainwater harvesting, and zero-waste kitchens. We partner with Himachali farmers and artisans — because luxury that harms the land it celebrates is no luxury at all."
  },
  {
    icon: Heart,
    title: "Community Hospitality",
    description: "Over 80% of our staff are from local villages. Every Fyra property is a living part of its community — employing, training, and investing in the people of Manali."
  }
];
const MILESTONES = [
  {
    year: "2009",
    event: "Fyra Hotel opens on the Mall Road, Manali's first true luxury boutique."
  },
  {
    year: "2013",
    event: "Fyra Aashiyana launches in Old Manali — 8 heritage cottages in the pines."
  },
  {
    year: "2018",
    event: "Aashapuri Snow Line opens at 9,200 ft near Rohtang — our boldest venture."
  },
  {
    year: "2022",
    event: "Fyra Group receives India's leading sustainable hospitality certification."
  },
  {
    year: "2025",
    event: "We host our 50,000th guest. The Himalayas thank us with the best snowfall in a decade."
  }
];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative h-[55vh] sm:h-[60vh] flex items-center parallax-bg overflow-hidden",
        style: {
          backgroundImage: "url(/assets/generated/fyra-hero-landscape.dim_1920x1080.jpg)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-forest/55" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.6 },
                className: "font-body text-xs tracking-wide-xl text-gold uppercase mb-5",
                children: "About Fyra Group"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.1 },
                className: "font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-card leading-[1.15] mb-6",
                children: "A Legacy Written in Snow and Stone"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.6, delay: 0.3 },
                className: "font-body text-sm sm:text-base text-card/70 leading-relaxed",
                children: "Since 2009, Fyra Group has been redefining what luxury means in the Western Himalayas."
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background spacing-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -16 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs tracking-wide-xl text-gold uppercase mb-5", children: "Our Story" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-semibold text-foreground mb-6 gold-underline", children: "Born From a Love of the Mountains" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-4", children: "Fyra Group was founded in 2009 by Arjun and Priya Chauhan, two architects from Delhi who fell in love with Manali during a winter expedition and decided they wanted to share that feeling — not just the views, but the silence, the wood-smoke, the sense of arriving somewhere that feels both ancient and alive." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-4", children: "Their first property, Fyra Hotel, opened to immediate acclaim — not for spectacle, but for restraint. Clean lines, local materials, rooms designed to make the mountain the protagonist." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm sm:text-base text-muted-foreground leading-relaxed", children: "Fifteen years and three properties later, that founding principle remains unchanged: the Himalayas are the luxury. Our job is simply to get out of the way." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 16 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.1 },
          className: "relative aspect-video sm:aspect-[4/3] lg:aspect-auto lg:h-[440px] overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/aashiyana-hero.dim_1600x900.jpg",
                alt: "Fyra Group founders' vision — heritage cottage architecture",
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-16 h-1 bg-gold" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 spacing-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 sm:mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs tracking-wide-xl text-gold uppercase mb-4", children: "Our Values" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-semibold text-foreground", children: "What Guides Us" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8", children: VALUES.map((value, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: index * 0.12 },
          className: "bg-card border border-border shadow-refined p-6 sm:p-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(value.icon, { className: "w-6 h-6 text-gold mb-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground mb-4", children: value.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: value.description })
          ]
        },
        value.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background spacing-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 sm:mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs tracking-wide-xl text-gold uppercase mb-4", children: "Our Journey" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-semibold text-foreground", children: "Milestones" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[56px] top-0 bottom-0 w-px bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: MILESTONES.map((m, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -12 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: index * 0.1 },
            className: "flex gap-4 sm:gap-8 items-start",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold text-gold w-12 flex-shrink-0 pt-0.5 text-right", children: m.year }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 pl-5 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-1.5 w-2 h-2 rounded-full bg-gold -translate-x-1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed break-words", children: m.event })
              ] })
            ]
          },
          m.year
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-forest py-14 sm:py-20 text-center px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl text-gold mb-4", children: "Come Stay With Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-card/60 mb-8 max-w-sm mx-auto", children: "Every Fyra guest becomes part of the story. We'd love to write your chapter." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/contact",
          "data-ocid": "about-book-cta",
          className: "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gold text-forest font-body text-sm tracking-wide hover:bg-card transition-smooth min-h-[48px]",
          children: [
            "Plan Your Stay ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ]
        }
      )
    ] })
  ] });
}
export {
  AboutPage
};
