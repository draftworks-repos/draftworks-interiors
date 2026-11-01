'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '@/data/journal';
import styles from './JournalPreview.module.css';

export default function JournalPreview() {
  const featuredArticles = articles.slice(0, 2);

  return (
    <section className={styles.section} aria-label="From Our Architectural Journal">
      <div className={styles.inner}>
        <div className={styles.headerRow}>
          <div>
            <span className={styles.kicker}>Our Blog</span>
            <h2 className={styles.heading}>
              Thoughts on Creating <em>Elevated Everyday Spaces</em>
            </h2>
          </div>
          <Link href="/journal" className={styles.viewAllBtn}>
            <span>View All Blog</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className={styles.articlesGrid}>
          {featuredArticles.map((article, idx) => (
            <article key={article.slug} className={styles.articleCard}>
              <div className={styles.cardHeader}>
                <div className={styles.dateBlock}>
                  <span className={styles.dateDay}>{idx === 0 ? '18' : '24'}</span>
                  <span className={styles.dateMonth}>{idx === 0 ? 'Oct' : 'Sep'}</span>
                </div>
                <div className={styles.cardCategory}>{article.category}</div>
              </div>

              <div className={styles.imageWrapper}>
                <Image
                  src={article.heroImage}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className={styles.cardBody}>
                <div>
                  <Link href={`/journal/${article.slug}`} className={styles.articleTitle}>
                    {article.title}
                  </Link>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>
                </div>

                <Link href={`/journal/${article.slug}`} className={styles.readLink}>
                  <span>Read More</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
