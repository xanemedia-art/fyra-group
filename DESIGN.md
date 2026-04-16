# Design Brief

## Direction

Fyra Group Quiet Luxury — Premium 5-star hospitality website blending modern minimalism with Himalayan grandeur.

## Tone

Refined editorial minimalism with sophisticated serif display typography and generous whitespace; every element serves storytelling over decoration.

## Differentiation

Signature gold accents on headings and card borders paired with parallax mountain imagery and sticky luxury CTAs create a distinctive premium aesthetic that avoids generic hospitality clichés.

## Color Palette

| Token       | OKLCH             | Role                              |
| ----------- | ----------------- | --------------------------------- |
| background  | 0.988 0.004 75    | Snow Peak White — primary surface |
| foreground  | 0.18 0.035 155    | Deep Forest Green — primary text  |
| primary     | 0.18 0.035 155    | Forest Green — headings, links    |
| accent      | 0.7 0.12 75       | Champagne Gold — highlights       |
| card        | 0.995 0.002 75    | Off-white — elevated surfaces     |
| border      | 0.92 0.008 75     | Subtle dividers                   |
| chart-1     | 0.7 0.12 75       | Gold (Fyra Hotel)                 |
| chart-2     | 0.65 0.14 60      | Warm Amber (Aashiyana)            |
| chart-3     | 0.7 0.08 230      | Icy Blue (Aashapuri Snow Line)    |

## Typography

- Display: Lora — elegant serif for h1–h3, property headings, hero text
- Body: DM Sans — clean sans-serif for body copy, UI labels, descriptions
- Scale: h1 `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-4xl font-bold`, body `text-base md:text-lg leading-relaxed`

## Elevation & Depth

Subtle refined shadows (`shadow-refined`, `shadow-card`) on cards; depth achieved through subtle background tint shifts and delicate borders rather than heavy drop shadows.

## Structural Zones

| Zone    | Background        | Border                  | Notes                                |
| ------- | ----------------- | ----------------------- | ------------------------------------ |
| Header  | card (off-white)  | border-gold (subtle)    | Sticky nav, Lora branding            |
| Hero    | parallax imagery  | —                       | Full-width mountain cinematic image  |
| Sections| bg + card (alt)   | border-gold (accents)   | Alternating white/cream sections     |
| CTAs    | accent (gold)     | —                       | Sticky "Book Your Stay" bar at bottom |
| Footer  | foreground (dark) | border-t border-gold    | Dark background, gold divider        |

## Spacing & Rhythm

Generous vertical rhythm (12–32px section gaps) with micro-spacing (4–8px) within cards; content breathes through whitespace over density.

## Component Patterns

- Buttons: Rounded corners, gold background, Deep Forest Green text, 0.3s smooth hover transitions
- Cards: Subtle rounded borders (6px), off-white background, delicate gold border accents, refined shadow
- Badges: Uppercase labels, Deep Forest Green text on off-white background, minimal padding
- Property accents: Fyra Hotel = Champagne Gold, Aashiyana = Warm Amber, Aashapuri = Icy Blue (applied to borders, headings, buttons)

## Motion

- Entrance: Fade-in on scroll (IntersectionObserver), 0.6s smooth timing
- Hover: 0.3s color shift on buttons, text links, card borders
- Parallax: Subtle fixed background-attachment on mountain imagery (parallax-bg utility)

## Constraints

- Light mode only (luxury brand positioning, high-readability requirement)
- No gaudy gradients, neon, or bounce animations
- Serif typography reserved for headings (Lora); body always DM Sans for readability
- Gold accents used sparingly—primarily borders, buttons, highlights; never as background fills
- Responsive: desktop 1440px, tablet 768px, mobile 375px
- All interactive elements use `transition-smooth` (0.3s cubic-bezier)

## Signature Detail

Delicate gold borders on property cards combined with property-specific accent color swaps (per Fyra hotel, Aashiyana amber, Aashapuri blue) create visual distinctiveness while maintaining cohesive luxury brand identity — refined hospitality visual language.
