import React from 'react';
import { Link } from '../App.jsx';
import { projects } from '../data/projects.js';
import SectionHeader from './SectionHeader.jsx';

export default function WorkSection() {
  return (
    <section id="work" className="section work-section">
      <SectionHeader left="Selected work" center="(2020—25©)" right="(11)" />
      <div className="section-intro"><h2>Work.</h2><p>Interactive media, automotive HMI, augmented reality and product design — delivered with global brands and their engineering teams.</p></div>
      <div className="work-grid">
        {projects.map((project, index) => (
          <Link href={`/works/${project.slug}`} className="work-card reveal" data-reveal key={project.slug}>
            <div className="work-card-media"><img src={project.thumb} alt={project.title} loading="lazy" decoding="async" /></div>
            <div className="work-card-meta"><span>{String(index + 1).padStart(2, '0')}</span><strong>{project.title}</strong><em>{project.category}</em></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
