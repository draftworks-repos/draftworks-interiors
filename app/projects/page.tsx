'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowUpRight, Search } from 'lucide-react';
import { projects } from '@/data/projects';
import DayNightImage from '@/components/shared/DayNightImage/DayNightImage';
import { filterProjects } from '@/lib/utils/format';

const categories = ['All', 'Residential', 'Villa', 'Apartment', 'Commercial'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = filterProjects(projects, selectedCategory, searchQuery);

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-warm-ivory)',
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '120px',
      }}
    >
      <div className="studio-container">
        {/* Header */}
        <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
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
            Portfolio of Works
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.6rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--color-deep-charcoal)',
              marginBottom: '20px',
            }}
          >
            Curated Spaces.
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-warm-brown)' }}>
              Enduring Architectural Atmospheres.
            </em>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
              lineHeight: 1.65,
              color: '#5C5245',
            }}
          >
            Explore our residential and commercial interior architecture projects across Central India.
            Each project is custom-designed around natural light, sensory textures, and timeless craftsmanship.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            paddingBottom: '32px',
            marginBottom: '48px',
            borderBottom: '1px solid var(--color-sand)',
          }}
        >
          {/* Category Tabs (Functional buttons as permitted by zero-pill guideline §1.A) */}
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
                    padding: '8px 18px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.04em',
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

          {/* Search Input */}
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
              placeholder="Search projects or cities..."
              aria-label="Search projects by name or location"
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

        {/* Project Grid */}
        {filtered.length === 0 ? (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              backgroundColor: 'var(--bg-soft-cream)',
              borderRadius: '4px',
            }}
          >
            <p style={{ color: '#5C5245', fontSize: '1rem', marginBottom: '16px' }}>
              No projects matched your search criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              style={{
                background: 'var(--color-espresso)',
                color: 'var(--bg-warm-ivory)',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                cursor: 'pointer',
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '48px',
            }}
          >
            {filtered.map((project, idx) => (
              <article
                key={project.slug}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image Container with Day/Night toggle if available */}
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '4px',
                    marginBottom: '16px',
                    backgroundColor: 'var(--bg-soft-cream)',
                    aspectRatio: idx % 3 === 0 ? '16/11' : '4/3',
                  }}
                >
                  <DayNightImage
                    daySrc={project.dayImage || project.heroImage}
                    nightSrc={project.nightImage || project.heroImage}
                    alt={project.title}
                    aspectRatio={idx % 3 === 0 ? '16/11' : '4/3'}
                  />
                </div>

                {/* Metadata */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    paddingTop: '10px',
                    borderTop: '1px solid var(--color-sand)',
                  }}
                >
                  <div>
                    <Link
                      href={`/projects/${project.slug}`}
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.45rem',
                        color: 'var(--color-deep-charcoal)',
                        textDecoration: 'none',
                        display: 'block',
                        marginBottom: '4px',
                      }}
                    >
                      {project.title}
                    </Link>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.8rem',
                        color: 'var(--color-warm-brown)',
                      }}
                    >
                      <MapPin size={12} />
                      <span>{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.area}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--color-deep-charcoal)',
                        marginBottom: '4px',
                      }}
                    >
                      {project.startingBudget}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
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
                      <span>Explore</span>
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
