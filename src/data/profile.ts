/**
 * Single source of truth for all page content and SEO data.
 * Edit text here; components only render it.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.imransiddiqui.dev').replace(/\/$/, '');

export const profile = {
  name: 'Imran Ahmed Siddiqui',
  shortName: 'Imran Siddiqui',
  firstName: 'Imran',
  title: 'Lead SQA Automation Engineer',
  stackLine: 'Lead SQA Automation Engineer · Python · Pytest · Selenium · API testing',
  photo: '/imran.webp',
  location: { city: 'Karachi', country: 'Pakistan', countryCode: 'PK' },
  email: 'imranahmeds345@gmail.com',
  phoneDisplay: '+92 347 290 7729',
  phoneE164: '+923472907729',
  /** Add the LinkedIn profile URL here when available; it then appears in Contact and in JSON-LD sameAs. */
  linkedin: '',
  nationality: 'Pakistani',
  notice: '30-day notice',
  relocation: 'GCC & Europe',
  currentEmployer: 'Digital Gravity',
  yearsLabel: '5+ years',
  education: { degree: 'Bachelor of Computer Science', short: 'BSCS', school: 'Hamdard University', city: 'Karachi', year: 2020 },
  languages: 'Professional working proficiency in English, native Urdu.',
} as const;

export const seo = {
  title: `${profile.name} | ${profile.title} (Python, Pytest, Selenium)`,
  description:
    'Lead SQA Automation Engineer with 5+ years in SaaS, e-commerce and healthcare. Built a 650+ test Pytest + Selenium framework, automated 60% of a web app and cut critical checkout bugs by 30%. Open to GCC & Europe roles.',
  keywords: [
    'Imran Ahmed Siddiqui',
    'SQA Automation Engineer',
    'Lead QA Engineer',
    'Test Automation Engineer',
    'Python Selenium',
    'Pytest framework',
    'API testing',
    'Postman',
    'GraphQL testing',
    'JMeter',
    'Locust',
    'Allure reports',
    'QA Engineer Karachi',
    'QA Engineer GCC',
    'QA Engineer Europe',
  ],
};

export const stats = [
  { value: '650', suffix: '+', label: 'Automated test cases in a Pytest + Selenium framework', source: 'Goalytics · 24 suites' },
  { value: '60', suffix: '%', label: 'Of the web application covered by automation', source: 'Digital Gravity', meter: 60 },
  { value: '30', suffix: '%', label: 'Fewer critical checkout-related bugs', source: 'Comvita e-commerce', meter: 30, meterTone: 'pass' as const },
  { value: '150', suffix: '+', label: 'KPI metrics validated for executive dashboards', source: 'Goalytics' },
];

export type WinIcon = 'shield' | 'ticket' | 'users' | 'flag';
export const wins: { icon: WinIcon; title: string; body: string }[] = [
  {
    icon: 'shield',
    title: 'Stopped validation defects before production',
    body: 'Positive, negative and boundary coverage with Pytest parametrization surfaced whitespace-only input, duplicate records and missing field validation before release.',
  },
  {
    icon: 'ticket',
    title: 'Automated bug filing with the Jira REST API',
    body: 'A Python tool files bugs from failed runs with logs and screenshots attached, and skips duplicates, so developers get reproducible tickets without manual triage.',
  },
  {
    icon: 'users',
    title: 'Multi-role journeys with email OTP automation',
    body: 'Automated OTP retrieval and full journeys for admins, invited collaborators and responsible users, so tests reflect how real teams use the product.',
  },
  {
    icon: 'flag',
    title: 'Primary QA point of contact for releases',
    body: 'Coordinates testing across internal and external teams and owns release sign-off, keeping quality and timelines on track.',
  },
];

export const quickKeywords = ['Selenium', 'Pytest', 'API', 'JMeter', 'Jira', 'Agile', 'Allure'];

export const coreSkills = ['Python', 'Pytest', 'Selenium WebDriver 4', 'Postman', 'Allure Reports', 'Jira', 'Locust'];

