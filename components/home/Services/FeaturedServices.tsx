'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Compass, Lamp, Armchair, Home, Building2, Hammer } from 'lucide-react';
import styles from './FeaturedServices.module.css';

const featuredServicesList = [
  {
    icon: Compass,
    title: 'Space Planning',
    desc: 'Ergonomic circulation choreography, structural wall reviews, and natural light ingress analysis.',
    href: '/services/space-planning',
  },
  {
    icon: Lamp,
    title: 'Lighting Design',
    desc: 'Circadian 2700K layered illumination schemes balancing morning clarity with evening relaxation.',
    href: '/services/lighting-design',
  },
  {
    icon: Armchair,
    title: 'Furniture & Styling',
    desc: 'Bespoke hand-crafted furniture pieces, vintage architectural finds, and tactile textile curation.',
    href: '/services/furniture-and-styling',
  },
  {
    icon: Home,
    title: 'Residential Design',
    desc: 'Comprehensive end-to-end design for private villas, bungalows, penthouses, and bespoke apartments.',
    href: '/services/residential-interior-design',
  },
  {
    icon: Building2,
    title: 'Commercial Design',
    desc: 'Bespoke workspaces, partner suites, and hospitality lounges built with residential warmth.',
    href: '/services/commercial-interior-design',
  },
  {
    icon: Hammer,
    title: 'Renovation & Remodel',
    desc: 'Sensitive heritage restoration and modern infrastructure upgrades for mature residential properties.',
    href: '/services/renovation-remodeling',
  },
];

export default function FeaturedServices() {
  return (
    <section className={styles.section} aria-label="Our Interior Services">
      <div className={styles.inner}>
        <div className={styles.headerRow}>
          <div>
            <span className={styles.kicker}>Our Services</span>
            <h2 className={styles.heading}>
              Transforming Spaces Into <em>Elevated Everyday Experiences</em>
            </h2>
          </div>
          <Link href="/services" className={styles.viewAllBtn}>
            <span>View All Services</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className={styles.servicesGrid}>
          {featuredServicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className={styles.serviceCard}>
                <div className={styles.iconWrapper}>
                  <Icon size={32} strokeWidth={1.3} />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <Link href={service.href} className={styles.serviceLink}>
                  <span>View Details</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
