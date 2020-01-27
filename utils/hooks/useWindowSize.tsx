import * as React from 'react';
import { useIsomorphicEffect } from './useIsomorphicEffect';

export function useWindowSize(initialWidth = Infinity, initialHeight = Infinity) {
  // Initial setup for the mobile view state
  const [width, setWidth] = React.useState(initialWidth);
  const [height, setHeight] = React.useState(initialHeight);

  // Monitors resolution change
  useIsomorphicEffect(() => {
    let current = 0;

    // On mount
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    // A debounced way of handling resolution updates.
    const handler = () => {
      cancelAnimationFrame(current);

      current = requestAnimationFrame(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      });
    };

    window.addEventListener('resize', handler);

    return () => {
      cancelAnimationFrame(current);
      window.removeEventListener('resize', handler);
    };
  }, []);

  return { width, height };
}
