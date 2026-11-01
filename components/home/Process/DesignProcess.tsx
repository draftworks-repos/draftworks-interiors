'use client';

import React from 'react';
import { Eye, PenTool, Layers, CheckCircle2 } from 'lucide-react';
import styles from './DesignProcess.module.css';

const steps = [
  {
    number: 'Step 01',
    icon: Eye,
    title: 'Consultation & Vision',
    desc: 'We understand your space, lifestyle routines, functional needs, and design aspirations to create the right aesthetic foundation.',
  },
  {
    number: 'Step 02',
    icon: PenTool,
    title: 'Design & Development',
    desc: 'We shape the concept through precision layouts, 3D spatial renders, color studies, and thoughtfully considered joinery details.',
  },
  {
    number: 'Step 03',
    icon: Layers,
    title: 'Material Selection',
    desc: 'We curate tactile physical samples—authentic travertine, French lime plasters, oiled oak, and unlacquered living brass.',
  },
  {
    number: 'Step 04',
    icon: CheckCircle2,
    title: 'Execution & Delivery',
    desc: 'We bring the vision to life with precision shop drawings, artisan craftsmanship, lighting commissioning, and white-glove styling.',
  },
];

export default function DesignProcess() {
  return (
    <section className={styles.section} aria-label="Our Design Process">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.kicker}>How It Works</span>
          <h2 className={styles.heading}>
            Building Beautiful Interiors <em>Through Intentional Process</em>
          </h2>
        </div>

        <div className={styles.processGrid}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className={styles.stepCard}>
                <span className={styles.stepNumber}>{step.number}</span>
                <div className={styles.emblemWrapper}>
                  <Icon size={22} strokeWidth={1.4} />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
