import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} · ${profile.title}`,
    short_name: profile.shortName,
    description: `Portfolio of ${profile.name}, ${profile.title}.`,
    start_url: '/',
    display: 'browser',
    background_color: '#F3F5F3',
    theme_color: '#2440CF',
    icons: [
      { src: '/icon', sizes: '64x64', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
