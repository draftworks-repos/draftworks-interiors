import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: `Terms & Conditions — ${siteConfig.name}`,
  description: `Terms and conditions governing architectural interior design consultancy with ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: '100vh', paddingTop: '130px', paddingBottom: '120px' }}>
      <div className="studio-container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.82rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-warm-brown)',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            <ArrowLeft size={14} />
            <span>Return Home</span>
          </Link>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
            color: 'var(--color-deep-charcoal)',
            marginBottom: '16px',
          }}
        >
          Terms & Conditions
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-warm-brown)', marginBottom: '40px' }}>
          Standard Consultancy Agreement Terms · DraftWorks Interiors
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', fontSize: '0.95rem', lineHeight: 1.7, color: '#40382E' }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-deep-charcoal)', marginBottom: '12px' }}>
              1. Scope of Architectural Consultancy
            </h2>
            <p>
              DraftWorks Interiors provides professional interior architectural design, space planning, lighting design, and construction documentation services. Unless explicitly contracted under a turnkey execution mandate, civil construction and specialized MEP trade works are carried out by independent licensed contractors under client engagement.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-deep-charcoal)', marginBottom: '12px' }}>
              2. Intellectual Property of Blueprints & Custom Millwork
            </h2>
            <p>
              All concepts, custom furniture drawings, 3D renderings, and technical documentation prepared by DraftWorks Interiors remain the intellectual property of the studio and are licensed exclusively for implementation at the designated project address.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-deep-charcoal)', marginBottom: '12px' }}>
              3. Indicative Estimates and Actual Market Costs
            </h2>
            <p>
              Budget ranges presented on this website and in preliminary discovery sessions represent indicative architectural averages in Central India. Sourcing costs for natural stone, imported timber, bespoke lighting fixtures, and custom metalwork are verified via actual merchant invoices during execution.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
