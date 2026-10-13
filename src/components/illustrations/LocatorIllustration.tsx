/** A browser wireframe where a Selenium-style locator hops between email, password and submit. */
const KT = '0;.28;.33;.61;.66;.94;1';

export function LocatorIllustration() {
  return (
    <svg viewBox="0 0 420 220" role="presentation">
      <rect className="s" x="10" y="10" width="400" height="200" rx="12" />
      <path className="s m" d="M10 38 H410" />
      <circle className="s m" cx="28" cy="24" r="3.5" />
      <circle className="s m" cx="40" cy="24" r="3.5" />
      <circle className="s m" cx="52" cy="24" r="3.5" />
      <rect className="s m" x="70" y="16" width="320" height="16" rx="8" />

      <text className="t ink" x="82" y="28" opacity="1">
        {"//input[@name='email']"}
        <animate attributeName="opacity" dur="6s" repeatCount="indefinite" values="1;1;0;0;1" keyTimes="0;.3;.31;.99;1" />
      </text>
      <text className="t ink" x="82" y="28" opacity="0">
        {"//input[@type='password']"}
        <animate attributeName="opacity" dur="6s" repeatCount="indefinite" values="0;0;1;1;0;0" keyTimes="0;.32;.33;.62;.63;1" />
      </text>
      <text className="t ink" x="82" y="28" opacity="0">
        {"//button[@type='submit']"}
        <animate attributeName="opacity" dur="6s" repeatCount="indefinite" values="0;0;1;1;0" keyTimes="0;.65;.66;.98;1" />
      </text>

      <rect className="s" x="34" y="56" width="140" height="10" rx="3" />
      <rect className="s m" x="34" y="82" width="220" height="24" rx="5" />
      <path className="s m" d="M44 94 H120" />
      <rect className="s m" x="34" y="116" width="220" height="24" rx="5" />
      <path className="s m" d="M44 128 H90" />
      <rect className="s a" x="34" y="152" width="90" height="28" rx="6" />
      <path className="s a" d="M56 166 H102" />
      <rect className="s m" x="284" y="56" width="102" height="124" rx="8" />
      <path className="s m" d="M292 168 L322 132 L340 150 L356 136 L378 168" />
      <circle className="s m" cx="358" cy="80" r="8" />

      <rect className="sel" x="30" y="78" width="228" height="32" rx="7">
        <animate attributeName="y" dur="6s" repeatCount="indefinite" values="78;78;112;112;148;148;78" keyTimes={KT} />
        <animate attributeName="width" dur="6s" repeatCount="indefinite" values="228;228;228;228;98;98;228" keyTimes={KT} />
        <animate attributeName="height" dur="6s" repeatCount="indefinite" values="32;32;32;32;36;36;32" keyTimes={KT} />
      </rect>
      <g>
        <path className="cur" d="M0 0 L0 15 L4 11 L7.5 18 L10 17 L6.5 10 L12 10 Z" />
        <animateTransform attributeName="transform" type="translate" dur="6s" repeatCount="indefinite" values="236 96;236 96;236 130;236 130;110 170;110 170;236 96" keyTimes={KT} />
      </g>
    </svg>
  );
}
