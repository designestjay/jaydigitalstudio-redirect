import React from 'react';
import { Link } from '../App.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/#top" className="footer-brand">jay digital<br />studio<sup aria-hidden="true">◦</sup></Link>
      <div className="footer-column"><strong>Navigation</strong><Link href="/#work">Work</Link><Link href="/#studio">Studio</Link><Link href="/#services">Services</Link><Link href="/#journal">Journal</Link></div>
      <div className="footer-column"><strong>Social</strong><a href="https://www.linkedin.com/in/designjay/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.behance.net/iamjaydesign" target="_blank" rel="noreferrer">Behance</a><a href="https://dribbble.com/Jay-Design" target="_blank" rel="noreferrer">Dribbble</a></div>
      <div className="footer-column"><strong>Contact</strong><a href="mailto:Support@jaydigitalstudio.com">Support@jaydigitalstudio.com</a><span>Göteborg, Sweden</span></div>
      <small>© 2026 Jay Digital Studio AB — Org.nr 559576-7772 · jaydigitalstudio.com</small>
    </footer>
  );
}
