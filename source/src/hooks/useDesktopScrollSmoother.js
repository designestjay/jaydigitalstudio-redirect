import { useEffect, useRef } from 'react';
import { setActiveScrollSmoother } from '../lib/scroll.js';

export function useDesktopScrollSmoother(routeKey) {
  const smootherRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const desktopMotion = window.matchMedia('(min-width: 821px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let disposed = false;
    let releaseSmoother = null;
    let mountObserver = null;
    let refreshFrame = 0;
    const effectTriggers = new Map();

    const effectElements = (root) => {
      const elements = [];
      if (root instanceof Element && root.matches('[data-speed], [data-lag]')) elements.push(root);
      if (root.querySelectorAll) elements.push(...root.querySelectorAll('[data-speed], [data-lag]'));
      return elements;
    };

    const registerEffects = (root) => {
      const smoother = smootherRef.current;
      if (!smoother) return;
      effectElements(root).forEach((element) => {
        if (effectTriggers.has(element)) return;
        effectTriggers.set(element, smoother.effects(element) || []);
      });
    };

    const unregisterEffects = (root) => {
      effectElements(root).forEach((element) => {
        effectTriggers.get(element)?.forEach((trigger) => trigger.kill());
        effectTriggers.delete(element);
      });
    };

    const scheduleRefresh = () => {
      if (refreshFrame) return;
      refreshFrame = window.requestAnimationFrame(() => {
        refreshFrame = 0;
        scrollTriggerRef.current?.refresh();
      });
    };

    const disable = () => {
      if (refreshFrame) window.cancelAnimationFrame(refreshFrame);
      refreshFrame = 0;
      mountObserver?.disconnect();
      mountObserver = null;
      effectTriggers.clear();
      releaseSmoother?.();
      releaseSmoother = null;
      smootherRef.current?.kill();
      smootherRef.current = null;
      scrollTriggerRef.current = null;
      document.documentElement.classList.remove('has-scroll-smoother');
    };

    const enable = async () => {
      if (disposed || !desktopMotion.matches || smootherRef.current) return;
      const [gsapModule, triggerModule, smootherModule] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('gsap/ScrollSmoother')
      ]);
      if (disposed || !desktopMotion.matches) return;

      const gsap = gsapModule.gsap || gsapModule.default;
      const ScrollTrigger = triggerModule.ScrollTrigger || triggerModule.default;
      const ScrollSmoother = smootherModule.ScrollSmoother || smootherModule.default;
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 0.85,
        smoothTouch: 0,
        effects: false,
        normalizeScroll: false
      });
      if (disposed) {
        smoother.kill();
        return;
      }

      smootherRef.current = smoother;
      scrollTriggerRef.current = ScrollTrigger;
      releaseSmoother = setActiveScrollSmoother(smoother);
      document.documentElement.classList.add('has-scroll-smoother');
      registerEffects(document);
      mountObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.removedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) unregisterEffects(node);
          });
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) registerEffects(node);
          });
        });
        scheduleRefresh();
      });
      mountObserver.observe(document.getElementById('smooth-content'), { childList: true, subtree: true });
      scheduleRefresh();
    };

    const onPreferenceChange = () => {
      if (desktopMotion.matches) enable();
      else disable();
    };

    enable();
    desktopMotion.addEventListener('change', onPreferenceChange);
    return () => {
      disposed = true;
      desktopMotion.removeEventListener('change', onPreferenceChange);
      disable();
    };
  }, []);

  useEffect(() => {
    const refresh = () => scrollTriggerRef.current?.refresh();
    const frame = window.requestAnimationFrame(refresh);
    const delayed = window.setTimeout(refresh, 500);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(delayed);
    };
  }, [routeKey]);
}
