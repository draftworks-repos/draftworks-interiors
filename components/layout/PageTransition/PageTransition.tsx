'use client';

import React from 'react';
import { usePageTransition } from '@/lib/context/PageTransitionContext';
import styles from './PageTransition.module.css';

export default function PageTransition() {
  const { status } = usePageTransition();

  if (status === 'idle') {
    return null;
  }

  return (
    <div
      className={`${styles.transitionOverlay} ${
        status === 'entering'
          ? styles.entering
          : status === 'active'
          ? styles.active
          : styles.exiting
      }`}
      aria-hidden="true"
    >
      <div className={styles.loaderContent}>
        <span className={styles.brandName}>DraftWorks</span>
        <div className={styles.indicatorTrack}>
          <div className={styles.indicatorBar} />
        </div>
      </div>
    </div>
  );
}
