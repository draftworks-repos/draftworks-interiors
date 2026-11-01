import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock, Calendar, User, Share2 } from 'lucide-react';
import { articles } from '@/data/journal';
import { siteConfig } from '@/data/site';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found — DraftWorks Interiors',
    };
  }

  return {
    title: `${article.title} — ${siteConfig.name}`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      images: [
        {
          url: article.heroImage,
          width: 1200,
          height: 800,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles
  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <article style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: '100vh', paddingTop: '110px', paddingBottom: '120px' }}>
      {/* Back Link */}
      <div className="studio-container" style={{ marginBottom: '24px' }}>
        <Link
          href="/journal"
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
          <span>Back to Journal</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="studio-container" style={{ marginBottom: '48px', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto' }}>
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
          {article.category} · Architectural Essay
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.6rem, 5vw, 4.4rem)',
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            color: 'var(--color-deep-charcoal)',
            marginBottom: '20px',
          }}
        >
          {article.title}
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)',
            lineHeight: 1.6,
            color: '#5C5245',
            marginBottom: '32px',
          }}
        >
          {article.subtitle}
        </p>

        {/* Metadata ribbon */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '24px',
            paddingTop: '20px',
            borderTop: '1px solid var(--color-sand)',
            borderBottom: '1px solid var(--color-sand)',
            paddingBottom: '20px',
            fontSize: '0.85rem',
            color: 'var(--color-warm-brown)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <User size={14} />
            <span style={{ fontWeight: 600, color: 'var(--color-deep-charcoal)' }}>{article.author.name}</span>
            <span style={{ fontSize: '0.75rem' }}>({article.author.role})</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={14} />
            <span>{article.publishedDate}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={14} />
            <span>{article.readingTime}</span>
          </div>
        </div>
      </header>

      {/* Hero Visual */}
      <div className="studio-container" style={{ marginBottom: '64px', maxWidth: '1080px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden' }}>
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            priority
            style={{ objectFit: 'cover' }}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="studio-container" style={{ maxWidth: '780px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {article.content.map((section, idx) => (
            <section key={idx}>
              {section.heading && (
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.75rem, 2.6vw, 2.3rem)',
                    color: 'var(--color-deep-charcoal)',
                    marginBottom: '16px',
                    lineHeight: 1.25,
                  }}
                >
                  {section.heading}
                </h2>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {section.body.map((p, pIdx) => (
                  <p key={pIdx} style={{ fontSize: '1.02rem', lineHeight: 1.8, color: '#40382E' }}>
                    {p}
                  </p>
                ))}
              </div>

              {section.quote && (
                <blockquote
                  style={{
                    margin: '36px 0',
                    padding: '24px 32px',
                    backgroundColor: 'var(--bg-soft-cream)',
                    borderLeft: '2px solid var(--color-warm-brown)',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                    color: 'var(--color-espresso)',
                  }}
                >
                  &ldquo;{section.quote}&rdquo;
                </blockquote>
              )}

              {section.callout && (
                <div
                  style={{
                    margin: '28px 0',
                    padding: '20px 24px',
                    backgroundColor: 'var(--bg-soft-cream)',
                    border: '1px solid var(--color-sand)',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    color: 'var(--color-deep-charcoal)',
                    fontWeight: 500,
                  }}
                >
                  {section.callout}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Tags */}
        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--color-sand)', display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-warm-brown)', fontWeight: 600 }}>
            Keywords:
          </span>
          {article.tags.map((tag) => (
            <span key={tag} style={{ fontSize: '0.85rem', color: '#5C5245' }}>
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Articles */}
      <section style={{ backgroundColor: 'var(--bg-soft-cream)', padding: '80px 0', borderTop: '1px solid var(--color-sand)' }}>
        <div className="studio-container">
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              color: 'var(--color-deep-charcoal)',
              marginBottom: '36px',
              textAlign: 'center',
            }}
          >
            Related Architectural Essays
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {related.map((rel) => (
              <div
                key={rel.slug}
                style={{
                  backgroundColor: 'var(--bg-warm-ivory)',
                  border: '1px solid var(--color-sand)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10' }}>
                  <Image
                    src={rel.heroImage}
                    alt={rel.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-warm-brown)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                      {rel.category}
                    </span>
                    <Link
                      href={`/journal/${rel.slug}`}
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.35rem',
                        color: 'var(--color-deep-charcoal)',
                        textDecoration: 'none',
                        lineHeight: 1.25,
                        display: 'block',
                        marginBottom: '10px',
                      }}
                    >
                      {rel.title}
                    </Link>
                    <p style={{ fontSize: '0.85rem', color: '#5C5245', lineHeight: 1.6 }}>{rel.excerpt}</p>
                  </div>
                  <Link
                    href={`/journal/${rel.slug}`}
                    style={{
                      marginTop: '16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.78rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-espresso)',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <span>Read Essay</span>
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
