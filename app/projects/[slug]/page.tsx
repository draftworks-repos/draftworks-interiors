import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Calendar, Maximize2, Layers } from 'lucide-react';
import { projects } from '@/data/projects';
import DayNightImage from '@/components/shared/DayNightImage/DayNightImage';
import { siteConfig } from '@/data/site';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found — DraftWorks Interiors',
    };
  }

  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} — Interior Architecture in ${project.location}`,
      description: project.subtitle,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 800,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: '100vh', paddingTop: '110px' }}>
      {/* Back Link */}
      <div className="studio-container" style={{ marginBottom: '24px' }}>
        <Link
          href="/projects"
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
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Project Hero Header */}
      <section className="studio-container" style={{ marginBottom: '48px' }}>
        <div style={{ maxWidth: '960px' }}>
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
            {project.category} · {project.type}
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: 'var(--color-deep-charcoal)',
              marginBottom: '20px',
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#5C5245',
              maxWidth: '780px',
            }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Project Metadata Ribbon */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '24px',
            marginTop: '36px',
            paddingTop: '24px',
            borderTop: '1px solid var(--color-sand)',
            borderBottom: '1px solid var(--color-sand)',
            paddingBottom: '24px',
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-warm-brown)', marginBottom: '4px' }}>
              Location
            </div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-deep-charcoal)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={14} />
              <span>{project.location}</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-warm-brown)', marginBottom: '4px' }}>
              Area
            </div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-deep-charcoal)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Maximize2 size={14} />
              <span>{project.area}</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-warm-brown)', marginBottom: '4px' }}>
              Completed
            </div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-deep-charcoal)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={14} />
              <span>{project.year}</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-warm-brown)', marginBottom: '4px' }}>
              Scope Budget
            </div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-espresso)' }}>
              {project.startingBudget}
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero Imagery: Day/Night pair or Full-Width Visual */}
      <section className="studio-container" style={{ marginBottom: '80px' }}>
        {project.hasDayNight && project.dayImage && project.nightImage ? (
          <div>
            <DayNightImage
              daySrc={project.dayImage}
              nightSrc={project.nightImage}
              alt={project.title}
              aspectRatio="16/9"
              priority={true}
            />
            <div style={{ textAlign: 'right', marginTop: '10px', fontSize: '0.78rem', color: 'var(--color-warm-brown)', letterSpacing: '0.04em' }}>
              Interactive: Click sun/moon icon above to toggle between natural daylight and evening circadian lighting.
            </div>
          </div>
        ) : (
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              style={{ objectFit: 'cover' }}
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </section>

      {/* Narrative & Concept Section */}
      <section className="studio-container" style={{ marginBottom: '90px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px' }}>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-warm-brown)',
                marginBottom: '12px',
                display: 'block',
              }}
            >
              Overview & Context
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
                lineHeight: 1.2,
                color: 'var(--color-deep-charcoal)',
                marginBottom: '20px',
              }}
            >
              The Vision Behind <em>{project.title}</em>
            </h2>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#5C5245', marginBottom: '20px' }}>
              {project.overview}
            </p>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#5C5245' }}>
              {project.concept}
            </p>
          </div>

          {/* Challenges & Solutions */}
          <div style={{ backgroundColor: 'var(--bg-soft-cream)', border: '1px solid var(--color-sand)', padding: '36px', borderRadius: '4px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                color: 'var(--color-deep-charcoal)',
                marginBottom: '18px',
              }}
            >
              Architectural Challenges & Solutions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-warm-brown)', fontWeight: 600, marginBottom: '6px' }}>
                  The Challenge
                </div>
                <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.88rem', color: '#5C5245', lineHeight: 1.6 }}>
                  {project.challenges.map((c, i) => (
                    <li key={i} style={{ marginBottom: '6px' }}>{c}</li>
                  ))}
                </ul>
              </div>
              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-sand)' }}>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-espresso)', fontWeight: 600, marginBottom: '6px' }}>
                  The Architectural Solution
                </div>
                <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.88rem', color: '#5C5245', lineHeight: 1.6 }}>
                  {project.solutions.map((s, i) => (
                    <li key={i} style={{ marginBottom: '6px' }}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Image Gallery */}
      <section className="studio-container" style={{ marginBottom: '100px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: 'var(--color-deep-charcoal)',
            marginBottom: '32px',
          }}
        >
          Architectural Gallery
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {project.gallery.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-soft-cream)',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid var(--color-sand)',
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div style={{ padding: '16px 20px', fontSize: '0.82rem', color: '#5C5245', lineHeight: 1.5 }}>
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Materials & Tactile Palette */}
      <section style={{ backgroundColor: 'var(--bg-soft-cream)', padding: '80px 0', borderTop: '1px solid var(--color-sand)', borderBottom: '1px solid var(--color-sand)', marginBottom: '90px' }}>
        <div className="studio-container">
          <div style={{ maxWidth: '680px', marginBottom: '40px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-warm-brown)',
                marginBottom: '12px',
                display: 'block',
              }}
            >
              Materiality & Finishes
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                color: 'var(--color-deep-charcoal)',
              }}
            >
              Curated Tactile Materials
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {project.materials.map((m, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-warm-ivory)',
                  border: '1px solid var(--color-sand)',
                  padding: '24px',
                  borderRadius: '4px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-warm-brown)', marginBottom: '8px' }}>
                  <Layers size={16} />
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-deep-charcoal)' }}>
                    {m.name}
                  </h3>
                </div>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#5C5245' }}>
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next / Previous Project Navigation */}
      <section className="studio-container" style={{ marginBottom: '100px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '32px',
            borderTop: '1px solid var(--color-sand)',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <Link
            href={`/projects/${prevProject.slug}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
              color: 'var(--color-deep-charcoal)',
            }}
          >
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-warm-brown)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ArrowLeft size={12} /> Previous Project
            </span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem' }}>{prevProject.title}</span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              textDecoration: 'none',
              color: 'var(--color-deep-charcoal)',
            }}
          >
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-warm-brown)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              Next Project <ArrowRight size={12} />
            </span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem' }}>{nextProject.title}</span>
          </Link>
        </div>
      </section>

      {/* Project CTA */}
      <section className="studio-container" style={{ paddingBottom: '100px' }}>
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
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#F6F1E9',
              maxWidth: '650px',
            }}
          >
            Inspired by <em>{project.title}?</em>
          </h2>
          <p style={{ maxWidth: '520px', fontSize: '0.95rem', color: '#D8CABB', lineHeight: 1.6 }}>
            Schedule an architectural consultation to discuss your floor plan, lighting concepts, and bespoke material palette.
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
            <span>Start a Project Inquiry</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
