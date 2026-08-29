'use client';

import { m, useReducedMotion } from 'motion/react';

const AnimatedRule = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className="hero-rule"
      aria-hidden="true"
      initial={shouldReduceMotion ? false : { scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    />
  );
};

export default AnimatedRule;
