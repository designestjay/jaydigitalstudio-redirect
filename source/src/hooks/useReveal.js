import { useEffect } from 'react';

export function useReveal(routeKey) {
  useEffect(() => {
    const elements = [...document.querySelectorAll('[data-reveal]')];
    const staticMotion = window.matchMedia('(max-width: 820px), (prefers-reduced-motion: reduce)').matches;
    if (staticMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    elements.forEach((element) => observer.observe(element));
    const fallback = window.setTimeout(() => elements.forEach((element) => element.classList.add('is-visible')), 1800);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [routeKey]);
}
