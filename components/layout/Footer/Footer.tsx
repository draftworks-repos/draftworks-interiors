'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { siteConfig } from '@/data/site';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer} aria-label="Studio Footer">
      <div className={styles.inner}>
        {/* Top 4-column Grid */}
        <div className={styles.topGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.brandTitle}>{siteConfig.name}</div>
            <p className={styles.brandDesc}>
              Architectural interior design practice crafting spaces that balance quiet sensory comfort,
              regional honesty, and timeless materiality.
            </p>
            <div className={styles.contactDetails}>
              <div>{siteConfig.location.fullAddress}</div>
              <div>{siteConfig.phone}</div>
              <div>{siteConfig.email}</div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <div className={styles.colHeading}>Services</div>
            <ul className={styles.linkList}>
              {siteConfig.footerLinks.services.map((item) => (
                <li key={item.href} className={styles.linkItem}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Column */}
          <div>
            <div className={styles.colHeading}>Studio</div>
            <ul className={styles.linkList}>
              {siteConfig.footerLinks.studio.map((item) => (
                <li key={item.href} className={styles.linkItem}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <div className={styles.colHeading}>Journal Inquiries</div>
            <p className={styles.brandDesc} style={{ marginBottom: '14px' }}>
              Subscribe to our architectural essays on materiality, circadian lighting, and spatial restraint.
            </p>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#D8CABB', fontSize: '0.85rem' }}>
                <Check size={16} color="#777B65" />
                <span>Thank you. You will receive our next architectural essay.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    aria-label="Email address for journal subscription"
                    className={styles.emailInput}
                  />
                  <button type="submit" aria-label="Subscribe to journal" className={styles.submitBtn}>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Large DraftWorks Wordmark */}
        <div className={styles.giantWordmarkWrap}>
          <span className={styles.giantWordmark}>DraftWorks</span>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </div>
          <div className={styles.socialRow}>
            {siteConfig.social.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.name}
              </a>
            ))}
            <Link href="/privacy-policy" style={{ marginLeft: '12px' }}>
              Privacy
            </Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
