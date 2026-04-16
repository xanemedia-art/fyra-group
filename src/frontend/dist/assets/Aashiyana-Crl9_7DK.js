import { c as createLucideIcon, j as jsxRuntimeExports, L as Link } from "./index-CGGQSEAl.js";
import { M as MapPin } from "./map-pin-Be9DzTnP.js";
import { m as motion } from "./proxy-CwdrCzVW.js";
import { A as ArrowRight } from "./arrow-right-MXiKwPb1.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  [
    "path",
    {
      d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
      key: "pwadti"
    }
  ],
  ["path", { d: "M6 2v2", key: "colzsn" }]
];
const Coffee = createLucideIcon("coffee", __iconNode$2);
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
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z", key: "1l6gj6" }],
  ["path", { d: "M7 16v6", key: "1a82de" }],
  ["path", { d: "M13 19v3", key: "13sx9i" }],
  [
    "path",
    {
      d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
      key: "1sj9kv"
    }
  ]
];
const Trees = createLucideIcon("trees", __iconNode);
const HIGHLIGHTS = [
  {
    icon: Flame,
    label: "Stone Fireplaces",
    description: "In every cottage suite"
  },
  {
    icon: Trees,
    label: "Pine Forest Setting",
    description: "Secluded in Old Manali"
  },
  {
    icon: Coffee,
    label: "Farm-to-Table Kitchen",
    description: "Seasonal Himachali cuisine"
  },
  {
    icon: MapPin,
    label: "Cultural Walks",
    description: "Guided village experiences"
  }
];
const COTTAGES = [
  {
    name: "Cedar Cottage",
    size: "520 sq ft",
    bed: "King",
    view: "Pine Forest Canopy",
    price: "₹22,000"
  },
  {
    name: "Orchard Retreat",
    size: "620 sq ft",
    bed: "King",
    view: "Apple Orchard",
    price: "₹26,000"
  },
  {
    name: "River Nest",
    size: "440 sq ft",
    bed: "Queen",
    view: "Mountain Stream",
    price: "₹16,000"
  }
];
function AashiyanaPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative h-[75vh] flex items-end parallax-bg overflow-hidden",
        style: {
          backgroundImage: "url(/assets/generated/aashiyana-hero.dim_1600x900.jpg)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1A2E1A]/80 via-[#1A2E1A]/20 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs tracking-wide-xl uppercase mb-3",
                style: { color: "#D4933E" },
                children: "Boutique Heritage Villa"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl font-semibold text-card mb-3", children: "Fyra Aashiyana" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 font-body text-sm text-card/70", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4", style: { color: "#D4933E" } }),
              "Old Manali Village, Himachal Pradesh"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 right-0 h-1",
              style: { backgroundColor: "#D4933E" }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background spacing-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs tracking-wide-xl uppercase mb-4",
                style: { color: "#D4933E" },
                children: "The Aashiyana Experience"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-semibold text-foreground mb-6", children: "A Heritage Villa in the Forest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base text-muted-foreground leading-relaxed mb-4", children: 'Aashiyana — meaning "home" in Hindi — lives up to its name. Nestled among ancient deodars in Old Manali, our eight private cottages are built in the Kath-Kuni vernacular style: stone and timber, lovingly restored with handcrafted Kullu textiles and local copper fixtures.' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-base text-muted-foreground leading-relaxed mb-8", children: "Wake to the scent of pine smoke. Take your breakfast on a private veranda watching apple orchards bloom. Return to a cedar-smoke fireplace and a glass of local elderflower wine." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.1 },
          className: "grid grid-cols-2 gap-4",
          children: HIGHLIGHTS.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-muted/40 border border-border p-5 hover:border-[#D4933E] transition-smooth",
              "data-ocid": `aashiyana-highlight-${i}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(h.icon, { className: "w-5 h-5 mb-3", style: { color: "#D4933E" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-medium text-foreground mb-1", children: h.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: h.description })
              ]
            },
            h.label
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 spacing-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-xs tracking-wide-xl uppercase mb-3",
            style: { color: "#D4933E" },
            children: "Accommodations"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-semibold text-foreground", children: "Private Cottages" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: COTTAGES.map((cottage, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.1 },
          className: "bg-card border border-border shadow-card p-6 hover:border-[#D4933E] transition-smooth",
          "data-ocid": `cottage-card-${i}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground mb-1", children: cottage.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground mb-4", children: [
              cottage.size,
              " • ",
              cottage.bed,
              " Bed"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "font-body text-xs mb-6 flex items-center gap-1.5",
                style: { color: "#D4933E" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
                  cottage.view
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: "from" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-semibold text-foreground", children: cottage.price }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: "per night" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  className: "font-body text-xs border-b pb-0.5 hover:opacity-70 transition-smooth",
                  style: { color: "#D4933E", borderColor: "#D4933E" },
                  children: "Reserve"
                }
              )
            ] })
          ]
        },
        cottage.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-forest py-20 text-center px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-4", style: { color: "#D4933E" }, children: "Reserve Your Cottage" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-card/60 mb-8 max-w-md mx-auto", children: "Contact our team to check cottage availability and seasonal packages." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/contact",
          "data-ocid": "aashiyana-book-cta",
          className: "inline-flex items-center gap-2 px-8 py-4 font-body text-sm tracking-wide text-forest hover:bg-card transition-smooth",
          style: { backgroundColor: "#D4933E" },
          children: [
            "Book Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ]
        }
      )
    ] })
  ] });
}
export {
  AashiyanaPage
};
