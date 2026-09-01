import React, { useEffect, useState } from 'react';
import { Link } from '../App.jsx';
import { projects } from '../data/projects.js';

const navItems = [['Work', '/#work'], ['Studio', '/#studio'], ['Services', '/#services'], ['Journal', '/#journal']];

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <Link href="/#top" className="brand" onClick={() => setOpen(false)}>jay digital studio<sup aria-hidden="true">◦</sup></Link>
        <nav className="desktop-nav" aria-label="Main">
          {navItems.map(([label, href]) => <Link key={label} href={href}>{label}{label === 'Work' && <sup>{projects.length}</sup>}</Link>)}
          <Link className="pill pill-dark" href="/#contact">Let&apos;s talk ↗</Link>
        </nav>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>{open ? 'Close' : 'Menu'}</button>
      </header>
      <nav id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-label="Mobile main">
        {navItems.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="pill pill-light" href="/#contact" onClick={() => setOpen(false)}>Let&apos;s talk ↗</Link>
      </nav>
    </>
  );
}
