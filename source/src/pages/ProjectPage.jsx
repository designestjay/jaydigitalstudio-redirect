import React, { useEffect, useMemo, useRef } from 'react';
import { Link } from '../App.jsx';
import { projectNeighbours, projects } from '../data/projects.js';

function buildBlocks(project) {
  const blocks = [];
  const shots = [...project.gallery];
  let index = 0;
  while (index < shots.length) {
    const first = shots[index];
    if (first.ratio >= 1.75) {
      blocks.push({ type: 'wide', shots: [first] });
      index += 1;
      continue;
    }
    const second = shots[index + 1];
    const sameOrientation = second && ((first.ratio < 1 && second.ratio < 1) || (first.ratio >= 1 && second.ratio >= 1 && second.ratio < 1.75));
    if (sameOrientation) {
      blocks.push({ type: 'pair', shots: [first, second], ratio: first.ratio < 1 ? '3 / 4' : '3 / 2' });
      index += 2;
    } else {
      blocks.push({ type: 'wide', shots: [first] });
      index += 1;
    }
  }
  if (project.video) blocks.splice(Math.min(2, blocks.length), 0, { type: 'video' });
  return blocks;
}

function ResponsiveImage({ shot, eager = false }) {
  return <picture><source media="(max-width:700px)" srcSet={shot.mobileSrc} /><img src={shot.src} alt={shot.alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" /></picture>;
}

function ProjectVideo({ project }) {
  const ref = useRef(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;
    const start = () => {
      if (video.preload !== 'auto') { video.preload = 'auto'; video.load(); }
      video.play().catch(() => undefined);
    };
    if (!('IntersectionObserver' in window)) { start(); return undefined; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start(); else video.pause();
    }, { rootMargin: '1200px 0px', threshold: 0.01 });
    observer.observe(video);
    return () => observer.disconnect();
  }, [project.slug]);

  return <video ref={ref} className="case-video" loop muted playsInline preload="metadata" poster={project.thumb} disablePictureInPicture><source src={project.mobileVideo || project.video} type="video/mp4" media="(max-width:1024px)" /><source src={project.video} type="video/mp4" /></video>;
}

export default function ProjectPage({ project }) {
  const blocks = useMemo(() => buildBlocks(project), [project]);
  const neighbours = projectNeighbours(project.slug);
  const projectNumber = String(projects.findIndex((item) => item.slug === project.slug) + 1).padStart(3, '0');

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', project.intro);
  }, [project]);

  let imageIndex = 0;
  return (
    <main className="case-page">
      <Link href="/#work" className="pill pill-outline">← All work</Link>
      <header className="case-header">
        <div><small>({projectNumber}) — {project.year}</small><h1>{project.title}.</h1><p>{project.intro}</p><a className="pill pill-dark" href={project.link} target="_blank" rel="noreferrer">View project ↗</a></div>
        <dl><div><dt>Client</dt><dd>{project.client}</dd></div><div><dt>Category</dt><dd>{project.category}</dd></div><div><dt>Services</dt><dd>{project.services}</dd></div><div><dt>Year</dt><dd>{project.year}</dd></div></dl>
      </header>
      <div className="case-gallery">
        {blocks.map((block, blockIndex) => {
          if (block.type === 'video') return <div className="case-media case-media-video reveal" data-reveal key={`video-${project.slug}`}><ProjectVideo project={project} /></div>;
          if (block.type === 'wide') {
            const eager = imageIndex++ === 0;
            return <div className="case-media reveal" data-reveal key={block.shots[0].src}><ResponsiveImage shot={block.shots[0]} eager={eager} /></div>;
          }
          imageIndex += block.shots.length;
          return <div className="case-pair" style={{ '--pair-ratio': block.ratio }} key={`pair-${blockIndex}`}>{block.shots.map((shot) => <div className="case-media reveal" data-reveal key={shot.src}><ResponsiveImage shot={shot} /></div>)}</div>;
        })}
      </div>
      <nav className="case-navigation" aria-label="Project navigation"><Link href={`/works/${neighbours.previous.slug}`}><small>Previous</small><strong>← {neighbours.previous.title}</strong></Link><Link href={`/works/${neighbours.next.slug}`}><small>Next</small><strong>{neighbours.next.title} →</strong></Link></nav>
    </main>
  );
}
