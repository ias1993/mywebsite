import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';

export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const figures = [
  ['650+', 'automated tests'],
  ['60%', 'app automated'],
  ['30%', 'fewer checkout bugs'],
  ['150+', 'KPIs validated'],
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '72px 80px', background: '#F3F5F3', color: '#111A17', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 26, color: '#13804C' }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: '#13804C' }} />
          {'Open to roles · GCC & Europe relocation'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ fontSize: 34, color: '#2440CF', marginTop: 22 }}>{`${profile.title} · Python · Pytest · Selenium`}</div>
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          {figures.map(([n, l]) => (
            <div key={n} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '22px 26px', background: '#FFFFFF', border: '2px solid #D9DFDB', borderRadius: 18 }}>
              <div style={{ fontSize: 52, fontWeight: 800, letterSpacing: -2 }}>{n}</div>
              <div style={{ fontSize: 22, color: '#56635E', marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
