import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PROPERTIES_CHILDREN = [
  { label: "All Properties", href: "/properties" },
  { label: "Fyra Hotel", href: "/properties/fyra-hotel" },
  { label: "Fyra Aashiyana", href: "/properties/aashiyana" },
  {
    label: "Fyra Aashapuri Snow Line",
    href: "/properties/aashapuri-snow-line",
  },
];

const CONTACT_CHILDREN = [
  { label: "Fyra Hotel", href: "/contact?property=fyra-hotel" },
  { label: "Fyra Ashapuri", href: "/contact?property=fyra-ashapuri" },
  { label: "Fyra Aashiyana", href: "/contact?property=fyra-aashiyana" },
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
            className="flex flex-col items-start transition-smooth hover:opacity-80 flex-shrink-0"
          >
            <span className="font-display text-xl font-semibold tracking-luxury text-foreground leading-none">
              FYRA
            </span>
            <span className="font-body text-[10px] tracking-wide-xl text-gold uppercase leading-none mt-0.5">
              GROUP
            </span>
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

            {/* Properties dropdown */}
            <div className="relative group">
              <button
                data-ocid="nav-properties"
                className={`nav-link flex items-center gap-1 text-foreground ${isPropertiesActive ? "active text-gold" : ""}`}
                type="button"
                aria-haspopup="true"
              >
                Properties
                <ChevronDown className="w-3.5 h-3.5 transition-smooth group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
                <div className="bg-card border border-border shadow-elevated rounded-md py-1.5 min-w-[210px]">
                  {PROPERTIES_CHILDREN.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      data-ocid={`nav-properties-${child.href.split("/").pop()}`}
                      className="block px-4 py-2.5 text-sm font-body text-foreground hover:text-gold hover:bg-muted transition-smooth"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

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

            {/* Contact dropdown */}
            <div className="relative group">
              <button
                data-ocid="nav-contact"
                className={`nav-link flex items-center gap-1 text-foreground ${isContactActive ? "active text-gold" : ""}`}
                type="button"
                aria-haspopup="true"
              >
                Contact
                <ChevronDown className="w-3.5 h-3.5 transition-smooth group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth z-50">
                <div className="bg-card border border-border shadow-elevated rounded-md py-1.5 min-w-[200px]">
                  {CONTACT_CHILDREN.map((child) => (
                    <button
                      key={child.href}
                      type="button"
                      data-ocid={`nav-contact-${child.label.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => handleContactChildClick(child.href)}
                      className="w-full text-left block px-4 py-2.5 text-sm font-body text-foreground hover:text-gold hover:bg-muted transition-smooth"
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
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
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 sm:top-20 z-40 flex flex-col"
          data-ocid="mobile-menu"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
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

              {/* Properties — collapsible */}
              <div className="border-b border-border/60">
                <button
                  type="button"
                  data-ocid="mobile-nav-properties-toggle"
                  onClick={() => setMobilePropertiesOpen(!mobilePropertiesOpen)}
                  aria-expanded={mobilePropertiesOpen}
                  className={`w-full flex items-center justify-between min-h-[44px] py-2.5 text-sm font-body tracking-wide transition-smooth ${
                    isPropertiesActive
                      ? "text-gold"
                      : "text-foreground hover:text-gold"
                  }`}
                >
                  Properties
                  <ChevronDown
                    className="w-4 h-4 transition-smooth flex-shrink-0"
                    style={{
                      transform: mobilePropertiesOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </button>
                {mobilePropertiesOpen && (
                  <div className="pb-2 pl-4 space-y-0.5">
                    {PROPERTIES_CHILDREN.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        data-ocid={`mobile-nav-properties-${child.href.split("/").pop()}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center min-h-[44px] py-2.5 text-sm font-body text-muted-foreground hover:text-gold transition-smooth"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
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

              {/* Contact — collapsible */}
              <div className="border-b border-border/60">
                <button
                  type="button"
                  data-ocid="mobile-nav-contact-toggle"
                  onClick={() => setMobileContactOpen(!mobileContactOpen)}
                  aria-expanded={mobileContactOpen}
                  className={`w-full flex items-center justify-between min-h-[44px] py-2.5 text-sm font-body tracking-wide transition-smooth ${
                    isContactActive
                      ? "text-gold"
                      : "text-foreground hover:text-gold"
                  }`}
                >
                  Contact
                  <ChevronDown
                    className="w-4 h-4 transition-smooth flex-shrink-0"
                    style={{
                      transform: mobileContactOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </button>
                {mobileContactOpen && (
                  <div className="pb-2 pl-4 space-y-0.5">
                    {CONTACT_CHILDREN.map((child) => (
                      <button
                        key={child.href}
                        type="button"
                        data-ocid={`mobile-nav-contact-${child.label.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => handleContactChildClick(child.href)}
                        className="w-full text-left flex items-center min-h-[44px] py-2.5 text-sm font-body text-muted-foreground hover:text-gold transition-smooth"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
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
        </div>
      )}
    </header>
  );
}
