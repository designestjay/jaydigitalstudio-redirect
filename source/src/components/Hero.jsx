import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    video.muted = true;
    const play = () => video.play().catch(() => undefined);
    play();
    const retry = window.setTimeout(play, 120);
    return () => window.clearTimeout(retry);
  }, []);

  return (
    <section id="top" className="hero" data-speed="0.78" aria-label="Jay Digital Studio">
      <div className="hero-reel" aria-hidden="true">
        <video
          ref={videoRef}
          className={`hero-video ${ready ? 'is-ready' : ''}`}
          autoPlay loop muted playsInline preload="auto"
          onLoadedData={() => setReady(true)}
          onCanPlay={(event) => { setReady(true); event.currentTarget.play().catch(() => undefined); }}
        >
          <source src="/video/work-reel-jaydigitalstudio-mobile.mp4" type="video/mp4" media="(max-width:700px)" />
          <source src="/video/work-reel-jaydigitalstudio-desktop.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay"><h1>Interfaces, motion and real-time worlds. Fifteen years of interaction design for global brands, shipped with their engineering teams.</h1></div>
      <p className="hero-wordmark">jay<sup aria-hidden="true">◦</sup></p>
      <p className="hero-submark">digital studio</p>
      <div className="hero-services"><span>Art direction</span><span>UI/UX design</span><span>Motion &amp; real-time 3D</span><span>AR / VR experiences</span></div>
    </section>
  );
}
