/** Commit → pytest gate → release. Passing builds flow through; bugs are caught and dropped into Jira. */
const BUG_LEGS = 'M-7 -3.5 H7 M-7 3.5 H7 M-6 0 H6';
const PASS_PATH = 'M58 100 H362';
const BUG_PATH = 'M58 100 H220 V188';

export function PipelineIllustration() {
  return (
    <svg viewBox="0 0 420 210" role="presentation">
      <text className="t" x="220" y="38" textAnchor="middle">test gate</text>
      <path className="s m" d="M58 100 H170" />
      <path className="s flow" d="M58 100 H170" />
      <path className="s m" d="M270 100 H362" />
      <path className="s flow p" d="M270 100 H362" />
      <path className="s m" d="M220 150 V172" />
      <rect className="s m" x="186" y="172" width="68" height="26" rx="7" />
      <text className="t" x="220" y="189" textAnchor="middle">jira</text>

      {['0s', '-2s'].map((b) => (
        <circle key={b} className="dot-p" r="4">
          <animateMotion dur="4s" begin={b} repeatCount="indefinite" path={PASS_PATH} />
        </circle>
      ))}
      {['-1s', '-3s'].map((b) => (
        <g key={b} className="bug">
          <circle r="4.5" />
          <path d={BUG_LEGS} />
          <animateMotion dur="4s" begin={b} repeatCount="indefinite" path={BUG_PATH} />
          <animate attributeName="opacity" dur="4s" begin={b} repeatCount="indefinite" values="1;1;0" keyTimes="0;.88;1" />
        </g>
      ))}

      <circle className="s bgf" cx="40" cy="100" r="18" />
      <text className="t ink" x="40" y="104" textAnchor="middle">{'{ }'}</text>
      <circle className="s p bgf" cx="380" cy="100" r="18" />
      <path className="s p" d="M372 100 l5 5 l10 -10" />
      <rect className="s bgf" x="170" y="50" width="100" height="100" rx="14" />
      <text className="t ink" x="220" y="94" textAnchor="middle">pytest</text>
      <text className="t ok" x="220" y="114" textAnchor="middle">650 ✓</text>
      <text className="t" x="40" y="140" textAnchor="middle">commit</text>
      <text className="t" x="380" y="140" textAnchor="middle">release</text>
    </svg>
  );
}
