import React from 'react';

export default function SectionHeader({ left, center, right, dark = false }) {
  return <div className={`section-kicker ${dark ? 'section-kicker-dark' : ''}`}><span>{left}</span><span>{center}</span><span>{right}</span></div>;
}
