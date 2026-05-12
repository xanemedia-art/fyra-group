export interface Property {
  id: string;
  name: string;
  tagline: string;
  description: string;
  location: string;
  accentColor: string;
  accentClass: string;
  borderClass: string;
  slug: string;
  heroImage: string;
  highlights: string[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  property: string;
  rating: number;
  avatar?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  duration?: string;
}

export type PropertyAccent = "gold" | "amber" | "icy-blue";
