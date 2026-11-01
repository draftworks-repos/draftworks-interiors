export interface PricingPackage {
  id: string;
  name: string;
  startingPrice: number;
  formattedPrice: string;
  unit: string;
  subtitle: string;
  idealFor: string;
  timeline: string;
  popular?: boolean;
  features: string[];
  deliverables: string[];
  exclusions: string[];
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'essential-design',
    name: 'Essential Design',
    startingPrice: 150000,
    formattedPrice: '₹1,50,000',
    unit: 'starting fee',
    subtitle: 'Focused spatial planning, concept direction, and material advisory for single spaces or apartments.',
    idealFor: 'Apartments up to 1,500 sq.ft or single-zone residential renovations.',
    timeline: '4 – 6 weeks for design phase',
    features: [
      'Comprehensive on-site laser dimension survey',
      '2D optimized furniture & spatial layout options',
      'Curated physical material & color palette board',
      'Architectural lighting & electrical layout direction',
      'Key room elevations & custom cabinetry guidelines',
      'Two rounds of iterative design refinements',
    ],
    deliverables: [
      'PDF Design Dossier with dimensioned layouts',
      'Material sample board & finish specification list',
      'Vendor & artisan recommendation list in Bhopal/MP',
    ],
    exclusions: [
      'Photorealistic 3D visualisations (available as add-on)',
      'Daily contractor supervision (milestone reviews only)',
    ],
  },
  {
    id: 'signature-interiors',
    name: 'Signature Interiors',
    startingPrice: 350000,
    formattedPrice: '₹3,50,000',
    unit: 'starting fee',
    popular: true,
    subtitle: 'Our flagship complete interior architecture service from initial concept through detailed shop drawings.',
    idealFor: 'Full private residences, villas, and apartments from 2,000 to 4,500 sq.ft.',
    timeline: '8 – 12 weeks for design documentation',
    features: [
      'Complete interior architectural master planning',
      'Photorealistic 3D renders for all primary living spaces',
      'Physical tactile material kit with authentic stone & timber samples',
      'Comprehensive millwork, joinery & custom furniture shop drawings',
      'Circadian architectural lighting plan with 2700K scene specifications',
      'Complete plumbing, fixture & sanitary ware schedule',
      'Scheduled bi-weekly on-site quality audit visits during execution',
      'Curated art, textile, and decorative styling advisory',
    ],
    deliverables: [
      'Hardcover Studio Presentation Book + Digital BIM/CAD Package',
      'Detailed Bill of Quantities (BOQ) with itemized budget estimates',
      'Interactive 3D digital walkthrough for spatial approval',
    ],
    exclusions: [
      'Civil construction labor and material procurement costs',
      'Municipal building permit approvals',
    ],
  },
  {
    id: 'bespoke-luxury',
    name: 'Bespoke Luxury',
    startingPrice: 750000,
    formattedPrice: '₹7,50,000',
    unit: 'starting fee',
    subtitle: 'Uncompromising architectural craftsmanship, bespoke furniture prototyping, and dedicated principal oversight.',
    idealFor: 'Luxury estate homes, heritage bungalows, and premier commercial headquarters (4,500+ sq.ft).',
    timeline: '12 – 18 weeks tailored documentation',
    features: [
      'Direct hands-on direction by Principal Architect Devansh Rathore',
      'Fully bespoke one-off furniture designed and prototyped for your estate',
      'Artisanal material sourcing expeditions (quarries, timber mills, brass foundries)',
      'Unrestricted 3D visualisations and VR headset immersive walkthroughs',
      'Comprehensive smart home, acoustic & environmental climate integration',
      'Dedicated on-site project coordinator managing daily artisan craftsmanship',
      'White-glove styling, private art acquisition & final move-in handover',
    ],
    deliverables: [
      'Complete Turnkey Design & Specifications Suite',
      'Custom Furniture Fabrication Shop Drawings & 1:1 Scale Details',
      'Full Project Coordination & Contractor Quality Sign-off Protocols',
    ],
    exclusions: [
      'Direct contractor labor and raw material purchase invoices',
    ],
  },
];
