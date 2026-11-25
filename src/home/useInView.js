import { useEffect, useRef, useState } from 'react';

/** Tracks whether an element is on screen. Starts `true` so server HTML and the first client render match. */
export const useInView = (rootMargin = '0px') => {
  const ref = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin });
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, inView];
};
