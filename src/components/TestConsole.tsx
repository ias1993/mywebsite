'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const SUITES = [
  'test_signup.py',
  'test_otp_login.py',
  'test_org_onboarding.py',
  'test_team_types.py',
  'test_okr_sessions.py',
  'test_ai_generated_okrs.py',
  'test_weighting.py',
  'test_data_requests.py',
];

// command + collected + suites + "more" + summary
const TOTAL = 2 + SUITES.length + 1 + 1;
const DOTS = '··························';

export function TestConsole() {
  // Server render shows the finished run, so the page is complete without JavaScript.
  const [shown, setShown] = useState(TOTAL);
  const timers = useRef<number[]>([]);

  const play = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(TOTAL);
      return;
    }
    setShown(0);
    for (let i = 1; i <= TOTAL; i++) {
      timers.current.push(window.setTimeout(() => setShown(i), 250 + i * 230));
    }
  }, []);

  useEffect(() => {
    play();
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, [play]);

  const cls = (i: number, extra = '') => `ln${extra ? ` ${extra}` : ''}${i >= shown ? ' wait' : ''}`;
  const progress = Math.round((shown / TOTAL) * 100);

  return (
    <div className="console" role="img" aria-label="Test run summary: 650 tests passed across 24 suites, Allure report generated, failed runs filed to Jira automatically.">
      <div className="console-top">
        <i />
        <i />
        <i />
        <span>goalytics-e2e — pytest</span>
        <button className="rerun" type="button" onClick={play} aria-label="Replay the test run animation">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          Re-run
        </button>
      </div>
      <div className="console-body" aria-hidden="true">
        <div className={cls(0)}>
          <span className="cmd">$</span>
          <span>pytest tests/ --alluredir=allure-results</span>
        </div>
        <div className={cls(1, 'dim')}>
          <span>collected 650 items · 24 suites</span>
        </div>
        {SUITES.map((s, i) => (
          <div key={s} className={cls(i + 2)}>
            <span className="file">{s}</span>
            <span className="dots">{DOTS}</span>
            <span className="ok">PASSED</span>
          </div>
        ))}
        <div className={cls(SUITES.length + 2, 'dim')}>
          <span>… 16 more suites</span>
        </div>
        <div className={`summary ${cls(SUITES.length + 3)}`}>
          <div className="bar">
            <b style={{ width: `${progress}%` }} />
          </div>
          <div className="big-pass">650 passed · 24 suites</div>
          <div className="term-dim">allure → screenshots + page source on failure</div>
          <div className="term-dim">jira_reporter → bugs filed with logs, duplicates skipped</div>
        </div>
      </div>
    </div>
  );
}
