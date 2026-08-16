import React from 'react';
import { services } from '../data/content.js';
import SectionHeader from './SectionHeader.jsx';

export default function ServicesSection() {
  return (
    <section id="services" className="section services-section">
      <SectionHeader left="What we do" center="Concept to shipped build" right="(05)" dark />
      <h2>Services.</h2>
      <div className="service-list">
        {services.map((service) => <article className="service-row reveal" data-reveal key={service.num}><small>{service.num}</small><h3>{service.title}</h3><p>{service.body}</p><div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}
      </div>
      <a className="pill pill-light" href="#contact">Get started ↗</a>
    </section>
  );
}
