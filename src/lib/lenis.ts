import type Lenis from "lenis";

// A single shared Lenis instance, set by <SmoothScroll /> once mounted.
// Components that need to trigger a scroll (nav anchors, route changes)
// go through smoothScrollTo() so they ride the same smoothing rather than
// fighting it with a native scrollIntoView/scrollTo call.
let instance: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null) {
  instance = lenis;
}

interface SmoothScrollOptions {
  offset?: number;
  immediate?: boolean;
}

export function smoothScrollTo(target: string | number | HTMLElement, { offset = 0, immediate = false }: SmoothScrollOptions = {}) {
  if (instance) {
    // Force a synchronous recalculation of the scrollable height first.
    // Lenis's own ResizeObserver-driven recalculation is async, so right
    // after a route change (old page's content swapped for a much taller
    // one) it can still be holding the previous page's height — which
    // silently clamps scrollTo's target to that stale, shorter limit.
    instance.resize();
    instance.scrollTo(target, { offset, immediate, duration: 1.3 });
    return;
  }

  // Fallback for reduced-motion users / before Lenis has mounted.
  const behavior: ScrollBehavior = immediate ? "auto" : "smooth";
  if (typeof target === "number") {
    window.scrollTo({ top: target + offset, behavior });
    return;
  }
  const el = typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior });
}
