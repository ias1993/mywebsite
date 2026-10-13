'use client';

import { useRef, useState } from 'react';

export function CopyButton({ text, label }: { text: string; label: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'selected'>('idle');
  const btn = useRef<HTMLButtonElement>(null);

  const reset = () => window.setTimeout(() => setState('idle'), 1600);

  const selectFallback = () => {
    const v = btn.current?.parentElement?.querySelector('.v');
    if (v) {
      const range = document.createRange();
      range.selectNodeContents(v);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
    setState('selected');
    reset();
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState('copied');
      reset();
    } catch {
      selectFallback();
    }
  };

  return (
    <button ref={btn} type="button" className={`cpy${state === 'copied' ? ' done' : ''}`} onClick={copy} aria-label={label}>
      {state === 'copied' ? 'Copied' : state === 'selected' ? 'Selected' : 'Copy'}
    </button>
  );
}
