import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const PROPERTIES = [
  { label: "Fyra Hotel", value: "fyra-hotel" },
  { label: "Fyra Aashiyana", value: "aashiyana" },
  { label: "Fyra Aashapuri Snow Line", value: "aashapuri-snow-line" },
  { label: "Not sure yet", value: "undecided" },
];

export function ContactPage() {
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
      {
        duration: 6000,
      },
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
    <div className="w-full">
      {/* Header */}
      <section className="bg-muted/30 spacing-section border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
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
            className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4"
          >
            Begin Your Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base text-muted-foreground leading-relaxed"
          >
            Our concierge team is available to help you plan a perfect Himalayan
            escape. Reach out anytime.
          </motion.p>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-muted/20 py-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-72 md:h-96 overflow-hidden"
          data-ocid="map-placeholder"
          aria-label="Map of Fyra Group properties in Manali, Himachal Pradesh"
        >
          {/* Terrain-style CSS map background */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 50% 40%, #c8d8b0 0%, #b8cc9a 18%, #9ab882 35%, #7da068 52%, #5a8050 68%, #3d6038 82%, #1a2e1a 100%)
              `,
            }}
          />
          {/* Topographic contour lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 350"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <g fill="none" stroke="#ffffff" strokeOpacity="0.08">
              <ellipse cx="400" cy="175" rx="380" ry="155" />
              <ellipse cx="400" cy="175" rx="330" ry="130" />
              <ellipse cx="400" cy="175" rx="280" ry="108" />
              <ellipse cx="400" cy="175" rx="230" ry="88" />
              <ellipse cx="400" cy="175" rx="180" ry="68" />
              <ellipse cx="400" cy="175" rx="130" ry="50" />
              <ellipse cx="400" cy="175" rx="80" ry="32" />
              <path d="M0 140 Q200 90 400 120 T800 100" />
              <path d="M0 200 Q200 160 400 180 T800 160" />
              <path d="M0 260 Q200 230 400 245 T800 220" />
              <path d="M60 0 Q80 80 100 175 T140 350" />
              <path d="M200 0 Q220 80 240 175 T260 350" />
              <path d="M540 0 Q560 80 570 175 T580 350" />
              <path d="M680 0 Q700 80 720 175 T740 350" />
            </g>
            {/* Snow peak highlights */}
            <g fill="#ffffff" fillOpacity="0.06">
              <polygon points="120,30 160,110 80,110" />
              <polygon points="300,10 355,100 245,100" />
              <polygon points="500,20 550,105 450,105" />
              <polygon points="680,40 720,115 640,115" />
            </g>
            {/* River / road line */}
            <path
              d="M0 230 Q150 210 280 220 Q400 235 520 215 Q640 200 800 210"
              fill="none"
              stroke="#7ec8e3"
              strokeOpacity="0.3"
              strokeWidth="2"
            />
          </svg>

          {/* Location label */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-forest/70 backdrop-blur-sm border border-gold/30 px-5 py-2 text-center">
            <p className="font-body text-[10px] tracking-wide-xl text-gold uppercase">
              Manali, Himachal Pradesh, India
            </p>
          </div>

          {/* Property pins */}
          {[
            { label: "Fyra Hotel", x: "42%", y: "44%", accent: "#C9A84C" },
            { label: "Fyra Aashiyana", x: "33%", y: "58%", accent: "#D4933E" },
            {
              label: "Fyra Aashapuri Snow Line",
              x: "56%",
              y: "30%",
              accent: "#7EC8E3",
            },
          ].map((pin) => (
            <div
              key={pin.label}
              className="absolute flex flex-col items-center"
              style={{
                left: pin.x,
                top: pin.y,
                transform: "translate(-50%, -100%)",
              }}
            >
              {/* Pin marker */}
              <div
                className="w-5 h-5 rounded-full border-2 border-card shadow-elevated flex items-center justify-center mb-0.5"
                style={{ backgroundColor: pin.accent }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-card" />
              </div>
              {/* Pin tail */}
              <div
                className="w-0.5 h-3"
                style={{ backgroundColor: pin.accent }}
              />
              {/* Label bubble */}
              <div
                className="bg-card/90 backdrop-blur-sm border px-2.5 py-1 mt-0.5 text-center shadow-card whitespace-nowrap"
                style={{ borderColor: pin.accent }}
              >
                <p className="font-body text-[10px] font-medium text-foreground leading-tight">
                  {pin.label}
                </p>
              </div>
            </div>
          ))}

          {/* Compass rose */}
          <div className="absolute bottom-4 right-6 text-card/40 font-body text-[10px] tracking-wide">
            <div className="flex flex-col items-center gap-0.5">
              <span>N</span>
              <span className="text-xs">↑</span>
            </div>
          </div>

          {/* Scale bar */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <div className="h-0.5 w-12 bg-card/30" />
            <span className="font-body text-[9px] text-card/40 tracking-wide">
              5 km
            </span>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="bg-background spacing-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6 gold-underline">
                Get In Touch
              </h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">
                      Address
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      The Mall Road, Manali
                      <br />
                      Himachal Pradesh 175131, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">
                      Phone
                    </p>
                    <a
                      href="tel:+919876543210"
                      className="font-body text-sm text-muted-foreground hover:text-gold transition-smooth mt-1 block"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:reservations@fyragroup.com"
                      className="font-body text-sm text-muted-foreground hover:text-gold transition-smooth mt-1 block break-words"
                    >
                      reservations@fyragroup.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MessageCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">
                      WhatsApp Concierge
                    </p>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-muted-foreground hover:text-gold transition-smooth mt-1 block"
                    >
                      Chat with us anytime
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-muted/40 border border-border p-5">
              <p className="font-body text-xs tracking-wide-xl text-gold uppercase mb-4">
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
                  <span className="font-body text-xs text-foreground">
                    24 / 7
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-card border border-border shadow-card p-8 md:p-10">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
                Reservation Enquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name + Email */}
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
                      data-ocid="contact-name-input"
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
                      data-ocid="contact-email-input"
                    />
                  </div>
                </div>

                {/* Phone + Property */}
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
                      data-ocid="contact-phone-input"
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
                      data-ocid="contact-property-select"
                    >
                      <option value="">Select property</option>
                      {PROPERTIES.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Dates + guests */}
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
                      data-ocid="contact-checkin-input"
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
                      data-ocid="contact-checkout-input"
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
                      data-ocid="contact-guests-input"
                    />
                  </div>
                </div>

                {/* Message */}
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
                    data-ocid="contact-message-input"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting || !form.name || !form.email}
                  data-ocid="contact-submit-btn"
                  className="w-full sm:w-auto bg-forest text-gold hover:bg-gold hover:text-forest font-body text-sm tracking-wide px-8 py-3 transition-smooth h-auto"
                >
                  {submitting ? "Sending Enquiry…" : "Send Reservation Enquiry"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
