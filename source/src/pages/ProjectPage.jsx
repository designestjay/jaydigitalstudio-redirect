import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from '../App.jsx';
import { projectNeighbours, projects } from '../data/projects.js';
import { scrollToTop } from '../lib/scroll.js';

function ResponsiveImage({ shot, eager = false, fit = 'cover' }) {
  return (
    <picture>
      <source media="(max-width:700px)" srcSet={shot.mobileSrc} />
      <img
        src={shot.src}
        alt={shot.alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
        data-fit={fit}
      />
    </picture>
  );
}

function ProjectVideo({ project, fill = false }) {
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

  return (
    <video
      ref={ref}
      className={`case-video${fill ? ' case-video-fill' : ''}`}
      loop
      muted
      playsInline
      preload="metadata"
      poster={project.thumb}
      disablePictureInPicture
    >
      <source src={project.mobileVideo || project.video} type="video/mp4" media="(max-width:1024px)" />
      <source src={project.video} type="video/mp4" />
    </video>
  );
}

function MediaFrame({ aspect, panel, children, className = '', ...props }) {
  const classes = ['case-media', className];
  if (aspect) classes.push('case-media-aspect');
  if (panel === 'black') classes.push('case-media-panel');
  if (!aspect && !panel) classes.push('case-media-natural');
  const style = aspect ? { '--media-ratio': aspect } : undefined;
  return <div className={classes.filter(Boolean).join(' ')} style={style} {...props}>{children}</div>;
}

function GalleryBlock({ block, project, eager }) {
  if (block.type === 'video') {
    return (
      <MediaFrame aspect={block.aspect} className="case-media-video reveal" data-reveal="">
        <ProjectVideo project={project} fill={Boolean(block.aspect)} />
      </MediaFrame>
    );
  }

  if (block.type === 'full') {
    return (
      <MediaFrame aspect={block.aspect} panel={block.panel} className="reveal" data-reveal="">
        <ResponsiveImage shot={block.shot} eager={eager} fit={block.fit || 'cover'} />
      </MediaFrame>
    );
  }

  if (block.type === 'grid') {
    const gapClass = block.gap === 'loose' ? 'case-grid-loose' : 'case-grid-tight';
    return (
      <div
        className={`case-grid case-grid-${block.cols} ${gapClass}`}
        style={block.aspect ? { '--grid-ratio': block.aspect } : undefined}
        data-aspect={block.aspect ? 'fixed' : 'natural'}
      >
        {block.items.map((item, index) => {
          if (item.type === 'video') {
            return (
              <MediaFrame key={`grid-video-${index}`} className="case-media-video case-media-fill reveal" data-reveal="">
                <ProjectVideo project={project} fill />
              </MediaFrame>
            );
          }
          return (
            <MediaFrame
              key={item.shot.src}
              aspect={block.aspect}
              panel={item.panel}
              className="reveal"
              data-reveal=""
            >
              <ResponsiveImage shot={item.shot} eager={eager && index === 0} fit={item.fit || 'cover'} />
            </MediaFrame>
          );
        })}
      </div>
    );
  }

  return null;
}

export default function ProjectPage({ project }) {
  const neighbours = projectNeighbours(project.slug);
  const projectNumber = String(projects.findIndex((item) => item.slug === project.slug) + 1).padStart(3, '0');
  const firstImageBlockIndex = project.layout.findIndex((block) => block.shot || block.items?.some((item) => item.shot));

  useLayoutEffect(() => {
    scrollToTop();
    const frame = window.requestAnimationFrame(scrollToTop);
    return () => window.cancelAnimationFrame(frame);
  }, [project.slug]);

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', project.intro);
  }, [project]);

  const galleryGapClass = project.galleryGap === 'loose' ? 'case-gallery-loose' : 'case-gallery-tight';

  return (
    <main className="case-page">
      <Link href="/#work" className="pill pill-outline">← All work</Link>
      <header className="case-header">
        <div>
          <small>({projectNumber}) — {project.year}</small>
          <h1>{project.title}.</h1>
          <p>{project.intro}</p>
          {project.link && project.linkLabel ? (
            <a className="pill pill-dark" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} ↗</a>
          ) : null}
        </div>
        <dl>
          <div><dt>Client</dt><dd>{project.client}</dd></div>
          <div><dt>Category</dt><dd>{project.category}</dd></div>
          <div><dt>Services</dt><dd>{project.services}</dd></div>
          <div><dt>Year</dt><dd>{project.year}</dd></div>
        </dl>
      </header>

      <div className={`case-gallery ${galleryGapClass}`}>
        {project.layout.map((block, index) => (
          <GalleryBlock
            key={`${project.slug}-block-${index}`}
            block={block}
            project={project}
            eager={index === firstImageBlockIndex}
          />
        ))}
      </div>

      <section className="case-more" aria-label="More works">
        <div className="case-more-header">
          <h2>More Works</h2>
          <Link href="/#work" className="case-more-all">See all works →</Link>
        </div>
        <div className="case-more-grid">
          {[neighbours.previous, neighbours.next].map((item) => (
            <Link key={item.slug} href={`/works/${item.slug}`} className="case-more-card">
              <div className="case-more-media">
                <img src={item.thumb} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="case-more-meta">
                <small>{item.category}</small>
                <strong>{item.title}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
