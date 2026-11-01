'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Zone 1: Left Navigation Links on Desktop */}
          <nav className={styles.navLeft} aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 2: Center Logo (Only the clean name "DraftWorks") */}
          <Link href="/" className={styles.brandCenter} aria-label="DraftWorks Home">
            <span className={styles.brandWordmark}>DraftWorks</span>
          </Link>

          {/* Zone 3: Right CTA Button */}
          <div className={styles.actionsRight}>
            <Link href="/contact" className={styles.ctaButton}>
              Start a Project
            </Link>

            <button
              type="button"
              className={styles.mobileMenuToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 49,
            backgroundColor: 'var(--bg-warm-ivory)',
            paddingTop: '90px',
            paddingBottom: '40px',
            paddingLeft: '24px',
            paddingRight: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--color-warm-brown)',
                marginBottom: '8px',
              }}
            >
              Navigation
            </div>
            {siteConfig.navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.85rem',
                    color: isActive ? 'var(--color-espresso)' : 'var(--color-deep-charcoal)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '12px',
                    borderBottom: '1px solid var(--color-sand)',
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={20} color="var(--color-warm-brown)" />
                </Link>
              );
            })}
          </div>

          <div
            style={{
              paddingTop: '24px',
              borderTop: '1px solid var(--color-sand)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div style={{ fontSize: '0.85rem', color: 'var(--color-warm-brown)' }}>
              Studio: {siteConfig.location.fullAddress}
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--color-deep-charcoal)', fontWeight: 500 }}>
              {siteConfig.phone} · {siteConfig.email}
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textAlign: 'center',
                marginTop: '8px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--color-espresso)',
                color: 'var(--bg-warm-ivory)',
                padding: '14px 24px',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.85rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Inquire About a Project
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
