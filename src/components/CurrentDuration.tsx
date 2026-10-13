'use client';

import { useEffect, useState } from 'react';
import { formatMonths, monthsBetween } from '@/data/profile';

export function CurrentDuration({ start }: { start: string }) {
  const [label, setLabel] = useState('Current role');
  useEffect(() => {
    const m = monthsBetween(start);
    if (m > 0) setLabel(`Current · ${formatMonths(m)}`);
  }, [start]);
  return <span className="dur now">{label}</span>;
}
