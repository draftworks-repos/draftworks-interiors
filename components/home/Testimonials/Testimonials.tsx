'use client';

import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/team';
import { siteConfig } from '@/data/site';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const featured = testimonials[0];
  const supporting = testimonials.slice(1);

  return (
    <section className={styles.section} aria-label="Client Testimonials and Statistics">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.kicker}>Testimonials</span>
          <h2 className={styles.heading}>
            Experiences Elevated Through <em>Intentional Design</em>
          </h2>
        </div>

        <div className={styles.mainGrid}>
          {/* Featured Large Testimonial Card */}
          <div className={styles.featuredCard}>
            <Image
              src={featured.image}
              alt={featured.projectName}
              fill
              className={styles.featuredImage}
              referrerPolicy="no-referrer"
            />
            <div className={styles.scrim} />
            <div className={styles.featuredContent}>
              <Quote size={28} color="#D8CABB" style={{ marginBottom: '16px', opacity: 0.8 }} />
              <blockquote className={styles.featuredQuote}>
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <div className={styles.featuredAuthor}>
                <div>
                  <div className={styles.authorName}>{featured.clientName}</div>
                  <div className={styles.authorMeta}>
                    {featured.clientRole} · {featured.projectName}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Review Cards */}
          <div className={styles.reviewsList}>
            {supporting.map((review) => (
              <div key={review.id} className={styles.reviewItem}>
                <p className={styles.reviewQuote}>&ldquo;{review.quote}&rdquo;</p>
                <div className={styles.reviewAuthor}>
                  <div>
                    <div className={styles.reviewAuthorName}>{review.clientName}</div>
                    <div className={styles.reviewProject}>{review.clientRole}</div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-warm-brown)' }}>
                    {review.projectName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 09 — Studio Statistics */}
        <div className={styles.statsSection}>
          <h3 className={styles.statsTitle}>Real Homes, Beautifully Transformed</h3>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>4.9/5</div>
              <div className={styles.statLabel}>Client Rating</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>150+</div>
              <div className={styles.statLabel}>Spaces Designed</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>98%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>18</div>
              <div className={styles.statLabel}>Cities Across India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
