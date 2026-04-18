import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-B49hhkqB.js";
import { R as RoomModal } from "./RoomModal-D-oHxDie.js";
import { M as MapPin } from "./map-pin-CZJMnKnR.js";
import { A as ArrowRight } from "./arrow-right-NyNC9Fuo.js";
import { m as motion } from "./proxy-vc_7AWZu.js";
import "./index-B2CDuzxs.js";
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
const ACCENT = "#D4933E";
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
const ROOMS = [
  {
    name: "Deluxe Room",
    size: "460 sq ft",
    bed: "King",
    view: "Pine Forest Canopy",
    price: "₹13,000",
    occupancy: "2 Guests",
    description: "Surrounded by ancient deodars, the Aashiyana Deluxe Room is a sanctuary built in the Kath-Kuni tradition — stone walls, hand-hewn timber beams, and hand-woven Kullu textiles layered over plush bedding. A private veranda overlooks the pine canopy, where birdsong replaces alarm clocks.",
    amenities: [
      "Stone Fireplace",
      "Air Conditioning",
      "42″ Flat Screen TV",
      "Minibar & Artisanal Tea Collection",
      "In-Room Safe",
      "Complimentary Himachali Breakfast",
      "High-Speed WiFi",
      "Rain Shower & Deep Soaking Tub",
      "Locally Crafted Toiletries",
      "Private Forest Veranda"
    ]
  },
  {
    name: "Family Suite",
    size: "850 sq ft",
    bed: "1 King + 2 Twin",
    view: "Apple Orchard & Valley",
    price: "₹19,000",
    occupancy: "4 Guests",
    description: "The Family Suite at Aashiyana is a two-bedroom cottage wrapped in orchard views — a master King bedroom with stone fireplace and two cozy twin beds in a connected children's room. Families gather in the shared living nook, where a private kitchen garden supplies the morning breakfast.",
    amenities: [
      "Two Stone Fireplaces",
      "Air Conditioning",
      "Two Flat Screen TVs",
      "Family Minibar & Snack Basket",
      "In-Room Safe",
      "Complimentary Breakfast for 4",
      "High-Speed WiFi",
      "Dual Bathrooms with Rain Showers",
      "Premium Toiletries",
      "Private Orchard Terrace"
    ]
  },
  {
    name: "Super Deluxe",
    size: "600 sq ft",
    bed: "Super King",
    view: "Mountain Stream & Deodars",
    price: "₹16,500",
    occupancy: "2–3 Guests",
    description: "The Aashiyana Super Deluxe is the most immersive cottage we offer — a Super King bed, a vaulted cedar ceiling, and a private deck that reaches out over a murmuring mountain stream. Elder flower wine, copper-inlaid furniture, and a copper-basin soaking tub complete the heritage luxury experience.",
    amenities: [
      "Stone Fireplace",
      "Private Deck over Mountain Stream",
      "Air Conditioning",
      "55″ Flat Screen TV",
      "Premium Minibar & Welcome Basket",
      "In-Room Safe",
      "Complimentary Breakfast",
      "High-Speed WiFi",
      "Copper Soaking Tub & Rain Shower",
      "Exclusive Heritage Toiletry Set"
    ]
  }
];
function AashiyanaPage() {
  const [activeRoom, setActiveRoom] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RoomModal,
      {
        room: activeRoom,
        accentColor: ACCENT,
        onClose: () => setActiveRoom(null)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative h-[60vh] sm:h-[70vh] lg:h-[75vh] flex items-end parallax-bg overflow-hidden",
        style: {
          backgroundImage: "url(/assets/generated/aashiyana-hero.dim_1600x900.jpg)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1A2E1A]/80 via-[#1A2E1A]/20 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-16 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs tracking-wide-xl uppercase mb-3",
                style: { color: ACCENT },
                children: "Boutique Heritage Villa"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-card mb-3", children: "Fyra Aashiyana" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 font-body text-sm text-card/70", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                MapPin,
                {
                  className: "w-4 h-4 flex-shrink-0",
                  style: { color: ACCENT }
                }
              ),
              "Old Manali Village, Himachal Pradesh"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/contact",
                  "data-ocid": "aashiyana-hero-book-cta",
                  className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 font-body text-sm tracking-wide text-forest hover:bg-card transition-smooth min-h-[48px]",
                  style: { backgroundColor: ACCENT },
                  children: [
                    "Book Now ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    var _a;
                    (_a = document.getElementById("aashiyana-rooms")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                  },
                  className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-card/40 text-card font-body text-sm tracking-wide hover:border-gold hover:text-gold transition-smooth min-h-[48px]",
                  children: "View Rooms"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 right-0 h-1",
              style: { backgroundColor: ACCENT }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background spacing-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center", children: [
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
                style: { color: ACCENT },
                children: "The Aashiyana Experience"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-6", children: "A Heritage Villa in the Forest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-4", children: 'Aashiyana — meaning "home" in Hindi — lives up to its name. Nestled among ancient deodars in Old Manali, our eight private cottages are built in the Kath-Kuni vernacular style: stone and timber, lovingly restored with handcrafted Kullu textiles and local copper fixtures.' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-8", children: "Wake to the scent of pine smoke. Take your breakfast on a private veranda watching apple orchards bloom. Return to a cedar-smoke fireplace and a glass of local elderflower wine." })
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
          className: "grid grid-cols-2 gap-3 sm:gap-4",
          children: HIGHLIGHTS.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-muted/40 border border-border p-4 sm:p-5 hover:border-[#D4933E] transition-smooth",
              "data-ocid": `aashiyana-highlight-${i}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(h.icon, { className: "w-5 h-5 mb-3", style: { color: ACCENT } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-medium text-foreground mb-1", children: h.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: h.description })
              ]
            },
            h.label
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "aashiyana-rooms", className: "bg-muted/30 spacing-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 sm:mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-xs tracking-wide-xl uppercase mb-3",
            style: { color: ACCENT },
            children: "Accommodations"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-semibold text-foreground", children: "Rooms & Cottages" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6", children: ROOMS.map((room, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.1 },
          className: "bg-card border border-border shadow-card p-5 sm:p-6 hover:border-[#D4933E] transition-smooth",
          "data-ocid": `cottage-card.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground mb-1", children: room.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground mb-3", children: [
              room.size,
              " · ",
              room.bed,
              " Bed"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "font-body text-xs mb-5 flex items-center gap-1.5",
                style: { color: ACCENT },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 flex-shrink-0" }),
                  room.view
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: "from" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-semibold text-foreground", children: room.price }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: "per night" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveRoom(room),
                  "data-ocid": `cottage-card.open_modal_button.${i + 1}`,
                  className: "font-body text-xs border-b pb-0.5 hover:opacity-70 transition-smooth min-h-[44px] flex items-end",
                  style: { color: ACCENT, borderColor: ACCENT },
                  children: "View Details"
                }
              )
            ] })
          ]
        },
        room.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-forest py-14 sm:py-20 text-center px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "font-display text-2xl sm:text-3xl mb-4",
          style: { color: ACCENT },
          children: "Reserve Your Cottage"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-card/60 mb-8 max-w-md mx-auto", children: "Contact our team to check cottage availability and seasonal packages." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/contact",
          "data-ocid": "aashiyana-book-cta",
          className: "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 font-body text-sm tracking-wide text-forest hover:bg-card transition-smooth min-h-[48px]",
          style: { backgroundColor: ACCENT },
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