export const skillGroups: { title: string; wide?: boolean; items: string[] }[] = [
  {
    title: 'Programming & automation',
    wide: true,
    items: ['Pytest fixtures', 'conftest hooks', 'Parametrization & markers', 'BDD (Behave)', 'webdriver-manager', 'Data-driven testing', 'Boundary-value testing', 'XPath / CSS locator strategy', 'Explicit waits & synchronization', 'JavaScript execution in Selenium'],
  },
  { title: 'API testing', items: ['Postman', 'Swagger / OpenAPI', 'GraphQL (Altair)', 'REST APIs with Python requests'] },
  {
    title: 'Framework design',
    wide: true,
    items: ['End-to-end journeys with shared browser sessions', 'Reusable helpers', 'Test data generation', 'Multi-user, role-based flows', 'Email OTP automation', 'Screenshot & log capture per step', 'Flaky-test hardening & retry logic'],
  },
  { title: 'Performance testing', items: ['Apache JMeter', 'Locust (Python)', 'Load testing', 'Stress testing'] },
  { title: 'Reporting & tooling', items: ['Allure Reports', 'Pytest logging & artifacts', 'Jira REST API automation', 'Git / GitHub', 'PyCharm', 'AI-assisted test development (Claude Code)'] },
  { title: 'Test management', items: ['Jira', 'Azure DevOps', 'TestRail', 'ClickUp', 'Trello', 'Redmine', 'Excel'] },
  { title: 'Methodologies', items: ['SDLC / STLC', 'Agile / Scrum', 'Test strategy & planning', 'Requirement analysis', 'Bug life cycle', 'Release sign-off'] },
  {
    title: 'Testing types',
    wide: true,
    items: ['Functional', 'Regression', 'Smoke', 'Sanity', 'End-to-end', 'UI', 'Exploratory', 'Ad-hoc', 'Cross-browser & cross-platform', 'Negative & boundary', 'Testing AI-generated content'],
  },
  { title: 'Other', items: ['Rational Functional Tester', 'Rational Performance Tester', 'HTML & CSS (basic)', 'Balsamiq'] },
];

export type Job = {
  id: string;
  company: string;
  short: string;
  role: string;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM, omitted = present
  when: string;
  duration?: string;
  points: { lead: string; rest: string }[];
  tags: string[];
};

export const jobs: Job[] = [
  {
    id: 'job-dg',
    company: 'Digital Gravity',
    short: 'Digital Gravity',
    role: 'Lead SQA Automation Engineer',
    start: '2025-01',
    when: 'Jan 2025 – Present',
    points: [
      { lead: 'Leads QA for releases', rest: ' as the primary point of contact, coordinating testing across internal and external teams to keep release quality and timelines on track.' },
      { lead: 'Architected a Python + Pytest + Selenium WebDriver framework', rest: ' for the Goalytics SaaS platform: 650+ automated tests across 24 suites, from signup and OTP login to onboarding, OKR sessions, weighting and data submission.' },
      { lead: 'Designed positive, negative and boundary coverage', rest: ' with parametrization and shared session fixtures, catching validation defects before they reached production.' },
      { lead: 'Automated email OTP retrieval and multi-user role journeys', rest: ' for admins, invited collaborators and responsible users.' },
      { lead: 'Implemented Allure reporting', rest: ' with automatic failure screenshots and page source, plus per-run logs and step screenshots for fast root-cause analysis.' },
      { lead: 'Built a Jira REST API tool', rest: ' that files bugs from failed runs with logs and screenshots attached and skips duplicates.' },
      { lead: 'Automated 60% of the web application,', rest: ' significantly reducing manual regression effort, and designed test strategies across multiple platforms and stacks.' },
      { lead: 'Created load tests with Locust', rest: ' and worked with developers and product owners on test case creation, review and execution in Agile sprints.' },
    ],
    tags: ['Python', 'Pytest', 'Selenium', 'Allure', 'Jira API', 'Locust'],
  },
  {
    id: 'job-cc',
    company: 'Cooperative Computing',
    short: 'Cooperative Computing',
    role: 'Senior SQA Engineer',
    start: '2021-06',
    end: '2024-12',
    when: 'Jun 2021 – Dec 2024',
    duration: '3 yrs 7 mos',
    points: [
      { lead: 'Wrote and executed functional test cases', rest: ' covering frontend UI and backend APIs using Postman and the Altair GraphQL Playground.' },
      { lead: 'Ran regression, smoke and sanity testing', rest: ' across iterative releases to keep builds stable after deployment.' },
      { lead: 'Authored automated test scripts in Python', rest: ' (PyCharm) to make testing faster and repeatable.' },
      { lead: 'Took part in Scrum ceremonies', rest: ' (sprint planning, stand-ups, retrospectives) and kept test scenarios aligned with user stories.' },
      { lead: 'Attended client demos', rest: ' and prepared QA reports and status documentation for stakeholders.' },
    ],
    tags: ['Postman', 'GraphQL', 'Python', 'Scrum'],
  },
  {
    id: 'job-mm',
    company: 'Minimax IT Solution',
    short: 'Minimax',
    role: 'Associate SQA Engineer',
    start: '2020-06',
    end: '2021-05',
    when: 'Jun 2020 – May 2021',
    duration: '1 yr',
    points: [
      { lead: 'Wrote, executed and maintained test cases', rest: ' for functional and regression testing cycles.' },
      { lead: 'Performed smoke and sanity testing', rest: ' to confirm build stability before full test execution.' },
      { lead: 'Logged and tracked defects in Redmine,', rest: ' working closely with developers on timely resolution.' },
      { lead: 'Reviewed wireframes in Balsamiq', rest: ' to give early QA feedback before development handoff.' },
    ],
    tags: ['Redmine', 'Balsamiq', 'Manual QA'],
  },
];

