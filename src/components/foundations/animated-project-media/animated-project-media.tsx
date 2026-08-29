"use client";

import type { ReactNode } from "react";
import { m, useReducedMotion } from "motion/react";

export type AnimatedProjectMediaProps = {
  children: ReactNode;
};

export default function AnimatedProjectMedia({
  children,
}: AnimatedProjectMediaProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.figure
      className="project-media"
      initial={shouldReduceMotion ? false : { opacity: 0.55, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.figure>
  );
}
