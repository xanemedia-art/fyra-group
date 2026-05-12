/**
 * CENTRAL IMAGE MANAGEMENT
 * This is the single source of truth for all images on the Fyra Group website.
 * Update any path here to change the image site-wide.
 * 
 * NOTE: Local assets have been optimized to WebP format for fast loading.
 */

export const IMAGES = {
  // GLOBAL ASSETS
  LOGO: "/assets/fyra-logo.webp",

  // HOME PAGE
  HOME: {
    HERO_SLIDESHOW: [
      "/assets/hero/hero-hotel-aerial.webp",
      "/assets/hero/hero-ashapuri-night.webp",
      "/assets/hero/DSC03695.webp",
      "/assets/hero/IMG_2826.webp",
      "/assets/hero/IMG_2803.webp"
    ],
    CTA_BACKGROUND: "/assets/hero/IMG_2804.webp"
  },

  // FYRA HOTEL PAGE
  FYRA_HOTEL: {
    HERO: "/assets/hero/Fyra hotel main.webp",
    AERIAL: "/assets/hero/Fyra hotel main.webp",
    DINING_HERO: "https://fyrahotel.com/wp-content/uploads/2021/05/24.png",
    GALLERY: [
      "/assets/hero/IMG_2826.webp",
      "/assets/hero/DSC03695.webp",
      "/assets/hero/IMG_2805.webp",
      "/assets/hero/hero-hotel-aerial.webp"
    ],
    ROOMS: {
      SUPER_DELUXE: "/assets/hero/DSC03695.webp",
      DELUXE: "/assets/hero/fyra deluxe.webp",
      FAMILY: "/assets/hero/fyra family.webp"
    }
  },

  // AASHIYANA PAGE
  AASHIYANA: {
    HERO: "/assets/hero/DSC03695.webp",
    AERIAL: "/assets/fyra%20aashiyana/DJI_20260418220208_0249_D.webp",
    DINING: "/assets/hero/IMG_2805.webp",
    ROOMS: {
      SUPER_DELUXE: "/assets/hero/DSC03695.webp",
      DELUXE: "/assets/hero/IMG_2805.webp",
      FAMILY: "/assets/hero/DSC03695.webp"
    }
  },

  // ASHAPURI PAGE
  ASHAPURI: {
    HERO: "/assets/hero/hero-ashapuri-night.webp",
    AERIAL: "/assets/fyra%20ashapuri/DJI_20260418203601_0225_D.webp",
    ROOMS: {
      SUPER_DELUXE: "/assets/hero/DSC03552.webp",
      DELUXE: "/assets/hero/ashapuri del.webp",
      FAMILY: "/assets/hero/DSC03552.webp"
    }
  },

  // ACTIVITIES PAGE
  ACTIVITIES: {
    HERO: "/assets/hero/IMG_2804.webp",
    TREKKING: "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1200x675/Blog_20240923-893941706-1727088830.jpg",
    CULTURE: "https://storage.googleapis.com/stateless-www-justwravel-com/2024/09/8d46b552-discover-old-manali-a-complete-guide-to-its-charm-and-heritage.jpg",
    WELLNESS: "https://images.stockcake.com/public/e/b/e/ebeb0692-8b16-4636-badf-8158504ad792_large/sunrise-yoga-pose-stockcake.jpg",
    ADVENTURE: "https://discoverkullumanali.in/wp-content/uploads/2023/06/Paragliding-in-Manali.jpg",
    STARGAZING: "https://i.pinimg.com/736x/8e/62/33/8e6233a6622b72e02bcaecb4152920d0.jpg",
    SPA: "https://www.snowvalleyresorts.com/wp-content/uploads/werr.jpg"
  },

  // GALLERY PAGE (Categorized)
  GALLERY: [
    {
      src: "/assets/hero/hero-hotel-aerial.webp",
      alt: "Aerial view of Fyra Hotel Flagship",
      category: "Fyra Hotel",
      type: "exterior"
    },
    {
      src: "/assets/hero/IMG_2803.webp",
      alt: "Snow-capped Himalayan peaks",
      category: "Landscapes",
      type: "scenery"
    },
    {
      src: "/assets/hero/DSC03695.webp",
      alt: "Luxury room interiors",
      category: "Fyra Hotel",
      type: "interior"
    },
    {
      src: "/assets/hero/IMG_2804.webp",
      alt: "Morning mist in the valley",
      category: "Landscapes",
      type: "scenery"
    },
    {
      src: "/assets/fyra%20aashiyana/DJI_20260418220208_0249_D.webp",
      alt: "FYRA AASHIYANA THE GHAR Architecture",
      category: "FYRA AASHIYANA THE GHAR",
      type: "exterior"
    },
    {
      src: "/assets/hero/hero-ashapuri-night.webp",
      alt: "Ashapuri Snow Inn at Night",
      category: "Ashapuri",
      type: "exterior"
    },
    {
      src: "/assets/hero/IMG_2805.webp",
      alt: "Cozy fireplace lounge",
      category: "Fyra Hotel",
      type: "interior"
    },
    {
      src: "/assets/hero/IMG_2826.webp",
      alt: "Main property entrance",
      category: "Fyra Hotel",
      type: "exterior"
    },
    {
      src: "/assets/fyra%20ashapuri/DJI_20260418203601_0225_D.webp",
      alt: "Aerial view of Ashapuri",
      category: "Ashapuri",
      type: "exterior"
    }
  ],

  // ABOUT PAGE
  ABOUT: {
    HERO: "/assets/hero/DSC03695.webp",
    STORY: "/assets/hero/IMG_2803.webp",
    FOUNDER_BG: "/assets/hero/IMG_2805.webp",
  },

  // COMMON / UTILITY
  PLACEHOLDERS: {
    VALLEY_VIEW: "/assets/hero/IMG_2803.webp"
  }
};
