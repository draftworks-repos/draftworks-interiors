'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { validateInquiryForm, InquiryFormData, ValidationErrors } from '@/lib/utils/format';

const projectTypeOptions = [
  'Residential Villa / Independent Bungalow',
  'High-Rise Penthouse / Luxury Apartment',
  'Boutique Commercial / Partner Office',
  'Heritage Renovation & Remodeling',
  'Circadian Architectural Lighting Design',
  'Space Planning & Master Layout Consultation',
];

const budgetOptions = [
  '₹15,00,000 – ₹30,00,000',
  '₹30,00,000 – ₹60,00,000',
  '₹60,00,000 – ₹1,20,00,000',
  'Above ₹1.2 Crore (Comprehensive Estate)',
  'Indicative Design Consultancy Only (₹1.5L – ₹7.5L)',
];

const timelineOptions = [
  'Immediately (Within 30 Days)',
  'In 1 – 3 Months',
  'In 3 – 6 Months',
  'Planning Phase / Next Year',
];

export default function ContactPage() {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Residential Villa / Independent Bungalow',
    propertyLocation: 'Bhopal, MP',
    approxArea: '3,500 sq.ft',
    estimatedBudget: '₹30,00,000 – ₹60,00,000',
    expectedStartDate: 'In 1 – 3 Months',
    message: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

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
            Start a Conversation
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
            Let’s Shape Your <em>Architectural Sanctuary.</em>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
              lineHeight: 1.65,
              color: '#5C5245',
            }}
          >
            We accept a limited number of commissions each season to ensure personal principal involvement.
            Tell us about your property, timeline, and spatial intentions below.
          </p>
        </div>

        {/* 2-Column Layout: Details + Inquiry Form */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'start' }}>
          {/* Studio Details & Address */}
          <div>
            <div style={{ backgroundColor: 'var(--bg-soft-cream)', border: '1px solid var(--color-sand)', borderRadius: '4px', padding: '36px', marginBottom: '32px' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-deep-charcoal)', marginBottom: '24px' }}>
                Atelier Location & Direct Channels
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <MapPin size={20} color="var(--color-warm-brown)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-warm-brown)', fontWeight: 600, marginBottom: '4px' }}>
                      Design Studio
                    </div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--color-deep-charcoal)', lineHeight: 1.5 }}>
                      {siteConfig.location.street}
                      <br />
                      {siteConfig.location.city}, {siteConfig.location.state} {siteConfig.location.postalCode}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <Phone size={20} color="var(--color-warm-brown)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-warm-brown)', fontWeight: 600, marginBottom: '4px' }}>
                      Telephone & WhatsApp
                    </div>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      style={{ fontSize: '0.95rem', color: 'var(--color-deep-charcoal)', textDecoration: 'none', fontWeight: 600 }}
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <Mail size={20} color="var(--color-warm-brown)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-warm-brown)', fontWeight: 600, marginBottom: '4px' }}>
                      Email Inquiries
                    </div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      style={{ fontSize: '0.95rem', color: 'var(--color-deep-charcoal)', textDecoration: 'none' }}
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <Clock size={20} color="var(--color-warm-brown)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-warm-brown)', fontWeight: 600, marginBottom: '4px' }}>
                      Consultation Hours
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#5C5245' }}>
                      {siteConfig.operatingHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Note about Indian currency & regional execution */}
            <div style={{ padding: '24px', border: '1px solid var(--color-sand)', borderRadius: '4px', fontSize: '0.85rem', color: '#5C5245', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--color-deep-charcoal)', display: 'block', marginBottom: '6px' }}>
                Note on Central India & Pan-India Commissions:
              </strong>
              While our core design laboratory is in Bhopal, our senior teams manage on-site execution across Indore, Jabalpur, Gwalior, Raipur, and Mumbai with scheduled milestone reviews.
            </div>
          </div>

          {/* Form / Success Card */}
          <div style={{ backgroundColor: 'var(--bg-soft-cream)', border: '1px solid var(--color-sand)', borderRadius: '4px', padding: 'clamp(28px, 4vw, 48px)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <CheckCircle2 size={56} color="#777B65" />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-espresso)' }}>
                  Inquiry Received
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#5C5245', maxWidth: '420px', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.fullName}</strong>. Principal Architect Devansh Rathore and our senior team will review your project parameters and respond within 24–48 business hours to schedule an initial discovery consultation.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      projectType: projectTypeOptions[0],
                      propertyLocation: '',
                      approxArea: '',
                      estimatedBudget: budgetOptions[1],
                      expectedStartDate: timelineOptions[1],
                      message: '',
                    });
                  }}
                  style={{
                    marginTop: '16px',
                    backgroundColor: 'var(--color-espresso)',
                    color: 'var(--bg-warm-ivory)',
                    border: 'none',
                    padding: '12px 28px',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--color-deep-charcoal)', marginBottom: '4px' }}>
                  Project Questionnaire
                </h2>
                <p style={{ fontSize: '0.85rem', color: '#5C5245', marginBottom: '8px' }}>
                  Please complete the details below so we can prepare tailored preliminary materials.
                </p>

                {/* Name */}
                <div>
                  <label htmlFor="fullName" style={{ display: 'block', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-espresso)', fontWeight: 600, marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Vikramaditya Sharma"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: 'var(--bg-warm-ivory)',
                      border: errors.fullName ? '1px solid #D9383A' : '1px solid var(--color-sand)',
                      borderRadius: '4px',
                      outline: 'none',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-sans)',
                    }}
                  />
                  {errors.fullName && <div style={{ fontSize: '0.75rem', color: '#D9383A', marginTop: '4px' }}>{errors.fullName}</div>}
                </div>

                {/* Email and Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-espresso)', fontWeight: 600, marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vikram@example.com"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: 'var(--bg-warm-ivory)',
                        border: errors.email ? '1px solid #D9383A' : '1px solid var(--color-sand)',
                        borderRadius: '4px',
                        outline: 'none',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                    {errors.email && <div style={{ fontSize: '0.75rem', color: '#D9383A', marginTop: '4px' }}>{errors.email}</div>}
                  </div>

                  <div>
                    <label htmlFor="phone" style={{ display: 'block', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-espresso)', fontWeight: 600, marginBottom: '6px' }}>
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: 'var(--bg-warm-ivory)',
                        border: errors.phone ? '1px solid #D9383A' : '1px solid var(--color-sand)',
                        borderRadius: '4px',
                        outline: 'none',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                    {errors.phone && <div style={{ fontSize: '0.75rem', color: '#D9383A', marginTop: '4px' }}>{errors.phone}</div>}
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" style={{ display: 'block', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-espresso)', fontWeight: 600, marginBottom: '6px' }}>
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: 'var(--bg-warm-ivory)',
                      border: '1px solid var(--color-sand)',
                      borderRadius: '4px',
                      outline: 'none',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {projectTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Location & Area */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label htmlFor="propertyLocation" style={{ display: 'block', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-espresso)', fontWeight: 600, marginBottom: '6px' }}>
                      Property City / Location *
                    </label>
                    <input
                      type="text"
                      id="propertyLocation"
                      name="propertyLocation"
                      required
                      value={formData.propertyLocation}
                      onChange={handleChange}
                      placeholder="e.g. Arera Colony, Bhopal"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: 'var(--bg-warm-ivory)',
                        border: errors.propertyLocation ? '1px solid #D9383A' : '1px solid var(--color-sand)',
                        borderRadius: '4px',
                        outline: 'none',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                    {errors.propertyLocation && <div style={{ fontSize: '0.75rem', color: '#D9383A', marginTop: '4px' }}>{errors.propertyLocation}</div>}
                  </div>

                  <div>
                    <label htmlFor="approxArea" style={{ display: 'block', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-espresso)', fontWeight: 600, marginBottom: '6px' }}>
                      Approx. Area (sq.ft)
                    </label>
                    <input
                      type="text"
                      id="approxArea"
                      name="approxArea"
                      value={formData.approxArea}
                      onChange={handleChange}
                      placeholder="e.g. 4,500 sq.ft"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        backgroundColor: 'var(--bg-warm-ivory)',
                        border: '1px solid var(--color-sand)',
                        borderRadius: '4px',
                        outline: 'none',
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>
                </div>

                {/* Budget Range (INR) */}
                <div>
                  <label htmlFor="estimatedBudget" style={{ display: 'block', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-espresso)', fontWeight: 600, marginBottom: '6px' }}>
                    Estimated Scope Budget (INR ₹) *
                  </label>
                  <select
                    id="estimatedBudget"
                    name="estimatedBudget"
                    value={formData.estimatedBudget}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: 'var(--bg-warm-ivory)',
                      border: '1px solid var(--color-sand)',
                      borderRadius: '4px',
                      outline: 'none',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                {/* Expected Start Date */}
                <div>
                  <label htmlFor="expectedStartDate" style={{ display: 'block', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-espresso)', fontWeight: 600, marginBottom: '6px' }}>
                    Target Start Timeline
                  </label>
                  <select
                    id="expectedStartDate"
                    name="expectedStartDate"
                    value={formData.expectedStartDate}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: 'var(--bg-warm-ivory)',
                      border: '1px solid var(--color-sand)',
                      borderRadius: '4px',
                      outline: 'none',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {timelineOptions.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-espresso)', fontWeight: 600, marginBottom: '6px' }}>
                    Spatial Vision & Key Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the home or space, your family's routines, aesthetic preferences, or specific architectural aspirations..."
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: 'var(--bg-warm-ivory)',
                      border: errors.message ? '1px solid #D9383A' : '1px solid var(--color-sand)',
                      borderRadius: '4px',
                      outline: 'none',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-sans)',
                      resize: 'vertical',
                    }}
                  />
                  {errors.message && <div style={{ fontSize: '0.75rem', color: '#D9383A', marginTop: '4px' }}>{errors.message}</div>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    backgroundColor: 'var(--color-espresso)',
                    color: 'var(--bg-warm-ivory)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    padding: '16px 32px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    opacity: submitting ? 0.7 : 1,
                    transition: 'all 0.2s ease',
                    marginTop: '8px',
                  }}
                >
                  <span>{submitting ? 'Submitting Details...' : 'Submit Project Inquiry'}</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
