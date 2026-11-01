export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  focus: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Devansh Rathore',
    role: 'Principal Architect & Founder',
    credentials: 'B.Arch, SPA Delhi · Council of Architecture Registered',
    bio: 'With over 14 years of practice across residential architecture and bespoke interior design, Devansh founded DraftWorks to champion tactile warm minimalism and climate-responsive Indian living.',
    focus: 'Spatial Masterplanning & Architectural Concept',
    image: '/images/study.jpg',
  },
  {
    name: 'Aditi Varma',
    role: 'Head of Material Science & Styling',
    credentials: 'M.Des Interior Architecture, CEPT University',
    bio: 'Specializing in natural plaster chemistry, sustainable timber sourcing, and sensory acoustics, Aditi curates the physical materiality and tactile textures that define the studio’s atmospheres.',
    focus: 'Tactile Materials, Custom Joinery & Textiles',
    image: '/images/bedroom_day.jpg',
  },
  {
    name: 'Vikramaditya Shinde',
    role: 'Senior Project Technical Director',
    credentials: 'B.E. Civil & Architectural Engineering',
    bio: 'Overseeing site execution, structural coordination, and MEP integration, Vikram ensures that technical shop drawings translate into flawless on-site craftsmanship without compromises.',
    focus: 'Precision Engineering & Contractor Stewardship',
    image: '/images/kitchen.jpg',
  },
  {
    name: 'Meera Chawla',
    role: 'Architectural Lighting Specialist',
    credentials: 'M.Sc Architectural Lighting Design',
    bio: 'Meera orchestrates the studio’s signature Day & Night circadian schemes, analyzing daylight ingress and designing custom warm 2700K concealed fixtures for evening serenity.',
    focus: 'Circadian Illumination & Smart Scene Controls',
    image: '/images/living_day.jpg',
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  projectName: string;
  location: string;
  year: number;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'From the layout to the smallest details, everything was thoughtfully designed. Our home now feels effortlessly elegant, the design feels timeless. Guests constantly comment on the soothing quality of the light and the plaster walls.',
    clientName: 'Rajesh & Suniti Agrawal',
    clientRole: 'Homeowners · 4BHK Villa',
    projectName: 'The Ivory Residence',
    location: 'Bhopal, MP',
    year: 2025,
    rating: 5,
    image: '/images/bedroom_day.jpg',
  },
  {
    id: 'test-2',
    quote:
      'The team transformed our space beyond what we imagined. The design feels timeless, functional, and incredibly inviting. The fluted timber wall and travertine coffee table are genuine works of art.',
    clientName: 'Siddharth & Priya Singhal',
    clientRole: 'Founders · Tech Advisory',
    projectName: 'Modern Earth Villa',
    location: 'Indore, MP',
    year: 2024,
    rating: 5,
    image: '/images/living_day.jpg',
  },
  {
    id: 'test-3',
    quote:
      'My home finally feels like a reflection of my personality. Every detail feels intentional, warm, and beautifully balanced. Their Day & Night lighting scheme is a daily joy when returning from work.',
    clientName: 'Dr. Alok Malviya',
    clientRole: 'Senior Surgeon',
    projectName: 'The Courtyard House',
    location: 'Bhopal, MP',
    year: 2024,
    rating: 5,
    image: '/images/dining.jpg',
  },
];
