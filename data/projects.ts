export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Residential' | 'Commercial' | 'Villa' | 'Apartment';
  type: string;
  location: string;
  area: string;
  year: number;
  startingBudget: string;
  featured: boolean;
  heroImage: string;
  hasDayNight: boolean;
  dayImage?: string;
  nightImage?: string;
  gallery: {
    src: string;
    caption: string;
    span?: 'wide' | 'tall' | 'normal';
  }[];
  overview: string;
  concept: string;
  challenges: string[];
  solutions: string[];
  materials: {
    name: string;
    description: string;
  }[];
  palette: {
    name: string;
    hex: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: 'the-ivory-residence',
    title: 'The Ivory Residence',
    subtitle: 'A sanctuary of limestone, textured plaster and sculpted archways.',
    category: 'Residential',
    type: 'Private Master Suite & Villa',
    location: 'Bhopal, Madhya Pradesh',
    area: '4,800 sq.ft',
    year: 2025,
    startingBudget: '₹38,00,000',
    featured: true,
    heroImage: '/images/bedroom_day.jpg',
    hasDayNight: true,
    dayImage: '/images/bedroom_day.jpg',
    nightImage: '/images/bedroom_night.jpg',
    gallery: [
      { src: '/images/bedroom_day.jpg', caption: 'Sunlit master suite featuring curved lime-washed archway and custom oak bed', span: 'wide' },
      { src: '/images/bedroom_night.jpg', caption: 'Atmospheric evening illumination with concealed perimeter LEDs and brass pendants', span: 'wide' },
      { src: '/images/bathroom.jpg', caption: 'Monolithic travertine soaking tub framed by natural textured stone', span: 'tall' },
      { src: '/images/dining.jpg', caption: 'Courtyard dining pavilion with sculpted oak table and brushed brass fixtures', span: 'normal' },
      { src: '/images/study.jpg', caption: 'Quiet study with floor-to-ceiling millwork and soft linen armchair', span: 'normal' },
    ],
    overview:
      'The Ivory Residence was envisioned as a tranquil family haven secluded from the energetic pace of Bhopal. Designed around the principles of warm minimalism, every space responds to natural daylight and sensory textures.',
    concept:
      'We replaced rigid partitions with fluid architectural arches that frame domestic rituals. Lime-washed walls reflect morning light with a velvet glow, while custom European white oak joinery grounds the airy volumes.',
    challenges: [
      'Managing harsh western sun exposure while maintaining generous natural illumination in the primary living chambers.',
      'Achieving monolithic plaster finishes across double-height surfaces without visible expansion joints.',
      'Integrating modern smart HVAC and climate control invisibly into curved architectural ceiling coves.',
    ],
    solutions: [
      'Introduced motorized architectural linen louvers and deep structural reveals that temper intense solar heat while preserving garden vistas.',
      'Worked with master lime plaster artisans from Rajasthan using age-old slaked lime and marble dust techniques for a seamless, breathable tactile finish.',
      'Designed discreet shadowline ceiling reveals that house ventilation plenums and indirect warm LED strips (2700K).',
    ],
    materials: [
      { name: 'French Lime Plaster', description: 'Hand-troweled velvet matte surface with natural acoustic dampening' },
      { name: 'European White Oak', description: 'Lightly brushed and oiled solid timber with subtle quarter-sawn grain' },
      { name: 'Roman Travertine', description: 'Unfilled, honed stone slabs sourced for wet zones and bespoke coffee tables' },
      { name: 'Unlacquered Brass', description: 'Architectural hardware that will develop a rich, living patina over decades' },
    ],
    palette: [
      { name: 'Warm Ivory', hex: '#F6F1E9' },
      { name: 'Sand Beige', hex: '#D8CABB' },
      { name: 'Taupe', hex: '#A99A87' },
      { name: 'Espresso', hex: '#171613' },
    ],
  },
  {
    slug: 'modern-earth-villa',
    title: 'Modern Earth Villa',
    subtitle: 'Earthy minimalism meeting floor-to-ceiling glass and fluted wood.',
    category: 'Villa',
    type: 'Independent Residence',
    location: 'Indore, Madhya Pradesh',
    area: '6,200 sq.ft',
    year: 2024,
    startingBudget: '₹52,00,000',
    featured: true,
    heroImage: '/images/living_day.jpg',
    hasDayNight: true,
    dayImage: '/images/living_day.jpg',
    nightImage: '/images/living_night.jpg',
    gallery: [
      { src: '/images/living_day.jpg', caption: 'Daylight floods the central lounge overlooking private olive grove gardens', span: 'wide' },
      { src: '/images/living_night.jpg', caption: 'Intimate evening warmth with illuminated wooden slats and focal fireplace', span: 'wide' },
      { src: '/images/dining.jpg', caption: 'Formal dining space with direct sightlines into stone walled internal garden', span: 'tall' },
      { src: '/images/kitchen.jpg', caption: 'Dark-stained fluted oak kitchen with seamless quartzite worktops', span: 'normal' },
    ],
    overview:
      'Nestled on an expansive suburban parcel, the Modern Earth Villa is an exploration in tactile continuity between landscape and architecture. High ceilings and full-height steel glazing dissolve boundaries.',
    concept:
      'Grounded in wabi-sabi philosophy, the villa employs honest raw elements—fluted timber battens, hand-carved stone, and bouclé wool—to foster a profound sense of rootedness and calm.',
    challenges: [
      'Creating intimacy within a 22-foot high double-height living hall without making it feel cold or cavernous.',
      'Sourcing sustainably harvested timber capable of withstanding Central Indian temperature differentials.',
    ],
    solutions: [
      'Engineered an architectural acoustic timber slatted canopy that lowers perceived scale while housing perimeter ambient light troughs.',
      'Used thermo-treated quartered ash and kiln-dried teak engineered specifically for thermal stability.',
    ],
    materials: [
      { name: 'Rough-Hewn Travertine', description: 'Single-block coffee table and plinth carved with organic chisel edges' },
      { name: 'Fluted American Walnut', description: 'Custom vertical wall cladding with integrated hidden storage pivots' },
      { name: 'Raw Textured Bouclé', description: 'Natural wool upholstery selected for organic comfort and longevity' },
      { name: 'Architectural Microcement', description: 'Continuous ground floor flooring with zero grout lines' },
    ],
    palette: [
      { name: 'Soft Cream', hex: '#EEE7DC' },
      { name: 'Warm Brown', hex: '#766451' },
      { name: 'Muted Olive', hex: '#777B65' },
      { name: 'Deep Charcoal', hex: '#25231F' },
    ],
  },
  {
    slug: 'the-courtyard-house',
    title: 'The Courtyard House',
    subtitle: 'An inward-looking sanctuary framing an ancient stone courtyard.',
    category: 'Residential',
    type: 'Courtyard Residence',
    location: 'Bhopal, Madhya Pradesh',
    area: '5,400 sq.ft',
    year: 2024,
    startingBudget: '₹45,00,000',
    featured: true,
    heroImage: '/images/dining.jpg',
    hasDayNight: true,
    dayImage: '/images/dining.jpg',
    nightImage: '/images/dining_night.jpg',
    gallery: [
      { src: '/images/dining.jpg', caption: 'Dining table crafted from single-slab solid oak overlooking the internal courtyard', span: 'wide' },
      { src: '/images/dining_night.jpg', caption: 'Evening illumination with brass chandelier pooling warm light over the table', span: 'wide' },
      { src: '/images/kitchen.jpg', caption: 'Integrated kitchen workspace with concealed prep pantry and textured stone', span: 'tall' },
      { src: '/images/living_day.jpg', caption: 'Living pavilion oriented around central light well', span: 'normal' },
      { src: '/images/study.jpg', caption: 'Upper level library gallery with reading bench and garden overlook', span: 'normal' },
    ],
    overview:
      'A contemporary reimagining of traditional Central Indian Haveli courtyards. The home turns inward away from dense city surroundings, creating a micro-climate of shaded flora, water elements, and gentle breezes.',
    concept:
      'Every domestic zone opens toward a central green courtyard. Living spaces act as transitional verandas that can be fully opened during cooler winter evenings.',
    challenges: [
      'Ensuring acoustic separation between entertaining zones and secluded bedroom quarters.',
      'Maintaining thermal efficiency during 42°C summer peaks while maximizing natural cross ventilation.',
    ],
    solutions: [
      'Placed buffer service corridors and acoustic pocket doors lined with natural cork cores between social and private wings.',
      'Utilized the stack effect through a central automated operable clerestory that expels warm air passively.',
    ],
    materials: [
      { name: 'Gwalior Mint Sandstone', description: 'Locally quarried natural stone with fine grain and gentle thermal mass' },
      { name: 'Solid English Oak', description: 'Finished in organic beeswax for a natural silky hand-feel' },
      { name: 'Blackened Steel', description: 'Precision multi-panel sliding door systems with high-spec thermal breaks' },
    ],
    palette: [
      { name: 'Warm Ivory', hex: '#F6F1E9' },
      { name: 'Sand Beige', hex: '#D8CABB' },
      { name: 'Taupe', hex: '#A99A87' },
      { name: 'Espresso', hex: '#171613' },
    ],
  },
  {
    slug: 'urban-minimal-apartment',
    title: 'Urban Minimal Apartment',
    subtitle: 'Fluted dark oak, quartzite countertops and disciplined spatial flow.',
    category: 'Apartment',
    type: 'Luxury High-Rise Penthouse',
    location: 'Bhopal, Madhya Pradesh',
    area: '3,100 sq.ft',
    year: 2025,
    startingBudget: '₹28,50,000',
    featured: true,
    heroImage: '/images/kitchen.jpg',
    hasDayNight: true,
    dayImage: '/images/kitchen.jpg',
    nightImage: '/images/kitchen_night.jpg',
    gallery: [
      { src: '/images/kitchen.jpg', caption: 'Monolithic fluted dark oak cabinetry with seamless leathered quartzite counters', span: 'wide' },
      { src: '/images/kitchen_night.jpg', caption: 'Ambient under-shelf LED strip illumination creating evening warmth', span: 'wide' },
      { src: '/images/study.jpg', caption: 'Executive corner office with panoramic city skyline framing', span: 'normal' },
      { src: '/images/bedroom_day.jpg', caption: 'Minimal guest suite with integrated headboard millwork', span: 'tall' },
    ],
    overview:
      'Perched on the 18th floor, this penthouse demanded a clean, restrained visual grammar that honors expansive panoramic horizon views without visual clutter.',
    concept:
      'Clean architectural lines, deep charcoal tones balanced with pale lime plaster, and precision joinery create an atmosphere of executive serenity.',
    challenges: [
      'Existing low concrete soffits and prominent utility beams running across the living core.',
      'Optimizing spatial flow in a linear rectangular floor plan.',
    ],
    solutions: [
      'Created a sculptural dropped ceiling envelope with illuminated floating edges that make the ceiling feel weightless.',
      'Designed a multi-functional fluted timber partition spine that houses hidden storage, HVAC returns, and bar cabinets.',
    ],
    materials: [
      { name: 'Fumed Dark Oak', description: 'Subtle charcoal stain allowing open wood grain texture to remain visible' },
      { name: 'Taj Mahal Quartzite', description: 'Leathered finish stone with delicate ivory and grey veining' },
      { name: 'Brushed Bronze', description: 'Custom electrical plates and minimalist door levers' },
    ],
    palette: [
      { name: 'Deep Charcoal', hex: '#25231F' },
      { name: 'Soft Cream', hex: '#EEE7DC' },
      { name: 'Taupe', hex: '#A99A87' },
      { name: 'Espresso', hex: '#171613' },
    ],
  },
  {
    slug: 'the-sanctuary-suite',
    title: 'The Sanctuary Spa Suite',
    subtitle: 'Monolithic natural limestone soaking suite with skylight bathing.',
    category: 'Residential',
    type: 'Master Suite & Bath Pavilion',
    location: 'Jabalpur, Madhya Pradesh',
    area: '1,200 sq.ft',
    year: 2024,
    startingBudget: '₹18,00,000',
    featured: false,
    heroImage: '/images/bathroom.jpg',
    hasDayNight: true,
    dayImage: '/images/bathroom.jpg',
    nightImage: '/images/bathroom_night.jpg',
    gallery: [
      { src: '/images/bathroom.jpg', caption: 'Carved natural limestone soaking tub positioned under an operable skylight', span: 'wide' },
      { src: '/images/bathroom_night.jpg', caption: 'Evening candlelight and warm niche illumination over stone tub', span: 'wide' },
      { src: '/images/bedroom_day.jpg', caption: 'Connecting bedroom with seamless micro-cement transition', span: 'tall' },
      { src: '/images/living_day.jpg', caption: 'Private balcony lounge adjacent to the dressing suite', span: 'normal' },
    ],
    overview:
      'Conceived as a dedicated personal retreat within an estate, the Sanctuary Suite transforms the daily bathing ritual into an elemental wellness experience.',
    concept:
      'Monolithic blocks of rough-hewn limestone evoke ancient natural thermal grottos, balanced with surgical precision brassware and radiant underfloor warming.',
    challenges: [
      'Structural engineering to support a 420 kg solid stone carved tub on the upper residential level.',
      'Waterproofing natural rough-face stone walls without compromising their organic matte appearance.',
    ],
    solutions: [
      'Collaborated with structural consultants to install steel beam reinforcement directly beneath the bathroom floor joists.',
      'Applied a penetrating breathable nano-ceramic sealer that repels water and minerals without adding unnatural gloss.',
    ],
    materials: [
      { name: 'Jaisalmer Yellow Limestone', description: 'Warm fossiliferous stone that radiates heat and mellows gracefully' },
      { name: 'Brushed Gunmetal', description: 'Wall-mounted thermostatic bath mixers with precision knurled controls' },
      { name: 'Smoked Teak', description: 'Custom slatted vanity with integrated double sinks' },
    ],
    palette: [
      { name: 'Warm Ivory', hex: '#F6F1E9' },
      { name: 'Sand Beige', hex: '#D8CABB' },
      { name: 'Warm Brown', hex: '#766451' },
    ],
  },
  {
    slug: 'the-oak-atelier',
    title: 'The Oak Atelier & Study',
    subtitle: 'Tailored floor-to-ceiling joinery, lime-washed walls, and tactile linen.',
    category: 'Commercial',
    type: 'Private Law Office & Library',
    location: 'Bhopal, Madhya Pradesh',
    area: '2,400 sq.ft',
    year: 2025,
    startingBudget: '₹22,00,000',
    featured: false,
    heroImage: '/images/study.jpg',
    hasDayNight: true,
    dayImage: '/images/study.jpg',
    nightImage: '/images/study_night.jpg',
    gallery: [
      { src: '/images/study.jpg', caption: 'Continuous oak library shelves holding 3,000 volumes with integrated brass reading lamps', span: 'wide' },
      { src: '/images/study_night.jpg', caption: 'Intimate nighttime reading sanctuary with focused warm brass task lamp', span: 'wide' },
      { src: '/images/dining.jpg', caption: 'Client conference salon with bespoke acoustic ceiling paneling', span: 'tall' },
      { src: '/images/living_night.jpg', caption: 'Evening hospitality lounge for intimate client receptions', span: 'normal' },
    ],
    overview:
      'Commissioned by a prominent legal practice, the Oak Atelier merges scholarly gravity with contemporary residential warmth, rejecting sterile corporate tropes.',
    concept:
      'Warm wood paneling, tactile Belgian linen upholstery, and focused 2700K task illumination foster concentrated intellectual labor and confidential dialogue.',
    challenges: [
      'Acoustic reverberation control in a room lined with book cases and glass partition walls.',
      'Concealing 800+ meters of data, video conferencing, and power cabling within historic masonry walls.',
    ],
    solutions: [
      'Integrated micro-perforated acoustic timber backing behind open book bays and heavy linen window drapery.',
      'Engineered an architectural baseboard chase with continuous magnetic access panels for seamless cable management.',
    ],
    materials: [
      { name: 'Quarter-Sawn White Oak', description: 'Hand-selected timber boards matched for consistent linear grain' },
      { name: 'Saddle Leather', description: 'Top-grain vegetable-tanned leather desk insets with hand-stitched borders' },
      { name: 'Cast Antique Brass', description: 'Articulated architectural task lamps and library ladder hardware' },
    ],
    palette: [
      { name: 'Warm Brown', hex: '#766451' },
      { name: 'Sand Beige', hex: '#D8CABB' },
      { name: 'Espresso', hex: '#171613' },
    ],
  },
];
