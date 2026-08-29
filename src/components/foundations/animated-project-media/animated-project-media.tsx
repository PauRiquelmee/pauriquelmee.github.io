'use client';

import type { ReactNode } from 'react';
import { m, useReducedMotion } from 'motion/react';

export type AnimatedProjectMediaProps = {
  children: ReactNode;
};

const AnimatedProjectMedia = ({ children }: AnimatedProjectMediaProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.figure
      className="project-media relative my-8 aspect-[16/10] overflow-hidden border border-ink bg-accent-dark"
      initial={shouldReduceMotion ? false : { y: 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.figure>
  );
};

export default AnimatedProjectMedia;
