/** Paper plane following a dashed flight path. */
const PATH = 'M12 128 C70 128 60 50 116 66 S180 136 226 22';

export function PlaneIllustration() {
  return (
    <svg viewBox="0 0 240 140" role="presentation">
      <path className="s m" d={PATH} />
      <path className="s flow" d={PATH} />
      <circle className="s bgf" cx="12" cy="128" r="4" />
      <g>
        <path className="s bgf" d="M-10 -7 L12 0 L-10 7 L-5 0 Z" />
        <path className="s" d="M-5 0 H12" />
        <animateMotion dur="4.5s" repeatCount="indefinite" rotate="auto" path={PATH} />
      </g>
    </svg>
  );
}
