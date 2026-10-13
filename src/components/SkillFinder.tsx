'use client';

import { useEffect, useRef, useState } from 'react';
import { profile, quickKeywords } from '@/data/profile';

type Group = { name: string; count: number; first: Element };
type Result = { query: string; total: number; groups: Group[] } | null;

/**
 * Recruiter keyword check. Every element with the class `f` is searchable;
 * matches get the `hit` class and are grouped by their closest [data-name] section.
 */
export function SkillFinder() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<Result>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = window.setTimeout(() => {
      const q = value.trim().toLowerCase();
      const items = Array.from(document.querySelectorAll('.f'));
      items.forEach((el) => el.classList.remove('hit'));
      if (!q) {
        setResult(null);
        return;
      }
      const groups: Group[] = [];
      const byName = new Map<string, Group>();
      let total = 0;
      items.forEach((el) => {
        if (!el.textContent?.toLowerCase().includes(q)) return;
        el.classList.add('hit');
        total++;
        const name = el.closest('[data-name]')?.getAttribute('data-name');
        if (!name) return;
        let g = byName.get(name);
        if (!g) {
          g = { name, count: 0, first: el };
          byName.set(name, g);
          groups.push(g);
        }
        g.count++;
      });
      setResult({ query: value.trim(), total, groups });
    }, 120);
    return () => window.clearTimeout(t);
  }, [value]);

  const jump = (el: Element) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  };

  return (
    <div className="finder" role="search">
      <div>
        <h3>Checking for a specific skill?</h3>
        <p>Type a tool or keyword from your job description. Matches are highlighted across the page so you can jump straight to the evidence.</p>
      </div>
      <div>
        <label htmlFor="kw" className="sr-only">
          Search skills and experience
        </label>
        <div className="field">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            id="kw"
            type="search"
            placeholder="e.g. Selenium, JMeter, GraphQL"
            autoComplete="off"
            spellCheck={false}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              setValue('');
              inputRef.current?.focus();
            }}
          >
            Clear
          </button>
        </div>
        <div className="quick">
          {quickKeywords.map((k) => (
            <button key={k} type="button" aria-pressed={value.toLowerCase() === k.toLowerCase()} onClick={() => setValue(k)}>
              {k}
            </button>
          ))}
        </div>
        <div className="result" aria-live="polite">
          {result && result.total === 0 ? (
            <p className="none">
              &ldquo;{result.query}&rdquo; isn&apos;t listed on {profile.firstName}&apos;s CV. It may still be something he has used, so ask him directly.
            </p>
          ) : null}
          {result && result.total > 0 ? (
            <>
              <p>
                <strong>
                  {result.total} match{result.total > 1 ? 'es' : ''}
                </strong>{' '}
                for &ldquo;{result.query}&rdquo;. Jump to:
              </p>
              <div className="jumps">
                {result.groups.map((g) => (
                  <button key={g.name} type="button" onClick={() => jump(g.first)}>
                    {g.name} · {g.count}
                  </button>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
