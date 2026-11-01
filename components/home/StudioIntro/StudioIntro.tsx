'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './StudioIntro.module.css';

export default function StudioIntro() {
  return (
    <section className={styles.section} aria-label="Studio Overview">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Left Asymmetric Photo Composition */}
          <div className={styles.leftPhotos}>
            <div className={styles.photoCard} style={{ width: '85%', aspectRatio: '1/1', alignSelf: 'flex-start' }}>
              <Image
                src="/images/bathroom.jpg"
                alt="Natural limestone spa bathroom with carved stone tub"
                fill
                sizes="(max-width: 960px) 40vw, 25vw"
                style={{ objectFit: 'cover' }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className={styles.photoCard} style={{ width: '95%', aspectRatio: '4/3', alignSelf: 'flex-end' }}>
              <Image
                src="/images/living_day.jpg"
                alt="Warm earth villa living lounge"
                fill
                sizes="(max-width: 960px) 45vw, 28vw"
                style={{ objectFit: 'cover' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Center Editorial Statement */}
          <div className={styles.centerContent}>
            <span className={styles.kicker}>About Our Studio</span>
            <h2 className={styles.heading}>
              Designing Spaces Beyond the Ordinary.{' '}
              <em>Creating Interiors That Feel Personal.</em>
            </h2>
            <p className={styles.body}>
              We create refined interiors where thoughtful materials, natural light, and timeless details
              come together to make every space feel distinctly yours. From the first concept to the final
              detail, we carefully balance form, function, and emotion.
            </p>
            <Link href="/about" className={styles.moreLink}>
              <span>More About Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Asymmetric Photo Composition */}
          <div className={styles.rightPhotos}>
            <div className={styles.photoCard} style={{ width: '90%', aspectRatio: '4/3', alignSelf: 'flex-end' }}>
              <Image
                src="/images/dining.jpg"
                alt="Minimalist dining room with courtyard garden vistas"
                fill
                sizes="(max-width: 960px) 45vw, 28vw"
                style={{ objectFit: 'cover' }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className={styles.photoCard} style={{ width: '80%', aspectRatio: '1/1', alignSelf: 'flex-start' }}>
              <Image
                src="/images/study.jpg"
                alt="Warm wood oak library and sanctuary study"
                fill
                sizes="(max-width: 960px) 40vw, 25vw"
                style={{ objectFit: 'cover' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
