'use client';

import { useEffect } from 'react';

export function DesktopDetailsOpen() {
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 700px)');

    function sync() {
      document.querySelectorAll('details.r-entry').forEach((d) => {
        if (mq.matches) {
          d.removeAttribute('open');
        } else {
          d.setAttribute('open', '');
        }
      });
    }

    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return null;
}
