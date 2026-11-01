'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowUpRight, HelpCircle } from 'lucide-react';
import { faqs } from '@/data/faqs';

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-warm-ivory)', minHeight: '100vh', paddingTop: '130px', paddingBottom: '120px' }}>
      <div className="studio-container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
            Client Inquiries & Clarifications
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--color-deep-charcoal)',
              marginBottom: '20px',
            }}
          >
            Frequently Asked <em>Questions</em>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
              lineHeight: 1.65,
              color: '#5C5245',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            Everything you need to know about our fee structures, working methodology, material sourcing, and site supervision in Bhopal and across Central India.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '80px' }}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                style={{
                  backgroundColor: isOpen ? '#FFFFFF' : 'var(--bg-soft-cream)',
                  border: isOpen ? '1px solid var(--color-espresso)' : '1px solid var(--color-sand)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  transition: 'background-color 0.2s ease, border-color 0.2s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <HelpCircle size={18} color="var(--color-warm-brown)" style={{ flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.3rem',
                        color: 'var(--color-deep-charcoal)',
                        fontWeight: 400,
                      }}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    color="var(--color-warm-brown)"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    style={{
                      padding: '0 28px 24px 58px',
                      fontSize: '0.92rem',
                      lineHeight: 1.7,
                      color: '#5C5245',
                      borderTop: '1px solid rgba(216, 202, 187, 0.4)',
                      paddingTop: '16px',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div
          style={{
            backgroundColor: 'var(--color-espresso)',
            borderRadius: '4px',
            padding: 'clamp(40px, 5vw, 60px) clamp(24px, 4vw, 48px)',
            color: 'var(--bg-warm-ivory)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#F6F1E9' }}>
            Have a Specific Architectural Question?
          </h2>
          <p style={{ maxWidth: '480px', fontSize: '0.9rem', color: '#D8CABB', lineHeight: 1.6 }}>
            Our team is happy to review your property layout and discuss design feasibility in detail.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--bg-warm-ivory)',
              color: 'var(--color-espresso)',
              padding: '12px 28px',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.82rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginTop: '8px',
            }}
          >
            <span>Ask Our Design Team</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