export const featuredProject = {
  name: 'Goalytics',
  domain: 'B2B SaaS · AI · Digital Gravity',
  subtitle: 'AI-powered OKR / KPI management platform',
  body: "Led end-to-end QA and test automation. Every step of the product's core journey below is covered by Imran's automated suite, including goals, objectives and key results generated by AI.",
  journey: ['Signup', 'OTP login', 'Organization onboarding', 'Team types', 'Collaborative sessions', 'AI-generated OKRs', 'Weighting', 'Milestones', 'Data requests'],
  tags: ['Python', 'Pytest', 'Selenium WebDriver', 'Allure', 'Jira REST API', 'Locust'],
  headline: { value: '650+', label: 'automated test cases across 24 suites' },
  figures: [
    { value: '150+', label: 'KPI metrics validated for executive dashboards' },
    { value: '3', label: 'user roles automated end to end' },
  ],
  note: 'Team types tested: project, department and employee role.',
};

export const projects = [
  {
    name: 'Comvita',
    domain: 'E-commerce · B2C',
    body: 'Led end-to-end QA for a Laravel store with Stripe payments, covering customer profiles, admin features, cart and checkout.',
    outcomeLabel: 'Result',
    outcome: 'Found critical cart-abandonment bugs, contributing to a 30% drop in checkout-related issues.',
  },
  {
    name: 'Medicus & Degree37',
    domain: 'Healthcare · Non-profit',
    body: 'Tested a patient–physician consultation and appointment-booking platform, and a donor engagement system for non-profits.',
    outcomeLabel: 'Scope',
    outcome: 'User flows, scheduling and donor management.',
  },
  {
    name: 'Cosmoceity',
    domain: 'Booking · Retail',
    body: 'Tested the customer app and admin portal, including booking flows and product management, through exploratory and functional testing.',
    outcomeLabel: 'Scope',
    outcome: 'Booking flows, product management and platform stability.',
  },
  {
    name: 'Walking Challenge',
    domain: 'Fitness · Gamified',
    body: 'Validated registration, step tracking, event management, leaderboards and the admin controls for user data and event results.',
    outcomeLabel: 'Scope',
    outcome: 'Registration, step tracking, leaderboards and admin controls.',
  },
];

export const navLinks = [
  { id: 'impact', label: 'Impact' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'Education' },
];

/** Months between two YYYY-MM strings, inclusive of the start month. */
export function monthsBetween(start: string, end?: string, now: Date = new Date()): number {
  const [sy, sm] = start.split('-').map(Number);
  const [ey, em] = end ? end.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1];
  return (ey - sy) * 12 + (em - sm) + 1;
}

export function formatMonths(m: number): string {
  const y = Math.floor(m / 12);
  const r = m % 12;
  const parts: string[] = [];
  if (y) parts.push(`${y} yr${y > 1 ? 's' : ''}`);
  if (r) parts.push(`${r} mo${r > 1 ? 's' : ''}`);
  return parts.join(' ');
}
