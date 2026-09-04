import { useEffect } from "react";
import Lenis from "lenis";
import { setLenisInstance } from "../lib/lenis";

// Drives buttery, inertia-based scrolling for the whole site — identical
// easing whether the visitor scrolls down or back up. Skipped entirely for
// prefers-reduced-motion, where native (instant) scrolling stays in place.
export function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
    });
    setLenisInstance(lenis);

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  return null;
}
