import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: `Privacy Policy — ${siteConfig.name}`,
  description: `Privacy policy and client data protection practices for ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-warm-brown)', marginBottom: '40px' }}>
          Last Updated: October 2025 · DraftWorks Interiors Studio LLP
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', fontSize: '0.95rem', lineHeight: 1.7, color: '#40382E' }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-deep-charcoal)', marginBottom: '12px' }}>
              1. Information We Collect
            </h2>
            <p>
              When you submit a project inquiry or newsletter request via DraftWorks Interiors, we collect your name, email address, telephone number, approximate property location, and scope specifications. We never sell, rent, or lease client information to third parties.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-deep-charcoal)', marginBottom: '12px' }}>
              2. Use of Project Blueprint Data
            </h2>
            <p>
              Architectural blueprints, site measurements, CAD drawings, and photographs provided by clients remain strictly confidential and are utilized exclusively for design development and engineering coordination with vetted artisans.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-deep-charcoal)', marginBottom: '12px' }}>
              3. Photography and Portfolio Rights
            </h2>
            <p>
              Completed interior architecture projects photographed for our portfolio are subject to client consent. To safeguard client privacy, specific street addresses and private residential ownership details are kept anonymous in public monograph publications.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-deep-charcoal)', marginBottom: '12px' }}>
              4. Direct Inquiries
            </h2>
            <p>
              For privacy-related questions or data deletion requests, contact our studio administrator at {siteConfig.email} or visit our atelier at {siteConfig.location.fullAddress}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
