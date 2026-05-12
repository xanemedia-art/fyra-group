import { useEffect, useRef } from "react";

export function useHeroParallax() {
  const heroRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const parallaxFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (parallaxFrameRef.current !== null) {
        cancelAnimationFrame(parallaxFrameRef.current);
      }

      parallaxFrameRef.current = requestAnimationFrame(() => {
        const heroEl = heroRef.current;
        const imageEl = imageRef.current;
        if (!heroEl || !imageEl) return;

        const scrollY = window.scrollY;
        const heroHeight = heroEl.offsetHeight;

        // Only apply while hero is partially visible
        if (scrollY > heroHeight + 100) return;

        const offset = scrollY * 0.4;
        const scale = 1 + scrollY * 0.0005;
        const blur = Math.min(scrollY * 0.05, 8);

        imageEl.style.transform = `translateY(${offset}px) scale(${scale})`;
        imageEl.style.filter = `blur(${blur}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (parallaxFrameRef.current !== null) {
        cancelAnimationFrame(parallaxFrameRef.current);
      }
    };
  }, []);

  return { heroRef, imageRef };
}
