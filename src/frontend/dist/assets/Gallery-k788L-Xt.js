import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as ChevronRight } from "./index-CGGQSEAl.js";
import { m as motion } from "./proxy-CwdrCzVW.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode);
const GALLERY_ITEMS = [
  {
    src: "/assets/generated/fyra-hotel-hero.dim_1600x900.jpg",
    alt: "Fyra Hotel exterior at golden hour",
    category: "Fyra Hotel",
    span: "col-span-2 row-span-2"
  },
  {
    src: "/assets/generated/aashiyana-hero.dim_1600x900.jpg",
    alt: "Aashiyana cottage in pine forest",
    category: "Aashiyana",
    span: ""
  },
  {
    src: "/assets/generated/aashapuri-hero.dim_1600x900.jpg",
    alt: "Snow Line resort at altitude",
    category: "Snow Line",
    span: ""
  },
  {
    src: "/assets/generated/fyra-valley-cta.dim_1600x900.jpg",
    alt: "Manali valley panoramic view",
    category: "Landscapes",
    span: ""
  },
  {
    src: "/assets/generated/fyra-hero-landscape.dim_1920x1080.jpg",
    alt: "Himalayan peaks at sunrise",
    category: "Landscapes",
    span: "col-span-2"
  },
  {
    src: "/assets/generated/aashiyana-hero.dim_1600x900.jpg",
    alt: "Aashiyana fireplace suite interior",
    category: "Aashiyana",
    span: ""
  },
  {
    src: "/assets/generated/fyra-valley-cta.dim_1600x900.jpg",
    alt: "Curated Manali experiences",
    category: "Activities",
    span: ""
  },
  {
    src: "/assets/generated/fyra-hotel-hero.dim_1600x900.jpg",
    alt: "Fyra Hotel fine dining terrace",
    category: "Fyra Hotel",
    span: ""
  }
];
const GUEST_STORIES = [
  {
    quote: "Staying at Fyra Hotel was unlike anything I have experienced. The staff remembered our preferences from day one. The silence, the stars, the food — everything was extraordinary.",
    author: "Priya Mehta",
    location: "Mumbai, India",
    property: "Fyra Hotel",
    rating: 5
  },
  {
    quote: "Aashiyana felt like a discovery. No crowds, just pine trees, crackling fireplaces and service so thoughtful it felt personal. We will return every winter without question.",
    author: "James & Elara Thornton",
    location: "London, UK",
    property: "Fyra Aashiyana",
    rating: 5
  },
  {
    quote: "The Snow Line resort is extraordinary. Waking up to fresh snow on the Rohtang and having chai served to your window — this is what travel should feel like.",
    author: "Nanah Ramachandran",
    location: "Bangalore, India",
    property: "Fyra Aashapuri Snow Line",
    rating: 5
  },
  {
    quote: "We celebrated our anniversary at Aashiyana and every single detail was attended to with grace. The Kath-Kuni architecture, the candlelit dinners, the mountain air — pure magic.",
    author: "Aditi & Rohan Kapoor",
    location: "Delhi, India",
    property: "Fyra Aashiyana",
    rating: 5
  },
  {
    quote: "Fyra Hotel's infinity pool overlooking the valley at sunset is a memory I will carry forever. World-class service in the most breathtaking location on Earth.",
    author: "Sofia Andersen",
    location: "Copenhagen, Denmark",
    property: "Fyra Hotel",
    rating: 5
  }
];
function GalleryPage() {
  const [currentSlide, setCurrentSlide] = reactExports.useState(0);
  const autoPlayRef = reactExports.useRef(null);
  const total = GUEST_STORIES.length;
  const goTo = (index) => {
    setCurrentSlide((index % total + total) % total);
  };
  const prev = () => goTo(currentSlide - 1);
  const next = () => goTo(currentSlide + 1);
  reactExports.useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % total);
    }, 6e3);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [total]);
  const resetAutoPlay = (fn) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    fn();
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % total);
    }, 6e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 spacing-section border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "font-body text-xs tracking-wide-xl text-gold uppercase mb-4",
          children: "Gallery"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          className: "font-display text-4xl md:text-5xl font-semibold text-foreground mb-4",
          children: "The Himalayan Frame"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.6, delay: 0.2 },
          className: "font-body text-base text-muted-foreground leading-relaxed",
          children: "Each image from our properties is a window into a world defined by light, landscape, and quiet luxury."
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background spacing-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px]", children: GALLERY_ITEMS.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.97 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: index * 0.06 },
        className: `relative overflow-hidden group cursor-pointer bg-muted ${item.span}`,
        "data-ocid": `gallery-item-${index}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.src,
              alt: item.alt,
              className: "w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-smooth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-smooth", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs tracking-wide text-gold", children: item.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-card/70 mt-0.5 line-clamp-1", children: item.alt })
          ] })
        ]
      },
      item.alt
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 spacing-section border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 8 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "font-body text-xs tracking-wide-xl text-gold uppercase mb-4",
            children: "Guest Stories"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: 14 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: 0.1 },
            className: "font-display text-3xl md:text-4xl font-semibold text-foreground",
            children: "Moments That Linger"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-ocid": "guest-stories-carousel", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex transition-transform duration-700 ease-in-out",
            style: { transform: `translateX(-${currentSlide * 100}%)` },
            children: GUEST_STORIES.map((story, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-full flex-shrink-0 px-0 sm:px-8 md:px-20 lg:px-40",
                "data-ocid": `guest-story-${index}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border shadow-card p-8 md:p-12 flex flex-col items-center text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-gold text-lg tracking-widest mb-6",
                      "aria-label": `${story.rating} out of 5 stars`,
                      children: [
                        "★".repeat(story.rating),
                        "☆".repeat(5 - story.rating)
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-lg md:text-xl italic text-foreground leading-relaxed mb-8 max-w-2xl", children: [
                    '"',
                    story.quote,
                    '"'
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6 w-full max-w-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-semibold text-foreground", children: story.author }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mt-1", children: story.location }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-gold mt-1.5", children: story.property })
                  ] })
                ] })
              },
              story.author
            ))
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Previous testimonial",
            onClick: () => resetAutoPlay(prev),
            "data-ocid": "guest-stories-prev",
            className: "absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-card border border-border shadow-refined text-foreground hover:text-gold hover:border-gold transition-smooth",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Next testimonial",
            onClick: () => resetAutoPlay(next),
            "data-ocid": "guest-stories-next",
            className: "absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-card border border-border shadow-refined text-foreground hover:text-gold hover:border-gold transition-smooth",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex justify-center gap-2 mt-8",
            role: "tablist",
            "aria-label": "Guest story slides",
            children: GUEST_STORIES.map((story, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": currentSlide === index,
                "aria-label": `Go to testimonial ${index + 1}`,
                onClick: () => resetAutoPlay(() => goTo(index)),
                "data-ocid": `guest-story-dot-${index}`,
                className: `w-1.5 h-1.5 transition-smooth ${currentSlide === index ? "bg-gold w-5" : "bg-muted-foreground/40 hover:bg-muted-foreground/60"}`
              },
              story.author
            ))
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  GalleryPage
};
