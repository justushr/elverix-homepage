"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { useLenis } from "../lib/smooth-scroll";

export function Modal({ children, title }: { children: ReactNode; title: string }) {
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const close = () => router.back();

  useEffect(() => {
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    lenis?.stop();
    panelRef.current?.focus();

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      lenis?.start();
    };
  }, [lenis]);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    panel.addEventListener("keydown", handleKeyDown);
    return () => panel.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 z-[80]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={close}
        className="fixed inset-0 bg-ink/50 backdrop-blur-sm"
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={close}
        aria-label="Schließen"
        className="fixed right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-paper text-ink shadow-soft transition-transform hover:scale-105"
      >
        <X size={20} />
      </button>

      <div className="relative h-full overflow-y-auto" data-lenis-prevent>
        <div className="flex min-h-full items-start justify-center pb-6 pt-16 sm:px-6 sm:pb-10">
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-linen shadow-lift focus:outline-none sm:rounded-3xl sm:border sm:border-line"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
