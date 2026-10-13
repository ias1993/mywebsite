import { formatMonths, jobs, monthsBetween } from '@/data/profile';
import { SectionHead } from './SectionHead';
import { CareerTrack } from './CareerTrack';
import { CurrentDuration } from './CurrentDuration';
import { CareerIllustration } from './illustrations/CareerIllustration';

export function Experience() {
  return (
    <section className="blk" id="experience" data-name="Experience" aria-labelledby="experience-title">
      <div className="wrap">
        <SectionHead
          id="experience"
          eyebrow="Career"
          title="From associate to lead in 06 years"
          intro="Three roles, each with more ownership: from executing test cases, to API and regression coverage, to architecting the automation framework and leading releases."
          illustration={<CareerIllustration />}
        />

        <CareerTrack />

        <ol className="jobs">
          {jobs.map((job) => (
            <li key={job.id}>
              <article className="job" id={job.id}>
                <div>
                  <p className="when">
                    <time dateTime={job.start}>{job.when.split(' – ')[0]}</time> – {job.end ? <time dateTime={job.end}>{job.when.split(' – ')[1]}</time> : 'Present'}
                  </p>
                  <p className="co">{job.company}</p>
                  {job.end ? (
                    <span className="dur">{job.duration ?? formatMonths(monthsBetween(job.start, job.end))}</span>
                  ) : (
                    <CurrentDuration start={job.start} />
                  )}
                </div>
                <div>
                  <h3>{job.role}</h3>
                  <ul>
                    {job.points.map((p) => (
                      <li key={p.lead} className="f">
                        <strong>{p.lead}</strong>
                        {p.rest}
                      </li>
                    ))}
                  </ul>
                  <ul className="tags" aria-label="Tools used">
                    {job.tags.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
