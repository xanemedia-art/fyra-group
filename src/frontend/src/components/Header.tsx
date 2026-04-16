import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Properties",
    href: "/properties",
    children: [
      { label: "All Properties", href: "/properties" },
      { label: "Fyra Hotel", href: "/properties/fyra-hotel" },
      { label: "Fyra Aashiyana", href: "/properties/aashiyana" },
      {
        label: "Fyra Aashapuri Snow Line",
        href: "/properties/aashapuri-snow-line",
      },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Activities", href: "/activities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [propertiesOpen, setPropertiesOpen] = useState(false);
  const location = useLocation();
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
      setPropertiesOpen(false);
    }
  }, [location.pathname]);

  const isActive = (href: string) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  return (
    <header
      data-ocid="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card border-b border-border shadow-refined"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            data-ocid="header-logo"
            className="flex flex-col items-start transition-smooth hover:opacity-80"
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
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    data-ocid={`nav-${item.label.toLowerCase()}`}
                    className={`nav-link flex items-center gap-1 text-foreground ${
                      isActive(item.href) ? "active text-gold" : ""
                    }`}
                    type="button"
                    onClick={() => setPropertiesOpen(!propertiesOpen)}
                    aria-expanded={propertiesOpen}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-smooth group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
                    <div className="bg-card border border-border shadow-elevated rounded-md py-1.5 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm font-body text-foreground hover:text-gold hover:bg-muted transition-smooth"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  data-ocid={`nav-${item.label.toLowerCase()}`}
                  className={`nav-link text-foreground ${isActive(item.href) ? "active text-gold" : ""}`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Book CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              data-ocid="header-book-cta"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-forest text-card font-body text-sm tracking-wide border border-forest hover:bg-gold hover:border-gold hover:text-forest transition-smooth"
            >
              Book Your Stay
            </Link>
            <button
              data-ocid="mobile-menu-toggle"
              className="lg:hidden p-2 text-foreground"
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

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          data-ocid="mobile-menu"
          className="lg:hidden bg-card border-t border-border shadow-elevated"
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className={`block py-3 text-sm font-body tracking-wide border-b border-border transition-smooth ${
                    isActive(item.href)
                      ? "text-gold"
                      : "text-foreground hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.slice(1).map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block py-2 text-xs font-body text-muted-foreground hover:text-gold transition-smooth"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-4 text-center py-3 bg-forest text-card font-body text-sm tracking-wide"
            >
              Book Your Stay
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
