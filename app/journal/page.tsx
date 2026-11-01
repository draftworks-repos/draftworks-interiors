'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Search, ArrowUpRight } from 'lucide-react';
import { articles } from '@/data/journal';
import { filterJournalArticles } from '@/lib/utils/format';

const categories = ['All', 'Philosophy', 'Materials', 'Lighting', 'Architecture', 'Craftsmanship'];

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = filterJournalArticles(articles, selectedCategory, searchQuery);
  const featured = articles[0];

  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: '100vh', paddingTop: '130px', paddingBottom: '120px' }}>
      <div className="studio-container">
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '60px' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-warm-brown)',
              marginBottom: '16px',
              display: 'inline-block',
            }}
          >
            Architectural Journal & Essays
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--color-deep-charcoal)',
              marginBottom: '20px',
            }}
          >
            Insights on Space,
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-warm-brown)' }}>
              Light & Tactile Living.
            </em>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
              lineHeight: 1.65,
              color: '#5C5245',
            }}
          >
            Critical essays on warm minimalism, natural lime plasters, unlacquered metals, and circadian lighting design from the architects of DraftWorks Interiors.
          </p>
        </div>

        {/* Featured Article Hero (if no search active) */}
        {!searchQuery && selectedCategory === 'All' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              backgroundColor: 'var(--bg-soft-cream)',
              border: '1px solid var(--color-sand)',
              borderRadius: '4px',
              overflow: 'hidden',
              alignItems: 'center',
              marginBottom: '64px',
            }}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10' }}>
              <Image
                src={featured.heroImage}
                alt={featured.title}
                fill
                priority
                style={{ objectFit: 'cover' }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div style={{ padding: 'clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--color-warm-brown)' }}>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>Featured Essay</span>
                <span aria-hidden="true">·</span>
                <span>{featured.publishedDate}</span>
                <span aria-hidden="true">·</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={12} /> {featured.readingTime}
                </span>
              </div>
              <Link
                href={`/journal/${featured.slug}`}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  color: 'var(--color-deep-charcoal)',
                  textDecoration: 'none',
                  lineHeight: 1.2,
                }}
              >
                {featured.title}
              </Link>
              <p style={{ fontSize: '0.92rem', color: '#5C5245', lineHeight: 1.6 }}>
                {featured.excerpt}
              </p>
              <Link
                href={`/journal/${featured.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'var(--color-espresso)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--color-espresso)',
                  paddingBottom: '2px',
                  alignSelf: 'flex-start',
                  marginTop: '8px',
                }}
              >
                <span>Read Full Essay</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        )}

        {/* Filter Tabs & Search */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            paddingBottom: '28px',
            marginBottom: '48px',
            borderBottom: '1px solid var(--color-sand)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              backgroundColor: 'var(--bg-soft-cream)',
              padding: '4px',
              borderRadius: '6px',
            }}
          >
            {categories.map((cat) => {
              const active = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: active ? '#FFFFFF' : 'transparent',
                    color: active ? 'var(--color-espresso)' : '#5C5245',
                    fontWeight: active ? 600 : 500,
                    boxShadow: active ? '0 2px 8px rgba(0,0,0,0.04)' : 'none',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'var(--bg-soft-cream)',
              border: '1px solid var(--color-sand)',
              borderRadius: '9999px',
              padding: '8px 16px',
              minWidth: '240px',
            }}
          >
            <Search size={16} color="var(--color-warm-brown)" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays or materials..."
              aria-label="Search journal articles"
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-deep-charcoal)',
                width: '100%',
              }}
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '40px' }}>
          {filtered.map((article) => (
            <article
              key={article.slug}
              style={{
                backgroundColor: 'var(--bg-soft-cream)',
                border: '1px solid var(--color-sand)',
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10' }}>
                <Image
                  src={article.heroImage}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--color-warm-brown)', marginBottom: '10px' }}>
                    <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <Link
                    href={`/journal/${article.slug}`}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      lineHeight: 1.25,
                      color: 'var(--color-deep-charcoal)',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    {article.title}
                  </Link>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#5C5245', marginBottom: '20px' }}>
                    {article.excerpt}
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-sand)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-warm-brown)' }}>By {article.author.name}</span>
                  <Link
                    href={`/journal/${article.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.75rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-espresso)',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <span>Read</span>
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
