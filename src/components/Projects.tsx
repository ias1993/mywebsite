import { featuredProject as fp, projects } from '@/data/profile';
import { SectionHead } from './SectionHead';
import { HubIllustration } from './illustrations/HubIllustration';

export function Projects() {
  return (
    <section className="blk" id="projects" data-name="Projects" aria-labelledby="projects-title">
      <div className="wrap">
        <SectionHead
          id="projects"
          eyebrow="Key projects"
          title="Where the work shipped"
          intro="Five products across B2B SaaS, e-commerce, healthcare, booking and fitness, with Imran's contribution on each."
          illustration={<HubIllustration />}
        />

        <article className="feature">
          <div className="feature-copy">
            <span className="dom">{fp.domain}</span>
            <h3>{fp.name}</h3>
            <p className="sub">{fp.subtitle}</p>
            <p className="f">{fp.body}</p>
            <ol className="journey" aria-label="Automated user journey">
              {fp.journey.map((s) => (
                <li key={s} className="f">
                  {s}
                </li>
              ))}
            </ol>
            <ul className="tags" aria-label="Tech used">
              {fp.tags.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="side">
            <div className="kv">
              <b>{fp.headline.value}</b>
              <span>{fp.headline.label}</span>
            </div>
            <hr />
            <div className="kvs">
              {fp.figures.map((f) => (
                <div className="kv" key={f.label}>
                  <b>{f.value}</b>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
            <hr />
            <p className="side-note f">{fp.note}</p>
          </div>
        </article>

        <div className="proj-grid">
          {projects.map((p) => (
            <article className="proj" key={p.name}>
              <span className="dom">{p.domain}</span>
              <h3>{p.name}</h3>
              <p className="f">{p.body}</p>
              <p className="out">
                <b>{p.outcomeLabel}</b>
                <span className="f">{p.outcome}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
