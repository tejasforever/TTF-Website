import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext(null);

export function RouterProvider({ children }) {
  // Support both hash-based and path-based navigation smoothly
  const getInitialPath = () => {
    if (window.location.hash) {
      return window.location.hash.replace(/^#/, '') || '/';
    }
    return window.location.pathname || '/';
  };

  const [currentPath, setCurrentPath] = useState(getInitialPath());

  useEffect(() => {
    const handleLocationChange = () => {
      const path = getInitialPath();
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigate = (to) => {
    if (to.startsWith('#')) {
      window.location.hash = to;
    } else {
      window.location.hash = `#${to}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}
