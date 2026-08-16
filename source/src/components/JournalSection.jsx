import React from 'react';
import { posts } from '../data/content.js';
import SectionHeader from './SectionHeader.jsx';

export default function JournalSection() {
  return (
    <section id="journal" className="section journal-section">
      <SectionHeader left="Journal" center="Notes & meetups" right="(03)" />
      <div className="section-intro"><h2>Journal.</h2><p>Writing from the studio, and recaps from the design meetups we host in Göteborg.</p></div>
      <div className="journal-grid">{posts.map((post) => <a className="journal-card reveal" data-reveal href={post.link} target="_blank" rel="noreferrer" key={post.title}><picture><source media="(max-width:700px)" srcSet={post.mobileImage} /><img src={post.image} alt={post.title} loading="lazy" decoding="async" /></picture><small>{post.date}</small><h3>{post.title}</h3><p>{post.summary}</p><span>Read article ↗</span></a>)}</div>
    </section>
  );
}
