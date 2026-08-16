import React from 'react';
import { clients } from '../data/content.js';

function Row() {
  return <div className="client-row">{clients.map((client) => <React.Fragment key={client}><span>{client}</span><i /></React.Fragment>)}</div>;
}

export default function ClientMarquee() {
  return <div className="client-marquee"><div className="client-track"><Row /><Row /></div></div>;
}
