export interface Service {
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  leadParagraph: string;
  deliverables: string[];
  process: {
    phase: string;
    description: string;
  }[];
  heroImage: string;
  relevantProjectSlugs: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const services: Service[] = [
  {
    slug: 'residential-interior-design',
    number: '01',
    title: 'Residential Interior Design',
    shortDesc:
      'Complete end-to-end design for private villas, bungalows, penthouses, and bespoke apartments tailored to daily rituals.',
    leadParagraph:
      'We craft personal living sanctuaries that celebrate light, proportion, and tactile materials. From initial spatial reconfiguration through custom millwork and final styling, we steward your home into a harmonious whole.',
    deliverables: [
      'Comprehensive 2D spatial layouts & demolition/construction plans',
      'Photorealistic 3D interior visualisations & material samples',
      'Complete joinery, millwork & bespoke cabinetry detailed shop drawings',
      'Electrical, architectural lighting & HVAC positioning schematics',
      'Full plumbing, fixture & sanitary ware specifications',
      'Curated furniture, textile, artwork & decorative artifact procurement schedule',
    ],
    process: [
      { phase: 'Discovery & Vision', description: 'Deep-dive lifestyle consultation, site measuring, solar study, and aesthetic mood curation.' },
      { phase: 'Concept Development', description: 'Spatial layout exploration, 3D spatial renders, and physical tactile material mood boards.' },
      { phase: 'Technical Documentation', description: 'Precision CAD drafting for MEP, civil works, custom millwork, and lighting layouts.' },
      { phase: 'Site Supervision & Curation', description: 'Periodic quality oversight, finish sign-off, and final white-glove styling.' },
    ],
    heroImage: '/images/bedroom_day.jpg',
    relevantProjectSlugs: ['the-ivory-residence', 'the-courtyard-house', 'urban-minimal-apartment'],
    faq: [
      {
        question: 'When should we engage DraftWorks during home construction?',
        answer: 'Ideally before brickwork partitions and MEP conduits are finalized. Early engagement ensures optimal window reveals, door heights, and structural electrical planning.',
      },
      {
        question: 'Do you manage procurement of furniture and materials?',
        answer: 'Yes. We source directly from artisanal stone quarries, timber yards, bespoke metal workshops, and premium lighting ateliers across India and Europe.',
      },
    ],
  },
  {
    slug: 'commercial-interior-design',
    number: '02',
    title: 'Commercial Interior Design',
    shortDesc:
      'Bespoke interiors for corporate headquarters, boutique law firms, design ateliers, clinics, and hospitality venues.',
    leadParagraph:
      'We reject sterile office tropes in favor of warm, human-centered commercial environments that foster intellectual focus, brand authority, and client comfort.',
    deliverables: [
      'Workplace programming & acoustic zoning analysis',
      'Executive boardrooms, private partner suites & hospitality reception lounges',
      'Integrated conference AV, acoustic baffling & hidden cable management',
      'Commercial code compliance, egress & emergency lighting layouts',
      'Custom reception desks, executive desks & library storage systems',
    ],
    process: [
      { phase: 'Brand & Workflow Audit', description: 'Understanding team density, client touchpoints, and confidentiality requirements.' },
      { phase: 'Acoustic & Spatial Masterplan', description: 'Balancing collaborative zones with deep focus sanctuaries.' },
      { phase: 'Executive Material Direction', description: 'Selecting robust, tactile commercial materials that project understated prestige.' },
      { phase: 'Turnkey Handover', description: 'Coordination with commercial contractors and IT/AV specialists.' },
    ],
    heroImage: '/images/study.jpg',
    relevantProjectSlugs: ['the-oak-atelier'],
    faq: [
      {
        question: 'Can you work within strict commercial delivery timelines?',
        answer: 'Yes. Commercial projects are tracked with strict milestone-based Gantt charts and weekly contractor coordination protocols.',
      },
    ],
  },
  {
    slug: 'space-planning',
    number: '03',
    title: 'Space Planning & Architecture',
    shortDesc:
      'Rigorous structural layout optimization, circulation choreography, and natural light analysis for raw and existing shells.',
    leadParagraph:
      'Great interior design begins with exceptional bone structure. We evaluate architectural footprints to eliminate dead corridors, optimize sightlines, and orchestrate natural daylight.',
    deliverables: [
      'Comparative floor plan options with ergonomic circulation flow',
      'Structural wall removal feasibility with licensed civil consultants',
      'Sun-path, daylight penetration & cross-ventilation diagrams',
      'Volume studies, ceiling height transitions & structural beam camouflage',
    ],
    process: [
      { phase: 'As-Built Laser Survey', description: 'Precise dimensional documentation of existing structural conditions.' },
      { phase: 'Circulation Modeling', description: 'Analyzing movement rhythms from entry foyer through private chambers.' },
      { phase: 'Zoning & Sightlines', description: 'Positioning focal vistas and establishing privacy buffers.' },
    ],
    heroImage: '/images/dining.jpg',
    relevantProjectSlugs: ['the-courtyard-house', 'urban-minimal-apartment'],
    faq: [
      {
        question: 'Can you rework builder-provided apartment layouts?',
        answer: 'Yes, this is one of our most requested specialties. We routinely reconfigure standard builder layouts into spacious, open-plan homes with grand master suites.',
      },
    ],
  },
  {
    slug: 'furniture-and-styling',
    number: '04',
    title: 'Furniture & Custom Styling',
    shortDesc:
      'Custom-crafted furniture pieces, vintage architectural finds, curated artwork, and bespoke textile curation.',
    leadParagraph:
      'We design signature standalone furniture pieces tailored to the exact dimensions of your rooms. Every table, sofa, and console is prototyped and manufactured with master craftsmen.',
    deliverables: [
      'Custom furniture design sketches, dimensioned elevations & joinery specs',
      'Upholstery fabric, leather, wood veneer & metal finish selection boards',
      'Artwork advisory, sculptor commission & picture-hanging plans',
      'Textile curation: Belgian linen drapes, hand-knotted wool rugs & cushions',
      'Decorative lighting fixtures, artisanal ceramics & tabletop curation',
    ],
    process: [
      { phase: 'Proportion & Ergonomics', description: 'Determining ideal scale, seat depths, and sightlines for each room.' },
      { phase: 'Artisan Prototyping', description: 'Reviewing wood samples, stone slab selections, and cushion densities.' },
      { phase: 'White-Glove Installation', description: 'On-site placement, rug steam finishing, and art illumination positioning.' },
    ],
    heroImage: '/images/living_day.jpg',
    relevantProjectSlugs: ['modern-earth-villa', 'the-ivory-residence'],
    faq: [
      {
        question: 'Do you design custom furniture or only select readymade?',
        answer: 'Over 70% of the furniture in our portfolio is custom-designed by our studio and fabricated by our partner woodworkers and upholsterers.',
      },
    ],
  },
  {
    slug: 'lighting-design',
    number: '05',
    title: 'Architectural Lighting Design',
    shortDesc:
      'Layered circadian lighting schemes that transition effortlessly from sunlit clarity to evening intimacy.',
    leadParagraph:
      'Lighting defines how an interior feels at every hour of the day. We orchestrate architectural cove lights, low-glare downlights, and warm accent pendants into unified lighting scenes.',
    deliverables: [
      'Illuminance calculations, beam angle analysis & anti-glare positioning',
      '2700K warm circadian color temperature mapping',
      'Scene-based smart switching (Morning, Dining, Reading, Night Calm)',
      'Custom brass, plaster & ceramic luminaire specifications',
      'Concealed architectural cove, baseboard & millwork LED details',
    ],
    process: [
      { phase: 'Daylight Mapping', description: 'Calculating natural light ingress across morning, noon, and golden hour.' },
      { phase: 'Fixture Layering', description: 'Separating ambient wash, focal task spots, and decorative glow.' },
      { phase: 'Control Commissioning', description: 'Fine-tuning dimming curves and scene presets on-site after sundown.' },
    ],
    heroImage: '/images/bedroom_night.jpg',
    relevantProjectSlugs: ['the-ivory-residence', 'modern-earth-villa'],
    faq: [
      {
        question: 'Why do you prioritize warm 2700K lighting?',
        answer: 'Warm 2700K mimics natural sunset and candlelight. It softens skin tones, enriches natural wood and stone, and promotes relaxation after dusk.',
      },
    ],
  },
  {
    slug: 'renovation-remodeling',
    number: '06',
    title: 'Renovation & Heritage Remodeling',
    shortDesc:
      'Sensitive transformation of mature residences and historic homes with modern infrastructure and timeless finishes.',
    leadParagraph:
      'Transforming existing homes requires deep structural empathy. We preserve historic charm while gutting antiquated plumbing, rewiring for smart living, and introducing generous daylight.',
    deliverables: [
      'Comprehensive structural assessment & historic fabric documentation',
      'Complete replacement of plumbing, HVAC, electrical & data conduits',
      'Waterproofing restoration & moisture mitigation detailing',
      'Seamless blending of historic architectural mouldings with minimal finishes',
    ],
    process: [
      { phase: 'Forensic Investigation', description: 'Non-destructive testing of masonry, slabs, and moisture entry points.' },
      { phase: 'Infrastructure Overhaul', description: 'Stripping out obsolete conduits and laying new MEP pathways.' },
      { phase: 'Refinement & Restoration', description: 'Restoring lime plasters, stone floors, and architectural millwork.' },
    ],
    heroImage: '/images/kitchen.jpg',
    relevantProjectSlugs: ['the-courtyard-house', 'the-sanctuary-suite'],
    faq: [
      {
        question: 'Can we stay in the property during the renovation?',
        answer: 'For comprehensive renovations involving floor demolition and plumbing overhauls, we strongly advise vacating during major construction phases.',
      },
    ],
  },
];
