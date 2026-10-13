import type { ReactNode } from 'react';

type Props = { id: string; eyebrow: string; title: string; intro: string; illustration?: ReactNode };

export function SectionHead({ id, eyebrow, title, intro, illustration }: Props) {
  return (
    <div className="head">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        <p>{intro}</p>
      </div>
      {illustration ? (
        <div className="illo" aria-hidden="true">
          {illustration}
        </div>
      ) : null}
    </div>
  );
}
