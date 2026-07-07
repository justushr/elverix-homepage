"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { animate, useInView, useReducedMotion } from "motion/react";
import { useLenis } from "./smooth-scroll";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export function useHasWebGL() {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  return hasWebGL;
}

export function useCountUp(
  target: number,
  options?: { duration?: number; decimals?: number }
) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);
  const duration = options?.duration ?? 1.6;
  const decimals = options?.decimals ?? 0;

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(latest),
    });

    return () => controls.stop();
  }, [isInView, prefersReducedMotion, target, duration]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return { ref, display: formatted };
}

/**
 * Smoothly scrolls to in-page anchors via the shared Lenis instance when
 * already on the homepage; on any other route it lets the Link perform a
 * normal navigation to `/#section`, where the browser lands on the hash.
 */
export function useAnchorNav() {
  const pathname = usePathname();
  const lenis = useLenis();

  return useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      const [path, hash] = href.split("#");
      if (!hash || (path !== "" && path !== "/") || pathname !== "/") return;

      event.preventDefault();
      const target = document.getElementById(hash);
      if (!target) return;

      if (lenis) {
        lenis.scrollTo(target, { offset: -88, duration: 1.3 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [pathname, lenis]
  );
}
