/** QA hub with signals flowing in from each product domain. */
const NODES = [
  { x: 110, y: 45, label: 'SaaS', lx: 98, ly: 49, anchor: 'end' as const, begin: '0s' },
  { x: 110, y: 155, label: 'E-commerce', lx: 98, ly: 159, anchor: 'end' as const, begin: '-1s' },
  { x: 310, y: 45, label: 'Healthcare', lx: 322, ly: 49, anchor: 'start' as const, begin: '-1.5s' },
  { x: 310, y: 155, label: 'Booking', lx: 322, ly: 159, anchor: 'start' as const, begin: '-.5s' },
  { x: 210, y: 180, label: 'Fitness', lx: 222, ly: 184, anchor: 'start' as const, begin: '-2s' },
];
const HUB = { x: 210, y: 100 };

export function HubIllustration() {
  return (
    <svg viewBox="0 0 420 200" role="presentation">
      {NODES.map((n) => (
        <path key={`l-${n.label}`} className="s m" d={`M${n.x} ${n.y} L${HUB.x} ${HUB.y}`} />
      ))}
      {NODES.map((n) => (
        <circle key={`d-${n.label}`} className="dot-a" r="3.5">
          <animateMotion dur="2.5s" begin={n.begin} repeatCount="indefinite" path={`M${n.x} ${n.y} L${HUB.x} ${HUB.y}`} />
        </circle>
      ))}
      <circle className="s bgf" cx={HUB.x} cy={HUB.y} r="34" />
      <circle className="s a spin" cx={HUB.x} cy={HUB.y} r="26" strokeDasharray="4 6" />
      <text className="t big" x={HUB.x} y={HUB.y + 8} textAnchor="middle">QA</text>
      {NODES.map((n) => (
        <g key={`n-${n.label}`}>
          <circle className="s bgf" cx={n.x} cy={n.y} r="6" />
          <text className="t ink" x={n.lx} y={n.ly} textAnchor={n.anchor}>{n.label}</text>
        </g>
      ))}
    </svg>
  );
}
