"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { ChevronsLeftRight } from "lucide-react";

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Vorher",
  afterLabel = "Nachher",
  className = "",
}: {
  before: ReactNode;
  after: ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    containerRef.current?.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    updateFromClientX(event.clientX);
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 20 : 5;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((p) => Math.max(0, p - step));
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((p) => Math.min(100, p + step));
    } else if (event.key === "Home") {
      event.preventDefault();
      setPosition(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setPosition(100);
    }
  };

  useEffect(() => {
    if (prefersReducedMotion) return;
    const nudgeOut = setTimeout(() => setPosition(58), 500);
    const nudgeBack = setTimeout(() => setPosition(50), 1100);
    return () => {
      clearTimeout(nudgeOut);
      clearTimeout(nudgeBack);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
      className={`relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-3xl border border-line shadow-soft sm:aspect-[16/10] ${className}`}
    >
      <div className="absolute inset-0">{after}</div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        {before}
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-linen backdrop-blur">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-bordeaux-deep/90 px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-linen backdrop-blur">
        {afterLabel}
      </span>

      <div
        role="slider"
        tabIndex={0}
        aria-label="Vorher-Nachher-Vergleich"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)} Prozent, ${afterLabel}-Ansicht sichtbar`}
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
        className="absolute inset-y-0 z-10 flex w-10 -translate-x-1/2 cursor-ew-resize items-center justify-center focus:outline-none"
        style={{ left: `${position}%` }}
      >
        <span className="absolute inset-y-0 w-px bg-linen/90" />
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line bg-linen text-ink shadow-soft">
          <ChevronsLeftRight size={18} />
        </span>
      </div>
    </div>
  );
}
