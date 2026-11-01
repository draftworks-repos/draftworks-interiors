'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, X, ArrowUpRight, Calculator, ShieldCheck } from 'lucide-react';
import { pricingPackages } from '@/data/pricing';
import { formatINR } from '@/lib/utils/format';

export default function PricingPage() {
  // Interactive Project Cost Estimator
  const [areaSqFt, setAreaSqFt] = useState<number>(3000);
  const [propertyType, setPropertyType] = useState<'apartment' | 'villa' | 'estate'>('villa');

  // Rate multiplier calculations (approximate design consultancy rate per sq.ft)
  const ratePerSqFt = propertyType === 'apartment' ? 120 : propertyType === 'villa' ? 160 : 220;
  const estimatedDesignFee = Math.round(areaSqFt * ratePerSqFt);

  // Turnkey execution range (rough material & contractor cost)
  const executionMin = Math.round(areaSqFt * (propertyType === 'apartment' ? 1500 : propertyType === 'villa' ? 2200 : 3200));
  const executionMax = Math.round(areaSqFt * (propertyType === 'apartment' ? 2400 : propertyType === 'villa' ? 3800 : 5500));

  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: '100vh', paddingTop: '130px', paddingBottom: '120px' }}>
      <div className="studio-container">
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '64px' }}>
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
            Investment & Packages
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
            Transparent Architectural Fees.
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-warm-brown)' }}>
              Tailored to Your Property Scope.
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
            We believe in complete financial clarity. Our design consultancy fees are fixed and structured by project scope, with zero hidden contractor markups or kickbacks.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '80px', alignItems: 'stretch' }}>
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                backgroundColor: pkg.popular ? '#FFFFFF' : 'var(--bg-soft-cream)',
                border: pkg.popular ? '2px solid var(--color-espresso)' : '1px solid var(--color-sand)',
                borderRadius: '4px',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                boxShadow: pkg.popular ? '0 16px 40px rgba(23, 22, 19, 0.08)' : 'none',
              }}
            >
              {pkg.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '32px',
                    backgroundColor: 'var(--color-espresso)',
                    color: 'var(--bg-warm-ivory)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    padding: '4px 14px',
                    borderRadius: '9999px',
                  }}
                >
                  Flagship Offering
                </div>
              )}

              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-deep-charcoal)', marginBottom: '8px' }}>
                  {pkg.name}
                </h2>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--color-espresso)' }}>
                    {pkg.formattedPrice}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-warm-brown)' }}>{pkg.unit}</span>
                </div>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#5C5245', marginBottom: '20px' }}>
                  {pkg.subtitle}
                </p>

                <div style={{ padding: '12px 16px', backgroundColor: 'var(--bg-warm-ivory)', borderRadius: '4px', marginBottom: '24px', fontSize: '0.82rem', color: 'var(--color-deep-charcoal)' }}>
                  <strong>Ideal for:</strong> {pkg.idealFor}
                  <div style={{ marginTop: '4px', color: 'var(--color-warm-brown)' }}>
                    <strong>Timeline:</strong> {pkg.timeline}
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-warm-brown)', fontWeight: 600, marginBottom: '12px' }}>
                    What’s Included:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {pkg.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#40382E' }}>
                        <Check size={16} color="var(--color-warm-brown)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/contact"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: pkg.popular ? 'var(--color-espresso)' : 'transparent',
                  color: pkg.popular ? 'var(--bg-warm-ivory)' : 'var(--color-espresso)',
                  border: pkg.popular ? 'none' : '1px solid var(--color-espresso)',
                  padding: '14px 24px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginTop: '20px',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>Select {pkg.name}</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Interactive Scope & Fee Calculator */}
        <section
          style={{
            backgroundColor: 'var(--bg-soft-cream)',
            border: '1px solid var(--color-sand)',
            borderRadius: '4px',
            padding: 'clamp(32px, 5vw, 56px)',
            marginBottom: '80px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-warm-brown)', marginBottom: '8px' }}>
            <Calculator size={20} />
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
              Estimator Tool
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-deep-charcoal)', marginBottom: '16px' }}>
            Indicative Scope & Budget Estimator
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#5C5245', maxWidth: '640px', lineHeight: 1.6, marginBottom: '36px' }}>
            Adjust the sliders below to estimate the architectural design consultancy fee and full turnkey material ranges for your residence.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'center' }}>
            {/* Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-deep-charcoal)', marginBottom: '8px' }}>
                  Property Type:
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {(['apartment', 'villa', 'estate'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setPropertyType(t)}
                      style={{
                        padding: '10px 18px',
                        borderRadius: '4px',
                        border: propertyType === t ? '1px solid var(--color-espresso)' : '1px solid var(--color-sand)',
                        backgroundColor: propertyType === t ? 'var(--color-espresso)' : 'var(--bg-warm-ivory)',
                        color: propertyType === t ? 'var(--bg-warm-ivory)' : 'var(--color-deep-charcoal)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.82rem',
                        textTransform: 'capitalize',
                        cursor: 'pointer',
                        fontWeight: 600,
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-deep-charcoal)' }}>
                  <span>Property Area:</span>
                  <span style={{ color: 'var(--color-warm-brown)' }}>{areaSqFt.toLocaleString('en-IN')} sq.ft</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={10000}
                  step={250}
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--color-espresso)', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#8C8071', marginTop: '4px' }}>
                  <span>1,000 sq.ft</span>
                  <span>5,000 sq.ft</span>
                  <span>10,000 sq.ft</span>
                </div>
              </div>
            </div>

            {/* Estimated Output Card */}
            <div
              style={{
                backgroundColor: 'var(--bg-warm-ivory)',
                border: '1px solid var(--color-sand)',
                borderRadius: '4px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-warm-brown)', fontWeight: 600 }}>
                  Estimated Architecture & Design Fee:
                </span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 600, color: 'var(--color-espresso)', lineHeight: 1.2 }}>
                  {formatINR(estimatedDesignFee)}
                </div>
                <span style={{ fontSize: '0.75rem', color: '#766451' }}>
                  Includes 2D/3D layouts, electrical & circadian lighting, custom millwork drawings.
                </span>
              </div>

              <div style={{ borderTop: '1px solid var(--color-sand)', paddingTop: '16px' }}>
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-warm-brown)', fontWeight: 600 }}>
                  Estimated Turnkey Material & Execution Budget:
                </span>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-deep-charcoal)', marginTop: '4px' }}>
                  {formatINR(executionMin)} – {formatINR(executionMax)}
                </div>
                <span style={{ fontSize: '0.75rem', color: '#766451' }}>
                  Direct contractor civil works, natural stone, white oak woodwork, and plumbing fixtures.
                </span>
              </div>

              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--color-espresso)',
                  color: 'var(--bg-warm-ivory)',
                  padding: '12px 20px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginTop: '8px',
                }}
              >
                <span>Request Formal Proposal</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer Note */}
        <div style={{ padding: '24px', border: '1px solid var(--color-sand)', borderRadius: '4px', fontSize: '0.85rem', color: '#5C5245', lineHeight: 1.6 }}>
          <strong style={{ color: 'var(--color-deep-charcoal)', display: 'block', marginBottom: '4px' }}>
            Disclaimer on Indicative Figures:
          </strong>
          All figures listed above are indicative prototype calculations based on standard Central India architectural averages. Final project fees are established only after reviewing precise CAD as-builts, structural modifications, ceiling heights, and bespoke joinery requirements.
        </div>
      </div>
    </div>
  );
}
