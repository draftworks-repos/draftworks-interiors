import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Compass, ShieldCheck, SunMedium, Sparkles } from 'lucide-react';
import { teamMembers } from '@/data/team';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: `About Our Studio — ${siteConfig.name}`,
  description:
    'Learn about DraftWorks Interiors, an architectural interior design practice in Bhopal crafting enduring residential and commercial spaces rooted in warm minimalism and sensory tactility.',
};

const principles = [
  {
    icon: Compass,
    title: 'Design with Purpose',
    desc: 'We reject frivolous ornamentation. Every archway, niche, joinery reveal, and shadowline serves an intentional spatial or acoustic purpose.',
  },
  {
    icon: SunMedium,
    title: 'Circadian Daylight Harmony',
    desc: 'Central India experiences intense sunshine. We sculpt architectural openings, deep reveals, and 2700K indirect scenes to honor the natural passage of day and dusk.',
  },
  {
    icon: Sparkles,
    title: 'Tactile Material Authenticity',
    desc: 'We choose living materials—hand-troweled slaked lime plaster, rough-hewn travertine, quarter-sawn white oak, and unlacquered brass that mature with grace.',
  },
  {
    icon: ShieldCheck,
    title: 'End-to-End Stewardship',
    desc: 'From initial spatial planning through millwork shop drawings and contractor quality sign-offs, we safeguard your design investment until final white-glove handover.',
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: '100vh', paddingTop: '130px', paddingBottom: '100px' }}>
      {/* Studio Header */}
      <section className="studio-container" style={{ marginBottom: '80px' }}>
        <div style={{ maxWidth: '840px' }}>
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
            The Atelier & Studio
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--color-deep-charcoal)',
              marginBottom: '28px',
            }}
          >
            Rooted in Craftsmanship.
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-warm-brown)' }}>
              Dedicated to Spatial Serenity.
            </em>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
              lineHeight: 1.7,
              color: '#5C5245',
            }}
          >
            Founded in Bhopal, DraftWorks Interiors was born from a desire to create homes that transcend fleeting design fads. We practice a restrained, sensory-driven architecture where tactile natural stone, honest timber joinery, and poetic daylight converge to create deeply personal sanctuaries.
          </p>
        </div>
      </section>

      {/* Hero Visual Composition */}
      <section className="studio-container" style={{ marginBottom: '110px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ position: 'relative', aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              src="/images/bedroom_day.jpg"
              alt="Architectural master bedroom with curved arches"
              fill
              style={{ objectFit: 'cover' }}
              referrerPolicy="no-referrer"
            />
          </div>
          <div style={{ position: 'relative', aspectRatio: '16/10', borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              src="/images/dining.jpg"
              alt="Minimalist dining room with garden views"
              fill
              style={{ objectFit: 'cover' }}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Studio Philosophy & Story */}
      <section style={{ backgroundColor: 'var(--bg-soft-cream)', padding: '90px 0', borderTop: '1px solid var(--color-sand)', borderBottom: '1px solid var(--color-sand)', marginBottom: '110px' }}>
        <div className="studio-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
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
                Our Story & Philosophy
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                  lineHeight: 1.15,
                  color: 'var(--color-deep-charcoal)',
                  marginBottom: '24px',
                }}
              >
                Why We Reject <em>Cold Clinical Minimalism</em>
              </h2>
              <div style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#5C5245', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>
                  Modern interiors too frequently trade soul for spectacle. In many contemporary homes, high-gloss synthetic surfaces and blinding cool downlights create rooms that feel sterile, cold, and exhausting to inhabit.
                </p>
                <p>
                  At DraftWorks, our work is informed by the regional climate of Madhya Pradesh—warm dry summers, gentle winter breezes, and generous golden afternoon light. We balance open-plan spatial volumes with quiet alcoves, thick acoustic drapery, and tactile lime plasters that soften everyday acoustics.
                </p>
              </div>
            </div>

            <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 16px 36px rgba(23, 22, 19, 0.06)' }}>
              <Image
                src="/images/living_day.jpg"
                alt="Tactile warm minimalism living area"
                fill
                style={{ objectFit: 'cover' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Design Principles */}
      <section className="studio-container" style={{ marginBottom: '120px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 64px' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-warm-brown)',
              marginBottom: '12px',
              display: 'inline-block',
            }}
          >
            Design Principles
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)',
              color: 'var(--color-deep-charcoal)',
            }}
          >
            The Pillars of Our <em>Architectural Practice</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--bg-soft-cream)',
                  border: '1px solid var(--color-sand)',
                  padding: '36px 28px',
                  borderRadius: '4px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-warm-ivory)',
                    border: '1px solid var(--color-sand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-warm-brown)',
                    marginBottom: '20px',
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--color-deep-charcoal)', marginBottom: '12px' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: '#5C5245' }}>{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership & Studio Team */}
      <section className="studio-container" style={{ marginBottom: '100px' }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 64px' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-warm-brown)',
              marginBottom: '12px',
              display: 'inline-block',
            }}
          >
            Studio Leadership
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)',
              color: 'var(--color-deep-charcoal)',
            }}
          >
            Architects & Artisans <em>United by Craft</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
          {teamMembers.map((member) => (
            <div
              key={member.name}
              style={{
                backgroundColor: 'var(--bg-soft-cream)',
                border: '1px solid var(--color-sand)',
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-deep-charcoal)', marginBottom: '4px' }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-warm-brown)', fontWeight: 600, marginBottom: '6px' }}>
                  {member.role}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#766451', marginBottom: '14px' }}>
                  {member.credentials}
                </div>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#5C5245', flexGrow: 1 }}>
                  {member.bio}
                </p>
                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--color-sand)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-espresso)', fontWeight: 600 }}>
                  {member.focus}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="studio-container">
        <div
          style={{
            backgroundColor: 'var(--color-espresso)',
            borderRadius: '4px',
            padding: 'clamp(48px, 6vw, 72px) clamp(24px, 5vw, 64px)',
            color: 'var(--bg-warm-ivory)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '24px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#F6F1E9',
              maxWidth: '650px',
            }}
          >
            Ready to Begin Your <em>Architectural Sanctuary?</em>
          </h2>
          <p style={{ maxWidth: '540px', fontSize: '0.95rem', color: '#D8CABB', lineHeight: 1.6 }}>
            We welcome residential and boutique commercial commissions across Bhopal, Madhya Pradesh, and Central India.
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
            <span>Inquire About Your Project</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
