import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    video.muted = true;
    const play = () => video.play().catch(() => undefined);
    play();
    const retry = window.setTimeout(play, 120);
    return () => window.clearTimeout(retry);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(max-width: 820px), (prefers-reduced-motion: reduce)').matches) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
      hero.style.setProperty('--hero-shift', `${progress * -18}%`);
      hero.style.setProperty('--reel-shift', `${progress * 5}%`);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    video.play().catch(() => undefined);
  };

  return (
    <section id="top" ref={heroRef} className="hero" aria-label="Jay Digital Studio">
      <video
        ref={videoRef}
        className={`hero-video ${ready ? 'is-ready' : ''}`}
        autoPlay loop muted playsInline preload="auto"
        onLoadedData={() => setReady(true)}
        onCanPlay={(event) => { setReady(true); event.currentTarget.play().catch(() => undefined); }}
        aria-hidden="true"
      >
        <source src="/video/work-reel-mobile.mp4" type="video/mp4" media="(max-width:700px)" />
        <source src="/video/work-reel-2024.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"><h1>Interfaces, motion and real-time worlds. Fifteen years of interaction design for global brands, shipped with their engineering teams.</h1></div>
      <p className="hero-wordmark">jay<sup>®</sup></p>
      <p className="hero-submark">digital studio</p>
      <div className="hero-services"><span>Art direction</span><span>UI/UX design</span><span>Motion &amp; real-time 3D</span><span>AR / VR experiences</span></div>
      <button className="hero-sound" type="button" onClick={toggleSound}>{muted ? 'Sound on' : 'Sound off'}</button>
    </section>
  );
}
