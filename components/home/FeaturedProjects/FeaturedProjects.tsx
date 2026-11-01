'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import DayNightImage from '@/components/shared/DayNightImage/DayNightImage';
import styles from './FeaturedProjects.module.css';

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  // Different aspect ratios for editorial asymmetry:
  // Card 0: tall 3/4
  // Card 1: square 1/1
  // Card 2: tall 3/4
  // Card 3: portrait 4/5
  const aspectRatios = ['3/4', '1/1', '3/4', '4/5'];

  return (
    <section className={styles.section} aria-label="Selected Projects">
      <div className={styles.inner}>
        <div className={styles.headerRow}>
          <div>
            <span className={styles.kicker}>Featured Projects</span>
            <h2 className={styles.heading}>
              Elevating Everyday Living <em>Through Thoughtful Design</em>
            </h2>
          </div>
          <Link href="/projects" className={styles.viewAllProjects}>
            <span>View All Projects</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className={styles.projectsGrid}>
          {featured.map((project, idx) => (
            <article key={project.slug} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                {project.hasDayNight && project.dayImage && project.nightImage ? (
                  <DayNightImage
                    daySrc={project.dayImage}
                    nightSrc={project.nightImage}
                    alt={project.title}
                    aspectRatio={aspectRatios[idx % aspectRatios.length]}
                  />
                ) : (
                  <Link
                    href={`/projects/${project.slug}`}
                    style={{
                      display: 'block',
                      position: 'relative',
                      aspectRatio: aspectRatios[idx % aspectRatios.length],
                    }}
                  >
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 25vw"
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                )}
              </div>

              <div className={styles.projectMeta}>
                <div>
                  <Link href={`/projects/${project.slug}`} className={styles.projectTitle}>
                    {project.title}
                  </Link>
                  <div className={styles.projectLocation}>
                    <MapPin size={12} />
                    <span>{project.location}</span>
                    <span aria-hidden="true" style={{ margin: '0 4px' }}>·</span>
                    <span>{project.area}</span>
                  </div>
                </div>
                <div className={styles.projectBudget}>
                  {project.startingBudget}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
