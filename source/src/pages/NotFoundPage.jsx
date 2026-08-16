import React from 'react';
import { Link } from '../App.jsx';

export default function NotFoundPage() {
  return <main className="not-found"><small>404</small><h1>Page not found.</h1><Link className="pill pill-dark" href="/">Back to the studio</Link></main>;
}
