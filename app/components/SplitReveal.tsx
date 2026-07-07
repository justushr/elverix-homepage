"use client";

import { motion } from "motion/react";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

export function SplitReveal({
  text,
  as = "h1",
  className = "",
  wordClassName = "",
  delay = 0,
  trigger = "inView",
}: {
  text: string;
  as?: Tag;
  className?: string;
  wordClassName?: string;
  delay?: number;
  trigger?: "mount" | "inView";
}) {
  const Component = as;
  const words = text.split(" ");

  const viewportProps =
    trigger === "mount"
      ? { initial: "hidden", animate: "visible" as const }
      : {
          initial: "hidden",
          whileInView: "visible" as const,
          viewport: { once: true, margin: "-10% 0px" },
        };

  return (
    <Component className={className} aria-label={text}>
      <span aria-hidden="true" className="block">
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden pb-[0.15em] align-bottom">
            <motion.span
              className={`inline-block ${wordClassName}`}
              variants={{
                hidden: { y: "110%" },
                visible: {
                  y: "0%",
                  transition: {
                    duration: 0.9,
                    delay: delay + index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              {...viewportProps}
            >
              {word}
              {index < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </Component>
  );
}
