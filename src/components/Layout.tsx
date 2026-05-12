import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { StickyBookBar } from "./StickyBookBar";
import { WhatsAppButton } from "./WhatsAppButton";
import { CallButton } from "./CallButton";

interface LayoutProps {
  children: ReactNode;
}

const PROPERTY_LINKS = [
  { label: "Fyra Hotel", href: "/properties/fyra-hotel" },
  { label: "FYRA AASHIYANA THE GHAR", href: "/properties/aashiyana" },
  {
    label: "Fyra Ashapuri Snow Inn",
    href: "/properties/aashapuri-snow-inn",
  },
];

const EXPLORE_LINKS = [
  { label: "About Fyra Group", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Activities", href: "/activities" },
  { label: "Contact Us", href: "/contact" },
];

function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />;
}

export function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <GrainOverlay />
      <Header />

      {/* pt-20 for fixed header, pb-14 for sticky bar */}
      <main className="flex-1 pt-20 pb-14">{children}</main>

      {/* Redesigned Premium Footer */}
      <footer className="bg-forest text-card border-t border-gold/20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/fyra-logo.png"
                  alt="Fyra Group Logo"
                  className="h-14 w-auto object-contain brightness-110"
                />
                <div className="border-l border-gold/30 pl-4 py-1">
                  <div className="font-display text-2xl font-semibold tracking-luxury text-gold leading-none">
                    FYRA
                  </div>
                  <div className="font-body text-[10px] tracking-wide-xl text-gold/60 uppercase leading-none mt-1.5">
                    GROUP
                  </div>
                </div>
              </div>
              <p className="font-body text-sm text-card/60 leading-relaxed max-w-[280px]">
                FYRA – Where Hospitality Meets Heart. Providing unparalleled
                luxury and mountain charm across Manali.
              </p>
              <div className="flex items-center gap-5 pt-2">
                <a
                  href="https://instagram.com"
                  className="text-gold/40 hover:text-gold transition-smooth"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  className="text-gold/40 hover:text-gold transition-smooth"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  className="text-gold/40 hover:text-gold transition-smooth"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-body text-xs tracking-wide-xl text-gold uppercase mb-8 border-b border-gold/10 pb-2 inline-block">
                Our Properties
              </h4>
              <ul className="space-y-4">
                {PROPERTY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="font-body text-sm text-card/60 hover:text-gold transition-smooth flex items-center gap-2 group"
                    >
                      <div className="h-px w-0 group-hover:w-3 bg-gold transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Explore */}
            <div>
              <h4 className="font-body text-xs tracking-wide-xl text-gold uppercase mb-8 border-b border-gold/10 pb-2 inline-block">
                Explore
              </h4>
              <ul className="space-y-4">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="font-body text-sm text-card/60 hover:text-gold transition-smooth flex items-center gap-2 group"
                    >
                      <div className="h-px w-0 group-hover:w-3 bg-gold transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Manali Head Office */}
            <div>
              <h4 className="font-body text-xs tracking-wide-xl text-gold uppercase mb-8 border-b border-gold/10 pb-2 inline-block">
                Head Office
              </h4>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-card/60 leading-relaxed">
                    FYRA Hotel, Near Himachal Gramin Bank,
                    <br />
                    Prini, Manali, HP – 175131
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <a
                    href="tel:+919711754726"
                    className="font-body text-sm text-card/60 hover:text-gold transition-smooth"
                  >
                    +91 97117 54726
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  <a
                    href="mailto:enquiry@fyrahotel.com"
                    className="font-body text-sm text-card/60 hover:text-gold transition-smooth break-words"
                  >
                    enquiry@fyrahotel.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* New Regional Sales Offices Section */}
          <div className="border-t border-gold/10 pt-16 mb-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
              <h4 className="font-display text-2xl font-semibold text-gold">
                Regional Sales Offices
              </h4>
              <div className="h-px flex-1 bg-gold/10 hidden md:block mx-8" />
              <span className="font-body text-[10px] tracking-wide-xl text-gold/40 uppercase">
                PAN-INDIA CONNECTIVITY
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              {/* Noida Office */}
              <div className="bg-card/5 p-8 rounded-sm border border-gold/5 hover:border-gold/20 transition-smooth group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-smooth">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h5 className="font-display text-xl font-medium text-card group-hover:text-gold transition-smooth">
                      North Sales Office (Noida)
                    </h5>
                    <p className="font-body text-[10px] text-gold/50 uppercase tracking-widest mt-1">
                      NCR & North India
                    </p>
                  </div>
                </div>
                <p className="font-body text-sm text-card/60 mb-6 leading-relaxed">
                  Unit No. 849, 8th Floor, Astralis Tower, Sector 94, Noida,
                  Uttar Pradesh
                </p>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold/40" />
                  <a
                    href="tel:+917065591801"
                    className="font-body text-sm text-card hover:text-gold transition-smooth"
                  >
                    +91 70655 91801
                  </a>
                </div>
              </div>

              {/* Gujarat Office */}
              <div className="bg-card/5 p-8 rounded-sm border border-gold/5 hover:border-gold/20 transition-smooth group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-smooth">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h5 className="font-display text-xl font-medium text-card group-hover:text-gold transition-smooth">
                      Gujarat Sales Office (Vadodara)
                    </h5>
                    <p className="font-body text-[10px] text-gold/50 uppercase tracking-widest mt-1">
                      Western Region
                    </p>
                  </div>
                </div>
                <p className="font-body text-sm text-card/60 mb-6 leading-relaxed">
                  402-403, Prince Cube, Beside Gangotri Exotica, Gotri,
                  Vadodara, Gujarat – 390021
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold/40" />
                    <a
                      href="tel:+916354486936"
                      className="font-body text-sm text-card hover:text-gold transition-smooth"
                    >
                      +91 63544 86936
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gold/40" />
                    <a
                      href="mailto:gujratsales@fyrahotel.com"
                      className="font-body text-sm text-card hover:text-gold transition-smooth"
                    >
                      gujratsales@fyrahotel.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-[10px] text-card/40 tracking-widest">
              © {year} FYRA GROUP. ALL RIGHTS RESERVED. MANALI, HIMACHAL PRADESH.
            </p>
            <div className="flex gap-8">
              <span className="font-body text-[10px] text-gold/40 hover:text-gold cursor-pointer transition-smooth">
                PRIVACY POLICY
              </span>
              <span className="font-body text-[10px] text-gold/40 hover:text-gold cursor-pointer transition-smooth">
                TERMS OF SERVICE
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed overlays */}
      <CallButton />
      <WhatsAppButton />
      <StickyBookBar />
    </div>
  );
}
