'use client';

import React, { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export type TransitionStatus = 'idle' | 'entering' | 'active' | 'exiting';

interface PageTransitionContextType {
  status: TransitionStatus;
  triggerNavigation: (href: string) => void;
  reportDestinationReady: () => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | null>(null);

export function usePageTransition() {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
}

const MIN_DISPLAY_DURATION_MS = 550; // Minimum duration to appreciate the refined brand transition
const WATCHDOG_TIMEOUT_MS = 10000;    // Safety timeout in case of unexpected network failure

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [status, setStatus] = useState<TransitionStatus>('idle');
  const targetPathRef = useRef<string | null>(null);
  const transitionStartRef = useRef<number>(0);
  const minDurationElapsedRef = useRef<boolean>(false);
  const destinationReadyRef = useRef<boolean>(false);

  // Timers
  const entranceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const minDurationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const exitAnimationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const watchdogTimerRef = useRef<NodeJS.Timeout | null>(null);

  const clearAllTimers = useCallback(() => {
    if (entranceTimerRef.current) clearTimeout(entranceTimerRef.current);
    if (minDurationTimerRef.current) clearTimeout(minDurationTimerRef.current);
    if (exitAnimationTimerRef.current) clearTimeout(exitAnimationTimerRef.current);
    if (watchdogTimerRef.current) clearTimeout(watchdogTimerRef.current);
  }, []);

  const triggerExit = useCallback(() => {
    setStatus('exiting');
    // Exit animation duration matches CSS shrinkToRight (380ms)
    exitAnimationTimerRef.current = setTimeout(() => {
      setStatus('idle');
      targetPathRef.current = null;
      transitionStartRef.current = 0;
      minDurationElapsedRef.current = false;
      destinationReadyRef.current = false;
    }, 400);
  }, []);

  // Check if BOTH independent conditions are met:
  // 1. Destination page is ready (DOM painted & primary hero image loaded)
  // 2. Minimum display duration has elapsed
  const evaluateReadyState = useCallback(() => {
    if (destinationReadyRef.current && minDurationElapsedRef.current) {
      triggerExit();
    }
  }, [triggerExit]);

  // Called when destination page is mounted and ready
  const reportDestinationReady = useCallback(() => {
    // Ignore readiness from the outgoing page. Only the requested pathname
    // (or a browser history navigation) can release the transition.
    if (status === 'idle') return;
    if (targetPathRef.current) {
      const target = new URL(targetPathRef.current, window.location.origin);
      if (target.pathname !== pathname) return;
    }
    destinationReadyRef.current = true;
    evaluateReadyState();
  }, [status, pathname, evaluateReadyState]);

  // Trigger internal route navigation with coordinated transition
  const triggerNavigation = useCallback(
    (href: string) => {
      if (status !== 'idle' && status !== 'exiting') {
        // Already transitioning
        return;
      }

      clearAllTimers();
      targetPathRef.current = href;
      transitionStartRef.current = Date.now();
      minDurationElapsedRef.current = false;
      destinationReadyRef.current = false;

      // 1. Start entrance animation immediately
      setStatus('entering');

      // 2. After entrance expansion (320ms), switch to active state
      entranceTimerRef.current = setTimeout(() => {
        setStatus((current) => (current === 'entering' ? 'active' : current));
      }, 320);

      // 3. Start minimum display duration timer
      minDurationTimerRef.current = setTimeout(() => {
        minDurationElapsedRef.current = true;
        evaluateReadyState();
      }, MIN_DISPLAY_DURATION_MS);

      // 4. Set watchdog safety timeout so loader never gets stuck
      watchdogTimerRef.current = setTimeout(() => {
        console.warn('DraftWorks transition watchdog timed out. Forcing exit.');
        destinationReadyRef.current = true;
        minDurationElapsedRef.current = true;
        triggerExit();
      }, WATCHDOG_TIMEOUT_MS);

      // 5. Trigger Next.js router navigation
      try {
        router.push(href);
      } catch (err) {
        console.error('Navigation failed:', err);
        // A synchronous navigation error should not leave the overlay active.
        destinationReadyRef.current = true;
        minDurationElapsedRef.current = true;
        triggerExit();
      }
    },
    [status, clearAllTimers, evaluateReadyState, router, triggerExit]
  );

  // Handle browser Back and Forward navigation (popstate)
  useEffect(() => {
    const handlePopState = () => {
      clearAllTimers();
      transitionStartRef.current = Date.now();
      targetPathRef.current = null; // History navigation resolves against the committed pathname.
      minDurationElapsedRef.current = false;
      destinationReadyRef.current = false;
      setStatus('entering');

      entranceTimerRef.current = setTimeout(() => {
        setStatus((c) => (c === 'entering' ? 'active' : c));
      }, 320);

      minDurationTimerRef.current = setTimeout(() => {
        minDurationElapsedRef.current = true;
        evaluateReadyState();
      }, MIN_DISPLAY_DURATION_MS);

      watchdogTimerRef.current = setTimeout(() => {
        destinationReadyRef.current = true;
        minDurationElapsedRef.current = true;
        triggerExit();
      }, WATCHDOG_TIMEOUT_MS);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [clearAllTimers, evaluateReadyState, triggerExit]);

  // Intercept all internal document clicks on <a> tags
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Ignore external protocols, anchors, tel, mailto, target="_blank", or modifier keys
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        anchor.target === '_blank' ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.button !== 0 // Only left clicks
      ) {
        return;
      }

      // Check if target points to the current pathname
      try {
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(href, window.location.origin);
        if (currentUrl.pathname === targetUrl.pathname && currentUrl.search === targetUrl.search) {
          // Navigating to exact same page; don't trigger loader
          return;
        }
      } catch {
        return;
      }

      // Intercept and coordinate transition
      e.preventDefault();
      triggerNavigation(href);
    };

    document.addEventListener('click', handleGlobalClick, true);
    return () => document.removeEventListener('click', handleGlobalClick, true);
  }, [triggerNavigation]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => clearAllTimers();
  }, [clearAllTimers]);

  return (
    <PageTransitionContext.Provider
      value={{
        status,
        triggerNavigation,
        reportDestinationReady,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
}
