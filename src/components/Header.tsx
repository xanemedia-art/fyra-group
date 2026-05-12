import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const PROPERTIES_CHILDREN = [
  { label: "All Properties", href: "/properties" },
  { label: "Fyra Hotel", href: "/properties/fyra-hotel" },
  { label: "FYRA AASHIYANA THE GHAR", href: "/properties/aashiyana" },
  {
    label: "Fyra Ashapuri Snow Inn",
    href: "/properties/aashapuri-snow-inn",
  },
];

const CONTACT_CHILDREN = [
  { label: "Fyra Hotel", href: "/contact?property=fyra-hotel" },
  { label: "Fyra Ashapuri", href: "/contact?property=fyra-ashapuri" },
  { label: "FYRA AASHIYANA THE GHAR", href: "/contact?property=fyra-aashiyana" },
  { label: "Fyra Group", href: "/contact" },
];

const PLAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Activities", href: "/activities" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePropertiesOpen, setMobilePropertiesOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setMobileOpen(false);
      setMobilePropertiesOpen(false);
      setMobileContactOpen(false);
    }
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  const isContactActive = location.pathname.startsWith("/contact");
  const isPropertiesActive = location.pathname.startsWith("/properties");

  function handleContactChildClick(href: string) {
    setMobileOpen(false);
    setMobileContactOpen(false);
    // Navigate using the full href including query string
    const [path, search] = href.split("?");
    navigate({
      to: path,
      search: search ? Object.fromEntries(new URLSearchParams(search)) : {},
    });
  }

  return (
    <header
      data-ocid="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card border-b border-border shadow-refined"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            data-ocid="header-logo"
            className="flex items-center gap-3 transition-smooth hover:opacity-80 flex-shrink-0"
          >
            <img
              src="/assets/fyra-logo.png"
              alt="Fyra Group Logo"
              className="h-8 sm:h-10 w-auto object-contain"
            />
            <div className="flex flex-col items-start hidden sm:flex">
              <span className="font-display text-lg font-semibold tracking-luxury text-foreground leading-none">
                FYRA
              </span>
              <span className="font-body text-[9px] tracking-wide-xl text-gold uppercase leading-none mt-0.5">
                GROUP
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-8"
            aria-label="Main navigation"
          >
            {/* Home */}
            <Link
              to="/"
              data-ocid="nav-home"
              className={`nav-link text-foreground ${isActive("/") ? "active text-gold" : ""}`}
            >
              Home
            </Link>

            {/* Properties */}
            <Link
              to="/properties"
              data-ocid="nav-properties"
              className={`nav-link text-foreground ${isPropertiesActive ? "active text-gold" : ""}`}
            >
              Properties
            </Link>

            {/* Plain nav items */}
            {PLAIN_NAV.slice(1).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                data-ocid={`nav-${item.label.toLowerCase()}`}
                className={`nav-link text-foreground ${isActive(item.href) ? "active text-gold" : ""}`}
              >
                {item.label}
              </Link>
            ))}

            {/* Contact */}
            <Link
              to="/contact"
              data-ocid="nav-contact"
              className={`nav-link text-foreground ${isContactActive ? "active text-gold" : ""}`}
            >
              Contact
            </Link>
          </nav>

          {/* Book CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              data-ocid="header-book-cta"
              onClick={() => handleContactChildClick("/contact")}
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-forest text-card font-body text-sm tracking-wide border border-forest hover:bg-gold hover:border-gold hover:text-forest transition-smooth"
            >
              Book Your Stay
            </button>
            <button
              data-ocid="mobile-menu-toggle"
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer — full-height overlay with scroll */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 top-16 sm:top-20 z-40 flex flex-col"
            data-ocid="mobile-menu"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-foreground/40"
              onClick={() => setMobileOpen(false)}
              onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
              role="presentation"
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <div className="relative flex flex-col bg-card border-t border-border shadow-elevated max-h-full overflow-hidden w-full">
              <nav
                className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-6 py-3 pb-4 space-y-0.5"
                aria-label="Mobile navigation"
              >
                {/* Home */}
                <Link
                  to="/"
                  data-ocid="mobile-nav-home"
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center min-h-[44px] py-2.5 text-sm font-body tracking-wide border-b border-border/60 transition-smooth ${
                    isActive("/")
                      ? "text-gold"
                      : "text-foreground hover:text-gold"
                  }`}
                >
                  Home
                </Link>

                {/* Properties Accordion */}
                <div className="border-b border-border/60">
                  <button
                    type="button"
                    onClick={() =>
                      setMobilePropertiesOpen(!mobilePropertiesOpen)
                    }
                    className="flex items-center justify-between w-full min-h-[44px] py-2.5 text-sm font-body tracking-wide text-foreground hover:text-gold transition-smooth"
                  >
                    Properties
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${mobilePropertiesOpen ? "rotate-180 text-gold" : "opacity-40"}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobilePropertiesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-muted/30"
                      >
                        <div className="pl-4 py-1 flex flex-col">
                          {PROPERTIES_CHILDREN.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center min-h-[44px] py-2 text-xs font-body tracking-widest text-muted-foreground hover:text-gold uppercase"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Gallery */}
                <Link
                  to="/gallery"
                  data-ocid="mobile-nav-gallery"
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center min-h-[44px] py-2.5 text-sm font-body tracking-wide border-b border-border/60 transition-smooth ${
                    isActive("/gallery")
                      ? "text-gold"
                      : "text-foreground hover:text-gold"
                  }`}
                >
                  Gallery
                </Link>

                {/* Activities */}
                <Link
                  to="/activities"
                  data-ocid="mobile-nav-activities"
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center min-h-[44px] py-2.5 text-sm font-body tracking-wide border-b border-border/60 transition-smooth ${
                    isActive("/activities")
                      ? "text-gold"
                      : "text-foreground hover:text-gold"
                  }`}
                >
                  Activities
                </Link>

                {/* About */}
                <Link
                  to="/about"
                  data-ocid="mobile-nav-about"
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center min-h-[44px] py-2.5 text-sm font-body tracking-wide border-b border-border/60 transition-smooth ${
                    isActive("/about")
                      ? "text-gold"
                      : "text-foreground hover:text-gold"
                  }`}
                >
                  About
                </Link>

                {/* Contact Accordion */}
                <div className="border-b border-border/60">
                  <button
                    type="button"
                    onClick={() => setMobileContactOpen(!mobileContactOpen)}
                    className="flex items-center justify-between w-full min-h-[44px] py-2.5 text-sm font-body tracking-wide text-foreground hover:text-gold transition-smooth"
                  >
                    Contact
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${mobileContactOpen ? "rotate-180 text-gold" : "opacity-40"}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileContactOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-muted/30"
                      >
                        <div className="pl-4 py-1 flex flex-col">
                          {CONTACT_CHILDREN.map((child) => (
                            <button
                              key={child.href}
                              type="button"
                              onClick={() =>
                                handleContactChildClick(child.href)
                              }
                              className="flex items-center text-left min-h-[44px] py-2 text-xs font-body tracking-widest text-muted-foreground hover:text-gold uppercase"
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>

              {/* Drawer footer CTA */}
              <div className="flex-shrink-0 px-4 sm:px-6 py-4 border-t border-border bg-card">
                <button
                  type="button"
                  data-ocid="mobile-book-cta"
                  onClick={() => handleContactChildClick("/contact")}
                  className="w-full text-center py-3.5 min-h-[44px] bg-forest text-card font-body text-sm tracking-wide hover:bg-gold hover:text-forest transition-smooth"
                >
                  Book Your Stay
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
