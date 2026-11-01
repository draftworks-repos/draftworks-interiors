'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import styles from './Hero.module.css';

const carouselItems = [
  {
    src: '/images/bedroom_day.jpg',
    title: 'The Ivory Residence',
    room: 'Master Sanctuary',
    slug: 'the-ivory-residence',
  },
  {
    src: '/images/living_day.jpg',
    title: 'Modern Earth Villa',
    room: 'Central Lounge',
    slug: 'modern-earth-villa',
  },
  {
    src: '/images/dining.jpg',
    title: 'The Courtyard House',
    room: 'Dining Pavilion',
    slug: 'the-courtyard-house',
  },
  {
    src: '/images/kitchen.jpg',
    title: 'Urban Minimal Apartment',
    room: 'Fluted Atelier Kitchen',
    slug: 'urban-minimal-apartment',
  },
  {
    src: '/images/bathroom.jpg',
    title: 'The Sanctuary Suite',
    room: 'Monolithic Travertine Bath',
    slug: 'the-sanctuary-suite',
  },
  {
    src: '/images/study.jpg',
    title: 'The Oak Atelier',
    room: 'Private Library & Study',
    slug: 'the-oak-atelier',
  },
  {
    src: '/images/bedroom_night.jpg',
    title: 'The Ivory Residence',
    room: 'Circadian Evening Light',
    slug: 'the-ivory-residence',
  },
  {
    src: '/images/living_night.jpg',
    title: 'Modern Earth Villa',
    room: 'Dusk Fireplace Lounge',
    slug: 'modern-earth-villa',
  },
];

export default function Hero() {
  // Duplicate items for continuous, infinite right-to-left marquee motion
  const duplicatedSlides = [...carouselItems, ...carouselItems];

  return (
    <section className={styles.hero} aria-label="Introduction">
      {/* Centered Hero Text Container (Constrained by max-width) */}
      <div className={styles.textContainer}>
        <span className={styles.kicker}>Interior Architecture & Design · Bhopal</span>
        <h1 className={styles.headline}>
          Crafting Atmospheres.
          <br />
          <em>Shaping Experiences.</em>
        </h1>
        {/* Shortened, crisp editorial copy */}
        <p className={styles.subheading}>
          Where natural light, timeless materials, and architectural restraint shape spaces of enduring tranquility.
        </p>

        <div className={styles.ctaGroup}>
          <Link href="/projects" className={styles.primaryCta}>
            <span>Explore Our Work</span>
            <ArrowUpRight size={16} />
          </Link>
          <Link href="/contact" className={styles.secondaryCta}>
            <span>Start a Project</span>
          </Link>
        </div>
      </div>

      {/* Full-Screen-Width Infinite Image Carousel (Unrestricted by container width) */}
      <div className={styles.carouselWrapper} aria-label="Continuous Architectural Gallery">
        <div className={styles.carouselTrack}>
          {duplicatedSlides.map((item, index) => (
            <Link
              key={`${item.slug}-${index}`}
              href={`/projects/${item.slug}`}
              className={styles.carouselCard}
              tabIndex={index >= carouselItems.length ? -1 : 0}
              aria-label={`${item.title} — ${item.room}`}
            >
              <Image
                src={item.src}
                alt={`${item.title} — ${item.room}`}
                fill
                priority={index < 4}
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
                className={styles.cardImage}
                referrerPolicy="no-referrer"
              />
              <div className={styles.cardOverlay}>
                <span className={styles.cardRoom}>{item.room}</span>
                <span className={styles.cardTitle}>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
