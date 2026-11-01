import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check, HelpCircle } from 'lucide-react';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found — DraftWorks Interiors',
    };
  }

  return {
    title: `${service.title} — ${siteConfig.name}`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find relevant projects
  const relevantProjects = projects.filter((p) =>
    service.relevantProjectSlugs.includes(p.slug)
  );

  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: '100vh', paddingTop: '110px', paddingBottom: '120px' }}>
      {/* Back Link */}
      <div className="studio-container" style={{ marginBottom: '24px' }}>
        <Link
          href="/services"
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
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="studio-container" style={{ marginBottom: '60px' }}>
        <div style={{ maxWidth: '860px' }}>
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
            Service {service.number} · Architecture & Interior
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
            {service.title}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
              lineHeight: 1.65,
              color: '#5C5245',
            }}
          >
            {service.leadParagraph}
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section className="studio-container" style={{ marginBottom: '80px' }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            style={{ objectFit: 'cover' }}
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Deliverables & Process */}
      <section className="studio-container" style={{ marginBottom: '90px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px' }}>
          {/* Deliverables */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                color: 'var(--color-deep-charcoal)',
                marginBottom: '20px',
              }}
            >
              Comprehensive Deliverables
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#5C5245', lineHeight: 1.6, marginBottom: '24px' }}>
              Every commission produces clear, actionable documentation so your contractors execute with millimeter precision.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {service.deliverables.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.9rem', color: '#40382E' }}>
                  <Check size={18} color="var(--color-warm-brown)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process Timeline */}
          <div style={{ backgroundColor: 'var(--bg-soft-cream)', border: '1px solid var(--color-sand)', padding: '36px', borderRadius: '4px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                color: 'var(--color-deep-charcoal)',
                marginBottom: '24px',
              }}
            >
              Working Methodology
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {service.process.map((p, idx) => (
                <div key={idx} style={{ borderBottom: idx < service.process.length - 1 ? '1px solid var(--color-sand)' : 'none', paddingBottom: '16px' }}>
                  <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-warm-brown)', fontWeight: 600, marginBottom: '4px' }}>
                    Phase {idx + 1}: {p.phase}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#5C5245', lineHeight: 1.6 }}>
                    {p.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Projects */}
      {relevantProjects.length > 0 && (
        <section style={{ backgroundColor: 'var(--bg-soft-cream)', padding: '80px 0', borderTop: '1px solid var(--color-sand)', borderBottom: '1px solid var(--color-sand)', marginBottom: '80px' }}>
          <div className="studio-container">
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                color: 'var(--color-deep-charcoal)',
                marginBottom: '32px',
              }}
            >
              Selected Case Studies for this Capability
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {relevantProjects.map((p) => (
                <div key={p.slug} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden', marginBottom: '12px' }}>
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <Link
                    href={`/projects/${p.slug}`}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      color: 'var(--color-deep-charcoal)',
                      textDecoration: 'none',
                      marginBottom: '4px',
                    }}
                  >
                    {p.title}
                  </Link>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-warm-brown)' }}>
                    {p.location} · {p.area}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faq && service.faq.length > 0 && (
        <section className="studio-container" style={{ marginBottom: '90px' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
                color: 'var(--color-deep-charcoal)',
                marginBottom: '28px',
                textAlign: 'center',
              }}
            >
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {service.faq.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-soft-cream)',
                    border: '1px solid var(--color-sand)',
                    padding: '24px',
                    borderRadius: '4px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-deep-charcoal)', marginBottom: '8px' }}>
                    <HelpCircle size={16} color="var(--color-warm-brown)" />
                    <span>{item.question}</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: '#5C5245', paddingLeft: '24px' }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="studio-container">
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
            Commission <em>{service.title}</em>
          </h2>
          <p style={{ maxWidth: '520px', fontSize: '0.95rem', color: '#D8CABB', lineHeight: 1.6 }}>
            Let us review your requirements and provide an itemized scope breakdown tailored to your property.
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
            <span>Inquire About This Service</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
