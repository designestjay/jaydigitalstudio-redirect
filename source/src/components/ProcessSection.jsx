import React, { useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader.jsx';

const steps = [
  {
    number: '01',
    title: 'Understand the constraint before designing',
    type: 'lines',
    Graphic: LinesGraphic
  },
  {
    number: '02',
    title: 'Shape a system around the brief',
    type: 'grid',
    Graphic: GridGraphic
  },
  {
    number: '03',
    title: 'Prototype in the real medium, early',
    type: 'rings',
    Graphic: RingsGraphic
  },
  {
    number: '04',
    title: 'Ship with the engineering team',
    type: 'blocks',
    Graphic: BlocksGraphic
  }
];

function LinesGraphic() {
  const pathProps = { pathLength: 100, strokeDasharray: 100, strokeDashoffset: 100 };
  return (
    <svg className="process-svg" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <line className="process-stroke process-stroke-muted is-path" {...pathProps} x1="18" y1="34" x2="102" y2="34" />
      <line className="process-stroke process-stroke-muted process-stroke-short is-path" {...pathProps} x1="18" y1="52" x2="86" y2="52" />
      <line className="process-stroke process-stroke-accent process-line-accent is-path" {...pathProps} x1="18" y1="70" x2="62" y2="70" />
      <line className="process-stroke process-stroke-muted process-stroke-mid is-path" {...pathProps} x1="18" y1="88" x2="94" y2="88" />
    </svg>
  );
}

function GridGraphic() {
  const cells = [
    [22, 22], [48, 22], [74, 22],
    [22, 48], [48, 48], [74, 48],
    [22, 74], [48, 74], [74, 74]
  ];
  return (
    <svg className="process-svg" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {cells.map(([x, y], index) => (
        <rect
          key={index}
          className={`process-cell${index === 4 ? ' process-cell-accent' : ''}`}
          x={x}
          y={y}
          width="24"
          height="24"
          rx="4"
        />
      ))}
    </svg>
  );
}

function RingsGraphic() {
  const pathProps = { pathLength: 100, strokeDasharray: 100, strokeDashoffset: 100 };
  return (
    <svg className="process-svg" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <g transform="translate(60 60)">
        <g className="process-rings-spin">
          <circle className="process-stroke process-stroke-muted process-ring process-ring-outer is-path" {...pathProps} r="40" cx="0" cy="0" />
          <circle className="process-stroke process-stroke-muted process-ring process-ring-mid is-path" {...pathProps} r="26" cx="0" cy="0" />
          <circle className="process-stroke process-stroke-accent process-ring process-ring-inner is-path" {...pathProps} r="14" cx="0" cy="0" />
          <circle className="process-ring-core" r="4" cx="0" cy="0" />
        </g>
      </g>
    </svg>
  );
}

function BlocksGraphic() {
  return (
    <svg className="process-svg" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <rect className="process-block" x="20" y="20" width="36" height="36" rx="8" />
      <rect className="process-block" x="64" y="20" width="36" height="36" rx="8" />
      <rect className="process-block process-block-accent" x="20" y="64" width="36" height="36" rx="8" />
      <rect className="process-block" x="64" y="64" width="36" height="36" rx="8" />
    </svg>
  );
}

function useProcessDraw(cardRefs) {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cards = cardRefs.current.filter(Boolean);

    if (reduceMotion || !('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('is-drawn'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-drawn');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.35 });

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [cardRefs]);
}

export default function ProcessSection() {
  const cardRefs = useRef([]);
  useProcessDraw(cardRefs);

  return (
    <section className="section process-section">
      <SectionHeader left="How we work" center="Small team, full attention" right="(04)" />
      <div className="section-intro">
        <h2>How the work moves.</h2>
        <p>Design, prototyping and real-time development happen together, so nothing is lost in handover to the engineering team.</p>
      </div>
      <div className="process-grid">
        {steps.map(({ number, title, type, Graphic }, index) => (
          <article
            className="process-card reveal"
            data-reveal
            data-process={type}
            key={number}
            ref={(node) => { cardRefs.current[index] = node; }}
          >
            <small>{number}</small>
            <div className="process-graphic" aria-hidden="true">
              <Graphic />
            </div>
            <h3>{title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
