import { profile } from '@/data/profile';
import { CopyButton } from './CopyButton';
import { PlaneIllustration } from './illustrations/PlaneIllustration';

export function Contact() {
  return (
    <section className="contact" id="contact" data-name="Contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Hiring for QA automation?</h2>
            <p className="lede">{profile.firstName} replies quickly to recruiters and hiring managers. Email is the best first step; a call works too.</p>
            <div className="illo illo-plane" aria-hidden="true">
              <PlaneIllustration />
            </div>
          </div>
          <address className="rows">
            <div className="row">
              <span className="k">Email</span>
              <span className="v">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </span>
              <CopyButton text={profile.email} label="Copy email address" />
            </div>
            <div className="row">
              <span className="k">Phone</span>
              <span className="v">
                <a href={`tel:${profile.phoneE164}`}>{profile.phoneDisplay}</a>
              </span>
              <CopyButton text={profile.phoneE164} label="Copy phone number" />
            </div>
            {profile.linkedin ? (
              <div className="row">
                <span className="k">LinkedIn</span>
                <span className="v">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer me">
                    View profile ↗
                  </a>
                </span>
              </div>
            ) : null}
            <div className="row">
              <span className="k">Based in</span>
              <span className="v">
                {profile.location.city}, {profile.location.country}
              </span>
            </div>
            <div className="row">
              <span className="k">Open to</span>
              <span className="v">
                {profile.relocation} relocation · {profile.notice}
              </span>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
