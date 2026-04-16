import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { StickyBookBar } from "./StickyBookBar";
import { WhatsAppButton } from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

const PROPERTY_LINKS = [
  { label: "Fyra Hotel", href: "/properties/fyra-hotel" },
  { label: "Fyra Aashiyana", href: "/properties/aashiyana" },
  {
    label: "Fyra Aashapuri Snow Line",
    href: "/properties/aashapuri-snow-line",
  },
];

const FOOTER_LINKS = [
  { label: "About Fyra Group", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Activities", href: "/activities" },
  { label: "Contact Us", href: "/contact" },
];

export function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20 pb-14">{children}</main>

      {/* Footer */}
      <footer className="bg-forest text-card pb-14 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="mb-5">
                <div className="font-display text-2xl font-semibold tracking-luxury text-gold leading-none">
                  FYRA
                </div>
                <div className="font-body text-[10px] tracking-wide-xl text-gold/60 uppercase leading-none mt-1">
                  GROUP
                </div>
              </div>
              <p className="font-body text-sm text-card/60 leading-relaxed max-w-[220px]">
                Himalayan luxury retreats in Manali. Where grandeur meets
                stillness.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-card/40 hover:text-gold transition-smooth"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-card/40 hover:text-gold transition-smooth"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-card/40 hover:text-gold transition-smooth"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Properties */}
            <div>
              <h4 className="font-body text-xs tracking-wide-xl text-gold/70 uppercase mb-5">
                Our Properties
              </h4>
              <ul className="space-y-3">
                {PROPERTY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="font-body text-sm text-card/60 hover:text-gold transition-smooth"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-body text-xs tracking-wide-xl text-gold/70 uppercase mb-5">
                Explore
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="font-body text-sm text-card/60 hover:text-gold transition-smooth"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-body text-xs tracking-wide-xl text-gold/70 uppercase mb-5">
                Contact
              </h4>
              <address className="not-italic space-y-2">
                <p className="font-body text-sm text-card/60">
                  The Mall Road, Manali
                  <br />
                  Himachal Pradesh, India
                </p>
                <a
                  href="tel:+919876543210"
                  className="font-body text-sm text-card/60 hover:text-gold transition-smooth block"
                >
                  +91 98765 43210
                </a>
                <a
                  href="mailto:info@fyragroup.com"
                  className="font-body text-sm text-card/60 hover:text-gold transition-smooth block break-words"
                >
                  info@fyragroup.com
                </a>
              </address>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-card/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-card/40 text-center md:text-left">
              © {year} Fyra Group. All rights reserved. Manali, Himachal
              Pradesh.
            </p>
            <p className="font-body text-xs text-card/30 text-center">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== "undefined" ? window.location.hostname : "",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-smooth"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed overlays */}
      <WhatsAppButton />
      <StickyBookBar />
    </div>
  );
}
