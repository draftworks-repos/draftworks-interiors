'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { getClipPathPolygon } from '@/lib/utils/curvedGallery';
import styles from './CurvedMorphingSlider.module.css';

export interface GallerySlide {
  id: string;
  src: string;
  title: string;
  category: string;
}

// 8 curated architectural photographs from DraftWorks projects
const slides: GallerySlide[] = [
  {
    id: 'dining',
    src: '/images/dining.jpg',
    title: 'The Courtyard Pavilion',
    category: 'Dining Architecture',
  },
  {
    id: 'study',
    src: '/images/study.jpg',
    title: 'The Oak Atelier',
    category: 'Private Library & Study',
  },
  {
    id: 'bedroom',
    src: '/images/bedroom_day.jpg',
    title: 'The Ivory Residence',
    category: 'Master Suite Sanctuary',
  },
  {
    id: 'living',
    src: '/images/living_day.jpg',
    title: 'Modern Earth Villa',
    category: 'Central Garden Lounge',
  },
  {
    id: 'kitchen',
    src: '/images/kitchen.jpg',
    title: 'Urban Minimal',
    category: 'Fluted Oak Kitchen',
  },
  {
    id: 'bathroom',
    src: '/images/bathroom.jpg',
    title: 'Sanctuary Suite',
    category: 'Limestone Bath Pavilion',
  },
  {
    id: 'solarium',
    src: '/images/living_villa_day_1793400872380.jpg',
    title: 'Aranya Estate',
    category: 'Sunlit Living Gallery',
  },
  {
    id: 'nocturne',
    src: '/images/bedroom_night.jpg',
    title: 'Nocturne Penthouse',
    category: 'Ambient Lighting & Textures',
  },
];

