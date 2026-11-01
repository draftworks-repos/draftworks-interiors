'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import styles from './FinalCTA.module.css';

const avatarImages = [
  '/images/study.jpg',
  '/images/bedroom_day.jpg',
  '/images/living_day.jpg',
];

export default function FinalCTA() {
  return (
    <section className={styles.section} aria-label="Start Your Interior Project">
      <div className={styles.inner}>
        <div className={styles.ctaRow}>
          <h2 className={styles.heading}>
            Creating Spaces That Feel <em>Beautiful Personal & Timeless</em>
          </h2>

          <div className={styles.actionCol}>
            <div className={styles.socialProof}>
              <div className={styles.avatarGroup}>
                {avatarImages.map((src, i) => (
                  <div key={i} className={styles.avatar}>
                    <Image
                      src={src}
                      alt="Homeowner avatar"
                      fill
                      sizes="36px"
                      style={{ objectFit: 'cover' }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <span className={styles.proofText}>150+ Happy Homeowners</span>
            </div>

            <Link href="/contact" className={styles.startBtn}>
              <span>Start a Conversation</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
