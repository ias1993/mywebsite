import { profile } from '@/data/profile';
import { TestConsole } from './TestConsole';

export function Hero() {
  return (
    <section className="hero" id="top" data-name="Profile" aria-labelledby="hero-title">
      <div className="wrap">
        <div>
          <p className="status rise">
            <i aria-hidden="true" />
            Open to roles · {profile.notice} · Relocation to {profile.relocation}
          </p>
          <h1 id="hero-title" className="rise d1">
            {profile.name}
          </h1>
          <p className="role rise d2">{profile.stackLine}</p>
          <p className="lede rise d3">
            I design and own test automation frameworks end to end, from test strategy and architecture to reporting and defect
            management. Over <strong>{profile.yearsLabel} across SaaS, e-commerce and healthcare</strong>, I&apos;ve built a{' '}
            <strong>650+ case end-to-end suite</strong>, cut critical checkout bugs by <strong>30%</strong>, and served as the QA point
            of contact teams rely on at release time.
          </p>
          <div className="cta-row rise d4">
            <a className="btn btn-primary" href="#contact">
              Get in touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a className="btn btn-ghost" href="#experience">
              See experience
            </a>
          </div>
          <ul className="facts rise d4">
            <li>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              {profile.location.city}, {profile.location.country}
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
              Currently at {profile.currentEmployer}
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10l9-6 9 6-9 6-9-6z" />
                <path d="M7 12.5V17c3 2 7 2 10 0v-4.5" />
              </svg>
              {profile.education.short}, {profile.education.school}
            </li>
          </ul>
        </div>

        <div className="rise d2 hero-console">
          <TestConsole />
          <p className="console-cap">Illustrative run of the Goalytics end-to-end suite Imran built.</p>
        </div>
      </div>
    </section>
  );
}
