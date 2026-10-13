import { profile } from '@/data/profile';

export function About() {
  const e = profile.education;
  return (
    <section className="blk" id="about" data-name="Education" aria-label="Education, languages and availability">
      <div className="wrap">
        <div className="trio">
          <div>
            <h2>Education</h2>
            <p className="v">{e.degree}</p>
            <p>
              {e.school}, {e.city} · {e.year}
            </p>
          </div>
          <div>
            <h2>Languages</h2>
            <p className="v">English &amp; Urdu</p>
            <p>{profile.languages}</p>
          </div>
          <div>
            <h2>Availability</h2>
            <p className="v">{profile.notice}</p>
            <p>
              {profile.nationality} national, open to relocation to the {profile.relocation.replace('&', 'and')}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
