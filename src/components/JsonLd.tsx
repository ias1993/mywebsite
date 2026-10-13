import { SITE_URL, coreSkills, jobs, profile, seo } from '@/data/profile';

/** Structured data (schema.org ProfilePage + Person) for rich results in search engines. */
export function JsonLd() {
  const person = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: profile.name,
    jobTitle: profile.title,
    description: seo.description,
    url: SITE_URL,
    image: `${SITE_URL}${profile.photo}`,
    email: `mailto:${profile.email}`,
    telephone: profile.phoneE164,
    nationality: profile.nationality,
    address: { '@type': 'PostalAddress', addressLocality: profile.location.city, addressCountry: profile.location.countryCode },
    worksFor: { '@type': 'Organization', name: jobs[0].company },
    alumniOf: { '@type': 'CollegeOrUniversity', name: profile.education.school },
    hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: profile.education.degree },
    knowsAbout: [...coreSkills, 'API testing', 'Performance testing', 'Test automation framework design', 'Agile / Scrum'],
    knowsLanguage: ['English', 'Urdu'],
    ...(profile.linkedin ? { sameAs: [profile.linkedin] } : {}),
  };

  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: SITE_URL,
    name: seo.title,
    mainEntity: person,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
