'use client';

import React, { useState, useEffect } from 'react';
import styles from './InitialLoader.module.css';

export default function InitialLoader() {
  const [percent, setPercent] = useState(0);
  const [phase, setPhase] = useState<'counting' | 'completed' | 'exiting' | 'hidden'>('counting');

  useEffect(() => {
    // Only run on client
    const hasSeenLoader = sessionStorage.getItem('draftworks_initial_loader');
    if (hasSeenLoader) {
      setPhase('hidden');
      return;
    }

    const duration = 1200; // 1.2s smooth luxury count
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Architectural ease-out curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentPercent = Math.min(Math.round(easeProgress * 100), 100);
      setPercent(currentPercent);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setPercent(100);
        setPhase('completed');
        try {
          sessionStorage.setItem('draftworks_initial_loader', 'true');
        } catch {
          // ignore storage errors
        }

        // Brief hold at 100%, then exit
        setTimeout(() => {
          setPhase('exiting');
          setTimeout(() => {
            setPhase('hidden');
          }, 650);
        }, 150);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, []);

  if (phase === 'hidden') {
    return null;
  }

  return (
    <div
      className={`${styles.overlay} ${phase === 'exiting' ? styles.exiting : ''}`}
      aria-hidden={phase === 'exiting'}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading DraftWorks Interiors"
    >
      <div className={styles.centerContent}>
        {/* Large Percentage */}
        <div className={styles.percentNumber}>
          <span className={styles.digits}>{percent}</span>
          <span className={styles.percentSymbol}>%</span>
        </div>

        {/* Fine Progress Line */}
        <div className={styles.progressTrack}>
          <div
            className={styles.progressBar}
            style={{ width: `${percent}%` }}
          />
        </div>

        <span className={styles.statusText}>
          {percent < 40 ? 'Curating Spaces' : percent < 80 ? 'Harmonizing Light' : 'Ready'}
        </span>
      </div>
    </div>
  );
}
