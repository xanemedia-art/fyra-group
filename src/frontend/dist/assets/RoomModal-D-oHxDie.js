import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, X, L as Link } from "./index-B49hhkqB.js";
import { A as AnimatePresence } from "./index-B2CDuzxs.js";
import { m as motion } from "./proxy-vc_7AWZu.js";
import { A as ArrowRight } from "./arrow-right-NyNC9Fuo.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M2 4v16", key: "vw9hq8" }],
  ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
  ["path", { d: "M2 17h20", key: "18nfp3" }],
  ["path", { d: "M6 8v9", key: "1yriud" }]
];
const Bed = createLucideIcon("bed", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
];
const Maximize2 = createLucideIcon("maximize-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
function RoomModal({ room, accentColor, onClose }) {
  const closeRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    if (!room) return;
    const prev = document.activeElement;
    (_a = closeRef.current) == null ? void 0 : _a.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev == null ? void 0 : prev.focus();
    };
  }, [room, onClose]);
  const headerStyle = {
    backgroundColor: `${accentColor}18`,
    borderBottom: `3px solid ${accentColor}`
  };
  const accentStyle = { color: accentColor };
  const accentBg = { backgroundColor: accentColor };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: room && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.25 },
        className: "fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm cursor-pointer",
        onClick: onClose,
        "aria-hidden": "true",
        "data-ocid": "room-modal-backdrop"
      },
      "backdrop"
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95, y: 16 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 16 },
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
        className: "fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-4 pointer-events-none",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "dialog",
          {
            open: true,
            "aria-labelledby": "room-modal-title",
            className: "pointer-events-auto bg-card w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-0 m-0 border-0 static rounded-sm",
            "data-ocid": "room.dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "px-5 sm:px-8 py-5 sm:py-6 relative",
                  style: headerStyle,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-xs tracking-widest uppercase mb-1",
                        style: accentStyle,
                        children: "Room Details"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h2",
                      {
                        id: "room-modal-title",
                        className: "font-display text-2xl sm:text-3xl font-semibold text-foreground pr-12",
                        children: room.name
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        ref: closeRef,
                        type: "button",
                        onClick: onClose,
                        "aria-label": "Close room details",
                        "data-ocid": "room.close_button",
                        className: "absolute top-3 right-3 sm:top-5 sm:right-5 w-11 h-11 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth rounded-sm",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 sm:px-8 py-5 sm:py-7 space-y-6 sm:space-y-7", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
                  { icon: Maximize2, label: "Size", value: room.size },
                  { icon: Bed, label: "Bed", value: room.bed },
                  { icon: Users, label: "Guests", value: room.occupancy }
                ].map(({ icon: Icon, label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "border border-border p-3 sm:p-4 flex sm:flex-col items-center sm:items-center gap-3 sm:gap-0 sm:text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Icon,
                        {
                          className: "w-4 h-4 sm:mx-auto sm:mb-1 flex-shrink-0",
                          style: accentStyle
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex sm:flex-col items-center gap-2 sm:gap-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground sm:mb-0.5", children: label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground sm:hidden", children: "·" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-medium text-foreground", children: value })
                      ] })
                    ]
                  },
                  label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs", style: accentStyle, children: [
                  "◆ View — ",
                  room.view
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: room.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-xs tracking-widest uppercase mb-4",
                      style: accentStyle,
                      children: "Room Amenities"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: room.amenities.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-center gap-2 font-body text-sm text-foreground",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Check,
                          {
                            className: "w-3.5 h-3.5 shrink-0",
                            style: accentStyle
                          }
                        ),
                        item
                      ]
                    },
                    item
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border pt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: "from" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-semibold text-foreground", children: room.price }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: "per night" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/contact",
                      onClick: onClose,
                      "data-ocid": "room.confirm_button",
                      className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 font-body text-sm tracking-wide text-card transition-smooth hover:opacity-90 min-h-[48px]",
                      style: accentBg,
                      children: [
                        "Reserve This Room ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                      ]
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      },
      "modal"
    )
  ] }) });
}
export {
  RoomModal as R
};
