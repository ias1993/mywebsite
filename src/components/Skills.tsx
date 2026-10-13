import { coreSkills, skillGroups } from '@/data/profile';
import { SectionHead } from './SectionHead';
import { LocatorIllustration } from './illustrations/LocatorIllustration';

export function Skills() {
  return (
    <section className="blk" id="skills" data-name="Skills" aria-labelledby="skills-title">
      <div className="wrap">
        <SectionHead
          id="skills"
          eyebrow="Technical skills"
          title="The toolkit"
          intro="A Python-first automation engineer who also covers API, performance and manual testing. The dark chips are the core stack used daily."
          illustration={<LocatorIllustration />}
        />
        <ul className="core" aria-label="Core stack">
          {coreSkills.map((s) => (
            <li key={s} className="chip f">
              {s}
            </li>
          ))}
        </ul>
        <div className="cats">
          {skillGroups.map((g) => (
            <div key={g.title} className={`cat${g.wide ? ' wide' : ''}`}>
              <h3>{g.title}</h3>
              <ul className="chips">
                {g.items.map((s) => (
                  <li key={s} className="chip f">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
