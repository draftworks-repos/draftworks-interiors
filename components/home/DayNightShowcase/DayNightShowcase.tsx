'use client';

import React from 'react';
import DayNightImage from '@/components/shared/DayNightImage/DayNightImage';
import styles from './DayNightShowcase.module.css';

export default function DayNightShowcase() {
  return (
    <section className={styles.section} aria-label="Day and Night Lighting Showcase">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.kicker}>Signature Lighting Design</span>
          <h2 className={styles.heading}>
            The Dual Life of Spaces. <em>Daylight Clarity to Evening Intimacy.</em>
          </h2>
          <p className={styles.subheading}>
            A room should never possess only one atmosphere. Toggle the sun and moon icons on each
            architectural interior below to experience how our 2700K concealed circadian lighting
            transforms the emotional warmth of the space after dusk.
          </p>
        </div>

        <div className={styles.showcaseGrid}>
          {/* Pair 1: Master Suite */}
          <div className={styles.showcaseItem}>
            <DayNightImage
              daySrc="/images/bedroom_day.jpg"
              nightSrc="/images/bedroom_night.jpg"
              alt="The Ivory Residence Master Suite"
              aspectRatio="16/10"
            />
            <div className={styles.itemInfo}>
              <div>
                <h3 className={styles.roomTitle}>The Ivory Master Suite</h3>
                <div className={styles.roomProject}>The Ivory Residence · Bhopal, MP</div>
              </div>
              <span className={styles.hintText}>Click icon to switch lighting</span>
            </div>
          </div>

          {/* Pair 2: Living Lounge */}
          <div className={styles.showcaseItem}>
            <DayNightImage
              daySrc="/images/living_day.jpg"
              nightSrc="/images/living_night.jpg"
              alt="Modern Earth Villa Central Lounge"
              aspectRatio="16/10"
            />
            <div className={styles.itemInfo}>
              <div>
                <h3 className={styles.roomTitle}>Modern Earth Central Lounge</h3>
                <div className={styles.roomProject}>Modern Earth Villa · Indore, MP</div>
              </div>
              <span className={styles.hintText}>Click icon to switch lighting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
