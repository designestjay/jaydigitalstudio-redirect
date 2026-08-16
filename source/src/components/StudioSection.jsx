import React from 'react';
import SectionHeader from './SectionHeader.jsx';

export default function StudioSection() {
  return (
    <section id="studio" className="section studio-section">
      <SectionHeader left="The studio" center="Göteborg, Sweden" right="(01)" />
      <div className="section-intro studio-intro"><h2>A small senior team, close to the work.</h2><div><p>Jay Digital Studio AB works as an extension of in-house teams at OEMs, agencies and product companies — one team from concept through to the build, with specialists brought in when a project needs them.</p><a className="pill pill-dark" href="#contact">Start a project ↗</a></div></div>
      <div className="studio-grid">
        <article className="studio-statement reveal" data-reveal>Design that survives contact with engineering, hardware and deadlines. No theatre, no inflated promises.</article>
        <article className="metric-card reveal" data-reveal><strong>50<sup>+</sup></strong><div><span>Projects launched</span><small>01</small></div></article>
        <article className="metric-card metric-card-dark reveal" data-reveal><strong>15<sup>+</sup></strong><div><span>Years of experience</span><small>02</small></div></article>
        <article className="metric-card reveal" data-reveal><strong>11</strong><div><span>Global brands served</span><small>03</small></div></article>
        <article className="availability-card reveal" data-reveal><small>04</small><div><p>Project or retainer. Typical start two to three weeks out.</p><div className="chip-row"><a href="https://www.linkedin.com/in/designjay/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.behance.net/iamjaydesign" target="_blank" rel="noreferrer">Behance ↗</a></div></div></article>
      </div>
    </section>
  );
}
