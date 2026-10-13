'use client';

import { useEffect } from 'react';

/** SMIL animations ignore CSS, so pause the line illustrations for visitors who prefer reduced motion. */
export function MotionGuard() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      document.querySelectorAll<SVGSVGElement>('.illo svg').forEach((svg) => {
        if (mq.matches) svg.pauseAnimations();
        else svg.unpauseAnimations();
      });
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);
  return null;
}
