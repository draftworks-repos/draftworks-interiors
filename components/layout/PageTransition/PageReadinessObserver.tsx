'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { usePageTransition } from '@/lib/context/PageTransitionContext';

/** Reports readiness only after the destination route has committed and painted. */
export default function PageReadinessObserver() {
  const pathname = usePathname();
  const { status, reportDestinationReady } = usePageTransition();
  const previousPathRef = useRef(pathname);

  useEffect(() => {
    const pathChanged = previousPathRef.current !== pathname;
    previousPathRef.current = pathname;

    // For router.push, require the pathname to change. For browser back/forward,
    // the popstate handler begins the transition before Next commits the route.
    if (status === 'idle' || (status !== 'entering' && status !== 'active') || !pathChanged) {
      return;
    }

    let cancelled = false;
    let frame2 = 0;
    const frame1 = requestAnimationFrame(() => {
      frame2 = requestAnimationFrame(async () => {
        if (cancelled) return;

        const heroImg =
          document.querySelector<HTMLImageElement>('main img[priority]') ||
          document.querySelector<HTMLImageElement>('main [class*="hero"] img') ||
          document.querySelector<HTMLImageElement>('main [class*="Hero"] img') ||
          document.querySelector<HTMLImageElement>('main img');

        if (heroImg && !heroImg.complete) {
          await new Promise<void>((resolve) => {
            const finish = () => resolve();
            heroImg.addEventListener('load', finish, { once: true });
            heroImg.addEventListener('error', finish, { once: true });
            // Avoid holding the full page transition indefinitely for a failed image.
            window.setTimeout(finish, 5000);
          });
        }

        if (heroImg?.complete && heroImg.naturalWidth > 0 && heroImg.decode) {
          try {
            await heroImg.decode();
          } catch {
            // A loaded image may still reject decode; the route itself is ready.
          }
        }

        if (!cancelled) reportDestinationReady();
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame1);
      cancelAnimationFrame(frame2);
    };
  }, [pathname, status, reportDestinationReady]);

  return null;
}
