import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
  Send,
  Globe
} from "lucide-react";
import { motion } from "motion/react";
import { IMAGES } from "../constants/images";
import { useHeroParallax } from "../hooks/useHeroParallax";
import { KineticText } from "../components/KineticText";

const OFFICES = [
  {
    title: "Head Office (Manali)",
    address: "FYRA Hotel, Near Himachal Gramin Bank, Prini, Manali, HP – 175131",
    phone: "+91 97117 54726",
    email: "enquiry@fyrahotel.com",
    whatsapp: "+91 97117 54726",
    whatsappHref: "https://wa.me/919711754726",
    type: "Central Reservations",
  },
  {
    title: "North Sales Office (Noida)",
    address: "Unit No. 849, 8th Floor, Astralis Tower, Sector 94, Noida, Uttar Pradesh",
    phone: "+91 70655 91801",
    email: "enquiry@fyrahotel.com",
    whatsapp: "+91 70655 91801",
    whatsappHref: "https://wa.me/917065591801",
    type: "Regional Sales",
  },
  {
    title: "Gujarat Sales Office (Vadodara)",
    address: "402-403, Prince Cube, Beside Gangotri Exotica, Gotri, Vadodara, Gujarat – 390021",
    phone: "+91 63544 86936",
    email: "gujratsales@fyrahotel.com",
    whatsapp: "+91 63544 86936",
    whatsappHref: "https://wa.me/916354486936",
    type: "Regional Sales",
  },
];

const PROPERTY_CONTACTS = [
  {
    name: "Fyra Hotel",
    tagline: "Modern Luxury Flagship",
    phone: "+91 97117 54726",
    whatsappHref: "https://wa.me/919711754726",
    image: IMAGES.FYRA_HOTEL.HERO,
    accent: "#C9A84C",
  },
  {
    name: "FYRA AASHIYANA THE GHAR",
    tagline: "The Ghar (Boutique Stay)",
    phone: "+91 97117 54726",
    whatsappHref: "https://wa.me/919711754726",
    image: IMAGES.AASHIYANA.AERIAL,
    accent: "#D4933E",
  },
  {
    name: "Ashapuri Snow Inn",
    tagline: "High-Altitude Luxury",
    phone: "+91 97117 54726",
    whatsappHref: "https://wa.me/919711754726",
    image: IMAGES.ASHAPURI.HERO,
    accent: "#7EC8E3",
  },
];

