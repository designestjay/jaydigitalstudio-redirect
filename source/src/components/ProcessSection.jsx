import React from 'react';
import SectionHeader from './SectionHeader.jsx';

const steps = [
  ['01', 'Understand the constraint before designing', 'lines'],
  ['02', 'Shape a system around the brief', 'grid'],
  ['03', 'Prototype in the real medium, early', 'rings'],
  ['04', 'Ship with the engineering team', 'blocks']
];

function ProcessGraphic({ type }) {
  return <div className={`process-graphic process-${type}`} aria-hidden="true">{Array.from({ length: type === 'grid' ? 9 : 4 }, (_, index) => <i key={index} />)}</div>;
}

export default function ProcessSection() {
  return (
    <section className="section process-section">
      <SectionHeader left="How we work" center="Small team, full attention" right="(04)" />
      <div className="section-intro"><h2>How the work moves.</h2><p>Design, prototyping and real-time development happen together, so nothing is lost in handover to the engineering team.</p></div>
      <div className="process-grid">{steps.map(([number, title, type]) => <article className="process-card reveal" data-reveal key={number}><small>{number}</small><ProcessGraphic type={type} /><h3>{title}</h3></article>)}</div>
    </section>
  );
}
