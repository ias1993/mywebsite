'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'imran-theme';

export function ThemeToggle() {
  // null until mounted, so server and client render the same markup.
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    const t = document.documentElement.getAttribute('data-theme');
    setDark(t === 'dark'); // light is the default; dark only when chosen
  }, []);

  const toggle = () => {
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage blocked: the choice lasts for this visit only */
    }
    setDark(!dark);
  };

  return (
    <button className="theme-t" type="button" onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {dark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        ) : (
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
        )}
      </svg>
    </button>
  );
}
