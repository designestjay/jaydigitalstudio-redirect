import React, { useState } from 'react';
import { faqs } from '../data/content.js';

export default function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq-section">
      <div className="section-intro"><h2>FAQ.</h2><p>Useful answers before we begin. If your question is not here, send a note.</p></div>
      <div className="faq-list">{faqs.map(([question, answer], index) => <article key={question}><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}><span>{question}</span><b>{open === index ? '−' : '+'}</b></button>{open === index && <p>{answer}</p>}</article>)}</div>
    </section>
  );
}
