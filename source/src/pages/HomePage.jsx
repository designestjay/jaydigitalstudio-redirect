import React, { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import ClientMarquee from '../components/ClientMarquee.jsx';
import WorkSection from '../components/WorkSection.jsx';
import StudioSection from '../components/StudioSection.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import ProcessSection from '../components/ProcessSection.jsx';
import QuoteSection from '../components/QuoteSection.jsx';
import JournalSection from '../components/JournalSection.jsx';
import FAQSection from '../components/FAQSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import { scrollToAnchor } from '../lib/scroll.js';

export default function HomePage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    requestAnimationFrame(() => scrollToAnchor(id, false));
  }, []);

  return <main><Hero /><ClientMarquee /><WorkSection /><StudioSection /><ServicesSection /><ProcessSection /><QuoteSection /><JournalSection /><FAQSection /><ContactSection /></main>;
}
