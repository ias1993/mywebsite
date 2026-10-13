import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.title}
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
