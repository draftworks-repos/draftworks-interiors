export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Philosophy' | 'Materials' | 'Lighting' | 'Architecture' | 'Craftsmanship';
  author: {
    name: string;
    role: string;
  };
  publishedDate: string;
  readingTime: string;
  heroImage: string;
  excerpt: string;
  featured: boolean;
  content: {
    heading?: string;
    body: string[];
    quote?: string;
    callout?: string;
  }[];
  tags: string[];
}

export const articles: Article[] = [
  {
    slug: 'the-art-of-warm-minimalism',
    title: 'The Art of Warm Minimalism in Modern Indian Homes',
    subtitle: 'Moving beyond cold austerity toward sensory comfort, natural light, and quiet texture.',
    category: 'Philosophy',
    author: {
      name: 'Devansh Rathore',
      role: 'Principal Architect & Founder',
    },
    publishedDate: 'October 18, 2025',
    readingTime: '6 min read',
    heroImage: '/images/living_day.jpg',
    excerpt:
      'Warm minimalism is not about what you remove; it is about the quiet dignity of what remains. How we balance restraint with tactile warmth in our regional climate.',
    featured: true,
    tags: ['Warm Minimalism', 'Interior Architecture', 'Philosophy', 'Bhopal Homes'],
    content: [
      {
        heading: 'The Misunderstanding of Minimalism',
        body: [
          'For over two decades, modern minimalism was often conflated with sterile white clinical cubes—lacquered acrylic surfaces, stark chrome accents, and an unsettling absence of human life. While visually striking on glossy magazine spreads, such spaces rarely age well under daily domestic rituals.',
          'In Indian homes, where light is bright, family life is multifaceted, and culinary traditions are aromatic, cold minimalism quickly feels alien. Our studio champions an alternative: Warm Minimalism.',
        ],
        quote: 'Warm minimalism is not about empty space. It is about emotional space—giving the eye a place to rest and the mind a moment to breathe.',
      },
      {
        heading: 'Textures as the New Ornamentation',
        body: [
          'When moldings and ornate carvings are stripped away, the tactile quality of every surface takes center stage. A hand-troweled lime-washed wall doesn’t just reflect light; it absorbs and softens it.',
          'We pair rough, open-pored travertine with brushed European white oak and nubby bouclé wool. Because the palette remains restrained in tones of oatmeal, sand, and taupe, the variety of textures prevents the room from feeling flat.',
        ],
        callout: 'Key takeaway: Restrict your color palette to 3 or 4 earthy tones, but double your tactile material variations.',
      },
      {
        heading: 'Designing with the Sun in Central India',
        body: [
          'The quality of daylight changes dramatically between the crisp morning clarity of November and the blinding summer heat of May. By utilizing deep window reveals, linen shearings, and internal courtyard wells, we welcome daylight while filtering harsh thermal gain.',
          'True luxury in modern residential design is waking up to gentle diffused shadows that move slowly across natural timber floorboards throughout the day.',
        ],
      },
    ],
  },
  {
    slug: 'choosing-materials-that-age-beautifully',
    title: 'Choosing Materials That Age Beautifully: Lime Plaster, Unlacquered Brass, and Travertine',
    subtitle: 'Why living materials outperform synthetic perfection over decades of domestic use.',
    category: 'Materials',
    author: {
      name: 'Aditi Varma',
      role: 'Head of Material Science & Styling',
    },
    publishedDate: 'September 24, 2025',
    readingTime: '5 min read',
    heroImage: '/images/bedroom_day.jpg',
    excerpt:
      'Why synthetic finishes quickly look tired, whereas natural limestone, vegetable-tanned leather, and raw brass only grow more soulful with touch and time.',
    featured: true,
    tags: ['Materials', 'Patina', 'Lime Plaster', 'Brass', 'Sustainability'],
    content: [
      {
        heading: 'The Fallacy of the Maintenance-Free Surface',
        body: [
          'Clients often ask for materials that will look brand new forever. In reality, synthetic high-gloss laminates and artificial quartz may resist early scratches, but when damaged, they cannot be repaired—only replaced.',
          'Living materials, on the other hand, embrace the Japanese philosophy of wabi-sabi: beauty in transience and imperfection.',
        ],
      },
      {
        heading: 'Unlacquered Brass: The Living Finish',
        body: [
          'When brass is coated in clear lacquer, it retains a shiny yellow hue for a few years until the coating chips and turns cloudy. When left unlacquered, the touch of human hands, natural humidity, and oxygen oxidize the surface into deep antique bronze and golden amber tones.',
          'At DraftWorks, we custom-cast door handles, cabinet latches, and light fixtures from solid unlacquered brass, celebrating their living evolution.',
        ],
        quote: 'A home should not be a museum frozen in time; it should be a parchment that gracefully records the passage of life.',
      },
      {
        heading: 'The Breathability of Slaked Lime',
        body: [
          'Unlike modern plastic-based emulsion paints that trap humidity inside walls, slaked lime plasters absorb and release airborne moisture naturally, preventing mold growth and creating an indoor climate of unparalleled freshness.',
        ],
      },
    ],
  },
  {
    slug: 'how-lighting-changes-the-feeling-of-a-room',
    title: 'The Dual Life of Spaces: Designing for Morning Light and Evening Intimacy',
    subtitle: 'Orchestrating architectural illumination, 2700K color temperatures, and glare-free shadows.',
    category: 'Lighting',
    author: {
      name: 'Devansh Rathore',
      role: 'Principal Architect & Founder',
    },
    publishedDate: 'August 14, 2025',
    readingTime: '7 min read',
    heroImage: '/images/bedroom_night.jpg',
    excerpt:
      'A room should never have just one lighting mode. How our Day & Night interior architectural framework balances morning productivity with restorative evening calm.',
    featured: true,
    tags: ['Lighting Architecture', 'Circadian Design', 'Day and Night', 'Atmosphere'],
    content: [
      {
        heading: 'The Crime of the Central Ceiling Light',
        body: [
          'The fastest way to destroy the warmth of an interior is a single bright ceiling panel beaming cool white light downward. It flattens architectural volumes, creates harsh eye fatigue, and triggers alert stress responses.',
          'We design every room with a minimum of three distinct lighting layers: ambient wash, focal task spots, and intimate low-level glow.',
        ],
        quote: 'Shadows are not the absence of light; they are the sculpted negative space that gives light its poetry.',
      },
      {
        heading: 'The 2700K Standard',
        body: [
          'In all residential living rooms and bedrooms, we specify an unwavering 2700 Kelvin color temperature with a Color Rendering Index (CRI) exceeding 95. This reveals the genuine undertones of natural timber and stone without clinical distortion.',
          'In our Day/Night interactive showcase, you can witness firsthand how cove illumination and low-level table lamps completely transform the psychological temperature of the bedroom.',
        ],
      },
    ],
  },
  {
    slug: 'the-courtyard-tradition-reimagined',
    title: 'Reimagining the Indian Courtyard in Contemporary Architecture',
    subtitle: 'How traditional climate-responsive Haveli architecture informs sustainable modern villas.',
    category: 'Architecture',
    author: {
      name: 'Devansh Rathore',
      role: 'Principal Architect & Founder',
    },
    publishedDate: 'July 30, 2025',
    readingTime: '5 min read',
    heroImage: '/images/dining.jpg',
    excerpt:
      'The central courtyard has cooled Indian homes for centuries. How we adapt internal green courtyards to modern urban plots for acoustic privacy and thermal comfort.',
    featured: false,
    tags: ['Courtyard Design', 'Heritage', 'Biophilic Design', 'Central India'],
    content: [
      {
        heading: 'Inward Sanctuary',
        body: [
          'As Indian urban centers grow denser, street noise and dust make conventional outward-facing balconies increasingly unviable. Turning the architecture inward toward a private central courtyard solves both issues simultaneously.',
        ],
      },
      {
        heading: 'Passive Microclimates',
        body: [
          'A stone-lined courtyard planted with indigenous trees and a tranquil water basin acts as a thermal chimney. Hot air rises and escapes through upper clerestory windows, drawing cool air through lower living spaces without reliance on power-hungry air conditioning.',
        ],
      },
    ],
  },
  {
    slug: 'tactile-living-linen-wood-stone',
    title: 'Tactile Living: Combining Raw Textures for Acoustic and Visual Calm',
    subtitle: 'How acoustic softness and natural materials reduce sensory overload in daily domestic life.',
    category: 'Craftsmanship',
    author: {
      name: 'Aditi Varma',
      role: 'Head of Material Science & Styling',
    },
    publishedDate: 'June 12, 2025',
    readingTime: '4 min read',
    heroImage: '/images/study.jpg',
    excerpt:
      'Why spaces that feel good to the hand inevitably feel good to the soul. Exploring acoustic absorption and tactile ergonomics.',
    featured: false,
    tags: ['Tactility', 'Acoustics', 'Linen', 'Woodwork'],
    content: [
      {
        heading: 'The Acoustics of Serenity',
        body: [
          'Many homeowners complain that their newly renovated spaces feel echoey and cold. Hard marble floors combined with plain drywall bounce sound waves endlessly, resulting in fatigue.',
          'We counteract this by layering open-grain timber joinery, hand-knotted wool carpets, and double-pleated Belgian linen drapery that absorb acoustic flutter echoes naturally.',
        ],
      },
    ],
  },
  {
    slug: 'curating-art-and-sculpture-in-residences',
    title: 'The Art of Restraint: Integrating Sculpture into Everyday Living',
    subtitle: 'Selecting fewer, more meaningful artifacts that dialogue with architectural space.',
    category: 'Philosophy',
    author: {
      name: 'Devansh Rathore',
      role: 'Principal Architect & Founder',
    },
    publishedDate: 'May 04, 2025',
    readingTime: '5 min read',
    heroImage: '/images/kitchen.jpg',
    excerpt:
      'Art in an interior should not compete with architecture; it should complete it. Guidelines for curating sculptural pieces that anchor domestic vistas.',
    featured: false,
    tags: ['Art Advisory', 'Sculpture', 'Curated Living'],
    content: [
      {
        heading: 'Bespoke Plinths and Niches',
        body: [
          'Rather than scattering small knick-knacks across every tabletop, we design architectural stone plinths and recessed lit niches specifically proportioned to honor a single, powerful sculpture or ceramic vessel.',
        ],
      },
    ],
  },
];
