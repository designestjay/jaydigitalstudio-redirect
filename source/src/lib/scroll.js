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
  if (activeSmoother) activeSmoother.scrollTo(target, smooth, 'top 74px');
  else target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
  return true;
}
