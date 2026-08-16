import React, { useState } from 'react';

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    setSent(true);
    window.location.href = `mailto:Support@jaydigitalstudio.com?subject=${encodeURIComponent(`Project enquiry${name ? ` from ${name}` : ''}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  };
  return (
    <section id="contact" className="contact-section">
      <div><small>New projects</small><h2>Have something difficult to make?</h2><a href="mailto:Support@jaydigitalstudio.com">Support@jaydigitalstudio.com <span>↗</span></a></div>
      <form onSubmit={submit}><label>Name<input name="name" autoComplete="name" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label><label>Project<textarea name="message" rows="4" required /></label><button className="pill pill-light" type="submit">{sent ? 'Thanks — we’ll be in touch' : 'Send message ↗'}</button></form>
    </section>
  );
}
