import { useEffect } from 'react';

export function useReveal(routeKey) {
  useEffect(() => {
    const staticMotion = window.matchMedia('(max-width: 820px), (prefers-reduced-motion: reduce)').matches;
    const canObserveVisibility = !staticMotion && 'IntersectionObserver' in window;
    const visibilityObserver = canObserveVisibility ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        visibilityObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }) : null;

    const register = (root) => {
      const elements = [];
      if (root instanceof Element && root.matches('[data-reveal]')) elements.push(root);
      if (root.querySelectorAll) elements.push(...root.querySelectorAll('[data-reveal]'));
      elements.forEach((element) => {
        if (element.classList.contains('is-visible')) return;
        if (visibilityObserver) visibilityObserver.observe(element);
        else element.classList.add('is-visible');
      });
    };

    register(document);
    const mountObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) register(node);
      }));
    });
    mountObserver.observe(document.body, { childList: true, subtree: true });

    const fallback = window.setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((element) => element.classList.add('is-visible'));
    }, 1800);
    return () => {
      window.clearTimeout(fallback);
      mountObserver.disconnect();
      visibilityObserver?.disconnect();
    };
  }, [routeKey]);
}
