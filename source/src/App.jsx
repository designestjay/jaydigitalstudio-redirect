import React, { Suspense, createContext, lazy, useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import { projectBySlug } from './data/projects.js';
import { useReveal } from './hooks/useReveal.js';
import { useDesktopScrollSmoother } from './hooks/useDesktopScrollSmoother.js';
import { scrollToAnchor, scrollToTop } from './lib/scroll.js';

const ProjectPage = lazy(() => import('./pages/ProjectPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

export const NavigationContext = createContext({ navigate: () => {} });

function cleanPath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  return path === '/index.html' ? '/' : path;
}

export function Link({ href, children, onClick, ...props }) {
  const { navigate } = React.useContext(NavigationContext);
  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !href.startsWith('/')) return;
    event.preventDefault();
    navigate(href);
  };
  return <a href={href} onClick={handleClick} {...props}>{children}</a>;
}

export default function App() {
  const [path, setPath] = useState(() => cleanPath(window.location.pathname));
  useReveal(path);
  useDesktopScrollSmoother(path);

  const navigate = useCallback((href) => {
    const [pathname, hash = ''] = href.split('#');
    const nextPath = cleanPath(pathname || window.location.pathname);
    if (nextPath !== path) {
      window.history.pushState({}, '', `${nextPath}${hash ? `#${hash}` : ''}`);
      setPath(nextPath);
      if (!hash) scrollToTop();
    } else if (hash) {
      scrollToAnchor(hash);
    }
  }, [path]);

  useEffect(() => {
    const onPopState = () => {
      setPath(cleanPath(window.location.pathname));
      if (!window.location.hash) scrollToTop();
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useLayoutEffect(() => {
    if (!window.location.hash) scrollToTop();
  }, [path]);

  const route = useMemo(() => {
    const match = path.match(/^\/works\/([^/]+)$/);
    if (match && projectBySlug[match[1]]) return { type: 'project', project: projectBySlug[match[1]] };
    if (path === '/' || path === '/works') return { type: 'home' };
    return { type: 'not-found' };
  }, [path]);

  useEffect(() => {
    const title = route.type === 'project' ? `${route.project.title} — Jay Digital Studio` : 'Jay Digital Studio — Creative studio, Göteborg';
    document.title = title;
  }, [route]);

  return (
    <NavigationContext.Provider value={{ navigate }}>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="site-header-spacer" aria-hidden="true" />
          <Suspense fallback={<main className="route-loading" aria-label="Loading page" />}>
            {route.type === 'home' && <HomePage />}
            {route.type === 'project' && <ProjectPage project={route.project} />}
            {route.type === 'not-found' && <NotFoundPage />}
          </Suspense>
          <Footer />
        </div>
      </div>
    </NavigationContext.Provider>
  );
}
