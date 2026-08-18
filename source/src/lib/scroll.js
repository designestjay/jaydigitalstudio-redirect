let activeSmoother = null;

export function setActiveScrollSmoother(smoother) {
  activeSmoother = smoother;
  return () => {
    if (activeSmoother === smoother) activeSmoother = null;
  };
}

export function scrollToTop() {
  if (activeSmoother) {
    activeSmoother.scrollTop(0);
    return;
  }

  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
  root.scrollTop = 0;
  document.body.scrollTop = 0;
  window.requestAnimationFrame(() => { root.style.scrollBehavior = previousBehavior; });
}

export function scrollToAnchor(id, smooth = true) {
  if (id === 'top') {
    scrollToTop();
    return true;
  }

  const target = document.getElementById(id);
  if (!target) return false;

  const focusTarget = target.querySelector('.section-kicker') || target;
  const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height || 74;
  const offset = headerHeight + 14;
  const shouldSmooth = smooth && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (activeSmoother) {
    activeSmoother.scrollTo(focusTarget, shouldSmooth, `top ${offset}px`);
  } else {
    const top = window.scrollY + focusTarget.getBoundingClientRect().top - offset;
    window.scrollTo({ top: Math.max(0, top), left: 0, behavior: shouldSmooth ? 'smooth' : 'auto' });
  }
  return true;
}
