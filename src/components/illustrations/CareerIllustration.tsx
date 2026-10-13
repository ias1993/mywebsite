/** Career staircase: Associate → Senior → Lead, with a dot climbing to the flag. */
const STEPS = 'M30 160 H120 V115 H290 V62 H390';

export function CareerIllustration() {
  return (
    <svg viewBox="0 0 420 200" role="presentation">
      <path className="s m" d="M20 182 H404" />
      <path className="s m" d={STEPS} />
      <path className="s flow" d={STEPS} />
      <circle className="s bgf" cx="30" cy="160" r="4" />
      <circle className="s bgf" cx="120" cy="115" r="4" />
      <circle className="s bgf" cx="290" cy="62" r="4" />
      <path className="s a" d="M390 62 V22" />
      <path className="flag" strokeWidth="1.5" strokeLinejoin="round" d="M390 22 H414 L406 30 L414 38 H390 Z" />
      <text className="t ink" x="36" y="134">Associate</text>
      <text className="t" x="36" y="150">2020</text>
      <text className="t ink" x="128" y="89">Senior SQA</text>
      <text className="t" x="128" y="105">2021</text>
      <text className="t ink" x="298" y="36">Lead SQA</text>
      <text className="t" x="298" y="52">2025</text>
      <g>
        <circle className="halo" r="10" />
        <circle className="dot-a" r="4.5" />
        <animateMotion dur="6s" repeatCount="indefinite" path={STEPS} keyPoints="0;1;1" keyTimes="0;.8;1" calcMode="linear" />
      </g>
    </svg>
  );
}