export function ContactPage() {
  const { heroRef, imageRef } = useHeroParallax();

  return (
    <div className="w-full overflow-x-hidden bg-background">
      {/* Cinematic Hero */}
      <section 
        ref={heroRef}
        className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-forest/40 z-10" />
        <div 
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center hero-exhale"
          style={{ backgroundImage: `url(${IMAGES.CONTACT.HERO})` }}
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <KineticText
            className="font-body text-xs tracking-wide-xl text-gold uppercase mb-6"
            delay={0.2}
          >
            Connect With Us
          </KineticText>
          <KineticText
            className="font-display text-[32px] xs:text-4xl sm:text-5xl md:text-7xl font-semibold text-card mb-8 leading-tight text-shadow-premium"
            delay={0.4}
          >
            Heartfelt Hospitality <br />
            <span className="italic font-normal">Just a Call Away.</span>
          </KineticText>
        </div>
      </section>

      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Side: Sales Network */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-16">
               <h2 className="font-display text-3xl font-semibold text-foreground italic">Our Sales Network</h2>
               <div className="h-px flex-1 bg-gold/20" />
            </div>

            <div className="space-y-12">
              {OFFICES.map((office, i) => (
                <motion.div
                  key={office.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-card border border-border/50 p-8 sm:p-10 hover:border-gold/30 transition-smooth shadow-refined"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                    <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-gold transition-smooth uppercase tracking-tight">
                      {office.title}
                    </h3>
                    <span className="font-body text-[10px] tracking-wide-xl text-gold uppercase px-4 py-1.5 bg-gold/5 border border-gold/10 rounded-full w-fit">
                      {office.type}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex gap-4">
                      <div className="p-3 bg-muted rounded-sm h-fit">
                        <MapPin className="w-4 h-4 text-gold" />
                      </div>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {office.address}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex gap-4 items-center group/link">
                        <div className="p-3 bg-muted rounded-sm">
                          <Phone className="w-4 h-4 text-gold" />
                        </div>
                        <a
                          href={`tel:${office.phone.replace(/\s/g, "")}`}
                          className="font-body text-sm font-semibold text-foreground hover:text-gold transition-smooth underline-offset-4 hover:underline"
                        >
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex gap-4 items-center group/link">
                        <div className="p-3 bg-muted rounded-sm">
                          <Mail className="w-4 h-4 text-gold" />
                        </div>
                        <a
                          href={`mailto:${office.email}`}
                          className="font-body text-sm font-semibold text-foreground hover:text-gold transition-smooth break-all underline-offset-4 hover:underline"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Direct Property Reservations */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="flex items-center gap-4 mb-16">
                 <h2 className="font-display text-3xl font-semibold text-foreground italic">Direct Reservations</h2>
                 <div className="h-px flex-1 bg-gold/20" />
              </div>

              <div className="space-y-8">
                {PROPERTY_CONTACTS.map((hotel, i) => (
                  <motion.div
                    key={hotel.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative bg-card border border-border/50 shadow-card overflow-hidden"
                  >
                    {/* Visual Card Image */}
                    <div className="relative aspect-[16/7] overflow-hidden">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-1000"
                      />
                      <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-1" 
                        style={{ backgroundColor: hotel.accent }} 
                      />
                    </div>

                    <div className="p-8">
                      <div className="flex flex-col mb-8">
                        <span
                          className="font-body text-[10px] tracking-wide-xl uppercase mb-2"
                          style={{ color: hotel.accent }}
                        >
                          {hotel.tagline}
                        </span>
                        <h3 className="font-display text-2xl font-bold text-foreground uppercase tracking-tighter">
                          {hotel.name}
                        </h3>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={`tel:${hotel.phone.replace(/\s/g, "")}`}
                          className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 bg-forest text-card font-body text-xs font-bold tracking-widest hover:brightness-110 transition-smooth rounded-sm"
                        >
                          <Phone className="w-4 h-4" /> CALL NOW
                        </a>
                        <a
                          href={hotel.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 border border-forest/20 text-forest font-body text-xs font-bold tracking-widest hover:bg-forest/5 transition-smooth rounded-sm"
                        >
                          <MessageCircle className="w-4 h-4" /> WHATSAPP
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Support / Social */}
              <div className="mt-16 p-10 bg-muted/50 border border-border/50 rounded-sm text-center">
                 <Globe className="w-8 h-8 text-gold mx-auto mb-6" />
                 <h4 className="font-display text-xl font-semibold mb-4">Follow Our Journey</h4>
                 <div className="flex justify-center gap-6">
                    {[Instagram, Facebook, Youtube].map((Icon, i) => (
                      <a 
                        key={i} 
                        href="#" 
                        className="p-3 bg-background border border-border/50 rounded-full hover:text-gold hover:border-gold transition-smooth"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Inquiry CTA */}
      <section className="bg-background py-24 sm:py-32 relative text-center border-t border-border overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
           <div className="absolute inset-0 bg-[url('/assets/hero/hero-hotel-aerial.webp')] bg-cover bg-center grayscale" />
        </div>

        <div className="max-w-3xl mx-auto px-4 relative z-10">
           <div className="w-16 h-16 bg-gold/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/10">
              <Send className="w-6 h-6 text-gold opacity-80" />
           </div>
           <h2 className="font-display text-3xl sm:text-4xl text-foreground font-semibold mb-8">
             Have a Specific Inquiry?
           </h2>
           <p className="font-body text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed">
             Our central reservation team is ready to assist you with corporate bookings, 
             destination weddings, or large group retreats.
           </p>
           <a 
             href="mailto:enquiry@fyrahotel.com"
             className="inline-flex items-center gap-3 px-12 py-5 bg-gold text-forest font-body text-sm font-bold tracking-widest hover:bg-forest hover:text-gold transition-smooth rounded-sm shadow-xl"
           >
             ENQUIRE VIA EMAIL
           </a>
        </div>
      </section>
    </div>
  );
}
