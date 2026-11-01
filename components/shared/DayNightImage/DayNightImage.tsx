'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sun, Moon } from 'lucide-react';
import styles from './DayNightImage.module.css';

interface DayNightImageProps {
  daySrc: string;
  nightSrc: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
}

export default function DayNightImage({
  daySrc,
  nightSrc,
  alt,
  aspectRatio = '16/9',
  className = '',
  priority = false,
}: DayNightImageProps) {
  // isNight: false = Day (ball on left), true = Night (ball on right)
  const [isNight, setIsNight] = useState(false);

  const toggleLighting = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsNight((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleLighting(e);
    }
  };

  return (
    <div
      className={`${styles.container} ${className}`}
      style={{ aspectRatio }}
      role="region"
      aria-label={`Lighting showcase: ${alt}`}
    >
      <div className={styles.imageWrapper}>
        {/* Daytime Photograph */}
        <Image
          src={daySrc}
          alt={`${alt} — Daytime natural lighting`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
          className={styles.image}
          referrerPolicy="no-referrer"
        />

        {/* Nighttime Photograph with crossfade */}
        <div
          className={styles.nightLayer}
          style={{
            opacity: isNight ? 1 : 0,
            pointerEvents: isNight ? 'auto' : 'none',
          }}
          aria-hidden={!isNight}
        >
          <Image
            src={nightSrc}
            alt={`${alt} — Evening circadian lighting`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
            className={styles.image}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Switch-Style Toggle (circular ball moves left and right) */}
        <div
          role="switch"
          aria-checked={isNight}
          tabIndex={0}
          onClick={toggleLighting}
          onKeyDown={handleKeyDown}
          className={styles.switchTrack}
          aria-label={
            isNight
              ? 'Lighting mode: Evening. Click to switch to Daytime.'
              : 'Lighting mode: Daytime. Click to switch to Evening.'
          }
          title={isNight ? 'Switch to Daytime illumination' : 'Switch to Evening illumination'}
        >
          {/* Static minimal icons on track */}
          <div className={`${styles.trackIcon} ${!isNight ? styles.trackIconActive : ''}`}>
            <Sun size={12} strokeWidth={2} />
          </div>
          <div className={`${styles.trackIcon} ${isNight ? styles.trackIconActive : ''}`}>
            <Moon size={12} strokeWidth={2} />
          </div>

          {/* Sliding Circular Ball / Thumb */}
          <div className={`${styles.switchThumb} ${isNight ? styles.thumbNight : ''}`}>
            {isNight ? (
              <Moon size={13} strokeWidth={2.2} />
            ) : (
              <Sun size={13} strokeWidth={2.2} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
