export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'design-fees',
    category: 'Investment & Fees',
    question: 'How are design fees structured at DraftWorks Interiors?',
    answer:
      'We work on a transparent flat-fee or square-foot architectural consultancy basis depending on the scale and complexity of the project. Our indicative design consultancy packages start at ₹1,50,000 for focused spaces, ₹3,50,000 for full signature homes, and ₹7,50,000 for expansive luxury estates. Material procurement and contractor labor are billed separately at direct cost with complete open-book transparency.',
  },
  {
    id: 'project-timeline',
    category: 'Process & Timelines',
    question: 'What is the typical timeline from concept to project completion?',
    answer:
      'Design documentation typically takes between 6 to 12 weeks, including spatial planning, 3D visualisations, and technical CAD drafting. Execution on-site ranges from 4 to 8 months for luxury residences, depending on the scope of civil modifications, custom joinery, and specialized finishes like lime plasters.',
  },
  {
    id: 'locations-served',
    category: 'Geography & Travel',
    question: 'Do you take on projects outside Bhopal?',
    answer:
      'Yes. While our primary design atelier is located in Arera Colony, Bhopal, we actively lead projects across Central and Western India, including Indore, Jabalpur, Gwalior, Raipur, Nagpur, and Mumbai. For out-of-town projects, we conduct scheduled site visits at critical milestones and coordinate with local contractors via detailed digital documentation.',
  },
  {
    id: '3d-visualization',
    category: 'Design & Visuals',
    question: 'Will I see photorealistic 3D visualisations before construction begins?',
    answer:
      'Absolutely. In our Signature and Bespoke packages, we produce high-fidelity 3D renders that accurately reflect daylight conditions, texture reflections, custom joinery, and exact material selections so there are zero surprises on site.',
  },
  {
    id: 'material-sourcing',
    category: 'Craftsmanship',
    question: 'How do you ensure the authenticity and quality of materials?',
    answer:
      'We reject imitation laminates and synthetic finishes. We work directly with natural stone quarries in Rajasthan, sustainable timber mills for European oak and seasoned teak, master lime artisans, and brass foundries. Physical material boxes are presented to you so you can touch and evaluate each surface prior to approval.',
  },
  {
    id: 'contractor-supervision',
    category: 'Execution',
    question: 'Can we use our own civil contractor, or do you provide execution teams?',
    answer:
      'We offer flexible collaboration models. We have trusted, vetted master carpentry, electrical, and plaster teams that we regularly partner with. Alternatively, we can provide detailed technical documentation and periodic quality supervision to your chosen general contractor.',
  },
  {
    id: 'first-consultation',
    category: 'Getting Started',
    question: 'What happens during the initial design consultation?',
    answer:
      'We host an initial 60-minute discovery session either at our studio in Bhopal or via video call. We review your architectural blueprints or site photos, discuss your functional lifestyle routines, aesthetic aspirations, and budget parameters, and follow up with a bespoke scope proposal.',
  },
];