export default function CurvedMorphingSlider() {
  // Start with Ivory Residence (bedroom) as the active center slide
  const [activeIndex, setActiveIndex] = useState(2);
  const activeIndexRef = useRef(2);

  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const isAnimatingRef = useRef(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dragStartXRef = useRef<number | null>(null);
  const dragCurrentXRef = useRef<number>(0);
  const animProgressRef = useRef<{ val: number }>({ val: 0 });

  // Responsive layout metrics (full width, no max-width)
  const [metrics, setMetrics] = useState({
    cardWidth: 260,
    gap: 16,
    visibleSlots: [-3, -2, -1, 0, 1, 2, 3],
  });
  const metricsRef = useRef(metrics);
  metricsRef.current = metrics;

  // Compute metrics based on actual container width without artificial max-width constraints
  const updateMetrics = useCallback(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    const isMobile = width < 768;

    if (isMobile) {
      // Mobile: center card prominent (~66% width), symmetric peeking flanks
      const cardWidth = Math.max(180, Math.floor(width * 0.66));
      const newMetrics = {
        cardWidth,
        gap: 12,
        visibleSlots: [-2, -1, 0, 1, 2],
      };
      setMetrics(newMetrics);
      metricsRef.current = newMetrics;
    } else {
      // Desktop: 5 visible cards across full width with symmetric flanks
      // Slots -2, -1, 0, 1, 2 are visible; -3 and +3 are smooth transition buffers
      const gap = width > 1600 ? 20 : 16;
      const cardWidth = Math.max(220, Math.floor((width * 0.94 - 4 * gap) / 5));
      const newMetrics = {
        cardWidth,
        gap,
        visibleSlots: [-3, -2, -1, 0, 1, 2, 3],
      };
      setMetrics(newMetrics);
      metricsRef.current = newMetrics;
    }
  }, []);

  useEffect(() => {
    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, [updateMetrics]);

  /**
   * Applies the exact mathematical wave shape, translate3d, and smooth opacity.
   * Accepting baseActiveIndex directly prevents any React state closure desync or flicker.
   */
  const renderSlots = useCallback((offset = 0, baseActiveIndex?: number) => {
    const { cardWidth, gap, visibleSlots } = metricsRef.current;
    const totalSlides = slides.length;
    const active = baseActiveIndex !== undefined ? baseActiveIndex : activeIndexRef.current;

    // Track which slides are actively placed so inactive reserve slides are cleanly hidden
    const placedIndices = new Set<number>();

    visibleSlots.forEach((slot) => {
      // Continuous relative position: offset smoothly moves items across slots
      const effectivePos = slot - offset;
      const slideIndex = (active + slot + totalSlides * 100) % totalSlides;
      placedIndices.add(slideIndex);

      const el = slidesRef.current[slideIndex];
      if (el) {
        // x = 0 places center slide dead center at left: 50%
        const x = effectivePos * (cardWidth + gap);
        const clipPolygon = getClipPathPolygon(effectivePos);

        el.style.display = 'block';
        el.style.width = `${cardWidth}px`;
        el.style.transform = `translate3d(calc(-50% + ${x}px), 0, 0)`;
        el.style.clipPath = clipPolygon;
        el.style.setProperty('-webkit-clip-path', clipPolygon);

        // Z-index: center slide on top, outer slides layered gracefully
        el.style.zIndex = Math.abs(effectivePos) < 0.5 ? '10' : `${Math.max(1, 8 - Math.round(Math.abs(effectivePos)))}`;

        // Smooth opacity: outer buffer slides (|effectivePos| > 2.3) fade out cleanly
        const absPos = Math.abs(effectivePos);
        if (absPos > 2.8) {
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
        } else if (absPos > 2.2) {
          const fade = 1 - (absPos - 2.2) / 0.6;
          el.style.opacity = Math.max(0, Math.min(1, fade)).toFixed(3);
          el.style.pointerEvents = 'none';
        } else {
          el.style.opacity = '1';
          el.style.pointerEvents = 'auto';
        }
      }
    });

    // Hide any remaining slides in the circular pool not in the current visible slots
    for (let i = 0; i < totalSlides; i++) {
      if (!placedIndices.has(i)) {
        const inactiveEl = slidesRef.current[i];
        if (inactiveEl) {
          inactiveEl.style.display = 'none';
          inactiveEl.style.opacity = '0';
          inactiveEl.style.pointerEvents = 'none';
        }
      }
    }
  }, []);

  // Sync initial and resize layouts
  useEffect(() => {
    renderSlots(0, activeIndexRef.current);
  }, [metrics, renderSlots]);

  /**
   * Animates smoothly to next or previous slide using GSAP.
   * Completely flicker-free: mathematically seamless handoff between (progress=1, oldIndex) and (progress=0, nextIndex).
   */
  const goTo = useCallback(
    (direction: 1 | -1, onDone?: () => void) => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      const totalSlides = slides.length;
      const currentActive = activeIndexRef.current;
      const nextIndex = (currentActive + direction + totalSlides) % totalSlides;

      animProgressRef.current.val = 0;

      gsap.to(animProgressRef.current, {
        val: direction,
        duration: 1.1,
        ease: 'power2.inOut',
        onUpdate: () => {
          renderSlots(animProgressRef.current.val, currentActive);
        },
        onComplete: () => {
          // Immediately update ref and render at progress 0 with nextIndex
          activeIndexRef.current = nextIndex;
          setActiveIndex(nextIndex);
          animProgressRef.current.val = 0;
          renderSlots(0, nextIndex);
          isAnimatingRef.current = false;
          if (onDone) onDone();
        },
      });
    },
    [renderSlots]
  );

  /**
   * Autoplay management
   */
  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    autoplayTimerRef.current = setInterval(() => {
      goTo(1);
    }, 4500);
  }, [goTo]);

  const pauseAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => pauseAutoplay();
  }, [startAutoplay, pauseAutoplay]);

  /**
   * Click on neighboring visible slide to navigate
   */
  const handleSlideClick = (slot: number) => {
    if (slot === 0 || isAnimatingRef.current) return;
    pauseAutoplay();
    if (slot > 0) {
      goTo(1, () => startAutoplay());
    } else {
      goTo(-1, () => startAutoplay());
    }
  };

  /**
   * Drag / Touch swipe handlers
   */
  const handlePointerDown = (e: React.PointerEvent) => {
    if (isAnimatingRef.current) return;
    pauseAutoplay();
    dragStartXRef.current = e.clientX;
    dragCurrentXRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragStartXRef.current === null || isAnimatingRef.current) return;
    const deltaX = e.clientX - dragStartXRef.current;
    dragCurrentXRef.current = deltaX;

    const { cardWidth, gap } = metricsRef.current;
    const progress = -deltaX / (cardWidth + gap);
    // Live interactive morphing during user drag
    renderSlots(Math.max(-0.95, Math.min(0.95, progress)), activeIndexRef.current);
  };

  const handlePointerUp = () => {
    if (dragStartXRef.current === null) return;
    const deltaX = dragCurrentXRef.current;
    dragStartXRef.current = null;
    dragCurrentXRef.current = 0;

    const threshold = 35;
    if (deltaX < -threshold) {
      goTo(1, () => startAutoplay());
    } else if (deltaX > threshold) {
      goTo(-1, () => startAutoplay());
    } else {
      // Snap back smoothly
      gsap.to(animProgressRef.current, {
        val: 0,
        duration: 0.3,
        ease: 'power2.out',
        onUpdate: () => renderSlots(animProgressRef.current.val, activeIndexRef.current),
        onComplete: () => {
          renderSlots(0, activeIndexRef.current);
          startAutoplay();
        },
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className={styles.galleryWrapper}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={startAutoplay}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      aria-label="Architectural curved morphing hero gallery"
      role="region"
    >
      <div className={styles.galleryStage}>
        <div className={styles.track}>
          {slides.map((slide, idx) => {
            const total = slides.length;
            let relSlot = (idx - activeIndex) % total;
            if (relSlot > total / 2) relSlot -= total;
            if (relSlot < -total / 2) relSlot += total;

            return (
              <div
                key={slide.id}
                ref={(el) => {
                  slidesRef.current[idx] = el;
                }}
                className={styles.slideItem}
                onClick={() => handleSlideClick(relSlot)}
                role="button"
                tabIndex={0}
                aria-label={`Slide ${idx + 1}: ${slide.title} (${slide.category}). ${relSlot === 0 ? 'Active center slide' : 'Click to center'}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSlideClick(relSlot);
                  }
                }}
              >
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 70vw, 25vw"
                  className={styles.slideImage}
                  referrerPolicy="no-referrer"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
