import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLocation } from "@tanstack/react-router";
import { ChevronDown, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// ─── Property data ──────────────────────────────────────────────────────────

type PropertyKey =
  | "fyra-group"
  | "fyra-hotel"
  | "fyra-ashapuri"
  | "fyra-aashiyana";

interface ContactProperty {
  key: PropertyKey;
  label: string;
  tagline: string;
  accent: string;
  accentClass: string;
  borderClass: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  whatsappHref: string;
}

const CONTACT_PROPERTIES: ContactProperty[] = [
  {
    key: "fyra-group",
    label: "Fyra Group",
    tagline: "Central Reservations",
    accent: "#C9A84C",
    accentClass: "text-gold",
    borderClass: "border-gold",
    phone: "+91 98765 43210",
    email: "contact@fyragroup.com",
    address: "Fyra House, Mall Road, Manali, Himachal Pradesh 175131",
    whatsapp: "+91 98765 43210",
    whatsappHref: "https://wa.me/919876543210",
  },
  {
    key: "fyra-hotel",
    label: "Fyra Hotel",
    tagline: "Modern Luxury Flagship",
    accent: "#C9A84C",
    accentClass: "text-gold",
    borderClass: "border-gold",
    phone: "+91 98765 43211",
    email: "fyrahotel@fyragroup.com",
    address: "Snow Peak Road, Manali, Himachal Pradesh 175131",
    whatsapp: "+91 98765 43211",
    whatsappHref: "https://wa.me/919876543211",
  },
  {
    key: "fyra-ashapuri",
    label: "Fyra Ashapuri",
    tagline: "High-Altitude Adventure Resort",
    accent: "#7EC8E3",
    accentClass: "accent-icy-blue",
    borderClass: "border-icy-blue",
    phone: "+91 98765 43212",
    email: "aashapuri@fyragroup.com",
    address: "Solang Valley, Manali, Himachal Pradesh 175131",
    whatsapp: "+91 98765 43212",
    whatsappHref: "https://wa.me/919876543212",
  },
  {
    key: "fyra-aashiyana",
    label: "Fyra Aashiyana",
    tagline: "Boutique Heritage Villa",
    accent: "#D4933E",
    accentClass: "accent-amber",
    borderClass: "border-amber",
    phone: "+91 98765 43213",
    email: "aashiyana@fyragroup.com",
    address: "Old Manali Road, Manali, Himachal Pradesh 175131",
    whatsapp: "+91 98765 43213",
    whatsappHref: "https://wa.me/919876543213",
  },
];

const INQUIRY_PROPERTIES = [
  { label: "Fyra Hotel", value: "fyra-hotel" },
  { label: "Fyra Aashiyana", value: "aashiyana" },
  { label: "Fyra Aashapuri Snow Line", value: "aashapuri-snow-line" },
  { label: "Not sure yet", value: "undecided" },
];

// ─── Google Maps embed data per property ─────────────────────────────────────

const PROPERTY_MAPS: Record<PropertyKey, { src: string; title: string }> = {
  "fyra-group": {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26989.78!2d77.1887!3d32.2432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904832f2b0f2a4d%3A0x7c91f4f4e4b8e6e!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin",
    title: "Fyra Group — Manali, Himachal Pradesh",
  },
  "fyra-hotel": {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26989.78!2d77.1887!3d32.2432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904832f2b0f2a4d%3A0x7c91f4f4e4b8e6e!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin",
    title: "Fyra Hotel Location Map",
  },
  "fyra-ashapuri": {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26989.78!2d77.1887!3d32.2432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904832f2b0f2a4d%3A0x7c91f4f4e4b8e6e!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin",
    title: "Fyra Ashapuri Snow Line Location Map",
  },
  "fyra-aashiyana": {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26989.78!2d77.1887!3d32.2432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904832f2b0f2a4d%3A0x7c91f4f4e4b8e6e!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin",
    title: "Fyra Aashiyana Location Map",
  },
};

// ─── Property Selector Dropdown ──────────────────────────────────────────────

function PropertySelector({
  selected,
  onChange,
}: {
  selected: ContactProperty;
  onChange: (key: PropertyKey) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full sm:w-auto sm:inline-block"
      data-ocid="contact.property_selector"
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        data-ocid="contact.property_dropdown_toggle"
        className="group w-full sm:w-auto flex items-center gap-3 bg-card border border-border px-4 sm:px-6 py-3.5 shadow-card hover:border-[var(--sel-accent)] transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        style={{ "--sel-accent": selected.accent } as React.CSSProperties}
      >
        {/* Accent pip */}
        <span
          className="w-2 h-2 rounded-full flex-shrink-0 transition-smooth"
          style={{ backgroundColor: selected.accent }}
        />
        <span className="font-body text-sm font-medium text-foreground tracking-wide min-w-[140px] text-left">
          {selected.label}
        </span>
        <span
          className="font-body text-[10px] tracking-wide-xl uppercase hidden sm:inline-block"
          style={{ color: selected.accent }}
        >
          {selected.tagline}
        </span>
        <ChevronDown
          className="w-4 h-4 text-muted-foreground transition-smooth"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 sm:right-auto mt-1 z-50 bg-card border border-border shadow-elevated sm:min-w-full sm:w-max"
            data-ocid="contact.property_dropdown"
          >
            {CONTACT_PROPERTIES.map((prop) => {
              const isActive = prop.key === selected.key;
              return (
                <div key={prop.key}>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onChange(prop.key);
                      setOpen(false);
                    }}
                    data-ocid={`contact.property_option.${prop.key}`}
                    className="w-full flex items-center gap-3 px-6 py-3.5 text-left hover:bg-muted/50 transition-smooth group/item focus-visible:outline-none focus-visible:bg-muted/50"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor: isActive ? prop.accent : "transparent",
                        border: `1.5px solid ${prop.accent}`,
                      }}
                    />
                    <div className="flex flex-col min-w-0">
                      <span
                        className="font-body text-sm font-medium transition-smooth"
                        style={{ color: isActive ? prop.accent : undefined }}
                      >
                        {prop.label}
                      </span>
                      <span className="font-body text-[10px] tracking-wide text-muted-foreground">
                        {prop.tagline}
                      </span>
                    </div>
                    {isActive && (
                      <span
                        className="ml-auto font-body text-[10px] tracking-wide-xl uppercase"
                        style={{ color: prop.accent }}
                      >
                        Selected
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Contact Details Card ────────────────────────────────────────────────────

function ContactDetailsCard({ property }: { property: ContactProperty }) {
  return (
    <motion.div
      key={property.key}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-8"
    >
      <div>
        <h2
          className="font-display text-2xl font-semibold text-foreground mb-6"
          style={{
            borderBottom: `2px solid ${property.accent}`,
            paddingBottom: "0.75rem",
            display: "inline-block",
          }}
        >
          Get In Touch
        </h2>
        <div className="space-y-5 mt-6">
          <div className="flex gap-4">
            <MapPin
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              style={{ color: property.accent }}
            />
            <div>
              <p className="font-body text-sm font-medium text-foreground">
                Address
              </p>
              <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">
                {property.address}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              style={{ color: property.accent }}
            />
            <div>
              <p className="font-body text-sm font-medium text-foreground">
                Phone
              </p>
              <a
                href={`tel:${property.phone.replace(/\s/g, "")}`}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-smooth mt-1 block"
              >
                {property.phone}
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Mail
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              style={{ color: property.accent }}
            />
            <div>
              <p className="font-body text-sm font-medium text-foreground">
                Email
              </p>
              <a
                href={`mailto:${property.email}`}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-smooth mt-1 block break-words"
              >
                {property.email}
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <MessageCircle
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              style={{ color: property.accent }}
            />
            <div>
              <p className="font-body text-sm font-medium text-foreground">
                WhatsApp
              </p>
              <a
                href={property.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-smooth mt-1 block"
              >
                {property.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hours block */}
      <div
        className="bg-muted/40 border p-5"
        style={{ borderColor: `${property.accent}33` }}
      >
        <p
          className="font-body text-xs tracking-wide-xl uppercase mb-4"
          style={{ color: property.accent }}
        >
          Reservations Hours
        </p>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-body text-xs text-muted-foreground">
              Mon–Sat
            </span>
            <span className="font-body text-xs text-foreground">
              9am – 8pm IST
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-xs text-muted-foreground">
              Sunday
            </span>
            <span className="font-body text-xs text-foreground">
              10am – 5pm IST
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-xs text-muted-foreground">
              WhatsApp
            </span>
            <span className="font-body text-xs text-foreground">24 / 7</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Google Maps Embed Component ─────────────────────────────────────────────

function PropertyMapEmbed({
  propertyKey,
  accent,
}: {
  propertyKey: PropertyKey;
  accent: string;
}) {
  const map = PROPERTY_MAPS[propertyKey];
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`map-${propertyKey}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full"
        data-ocid="contact.map"
      >
        <div
          className="rounded-xl overflow-hidden border shadow-card"
          style={{ borderColor: `${accent}40` }}
        >
          {/* GOOGLE MAPS EMBED — Replace src with your embed code from Google Maps → Share → Embed a map */}
          <iframe
            src={map.src}
            width="100%"
            className="w-full h-56 sm:h-72 md:h-96 block"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={map.title}
          />
        </div>
        <p className="font-body text-xs text-muted-foreground mt-2 px-1">
          Map placeholder — paste your Google Maps embed src here
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Inquiry Form ────────────────────────────────────────────────────────────

function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    checkin: "",
    checkout: "",
    guests: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    toast.success(
      "Your enquiry has been received. Our concierge will contact you within 24 hours.",
      { duration: 6000 },
    );
    setForm({
      name: "",
      email: "",
      phone: "",
      property: "",
      checkin: "",
      checkout: "",
      guests: "",
      message: "",
    });
  };

  return (
    <div className="bg-card border border-border shadow-card p-6 sm:p-8 md:p-10">
      <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8">
        Reservation Enquiry
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="font-body text-xs tracking-wide text-foreground"
            >
              Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="font-body text-sm"
              data-ocid="contact.name_input"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="font-body text-xs tracking-wide text-foreground"
            >
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="font-body text-sm"
              data-ocid="contact.email_input"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="font-body text-xs tracking-wide text-foreground"
            >
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 00000 00000"
              className="font-body text-sm"
              data-ocid="contact.phone_input"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="property"
              className="font-body text-xs tracking-wide text-foreground"
            >
              Preferred Property
            </Label>
            <select
              id="property"
              name="property"
              value={form.property}
              onChange={handleChange}
              className="w-full h-10 px-3 py-2 bg-background border border-input rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              data-ocid="contact.property_select"
            >
              <option value="">Select property</option>
              {INQUIRY_PROPERTIES.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="space-y-2">
            <Label
              htmlFor="checkin"
              className="font-body text-xs tracking-wide text-foreground"
            >
              Check-in
            </Label>
            <Input
              id="checkin"
              name="checkin"
              type="date"
              value={form.checkin}
              onChange={handleChange}
              className="font-body text-sm"
              data-ocid="contact.checkin_input"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="checkout"
              className="font-body text-xs tracking-wide text-foreground"
            >
              Check-out
            </Label>
            <Input
              id="checkout"
              name="checkout"
              type="date"
              value={form.checkout}
              onChange={handleChange}
              className="font-body text-sm"
              data-ocid="contact.checkout_input"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="guests"
              className="font-body text-xs tracking-wide text-foreground"
            >
              Guests
            </Label>
            <Input
              id="guests"
              name="guests"
              type="number"
              min="1"
              max="20"
              value={form.guests}
              onChange={handleChange}
              placeholder="2"
              className="font-body text-sm"
              data-ocid="contact.guests_input"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="message"
            className="font-body text-xs tracking-wide text-foreground"
          >
            Message / Special Requests
          </Label>
          <Textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your ideal stay, any special occasions, dietary requirements, or specific experiences you'd like us to arrange…"
            className="font-body text-sm resize-none"
            data-ocid="contact.message_input"
          />
        </div>

        <Button
          type="submit"
          disabled={submitting || !form.name || !form.email}
          data-ocid="contact.submit_button"
          className="w-full sm:w-auto bg-forest text-gold hover:bg-gold hover:text-forest font-body text-sm tracking-wide px-8 py-3 transition-smooth h-auto"
        >
          {submitting ? "Sending Enquiry…" : "Send Reservation Enquiry"}
        </Button>
      </form>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function ContactPage() {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState<PropertyKey>(() => {
    const params = new URLSearchParams(location.search);
    const prop = params.get("property");
    const valid: PropertyKey[] = [
      "fyra-group",
      "fyra-hotel",
      "fyra-ashapuri",
      "fyra-aashiyana",
    ];
    return valid.includes(prop as PropertyKey)
      ? (prop as PropertyKey)
      : "fyra-group";
  });

  // Sync when URL search changes (e.g. header dropdown navigates to same route with diff param)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const prop = params.get("property");
    const valid: PropertyKey[] = [
      "fyra-group",
      "fyra-hotel",
      "fyra-ashapuri",
      "fyra-aashiyana",
    ];
    if (prop && valid.includes(prop as PropertyKey)) {
      setSelectedKey(prop as PropertyKey);
    } else if (!prop) {
      setSelectedKey("fyra-group");
    }
  }, [location.search]);

  const selected = CONTACT_PROPERTIES.find((p) => p.key === selectedKey)!;
  const isGroup = selectedKey === "fyra-group";

  return (
    <div className="w-full overflow-x-hidden">
      {/* Header */}
      <section className="bg-muted/30 spacing-section border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-xs tracking-wide-xl text-gold uppercase mb-4"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4"
          >
            Begin Your Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-10"
          >
            Our concierge team is available to help you plan a perfect Himalayan
            escape. Reach out anytime.
          </motion.p>

          {/* Property Selector */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center px-4 sm:px-0"
          >
            <PropertySelector selected={selected} onChange={setSelectedKey} />
          </motion.div>
        </div>
      </section>

      {/* Accent bar — reflects selected property */}
      <div
        className="h-0.5 w-full transition-all duration-500"
        style={{ backgroundColor: selected.accent }}
        aria-hidden="true"
      />

      {/* Content */}
      <section className="bg-background spacing-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Selected property label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedKey}-header`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-10"
            >
              <p
                className="font-body text-xs tracking-wide-xl uppercase mb-1"
                style={{ color: selected.accent }}
              >
                {selected.tagline}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
                {selected.label}
              </h2>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {isGroup ? (
              /* Fyra Group: contact details + inquiry form side by side, map below */
              <motion.div
                key="fyra-group-content"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="space-y-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  <ContactDetailsCard property={selected} />
                  <div className="lg:col-span-2">
                    <InquiryForm />
                  </div>
                </div>

                {/* Google Maps embed below the contact + form grid */}
                <PropertyMapEmbed
                  propertyKey={selectedKey}
                  accent={selected.accent}
                />
              </motion.div>
            ) : (
              /* Individual property: contact details + aside panel, map below */
              <motion.div
                key={`${selectedKey}-content`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="space-y-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                  <div className="md:col-span-1">
                    <ContactDetailsCard property={selected} />
                  </div>

                  {/* Decorative aside — property info panel */}
                  <div
                    className="md:col-span-1 lg:col-span-2 bg-card border shadow-card p-6 sm:p-8 md:p-10 flex flex-col justify-between"
                    style={{ borderColor: `${selected.accent}33` }}
                  >
                    <div>
                      <p
                        className="font-body text-xs tracking-wide-xl uppercase mb-4"
                        style={{ color: selected.accent }}
                      >
                        Direct Contact
                      </p>
                      <p className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-6 leading-snug">
                        Reach Our Team
                        <br />
                        at {selected.label}
                      </p>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
                        For reservations, special arrangements, or any enquiries
                        specific to this property, our dedicated team is here to
                        assist you. You can reach us by phone, email, or
                        WhatsApp anytime.
                      </p>

                      <div className="space-y-4">
                        <a
                          href={`tel:${selected.phone.replace(/\s/g, "")}`}
                          className="flex items-center gap-3 group/item"
                          data-ocid="contact.property_phone_link"
                        >
                          <span
                            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-smooth group-hover/item:scale-110"
                            style={{
                              backgroundColor: `${selected.accent}18`,
                              border: `1px solid ${selected.accent}40`,
                            }}
                          >
                            <Phone
                              className="w-4 h-4"
                              style={{ color: selected.accent }}
                            />
                          </span>
                          <div>
                            <p className="font-body text-[10px] tracking-wide text-muted-foreground uppercase">
                              Phone
                            </p>
                            <p className="font-body text-sm font-medium text-foreground group-hover/item:underline">
                              {selected.phone}
                            </p>
                          </div>
                        </a>

                        <a
                          href={`mailto:${selected.email}`}
                          className="flex items-center gap-3 group/item"
                          data-ocid="contact.property_email_link"
                        >
                          <span
                            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-smooth group-hover/item:scale-110"
                            style={{
                              backgroundColor: `${selected.accent}18`,
                              border: `1px solid ${selected.accent}40`,
                            }}
                          >
                            <Mail
                              className="w-4 h-4"
                              style={{ color: selected.accent }}
                            />
                          </span>
                          <div>
                            <p className="font-body text-[10px] tracking-wide text-muted-foreground uppercase">
                              Email
                            </p>
                            <p className="font-body text-sm font-medium text-foreground group-hover/item:underline break-all">
                              {selected.email}
                            </p>
                          </div>
                        </a>

                        <a
                          href={selected.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 group/item"
                          data-ocid="contact.property_whatsapp_link"
                        >
                          <span
                            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-smooth group-hover/item:scale-110"
                            style={{
                              backgroundColor: `${selected.accent}18`,
                              border: `1px solid ${selected.accent}40`,
                            }}
                          >
                            <MessageCircle
                              className="w-4 h-4"
                              style={{ color: selected.accent }}
                            />
                          </span>
                          <div>
                            <p className="font-body text-[10px] tracking-wide text-muted-foreground uppercase">
                              WhatsApp
                            </p>
                            <p className="font-body text-sm font-medium text-foreground group-hover/item:underline">
                              {selected.whatsapp}
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div
                      className="mt-10 pt-6 border-t"
                      style={{ borderColor: `${selected.accent}30` }}
                    >
                      <p className="font-body text-xs text-muted-foreground">
                        For group reservations or event enquiries, please
                        contact{" "}
                        <button
                          type="button"
                          onClick={() => setSelectedKey("fyra-group")}
                          className="underline hover:text-foreground transition-smooth"
                          data-ocid="contact.switch_to_group_link"
                          style={{ color: selected.accent }}
                        >
                          Fyra Group central reservations
                        </button>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                {/* GOOGLE MAPS EMBED — Replace src with your embed code */}
                <PropertyMapEmbed
                  propertyKey={selectedKey}
                  accent={selected.accent}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
