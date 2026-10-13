import { stats, wins, type WinIcon } from '@/data/profile';
import { SectionHead } from './SectionHead';
import { SkillFinder } from './SkillFinder';
import { PipelineIllustration } from './illustrations/PipelineIllustration';

const ICONS: Record<WinIcon, React.ReactNode> = {
  shield: (
    <>
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  ticket: (
    <>
      <path d="M8 3h8l4 4v14H4V3h4z" />
      <path d="M9 13h6M9 17h4M9 9h2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18.5 14.8c1.6.8 2.6 2.6 3 5.2" />
    </>
  ),
  flag: (
    <>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <path d="M4 22v-7" />
    </>
  ),
};

export function Impact() {
  return (
    <section className="blk" id="impact" data-name="Impact" aria-labelledby="impact-title">
      <div className="wrap">
        <SectionHead
          id="impact"
          eyebrow="Achievement highlights"
          title="Results a hiring team can check"
          intro="Measured outcomes from real releases. Each figure comes from a named project, so you can ask about it in an interview."
          illustration={<PipelineIllustration />}
        />

        <dl className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <dt className="what f">{s.label}</dt>
              <dd className="n">
                {s.value}
                <sup>{s.suffix}</sup>
              </dd>
              {s.meter ? (
                <dd className={`meter${s.meterTone === 'pass' ? ' down' : ''}`} aria-hidden="true">
                  <b style={{ width: `${s.meter}%` }} />
                </dd>
              ) : null}
              <dd className="where">{s.source}</dd>
            </div>
          ))}
        </dl>

        <ul className="wins">
          {wins.map((w) => (
            <li className="win" key={w.title}>
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {ICONS[w.icon]}
                </svg>
              </div>
              <div>
                <h3 className="f">{w.title}</h3>
                <p className="f">{w.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <SkillFinder />
      </div>
    </section>
  );
}
