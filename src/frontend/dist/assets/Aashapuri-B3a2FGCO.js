import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-B49hhkqB.js";
import { R as RoomModal } from "./RoomModal-D-oHxDie.js";
import { M as MapPin } from "./map-pin-CZJMnKnR.js";
import { A as ArrowRight } from "./arrow-right-NyNC9Fuo.js";
import { m as motion } from "./proxy-vc_7AWZu.js";
import { M as Mountain } from "./mountain-CT4282_J.js";
import "./index-B2CDuzxs.js";
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
      d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",
      key: "k4qptu"
    }
  ],
  ["path", { d: "m13.56 11.747 4.332-.924", key: "19l80z" }],
  ["path", { d: "m16 21-3.105-6.21", key: "7oh9d" }],
  [
    "path",
    {
      d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",
      key: "m7xp4m"
    }
  ],
  ["path", { d: "m6.158 8.633 1.114 4.456", key: "74o979" }],
  ["path", { d: "m8 21 3.105-6.21", key: "1fvxut" }],
  ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }]
];
const Telescope = createLucideIcon("telescope", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]
];
const Wind = createLucideIcon("wind", __iconNode);
const ACCENT = "#7EC8E3";
const HIGHLIGHTS = [
  {
    icon: Mountain,
    label: "Heli-Skiing",
    description: "Access to remote powder runs"
  },
  {
    icon: Wind,
    label: "Glacier Treks",
    description: "Guided expeditions to Solang"
  },
  {
    icon: Telescope,
    label: "Astronomy Deck",
    description: "Milky Way observation nights"
  },
  {
    icon: MapPin,
    label: "Rohtang Access",
    description: "Gateway to the Lahaul Spiti"
  }
];
const ROOMS = [
  {
    name: "Deluxe Room",
    size: "520 sq ft",
    bed: "King",
    view: "Rohtang Range at Dawn",
    price: "₹15,000",
    occupancy: "2 Guests",
    description: "Perched at 9,200 feet, the Deluxe Room wraps you in warm cedar and Himalayan wool, with floor-to-ceiling glass that frames the Rohtang Range at first light. The altitude itself is the amenity — crisp air, absolute silence, and a sky unpolluted by city light fill every waking moment.",
    amenities: [
      "Heated Floors",
      "55″ Flat Screen TV",
      "Minibar & Mountain Herb Tea Kit",
      "In-Room Safe",
      "Complimentary Breakfast",
      "High-Speed WiFi",
      "Rain Shower",
      "Premium Toiletries",
      "Iron & Ironing Board",
      "Binoculars & Star Map"
    ]
  },
  {
    name: "Family Suite",
    size: "820 sq ft",
    bed: "1 King + 2 Twin",
    view: "Beas Kund Glacier Panorama",
    price: "₹22,000",
    occupancy: "4 Guests",
    description: "Designed for families who seek adventure together, the Family Suite spans two sleeping zones with a shared living area wrapped in panoramic glacier views. Glacier binoculars, a mountain library, and a private balcony make it the perfect base for high-altitude exploration.",
    amenities: [
      "Heated Floors Throughout",
      "Two Flat Screen TVs",
      "Family Minibar & Snack Station",
      "In-Room Safe",
      "Complimentary Breakfast for 4",
      "High-Speed WiFi",
      "Dual Showers",
      "Premium Toiletries",
      "Kids Activity Pack",
      "Private Balcony with Glacier View"
    ]
  },
  {
    name: "Super Deluxe",
    size: "620 sq ft",
    bed: "Super King",
    view: "Solang Valley & Snow Peaks",
    price: "₹19,000",
    occupancy: "2–3 Guests",
    description: "The Super Deluxe is our signature altitude experience — a Super King bed anchored beneath a vaulted timber ceiling, with the Solang Valley spread across the full-width panoramic window. A private jacuzzi terrace lets you soak under the stars at 9,200 feet.",
    amenities: [
      "Private Jacuzzi Terrace",
      "Heated Floors",
      "65″ Flat Screen TV",
      "Premium Minibar & Champagne Welcome",
      "In-Room Safe",
      "Complimentary Breakfast",
      "High-Speed WiFi",
      "Luxury Rain Shower",
      "Bvlgari Amenity Kit",
      "Dedicated Butler Service"
    ]
  }
];
function AashapuriPage() {
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
          backgroundImage: "url(/assets/generated/aashapuri-hero.dim_1600x900.jpg)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#1A2E1A]/80 via-[#1A2E1A]/20 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-16 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs tracking-wide-xl uppercase mb-3",
                style: { color: ACCENT },
                children: "High-Altitude Adventure Resort"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-card mb-3", children: "Aashapuri Snow Line" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 font-body text-sm text-card/70", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                MapPin,
                {
                  className: "w-4 h-4 flex-shrink-0",
                  style: { color: ACCENT }
                }
              ),
              "Near Rohtang Pass, 9,200 ft"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/contact",
                  "data-ocid": "aashapuri-hero-book-cta",
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
                    (_a = document.getElementById("aashapuri-rooms")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
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
                children: "The Snow Line Experience"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-6", children: "At the Edge of the World" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-4", children: "Aashapuri Snow Line is the Fyra Group's most audacious property. Perched at 9,200 feet on the approach to Rohtang Pass, it exists in a world of silence broken only by wind and the creak of fresh snowfall." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-8", children: "This is for the traveller who wants more than a room with a view — who wants to feel the altitude, see glaciers glow at dusk, and fall asleep under a sky unpolluted by light." })
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
              className: "bg-muted/40 border border-border p-4 sm:p-5 hover:border-[#7EC8E3] transition-smooth",
              "data-ocid": `aashapuri-highlight-${i}`,
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "aashapuri-rooms", className: "bg-muted/30 spacing-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 sm:mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body text-xs tracking-wide-xl uppercase mb-3",
            style: { color: ACCENT },
            children: "Accommodations"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-semibold text-foreground", children: "Rooms & Suites" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6", children: ROOMS.map((room, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.1 },
          className: "bg-card border border-border shadow-card p-5 sm:p-6 hover:border-[#7EC8E3] transition-smooth",
          "data-ocid": `snow-room-card.item.${i + 1}`,
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
                  "data-ocid": `snow-room-card.open_modal_button.${i + 1}`,
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
          children: "Reserve at Snow Line"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-card/60 mb-8 max-w-md mx-auto", children: "Winter and spring availability fills quickly. Contact us to plan your high-altitude escape." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/contact",
          "data-ocid": "aashapuri-book-cta",
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
  AashapuriPage
};
