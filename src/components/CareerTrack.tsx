'use client';

import { useEffect, useState } from 'react';
import { jobs, monthsBetween } from '@/data/profile';

/** Proportional career bar. Segment widths are the months spent in each role; the current role grows over time. */
export function CareerTrack() {
  const ordered = [...jobs].reverse();
  // Fixed reference date for the server render; refreshed on the client after mount.
  const [now, setNow] = useState(() => new Date('2026-10-01'));
  useEffect(() => setNow(new Date()), []);

  const firstYear = Number(ordered[0].start.slice(0, 4));
  const years: string[] = [];
  for (let y = firstYear; y < now.getFullYear(); y++) years.push(String(y));
  years.push('Now');

  return (
    <div className="track">
      <div className="track-bar">
        {ordered.map((j) => (
          <a
            key={j.id}
            href={`#${j.id}`}
            className={`seg${j.end ? '' : ' now'}`}
            style={{ flexGrow: monthsBetween(j.start, j.end, now) }}
            title={`${j.company} · ${j.when}`}
          >
            {j.short}
          </a>
        ))}
      </div>
      <div className="track-years" aria-hidden="true">
        {years.map((y) => (
          <span key={y}>{y}</span>
        ))}
      </div>
    </div>
  );
}
