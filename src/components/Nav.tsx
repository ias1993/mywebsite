'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navLinks, profile } from '@/data/profile';
import { ThemeToggle } from './ThemeToggle';

export function Nav() {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="wrap">
        <a className="brand" href="#top" aria-label={`${profile.name}, back to top`}>
          <span className="av">
            <Image src={profile.photo} alt="" width={48} height={72} sizes="48px" priority />
          </span>
          {profile.shortName}
        </a>
        <nav aria-label="Sections">
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={active === l.id ? 'on' : undefined} aria-current={active === l.id ? 'true' : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
        <a className="btn btn-primary" href="#contact">
          Contact {profile.firstName}
        </a>
      </div>
    </header>
  );
}
