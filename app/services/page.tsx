import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Check } from 'lucide-react';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: `Interior Architecture Services — ${siteConfig.name}`,
  description:
    'Comprehensive interior architecture services in Bhopal: Residential interior design, commercial spaces, architectural lighting, space planning, custom furniture, and heritage renovation.',
};

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: '100vh', paddingTop: '130px', paddingBottom: '120px' }}>
      <div className="studio-container">
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '80px' }}>
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
            Capabilities & Practice
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
            End-to-End Interior Architecture.
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-warm-brown)' }}>
              From Concept to Handover.
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
            We offer holistic interior design and technical documentation for homeowners, developers, and corporate clients seeking environments of refined aesthetic dignity and enduring material quality.
          </p>
        </div>

        {/* Services List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginBottom: '100px' }}>
          {services.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '48px',
                alignItems: 'center',
                paddingBottom: '60px',
                borderBottom: '1px solid var(--color-sand)',
              }}
            >
              <div style={{ order: index % 2 === 1 ? 2 : 1 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-warm-brown)',
                    fontWeight: 600,
                    marginBottom: '12px',
                    display: 'block',
                  }}
                >
                  {service.number} · Capability
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                    lineHeight: 1.15,
                    color: 'var(--color-deep-charcoal)',
                    marginBottom: '16px',
                  }}
                >
                  {service.title}
                </h2>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#5C5245', marginBottom: '24px' }}>
                  {service.leadParagraph}
                </p>

                {/* Deliverables */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-espresso)', fontWeight: 600, marginBottom: '12px' }}>
                    What We Deliver
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {service.deliverables.slice(0, 4).map((d, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#40382E' }}>
                        <Check size={16} color="var(--color-warm-brown)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'var(--color-espresso)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-espresso)',
                    paddingBottom: '4px',
                  }}
                >
                  <span>Explore Full Service Details</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* Service Visual */}
              <div
                style={{
                  order: index % 2 === 1 ? 1 : 2,
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/3',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-soft-cream)',
                  boxShadow: '0 12px 32px rgba(23, 22, 19, 0.05)',
                }}
              >
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            backgroundColor: 'var(--color-espresso)',
            borderRadius: '4px',
            padding: 'clamp(48px, 6vw, 72px) clamp(24px, 5vw, 64px)',
            color: 'var(--bg-warm-ivory)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#F6F1E9' }}>
            Unsure Which Service Matches Your Scope?
          </h2>
          <p style={{ maxWidth: '520px', fontSize: '0.95rem', color: '#D8CABB', lineHeight: 1.6 }}>
            Book an initial architectural discovery session to review blueprints, scope estimates, and material boards.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--bg-warm-ivory)',
              color: 'var(--color-espresso)',
              padding: '14px 32px',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginTop: '8px',
            }}
          >
            <span>Book Discovery Consultation</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
