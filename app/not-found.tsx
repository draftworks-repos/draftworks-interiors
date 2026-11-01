import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-warm-ivory)',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '140px 24px 80px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-warm-brown)',
          marginBottom: '16px',
        }}
      >
        404 · Space Not Found
      </span>
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          lineHeight: 1.1,
          color: 'var(--color-deep-charcoal)',
          marginBottom: '20px',
        }}
      >
        An Uncharted <em>Atmosphere.</em>
      </h1>
      <p style={{ maxWidth: '480px', color: '#5C5245', fontSize: '1rem', lineHeight: 1.6, marginBottom: '32px' }}>
        The architectural page you are seeking does not exist or has been relocated to another gallery.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'var(--color-espresso)',
          color: 'var(--bg-warm-ivory)',
          padding: '14px 32px',
          borderRadius: '9999px',
          textDecoration: 'none',
          fontSize: '0.85rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      >
        <ArrowLeft size={16} />
        <span>Return to Studio Home</span>
      </Link>
    </div>
  );
}
